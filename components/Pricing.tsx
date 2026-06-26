import PricingControls from './PricingControls';
import PriceDisplay from './PriceDisplay';
import { ChartPie, XMark } from './icons';
import { PRICING_MATRIX, TIER_FEATURES, type Tier } from '@/lib/pricingMatrix';

const TIERS: Array<{ key: Tier; popular?: boolean }> = [
  { key: 'starter' },
  { key: 'pro',   popular: true },
  { key: 'scale' },
];

/* Features explicitly NOT in a tier — rendered with the provided x-mark SVG */
const EXCLUDED: Record<Tier, string[]> = {
  starter: ['Priority support', 'Custom integrations'],
  pro:     ['Dedicated infrastructure'],
  scale:   [],
};

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="section-padding"
      aria-labelledby="pricing-heading"
      style={{ background: 'var(--bg-base)' }}
    >
      <div className="container">
        {/* Header */}
        <header style={{ textAlign: 'center' }}>
          <p className="section-label" style={{ justifyContent: 'center' }}>
            <ChartPie size={14} />
            Transparent Pricing
          </p>
          <h2 id="pricing-heading" className="section-title">
            Simple pricing, powerful automation
          </h2>
          <p className="section-desc" style={{ marginInline: 'auto' }}>
            No hidden fees. No per-seat surprises. Pay for automation runs, not headcount.
            All plans include a 14-day free trial.
          </p>
          <div className="divider" style={{ marginInline: 'auto' }} />
        </header>

        {/*
          PricingControls is an isolated Client Component.
          It dispatches window CustomEvents — it does NOT pass state to siblings.
          Changing billing or currency triggers zero re-renders in this Server Component
          or any other section of the page.
        */}
        <PricingControls />

        {/* Pricing cards grid */}
        <div className="pricing-grid" role="list">
          {TIERS.map(({ key, popular }) => {
            const tier = PRICING_MATRIX.tiers[key];
            const features = TIER_FEATURES[key];

            return (
              <article
                key={key}
                className={`pricing-card anim-fade-up visible${popular ? ' popular' : ''}`}
                role="listitem"
                aria-label={`${tier.name} plan`}
                aria-describedby={`tier-desc-${key}`}
              >
                {popular && (
                  <div className="popular-badge" aria-label="Most popular plan">
                    Most Popular
                  </div>
                )}

                <p className="pricing-tier-name">{tier.name}</p>
                <p id={`tier-desc-${key}`} className="pricing-tier-desc">{tier.desc}</p>

                {/*
                  PriceDisplay is an isolated Client Component.
                  Receives window events and updates span.textContent directly —
                  no React re-render, no layout reflow. DevTools will show zero
                  component updates outside this span when pricing changes.
                */}
                <PriceDisplay tier={key} defaultCurrency="USD" defaultBilling="monthly" />

                <div className="pricing-divider" aria-hidden="true" />

                <ul className="pricing-features" aria-label={`${tier.name} plan features`}>
                  {features.map((feature) => (
                    <li key={feature} className="pricing-feature-item">
                      <svg
                        className="check-icon"
                        width="16" height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                      >
                        <circle cx="8" cy="8" r="7" fill="rgba(90,169,188,0.12)" stroke="rgba(90,169,188,0.4)" strokeWidth="1" />
                        <path d="M5 8l2 2 4-4" stroke="#5AA9BC" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                  {EXCLUDED[key].map((feature) => (
                    <li key={feature} className="pricing-feature-item muted">
                      <span className="x-icon"><XMark size={16} /></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pricing-cta">
                  <a
                    href="#"
                    className={`btn btn-lg ${popular ? 'btn-primary' : 'btn-secondary'}`}
                    aria-label={`Get started with the ${tier.name} plan`}
                  >
                    {popular ? 'Start Free Trial' : 'Get Started'}
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Trust signals */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '2rem',
            marginTop: '3rem',
            paddingTop: '2rem',
            borderTop: '1px solid var(--border)',
            color: 'var(--text-muted)',
            fontSize: '0.85rem',
          }}
          role="list"
          aria-label="Trust indicators"
        >
          {[
            { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', label: 'SOC2 certified' },
            { icon: 'M3 10h18M3 14h18M10 6L7 10l3 4M14 6l3 4-3 4', label: 'No credit card required' },
            { icon: 'M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z', label: 'Cancel anytime' },
            { icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z', label: '24/7 support' },
          ].map(({ icon, label }) => (
            <div key={label} role="listitem" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--teal-bright)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d={icon} />
              </svg>
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
