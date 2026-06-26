'use client';

import { useEffect, useRef } from 'react';
import { getPrice, type Billing, type Currency, type Tier } from '@/lib/pricingMatrix';

interface PriceDisplayProps {
  tier: Tier;
  defaultCurrency?: Currency;
  defaultBilling?: Billing;
}

export default function PriceDisplay({
  tier,
  defaultCurrency = 'USD',
  defaultBilling  = 'monthly',
}: PriceDisplayProps) {
  const symbolRef = useRef<HTMLSpanElement>(null);
  const valueRef  = useRef<HTMLSpanElement>(null);

  const initial = getPrice(tier, defaultCurrency, defaultBilling);

  useEffect(() => {
    const handler = (e: Event) => {
      const { currency, billing } = (
        e as CustomEvent<{ currency: Currency; billing: Billing }>
      ).detail;

      const price = getPrice(tier, currency, billing);

      /* Direct DOM mutation — no setState, no React re-render, no layout reflow */
      if (symbolRef.current) symbolRef.current.textContent = price.symbol;
      if (valueRef.current)  valueRef.current.textContent  = String(price.value);
    };

    window.addEventListener('pricing:update', handler);
    return () => window.removeEventListener('pricing:update', handler);
  }, [tier]);

  return (
    <p className="price-display" aria-live="polite" aria-atomic="true">
      <span ref={symbolRef} className="price-symbol" aria-hidden="true">
        {initial.symbol}
      </span>
      <span ref={valueRef} className="price-value">
        {initial.value}
      </span>
      <span className="price-period" aria-label="per month">&nbsp;/ mo</span>
    </p>
  );
}
