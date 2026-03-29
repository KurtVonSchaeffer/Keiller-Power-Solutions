import { useState } from 'react';
import PageHero from '../components/PageHero';
import PartnerLogo, { PARTNER_LIST, PARTNER_CATEGORIES } from '../components/PartnerLogos';

const categories = ['All', 'Solar', 'Battery', 'Inverter'];

export default function Partners() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All'
    ? PARTNER_LIST
    : PARTNER_LIST.filter(name => PARTNER_CATEGORIES[name]?.cat === filter);

  return (
    <div>
      <PageHero
        label="Our Partners"
        title="Trusted Brand"
        accent="Partnerships"
        subtitle="We work exclusively with world-class manufacturers to ensure every installation meets the highest standards of quality and performance."
        cta="View Our Projects"
        ctaTo="/gallery"
        image="/images/hero-partners.jpg"
      />

      {/* Category highlight strip */}
      <section className="section section--white" style={{paddingTop:'60px',paddingBottom:'60px'}}>
        <div className="container">
          <div className="partner-category-grid">
            {[
              { icon:'☀️', title:'Tier-1 Solar Panels',   color:'#F97316', desc:'IBC Solar, Canadian Solar, LONGi, JA Solar & GoodWe — certified bankable Tier-1 modules.' },
              { icon:'🔋', title:'World-Class Batteries',  color:'#1A56DB', desc:'BYD, SolarMD, Dyness & SigenEnergy — 10+ year lifespans with industry-leading warranties.' },
              { icon:'⚡', title:'Smart Inverters',        color:'#CC0000', desc:'HUAWEI, SunSynk, ATESS & Deye — remote monitoring and seamless grid integration.' },
            ].map((c, i) => (
              <div key={i} className="partner-cat-card">
                <div style={{
                  width:56, height:56, borderRadius:16,
                  background:`${c.color}15`,
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontSize:'1.8rem', marginBottom:16,
                }}>{c.icon}</div>
                <h3 className="headline-md" style={{marginBottom:10, color:'var(--text-dark)'}}>{c.title}</h3>
                <p className="body-md">{c.desc}</p>
                <div style={{
                  marginTop:16, height:4, borderRadius:2,
                  background:c.color, width:40,
                }}/>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter tabs + grid */}
      <section className="section section--light">
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'48px' }}>
            <span className="label">Partner Directory</span>
            <h2 className="headline-lg" style={{ marginTop:'12px', marginBottom:'32px' }}>All Our Partners</h2>
            <div style={{ display:'flex', gap:'12px', justifyContent:'center', flexWrap:'wrap' }}>
              {categories.map(c => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  style={{
                    padding: '8px 24px',
                    borderRadius: '999px',
                    border: '1.5px solid',
                    borderColor: filter === c ? 'var(--blue)' : 'var(--light-border)',
                    background: filter === c ? 'var(--blue)' : '#fff',
                    color: filter === c ? '#fff' : 'var(--text-mid)',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    fontFamily: 'inherit',
                    boxShadow: filter === c ? '0 4px 14px rgba(26,86,219,0.3)' : '0 1px 4px rgba(0,0,0,0.06)',
                  }}
                >{c}</button>
              ))}
            </div>
          </div>

          <div className="partner-logo-grid">
            {filtered.map((name, i) => (
              <div key={i} className="partner-full-card">
                {/* Logo */}
                <div className="partner-full-logo">
                  <PartnerLogo name={name} width={130} height={58} />
                </div>
                {/* Info */}
                <div className="partner-full-info">
                  <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:8}}>
                    <span style={{
                      fontWeight:700, fontSize:'0.95rem',
                      color:'var(--text-dark)',
                    }}>{name}</span>
                    <span style={{
                      fontSize:'0.7rem', fontWeight:700, letterSpacing:'0.1em',
                      background: PARTNER_CATEGORIES[name]?.cat === 'Solar' ? '#FFF7ED' :
                                  PARTNER_CATEGORIES[name]?.cat === 'Battery' ? '#EFF6FF' : '#FEF2F2',
                      color: PARTNER_CATEGORIES[name]?.cat === 'Solar' ? '#EA580C' :
                             PARTNER_CATEGORIES[name]?.cat === 'Battery' ? '#1A56DB' : '#DC2626',
                      borderRadius:'999px', padding:'3px 10px', textTransform:'uppercase',
                    }}>{PARTNER_CATEGORIES[name]?.cat}</span>
                  </div>
                  <p style={{fontSize:'0.85rem', color:'var(--text-mid)', lineHeight:1.5}}>
                    {PARTNER_CATEGORIES[name]?.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a partner CTA */}
      <section className="section section--white" style={{ textAlign:'center' }}>
        <div className="container">
          <div style={{
            maxWidth:560, margin:'0 auto',
            padding:'64px 48px',
            background:'linear-gradient(135deg, var(--blue) 0%, var(--blue-dark) 100%)',
            borderRadius:24,
            color:'#fff',
          }}>
            <div style={{fontSize:'3rem',marginBottom:16}}>🤝</div>
            <span style={{
              fontSize:'0.75rem', fontWeight:700, letterSpacing:'0.15em',
              textTransform:'uppercase', color:'rgba(255,255,255,0.7)',
            }}>Partnership Enquiries</span>
            <h2 className="headline-lg" style={{ marginTop:'12px', marginBottom:'16px', color:'#fff' }}>
              Want to Partner with KP Solutions?
            </h2>
            <p style={{ opacity:0.8, maxWidth:'400px', margin:'0 auto 32px', lineHeight:1.7 }}>
              We're always looking for innovative brands aligned with our commitment to quality and sustainability.
            </p>
            <a href="mailto:yaasinek@kp-solutions.co.za" className="btn btn--primary">
              Get in Touch <span className="btn-icon" style={{background:'var(--orange)'}}>→</span>
            </a>
          </div>
        </div>
      </section>

      <style>{`
        .partner-category-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .partner-cat-card {
          background: #fff;
          border: 1px solid var(--light-border);
          border-radius: 20px;
          padding: 32px;
          box-shadow: var(--shadow-card);
          transition: all 0.25s ease;
        }
        .partner-cat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(26,86,219,0.1);
        }
        .partner-logo-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .partner-full-card {
          background: #fff;
          border: 1px solid var(--light-border);
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.25s ease;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }
        .partner-full-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(26,86,219,0.1);
          border-color: rgba(26,86,219,0.2);
        }
        .partner-full-logo {
          background: #FAFAFA;
          border-bottom: 1px solid var(--light-border);
          padding: 24px 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 90px;
        }
        .partner-full-info {
          padding: 20px 24px;
        }
        @media (max-width: 900px) {
          .partner-category-grid { grid-template-columns: 1fr; }
          .partner-logo-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .partner-logo-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
