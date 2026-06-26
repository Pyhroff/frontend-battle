import Link from 'next/link';
import { Search } from './icons';

export default function NavBar() {
  return (
    <nav className="navbar" aria-label="Primary navigation">
      <Link href="/" className="nav-logo" aria-label="DataFlow AI home">
        {/* Logo SVG — replace with provided asset */}
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <rect width="32" height="32" rx="8" fill="#2DD4BF" />
          <path
            d="M8 16h4l3-7 4 14 3-7 2 0"
            stroke="#fff"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
        <span>DataFlow<span style={{ color: 'var(--teal-bright)' }}>AI</span></span>
      </Link>

      <ul className="nav-links" role="list">
        <li><Link href="#features">Features</Link></li>
        <li><Link href="#pricing">Pricing</Link></li>
        <li><Link href="#testimonials">Customers</Link></li>
        <li><Link href="#" aria-label="Documentation">Docs</Link></li>
      </ul>

      <div className="nav-actions">
        <button type="button" className="nav-search" aria-label="Search">
          <Search size={17} />
        </button>
        <a href="#" className="btn btn-ghost nav-login" aria-label="Log in to DataFlow AI">Log in</a>
        <a href="#pricing" className="btn btn-primary" aria-label="Get started with DataFlow AI">
          Get Started
        </a>
      </div>
    </nav>
  );
}
