import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import KPLogo from './KPLogo';
import './Navbar.css';

const links = [
  { to: '/',         label: 'Home'     },
  { to: '/about',    label: 'About'    },
  { to: '/services', label: 'Services' },
  { to: '/gallery',  label: 'Gallery'  },
  { to: '/partners', label: 'Partners' },
  { to: '/contact',  label: 'Contact'  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // On dark sections (transparent + scrolled dark nav) → show white logo
  // scrolled state means we've left the hero; nav is solid dark, use white logo
  const logoVariant = 'white'; // always white — navbar bg is always dark

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        {/* Logo — KPLogo handles variant="white" for dark backgrounds */}
        <Link to="/" className="navbar__logo" aria-label="KP Solutions Home">
          <KPLogo variant="white" className="navbar__logo-svg" size={160} />
        </Link>

        {/* Desktop Nav */}
        <nav className="navbar__links">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <Link to="/contact" className="btn btn--primary navbar__cta">
          Get a Quote
          <span className="btn-icon">→</span>
        </Link>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(m => !m)}
          aria-label="Toggle menu"
        >
          <span/><span/><span/>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        {links.map(l => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === '/'}
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => `navbar__mobile-link ${isActive ? 'active' : ''}`}
          >
            {l.label}
          </NavLink>
        ))}
        <Link to="/contact" onClick={() => setMenuOpen(false)} className="btn btn--blue" style={{margin:'16px 24px'}}>
          Get a Quote <span className="btn-icon">→</span>
        </Link>
      </div>
    </header>
  );
}
