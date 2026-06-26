import { ChevronLeft, ChevronRight, ArrowTrendingUp } from './icons';

const TESTIMONIALS = [
  {
    quote:
      '"DataFlow AI cut our data pipeline build time from weeks to hours. The AI automation layer is genuinely mind-blowing — it figured out our schema on its own."',
    name: 'Priya Nair',
    role: 'Head of Data, FinStack',
    initials: 'PN',
    color: '#2DD4BF',
  },
  {
    quote:
      '"We process 2M+ records daily with zero manual intervention. The real-time analytics dashboard alone is worth the price. Best SaaS purchase this year."',
    name: 'Marcus Wei',
    role: 'CTO, Scalepath',
    initials: 'MW',
    color: '#06B6D4',
  },
  {
    quote:
      '"Switched from a custom Kafka setup to DataFlow AI in a weekend. Saved us three engineers. The workflow builder is incredibly intuitive for non-technical stakeholders too."',
    name: 'Anika Svensson',
    role: 'VP Engineering, Loopsy',
    initials: 'AS',
    color: '#10B981',
  },
];

/* Placeholder company logos — replace with provided SVG assets */
const LOGOS = [
  { name: 'FinStack', viewBox: '0 0 80 24', path: 'M4 12h12M10 6v12M24 8h8a4 4 0 010 8h-8V8zM40 8h12M46 8v12M58 12c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4zM70 8h8l-4 8-4-8z' },
  { name: 'Scalepath', viewBox: '0 0 90 24', path: 'M6 16l4-8 4 8M8 13h4M20 8v12h8M36 8c-2.2 0-4 1.8-4 4s1.8 4 4 4h4M48 8h8v4h-8v4h8M64 8v12M60 8h8M76 8c0 4 8 4 8 8s-8 4-8 8' },
  { name: 'Loopsy', viewBox: '0 0 70 24', path: 'M8 12a4 4 0 100 .001M16 12h4M24 8v12h4a4 4 0 000-8h-4M38 8h12M44 8v12M58 16l4-8 4 8M60 13h4' },
  { name: 'Orbita', viewBox: '0 0 75 24', path: 'M8 12a4 4 0 100 .001M16 8h4a4 4 0 010 8h-4V8zM28 8h12v4h-8v4h8M48 8v12M44 8h8M60 8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z' },
];

export default function SocialProof() {
  return (
    <section
      id="testimonials"
      className="section-padding"
      aria-labelledby="testimonials-heading"
      style={{ background: 'var(--bg-elevated)' }}
    >
      <div className="container">
        <header className="anim-fade-up testimonials-head">
          <div>
            <p className="section-label">
              <ArrowTrendingUp size={14} />
              Customer Stories
            </p>
            <h2 id="testimonials-heading" className="section-title">
              Trusted by engineers at scale
            </h2>
            <p className="section-desc">
              From seed-stage startups to publicly-listed enterprises — DataFlow AI handles
              the complexity so your team can focus on what matters.
            </p>
            <div className="divider" />
          </div>
          <div className="testimonials-nav" role="group" aria-label="Testimonial navigation">
            <button type="button" aria-label="Previous testimonial"><ChevronLeft size={18} /></button>
            <button type="button" aria-label="Next testimonial"><ChevronRight size={18} /></button>
          </div>
        </header>

        <div className="testimonials-grid" role="list">
          {TESTIMONIALS.map((t, i) => (
            <article
              key={i}
              className={`testimonial-card anim-fade-up delay-${i + 1}`}
              role="listitem"
              aria-label={`Testimonial from ${t.name}`}
            >
              {/* Quote marks SVG */}
              <svg width="24" height="18" viewBox="0 0 24 18" fill="none" style={{ marginBottom: '1rem', opacity: 0.4 }} aria-hidden="true">
                <path d="M0 18V10.5C0 4.5 4 1.5 6 0l1.5 1.5C5.5 3 4 5 4 7.5h4V18H0zm14 0V10.5C14 4.5 18 1.5 20 0l1.5 1.5C19.5 3 18 5 18 7.5h4V18h-8z" fill="var(--teal)" />
              </svg>
              <blockquote className="testimonial-quote">{t.quote}</blockquote>
              <footer className="testimonial-author">
                <div
                  className="author-avatar"
                  style={{ background: t.color }}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <p className="author-name">{t.name}</p>
                  <p className="author-role">{t.role}</p>
                </div>
              </footer>
            </article>
          ))}
        </div>

        {/* Logo strip */}
        <div className="logo-strip" aria-label="Companies using DataFlow AI" role="list">
          {LOGOS.map((logo) => (
            <div key={logo.name} role="listitem" aria-label={logo.name}>
              <svg
                viewBox={logo.viewBox}
                fill="none"
                stroke="var(--text-secondary)"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="22"
                aria-label={`${logo.name} logo`}
              >
                <path d={logo.path} />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
