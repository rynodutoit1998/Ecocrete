import React from 'react';
import { ArrowRight, FileText, Phone, CheckCircle } from 'lucide-react';
import { SERVICES_DATA, COMPANY_INFO } from '../data/ecocreteData';

interface ServicesPageProps {
  onSelectService: (serviceId: string) => void;
  onOpenQuote: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onSelectService, onOpenQuote }) => {
  return (
    <div className="services-page">

      {/* ============================================================
          HERO — dark banner
          ============================================================ */}
      <section
        style={{
          position: 'relative',
          padding: '4.5rem 0 4rem',
          backgroundImage: `linear-gradient(rgba(20, 24, 22, 0.78), rgba(20, 24, 22, 0.72)), url('/images/precast-boundary-h-post.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#FFFFFF'
        }}
      >
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
            What we do
          </div>
          <h1 style={{
            fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', lineHeight: 1.1, fontWeight: 700,
            margin: '0 auto 1rem', maxWidth: '860px', letterSpacing: '-0.015em', color: '#FFFFFF'
          }}>
            Five services, one yard.
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', maxWidth: '640px', margin: '0 auto', lineHeight: 1.55 }}>
            Walling · Terraforce® · Extend Walling · Repairs · Precast — cast in our Bloemfontein yard,
            delivered on our truck, installed by our own crew.
          </p>
        </div>
      </section>

      {/* ============================================================
          SERVICES GRID
          ============================================================ */}
      <section style={{ padding: '4rem 0 5rem', backgroundColor: '#F5F7F3' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem'
          }}>
            {SERVICES_DATA.map((service, idx) => (
              <article
                key={service.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E6E9E2',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  display: 'flex', flexDirection: 'column',
                  transition: 'transform 0.2s, box-shadow 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 14px 32px rgba(0,0,0,0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', backgroundColor: '#F5F7F3' }}>
                  <img
                    src={service.heroImage}
                    alt={service.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  <span style={{
                    position: 'absolute', top: '0.75rem', left: '0.75rem',
                    padding: '0.28rem 0.65rem', fontSize: '0.68rem', fontWeight: 700,
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                    color: '#141816', backgroundColor: '#92D04F', borderRadius: '3px'
                  }}>
                    {String(idx + 1).padStart(2, '0')} · {service.category}
                  </span>
                </div>

                <div style={{ padding: '1.5rem 1.5rem 1.75rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3 style={{ fontSize: '1.35rem', color: '#232623', margin: '0 0 0.5rem', letterSpacing: '-0.015em' }}>
                    {service.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#7C7C7D', lineHeight: 1.5, margin: '0 0 1rem', fontStyle: 'italic' }}>
                    {service.tagline}
                  </p>
                  <p style={{ fontSize: '0.95rem', color: '#2D312E', lineHeight: 1.55, margin: '0 0 1.25rem', flex: 1 }}>
                    {service.shortDesc}
                  </p>

                  {service.applications && service.applications.length > 0 && (
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.25rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                      {service.applications.slice(0, 3).map((app, i) => (
                        <li key={i} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.85rem', color: '#555', lineHeight: 1.45 }}>
                          <CheckCircle size={14} style={{ color: '#92D04F', flexShrink: 0, marginTop: '3px' }} />
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <button
                    onClick={() => onSelectService(service.id)}
                    style={{
                      marginTop: 'auto',
                      backgroundColor: '#141816', color: '#FFFFFF', border: 'none',
                      padding: '0.75rem 1.1rem', borderRadius: '4px',
                      fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.03em', textTransform: 'uppercase',
                      cursor: 'pointer', fontFamily: 'inherit',
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'
                    }}
                  >
                    See full spec <ArrowRight size={14} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA BAND
          ============================================================ */}
      <section style={{ padding: '3.5rem 0', backgroundColor: '#141816', color: '#FFFFFF' }}>
        <div className="container" style={{ display: 'flex', gap: '2rem', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <div style={{ maxWidth: '620px' }}>
            <h2 style={{ fontSize: '1.75rem', margin: '0 0 0.5rem', color: '#FFFFFF' }}>Not sure which service fits?</h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1rem', margin: 0, lineHeight: 1.55 }}>
              Send us the site address and a photo — we&apos;ll tell you whether you need a new wall, an extension, or a repair.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button
              onClick={onOpenQuote}
              style={{
                backgroundColor: '#92D04F', color: '#141816', border: 'none',
                padding: '0.85rem 1.5rem', borderRadius: '4px',
                fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.03em', textTransform: 'uppercase',
                cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.5rem'
              }}
            >
              <FileText size={16} /> Request a Quote
            </button>
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              style={{
                backgroundColor: 'transparent', color: '#FFFFFF',
                border: '2px solid rgba(255,255,255,0.35)',
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
      </section>
    </div>
  );
};
