import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  ShieldCheck
} from 'lucide-react';
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
    projectType: 'terraforce-retaining-walls',
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

  return (
    <div className="contact-page" style={{ backgroundColor: 'var(--bg-primary)' }}>
      
      {/* 1. Page Header */}
      <section style={{
        padding: '5rem 0 3.5rem',
        backgroundColor: '#0F1010',
        borderBottom: '1px solid var(--border-dark)'
      }} className="bg-grid-dark">
        <div className="container">
          <div style={{ maxWidth: '820px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '0.8rem' }}>
              <span className="mono-tag green">DIRECT FACTORY SALES</span>
              <span className="mono-tag green">{COMPANY_INFO.licenseText}</span>
            </div>

            <h1 style={{ fontSize: '3.6rem', color: '#FFFFFF', marginBottom: '1.25rem', lineHeight: 1.1 }}>
              Contact Ecocrete <br />
              <span style={{ color: '#92D04F' }}>& Site Consultation.</span>
            </h1>

            <p style={{ color: 'rgba(255, 255, 255, 0.88)', fontSize: '1.14rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              Have questions about SABS compressive strength, Terraforce® block pricing, or our turnkey installation teams across the Free State and central South Africa? Contact Elza Liebenberg directly or complete the engineering consultation form below.
            </p>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1.5rem',
              backgroundColor: '#F2F5EF',
              border: '1px solid #BEC6B9',
              padding: '0.85rem 1.5rem',
              borderRadius: '6px',
              flexWrap: 'wrap'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Phone size={16} style={{ color: '#92D04F' }} />
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Direct Cell:</span>
                <a 
                  href={`tel:${COMPANY_INFO.phoneClean}`} 
                  style={{ color: '#232623', fontWeight: 700, textDecoration: 'none', fontSize: '1rem' }}
                >
                  {COMPANY_INFO.phone} ({COMPANY_INFO.contactPerson})
                </a>
              </div>
              <div style={{ width: '1px', height: '18px', backgroundColor: 'var(--border-dark)' }} />
              <div style={{ fontSize: '0.85rem', color: '#79D1A5', fontWeight: 600 }}>
                Emails: {COMPANY_INFO.emailPrimary} | {COMPANY_INFO.emailSecondary}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Contact Grid */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div className="arch-grid">
            
            {/* Left 5 Columns: Direct Contact Details & Service Area Footprint Card */}
            <div style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              
              <div style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid rgba(184, 93, 59, 0.45)',
                borderRadius: '4px',
                padding: '2.5rem',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)'
              }}>
                <div className="mono-tag terracotta" style={{ marginBottom: '1rem' }}>
                  <span>PRIMARY SALES CONTACT</span>
                </div>

                <h2 style={{ fontSize: '2.2rem', color: '#232623', marginBottom: '0.3rem' }}>
                  {COMPANY_INFO.contactPerson}
                </h2>
                <div style={{ color: '#6FA240', fontWeight: 700, fontSize: '0.9rem', marginBottom: '1.75rem', textTransform: 'uppercase' }}>
                  Managing Director — Ecocrete Free State
                </div>

                {/* Contact List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '6px',
                      backgroundColor: '#F2F5EF',
                      border: '1px solid #BEC6B9',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#92D04F',
                      flexShrink: 0
                    }}>
                      <Phone size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '0.2rem' }}>
                        DIRECT CELL & WHATSAPP
                      </div>
                      <a
                        href={`tel:${COMPANY_INFO.phoneClean}`}
                        style={{ color: '#232623', fontWeight: 700, fontSize: '1.2rem', textDecoration: 'none', display: 'block' }}
                      >
                        {COMPANY_INFO.phone}
                      </a>
                      <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                        Immediate response for quotes and site bookings
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '6px',
                      backgroundColor: '#F2F5EF',
                      border: '1px solid #BEC6B9',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#6FA240',
                      flexShrink: 0
                    }}>
                      <Mail size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '0.2rem' }}>
                        OFFICIAL EMAIL INBOXES
                      </div>
                      <a
                        href={`mailto:${COMPANY_INFO.emailPrimary}`}
                        style={{ color: '#232623', fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'block', marginBottom: '0.2rem' }}
                      >
                        {COMPANY_INFO.emailPrimary}
                      </a>
                      <a
                        href={`mailto:${COMPANY_INFO.emailSecondary}`}
                        style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textDecoration: 'none', display: 'block' }}
                      >
                        {COMPANY_INFO.emailSecondary}
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '3px',
                      backgroundColor: 'rgba(46, 83, 65, 0.25)',
                      border: '1px solid rgba(121, 209, 165, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#79D1A5',
                      flexShrink: 0
                    }}>
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '0.2rem' }}>
                        FACTORY LOCATION & FOOTPRINT
                      </div>
                      <div style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '1rem' }}>
                        {COMPANY_INFO.location}
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                        Serving: Free State, Northern Cape, Western Cape border, Lesotho & Central SA
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '3px',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-dark)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-main)',
                      flexShrink: 0
                    }}>
                      <Clock size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '0.2rem' }}>
                        OPERATING HOURS
                      </div>
                      <div style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '0.92rem' }}>
                        {COMPANY_INFO.hours.weekdays}
                      </div>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                        {COMPANY_INFO.hours.saturday}
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* License & Installation Banner */}
              <div style={{
                backgroundColor: 'rgba(46, 83, 65, 0.18)',
                border: '1px solid rgba(121, 209, 165, 0.25)',
                borderRadius: '4px',
                padding: '1.5rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#79D1A5', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                  <ShieldCheck size={18} />
                  <span>OFFICIAL TERRAFORCE® LICENSEE</span>
                </div>
                <p style={{ color: '#EBEBE6', fontSize: '0.9rem', margin: 0, lineHeight: 1.6 }}>
                  {COMPANY_INFO.licenseText}. We also offer professional turnkey installation services.
                </p>
              </div>

            </div>

            {/* Right 7 Columns: Interactive Consultation Form */}
            <div style={{ gridColumn: 'span 7' }}>
              <div style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-dark)',
                borderRadius: '4px',
                padding: '2.5rem 3rem',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.45)'
              }}>
                {!submitted ? (
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
                      <span className="mono-tag terracotta">ENGINEERED CONSULTATION FORM</span>
                    </div>

                    <h2 style={{ fontSize: '2.3rem', color: '#FFFFFF', marginBottom: '0.6rem' }}>
                      Send Us Your Project Requirements
                    </h2>

                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '2rem' }}>
                      Tell us about your retaining wall or structural precast project. Our Free State sales engineering team will respond within 24 working hours.
                    </p>

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                      
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#FFF', marginBottom: '0.4rem' }}>
                            FULL NAME *
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            style={{
                              width: '100%',
                              padding: '0.8rem 1rem',
                              backgroundColor: 'rgba(255, 255, 255, 0.04)',
                              border: '1px solid var(--border-dark)',
                              borderRadius: '3px',
                              color: '#FFF',
                              fontSize: '0.95rem',
                              fontFamily: 'var(--font-body)'
                            }}
                          />
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#FFF', marginBottom: '0.4rem' }}>
                            COMPANY OR MUNICIPALITY
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Company Name (Optional)"
                            style={{
                              width: '100%',
                              padding: '0.8rem 1rem',
                              backgroundColor: 'rgba(255, 255, 255, 0.04)',
                              border: '1px solid var(--border-dark)',
                              borderRadius: '3px',
                              color: '#FFF',
                              fontSize: '0.95rem',
                              fontFamily: 'var(--font-body)'
                            }}
                          />
                        </div>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#FFF', marginBottom: '0.4rem' }}>
                            CELL / PHONE NUMBER *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+27 83 000 0000"
                            style={{
                              width: '100%',
                              padding: '0.8rem 1rem',
                              backgroundColor: 'rgba(255, 255, 255, 0.04)',
                              border: '1px solid var(--border-dark)',
                              borderRadius: '3px',
                              color: '#FFF',
                              fontSize: '0.95rem',
                              fontFamily: 'var(--font-body)'
                            }}
                          />
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#FFF', marginBottom: '0.4rem' }}>
                            EMAIL ADDRESS *
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="name@company.co.za"
                            style={{
                              width: '100%',
                              padding: '0.8rem 1rem',
                              backgroundColor: 'rgba(255, 255, 255, 0.04)',
                              border: '1px solid var(--border-dark)',
                              borderRadius: '3px',
                              color: '#FFF',
                              fontSize: '0.95rem',
                              fontFamily: 'var(--font-body)'
                            }}
                          />
                        </div>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#FFF', marginBottom: '0.4rem' }}>
                            SERVICE OF INTEREST
                          </label>
                          <select
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleChange}
                            style={{
                              width: '100%',
                              padding: '0.8rem 1rem',
                              backgroundColor: 'var(--bg-primary)',
                              border: '1px solid var(--border-dark)',
                              borderRadius: '3px',
                              color: '#FFF',
                              fontSize: '0.95rem',
                              fontFamily: 'var(--font-body)'
                            }}
                          >
                            {SERVICES_DATA.map((s) => (
                              <option key={s.id} value={s.id}>{s.title}</option>
                            ))}
                            <option value="custom">Other Custom Precast Inquiry</option>
                          </select>
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#FFF', marginBottom: '0.4rem' }}>
                            TURNKEY INSTALLATION NEEDED?
                          </label>
                          <select
                            name="requireInstallation"
                            value={formData.requireInstallation}
                            onChange={handleChange}
                            style={{
                              width: '100%',
                              padding: '0.8rem 1rem',
                              backgroundColor: 'var(--bg-primary)',
                              border: '1px solid var(--border-dark)',
                              borderRadius: '3px',
                              color: '#FFF',
                              fontSize: '0.95rem',
                              fontFamily: 'var(--font-body)'
                            }}
                          >
                            <option value="yes">Yes — Include Turnkey Installation</option>
                            <option value="no">No — Supply & Delivery Only</option>
                            <option value="consult">Unsure — Need Engineer Assessment</option>
                          </select>
                        </div>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#FFF', marginBottom: '0.4rem' }}>
                            SITE TOWN / LOCATION
                          </label>
                          <input
                            type="text"
                            name="townLocation"
                            value={formData.townLocation}
                            onChange={handleChange}
                            placeholder="e.g. Bloemfontein / Caledon / Welkom"
                            style={{
                              width: '100%',
                              padding: '0.8rem 1rem',
                              backgroundColor: 'rgba(255, 255, 255, 0.04)',
                              border: '1px solid var(--border-dark)',
                              borderRadius: '3px',
                              color: '#FFF',
                              fontSize: '0.95rem',
                              fontFamily: 'var(--font-body)'
                            }}
                          />
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#FFF', marginBottom: '0.4rem' }}>
                            ESTIMATED METERAGE / SIZE
                          </label>
                          <input
                            type="text"
                            name="meterage"
                            value={formData.meterage}
                            onChange={handleChange}
                            placeholder="e.g. 150 m² wall / 20 linear meters"
                            style={{
                              width: '100%',
                              padding: '0.8rem 1rem',
                              backgroundColor: 'rgba(255, 255, 255, 0.04)',
                              border: '1px solid var(--border-dark)',
                              borderRadius: '3px',
                              color: '#FFF',
                              fontSize: '0.95rem',
                              fontFamily: 'var(--font-body)'
                            }}
                          />
                        </div>
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#FFF', marginBottom: '0.4rem' }}>
                          PROJECT DETAILS & SPECIFICATIONS
                        </label>
                        <textarea
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Describe soil conditions, height requirements, vygies planting preferences, or timeline..."
                          style={{
                            width: '100%',
                            padding: '0.8rem 1rem',
                            backgroundColor: 'rgba(255, 255, 255, 0.04)',
                            border: '1px solid var(--border-dark)',
                            borderRadius: '3px',
                            color: '#FFF',
                            fontSize: '0.95rem',
                            fontFamily: 'var(--font-body)'
                          }}
                        />
                      </div>

                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                        paddingTop: '1.25rem',
                        flexWrap: 'wrap',
                        gap: '1rem'
                      }}>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                          Directly sent to: <strong style={{ color: '#FFF' }}>{COMPANY_INFO.emailPrimary}</strong>
                        </div>
                        <button
                          type="submit"
                          disabled={loading}
                          className="btn btn-primary"
                          style={{ padding: '0.9rem 2.5rem', fontSize: '1rem' }}
                        >
                          {loading ? 'Sending Request...' : 'Submit Project Consultation'}
                          <Send size={16} />
                        </button>
                      </div>

                    </form>
                  </div>
                ) : (
                  <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                    <div style={{
                      width: '68px',
                      height: '68px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(46, 83, 65, 0.25)',
                      color: '#79D1A5',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.5rem'
                    }}>
                      <CheckCircle size={38} />
                    </div>

                    <h3 style={{ fontSize: '2rem', color: '#232623', marginBottom: '0.8rem' }}>
                      Consultation Request Sent
                    </h3>

                    <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '480px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
                      Thank you, <strong style={{ color: '#232623' }}>{formData.name}</strong>. Your project requirements have been forwarded directly to <strong style={{ color: '#6FA240' }}>{COMPANY_INFO.contactPerson}</strong> at Ecocrete Free State.
                    </p>

                    <div style={{
                      backgroundColor: '#F2F5EF',
                      border: '1px solid #BEC6B9',
                      padding: '1.25rem',
                      borderRadius: '6px',
                      maxWidth: '420px',
                      margin: '0 auto 2rem',
                      textAlign: 'left'
                    }}>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>FOR URGENT MATTERS / DIRECT WHATSAPP:</div>
                      <a 
                        href={`tel:${COMPANY_INFO.phoneClean}`}
                        style={{ color: '#232623', fontWeight: 700, fontSize: '1.2rem', textDecoration: 'none', display: 'block', marginBottom: '0.3rem' }}
                      >
                        {COMPANY_INFO.phone}
                      </a>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                        Email: {COMPANY_INFO.emailPrimary} | {COMPANY_INFO.emailSecondary}
                      </div>
                    </div>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn btn-outline-dark"
                      style={{ padding: '0.8rem 2rem' }}
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
