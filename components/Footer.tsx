import Link from 'next/link';

const FOOTER_LINKS = {
  Product: ['Features', 'Pricing', 'Changelog', 'Roadmap', 'Status'],
  Company:  ['About', 'Blog', 'Careers', 'Press', 'Contact'],
  Legal:    ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'DPA'],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo">
      <div className="container">
        <div className="footer-inner">
          {/* Brand col */}
          <div>
            <Link href="/" className="nav-logo" aria-label="DataFlow AI home" style={{ display: 'inline-flex', textDecoration: 'none' }}>
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <rect width="32" height="32" rx="8" fill="#7C3AED" />
                <path d="M8 16h4l3-7 4 14 3-7 2 0" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                DataFlow<span style={{ color: 'var(--accent-light)' }}>AI</span>
              </span>
            </Link>
            <p className="footer-brand-desc">
              Next-gen AI automation platform. Build intelligent workflows,
              automate at scale, and ship faster than ever.
            </p>
          </div>

          {/* Link cols */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <nav key={heading} aria-label={`${heading} links`}>
              <h3 className="footer-col-title">{heading}</h3>
              <ul className="footer-links" role="list">
                {links.map((link) => (
                  <li key={link}>
                    <Link href="#" aria-label={link}>{link}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>© {year} DataFlow AI, Inc. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            {/* Social SVGs — replace with provided assets */}
            {[
              { label: 'Twitter / X', path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
              { label: 'GitHub', path: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22' },
              { label: 'LinkedIn', path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z' },
            ].map(({ label, path }) => (
              <a key={label} href="#" aria-label={label} style={{ color: 'var(--text-muted)', transition: 'color 150ms ease-out' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d={path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
