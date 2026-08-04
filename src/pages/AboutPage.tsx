import React from 'react';
import { 
  ShieldCheck, 
  Phone, 
  Mail, 
  MapPin, 
  Leaf, 
  Truck, 
  FileText,
  HelpCircle
} from 'lucide-react';
import { COMPANY_INFO, FAQ_GENERAL } from '../data/ecocreteData';
import { CaseStudyCard } from '../components/shared/CaseStudyCard';

interface AboutPageProps {
  onOpenQuote: () => void;
  onNavigate: (view: 'home' | 'services' | 'products' | 'about' | 'contact', serviceId?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenQuote,
  onNavigate,
}) => {
  return (
    <div className="about-page" style={{ backgroundColor: 'var(--bg-primary)' }}>
      
      {/* 1. Page Header */}
      <section style={{
        padding: '5.5rem 0',
        borderBottom: '1px solid var(--border-dark)',
        backgroundColor: '#0F1010'
      }} className="bg-grid-dark">
        <div className="container">
          <div style={{ maxWidth: '820px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '0.8rem' }}>
              <span className="mono-tag green">FREE STATE PRECAST LEADERS</span>
              <span className="mono-tag green">OFFICIAL TERRAFORCE® LICENSEE</span>
            </div>

            <h1 style={{ fontSize: '3.6rem', color: '#FFFFFF', marginBottom: '1.25rem', lineHeight: 1.1 }}>
              Engineered Strength. <br />
              <span style={{ color: '#92D04F' }}>Ecological Harmony.</span>
            </h1>

            <p style={{ color: 'rgba(255, 255, 255, 0.88)', fontSize: '1.14rem', lineHeight: 1.75, marginBottom: '2.5rem' }}>
              Ecocrete is the authorized licensed manufacturer of Terraforce® retaining walls and high-grade precast concrete infrastructure in the Free State. We combine heavy civil structural engineering with sustainable bio-engineered green belts.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={onOpenQuote}
                className="btn btn-primary"
                style={{ padding: '0.9rem 2rem' }}
              >
                <FileText size={17} />
                <span>Request Engineer Site Assessment</span>
              </button>
              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="btn btn-outline-dark"
                style={{ padding: '0.9rem 1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <Phone size={17} style={{ color: '#92D04F' }} />
                <span>Call Elza Liebenberg Direct</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Company Story & Licensing Section */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div className="arch-grid" style={{ alignItems: 'center' }}>
            
            {/* Left Story Content */}
            <div style={{ gridColumn: 'span 7', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <div className="mono-tag dark" style={{ marginBottom: '0.6rem' }}>
                  <span>OUR PHILOSOPHY</span>
                </div>
                <h2 style={{ fontSize: '2.5rem', color: '#FFFFFF', marginBottom: '1rem' }}>
                  Building Enduring Infrastructure Across Central South Africa
                </h2>
                <p style={{ color: 'var(--text-main)', fontSize: '1.05rem', lineHeight: 1.8 }}>
                  For over two decades, Ecocrete has supplied municipalities, commercial developers, agricultural estates, and roadside infrastructure projects with precision-cast concrete elements that stand the test of time and weather.
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: 1.75, marginTop: '1rem' }}>
                  We operate from our dedicated manufacturing yard in the Free State, utilizing controlled factory curing environments and high-grade 40 MPa limestone concrete mixes. As an official licensee of Terraforce South Africa, we uphold the strict dimensional tolerances and compressive strength standards required by SABS 1215.
                </p>
              </div>

              {/* 3 Core Pillar Badges */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginTop: '0.5rem' }}>
                <div style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-dark)',
                  padding: '1.25rem 1.4rem',
                  borderRadius: '3px'
                }}>
                  <ShieldCheck size={24} style={{ color: '#79D1A5', marginBottom: '0.6rem' }} />
                  <h4 style={{ fontSize: '1.1rem', color: '#FFF', marginBottom: '0.3rem' }}>SABS Compliant</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0 }}>Strict 28-day cylinder crush testing for every batch.</p>
                </div>

                <div style={{
                  backgroundColor: '#F2F5EF',
                  border: '1px solid #BEC6B9',
                  padding: '1.25rem 1.4rem',
                  borderRadius: '6px'
                }}>
                  <Leaf size={24} style={{ color: '#92D04F', marginBottom: '0.6rem' }} />
                  <h4 style={{ fontSize: '1.1rem', color: '#232623', marginBottom: '0.3rem' }}>Green Belt Ecology</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0 }}>Dual-duty walls planted with low-water vygies.</p>
                </div>

                <div style={{
                  backgroundColor: '#F2F5EF',
                  border: '1px solid #BEC6B9',
                  padding: '1.25rem 1.4rem',
                  borderRadius: '6px'
                }}>
                  <Truck size={24} style={{ color: '#6FA240', marginBottom: '0.6rem' }} />
                  <h4 style={{ fontSize: '1.1rem', color: '#232623', marginBottom: '0.3rem' }}>Turnkey Teams</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0 }}>From site excavation and foundation to block erection.</p>
                </div>
              </div>
            </div>

            {/* Right Side: Elza Liebenberg Executive Leadership Profile Card */}
            <div style={{ gridColumn: 'span 5' }}>
              <div style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid rgba(184, 93, 59, 0.45)',
                borderRadius: '4px',
                padding: '2.5rem',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5)'
              }}>
                <div className="mono-tag terracotta" style={{ marginBottom: '1rem' }}>
                  <span>MANAGEMENT & SALES LEADER</span>
                </div>
                <h3 style={{ fontSize: '2.1rem', color: '#232623', marginBottom: '0.3rem' }}>
                  {COMPANY_INFO.contactPerson}
                </h3>
                <div style={{ color: '#6FA240', fontWeight: 700, fontSize: '0.9rem', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
                  Managing Director — Ecocrete Free State
                </div>

                <p style={{ color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                  "At Ecocrete, we don't believe in just selling blocks. We partner with project engineers and contractors from initial site slope assessment all the way through to final planting. Quality is our reputation across the Free State."
                </p>

                {/* Direct Contact Details Box */}
                <div style={{
                  backgroundColor: '#F2F5EF',
                  border: '1px solid #BEC6B9',
                  padding: '1.25rem',
                  borderRadius: '6px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.85rem',
                  marginBottom: '2rem'
                }}>
                  <a
                    href={`tel:${COMPANY_INFO.phoneClean}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      color: '#232623',
                      textDecoration: 'none',
                      fontWeight: 700,
                      fontSize: '1.15rem'
                    }}
                  >
                    <Phone size={18} style={{ color: '#92D04F' }} />
                    <span>{COMPANY_INFO.phone}</span>
                  </a>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--text-muted)' }}>
                    <Mail size={18} style={{ color: '#6FA240', marginTop: '2px' }} />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                      <a href={`mailto:${COMPANY_INFO.emailPrimary}`} style={{ color: '#232623', textDecoration: 'none', fontWeight: 600 }}>
                        {COMPANY_INFO.emailPrimary}
                      </a>
                      <a href={`mailto:${COMPANY_INFO.emailSecondary}`} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
                        {COMPANY_INFO.emailSecondary}
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                    <MapPin size={18} style={{ color: '#79D1A5' }} />
                    <span>{COMPANY_INFO.location} • Free State & Western Cape Border</span>
                  </div>
                </div>

                <button
                  onClick={onOpenQuote}
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '0.9rem' }}
                >
                  <span>Request Consultation With Elza</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Featured Ecological Engineering Case Study (Caledon Caltex) */}
      <section style={{
        padding: '6rem 0',
        backgroundColor: '#0F1010',
        borderTop: '1px solid var(--border-dark)',
        borderBottom: '1px solid var(--border-dark)'
      }}>
        <div className="container">
          <div style={{ marginBottom: '2.5rem' }}>
            <div className="mono-tag green" style={{ marginBottom: '0.6rem' }}>
              <span>PROVEN BIO-ENGINEERING SUCCESS</span>
            </div>
            <h2 style={{ fontSize: '2.65rem', color: '#FFFFFF', margin: 0 }}>
              Living Green Boundaries in Action
            </h2>
          </div>

          <CaseStudyCard
            onOpenQuote={onOpenQuote}
            onNavigateToService={() => onNavigate('services', 'terraforce-retaining-walls')}
            variant="home"
          />
        </div>
      </section>

      {/* 4. Frequently Asked Questions (FAQ) */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '920px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="mono-tag terracotta" style={{ marginBottom: '0.6rem' }}>
              <span>CLARITY & ASSURANCE</span>
            </div>
            <h2 style={{ fontSize: '2.6rem', color: '#FFFFFF', margin: 0 }}>
              Frequently Asked Questions
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginTop: '0.5rem' }}>
              Answers regarding our Terraforce® manufacturing license, SABS testing, and turnkey installation across the Free State.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {FAQ_GENERAL.map((faq, i) => (
              <div
                key={i}
                className="arch-card"
                style={{ padding: '1.75rem 2rem' }}
              >
                <h3 style={{ fontSize: '1.25rem', color: '#232623', marginBottom: '0.6rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <HelpCircle size={20} style={{ color: '#92D04F', marginTop: '3px', flexShrink: 0 }} />
                  <span>{faq.question}</span>
                </h3>
                <p style={{ color: 'var(--text-main)', fontSize: '0.98rem', margin: 0, paddingLeft: '2rem', lineHeight: 1.7 }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};
