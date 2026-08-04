import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  ArrowUpRight, 
  Clock, 
  FileText
} from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA } from '../../data/ecocreteData';

interface FooterProps {
  onNavigate: (view: 'home' | 'services' | 'products' | 'about' | 'contact', serviceId?: string) => void;
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenQuoteModal,
}) => {
  return (
    <footer style={{ 
      backgroundColor: '#0A0B0B', 
      borderTop: '1px solid var(--border-dark)', 
      color: 'var(--text-main)', 
      paddingTop: '4.5rem',
      paddingBottom: '2.5rem'
    }}>
      <div className="container">
        {/* Top Floating CTA Section inside Footer */}
        <div style={{
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid rgba(146, 208, 79, 0.4)',
          borderRadius: '4px',
          padding: '2.5rem 3rem',
          marginBottom: '4rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '2rem',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)'
        }}>
          <div>
            <div className="mono-tag terracotta" style={{ marginBottom: '0.8rem' }}>
              <span>ENGINEERED TO PERFECTION • TURNKEY INSTALLATION</span>
            </div>
            <h3 style={{ fontSize: '1.85rem', color: '#FFFFFF', marginBottom: '0.5rem', maxWidth: '640px' }}>
              Ready to specify Ecocrete for your next retaining or civil infrastructure project?
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '640px' }}>
              Contact Elza Liebenberg for direct factory pricing, structural SABS compliance certificates, and Free State site delivery.
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={onOpenQuoteModal}
              className="btn btn-primary"
              style={{ padding: '1rem 2rem', fontSize: '1rem' }}
            >
              <FileText size={18} />
              <span>Request Engineering Quote</span>
            </button>
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="btn btn-outline-dark"
              style={{ padding: '1rem 1.5rem', fontSize: '1rem' }}
            >
              <Phone size={18} style={{ color: '#92D04F' }} />
              <span>Call +27 83 655 6590</span>
            </a>
          </div>
        </div>

        {/* 4-Column Architectural Footer Grid */}
        <div className="arch-grid" style={{ marginBottom: '4rem' }}>
          
          {/* Column 1: Brand & License Attribution */}
          <div style={{ gridColumn: 'span 4' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
              <div style={{
                height: '46px',
                backgroundColor: '#FCFDFA',
                border: '1px solid #BEC6B9',
                borderRadius: '6px',
                padding: '0.2rem 0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img 
                  src="/images/ecocrete-logo.jpg" 
                  alt="Ecocrete Logo" 
                  style={{ height: '36px', width: 'auto', objectFit: 'contain' }}
                />
              </div>
              <div>
                <div style={{ 
                  fontFamily: 'var(--font-display)', 
                  fontSize: '1.45rem', 
                  fontWeight: 700, 
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <span style={{ color: '#7C7C7D' }}>eco</span>
                  <span style={{ color: '#92D04F' }}>crete</span>
                </div>
                <div style={{ 
                  fontFamily: 'var(--font-body)', 
                  fontSize: '0.72rem', 
                  color: '#7C7C7D', 
                  fontWeight: 500, 
                  marginTop: '3px' 
                }}>
                  Your precast concrete product specialist
                </div>
              </div>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              Leading manufacturer of SABS-tested precast concrete products and structural retaining wall systems.
            </p>

            {/* Official Terraforce License Attribution Box */}
            <div style={{
              backgroundColor: 'rgba(46, 83, 65, 0.18)',
              border: '1px solid rgba(121, 209, 165, 0.25)',
              padding: '1rem 1.2rem',
              borderRadius: '4px',
              marginBottom: '1.5rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#79D1A5', fontWeight: 700, fontSize: '0.82rem', marginBottom: '0.3rem' }}>
                <ShieldCheck size={16} />
                <span>OFFICIAL TERRAFORCE® LICENSEE</span>
              </div>
              <p style={{ color: '#EBEBE6', fontSize: '0.85rem', lineHeight: 1.5 }}>
                {COMPANY_INFO.licenseText}. We also offer professional installation services.
              </p>
            </div>
          </div>

          {/* Column 2: Core 5 Navigation & Quick Links */}
          <div style={{ gridColumn: 'span 2' }}>
            <h4 style={{ fontSize: '1rem', color: '#FFFFFF', marginBottom: '1.25rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Main Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li>
                <button 
                  onClick={() => onNavigate('home')}
                  style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '0.92rem', transition: '0.2s', padding: 0 }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FFF'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                >
                  1. Home Page
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('services')}
                  style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '0.92rem', transition: '0.2s', padding: 0 }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FFF'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                >
                  2. Services & Engineering
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('products')}
                  style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '0.92rem', transition: '0.2s', padding: 0 }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FFF'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                >
                  3. Products Showcase (SABS)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('about')}
                  style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '0.92rem', transition: '0.2s', padding: 0 }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FFF'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                >
                  4. About Ecocrete
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contact')}
                  style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '0.92rem', transition: '0.2s', padding: 0 }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FFF'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                >
                  5. Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Expandable Services & Case Studies */}
          <div style={{ gridColumn: 'span 3' }}>
            <h4 style={{ fontSize: '1rem', color: '#FFFFFF', marginBottom: '1.25rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Specialized Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => onNavigate('services', srv.id)}
                    style={{ 
                      background: 'none', 
                      border: 'none', 
                      color: 'var(--text-muted)', 
                      cursor: 'pointer', 
                      fontSize: '0.92rem', 
                      transition: '0.2s', 
                      padding: 0,
                      textAlign: 'left',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#92D04F'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                  >
                    <span>{srv.title}</span>
                    <ArrowUpRight size={13} />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Dedicated Contact Information */}
          <div style={{ gridColumn: 'span 3' }}>
            <h4 style={{ fontSize: '1rem', color: '#FFFFFF', marginBottom: '1.25rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Direct Factory Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem' }}>
              <div>
                <div style={{ color: '#92D04F', fontWeight: 700, fontSize: '0.78rem', textTransform: 'uppercase' }}>
                  MANAGING DIRECTOR & SALES
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF' }}>
                  {COMPANY_INFO.contactPerson}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Phone size={17} style={{ color: '#92D04F' }} />
                <a 
                  href={`tel:${COMPANY_INFO.phoneClean}`}
                  style={{ color: '#FFFFFF', textDecoration: 'none', fontWeight: 700 }}
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <Mail size={17} style={{ color: '#A3A6A4', marginTop: '3px' }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                  <a href={`mailto:${COMPANY_INFO.emailPrimary}`} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
                    {COMPANY_INFO.emailPrimary}
                  </a>
                  <a href={`mailto:${COMPANY_INFO.emailSecondary}`} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
                    {COMPANY_INFO.emailSecondary}
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <MapPin size={17} style={{ color: '#79D1A5', marginTop: '3px' }} />
                <span style={{ color: 'var(--text-muted)' }}>
                  {COMPANY_INFO.location} • Serving Free State, Western Cape border & Central SA
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                <Clock size={16} />
                <span>{COMPANY_INFO.hours.weekdays}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Standards */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.82rem',
          color: 'var(--text-muted)'
        }}>
          <div>
            © {new Date().getFullYear()} Ecocrete (Free State) • All rights reserved. • SABS & Terraforce® Licensed Manufacturing.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span>SABS 1215 Compliant</span>
            <span>•</span>
            <span>40 MPa High-Grade Mix</span>
            <span>•</span>
            <span>ISO Quality Assured</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
