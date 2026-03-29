import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Carousel from '../components/Carousel';
import PartnerLogo, { PARTNER_LIST } from '../components/PartnerLogos';
import Splash from '../components/Splash';
import './Home.css';

const stats = [
  { value: '200+', label: 'Projects Completed' },
  { value: '15+',  label: 'Years Experience'   },
  { value: '50+',  label: 'Partner Brands'      },
  { value: '100%', label: 'Client Satisfaction' },
];

const services = [
  {
    icon: '☀️',
    title: 'Solar Installations',
    desc: 'Custom solar PV systems for residential and commercial properties, designed for maximum yield and ROI.',
  },
  {
    icon: '🔋',
    title: 'Battery Storage',
    desc: 'Advanced lithium battery systems from BYD, Dyness & SolarMD to keep the lights on during load-shedding.',
  },
  {
    icon: '📊',
    title: 'Energy Audits',
    desc: 'In-depth analysis of your current energy usage to uncover savings opportunities and plan your transition.',
  },
  {
    icon: '⚡',
    title: 'Energy Efficiency',
    desc: 'Smart solutions that cut consumption without cutting productivity — from LED retrofits to smart controls.',
  },
  {
    icon: '🌐',
    title: 'Demand Response',
    desc: 'Automated demand management programs that reduce peak consumption and lower your monthly utility bills.',
  },
  {
    icon: '🔧',
    title: 'Ongoing Support',
    desc: 'Proactive maintenance, monitoring, and 24/7 support to keep your energy systems running at peak performance.',
  },
];

