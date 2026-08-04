import React, { useState } from 'react';
import { ShieldCheck, MapPin, Phone, ArrowUpRight, FileText, Layers, Award } from 'lucide-react';
import { COMPANY_INFO, PROJECTS_GALLERY } from '../../data/ecocreteData';

interface CaseStudyCardProps {
  onOpenQuote: () => void;
  onNavigateToService?: () => void;
  variant?: 'home' | 'service-detail';
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  onOpenQuote,
  onNavigateToService,
  variant: _variant = 'home'
}) => {
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const currentProject = PROJECTS_GALLERY[activeProjectIdx] || PROJECTS_GALLERY[0];
  const currentImage = currentProject.additionalImages[activeImageIdx] || currentProject.image;

  const handleSelectProject = (idx: number) => {
    setActiveProjectIdx(idx);
    setActiveImageIdx(0);
  };

  return (
    <div style={{
      backgroundColor: '#FCFDFA',
      border: '1px solid #BEC6B9',
      borderRadius: '6px',
      overflow: 'hidden',
      boxShadow: '0 25px 60px rgba(0, 0, 0, 0.12)',
      position: 'relative'
    }}>
      {/* Top Banner Ribbon */}
      <div style={{
        backgroundColor: '#F2F5EF',
        borderBottom: '1px solid var(--border-dark)',
        padding: '0.75rem 1.75rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', flexWrap: 'wrap' }}>
          <span className="mono-tag green">FEATURED LICENSED INSTALLATIONS</span>
          <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <MapPin size={14} style={{ color: '#92D04F' }} />
            <span>{currentProject.location}</span>
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#79D1A5', fontWeight: 700, fontSize: '0.82rem' }}>
          <ShieldCheck size={16} />
          <span>{COMPANY_INFO.licenseText}</span>
        </div>
      </div>

      {/* Interactive Project Tab Switcher */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#141716',
        borderBottom: '1px solid var(--border-dark)',
        overflowX: 'auto'
      }}>
        {PROJECTS_GALLERY.map((project, idx) => {
          const isActive = idx === activeProjectIdx;
          return (
            <button
              key={project.id}
              onClick={() => handleSelectProject(idx)}
              style={{
                background: isActive ? 'var(--bg-surface)' : 'transparent',
                border: 'none',
                borderRight: '1px solid var(--border-dark)',
                borderBottom: isActive ? '2px solid #92D04F' : '2px solid transparent',
                padding: '0.85rem 1.5rem',
                color: isActive ? '#FFFFFF' : 'var(--text-muted)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                fontWeight: isActive ? 700 : 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <span style={{ color: isActive ? '#92D04F' : 'var(--text-muted)' }}>0{idx + 1} //</span>
              <span>{project.title.toUpperCase()}</span>
            </button>
          );
        })}
      </div>

      <div className="arch-grid" style={{ padding: '0' }}>
        {/* Left Side: High-Resolution Photographic Visual with Thumbnails */}
        <div style={{ 
          gridColumn: 'span 6', 
          position: 'relative',
          minHeight: '480px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#F2F5EF'
        }}>
          <img
            key={currentImage}
            src={currentImage}
            alt={currentProject.title}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.04)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          />

          {/* Subtle bottom gradient overlay for readability */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(14, 15, 15, 0.96) 0%, rgba(14, 15, 15, 0.45) 50%, transparent 100%)',
            pointerEvents: 'none'
          }} />

          {/* Thumbnail Gallery Switcher if multiple photos exist */}
          <div style={{ position: 'relative', zIndex: 3, padding: '1.25rem', display: 'flex', gap: '0.6rem' }}>
            {currentProject.additionalImages.length > 1 && currentProject.additionalImages.map((imgUrl, imgIdx) => (
              <button
                key={imgUrl}
                onClick={() => setActiveImageIdx(imgIdx)}
                style={{
                  width: '64px',
                  height: '46px',
                  borderRadius: '4px',
                  border: imgIdx === activeImageIdx ? '2px solid #92D04F' : '1px solid rgba(255, 255, 255, 0.3)',
                  overflow: 'hidden',
                  padding: 0,
                  cursor: 'pointer',
                  opacity: imgIdx === activeImageIdx ? 1 : 0.65,
                  transition: 'all 0.2s ease',
                  backgroundColor: '#F2F5EF'
                }}
                title={`View photo ${imgIdx + 1}`}
              >
                <img src={imgUrl} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </button>
            ))}
          </div>

          {/* Photo Caption Badge */}
          <div style={{ position: 'relative', zIndex: 2, padding: '2rem' }}>
            <div className="mono-tag dark" style={{ marginBottom: '0.6rem' }}>
              <span>PROJECT REF: {currentProject.id.toUpperCase()}</span>
            </div>
            <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.3rem', fontFamily: 'var(--font-display)' }}>
              {currentProject.title}
            </div>
            <p style={{ color: '#DADBDA', fontSize: '0.88rem', margin: 0, lineHeight: 1.5 }}>
              {currentProject.subtitle}
            </p>
          </div>
        </div>

        {/* Right Side: Architectural & Ecological Engineering Explanation */}
        <div style={{ gridColumn: 'span 6', padding: '2.5rem 2.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
              <span className="mono-tag terracotta">{currentProject.tag}</span>
              <span className="mono-tag dark">GENUINE TERRAFORCE® PRODUCT</span>
            </div>

            <h3 style={{ fontSize: '1.85rem', color: '#232623', marginBottom: '1rem', lineHeight: 1.25 }}>
              {currentProject.title}
            </h3>

            <p style={{ color: 'var(--text-main)', fontSize: '0.96rem', lineHeight: 1.75, marginBottom: '1.25rem' }}>
              {currentProject.description}
            </p>

            {/* Key Engineering Takeaways */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1fr', 
              gap: '1rem', 
              marginBottom: '1.75rem',
              borderTop: '1px solid #BEC6B9',
              borderBottom: '1px solid #BEC6B9',
              padding: '1.25rem 0'
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <Layers size={18} style={{ color: '#92D04F', marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#232623' }}>Structural Engineering</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{currentProject.engineeringSpec}</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <Award size={18} style={{ color: '#92D04F', marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#232623' }}>Client Feedback</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                    "{currentProject.quote.text}" — <span style={{ color: '#232623' }}>{currentProject.quote.author}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* License Footnote & Action Buttons */}
          <div style={{ 
            backgroundColor: '#F2F5EF', 
            border: '1px solid #BEC6B9', 
            borderRadius: '6px', 
            padding: '1.25rem 1.5rem' 
          }}>
            <div style={{ fontSize: '0.82rem', color: '#6FA240', fontWeight: 700, marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <ShieldCheck size={15} />
              <span>LICENSED MANUFACTURING & INSTALLATION IN SOUTH AFRICA</span>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-main)', margin: '0 0 1rem 0', lineHeight: 1.5 }}>
              Selected Terraforce® products are manufactured under license by <strong style={{ color: '#232623' }}>Ecocrete, Free State</strong>. We also offer full turnkey installation services.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.88rem' }}>
                <a 
                  href={`tel:${COMPANY_INFO.phoneClean}`}
                  style={{ color: '#232623', fontWeight: 700, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                >
                  <Phone size={15} style={{ color: '#92D04F' }} />
                  <span>{COMPANY_INFO.contactPerson}: {COMPANY_INFO.phone}</span>
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                {onNavigateToService && (
                  <button
                    onClick={onNavigateToService}
                    className="btn btn-outline-dark"
                    style={{ padding: '0.65rem 1.2rem', fontSize: '0.85rem' }}
                  >
                    <span>Inspect Wall Specs</span>
                    <ArrowUpRight size={14} />
                  </button>
                )}
                <button
                  onClick={onOpenQuote}
                  className="btn btn-primary"
                  style={{ padding: '0.65rem 1.35rem', fontSize: '0.85rem' }}
                >
                  <FileText size={14} />
                  <span>Quote This Wall System</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .arch-grid > div {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </div>
  );
};
