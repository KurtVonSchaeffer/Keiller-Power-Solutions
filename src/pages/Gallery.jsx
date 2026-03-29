import { useState } from 'react';
import Carousel from '../components/Carousel';
import PageHero from '../components/PageHero';

// Gallery items using placeholder images with SVG content
const projects = [
  {
    id: 1,
    category: 'Commercial',
    title: 'Germiston Office Complex',
    caption: '120kW roof-mounted solar array — 45% energy saving',
    gradient: 'linear-gradient(135deg, #1a0b3b 0%, #3C1FAA 100%)',
    emoji: '🏢☀️',
  },
  {
    id: 2,
    category: 'Industrial',
    title: 'Johannesburg Warehouse',
    caption: '250kW ground-mount with battery backup',
    gradient: 'linear-gradient(135deg, #0d2b1a 0%, #10B981 100%)',
    emoji: '🏭⚡',
  },
  {
    id: 3,
    category: 'Residential',
    title: 'Sandton Family Home',
    caption: '15kW rooftop + 30kWh BYD battery storage',
    gradient: 'linear-gradient(135deg, #1a1b0d 0%, #F59E0B 100%)',
    emoji: '🏠🔋',
  },
  {
    id: 4,
    category: 'Commercial',
    title: 'Pretoria Retail Centre',
    caption: '85kW carport solar canopy installation',
    gradient: 'linear-gradient(135deg, #0d1535 0%, #5B36D4 100%)',
    emoji: '🏪🌞',
  },
  {
    id: 5,
    category: 'Industrial',
    title: 'Ekurhuleni Manufacturing',
    caption: '500kW solar + demand response system',
    gradient: 'linear-gradient(135deg, #1a0d15 0%, #EC4899 100%)',
    emoji: '⚙️🔌',
  },
  {
    id: 6,
    category: 'Battery',
    title: 'Midrand Business Park',
    caption: '100kWh Dyness battery backup — 8-hour backup',
    gradient: 'linear-gradient(135deg, #0d1a1a 0%, #14B8A6 100%)',
    emoji: '🔋💡',
  },
  {
    id: 7,
    category: 'Residential',
    title: 'Centurion Estate',
    caption: '10kW SunSynk hybrid + JA Solar panels',
    gradient: 'linear-gradient(135deg, #1a0b0b 0%, #F59E0B 100%)',
    emoji: '🏡🌿',
  },
  {
    id: 8,
    category: 'Commercial',
    title: 'Rosebank Corporate HQ',
    caption: '200kW HUAWEI inverter system — SSEG registered',
    gradient: 'linear-gradient(135deg, #0b1a0d 0%, #6366F1 100%)',
    emoji: '🏛️⚡',
  },
  {
    id: 9,
    category: 'Battery',
    title: 'Bedfordview Medical Clinic',
    caption: '50kWh SolarMD UPS for critical medical infrastructure',
    gradient: 'linear-gradient(135deg, #0d0d1a 0%, #8B5CF6 100%)',
    emoji: '🏥🔋',
  },
];

const categories = ['All', 'Commercial', 'Industrial', 'Residential', 'Battery'];

function ProjectCard({ project }) {
  return (
    <div style={{
      borderRadius: '20px',
      overflow: 'hidden',
      background: project.gradient,
      aspectRatio: '4/3',
      position: 'relative',
      cursor: 'pointer',
      border: '1px solid rgba(255,255,255,0.08)',
      transition: 'all 0.3s ease',
    }}
    className="gallery-card"
    >
      {/* Emoji illustration */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '5rem',
        opacity: 0.4,
      }}>
        {project.emoji}
      </div>
      {/* Category badge */}
      <div style={{
        position: 'absolute', top: '16px', left: '16px',
        background: 'rgba(0,0,0,0.5)',
        backdropFilter: 'blur(8px)',
        borderRadius: '999px',
        padding: '4px 12px',
        fontSize: '0.75rem',
        fontWeight: 600,
        color: '#fff',
        border: '1px solid rgba(255,255,255,0.15)',
      }}>
        {project.category}
      </div>
      {/* Caption overlay */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        padding: '20px',
        background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)',
      }}>
        <h3 style={{ fontWeight: 700, marginBottom: '4px', fontSize: '1rem' }}>{project.title}</h3>
        <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)' }}>{project.caption}</p>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  // Carousel slides using the project cards
  const carouselSlides = projects.slice(0, 5).map(p => ({
    content: (
      <div style={{
        height: '500px',
        background: p.gradient,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        flexDirection: 'column',
        gap: '16px',
        padding: '40px',
      }}>
        <div style={{ fontSize: '8rem', opacity: 0.35 }}>{p.emoji}</div>
        <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <span style={{
            background: 'rgba(91,54,212,0.8)', borderRadius: '999px',
            padding: '4px 14px', fontSize: '0.75rem', fontWeight: 600, marginBottom: '12px', display: 'inline-block',
          }}>{p.category}</span>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '8px' }}>{p.title}</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1rem' }}>{p.caption}</p>
        </div>
      </div>
    ),
  }));

  return (
    <div>
      <PageHero
        label="Project Gallery"
        title="Our Completed"
        accent="Installations"
        subtitle="Browse through our portfolio of solar, battery storage, and energy efficiency projects across South Africa."
        cta="Start Your Project"
        ctaTo="/contact"
        image="/images/hero-gallery.jpg"
      />

      {/* Featured carousel */}
      <section className="section section--navy">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="label">Featured Projects</span>
            <h2 className="headline-lg" style={{ marginTop: '12px' }}>Our Best Work</h2>
          </div>
          <Carousel slides={carouselSlides} autoPlay interval={4000} />
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '40px' }}>
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                style={{
                  padding: '8px 20px',
                  borderRadius: '999px',
                  border: '1.5px solid',
                  borderColor: filter === c ? 'var(--purple)' : 'var(--border)',
                  background: filter === c ? 'rgba(91,54,212,0.2)' : 'transparent',
                  color: filter === c ? '#fff' : 'var(--grey)',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  fontFamily: 'inherit',
                }}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid-3">
            {filtered.map(p => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px', color: 'var(--grey)' }}>
              No projects in this category yet.
            </div>
          )}
        </div>
      </section>

      <style>{`
        .gallery-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 60px rgba(91,54,212,0.25);
          border-color: rgba(91,54,212,0.4) !important;
        }
      `}</style>
    </div>
  );
}
