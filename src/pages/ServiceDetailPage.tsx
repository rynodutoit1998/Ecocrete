import React from 'react';
import {
  ArrowLeft, ArrowRight, CheckCircle, FileText, Phone, ChevronRight,
  Award, Layers, Ruler, Leaf, Droplets, Clock, Truck, Shield, ShieldCheck,
  VolumeX, Zap, Sun, CheckSquare, Users, HelpCircle
} from 'lucide-react';
import { SERVICES_DATA, COMPANY_INFO, type ServiceDetail } from '../data/ecocreteData';

interface ServiceDetailPageProps {
  serviceId: string;
  onBackToServices: () => void;
  onSelectService: (id: string) => void;
  onOpenQuote: (serviceId?: string) => void;
}

const renderBenefitIcon = (name: string) => {
  const props = { size: 20, style: { color: '#6FA240' } };
  switch (name) {
    case 'Leaf': return <Leaf {...props} />;
    case 'Award': return <Award {...props} />;
    case 'ShieldCheck': return <ShieldCheck {...props} />;
    case 'Droplets': return <Droplets {...props} />;
    case 'Clock': return <Clock {...props} />;
    case 'Layers': return <Layers {...props} />;
    case 'Ruler': return <Ruler {...props} />;
    case 'Sun': return <Sun {...props} />;
    case 'Shield': return <Shield {...props} />;
    case 'VolumeX': return <VolumeX {...props} />;
    case 'Zap': return <Zap {...props} />;
    case 'Truck': return <Truck {...props} />;
    case 'CheckSquare': return <CheckSquare {...props} />;
    case 'Users': return <Users {...props} />;
    case 'Phone': return <Phone {...props} />;
    default: return <CheckCircle {...props} />;
  }
};

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  serviceId, onBackToServices, onSelectService, onOpenQuote
}) => {
  const service: ServiceDetail = SERVICES_DATA.find((s) => s.id === serviceId) || SERVICES_DATA[0];
  const otherServices = SERVICES_DATA.filter((s) => s.id !== service.id);

  return (
    <div className="service-detail-page">

      {/* ---------- Breadcrumb ---------- */}
      <div style={{ backgroundColor: '#F5F7F3', borderBottom: '1px solid #E6E9E2', padding: '0.85rem 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#7C7C7D', flexWrap: 'wrap' }}>
          <button
            onClick={onBackToServices}
            style={{ background: 'none', border: 'none', color: '#6FA240', cursor: 'pointer', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.35rem', padding: 0, fontFamily: 'inherit' }}
          >
            <ArrowLeft size={14} /> Services
          </button>
          <ChevronRight size={13} />
          <span style={{ color: '#232623', fontWeight: 600 }}>{service.title}</span>
        </div>
      </div>

      {/* ============================================================
          HERO — dark banner with real photo
          ============================================================ */}
      <section style={{
        position: 'relative',
        padding: '4.5rem 0 4rem',
        backgroundImage: `linear-gradient(rgba(20, 24, 22, 0.78), rgba(20, 24, 22, 0.72)), url('${service.heroImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#FFFFFF'
      }}>
        <div className="container">
          <div style={{ maxWidth: '820px' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.35rem 0.9rem',
              backgroundColor: 'rgba(146, 208, 79, 0.18)',
              border: '1px solid rgba(146, 208, 79, 0.4)',
              borderRadius: '999px',
              fontSize: '0.75rem', fontWeight: 700, color: '#C8E9A3',
              marginBottom: '1.25rem', letterSpacing: '0.08em', textTransform: 'uppercase'
            }}>
              {service.category}
            </div>
            <h1 style={{
              fontSize: 'clamp(2rem, 4.5vw, 3.3rem)', lineHeight: 1.1, fontWeight: 700,
              margin: '0 0 1rem', letterSpacing: '-0.015em', color: '#FFFFFF'
            }}>
              {service.title}
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '1.1rem', maxWidth: '640px', margin: '0 0 1.75rem', lineHeight: 1.55 }}>
              {service.tagline}
            </p>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => onOpenQuote(service.id)}
                style={{
                  backgroundColor: '#92D04F', color: '#141816', border: 'none',
                  padding: '0.85rem 1.5rem', borderRadius: '4px',
                  fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.03em', textTransform: 'uppercase',
                  cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.5rem'
                }}
              >
                <FileText size={16} /> Quote this
              </button>
              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                style={{
                  backgroundColor: 'transparent', color: '#FFFFFF',
                  border: '2px solid rgba(255,255,255,0.4)',
                  padding: '0.75rem 1.5rem', borderRadius: '4px',
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
      </section>

      {/* ============================================================
          OVERVIEW + APPLICATIONS
          ============================================================ */}
      <section style={{ padding: '4rem 0', backgroundColor: '#FCFDFA' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '3rem' }} className="detail-two-col">
            <div>
              <div style={{ fontSize: '0.75rem', color: '#6FA240', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Overview
              </div>
              <h2 style={{ fontSize: '1.85rem', color: '#232623', margin: '0 0 1.25rem' }}>
                What this service covers
              </h2>
              {service.fullDesc.split('\n\n').map((para, i) => (
                <p key={i} style={{ color: '#2D312E', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                  {para.trim()}
                </p>
              ))}
            </div>

            <aside style={{
              backgroundColor: '#F5F7F3',
              border: '1px solid #E6E9E2',
              borderRadius: '6px',
              padding: '1.75rem'
            }}>
              <div style={{ fontSize: '0.75rem', color: '#6FA240', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                Typical applications
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {service.applications.map((a, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.55rem', fontSize: '0.92rem', color: '#2D312E', lineHeight: 1.5 }}>
                    <CheckCircle size={16} style={{ color: '#92D04F', flexShrink: 0, marginTop: '3px' }} />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* ============================================================
          BENEFITS
          ============================================================ */}
      <section style={{ padding: '4rem 0', backgroundColor: '#F5F7F3', borderTop: '1px solid #E6E9E2', borderBottom: '1px solid #E6E9E2' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '620px', margin: '0 auto 2.5rem' }}>
            <div style={{ fontSize: '0.75rem', color: '#6FA240', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              Why this works
            </div>
            <h2 style={{ fontSize: '2rem', margin: 0, color: '#232623' }}>What you get</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
            {service.benefits.map((b, i) => (
              <div key={i} style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E6E9E2',
                borderRadius: '6px',
                padding: '1.5rem'
              }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '4px',
                  backgroundColor: '#EEF6E3',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  {renderBenefitIcon(b.iconName)}
                </div>
                <h3 style={{ fontSize: '1.05rem', color: '#232623', margin: '0 0 0.4rem' }}>{b.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.55, margin: 0 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SPECIFICATIONS
          ============================================================ */}
      <section style={{ padding: '4rem 0', backgroundColor: '#FCFDFA' }}>
        <div className="container">
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ fontSize: '0.75rem', color: '#6FA240', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              Detail
            </div>
            <h2 style={{ fontSize: '2rem', color: '#232623', margin: 0 }}>Specifications</h2>
          </div>
          <div style={{
            backgroundColor: '#F5F7F3',
            border: '1px solid #E6E9E2',
            borderRadius: '6px',
            overflow: 'hidden'
          }}>
            {service.specifications.map((spec, i) => (
              <div key={i} style={{
                display: 'grid',
                gridTemplateColumns: '1fr 2fr',
                padding: '0.9rem 1.25rem',
                borderBottom: i < service.specifications.length - 1 ? '1px solid #E6E9E2' : 'none',
                gap: '1rem',
                alignItems: 'center'
              }}>
                <div style={{ fontSize: '0.82rem', color: '#7C7C7D', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700 }}>
                  {spec.label}
                </div>
                <div style={{ fontSize: '0.98rem', color: '#232623', fontWeight: 600 }}>
                  {spec.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          GALLERY
          ============================================================ */}
      {service.galleryImages && service.galleryImages.length > 0 && (
        <section style={{ padding: '4rem 0', backgroundColor: '#F5F7F3', borderTop: '1px solid #E6E9E2' }}>
          <div className="container">
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ fontSize: '0.75rem', color: '#6FA240', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                From the yard &amp; site
              </div>
              <h2 style={{ fontSize: '2rem', color: '#232623', margin: 0 }}>Real installations</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.85rem' }}>
              {service.galleryImages.map((g, i) => (
                <div key={i} style={{
                  position: 'relative',
                  aspectRatio: '4/3',
                  overflow: 'hidden',
                  borderRadius: '6px',
                  border: '1px solid #E6E9E2'
                }}>
                  <img src={g.url} alt={g.caption} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  <div style={{
                    position: 'absolute', left: 0, right: 0, bottom: 0,
                    background: 'linear-gradient(transparent, rgba(20,24,22,0.8))',
                    color: '#FFFFFF', padding: '1.5rem 0.85rem 0.7rem'
                  }}>
                    <div style={{ fontSize: '0.68rem', letterSpacing: '0.08em', color: '#C8E9A3', fontWeight: 700, textTransform: 'uppercase' }}>{g.tag}</div>
                    <div style={{ fontSize: '0.82rem', fontWeight: 600 }}>{g.caption}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
          FAQ
          ============================================================ */}
      {service.faq && service.faq.length > 0 && (
        <section style={{ padding: '4rem 0', backgroundColor: '#FCFDFA' }}>
          <div className="container">
            <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <HelpCircle size={24} style={{ color: '#6FA240' }} />
              <h2 style={{ fontSize: '2rem', color: '#232623', margin: 0 }}>Frequently asked</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {service.faq.map((f, i) => (
                <div key={i} style={{
                  backgroundColor: '#F5F7F3',
                  border: '1px solid #E6E9E2',
                  borderRadius: '6px',
                  padding: '1.25rem 1.5rem'
                }}>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#232623', marginBottom: '0.5rem' }}>
                    {f.q}
                  </div>
                  <div style={{ fontSize: '0.92rem', color: '#555', lineHeight: 1.6 }}>
                    {f.a}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
          OTHER SERVICES
          ============================================================ */}
      <section style={{ padding: '4rem 0', backgroundColor: '#F5F7F3', borderTop: '1px solid #E6E9E2' }}>
        <div className="container">
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ fontSize: '0.75rem', color: '#6FA240', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              Also from Ecocrete
            </div>
            <h2 style={{ fontSize: '2rem', color: '#232623', margin: 0 }}>Other services</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
            {otherServices.map((s) => (
              <button
                key={s.id}
                onClick={() => onSelectService(s.id)}
                style={{
                  textAlign: 'left', padding: '1.25rem',
                  backgroundColor: '#FFFFFF', border: '1px solid #E6E9E2', borderRadius: '6px',
                  cursor: 'pointer', fontFamily: 'inherit', color: 'inherit',
                  transition: 'border-color 0.15s, transform 0.15s'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#92D04F'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#E6E9E2'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{ fontSize: '0.7rem', color: '#6FA240', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                  {s.category}
                </div>
                <h3 style={{ fontSize: '1.15rem', color: '#232623', margin: '0 0 0.45rem' }}>{s.title}</h3>
                <p style={{ fontSize: '0.88rem', color: '#7C7C7D', lineHeight: 1.5, margin: '0 0 0.85rem' }}>
                  {s.shortDesc}
                </p>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#6FA240', fontWeight: 700, fontSize: '0.85rem' }}>
                  See detail <ArrowRight size={14} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          BOTTOM CTA
          ============================================================ */}
      <section style={{ padding: '3.5rem 0', backgroundColor: '#141816', color: '#FFFFFF' }}>
        <div className="container" style={{ display: 'flex', gap: '2rem', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <div style={{ maxWidth: '620px' }}>
            <h2 style={{ fontSize: '1.7rem', margin: '0 0 0.4rem', color: '#FFFFFF' }}>Ready to talk about {service.title.toLowerCase()}?</h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1rem', margin: 0, lineHeight: 1.55 }}>
              Send us the site details or WhatsApp a photo to {COMPANY_INFO.phone} — we&apos;ll come back with a quote.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => onOpenQuote(service.id)}
              style={{
                backgroundColor: '#92D04F', color: '#141816', border: 'none',
                padding: '0.85rem 1.5rem', borderRadius: '4px',
                fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.03em', textTransform: 'uppercase',
                cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.5rem'
              }}
            >
              <FileText size={16} /> Quote this service
            </button>
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
          .detail-two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};
