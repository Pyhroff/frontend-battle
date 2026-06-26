'use client';

import { useState } from 'react';
import type { Currency, Billing } from '@/lib/pricingMatrix';

export default function PricingControls() {
  const [billing, setBilling]   = useState<Billing>('monthly');
  const [currency, setCurrency] = useState<Currency>('USD');

  /* Dispatch to window — siblings (PriceDisplay) listen independently.
     This component re-renders only itself; no prop-drilling, no context, no global reflow. */
  const dispatch = (b: Billing, c: Currency) => {
    window.dispatchEvent(
      new CustomEvent<{ billing: Billing; currency: Currency }>('pricing:update', {
        detail: { billing: b, currency: c },
      })
    );
  };

  const handleBilling = (b: Billing) => {
    setBilling(b);
    dispatch(b, currency);
  };

  const handleCurrency = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const c = e.target.value as Currency;
    setCurrency(c);
    dispatch(billing, c);
  };

  return (
    <div className="pricing-controls" role="group" aria-label="Pricing options">
      {/* Billing toggle */}
      <div className="billing-toggle" role="group" aria-label="Billing cycle">
        <button
          className={`toggle-btn${billing === 'monthly' ? ' active' : ''}`}
          onClick={() => handleBilling('monthly')}
          aria-pressed={billing === 'monthly'}
        >
          Monthly
        </button>
        <button
          className={`toggle-btn${billing === 'annual' ? ' active' : ''}`}
          onClick={() => handleBilling('annual')}
          aria-pressed={billing === 'annual'}
        >
          Annual
          <span className="discount-badge" aria-label="20% discount">-20%</span>
        </button>
      </div>

      {/* Currency selector */}
      <label htmlFor="currency-select" style={{ display: 'none' }}>Currency</label>
      <select
        id="currency-select"
        className="currency-select"
        value={currency}
        onChange={handleCurrency}
        aria-label="Select display currency"
      >
        <option value="USD">USD ($)</option>
        <option value="INR">INR (₹)</option>
        <option value="EUR">EUR (€)</option>
      </select>
    </div>
  );
}
