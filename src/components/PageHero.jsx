import { Link } from 'react-router-dom';
import './PageHero.css';

export default function PageHero({ label, title, subtitle, cta, ctaTo = '/contact', accent }) {
  return (
    <section className="page-hero">
      <div className="page-hero__glow" />
      <div className="container page-hero__inner">
        {label && <span className="label">{label}</span>}
        <h1 className="headline-xl page-hero__title">
          {title} {accent && <span className="page-hero__accent">{accent}</span>}
        </h1>
        {subtitle && <p className="body-lg page-hero__sub">{subtitle}</p>}
        {cta && (
          <Link to={ctaTo} className="btn btn--primary" style={{marginTop:'8px'}}>
            {cta} <span className="btn-icon">→</span>
          </Link>
        )}
      </div>
    </section>
  );
}
