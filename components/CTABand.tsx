import { ArrowTrendingUp } from './icons';

export default function CTABand() {
  return (
    <section
      aria-labelledby="cta-heading"
      style={{
        background: 'linear-gradient(135deg, #172B36 0%, #0D3D49 50%, #172B36 100%)',
        borderTop: '1px solid rgba(255,200,1,0.15)',
        borderBottom: '1px solid rgba(255,200,1,0.15)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Gold orb */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: 600, height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,200,1,0.12) 0%, transparent 65%)',
          top: '50%', left: '50%',
          transform: 'translate(-50%,-50%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ paddingBlock: '6rem', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <p className="section-label" style={{ justifyContent: 'center' }}>
          <ArrowTrendingUp size={14} />
          Start today — no credit card required
        </p>

        <h2
          id="cta-heading"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.4rem, 5vw, 4rem)',
            fontWeight: 800,
            letterSpacing: '-0.05em',
            lineHeight: 1.05,
            color: 'var(--arctic)',
            marginBottom: '1.25rem',
          }}
        >
          Stop building pipelines.<br />
          <span
            style={{
              background: 'linear-gradient(115deg, #FFD740, #FFC801, #FF9932)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Start shipping products.
          </span>
        </h2>

        <p
          style={{
            fontSize: '1.1rem',
            color: 'var(--text-secondary)',
            maxWidth: 500,
            margin: '0 auto 2.5rem',
            lineHeight: 1.8,
          }}
        >
          Join 500+ engineering teams who automated the boring parts
          and reclaimed 20+ hours every sprint.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#pricing" className="btn btn-primary btn-lg" aria-label="Get started free">
            Get started free
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#features" className="btn btn-secondary btn-lg" aria-label="See all features">
            See all features
          </a>
        </div>

        {/* Social proof micro-line */}
        <p style={{ marginTop: '2rem', fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}>
          Trusted by teams at{' '}
          {['FinStack', 'Scalepath', 'Loopsy', 'Orbita'].map((co, i, arr) => (
            <span key={co}>
              <span style={{ color: 'var(--text-secondary)' }}>{co}</span>
              {i < arr.length - 1 ? ' · ' : ''}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
