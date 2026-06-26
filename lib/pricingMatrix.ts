export type Currency = 'USD' | 'INR' | 'EUR';
export type Billing = 'monthly' | 'annual';
export type Tier = 'starter' | 'pro' | 'scale';

export const PRICING_MATRIX = {
  tiers: {
    starter: { base: 29,  name: 'Starter', desc: 'For solo builders and indie hackers.' },
    pro:     { base: 79,  name: 'Pro',     desc: 'For growing teams and agencies.' },
    scale:   { base: 199, name: 'Scale',   desc: 'Enterprise-grade AI automation.' },
  },
  currencies: {
    USD: { symbol: '$', tariff: 1.00,  label: 'USD ($)' },
    INR: { symbol: '₹', tariff: 84.00, label: 'INR (₹)' },
    EUR: { symbol: '€', tariff: 0.93,  label: 'EUR (€)' },
  },
  annualDiscount: 0.20,
} as const;

export function getPrice(tier: Tier, currency: Currency, billing: Billing) {
  const base              = PRICING_MATRIX.tiers[tier].base;
  const { symbol, tariff } = PRICING_MATRIX.currencies[currency];
  const discount          = billing === 'annual' ? 1 - PRICING_MATRIX.annualDiscount : 1;
  const value             = Math.round(base * tariff * discount);
  return { symbol, value };
}

export const TIER_FEATURES: Record<Tier, string[]> = {
  starter: [
    '5,000 automation runs / mo',
    '3 AI workflows',
    'Basic analytics',
    'Email support',
    '1 workspace',
  ],
  pro: [
    'Unlimited automation runs',
    'Unlimited AI workflows',
    'Advanced analytics & exports',
    'Priority support',
    '10 workspaces',
    'Custom integrations',
  ],
  scale: [
    'Everything in Pro',
    'Dedicated infrastructure',
    'SLA 99.99% uptime',
    'Enterprise SSO & RBAC',
    'Unlimited workspaces',
    'White-label options',
    'Dedicated CSM',
  ],
};
