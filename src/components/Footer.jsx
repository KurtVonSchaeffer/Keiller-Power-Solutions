import { Link } from 'react-router-dom';
import './Footer.css';

const quickLinks = [
  { to: '/',         label: 'Home'     },
  { to: '/about',    label: 'About'    },
  { to: '/services', label: 'Services' },
  { to: '/gallery',  label: 'Gallery'  },
  { to: '/partners', label: 'Partners' },
  { to: '/contact',  label: 'Contact'  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top container">
        {/* Brand */}
        <div className="footer__brand">
          <div className="footer__logo">
            <svg width="36" height="36" viewBox="0 0 32 32" fill="none">
              <path d="M16 3L29 10V22L16 29L3 22V10L16 3Z" fill="#5B36D4"/>
              <path d="M16 8L10 24H15L16 20L17 24H22L16 8Z" fill="white"/>
            </svg>
            <span>KP<b>Solutions</b></span>
          </div>
          <p className="footer__tagline">
            The all-in-one solution for powering South Africa's sustainable future through smart energy management.
          </p>
          <div className="footer__socials">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" aria-label="TikTok">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.82a8.16 8.16 0 004.77 1.53V6.89a4.84 4.84 0 01-1-.2z"/></svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer__col">
          <h4>Quick Links</h4>
          <ul>
            {quickLinks.map(l => (
              <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="footer__col">
          <h4>Services</h4>
          <ul>
            <li><Link to="/services">Solar Installations</Link></li>
            <li><Link to="/services">Energy Audits</Link></li>
            <li><Link to="/services">Battery Storage</Link></li>
            <li><Link to="/services">Energy Efficiency</Link></li>
            <li><Link to="/services">Demand Response</Link></li>
            <li><Link to="/services">Ongoing Support</Link></li>
          </ul>
        </div>

        {/* Contact + CTA */}
        <div className="footer__col">
          <h4>Contact</h4>
          <div className="footer__contact-items">
            <div className="footer__contact-item">
              <span>📍</span>
              <span>14 Otto Ave, Highway Gardens, Germiston, South Africa</span>
            </div>
            <div className="footer__contact-item">
              <span>📞</span>
              <a href="tel:+27828907963">+27 82 890 7963</a>
            </div>
            <div className="footer__contact-item">
              <span>✉️</span>
              <a href="mailto:yaasinek@kp-solutions.co.za">yaasinek@kp-solutions.co.za</a>
            </div>
          </div>
          <div className="footer__cta-card">
            <p>Ready to go solar?</p>
            <small>Join South African businesses cutting energy costs.</small>
            <Link to="/contact" className="btn btn--purple" style={{marginTop:'16px', width:'100%', justifyContent:'center'}}>
              Get a Free Quote <span className="btn-icon">→</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="footer__bottom container">
        <span>© 2025 KP Solutions · Keiller Power Solutions PTY LTD · All Rights Reserved</span>
        <div className="footer__bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="https://kp-solutions.co.za" target="_blank" rel="noreferrer">kp-solutions.co.za</a>
        </div>
      </div>
    </footer>
  );
}
