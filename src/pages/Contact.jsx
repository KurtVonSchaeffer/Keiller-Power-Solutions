import { useState } from 'react';
import PageHero from '../components/PageHero';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    
    // Construct email content
    const subject = encodeURIComponent(`Website Enquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\n\nMessage:\n${form.message}`);
    
    // Trigger native mail client
    window.location.href = `mailto:yaasinek@kp-solutions.co.za?subject=${subject}&body=${body}`;
    
    setSent(true);
    setLoading(false);
  };

  return (
    <div>
      <PageHero
        label="Contact Us"
        title="Let's Power Your"
        accent="Future Together"
        subtitle="Get in touch with our team for a free, no-obligation energy consultation tailored to your business."
        image="/images/hero-contact.jpg"
      />

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '64px', alignItems: 'flex-start' }}>

            {/* Info Panel */}
            <div>
              <span className="label">Reach Us</span>
              <h2 className="headline-md" style={{ marginTop: '12px', marginBottom: '32px' }}>
                We're Based in Germiston, Serving All of South Africa
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
                {[
                  { icon: '📍', label: 'Address', value: '14 Otto Ave, Highway Gardens, Germiston, South Africa' },
                  { icon: '📞', label: 'Phone',   value: '+27 82 890 7963', href: 'tel:+27828907963' },
                  { icon: '✉️', label: 'Email',   value: 'yaasinek@kp-solutions.co.za', href: 'mailto:yaasinek@kp-solutions.co.za' },
                  { icon: '🕐', label: 'Hours',   value: 'Mon – Fri: 08:00 – 17:00' },
                ].map((item, i) => (
                  <div key={i} className="card card--dark" style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ fontSize: '1.4rem', flexShrink: 0 }}>{item.icon}</div>
                    <div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--grey)', textTransform: 'uppercase', marginBottom: '4px' }}>{item.label}</div>
                      {item.href
                        ? <a href={item.href} style={{ color: 'var(--white)', fontWeight: 500, transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='var(--purple-light)'} onMouseOut={e => e.target.style.color='var(--white)'}>{item.value}</a>
                        : <span style={{ color: 'var(--white)', fontWeight: 500 }}>{item.value}</span>
                      }
                    </div>
                  </div>
                ))}
              </div>

              {/* Social */}
              <h3 style={{ fontWeight: 700, marginBottom: '16px', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--grey)' }}>Follow Us</h3>
              <div style={{ display: 'flex', gap: '12px' }}>
                {[
                  { name: 'Instagram', icon: '📸', url: 'https://www.instagram.com/kp_solutions1' },
                  { name: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/yaasinekeiller?_l=en_US' },
                  { name: 'TikTok', icon: '🎵', url: 'https://www.tiktok.com/@yaasine.keiller' }
                ].map((s, i) => (
                  <a key={i} href={s.url} target="_blank" rel="noreferrer" style={{
                    padding: '8px 20px',
                    borderRadius: '999px',
                    border: '1px solid var(--border)',
                    color: 'var(--grey-light)',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    transition: 'all 0.2s',
                    display: 'flex', alignItems: 'center', gap: '6px',
                  }}
                  onMouseOver={e => { e.currentTarget.style.borderColor='var(--purple)'; e.currentTarget.style.color='#fff'; }}
                  onMouseOut={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.color='var(--grey-light)'; }}
                  >
                    {s.icon} {s.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Form */}
            <div>
              {sent ? (
                <div className="card card--glass" style={{ textAlign: 'center', padding: '60px 40px' }}>
                  <div style={{ fontSize: '4rem', marginBottom: '16px' }}>✅</div>
                  <h3 className="headline-md" style={{ marginBottom: '12px' }}>Message Sent!</h3>
                  <p className="body-md">Thank you for reaching out. Our team will be in touch within 1 business day.</p>
                  <button onClick={() => setSent(false)} className="btn btn--purple" style={{ marginTop: '24px' }}>
                    Send Another <span className="btn-icon">→</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div className="card card--glass" style={{ padding: '40px' }}>
                    <h3 className="headline-md" style={{ marginBottom: '32px' }}>Send Us a Message</h3>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                      <FormField label="Full Name *" name="name" type="text" placeholder="John Smith" value={form.name} onChange={handleChange} required />
                      <FormField label="Email *" name="email" type="email" placeholder="john@company.co.za" value={form.email} onChange={handleChange} required />
                    </div>
                    <div style={{ marginTop: '16px' }}>
                      <FormField label="Phone" name="phone" type="tel" placeholder="+27 82 000 0000" value={form.phone} onChange={handleChange} />
                    </div>
                    <div style={{ marginTop: '16px' }}>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--grey)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                        Service Interested In
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        style={{
                          width: '100%', padding: '12px 16px',
                          borderRadius: '12px',
                          background: 'var(--navy)',
                          border: '1px solid var(--border)',
                          color: form.service ? '#fff' : 'var(--grey)',
                          fontSize: '0.9rem',
                          fontFamily: 'inherit',
                          outline: 'none',
                          cursor: 'pointer',
                        }}
                      >
                        <option value="">Select a service…</option>
                        <option value="solar">Solar Installation</option>
                        <option value="battery">Battery Storage</option>
                        <option value="audit">Energy Audit</option>
                        <option value="efficiency">Energy Efficiency</option>
                        <option value="demand">Demand Response</option>
                        <option value="support">Ongoing Support</option>
                        <option value="other">Other / General Enquiry</option>
                      </select>
                    </div>
                    <div style={{ marginTop: '16px' }}>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--grey)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us about your project, current energy usage, and what you're hoping to achieve…"
                        style={{
                          width: '100%', padding: '12px 16px',
                          borderRadius: '12px',
                          background: 'var(--navy)',
                          border: '1px solid var(--border)',
                          color: '#fff',
                          fontSize: '0.9rem',
                          fontFamily: 'inherit',
                          resize: 'vertical',
                          outline: 'none',
                          lineHeight: '1.6',
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn btn--purple"
                      style={{ marginTop: '24px', width: '100%', justifyContent: 'center' }}
                    >
                      {loading ? 'Sending…' : 'Send Message'}
                      <span className="btn-icon">{loading ? '⏳' : '→'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section style={{ height: '340px', background: 'var(--navy-card)', borderTop: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '12px' }}>
        <div style={{ fontSize: '3rem' }}>📍</div>
        <p style={{ color: 'var(--grey)', fontSize: '1rem' }}>14 Otto Ave, Highway Gardens, Germiston</p>
        <a
          href="https://maps.google.com/?q=14+Otto+Ave+Highway+Gardens+Germiston"
          target="_blank"
          rel="noreferrer"
          className="btn btn--outline"
          style={{ marginTop: '8px' }}
        >
          Open in Google Maps <span className="btn-icon">↗</span>
        </a>
      </section>

      <style>{`
        input:focus, textarea:focus, select:focus {
          border-color: var(--purple) !important;
          box-shadow: 0 0 0 2px rgba(91,54,212,0.2) !important;
        }
        @media (max-width: 900px) {
          div[style*="grid-template-columns: 1fr 1.2fr"] { grid-template-columns: 1fr !important; }
          div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 500px) {
          .card--glass[style*="padding: 40px"] { padding: 24px !important; }
          .card--glass[style*="padding: 60px 40px"] { padding: 40px 24px !important; }
        }
      `}</style>
    </div>
  );
}

function FormField({ label, name, type, placeholder, value, onChange, required }) {
  return (
    <div>
      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--grey)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        style={{
          width: '100%', padding: '12px 16px',
          borderRadius: '12px',
          background: 'var(--navy)',
          border: '1px solid var(--border)',
          color: '#fff',
          fontSize: '0.9rem',
          fontFamily: 'inherit',
          outline: 'none',
          transition: 'border-color 0.2s, box-shadow 0.2s',
        }}
      />
    </div>
  );
}
