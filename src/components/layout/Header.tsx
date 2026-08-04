import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight, 
  ShieldCheck, 
  FileText
} from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA } from '../../data/ecocreteData';

interface HeaderProps {
  currentView: 'home' | 'services' | 'products' | 'about' | 'contact' | 'service-detail';
  onNavigate: (view: 'home' | 'services' | 'products' | 'about' | 'contact', serviceId?: string) => void;
  onOpenQuoteModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  onOpenQuoteModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const handleNavClick = (view: 'home' | 'services' | 'products' | 'about' | 'contact', serviceId?: string) => {
    onNavigate(view, serviceId);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  return (
    <header className="main-header">
      {/* Top Contact Bar */}
      <div className="top-contact-bar">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#92D04F' }}>
              <ShieldCheck size={14} />
              <strong>{COMPANY_INFO.licenseText}</strong>
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <MapPin size={14} />
              <span>{COMPANY_INFO.location} • Serving Central South Africa</span>
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <a 
              href={`tel:${COMPANY_INFO.phoneClean}`} 
              style={{ color: '#FCFDFA', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600 }}
            >
              <Phone size={13} style={{ color: '#92D04F' }} />
              <span>{COMPANY_INFO.contactPerson}: {COMPANY_INFO.phone}</span>
            </a>
            <a 
              href={`mailto:${COMPANY_INFO.emailPrimary}`} 
              style={{ color: '#BEC6B9', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
            >
              <Mail size={13} />
              <span>{COMPANY_INFO.emailPrimary}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Architectural Navigation */}
      <div className="container" style={{ padding: '0.9rem 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Logo & Brand Identity */}
          <div 
            onClick={() => handleNavClick('home')}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.85rem', 
              cursor: 'pointer',
              userSelect: 'none'
            }}
          >
            <div style={{
              height: '48px',
              backgroundColor: '#FCFDFA',
              border: '1px solid #BEC6B9',
              borderRadius: '6px',
              padding: '0.25rem 0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(0,0,0,0.06)'
            }}>
              <img 
                src="/images/ecocrete-logo.jpg" 
                alt="Ecocrete Logo" 
                style={{ height: '38px', width: 'auto', objectFit: 'contain' }}
              />
            </div>
            <div>
              <div style={{ 
                fontFamily: 'var(--font-display)', 
                fontSize: '1.5rem', 
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

          {/* Desktop Navigation Links */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="desktop-nav">
            <button
              onClick={() => handleNavClick('home')}
              className={`nav-link ${currentView === 'home' ? 'active' : ''}`}
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.95rem' }}
            >
              Home
            </button>

            {/* Services Dropdown Trigger */}
            <div 
              style={{ position: 'relative' }}
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                onClick={() => handleNavClick('services')}
                className={`nav-link ${currentView === 'services' || currentView === 'service-detail' ? 'active' : ''}`}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  cursor: 'pointer', 
                  fontSize: '0.95rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}
              >
                <span>Services</span>
                <ChevronDown size={14} style={{ transform: servicesDropdownOpen ? 'rotate(180deg)' : 'none', transition: '0.2s' }} />
              </button>

              {/* Architectural Dropdown Menu */}
              {servicesDropdownOpen && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  width: '360px',
                  backgroundColor: '#FCFDFA',
                  border: '1px solid #BEC6B9',
                  borderRadius: '6px',
                  boxShadow: '0 15px 40px rgba(0, 0, 0, 0.12)',
                  padding: '0.6rem 0',
                  zIndex: 200
                }}>
                  <div style={{ padding: '0.4rem 1rem 0.6rem', borderBottom: '1px solid #BEC6B9', marginBottom: '0.4rem' }}>
                    <span className="mono-tag terracotta" style={{ fontSize: '0.65rem' }}>
                      Expandable Service Specs
                    </span>
                  </div>
                  {SERVICES_DATA.map((service) => (
                    <div
                      key={service.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNavClick('services', service.id);
                      }}
                      style={{
                        padding: '0.7rem 1.2rem',
                        cursor: 'pointer',
                        transition: 'background 0.15s',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.2rem',
                        borderBottom: '1px solid #EBEFE8'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F2F5EF'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      <div style={{ fontWeight: 600, fontSize: '0.92rem', color: '#232623', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span>{service.title}</span>
                        <ArrowRight size={13} style={{ color: '#92D04F' }} />
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                        {service.category}
                      </div>
                    </div>
                  ))}
                  <div 
                    onClick={() => handleNavClick('services')}
                    style={{
                      padding: '0.7rem 1.2rem',
                      textAlign: 'center',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: '#6FA240',
                      cursor: 'pointer',
                      borderTop: '1px solid #BEC6B9'
                    }}
                  >
                    View All 5 Specialized Services →
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('products')}
              className={`nav-link ${currentView === 'products' ? 'active' : ''}`}
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.95rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
            >
              <span>Products</span>
              <span className="mono-tag dark" style={{ fontSize: '0.65rem', padding: '0.15rem 0.4rem' }}>SABS</span>
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`nav-link ${currentView === 'about' ? 'active' : ''}`}
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.95rem' }}
            >
              About Us
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`nav-link ${currentView === 'contact' ? 'active' : ''}`}
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.95rem' }}
            >
              Contact
            </button>
          </nav>

          {/* Action CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }} className="header-actions">
            <button
              onClick={onOpenQuoteModal}
              className="btn btn-primary"
              style={{ padding: '0.65rem 1.25rem', fontSize: '0.88rem' }}
            >
              <FileText size={15} />
              <span>Request Quote</span>
            </button>

            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="btn btn-outline-dark"
              style={{ padding: '0.65rem 1rem', fontSize: '0.88rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
              title="Call Elza Liebenberg Direct"
            >
              <Phone size={15} style={{ color: '#92D04F' }} />
              <span style={{ fontWeight: 700 }}>+27 83 655 6590</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: 'none',
                border: '1px solid var(--border-dark)',
                color: '#FFFFFF',
                padding: '0.5rem',
                borderRadius: '3px',
                cursor: 'pointer',
                display: 'none'
              }}
              className="mobile-toggle-btn"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: 'var(--bg-surface)',
          borderBottom: '1px solid var(--border-dark)',
          padding: '1.25rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.8rem'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <button 
              onClick={() => handleNavClick('home')}
              style={{ textAlign: 'left', padding: '0.75rem', background: 'none', border: 'none', color: '#FFF', fontSize: '1.1rem', fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.08)' }}
            >
              1. Home
            </button>
            <button 
              onClick={() => handleNavClick('services')}
              style={{ textAlign: 'left', padding: '0.75rem', background: 'none', border: 'none', color: '#FFF', fontSize: '1.1rem', fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.08)' }}
            >
              2. Services & Engineering
            </button>
            <button 
              onClick={() => handleNavClick('products')}
              style={{ textAlign: 'left', padding: '0.75rem', background: 'none', border: 'none', color: '#FFF', fontSize: '1.1rem', fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.08)' }}
            >
              3. Products Catalog (SABS)
            </button>
            <button 
              onClick={() => handleNavClick('about')}
              style={{ textAlign: 'left', padding: '0.75rem', background: 'none', border: 'none', color: '#FFF', fontSize: '1.1rem', fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.08)' }}
            >
              4. About Ecocrete
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              style={{ textAlign: 'left', padding: '0.75rem', background: 'none', border: 'none', color: '#FFF', fontSize: '1.1rem', fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.08)' }}
            >
              5. Contact & Site Consultation
            </button>
          </div>

          <div style={{ marginTop: '0.5rem', padding: '1rem', backgroundColor: '#F2F5EF', border: '1px solid #BEC6B9', borderRadius: '6px' }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>DIRECT SALES CONTACT</div>
            <div style={{ fontWeight: 700, color: '#232623', fontSize: '0.95rem' }}>{COMPANY_INFO.contactPerson}</div>
            <div style={{ fontSize: '0.9rem', color: '#92D04F', fontWeight: 700, margin: '0.2rem 0' }}>{COMPANY_INFO.phone}</div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{COMPANY_INFO.emailPrimary}</div>
          </div>
        </div>
      )}

      {/* Inline Responsive Styles for Mobile Toggle */}
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle-btn { display: inline-flex !important; }
          .header-actions span { display: none; }
        }
      `}</style>
    </header>
  );
};
