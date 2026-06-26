'use client';

import { useEffect } from 'react';

/* Adds `.visible` to any .anim-* element when it enters the viewport.
   This enables scroll-triggered entry animations without pre-rendering them visible. */
export default function ScrollAnimator() {
  useEffect(() => {
    const selector = '.anim-fade-up, .anim-fade-in, .anim-scale-in';
    const targets = Array.from(document.querySelectorAll<HTMLElement>(selector)).filter(
      (el) => !el.classList.contains('visible')
    );

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return null;
}
