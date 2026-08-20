import React, { useState } from 'react';
import {
  Phone,
  Mail,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  FileText,
  Clock
} from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA } from '../../data/ecocreteData';

interface HeaderProps {
  currentView: 'home' | 'services' | 'products' | 'about' | 'contact' | 'service-detail';
  onNavigate: (view: 'home' | 'services' | 'products' | 'about' | 'contact', serviceId?: string) => void;
  onOpenQuoteModal: () => void;
}

type NavId = 'home' | 'services' | 'products' | 'about' | 'contact';

const NAV_ITEMS: { id: NavId; label: string; matches?: string[] }[] = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services', matches: ['services', 'service-detail'] },
  { id: 'products', label: 'Products' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' }
];

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  onOpenQuoteModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const isActive = (item: { id: NavId; matches?: string[] }) =>
    currentView === item.id || (item.matches ?? []).includes(currentView);

  const handleNavClick = (view: NavId, serviceId?: string) => {
    onNavigate(view, serviceId);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  return (
    <header className="main-header" style={{ position: 'sticky', top: 0, zIndex: 100 }}>

      {/* ---------- Top info bar (dark) ---------- */}
      <div style={{ backgroundColor: '#141816', color: '#E4E7E2', fontSize: '0.82rem' }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          padding: '0.55rem 1.5rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}>
              <Clock size={13} style={{ color: '#92D04F' }} />
              <span>{COMPANY_INFO.hours.weekdays}</span>
            </span>
            <a href={`tel:${COMPANY_INFO.landlineClean}`} style={{
              color: '#E4E7E2', textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600
            }}>
              <Phone size={13} style={{ color: '#92D04F' }} />
              <span>Yard {COMPANY_INFO.landline}</span>
            </a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }} className="top-bar-right">
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              style={{ color: '#FFFFFF', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontWeight: 700 }}
            >
              <Phone size={13} style={{ color: '#92D04F' }} />
              {COMPANY_INFO.contactPerson}: {COMPANY_INFO.phone}
            </a>
            <a
              href={`mailto:${COMPANY_INFO.emailPrimary}`}
              style={{ color: '#BEC6B9', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
              className="top-bar-email"
            >
              <Mail size={13} />
              {COMPANY_INFO.emailPrimary}
            </a>
          </div>
        </div>
      </div>

      {/* ---------- Main nav (white) ---------- */}
      <div style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #E6E9E2' }}>
        <div className="container" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0.85rem 1.5rem'
        }}>

          {/* Logo */}
          <div
            onClick={() => handleNavClick('home')}
            style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer', userSelect: 'none' }}
          >
            <div style={{
              height: '46px', width: '46px',
              backgroundColor: '#FFFFFF',
              border: '1px solid #E6E9E2',
              borderRadius: '6px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              overflow: 'hidden'
            }}>
              <img src="/images/ecocrete-logo.jpg" alt="Ecocrete" style={{ height: '38px', width: 'auto', objectFit: 'contain' }} />
            </div>
            <div>
              <div style={{
                fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 700,
                letterSpacing: '-0.02em', lineHeight: 1
              }}>
                <span style={{ color: '#232623' }}>eco</span>
                <span style={{ color: '#92D04F' }}>crete</span>
              </div>
              <div style={{ fontSize: '0.72rem', color: '#7C7C7D', marginTop: '3px' }}>
                Your precast &amp; concrete product specialist
              </div>
            </div>
          </div>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="desktop-nav">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item);
              const isServices = item.id === 'services';

              if (isServices) {
                return (
                  <div
                    key={item.id}
                    style={{ position: 'relative' }}
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <button
                      onClick={() => handleNavClick('services')}
                      className="nav-link-clean"
                      style={{
                        background: 'none', border: 'none', cursor: 'pointer',
                        fontFamily: 'inherit', fontSize: '0.92rem', fontWeight: 600,
                        color: active ? '#232623' : '#4A4E4A',
                        padding: '1.4rem 0.9rem 1.35rem',
                        position: 'relative',
                        display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                        borderBottom: active ? '3px solid #92D04F' : '3px solid transparent',
                        transition: 'color 0.15s, border-color 0.15s'
                      }}
                    >
                      Services <ChevronDown size={13} style={{ transform: servicesDropdownOpen ? 'rotate(180deg)' : 'none', transition: '0.2s' }} />
                    </button>

                    {servicesDropdownOpen && (
                      <div style={{
                        position: 'absolute', top: '100%', left: 0, width: '320px',
                        backgroundColor: '#FFFFFF', border: '1px solid #E6E9E2',
                        borderRadius: '6px',
                        boxShadow: '0 15px 40px rgba(0,0,0,0.10)',
                        padding: '0.4rem 0', zIndex: 200
                      }}>
                        {SERVICES_DATA.map((service) => (
                          <div
                            key={service.id}
                            onClick={(e) => { e.stopPropagation(); handleNavClick('services', service.id); }}
                            style={{
                              padding: '0.75rem 1.1rem', cursor: 'pointer',
                              display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem',
                              transition: 'background 0.15s'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F5F7F3'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                          >
                            <div>
                              <div style={{ fontWeight: 600, fontSize: '0.92rem', color: '#232623' }}>{service.title}</div>
                              <div style={{ fontSize: '0.76rem', color: '#7C7C7D' }}>{service.category}</div>
                            </div>
                            <ArrowRight size={13} style={{ color: '#92D04F', flexShrink: 0 }} />
                          </div>
                        ))}
                        <div
                          onClick={() => handleNavClick('services')}
                          style={{
                            padding: '0.7rem 1.1rem', textAlign: 'center',
                            fontSize: '0.8rem', fontWeight: 700, color: '#6FA240',
                            cursor: 'pointer', borderTop: '1px solid #E6E9E2'
                          }}
                        >
                          View all services →
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="nav-link-clean"
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    fontFamily: 'inherit', fontSize: '0.92rem', fontWeight: 600,
                    color: active ? '#232623' : '#4A4E4A',
                    padding: '1.4rem 0.9rem 1.35rem',
                    borderBottom: active ? '3px solid #92D04F' : '3px solid transparent',
                    transition: 'color 0.15s, border-color 0.15s'
                  }}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }} className="header-actions">
            <button
              onClick={onOpenQuoteModal}
              style={{
                backgroundColor: '#92D04F', color: '#141816', border: 'none',
                padding: '0.7rem 1.35rem', borderRadius: '4px',
                fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.03em', textTransform: 'uppercase',
                cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#7ABC3A')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#92D04F')}
            >
              <FileText size={15} />
              Request a Quote
            </button>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle-btn"
              aria-label="Toggle navigation menu"
              style={{
                background: 'none', border: '1px solid #E6E9E2',
                color: '#232623', padding: '0.5rem', borderRadius: '4px',
                cursor: 'pointer', display: 'none'
              }}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* ---------- Mobile drawer ---------- */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #E6E9E2',
          padding: '1rem 1.25rem 1.5rem'
        }}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                style={{
                  textAlign: 'left', padding: '0.85rem 0.5rem',
                  background: 'none', border: 'none', borderBottom: '1px solid #F0F2ED',
                  color: '#232623', fontSize: '1rem', fontWeight: 600,
                  cursor: 'pointer', fontFamily: 'inherit'
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#F5F7F3', border: '1px solid #E6E9E2', borderRadius: '6px' }}>
            <div style={{ fontSize: '0.72rem', color: '#7C7C7D', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>Direct sales</div>
            <div style={{ fontWeight: 700, color: '#232623', fontSize: '0.95rem' }}>{COMPANY_INFO.contactPerson}</div>
            <a href={`tel:${COMPANY_INFO.phoneClean}`} style={{ fontSize: '0.98rem', color: '#6FA240', fontWeight: 700, textDecoration: 'none', display: 'block', margin: '0.2rem 0' }}>{COMPANY_INFO.phone}</a>
            <a href={`tel:${COMPANY_INFO.landlineClean}`} style={{ fontSize: '0.85rem', color: '#7C7C7D', textDecoration: 'none' }}>Yard: {COMPANY_INFO.landline}</a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle-btn { display: inline-flex !important; }
          .top-bar-email { display: none !important; }
        }
        @media (max-width: 640px) {
          .header-actions button:first-of-type span { display: none; }
        }
      `}</style>
    </header>
  );
};