const heroSlides = [
  {
    content: (
      <div className="hero-slide hero-slide--1">
        <div className="hero-slide__overlay" />
        <div className="hero-slide__inner container">
          <span className="label hero-label">Keiller Power Solutions</span>
          <h1 className="headline-xl hero-slide__heading">
            Powering South Africa's<br/>
            <span className="hero-slide__accent">Sustainable Future</span>
          </h1>
          <p className="body-lg hero-slide__sub">
            Invest in clean energy today — solar installations, battery backup, and energy management in one place.
          </p>
          <div className="hero-slide__ctas">
            <Link to="/contact" className="btn btn--primary">
              Get a Free Quote <span className="btn-icon">→</span>
            </Link>
            <Link to="/services" className="btn btn--outline">
              Our Services
            </Link>
          </div>
          <div className="hero-slide__users">
            <div className="hero-avatars">
              <div className="avatar" style={{background:'#1A56DB'}}>K</div>
              <div className="avatar" style={{background:'#1043B0'}}>P</div>
              <div className="avatar" style={{background:'#F97316'}}>S</div>
            </div>
            <span><strong>200+</strong> projects completed</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    content: (
      <div className="hero-slide hero-slide--2">
        <div className="hero-slide__overlay" />
        <div className="hero-slide__inner container">
          <span className="label hero-label">Residential Solar</span>
          <h2 className="headline-xl hero-slide__heading">
            Cut Your Energy Bill<br/>
            <span className="hero-slide__accent">By Up to 80%</span>
          </h2>
          <p className="body-lg hero-slide__sub">
            Premium rooftop solar systems for South African homes — designed for maximum yield and load-shedding protection.
          </p>
          <div className="hero-slide__ctas">
            <Link to="/services" className="btn btn--primary">
              Explore Services <span className="btn-icon">→</span>
            </Link>
            <Link to="/gallery" className="btn btn--outline">
              View Gallery
            </Link>
          </div>
        </div>
      </div>
    ),
  },
  {
    content: (
      <div className="hero-slide hero-slide--3">
        <div className="hero-slide__overlay" />
        <div className="hero-slide__inner container">
          <span className="label hero-label">Commercial Solar</span>
          <h2 className="headline-xl hero-slide__heading">
            Industrial-Grade<br/>
            <span className="hero-slide__accent">Energy Solutions</span>
          </h2>
          <p className="body-lg hero-slide__sub">
            Large-scale solar installations and battery storage for businesses, manufacturers, and commercial properties.
          </p>
          <div className="hero-slide__ctas">
            <Link to="/contact" className="btn btn--primary">
              Book Consultation <span className="btn-icon">→</span>
            </Link>
            <Link to="/partners" className="btn btn--outline">
              Our Partners
            </Link>
          </div>
        </div>
      </div>
    ),
  },
];


export default function Home() {
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.15 }
    );
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="home">
      {/* ─── SPLASH TOP ─── */}
      <Splash />

      {/* ─── HERO CAROUSEL ─── */}
      <section className="home__hero">
        <Carousel slides={heroSlides} autoPlay interval={6000} />
      </section>

      {/* ─── STATS STRIP ─── */}
      <section className="home__stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((s, i) => (
              <div key={i} className="stat-item fade-up">
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT STRIP ─── */}
      <section className="section">
        <div className="container">
          <div className="home__about fade-up">
            <div className="home__about-text">
              <span className="label">Who We Are</span>
              <h2 className="headline-lg" style={{marginTop:'12px',marginBottom:'20px'}}>
                South Africa's Trusted<br/>Energy Partner
              </h2>
              <p className="body-lg" style={{marginBottom:'16px'}}>
                At KP Solutions, we strive to provide innovative energy management solutions that help our clients save money and reduce their carbon footprint. Our mission is to create a sustainable future by empowering businesses to make smart energy choices.
              </p>
              <p className="body-md" style={{marginBottom:'32px'}}>
                With many years of experience in the energy management industry, our team of experts delivers customized solutions for businesses of all sizes and industries.
              </p>
              <Link to="/about" className="btn btn--blue">
                Learn More <span className="btn-icon">→</span>
              </Link>
            </div>
            <div className="home__about-cards">
              <div className="card card--glass" style={{ borderBottom: '2px solid var(--blue)' }}>
                <div style={{fontSize:'2rem',marginBottom:'12px'}}>🎯</div>
                <h3 className="headline-md" style={{margin:'0 0 8px'}}>Our Mission</h3>
                <p className="body-md" style={{color:'var(--text-light)'}}>Create a sustainable future by empowering businesses to make smart energy choices.</p>
              </div>
              <div className="card card--glass" style={{ borderBottom: '2px solid var(--white)' }}>
                <div style={{fontSize:'2rem',marginBottom:'12px'}}>🏆</div>
                <h3 className="headline-md" style={{margin:'0 0 8px'}}>Our Experience</h3>
                <p className="body-md" style={{color:'var(--text-light)'}}>Years of delivering customized solutions across all industries in South Africa.</p>
              </div>
              <div className="card card--glass" style={{ borderBottom: '2px solid var(--orange)' }}>
                <div style={{fontSize:'2rem',marginBottom:'12px'}}>🔬</div>
                <h3 className="headline-md" style={{margin:'0 0 8px'}}>Our Approach</h3>
                <p className="body-md" style={{color:'var(--text-light)'}}>Data-driven audits, tailored systems, and ongoing support to maximize ROI.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="section">
        <div className="container">
          <div className="section-header fade-up">
            <span className="label">What We Do</span>
            <h2 className="headline-lg" style={{marginTop:'12px'}}>Our Services</h2>
            <p className="body-lg" style={{maxWidth:'560px',margin:'16px auto 0'}}>
              From energy audits to full solar installations — we offer end-to-end renewable energy solutions.
            </p>
          </div>
          <div className="grid-3" style={{marginTop:'56px'}}>
            {services.map((s, i) => (
              <div key={i} className="card card--glass fade-up" style={{animationDelay:`${i*80}ms`}}>
                <div className="service-icon">{s.icon}</div>
                <h3 className="headline-md" style={{margin:'16px 0 10px'}}>{s.title}</h3>
                <p className="body-md" style={{color:'var(--text-light)'}}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{textAlign:'center',marginTop:'48px'}}>
            <Link to="/services" className="btn btn--blue fade-up">
              View All Services <span className="btn-icon">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── PARTNERS STRIP ─── */}
      <section className="section partners-section">
        <div className="container">
          <div className="section-header fade-up">
            <span className="label">Our Partners</span>
            <h2 className="headline-lg" style={{marginTop:'12px',color:'var(--white)'}}>Trusted Brands We Work With</h2>
            <p style={{marginTop:'12px',color:'var(--text-light)',fontSize:'1.05rem'}}>
              We exclusively partner with world-class manufacturers to ensure every installation meets the highest standards.
            </p>
          </div>
          <div className="partners-marquee fade-up">
            <div className="partners-track">
              {[...PARTNER_LIST, ...PARTNER_LIST].map((name, i) => (
                <div key={i} className="partner-logo-card">
                  <PartnerLogo name={name} width={110} height={50} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="home__cta-banner">
        <div className="glow-blob glow-blob--blue" style={{top:'-200px',left:'10%'}}/>
        <div className="glow-blob glow-blob--orange" style={{bottom:'-150px',right:'5%'}}/>
        <div className="container" style={{position:'relative',zIndex:1}}>
          <div className="home__cta-inner fade-up">
            <span className="label">Ready to Start?</span>
            <h2 className="headline-lg" style={{marginTop:'12px',marginBottom:'16px'}}>
              Start Saving on<br/>Energy Today
            </h2>
            <p className="body-lg" style={{marginBottom:'36px',maxWidth:'480px',margin:'0 auto 36px'}}>
              Join hundreds of South African businesses that have made the switch to clean, affordable energy.
            </p>
            <div style={{display:'flex',gap:'16px',justifyContent:'center',flexWrap:'wrap'}}>
              <Link to="/contact" className="btn btn--primary">
                Get a Free Quote <span className="btn-icon">→</span>
              </Link>
              <Link to="/gallery" className="btn btn--outline">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
