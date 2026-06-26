'use client';

import { useState, useRef, useEffect, useCallback, type ComponentType } from 'react';
import { Cog8Tooth, ChartPie, ArrowPath, Cube, Link, ArrowTrendingUp, ChevronDown } from './icons';

type FeatureIcon = ComponentType<{ size?: number; className?: string }>;

const FEATURES: Array<{
  id: number;
  title: string;
  desc: string;
  metric: string;
  metricLabel: string;
  gridStyle: React.CSSProperties;
  Icon: FeatureIcon;
  accent: string;
}> = [
  {
    id: 0,
    title: 'AI Automation Engine',
    desc: 'Process tasks at scale with zero configuration. Our neural orchestration layer learns your data structure and handles schema drift automatically.',
    metric: '10,000+',
    metricLabel: 'tasks / sec',
    gridStyle: { gridColumn: 'span 2' },
    Icon: Cog8Tooth,
    accent: '#FFC801',
  },
  {
    id: 1,
    title: 'Real-time Analytics',
    desc: 'Live dashboards with sub-50ms latency. Watch your automation pipeline execute in real-time with granular observability at every node.',
    metric: '<50ms',
    metricLabel: 'latency',
    gridStyle: { gridColumn: 'span 1', gridRow: 'span 2' },
    Icon: ChartPie,
    accent: '#5AA9BC',
  },
  {
    id: 2,
    title: 'Intelligent Workflows',
    desc: 'Build once, deploy everywhere. Our visual workflow builder compiles to optimized execution graphs with zero performance penalty.',
    metric: '500+',
    metricLabel: 'integrations',
    gridStyle: { gridColumn: 'span 1' },
    Icon: ArrowPath,
    accent: '#FF9932',
  },
  {
    id: 3,
    title: 'Secure by Default',
    desc: 'SOC2 Type II certified, GDPR compliant. End-to-end encryption, RBAC, and audit trails baked in — not bolted on.',
    metric: 'SOC2',
    metricLabel: 'Type II',
    gridStyle: { gridColumn: 'span 1' },
    Icon: Cube,
    accent: '#FFC801',
  },
  {
    id: 4,
    title: 'API-First Architecture',
    desc: 'Connect any tool with 500+ native integrations. RESTful and GraphQL APIs with sub-10ms response time and 99.99% availability.',
    metric: '99.99%',
    metricLabel: 'uptime SLA',
    gridStyle: { gridColumn: 'span 1' },
    Icon: Link,
    accent: '#5AA9BC',
  },
  {
    id: 5,
    title: 'Global Edge Network',
    desc: '50+ edge nodes across 6 continents. Your workflows execute in the region closest to your data — minimizing latency, maximizing throughput.',
    metric: '50+',
    metricLabel: 'edge regions',
    gridStyle: { gridColumn: 'span 2' },
    Icon: ArrowTrendingUp,
    accent: '#FF9932',
  },
];

export default function Features() {
  const [isMobile, setIsMobile]           = useState(false);
  const [accordionOpen, setAccordionOpen] = useState<number | null>(null);
  const hoveredBentoRef = useRef<number | null>(null);
  const prevIsMobileRef = useRef<boolean>(false);

  const checkMobile = useCallback(() => window.innerWidth < 768, []);

  useEffect(() => {
    const initial = checkMobile();
    setIsMobile(initial);
    prevIsMobileRef.current = initial;

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

  const SectionHeader = () => (
    <header style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <p className="section-label">
        <Cube size={14} />
        Platform Capabilities
      </p>
      <h2 id="features-heading" className="section-title">
        Everything you need to automate at scale
      </h2>
      <div className="divider" />
    </header>
  );

  /* ── Mobile: Accordion ── */
  if (isMobile) {
    return (
      <section id="features" className="features-section section-padding" aria-labelledby="features-heading">
        <div className="container">
          <SectionHeader />

          <dl className="accordion-list" role="list">
            {FEATURES.map((f) => {
              const isOpen = accordionOpen === f.id;
              const Icon = f.Icon;
              return (
                <div key={f.id} className={`accordion-item${isOpen ? ' open' : ''}`} role="listitem">
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
                          background: `${f.accent}1A`,
                          border: `1px solid ${f.accent}44`,
                          color: f.accent,
                          flexShrink: 0,
                        }}
                        aria-hidden="true"
                      >
                        <Icon size={18} />
                      </span>
                      {f.title}
                      <span className="accordion-chevron">
                        <ChevronDown size={18} />
                      </span>
                    </button>
                  </dt>
                  <dd
                    id={`accordion-panel-${f.id}`}
                    className="accordion-panel"
                    role="region"
                    aria-labelledby={`accordion-trigger-${f.id}`}
                    style={{ maxHeight: isOpen ? '320px' : '0' }}
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
    <section id="features" className="features-section section-padding" aria-labelledby="features-heading">
      <div className="container">
        <SectionHeader />

        <div className="bento-grid" role="list" aria-label="Feature list" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {FEATURES.map((f) => {
            const Icon = f.Icon;
            return (
              <article
                key={f.id}
                className="bento-card anim-scale-in"
                style={{ ...f.gridStyle, animationDelay: `${f.id * 0.07}s` }}
                role="listitem"
                tabIndex={0}
                aria-label={f.title}
                onMouseEnter={() => { hoveredBentoRef.current = f.id; }}
                onMouseLeave={() => { hoveredBentoRef.current = null; }}
                onFocus={() => { hoveredBentoRef.current = f.id; }}
                onBlur={() => { hoveredBentoRef.current = null; }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div
                    className="bento-icon"
                    style={{ background: `${f.accent}14`, border: `1px solid ${f.accent}3D`, color: f.accent, margin: 0, flexShrink: 0 }}
                    aria-hidden="true"
                  >
                    <Icon size={24} />
                  </div>
                  <div className="bento-metric" style={{ borderColor: `${f.accent}30` }}>
                    <span className="bento-metric-value" style={{ color: f.accent }}>{f.metric}</span>
                    <span className="bento-metric-label">{f.metricLabel}</span>
                  </div>
                </div>
                <h3 className="bento-title">{f.title}</h3>
                <p className="bento-desc">{f.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
