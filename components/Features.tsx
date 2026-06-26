'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

const FEATURES = [
  {
    id: 0,
    title: 'AI Automation Engine',
    desc: 'Process 10,000+ tasks per second with zero configuration. Our neural orchestration layer learns your data structure and handles schema drift automatically.',
    gridStyle: { gridColumn: 'span 2' },
    iconPath: 'M6 12h3l2-6 3 12 2-6h3',
    iconColor: '#7C3AED',
  },
  {
    id: 1,
    title: 'Real-time Analytics',
    desc: 'Live dashboards with sub-50ms latency. Watch your automation pipeline execute in real-time with granular observability at every node.',
    gridStyle: { gridColumn: 'span 1', gridRow: 'span 2' },
    iconPath: 'M3 3v18h18M7 12l4-4 4 4 4-4',
    iconColor: '#06B6D4',
  },
  {
    id: 2,
    title: 'Intelligent Workflows',
    desc: 'Build once, deploy everywhere. Our visual workflow builder compiles to optimized execution graphs with zero performance penalty.',
    gridStyle: { gridColumn: 'span 1' },
    iconPath: 'M5 3l14 0M5 9l9 0M5 15l11 0M5 21l7 0',
    iconColor: '#10B981',
  },
  {
    id: 3,
    title: 'Secure by Default',
    desc: 'SOC2 Type II certified, GDPR compliant. End-to-end encryption, RBAC, and audit trails baked in — not bolted on.',
    gridStyle: { gridColumn: 'span 1' },
    iconPath: 'M12 2l7 4v5c0 5.25-3.5 10-7 11-3.5-1-7-5.75-7-11V6l7-4z',
    iconColor: '#F59E0B',
  },
  {
    id: 4,
    title: 'API-First Architecture',
    desc: 'Connect any tool with 500+ native integrations. RESTful and GraphQL APIs with sub-10ms response time and 99.99% availability.',
    gridStyle: { gridColumn: 'span 1' },
    iconPath: 'M10 20l4-16M4 15l4 4-4 4M20 9l-4-4 4-4',
    iconColor: '#EF4444',
  },
  {
    id: 5,
    title: 'Global Edge Network',
    desc: '50+ edge nodes across 6 continents. Your workflows execute in the region closest to your data — minimizing latency, maximizing throughput.',
    gridStyle: { gridColumn: 'span 2' },
    iconPath: 'M12 2a10 10 0 100 20A10 10 0 0012 2zM2 12h20M12 2c-2.5 3-4 6.5-4 10s1.5 7 4 10M12 2c2.5 3 4 6.5 4 10s-1.5 7-4 10',
    iconColor: '#8B5CF6',
  },
];

export default function Features() {
  const [isMobile, setIsMobile]       = useState(false);
  const [accordionOpen, setAccordionOpen] = useState<number | null>(null);
  const hoveredBentoRef   = useRef<number | null>(null);
  const prevIsMobileRef   = useRef<boolean>(false);
  const initializedRef    = useRef(false);

  const checkMobile = useCallback(() => window.innerWidth < 768, []);

  useEffect(() => {
    const initial = checkMobile();
    setIsMobile(initial);
    prevIsMobileRef.current = initial;
    initializedRef.current = true;

    const ro = new ResizeObserver(() => {
      const nowMobile = checkMobile();
      if (nowMobile === prevIsMobileRef.current) return;

      /* Context Lock: transfer active bento index to accordion on breakpoint cross */
      if (nowMobile && hoveredBentoRef.current !== null) {
        setAccordionOpen(hoveredBentoRef.current);
      }

      setIsMobile(nowMobile);
      prevIsMobileRef.current = nowMobile;
    });

    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [checkMobile]);

  const toggleAccordion = (id: number) => {
    setAccordionOpen((prev) => (prev === id ? null : id));
  };

  /* ── Mobile: Accordion ── */
  if (isMobile) {
    return (
      <section
        id="features"
        className="features-section section-padding"
        aria-labelledby="features-heading"
      >
        <div className="container">
          <header>
            <p className="section-label" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <rect x="2" y="2" width="10" height="10" rx="2" stroke="#9F67FF" strokeWidth="1.5" />
                <path d="M5 7h4M7 5v4" stroke="#9F67FF" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              Platform Capabilities
            </p>
            <h2 id="features-heading" className="section-title">Everything you need to automate at scale</h2>
            <div className="divider" />
          </header>

          <dl className="accordion-list" role="list">
            {FEATURES.map((f) => {
              const isOpen = accordionOpen === f.id;
              return (
                <div
                  key={f.id}
                  className={`accordion-item${isOpen ? ' open' : ''}`}
                  role="listitem"
                >
                  <dt>
                    <button
                      className="accordion-trigger"
                      onClick={() => toggleAccordion(f.id)}
                      aria-expanded={isOpen}
                      aria-controls={`accordion-panel-${f.id}`}
                      id={`accordion-trigger-${f.id}`}
                    >
                      <span
                        style={{
                          width: 36, height: 36, borderRadius: 9,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          background: `${f.iconColor}22`,
                          border: `1px solid ${f.iconColor}55`,
                          flexShrink: 0,
                        }}
                        aria-hidden="true"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={f.iconColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d={f.iconPath} />
                        </svg>
                      </span>
                      {f.title}
                      <svg
                        className="accordion-chevron"
                        width="18" height="18" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                  </dt>
                  <dd
                    id={`accordion-panel-${f.id}`}
                    className="accordion-panel"
                    role="region"
                    aria-labelledby={`accordion-trigger-${f.id}`}
                    style={{ maxHeight: isOpen ? '300px' : '0' }}
                  >
                    <div className="accordion-panel-inner">{f.desc}</div>
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </section>
    );
  }

  /* ── Desktop: Bento Grid ── */
  return (
    <section
      id="features"
      className="features-section section-padding"
      aria-labelledby="features-heading"
    >
      <div className="container">
        <header style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <p className="section-label" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <rect x="2" y="2" width="10" height="10" rx="2" stroke="#9F67FF" strokeWidth="1.5" />
              <path d="M5 7h4M7 5v4" stroke="#9F67FF" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            Platform Capabilities
          </p>
          <h2 id="features-heading" className="section-title">
            Everything you need to automate at scale
          </h2>
          <div className="divider" />
        </header>

        <div
          className="bento-grid"
          role="list"
          aria-label="Feature list"
          style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}
        >
          {FEATURES.map((f) => (
            <article
              key={f.id}
              className="bento-card anim-scale-in visible"
              style={f.gridStyle}
              role="listitem"
              tabIndex={0}
              aria-label={f.title}
              onMouseEnter={() => { hoveredBentoRef.current = f.id; }}
              onMouseLeave={() => { hoveredBentoRef.current = null; }}
              onFocus={() =>    { hoveredBentoRef.current = f.id; }}
              onBlur={() =>     { hoveredBentoRef.current = null; }}
            >
              <div className="bento-icon" style={{ background: `${f.iconColor}18`, borderColor: `${f.iconColor}44` }} aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={f.iconColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d={f.iconPath} />
                </svg>
              </div>
              <h3 className="bento-title">{f.title}</h3>
              <p className="bento-desc">{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
