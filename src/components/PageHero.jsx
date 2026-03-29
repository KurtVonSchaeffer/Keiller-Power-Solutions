import { Link } from 'react-router-dom';
import './PageHero.css';

export default function PageHero({ label, title, subtitle, cta, ctaTo = '/contact', accent, image }) {
  const bgStyle = image ? {
    backgroundImage: `linear-gradient(to right, rgba(11,14,26,0.9) 0%, rgba(11,14,26,0.7) 50%, rgba(11,14,26,0.9) 100%), url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  } : {};

  return (
    <section className="page-hero" style={bgStyle}>
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
