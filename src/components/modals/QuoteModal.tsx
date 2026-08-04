import React, { useState } from 'react';
import { X, Send, CheckCircle, ShieldCheck, Phone } from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA, PRODUCTS_CATALOG } from '../../data/ecocreteData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
  preselectedProductId?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceId,
  preselectedProductId
}) => {
  const targetProduct = preselectedProductId
    ? PRODUCTS_CATALOG.find((p) => p.id === preselectedProductId)
    : undefined;

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    location: '',
    serviceType: preselectedServiceId || 'terraforce-retaining-walls',
    quantityMeterage: targetProduct ? `Inquiring about ${targetProduct.name} (${targetProduct.code})` : '',
    installationRequired: 'yes',
    notes: ''
  });

  if (!isOpen) return null;

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
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ position: 'relative', padding: '2rem 2.5rem' }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'none',
            border: 'none',
            color: 'var(--text-muted)',
            cursor: 'pointer',
            padding: '0.4rem'
          }}
          aria-label="Close Modal"
        >
          <X size={22} />
        </button>

        {!submitted ? (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
              <span className="mono-tag terracotta">ENGINEERED QUOTATION</span>
              <span className="mono-tag green">SABS QUALITY</span>
            </div>
            <h3 style={{ fontSize: '1.75rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>
              Request Engineering Quote & Site Consultation
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '1.75rem' }}>
              Direct factory pricing from Ecocrete Free State. Our engineering sales team ({COMPANY_INFO.contactPerson}) will respond with SABS technical schedules within 24 working hours.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#FFF', marginBottom: '0.4rem' }}>
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Hendrik / Elza"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-dark)',
                      borderRadius: '3px',
                      color: '#FFF',
                      fontSize: '0.92rem',
                      fontFamily: 'var(--font-body)'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#FFF', marginBottom: '0.4rem' }}>
                    COMPANY / MUNICIPALITY
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. Free State Civil Dev"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-dark)',
                      borderRadius: '3px',
                      color: '#FFF',
                      fontSize: '0.92rem',
                      fontFamily: 'var(--font-body)'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#FFF', marginBottom: '0.4rem' }}>
                    PHONE NUMBER (CELL) *
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
                      padding: '0.75rem 1rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-dark)',
                      borderRadius: '3px',
                      color: '#FFF',
                      fontSize: '0.92rem',
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
                      padding: '0.75rem 1rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-dark)',
                      borderRadius: '3px',
                      color: '#FFF',
                      fontSize: '0.92rem',
                      fontFamily: 'var(--font-body)'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#FFF', marginBottom: '0.4rem' }}>
                    SERVICE OR SYSTEM NEEDED
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      backgroundColor: 'var(--bg-primary)',
                      border: '1px solid var(--border-dark)',
                      borderRadius: '3px',
                      color: '#FFF',
                      fontSize: '0.92rem',
                      fontFamily: 'var(--font-body)'
                    }}
                  >
                    {SERVICES_DATA.map(s => (
                      <option key={s.id} value={s.id}>{s.title}</option>
                    ))}
                    <option value="custom">Other Custom Precast Inquiry</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#FFF', marginBottom: '0.4rem' }}>
                    TURNKEY INSTALLATION REQUIRED?
                  </label>
                  <select
                    name="installationRequired"
                    value={formData.installationRequired}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      backgroundColor: 'var(--bg-primary)',
                      border: '1px solid var(--border-dark)',
                      borderRadius: '3px',
                      color: '#FFF',
                      fontSize: '0.92rem',
                      fontFamily: 'var(--font-body)'
                    }}
                  >
                    <option value="yes">Yes — Include Turnkey Installation Service</option>
                    <option value="no">No — Supply & Delivery of Blocks Only</option>
                    <option value="unsure">Unsure — Request Engineer Site Consultation</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#FFF', marginBottom: '0.4rem' }}>
                    PROJECT SITE LOCATION / TOWN
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g. Bloemfontein / Caledon / Welkom"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-dark)',
                      borderRadius: '3px',
                      color: '#FFF',
                      fontSize: '0.92rem',
                      fontFamily: 'var(--font-body)'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#FFF', marginBottom: '0.4rem' }}>
                    ESTIMATED SIZE / METERAGE
                  </label>
                  <input
                    type="text"
                    name="quantityMeterage"
                    value={formData.quantityMeterage}
                    onChange={handleChange}
                    placeholder="e.g. 150 m² wall / 40 linear meters"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-dark)',
                      borderRadius: '3px',
                      color: '#FFF',
                      fontSize: '0.92rem',
                      fontFamily: 'var(--font-body)'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#FFF', marginBottom: '0.4rem' }}>
                  PROJECT NOTES & ENGINEERING REQUIREMENTS
                </label>
                <textarea
                  name="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Tell us about slope angles, soil conditions, vygies planting, or specific SABS requirements..."
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-dark)',
                    borderRadius: '3px',
                    color: '#FFF',
                    fontSize: '0.92rem',
                    fontFamily: 'var(--font-body)'
                  }}
                />
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                padding: '0.8rem 1rem',
                border: '1px solid var(--border-dark)',
                borderRadius: '3px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  <ShieldCheck size={16} style={{ color: '#79D1A5' }} />
                  <span>Licensed Terraforce® Manufacture • Direct to {COMPANY_INFO.emailPrimary}</span>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary"
                  style={{ padding: '0.85rem 2rem' }}
                >
                  {loading ? 'Sending Request...' : 'Submit Quote Request'}
                  <Send size={15} />
                </button>
              </div>

            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <div style={{ 
              width: '64px', 
              height: '64px', 
              backgroundColor: 'rgba(46, 83, 65, 0.25)', 
              color: '#79D1A5', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              margin: '0 auto 1.5rem' 
            }}>
              <CheckCircle size={36} />
            </div>
            <h3 style={{ fontSize: '1.85rem', color: '#FFFFFF', marginBottom: '0.6rem' }}>
              Quote Request Received
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '480px', margin: '0 auto 1.5rem', lineHeight: 1.6 }}>
              Thank you, <strong style={{ color: '#232623' }}>{formData.name}</strong>. Your engineering quotation request has been routed directly to <strong style={{ color: '#6FA240' }}>{COMPANY_INFO.contactPerson}</strong> at Ecocrete Free State.
            </p>

            <div style={{
              backgroundColor: '#F2F5EF',
              border: '1px solid #BEC6B9',
              padding: '1rem 1.5rem',
              borderRadius: '6px',
              maxWidth: '420px',
              margin: '0 auto 2rem',
              textAlign: 'left'
            }}>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>URGENT SITE ASSISTANCE? CALL US NOW:</div>
              <a href={`tel:${COMPANY_INFO.phoneClean}`} style={{ color: '#232623', fontWeight: 700, fontSize: '1.1rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={17} style={{ color: '#92D04F' }} />
                <span>{COMPANY_INFO.phone} ({COMPANY_INFO.contactPerson})</span>
              </a>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>
                Email: {COMPANY_INFO.emailPrimary} | {COMPANY_INFO.emailSecondary}
              </div>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="btn btn-outline-dark"
              style={{ padding: '0.8rem 2rem' }}
            >
              Close & Return to Site
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
