import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Phone, 
  FileText, 
  Truck
} from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA, PRODUCTS_CATALOG } from '../data/ecocreteData';
import { CaseStudyCard } from '../components/shared/CaseStudyCard';

interface HomePageProps {
  onNavigate: (view: 'home' | 'services' | 'products' | 'about' | 'contact', serviceId?: string) => void;
  onOpenQuote: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenQuote,
}) => {
  const featuredProducts = PRODUCTS_CATALOG.slice(0, 4);

  return (
    <div className="home-page">
      
      {/* 1. Architectural Hero Banner (No Gradients - Pure Industrial Elegance) */}
      <section style={{
        position: 'relative',
        minHeight: '88vh',
        display: 'flex',
        alignItems: 'center',
        padding: '5rem 0',
        borderBottom: '1px solid var(--border-dark)',
        overflow: 'hidden'
      }} className="bg-grid-dark">

        {/* Subtle geometric architectural lighting accents */}
        <div style={{
          position: 'absolute',
          top: '-15%',
          right: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(184, 93, 59, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="arch-grid" style={{ alignItems: 'center' }}>
            
            {/* Left Hero Text */}
            <div style={{ gridColumn: 'span 7' }}>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                <span className="mono-tag green">
                  <span className="pulse-dot" />
                  <span>{COMPANY_INFO.licenseText}</span>
                </span>
                <span className="mono-tag dark">
                  <span>SABS 1215 COMPLIANT</span>
                </span>
              </div>

              <h1 style={{
                fontSize: '3.85rem',
                color: '#232623',
                marginBottom: '1.5rem',
                lineHeight: 1.08,
                letterSpacing: '-0.02em'
              }}>
                Engineering <br />
                <span style={{ color: '#6FA240' }}>Precast Concrete</span> <br />
                & Green Boundaries.
              </h1>

              <p style={{
                fontSize: '1.18rem',
                color: 'var(--text-main)',
                maxWidth: '600px',
                marginBottom: '2.5rem',
                lineHeight: 1.7,
                fontWeight: 400
              }}>
                Ecocrete is the licensed manufacturer of Terraforce® retaining walls and high-grade structural precast concrete products in the Free State. From Caledon roadside green belts to heavy warehouse floor slabs — <strong style={{ color: '#232623' }}>we manufacture, deliver, and install</strong>.
              </p>

              {/* Action Button Group */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
                <button
                  onClick={onOpenQuote}
                  className="btn btn-primary"
                  style={{ padding: '1.05rem 2.25rem', fontSize: '1rem' }}
                >
                  <FileText size={18} />
                  <span>Request Engineering Quote</span>
                </button>

                <button
                  onClick={() => onNavigate('services')}
                  className="btn btn-outline-dark"
                  style={{ padding: '1.05rem 1.85rem', fontSize: '1rem' }}
                >
                  <span>Explore 5 Services</span>
                  <ArrowRight size={17} />
                </button>
              </div>

              {/* Quick Contact & License Attribution */}
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
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Direct Sales:</span>
                  <a 
                    href={`tel:${COMPANY_INFO.phoneClean}`} 
                    style={{ color: '#232623', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem' }}
                  >
                    {COMPANY_INFO.phone} ({COMPANY_INFO.contactPerson})
                  </a>
                </div>

                <div style={{ width: '1px', height: '18px', backgroundColor: '#BEC6B9' }} />

                <div style={{ fontSize: '0.85rem', color: '#6FA240', fontWeight: 600 }}>
                  Turnkey Installation Available
                </div>
              </div>

            </div>

            {/* Right Hero Image Card */}
            <div style={{ gridColumn: 'span 5' }}>
              <div style={{
                position: 'relative',
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid #BEC6B9',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.08)'
              }}>
                <img
                  src="/images/retaining-wall-caltex.png"
                  alt="Terraforce retaining wall planted with vygies at Caledon Caltex petrol station"
                  style={{
                    width: '100%',
                    height: '520px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                
                {/* Overlay Badge */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  backgroundColor: 'rgba(252, 253, 250, 0.95)',
                  backdropFilter: 'blur(10px)',
                  borderTop: '1px solid #BEC6B9',
                  padding: '1.25rem 1.5rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                    <span className="mono-tag green" style={{ fontSize: '0.68rem' }}>TERRAFORCE® CASE STUDY</span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Caledon Caltex Petrol Station</span>
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#232623' }}>
                    Round Face Walls Planted With Vygies (Aizoaceae)
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                    Licensed manufacture by Ecocrete, Free State • Creating living green boundaries
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Key Engineering Metrics Bar */}
      <section style={{
        backgroundColor: '#F2F5EF',
        borderBottom: '1px solid #BEC6B9',
        padding: '2.75rem 0'
      }}>
        <div className="container">
          <div className="arch-grid">
            {COMPANY_INFO.stats.map((stat, i) => (
              <div 
                key={i} 
                style={{ 
                  gridColumn: 'span 3',
                  padding: '0 1rem',
                  borderRight: i < 3 ? '1px solid #BEC6B9' : 'none'
                }}
              >
                <div style={{ 
                  fontSize: '2.5rem', 
                  fontWeight: 800, 
                  color: '#232623', 
                  fontFamily: 'var(--font-display)',
                  lineHeight: 1,
                  marginBottom: '0.4rem' 
                }}>
                  {stat.value}
                </div>
                <div style={{ fontWeight: 700, color: '#6FA240', fontSize: '0.92rem', textTransform: 'uppercase' }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Case Study Spotlight (Caledon Caltex Petrol Station) */}
      <section style={{ padding: '5.5rem 0', backgroundColor: 'var(--bg-primary)', borderBottom: '1px solid var(--border-dark)' }}>
        <div className="container">
          <div style={{ marginBottom: '2.5rem', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div className="mono-tag terracotta" style={{ marginBottom: '0.6rem' }}>
                <span>PROJECT HIGHLIGHT • LICENSED INNOVATION</span>
              </div>
              <h2 style={{ fontSize: '2.65rem', color: '#232623', margin: 0 }}>
                Terraforce® in Action: Licensed Installations Showcase
              </h2>
            </div>
            <button
              onClick={() => onNavigate('services', 'terraforce-retaining-walls')}
              className="btn btn-outline-dark"
            >
              <span>View Full Retaining Walls Service</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <CaseStudyCard
            onOpenQuote={onOpenQuote}
            onNavigateToService={() => onNavigate('services', 'terraforce-retaining-walls')}
            variant="home"
          />
        </div>
      </section>

      {/* 4. Specialized Precast Concrete Services (With direct links to expandable detail pages) */}
      <section style={{ padding: '6rem 0', backgroundColor: 'var(--bg-surface)' }}>
        <div className="container">
          
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3.5rem' }}>
            <div>
              <div className="mono-tag dark" style={{ marginBottom: '0.6rem' }}>
                <span>5 CORE ENGINEERING SERVICES</span>
              </div>
              <h2 style={{ fontSize: '2.75rem', color: '#232623', margin: 0 }}>
                High-Grade Precast Solutions
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginTop: '0.5rem', maxWidth: '580px' }}>
                Each service is backed by South African SABS testing and Ecocrete's in-house turnkey installation teams across the Free State and borders.
              </p>
            </div>

            <button
              onClick={() => onNavigate('services')}
              className="btn btn-primary"
            >
              <span>Explore All 5 Expandable Service Pages</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Service Cards Grid */}
          <div className="arch-grid">
            {SERVICES_DATA.map((service, index) => (
              <div
                key={service.id}
                className="arch-card"
                style={{
                  gridColumn: index === 0 ? 'span 8' : index === 1 ? 'span 4' : 'span 4',
                  minHeight: index === 0 ? '480px' : '420px',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  position: 'relative'
                }}
                onClick={() => onNavigate('services', service.id)}
              >
                {/* Card Background Image with overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  overflow: 'hidden',
                  zIndex: 0
                }}>
                  <img
                    src={service.heroImage}
                    alt={service.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      opacity: index === 0 ? 0.35 : 0.25,
                      transition: 'all 0.5s'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(29, 31, 30, 0.98) 0%, rgba(29, 31, 30, 0.7) 50%, rgba(29, 31, 30, 0.3) 100%)'
                  }} />
                </div>

                {/* Card Top */}
                <div style={{ position: 'relative', zIndex: 1, padding: '2rem 2.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <span className="mono-tag green" style={{ fontSize: '0.7rem' }}>
                      SERVICE 0{index + 1}
                    </span>
                    <span style={{ fontSize: '0.78rem', color: '#92D04F', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <ShieldCheck size={14} />
                      <span>{service.category}</span>
                    </span>
                  </div>

                  <h3 style={{
                    fontSize: index === 0 ? '2.3rem' : '1.65rem',
                    color: '#FFFFFF',
                    marginBottom: '1rem',
                    lineHeight: 1.18
                  }}>
                    {service.title}
                  </h3>

                  <p style={{
                    color: 'rgba(255, 255, 255, 0.88)',
                    fontSize: index === 0 ? '1rem' : '0.92rem',
                    lineHeight: 1.6,
                    maxWidth: index === 0 ? '600px' : '100%'
                  }}>
                    {service.shortDesc}
                  </p>
                </div>

                {/* Card Bottom / CTA */}
                <div style={{
                  position: 'relative',
                  zIndex: 1,
                  padding: '1.25rem 2.25rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: 'rgba(20, 21, 21, 0.6)'
                }}>
                  <div style={{ fontSize: '0.85rem', color: '#92D04F', fontWeight: 700 }}>
                    View Full Specifications & Diagrams →
                  </div>
                  <span className="btn btn-outline-dark" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>
                    Detail Page
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Products Catalog Preview (With Quick Spec Sheet inspection) */}
      <section style={{ padding: '6rem 0', backgroundColor: 'var(--bg-primary)', borderBottom: '1px solid var(--border-dark)' }}>
        <div className="container">
          
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
            <div>
              <div className="mono-tag dark" style={{ marginBottom: '0.5rem' }}>
                <span>SABS CERTIFIED CONCRETE CATALOG</span>
              </div>
              <h2 style={{ fontSize: '2.65rem', color: '#232623', margin: 0 }}>
                Featured Precast Products
              </h2>
            </div>
            <button
              onClick={() => onNavigate('products')}
              className="btn btn-outline-dark"
            >
              <span>View Complete Product Catalog (SABS Specs)</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="arch-grid">
            {featuredProducts.map((prod) => (
              <div key={prod.id} className="arch-card" style={{ gridColumn: 'span 3', padding: '1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <span className="mono-tag dark" style={{ fontSize: '0.68rem' }}>{prod.code}</span>
                  {prod.licensed && (
                    <span className="mono-tag green" style={{ fontSize: '0.68rem' }}>TERRAFORCE®</span>
                  )}
                </div>

                <div style={{ height: '180px', borderRadius: '3px', overflow: 'hidden', marginBottom: '1.25rem', border: '1px solid var(--border-dark)' }}>
                  <img
                    src={prod.image}
                    alt={prod.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                <h4 style={{ fontSize: '1.2rem', color: '#232623', marginBottom: '0.6rem', height: '52px', overflow: 'hidden' }}>
                  {prod.name}
                </h4>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1.25rem', height: '62px', overflow: 'hidden' }}>
                  {prod.shortDesc}
                </p>

                <div style={{
                  backgroundColor: '#F2F5EF',
                  border: '1px solid #BEC6B9',
                  padding: '0.6rem 0.8rem',
                  borderRadius: '6px',
                  marginBottom: '1.25rem',
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-mono)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.2rem' }}>
                    <span style={{ color: 'var(--text-muted)' }}>DIMENSIONS:</span>
                    <span style={{ color: '#232623' }}>{prod.dimensions}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--text-muted)' }}>COMPRESSIVE:</span>
                    <span style={{ color: '#6FA240' }}>{prod.strengthMPa}</span>
                  </div>
                </div>

                <button
                  onClick={() => onNavigate('products')}
                  className="btn btn-outline-dark"
                  style={{ width: '100%', fontSize: '0.85rem', padding: '0.7rem' }}
                >
                  <span>View Product Spec Sheet</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Why Choose Ecocrete — Free State Engineering & Turnkey Installation */}
      <section style={{ padding: '6rem 0', backgroundColor: 'var(--bg-light)', color: 'var(--text-dark)' }}>
        <div className="container">
          <div className="arch-grid" style={{ alignItems: 'center' }}>
            
            <div style={{ gridColumn: 'span 6' }}>
              <div className="mono-tag light" style={{ marginBottom: '0.8rem' }}>
                <span>FREE STATE LICENSED MANUFACTURER</span>
              </div>
              <h2 style={{ fontSize: '2.85rem', color: 'var(--text-dark)', marginBottom: '1.5rem' }}>
                We Manufacture. <br />
                We Deliver. <br />
                <span style={{ color: 'var(--accent-terracotta)' }}>We Install.</span>
              </h2>

              <p style={{ fontSize: '1.08rem', color: 'var(--text-dark-muted)', marginBottom: '1.75rem', lineHeight: 1.7 }}>
                Selected Terraforce® products are manufactured under license by <strong>Ecocrete, Free State</strong>. Whether you require retaining blocks for a highway service stop or structural floor slabs for a commercial warehouse, we provide single-point engineering accountability.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2.5rem' }}>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '1.15rem', color: 'var(--text-dark)', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <ShieldCheck size={18} style={{ color: 'var(--accent-green-belt)' }} />
                    <span>SABS 1215 Quality</span>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-dark-muted)', margin: 0 }}>
                    Every aggregate mix and precast element undergoes rigorous compressive testing.
                  </p>
                </div>

                <div>
                  <div style={{ fontWeight: 800, fontSize: '1.15rem', color: 'var(--text-dark)', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Truck size={18} style={{ color: 'var(--accent-terracotta)' }} />
                    <span>In-House Installation</span>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-dark-muted)', margin: 0 }}>
                    Our specialized field teams handle earthworks, geogrid compaction, and vygies planting.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <button
                  onClick={() => onNavigate('about')}
                  className="btn btn-primary"
                  style={{ padding: '0.9rem 2rem' }}
                >
                  <span>About Our Manufacturing Yard</span>
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="btn btn-outline-light"
                  style={{ padding: '0.9rem 1.75rem' }}
                >
                  <span>Contact Elza Liebenberg</span>
                </button>
              </div>
            </div>

            {/* Right Side: Elza Liebenberg Direct Contact Card */}
            <div style={{ gridColumn: 'span 5', gridColumnStart: 8 }}>
              <div style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--border-light)',
                borderRadius: '4px',
                padding: '2.5rem',
                boxShadow: 'var(--shadow-light)'
              }}>
                <div className="mono-tag light" style={{ marginBottom: '1rem' }}>
                  <span>DIRECT ENGINEERING CONSULTATION</span>
                </div>
                <h3 style={{ fontSize: '1.85rem', color: 'var(--text-dark)', marginBottom: '0.4rem' }}>
                  {COMPANY_INFO.contactPerson}
                </h3>
                <div style={{ color: 'var(--accent-terracotta)', fontWeight: 700, fontSize: '0.92rem', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
                  Managing Director & Sales Specialist
                </div>

                <p style={{ color: 'var(--text-dark-muted)', fontSize: '0.95rem', marginBottom: '2rem', lineHeight: 1.6 }}>
                  "We work closely with structural engineers, municipalities, and roadside developers to deliver precast solutions that combine strength with ecological beauty."
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', borderTop: '1px solid var(--border-light)', paddingTop: '1.5rem' }}>
                  <a
                    href={`tel:${COMPANY_INFO.phoneClean}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.85rem',
                      color: 'var(--text-dark)',
                      textDecoration: 'none',
                      fontWeight: 700,
                      fontSize: '1.15rem'
                    }}
                  >
                    <div style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--bg-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-terracotta)'
                    }}>
                      <Phone size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-dark-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Cell Phone / WhatsApp</div>
                      <div>{COMPANY_INFO.phone}</div>
                    </div>
                  </a>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.85rem',
                    color: 'var(--text-dark)',
                    fontSize: '0.95rem'
                  }}>
                    <div style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--bg-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-green-belt)'
                    }}>
                      <FileText size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-dark-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Official Emails</div>
                      <div style={{ fontWeight: 600 }}>{COMPANY_INFO.emailPrimary}</div>
                      <div style={{ fontSize: '0.88rem', color: 'var(--text-dark-muted)' }}>{COMPANY_INFO.emailSecondary}</div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={onOpenQuote}
                  className="btn btn-primary"
                  style={{ width: '100%', marginTop: '2rem', padding: '0.9rem' }}
                >
                  <span>Request Site Quotation</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
