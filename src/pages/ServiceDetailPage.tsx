import React from 'react';
import { 
  ArrowLeft, 
  ShieldCheck, 
  CheckCircle, 
  FileText, 
  Phone, 
  Award, 
  Layers, 
  Ruler, 
  Leaf, 
  Droplets, 
  Clock, 
  Truck, 
  Shield, 
  VolumeX, 
  Zap, 
  Sun, 
  CheckSquare, 
  Users, 
  HelpCircle
} from 'lucide-react';
import { SERVICES_DATA, COMPANY_INFO, type ServiceDetail } from '../data/ecocreteData';
import { BlockDiagramViewer } from '../components/shared/BlockDiagramViewer';
import { CaseStudyCard } from '../components/shared/CaseStudyCard';

interface ServiceDetailPageProps {
  serviceId: string;
  onBackToServices: () => void;
  onSelectService: (id: string) => void;
  onOpenQuote: (serviceId?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  serviceId,
  onBackToServices,
  onSelectService,
  onOpenQuote,
}) => {
  const service: ServiceDetail = 
    SERVICES_DATA.find((s) => s.id === serviceId) || SERVICES_DATA[0];

  const otherServices = SERVICES_DATA.filter((s) => s.id !== service.id);

  // Map icon names to components
  const renderBenefitIcon = (iconName: string) => {
    switch (iconName) {
      case 'Leaf': return <Leaf size={22} style={{ color: '#92D04F' }} />;
      case 'Award': return <Award size={22} style={{ color: '#6FA240' }} />;
      case 'ShieldCheck': return <ShieldCheck size={22} style={{ color: '#92D04F' }} />;
      case 'Droplets': return <Droplets size={22} style={{ color: '#6FA240' }} />;
      case 'Clock': return <Clock size={22} style={{ color: '#92D04F' }} />;
      case 'Layers': return <Layers size={22} style={{ color: '#6FA240' }} />;
      case 'Ruler': return <Ruler size={22} style={{ color: '#92D04F' }} />;
      case 'Sun': return <Sun size={22} style={{ color: '#6FA240' }} />;
      case 'Shield': return <Shield size={22} style={{ color: '#92D04F' }} />;
      case 'VolumeX': return <VolumeX size={22} style={{ color: '#6FA240' }} />;
      case 'Zap': return <Zap size={22} style={{ color: '#92D04F' }} />;
      case 'Truck': return <Truck size={22} style={{ color: '#6FA240' }} />;
      case 'CheckSquare': return <CheckSquare size={22} style={{ color: '#92D04F' }} />;
      case 'Users': return <Users size={22} style={{ color: '#6FA240' }} />;
      default: return <CheckCircle size={22} style={{ color: '#92D04F' }} />;
    }
  };

  return (
    <div className="service-detail-page" style={{ backgroundColor: 'var(--bg-primary)' }}>
      
      {/* 1. Breadcrumb & Back Navigation Bar */}
      <div style={{
        backgroundColor: '#F2F5EF',
        borderBottom: '1px solid var(--border-dark)',
        padding: '0.9rem 0'
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem' }}>
            <button
              onClick={onBackToServices}
              style={{
                background: 'none',
                border: 'none',
                color: '#6FA240',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontWeight: 700,
                padding: 0
              }}
            >
              <ArrowLeft size={16} />
              <span>Back to Services</span>
            </button>
            <span style={{ color: 'var(--text-muted)' }}>/</span>
            <span style={{ color: 'var(--text-muted)' }}>Services Overview</span>
            <span style={{ color: 'var(--text-muted)' }}>/</span>
            <span style={{ color: '#232623', fontWeight: 600 }}>{service.title}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <span className="mono-tag green" style={{ fontSize: '0.7rem' }}>
              <span>{COMPANY_INFO.licenseText}</span>
            </span>
          </div>
        </div>
      </div>

      {/* 2. Hero Detail Header */}
      <section style={{
        padding: '4.5rem 0',
        borderBottom: '1px solid #BEC6B9',
        backgroundColor: '#FCFDFA',
        position: 'relative'
      }}>
        <div className="container">
          <div className="arch-grid" style={{ alignItems: 'center' }}>
            
            <div style={{ gridColumn: 'span 7' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
                <span className="mono-tag terracotta">SERVICE DETAIL: {service.category.toUpperCase()}</span>
                <span className="mono-tag dark">SABS 1215 SPECIFICATION</span>
              </div>

              <h1 style={{ fontSize: '3.4rem', color: '#232623', marginBottom: '1.25rem', lineHeight: 1.12 }}>
                {service.title}
              </h1>

              <p style={{ fontSize: '1.18rem', color: 'var(--text-main)', marginBottom: '2.25rem', lineHeight: 1.65, fontWeight: 500 }}>
                {service.tagline}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <button
                  onClick={() => onOpenQuote(service.id)}
                  className="btn btn-primary"
                  style={{ padding: '1rem 2.25rem', fontSize: '1rem' }}
                >
                  <FileText size={18} />
                  <span>Request Engineering Quote</span>
                </button>
                <a
                  href={`tel:${COMPANY_INFO.phoneClean}`}
                  className="btn btn-outline-dark"
                  style={{ padding: '1rem 1.75rem', fontSize: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <Phone size={18} style={{ color: '#92D04F' }} />
                  <span>Call {COMPANY_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Hero Visual */}
            <div style={{ gridColumn: 'span 5' }}>
              <div style={{
                borderRadius: '4px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.15)',
                boxShadow: '0 30px 60px rgba(0,0,0,0.6)',
                position: 'relative'
              }}>
                <img
                  src={service.heroImage}
                  alt={service.title}
                  style={{ width: '100%', height: '380px', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  backgroundColor: 'rgba(20, 21, 21, 0.9)',
                  padding: '1rem 1.25rem',
                  borderTop: '1px solid var(--border-dark)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <div style={{ fontSize: '0.85rem', color: '#FFF', fontWeight: 600 }}>
                    {service.category} • SABS Quality Guaranteed
                  </div>
                  <span className="mono-tag green" style={{ fontSize: '0.65rem' }}>LICENSED MFG</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Main Detailed Content Grid */}
      <section style={{ padding: '5.5rem 0' }}>
        <div className="container">
          <div className="arch-grid">
            
            {/* Left 8 Columns: Full Description, Applications, Benefits, Specifications, Interactive Diagram, and Case Study */}
            <div style={{ gridColumn: 'span 8', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
              
              {/* Service Description */}
              <div>
                <div className="mono-tag dark" style={{ marginBottom: '0.6rem' }}>
                  <span>ENGINEERING OVERVIEW</span>
                </div>
                <h2 style={{ fontSize: '2.2rem', color: '#FFFFFF', marginBottom: '1.25rem' }}>
                  Structural & Environmental Excellence
                </h2>
                <div style={{ color: 'var(--text-main)', fontSize: '1.05rem', lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                  {service.fullDesc}
                </div>
              </div>

              {/* 4 Icon-Backed Key Benefits */}
              <div>
                <div className="mono-tag terracotta" style={{ marginBottom: '0.6rem' }}>
                  <span>KEY ADVANTAGES</span>
                </div>
                <h3 style={{ fontSize: '2rem', color: '#FFFFFF', marginBottom: '1.5rem' }}>
                  Why Engineers & Contractors Specify This System
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                  {service.benefits.map((benefit, i) => (
                    <div
                      key={i}
                      style={{
                        backgroundColor: 'var(--bg-surface)',
                        border: '1px solid var(--border-dark)',
                        padding: '1.5rem',
                        borderRadius: '4px'
                      }}
                    >
                      <div style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '3px',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid var(--border-dark)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '1rem'
                      }}>
                        {renderBenefitIcon(benefit.iconName)}
                      </div>
                      <h4 style={{ fontSize: '1.15rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>
                        {benefit.title}
                      </h4>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', margin: 0, lineHeight: 1.6 }}>
                        {benefit.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Technical Diagram Viewer */}
              <div>
                <BlockDiagramViewer
                  title={`${service.title} — Cross-Section Engineering`}
                  subtitle="Interactive structural layer inspection"
                  points={service.diagramPoints}
                  imageSrc={service.heroImage}
                />
              </div>

              {/* SABS Technical Specifications Table */}
              <div>
                <div className="mono-tag dark" style={{ marginBottom: '0.6rem' }}>
                  <span>TECHNICAL SCHEDULE</span>
                </div>
                <h3 style={{ fontSize: '2rem', color: '#FFFFFF', marginBottom: '1.25rem' }}>
                  Engineering Specifications
                </h3>

                <div style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-dark)',
                  borderRadius: '4px',
                  overflow: 'hidden'
                }}>
                  <table className="spec-table">
                    <thead>
                      <tr>
                        <th style={{ width: '40%' }}>SPECIFICATION PARAMETER</th>
                        <th>CERTIFIED VALUE / COMPLIANCE</th>
                      </tr>
                    </thead>
                    <tbody>
                      {service.specifications.map((item, i) => (
                        <tr key={i}>
                          <td style={{ fontWeight: 600, color: 'var(--text-muted)' }}>{item.label}</td>
                          <td style={{ fontWeight: 700, color: '#FFFFFF' }}>{item.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Applications List */}
              <div>
                <div className="mono-tag green" style={{ marginBottom: '0.6rem' }}>
                  <span>PRIMARY APPLICATIONS</span>
                </div>
                <h3 style={{ fontSize: '2rem', color: '#FFFFFF', marginBottom: '1.25rem' }}>
                  Where This Service Is Deployed
                </h3>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem'
                }}>
                  {service.applications.map((app, index) => (
                    <div
                      key={index}
                      style={{
                        backgroundColor: '#F2F5EF',
                        border: '1px solid #BEC6B9',
                        padding: '1.1rem 1.25rem',
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem'
                      }}
                    >
                      <CheckCircle size={18} style={{ color: '#92D04F', marginTop: '2px', flexShrink: 0 }} />
                      <span style={{ color: '#232623', fontWeight: 600, fontSize: '0.95rem' }}>{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dedicated Photo Gallery for this Service */}
              {service.galleryImages && service.galleryImages.length > 0 && (
                <div>
                  <div className="mono-tag green" style={{ marginBottom: '0.6rem' }}>
                    <span>REAL PROJECT GALLERY</span>
                  </div>
                  <h3 style={{ fontSize: '2rem', color: '#232623', marginBottom: '1.25rem' }}>
                    Licensed Installations in the Field
                  </h3>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '1.25rem',
                    marginBottom: '2.5rem'
                  }}>
                    {service.galleryImages.map((img, idx) => (
                      <div
                        key={idx}
                        style={{
                          backgroundColor: 'var(--bg-surface)',
                          border: '1px solid var(--border-dark)',
                          borderRadius: '4px',
                          overflow: 'hidden',
                          display: 'flex',
                          flexDirection: 'column',
                          boxShadow: '0 12px 30px rgba(0,0,0,0.3)'
                        }}
                      >
                        <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                          <img
                            src={img.url}
                            alt={img.caption}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              transition: 'transform 0.4s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                          />
                          <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem' }}>
                            <span className="mono-tag dark" style={{ fontSize: '0.68rem', padding: '0.2rem 0.5rem' }}>
                              {img.tag}
                            </span>
                          </div>
                        </div>
                        <div style={{ padding: '1rem', flex: 1, display: 'flex', alignItems: 'center' }}>
                          <p style={{ margin: 0, color: 'var(--text-main)', fontSize: '0.88rem', fontWeight: 600, lineHeight: 1.4 }}>
                            {img.caption}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Special Featured Case Study for Terraforce Retaining Walls! */}
              {service.id === 'terraforce-retaining-walls' && (
                <div>
                  <div className="mono-tag terracotta" style={{ marginBottom: '0.6rem' }}>
                    <span>LICENSED CASE STUDIES SHOWCASE</span>
                  </div>
                  <h3 style={{ fontSize: '2rem', color: '#FFFFFF', marginBottom: '1.5rem' }}>
                    Flagship Projects & Engineering Reference
                  </h3>
                  <CaseStudyCard
                    onOpenQuote={() => onOpenQuote(service.id)}
                    variant="service-detail"
                  />
                </div>
              )}

              {/* FAQ Accordion for this Service */}
              {service.faq && service.faq.length > 0 && (
                <div>
                  <div className="mono-tag dark" style={{ marginBottom: '0.6rem' }}>
                    <span>ENGINEERING FAQ</span>
                  </div>
                  <h3 style={{ fontSize: '2rem', color: '#FFFFFF', marginBottom: '1.5rem' }}>
                    Frequently Asked Technical Questions
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {service.faq.map((item, idx) => (
                      <div
                        key={idx}
                        style={{
                          backgroundColor: 'var(--bg-surface)',
                          border: '1px solid var(--border-dark)',
                          padding: '1.5rem 1.75rem',
                          borderRadius: '4px'
                        }}
                      >
                        <h4 style={{ fontSize: '1.15rem', color: '#232623', marginBottom: '0.6rem', display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                          <HelpCircle size={18} style={{ color: '#92D04F', marginTop: '2px', flexShrink: 0 }} />
                          <span>{item.q}</span>
                        </h4>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', margin: 0, paddingLeft: '1.75rem', lineHeight: 1.6 }}>
                          {item.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Right 4 Columns: Sticky Sidebar with Quote Trigger, Contact Elza, and Switch to Other Services */}
            <div style={{ gridColumn: 'span 4' }}>
              <div style={{
                position: 'sticky',
                top: '95px',
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem'
              }}>
                
                {/* Instant Quote Sidebar Card */}
                <div style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid rgba(184, 93, 59, 0.5)',
                  borderRadius: '4px',
                  padding: '2rem',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)'
                }}>
                  <div className="mono-tag terracotta" style={{ marginBottom: '0.8rem' }}>
                    <span>DIRECT QUOTE SERVICE</span>
                  </div>
                  <h3 style={{ fontSize: '1.55rem', color: '#FFFFFF', marginBottom: '0.6rem' }}>
                    Specify {service.title}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                    Need SABS compliance certificates, block meterage estimates, or turnkey site installation? Get a direct response from Elza Liebenberg.
                  </p>

                  <button
                    onClick={() => onOpenQuote(service.id)}
                    className="btn btn-primary"
                    style={{ width: '100%', padding: '0.95rem', marginBottom: '1rem', fontSize: '0.95rem' }}
                  >
                    <FileText size={17} />
                    <span>Request Quotation</span>
                  </button>

                  <div style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-dark)',
                    padding: '1rem',
                    borderRadius: '3px',
                    fontSize: '0.82rem'
                  }}>
                    <div style={{ color: 'var(--text-muted)', marginBottom: '0.3rem' }}>DIRECT CONTACT NUMBER:</div>
                    <a 
                      href={`tel:${COMPANY_INFO.phoneClean}`}
                      style={{ color: '#232623', fontWeight: 700, textDecoration: 'none', fontSize: '1.05rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                    >
                      <Phone size={16} style={{ color: '#92D04F' }} />
                      <span>{COMPANY_INFO.phone}</span>
                    </a>
                    <div style={{ color: 'var(--text-muted)', marginTop: '0.4rem' }}>
                      {COMPANY_INFO.emailPrimary}
                    </div>
                  </div>
                </div>

                {/* Terraforce License & Free State Footprint Card */}
                <div style={{
                  backgroundColor: '#F2F5EF',
                  border: '1px solid #BEC6B9',
                  borderRadius: '6px',
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#79D1A5', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.6rem' }}>
                    <ShieldCheck size={17} />
                    <span>OFFICIAL MANUFACTURING LICENSE</span>
                  </div>
                  <p style={{ color: '#EBEBE6', fontSize: '0.88rem', margin: 0, lineHeight: 1.5 }}>
                    {COMPANY_INFO.licenseText}. We serve the Free State, Northern Cape, Western Cape border, Lesotho, and central South Africa.
                  </p>
                </div>

                {/* Other 4 Expandable Service Links */}
                <div style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-dark)',
                  borderRadius: '4px',
                  padding: '1.75rem'
                }}>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '1rem', textTransform: 'uppercase' }}>
                    EXPLORE OTHER SERVICES:
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {otherServices.map((o) => (
                      <div
                        key={o.id}
                        onClick={() => onSelectService(o.id)}
                        style={{
                          padding: '0.8rem 1rem',
                          backgroundColor: 'rgba(255, 255, 255, 0.03)',
                          border: '1px solid var(--border-dark)',
                          borderRadius: '3px',
                          cursor: 'pointer',
                          transition: 'all 0.15s',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}
                      >
                        <div>
                          <div style={{ fontWeight: 600, color: '#232623', fontSize: '0.92rem' }}>{o.title}</div>
                          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{o.category}</div>
                        </div>
                        <ArrowLeft size={15} style={{ transform: 'rotate(180deg)', color: '#92D04F' }} />
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

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
