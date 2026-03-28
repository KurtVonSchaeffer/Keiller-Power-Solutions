import PageHero from '../components/PageHero';
import { Link } from 'react-router-dom';

const timeline = [
  { year: '2010', title: 'Founded', desc: 'Keiller Power Solutions founded in Germiston with a vision for sustainable energy in South Africa.' },
  { year: '2014', title: 'First Solar Farm', desc: 'Completed our first large-scale commercial solar installation for a Gauteng manufacturing facility.' },
  { year: '2018', title: 'Partner Network', desc: 'Established partnerships with world-class brands like BYD, HUAWEI, and Canadian Solar.' },
  { year: '2021', title: 'Battery Storage', desc: 'Expanded into advanced battery backup solutions, helping clients weather South Africa\'s energy crisis.' },
  { year: '2025', title: 'Today', desc: 'Over 200 completed projects and a growing team dedicated to powering a sustainable future.' },
];

const values = [
  { icon: '🌱', title: 'Sustainability',  desc: 'Every solution we design prioritizes minimal environmental impact and long-term ecological benefit.' },
  { icon: '🔍', title: 'Transparency',    desc: 'We provide clear, honest assessments with no hidden costs or inflated projections.' },
  { icon: '💡', title: 'Innovation',      desc: 'We continually adopt cutting-edge technology to deliver the best outcomes for our clients.' },
  { icon: '🤝', title: 'Partnership',     desc: 'We build long-term relationships — not just complete projects — with every client we serve.' },
];

export default function About() {
  return (
    <div>
      <PageHero
        label="About KP Solutions"
        title="South Africa's Energy"
        accent="Transformation Partner"
        subtitle="We strive to provide innovative energy management solutions that help our clients save money and reduce their carbon footprint."
        cta="Get in Touch"
        ctaTo="/contact"
      />

      {/* Mission */}
      <section className="section section--white">
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'64px',alignItems:'center'}}>
            <div>
              <span className="label">Our Mission</span>
              <h2 className="headline-lg" style={{marginTop:'12px',marginBottom:'20px'}}>
                Empowering Businesses to Make Smart Energy Choices
              </h2>
              <p className="body-lg" style={{marginBottom:'20px'}}>
                At KP Solutions, we strive to provide innovative energy management solutions that help our clients save money and reduce their carbon footprint. Our mission is to create a sustainable future by empowering businesses to make smart energy choices.
              </p>
              <p className="body-md">
                With many years of experience in the energy management industry, our team of experts has the knowledge and skills to deliver customized solutions that meet the unique needs of each client. We have successfully completed projects for businesses of all sizes and industries.
              </p>
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:'16px'}}>
              {values.map((v, i) => (
                <div key={i} className="card card--white" style={{display:'flex',gap:'20px',alignItems:'flex-start'}}>
                  <div style={{fontSize:'1.8rem',flexShrink:0}}>{v.icon}</div>
                  <div>
                    <h3 style={{fontWeight:700,marginBottom:'6px',color:'var(--text-dark)'}}>{v.title}</h3>
                    <p className="body-md">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section section--light">
        <div className="container">
          <div style={{textAlign:'center',marginBottom:'64px'}}>
            <span className="label">Our Journey</span>
            <h2 className="headline-lg" style={{marginTop:'12px'}}>15+ Years of Excellence</h2>
          </div>
          <div className="about-timeline">
            {timeline.map((t, i) => (
              <div key={i} className={`timeline-item ${i % 2 === 0 ? 'timeline-item--left' : 'timeline-item--right'}`}>
                <div className="timeline-year">{t.year}</div>
                <div className="card card--white timeline-card">
                  <h3 style={{fontWeight:700,marginBottom:'8px',fontSize:'1.1rem',color:'var(--text-dark)'}}>{t.title}</h3>
                  <p className="body-md">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Contact CTA */}
      <section className="section section--white" style={{textAlign:'center'}}>
        <div className="container">
          <span className="label">Join Us</span>
          <h2 className="headline-lg" style={{marginTop:'12px',marginBottom:'16px'}}>
            Ready to Transform Your Energy Use?
          </h2>
          <p className="body-lg" style={{maxWidth:'480px',margin:'0 auto 36px'}}>
            Our team of experts is ready to design a solution tailored to your business needs.
          </p>
          <Link to="/contact" className="btn btn--blue">
            Start Your Journey <span className="btn-icon">→</span>
          </Link>
        </div>
      </section>

      <style>{`
        .about-timeline { position: relative; }
        .about-timeline::before {
          content: '';
          position: absolute;
          left: 50%; top: 0; bottom: 0;
          width: 2px;
          background: rgba(26,86,219,0.15);
          transform: translateX(-50%);
        }
        .timeline-item {
          display: flex;
          gap: 40px;
          margin-bottom: 40px;
          align-items: center;
        }
        .timeline-item--left { flex-direction: row; }
        .timeline-item--right { flex-direction: row-reverse; }
        .timeline-year {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--blue);
          min-width: 80px;
          text-align: center;
          flex-shrink: 0;
          background: #fff;
          padding: 8px 0;
          border-radius: 8px;
          border: 1px solid rgba(26,86,219,0.15);
          box-shadow: 0 2px 8px rgba(26,86,219,0.08);
        }
        .timeline-card { flex: 1; max-width: 45%; }
        .timeline-item--right .timeline-card { margin-left: auto; }
        @media (max-width: 768px) {
          .about-timeline::before { left: 16px; }
          .timeline-item, .timeline-item--right { flex-direction: column; align-items: flex-start; padding-left: 40px; }
          .timeline-card { max-width: 100%; }
          div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </div>
  );
}
