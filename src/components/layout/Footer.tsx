import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  FileText,
  ArrowRight
} from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA } from '../../data/ecocreteData';

interface FooterProps {
  onNavigate: (view: 'home' | 'services' | 'products' | 'about' | 'contact', serviceId?: string) => void;
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#141816', color: '#C7CCC7' }}>

      {/* ---------- Top CTA band ---------- */}
      <div style={{ backgroundColor: '#1B201D', borderBottom: '1px solid #262B27' }}>
        <div className="container" style={{
          padding: '3rem 1.5rem',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          gap: '2rem', flexWrap: 'wrap'
        }}>
          <div style={{ maxWidth: '620px' }}>
            <div style={{
              fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: '#92D04F', marginBottom: '0.6rem'
            }}>
              We manufacture &amp; install
            </div>
            <h3 style={{ fontSize: '1.9rem', margin: '0 0 0.6rem', color: '#FFFFFF', letterSpacing: '-0.015em', lineHeight: 1.15 }}>
              Ready to talk about your wall?
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', lineHeight: 1.55, margin: 0 }}>
              Call the yard, WhatsApp our sales team, or send us the site details and we&apos;ll come back with a quote.
              Small jobs and repairs welcome.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button
              onClick={onOpenQuoteModal}
              style={{
                backgroundColor: '#92D04F', color: '#141816', border: 'none',
                padding: '0.9rem 1.6rem', borderRadius: '4px',
                fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.03em', textTransform: 'uppercase',
                cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#7ABC3A')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#92D04F')}
            >
              <FileText size={16} /> Request a Quote
            </button>
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              style={{
                backgroundColor: 'transparent', color: '#FFFFFF',
                border: '2px solid rgba(255,255,255,0.35)',
                padding: '0.8rem 1.5rem', borderRadius: '4px',
                fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.03em', textTransform: 'uppercase',
                textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem'
              }}
            >
              <Phone size={16} /> {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* ---------- Columns ---------- */}
      <div className="container" style={{ padding: '3.5rem 1.5rem 2rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2.25rem'
        }}>

          {/* Brand */}
          <div style={{ gridColumn: 'span 1', minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{
                height: '44px', width: '44px',
                backgroundColor: '#FFFFFF', borderRadius: '6px',
                display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden'
              }}>
                <img src="/images/ecocrete-logo.jpg" alt="Ecocrete" style={{ height: '34px', width: 'auto', objectFit: 'contain' }} />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1 }}>
                  <span style={{ color: '#FFFFFF' }}>eco</span>
                  <span style={{ color: '#92D04F' }}>crete</span>
                </div>
                <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.55)', marginTop: '3px' }}>
                  Precast &amp; concrete specialist
                </div>
              </div>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>
              Thirty years casting precast concrete in the Free State — Walling, Terraforce® and the full Precast range.
            </p>
          </div>

          {/* Sitemap */}
          <div>
            <h4 style={{
              fontSize: '0.78rem', color: '#FFFFFF', marginBottom: '1rem',
              fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700
            }}>
              Explore
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {[
                { id: 'home' as const, label: 'Home' },
                { id: 'services' as const, label: 'Services' },
                { id: 'products' as const, label: 'Products' },
                { id: 'about' as const, label: 'About' },
                { id: 'contact' as const, label: 'Contact' }
              ].map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => onNavigate(l.id)}
                    style={{
                      background: 'none', border: 'none', padding: 0, cursor: 'pointer',
                      color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', fontFamily: 'inherit',
                      transition: 'color 0.15s'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{
              fontSize: '0.78rem', color: '#FFFFFF', marginBottom: '1rem',
              fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700
            }}>
              What we do
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {SERVICES_DATA.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onNavigate('services', s.id)}
                    style={{
                      background: 'none', border: 'none', padding: 0, cursor: 'pointer',
                      color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', fontFamily: 'inherit',
                      textAlign: 'left', display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                      transition: 'color 0.15s'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#92D04F')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                  >
                    {s.title} <ArrowRight size={12} />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{
              fontSize: '0.78rem', color: '#FFFFFF', marginBottom: '1rem',
              fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700
            }}>
              Get in touch
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <div>
                <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.15rem' }}>
                  Sales — {COMPANY_INFO.contactPerson}
                </div>
                <a href={`tel:${COMPANY_INFO.phoneClean}`} style={{ color: '#FFFFFF', textDecoration: 'none', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Phone size={14} style={{ color: '#92D04F' }} /> {COMPANY_INFO.phone}
                </a>
              </div>

              <div>
                <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.15rem' }}>Yard</div>
                <a href={`tel:${COMPANY_INFO.landlineClean}`} style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Phone size={14} style={{ color: '#92D04F' }} /> {COMPANY_INFO.landline}
                </a>
              </div>

              <div>
                <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.15rem' }}>Email</div>
                <a href={`mailto:${COMPANY_INFO.emailPrimary}`} style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Mail size={14} style={{ color: '#92D04F' }} /> {COMPANY_INFO.emailPrimary}
                </a>
              </div>

              <div>
                <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.15rem' }}>Location</div>
                <div style={{ color: 'rgba(255,255,255,0.85)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <MapPin size={14} style={{ color: '#92D04F' }} /> {COMPANY_INFO.location}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.15rem' }}>Hours</div>
                <div style={{ color: 'rgba(255,255,255,0.85)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Clock size={14} style={{ color: '#92D04F' }} /> {COMPANY_INFO.hours.weekdays}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Bottom bar ---------- */}
      <div style={{ borderTop: '1px solid #262B27' }}>
        <div className="container" style={{
          padding: '1.25rem 1.5rem',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          gap: '1rem', flexWrap: 'wrap',
          fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)'
        }}>
          <div>© {year} Ecocrete · Bloemfontein, Free State · All rights reserved.</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span>Terraforce® licensed manufacture</span>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>Bloemfontein, Free State</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
