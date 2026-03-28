import { useState } from 'react';
import PageHero from '../components/PageHero';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'solar',
    icon: '☀️',
    title: 'Solar Installations',
    tagline: 'Premium solar PV systems for maximum yield',
    desc: 'Custom-designed solar photovoltaic systems for residential, commercial, and industrial properties. We handle everything from site assessment through installation and commissioning, using only Tier-1 panels from Canadian Solar, JA Solar, and other leading manufacturers.',
    features: ['Site assessment & system design', 'Tier-1 panel brands', 'Full installation & commissioning', 'Grid-tie & off-grid options', 'SSEG registration support'],
    color: '#F59E0B',
  },
  {
    id: 'battery',
    icon: '🔋',
    title: 'Battery Storage',
    tagline: 'Stay powered through load-shedding',
    desc: 'Advanced lithium-iron phosphate (LFP) battery storage systems from world-class brands including BYD, Dyness, and SolarMD. Our battery solutions integrate seamlessly with existing solar systems or operate as standalone backup power for critical loads.',
    features: ['BYD, Dyness & SolarMD batteries', 'LFP chemistry — safer & longer lifespan', 'Hybrid & off-grid inverter support', 'Remote monitoring included', 'Scalable storage capacity'],
    color: '#10B981',
  },
  {
    id: 'audit',
    icon: '📊',
    title: 'Energy Audits',
    tagline: 'Know exactly where your energy goes',
    desc: 'Comprehensive energy audits that identify inefficiencies, quantify saving opportunities, and provide a clear roadmap for your energy transformation. Our certified auditors use calibrated instrumentation and data analytics to deliver actionable insights.',
    features: ['Baseline consumption analysis', 'Tariff structure review', 'Load profile mapping', 'Savings opportunity report', 'ROI projections & payback analysis'],
    color: '#6366F1',
  },
  {
    id: 'efficiency',
    icon: '⚡',
    title: 'Energy Efficiency',
    tagline: 'Use less, achieve more',
    desc: 'From LED lighting retrofits to smart building controls and variable speed drives, we implement efficiency measures that deliver immediate and sustained savings with minimal disruption to your operations.',
    features: ['LED lighting retrofits', 'Smart metering & monitoring', 'HVAC optimization', 'Motor & drive efficiency', 'Building management systems'],
    color: '#EC4899',
  },
  {
    id: 'demand',
    icon: '🌐',
    title: 'Demand Response',
    tagline: 'Automated peak load management',
    desc: 'Demand response programs that automatically manage your electricity consumption during peak periods, reducing demand charges and qualifying for utility incentives. Our systems communicate with smart grid infrastructure for optimized real-time response.',
    features: ['Automated load control', 'Peak demand shaving', 'Utility incentive programs', 'Real-time monitoring dashboard', 'Demand charge reduction'],
    color: '#14B8A6',
  },
  {
    id: 'support',
    icon: '🔧',
    title: 'Ongoing Support',
    tagline: '24/7 monitoring & maintenance',
    desc: 'Our relationship doesn\'t end at installation. We offer comprehensive operations and maintenance contracts, remote monitoring, performance reporting, and rapid response maintenance teams to ensure your system delivers peak performance year after year.',
    features: ['Remote system monitoring', 'Preventative maintenance schedules', 'Rapid response call-outs', 'Annual performance reviews', 'Warranty management'],
    color: '#8B5CF6',
  },
];

export default function Services() {
  const [active, setActive] = useState(null);

  return (
    <div>
      <PageHero
        label="Our Services"
        title="End-to-End Energy"
        accent="Solutions"
        subtitle="From audits and design to installation and ongoing support — we handle every aspect of your energy journey."
        cta="Request a Quote"
        ctaTo="/contact"
      />

      {/* Services grid */}
      <section className="section">
        <div className="container">
          <div className="grid-3">
            {services.map((s) => (
              <div
                key={s.id}
                className={`card card--dark services-card ${active === s.id ? 'services-card--active' : ''}`}
                onClick={() => setActive(active === s.id ? null : s.id)}
                style={{ cursor: 'pointer' }}
              >
                <div className="services-icon" style={{ background: `${s.color}18`, color: s.color }}>
                  {s.icon}
                </div>
                <h3 className="headline-md" style={{ margin: '16px 0 8px' }}>{s.title}</h3>
                <p className="body-md" style={{ color: 'var(--grey)', marginBottom: '16px' }}>{s.tagline}</p>

                <div className={`services-expand ${active === s.id ? 'services-expand--open' : ''}`}>
                  <p className="body-md" style={{ marginBottom: '20px' }}>{s.desc}</p>
                  <ul className="services-features">
                    {s.features.map((f, i) => (
                      <li key={i}>
                        <span className="services-check" style={{ color: s.color }}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="services-toggle" style={{ color: s.color }}>
                  {active === s.id ? '↑ Less info' : '↓ Learn more'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section section--navy">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span className="label">How It Works</span>
            <h2 className="headline-lg" style={{ marginTop: '12px' }}>Our Simple 4-Step Process</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {[
              { step: '01', title: 'Consultation', desc: 'We discuss your energy goals, consumption patterns, and budget to understand your unique needs.' },
              { step: '02', title: 'Site Audit',   desc: 'Our experts assess your site, analyze your current consumption, and design the optimal solution.' },
              { step: '03', title: 'Installation', desc: 'Professional installation by certified technicians using premium equipment — on time and on budget.' },
              { step: '04', title: 'Support',      desc: 'Ongoing monitoring, maintenance, and performance reporting to maximize your system\'s ROI.' },
            ].map((p, i) => (
              <div key={i} className="card card--glass" style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '2rem', fontWeight: 800, color: 'var(--purple-light)',
                  marginBottom: '16px',
                }}>{p.step}</div>
                <h3 style={{ fontWeight: 700, marginBottom: '10px' }}>{p.title}</h3>
                <p className="body-md">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <span className="label">Get Started</span>
          <h2 className="headline-lg" style={{ marginTop: '12px', marginBottom: '16px' }}>
            Ready to Reduce Your Energy Costs?
          </h2>
          <p className="body-lg" style={{ maxWidth: '480px', margin: '0 auto 36px' }}>
            Contact our team today for a free, no-obligation energy consultation tailored to your business.
          </p>
          <Link to="/contact" className="btn btn--purple">
            Book Free Consultation <span className="btn-icon">→</span>
          </Link>
        </div>
      </section>

      <style>{`
        .services-card { transition: all 0.3s ease; }
        .services-card:hover,
        .services-card--active { border-color: rgba(91,54,212,0.4); }
        .services-icon {
          width: 56px; height: 56px;
          border-radius: 16px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.8rem;
        }
        .services-expand {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease;
        }
        .services-expand--open { max-height: 500px; }
        .services-features {
          display: flex; flex-direction: column; gap: 8px;
          margin: 0;
        }
        .services-features li {
          display: flex; align-items: center; gap: 10px;
          font-size: 0.875rem;
          color: var(--grey-light);
        }
        .services-check { font-weight: 700; flex-shrink: 0; }
        .services-toggle {
          margin-top: 16px;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.05em;
        }
        @media (max-width: 768px) {
          div[style*="grid-template-columns: repeat(4, 1fr)"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          div[style*="grid-template-columns: repeat(4, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
