import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/ecocreteData';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    townLocation: '',
    projectType: SERVICES_DATA[0]?.id ?? 'walling',
    meterage: '',
    requireInstallation: 'yes',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.7rem 0.85rem',
    backgroundColor: '#FFFFFF',
    border: '1px solid #E6E9E2',
    borderRadius: '4px',
    fontSize: '0.95rem',
    color: '#232623',
    fontFamily: 'inherit',
    outline: 'none'
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.78rem',
    fontWeight: 700,
    color: '#4A4E4A',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    marginBottom: '0.4rem'
  };

  return (
    <div className="contact-page">

      {/* ============================================================
          HERO
          ============================================================ */}
      <section style={{
        position: 'relative',
        padding: '4.5rem 0 4rem',
        backgroundImage: `linear-gradient(rgba(20, 24, 22, 0.78), rgba(20, 24, 22, 0.72)), url('/images/precast-boundary-decorative.jpg')`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        color: '#FFFFFF'
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.35rem 0.9rem',
            backgroundColor: 'rgba(146, 208, 79, 0.18)',
            border: '1px solid rgba(146, 208, 79, 0.4)',
            borderRadius: '999px',
            fontSize: '0.75rem', fontWeight: 700, color: '#C8E9A3',
            marginBottom: '1.25rem', letterSpacing: '0.08em', textTransform: 'uppercase'
          }}>
            Talk to Ecocrete
          </div>
          <h1 style={{
            fontSize: 'clamp(2rem, 4.5vw, 3.3rem)', lineHeight: 1.1, fontWeight: 700,
            margin: '0 auto 1rem', maxWidth: '820px', letterSpacing: '-0.015em', color: '#FFFFFF'
          }}>
            Get a quote.
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '1.05rem', maxWidth: '620px', margin: '0 auto', lineHeight: 1.55 }}>
            Send us the site details or WhatsApp a photo — we&apos;ll come back with pricing. Small jobs and repairs welcome.
          </p>
        </div>
      </section>

      {/* ============================================================
          CONTACT INFO + FORM
          ============================================================ */}
      <section style={{ padding: '4rem 0 5rem', backgroundColor: '#F5F7F3' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '2rem' }} className="contact-two-col">

            {/* LEFT — Contact cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E6E9E2',
                borderRadius: '6px',
                padding: '1.5rem'
              }}>
                <div style={{ fontSize: '0.72rem', color: '#6FA240', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.35rem' }}>
                  Sales &amp; site enquiries
                </div>
                <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#232623', marginBottom: '0.25rem' }}>
                  {COMPANY_INFO.contactPerson}
                </div>
                <div style={{ fontSize: '0.85rem', color: '#7C7C7D', marginBottom: '1rem' }}>
                  WhatsApp friendly — send site photos.
                </div>
                <a href={`tel:${COMPANY_INFO.phoneClean}`} style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  textDecoration: 'none', color: '#232623', fontWeight: 700, fontSize: '1.05rem'
                }}>
                  <Phone size={18} style={{ color: '#6FA240' }} /> {COMPANY_INFO.phone}
                </a>
              </div>

              <div style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E6E9E2',
                borderRadius: '6px',
                padding: '1.5rem'
              }}>
                <div style={{ fontSize: '0.72rem', color: '#6FA240', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                  Yard
                </div>
                <a href={`tel:${COMPANY_INFO.landlineClean}`} style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  textDecoration: 'none', color: '#232623', fontWeight: 700, fontSize: '1.05rem'
                }}>
                  <Phone size={18} style={{ color: '#6FA240' }} /> {COMPANY_INFO.landline}
                </a>
                <div style={{ marginTop: '0.6rem', fontSize: '0.85rem', color: '#7C7C7D', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <MapPin size={14} style={{ color: '#6FA240' }} /> {COMPANY_INFO.location}
                </div>
              </div>

              <div style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E6E9E2',
                borderRadius: '6px',
                padding: '1.5rem'
              }}>
                <div style={{ fontSize: '0.72rem', color: '#6FA240', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                  Email
                </div>
                <a href={`mailto:${COMPANY_INFO.emailPrimary}`} style={{
                  display: 'flex', alignItems: 'center', gap: '0.45rem',
                  textDecoration: 'none', color: '#232623', fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.4rem'
                }}>
                  <Mail size={16} style={{ color: '#6FA240' }} /> {COMPANY_INFO.emailPrimary}
                </a>
              </div>

              <div style={{
                backgroundColor: '#141816',
                color: '#FFFFFF',
                border: '1px solid #262B27',
                borderRadius: '6px',
                padding: '1.5rem'
              }}>
                <div style={{ fontSize: '0.72rem', color: '#92D04F', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
                  Yard hours
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.95rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Clock size={15} style={{ color: '#92D04F' }} /> {COMPANY_INFO.hours.weekdays}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Clock size={15} style={{ color: '#92D04F' }} /> {COMPANY_INFO.hours.saturday}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'rgba(255,255,255,0.6)' }}>
                    <Clock size={15} /> {COMPANY_INFO.hours.sunday}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — Form */}
            <div style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #E6E9E2',
              borderRadius: '6px',
              padding: '2rem'
            }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                  <div style={{
                    width: '64px', height: '64px', borderRadius: '50%',
                    backgroundColor: '#EEF6E3', color: '#6FA240',
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '1.25rem'
                  }}>
                    <CheckCircle size={32} />
                  </div>
                  <h3 style={{ fontSize: '1.55rem', color: '#232623', margin: '0 0 0.6rem' }}>
                    Thanks, {formData.name || 'there'}.
                  </h3>
                  <p style={{ color: '#555', fontSize: '1rem', lineHeight: 1.55, marginBottom: '1.75rem' }}>
                    Your enquiry has been sent to <strong>{COMPANY_INFO.contactPerson}</strong> at the Ecocrete yard.
                    We&apos;ll come back to you within one working day.
                  </p>
                  <div style={{ display: 'inline-flex', flexDirection: 'column', gap: '0.75rem', padding: '1.25rem', backgroundColor: '#F5F7F3', border: '1px solid #E6E9E2', borderRadius: '6px' }}>
                    <a href={`tel:${COMPANY_INFO.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#232623', fontWeight: 700, textDecoration: 'none', fontSize: '1.05rem' }}>
                      <Phone size={16} style={{ color: '#6FA240' }} /> {COMPANY_INFO.phone}
                    </a>
                    <a href={`mailto:${COMPANY_INFO.emailPrimary}`} style={{ color: '#7C7C7D', textDecoration: 'none', fontSize: '0.9rem' }}>
                      {COMPANY_INFO.emailPrimary}
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <div style={{ fontSize: '0.72rem', color: '#6FA240', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                      Send us the details
                    </div>
                    <h2 style={{ fontSize: '1.5rem', color: '#232623', margin: 0 }}>
                      Tell us about your site
                    </h2>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }} className="form-two-col">
                    <div>
                      <label style={labelStyle}>Name *</label>
                      <input required name="name" value={formData.name} onChange={handleChange} style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Company / Site</label>
                      <input name="company" value={formData.company} onChange={handleChange} style={inputStyle} />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }} className="form-two-col">
                    <div>
                      <label style={labelStyle}>Email *</label>
                      <input required type="email" name="email" value={formData.email} onChange={handleChange} style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Phone *</label>
                      <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} style={inputStyle} />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }} className="form-two-col">
                    <div>
                      <label style={labelStyle}>Town / Site location</label>
                      <input name="townLocation" value={formData.townLocation} onChange={handleChange} style={inputStyle} placeholder="e.g. Bloemfontein" />
                    </div>
                    <div>
                      <label style={labelStyle}>Metres (if known)</label>
                      <input name="meterage" value={formData.meterage} onChange={handleChange} style={inputStyle} placeholder="e.g. 40 m" />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }} className="form-two-col">
                    <div>
                      <label style={labelStyle}>Service</label>
                      <select name="projectType" value={formData.projectType} onChange={handleChange} style={inputStyle}>
                        {SERVICES_DATA.map((s) => (
                          <option key={s.id} value={s.id}>{s.title}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>Need install?</label>
                      <select name="requireInstallation" value={formData.requireInstallation} onChange={handleChange} style={inputStyle}>
                        <option value="yes">Yes — install by Ecocrete</option>
                        <option value="no">No — supply only</option>
                        <option value="unsure">Not sure yet</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={labelStyle}>Tell us about the job</label>
                    <textarea
                      name="message" value={formData.message} onChange={handleChange}
                      rows={5}
                      style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                      placeholder="Anything relevant — wall height, slope, existing wall to extend, etc."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      backgroundColor: '#92D04F', color: '#141816', border: 'none',
                      padding: '0.95rem 1.6rem', borderRadius: '4px',
                      fontSize: '0.92rem', fontWeight: 700, letterSpacing: '0.03em', textTransform: 'uppercase',
                      cursor: loading ? 'wait' : 'pointer', width: '100%',
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                      opacity: loading ? 0.7 : 1
                    }}
                  >
                    {loading ? 'Sending…' : (<><Send size={16} /> Send Enquiry</>)}
                  </button>

                  <div style={{ marginTop: '1rem', fontSize: '0.82rem', color: '#7C7C7D', textAlign: 'center' }}>
                    Goes directly to <strong style={{ color: '#232623' }}>{COMPANY_INFO.emailPrimary}</strong>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================
          BOTTOM CTA
          ============================================================ */}
      <section style={{ padding: '3.5rem 0', backgroundColor: '#141816', color: '#FFFFFF' }}>
        <div className="container" style={{ display: 'flex', gap: '2rem', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <div style={{ maxWidth: '620px' }}>
            <h2 style={{ fontSize: '1.65rem', margin: '0 0 0.4rem', color: '#FFFFFF' }}>Would rather phone?</h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.98rem', margin: 0, lineHeight: 1.55 }}>
              Our sales team is happy to talk through options over the phone or WhatsApp.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              style={{
                backgroundColor: '#92D04F', color: '#141816',
                padding: '0.85rem 1.5rem', borderRadius: '4px',
                fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.03em', textTransform: 'uppercase',
                textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem'
              }}
            >
              <Phone size={16} /> {COMPANY_INFO.phone}
            </a>
            <a
              href={`tel:${COMPANY_INFO.landlineClean}`}
              style={{
                backgroundColor: 'transparent', color: '#FFFFFF',
                border: '2px solid rgba(255,255,255,0.35)',
                padding: '0.75rem 1.5rem', borderRadius: '4px',
                fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.03em', textTransform: 'uppercase',
                textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem'
              }}
            >
              <Phone size={16} /> Yard {COMPANY_INFO.landline}
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 780px) {
          .contact-two-col { grid-template-columns: 1fr !important; }
          .form-two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};
