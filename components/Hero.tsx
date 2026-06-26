export default function Hero() {
  return (
    <section className="hero section-padding" aria-labelledby="hero-heading">
      {/* Background orbs */}
      <div className="hero-bg-orb hero-orb-1" aria-hidden="true" />
      <div className="hero-bg-orb hero-orb-2" aria-hidden="true" />

      <div className="container">
        <div className="hero-inner">
          {/* Left — copy */}
          <div>
            <div className="hero-badge anim-fade-in visible">
              {/* Badge SVG — replace with provided asset */}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <circle cx="7" cy="7" r="6" stroke="#5EEAD4" strokeWidth="1.5" />
                <path d="M4 7l2 2 4-4" stroke="#5EEAD4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Now in Public Beta — 500+ teams onboarded
            </div>

            <h1 id="hero-heading" className="hero-title anim-fade-up visible delay-1">
              Automate Everything.<br />
              <span className="gradient-text">AI That Works.</span>
            </h1>

            <p className="hero-desc anim-fade-up visible delay-2">
              DataFlow AI is the next-generation automation platform that connects your
              data, tools, and teams — then runs them on autopilot. Build once, scale forever.
            </p>

            <div className="hero-ctas anim-fade-up visible delay-3">
              <a href="#pricing" className="btn btn-primary btn-lg" aria-label="Start your free trial">
                {/* Arrow SVG */}
                Start Free Trial
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#features" className="btn btn-secondary btn-lg" aria-label="See how DataFlow AI works">
                See How It Works
              </a>
            </div>

            <div className="hero-stats anim-fade-up visible delay-4">
              <div className="stat-item">
                <span className="stat-value">10K+</span>
                <span className="stat-label">tasks / second</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">99.99%</span>
                <span className="stat-label">uptime SLA</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">500+</span>
                <span className="stat-label">integrations</span>
              </div>
            </div>
          </div>

          {/* Right — visual card */}
          <div className="hero-visual anim-scale-in visible delay-2">
            <div className="hero-card" role="img" aria-label="DataFlow AI pipeline visualization">
              <div className="hero-card-header">
                {/* Pipeline icon SVG — replace with provided asset */}
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
                  <rect width="36" height="36" rx="10" fill="rgba(45,212,191,0.15)" />
                  <path d="M10 18h4l2-5 4 10 2-5h4" stroke="#5EEAD4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                    Live Pipeline
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>processing 4,821 events/s</div>
                </div>
                <div className="tag tag-green" style={{ marginLeft: 'auto' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--green)', display: 'inline-block' }} />
                  Live
                </div>
              </div>

              <div className="hero-pipeline">
                {[
                  { label: 'Data Ingestion', icon: '📥', color: '#2DD4BF' },
                  { label: 'AI Processing', icon: '🧠', color: '#06B6D4' },
                  { label: 'Enrichment Layer', icon: '⚡', color: '#10B981' },
                  { label: 'Delivery & Alert', icon: '🚀', color: '#F59E0B' },
                ].map((step, i) => (
                  <div key={i}>
                    <div className="pipeline-step">
                      <div className="step-icon" style={{ background: `${step.color}22`, border: `1px solid ${step.color}44` }}>
                        <span style={{ fontSize: '1rem' }}>{step.icon}</span>
                      </div>
                      <span>{step.label}</span>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginLeft: 'auto', opacity: 0.6 }} aria-hidden="true">
                        <circle cx="7" cy="7" r="5" stroke="#10B981" strokeWidth="1.5" />
                        <path d="M4.5 7l1.5 1.5 3-3" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    {i < 3 && <div className="pipeline-arrow">↓</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
