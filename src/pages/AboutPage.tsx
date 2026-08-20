import React from 'react';
import {
  Phone, Mail, MapPin, FileText, HelpCircle, Award, Hammer, ShieldCheck, Truck, ArrowRight, Clock
} from 'lucide-react';
import { COMPANY_INFO, FAQ_GENERAL } from '../data/ecocreteData';

interface AboutPageProps {
  onOpenQuote: () => void;
  onNavigate: (view: 'home' | 'services' | 'products' | 'about' | 'contact', serviceId?: string) => void;
}

const PILLARS = [
  { icon: Award, title: '30 years in the industry', desc: 'Casting precast concrete in the Free State since the mid-1990s — we know what lasts and what leans.' },
  { icon: Hammer, title: 'We manufacture and install', desc: 'One team from the mould to the finished wall. No supplier vs. contractor blame game.' },
  { icon: ShieldCheck, title: 'Terraforce® licensed', desc: 'Full block range in stock — L15, 4x4, Step, Bat, Terrafix, Terrapac. Quality-assured against the range spec.' },
  { icon: Truck, title: 'Bloemfontein based', desc: 'Our truck, our crew, our yard — delivery and install across the Free State and border regions.' }
];

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenQuote, onNavigate }) => {
  return (
    <div className="about-page">

      {/* ============================================================
          HERO
          ============================================================ */}
      <section style={{
        position: 'relative',
        padding: '4.5rem 0 4rem',
        backgroundImage: `linear-gradient(rgba(20, 24, 22, 0.78), rgba(20, 24, 22, 0.72)), url('/images/ecocrete-signboard.jpg')`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        color: '#FFFFFF'
      }}>
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
            About Ecocrete
          </div>
          <h1 style={{
            fontSize: 'clamp(2rem, 4.5vw, 3.3rem)', lineHeight: 1.1, fontWeight: 700,
            margin: '0 auto 1rem', maxWidth: '860px', letterSpacing: '-0.015em', color: '#FFFFFF'
          }}>
            Cast, delivered, installed —<br /><span style={{ color: '#92D04F' }}>all under one roof.</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '1.1rem', maxWidth: '680px', margin: '0 auto', lineHeight: 1.55 }}>
            Ecocrete is a Bloemfontein precast &amp; concrete yard. We&apos;ve been casting Walling,
            Terraforce® and the full Precast range for thirty years — and putting them up ourselves.
          </p>
        </div>
      </section>

      {/* ============================================================
          STORY
          ============================================================ */}
      <section style={{ padding: '4.5rem 0', backgroundColor: '#FCFDFA' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.5rem', alignItems: 'center' }} className="about-two-col">
            <div>
              <div style={{ fontSize: '0.75rem', color: '#6FA240', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Our story
              </div>
              <h2 style={{ fontSize: '2rem', color: '#232623', margin: '0 0 1rem' }}>
                A yard, a truck, and thirty years of casting.
              </h2>
              <p style={{ color: '#2D312E', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                The signboard outside the yard reads: <em>&ldquo;Ecocrete — Your precast &amp; concrete product
                specialist. 30 Years in the Industry. We manufacture and install.&rdquo;</em> That&apos;s the
                whole business in one line.
              </p>
              <p style={{ color: '#2D312E', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                What comes out of the yard is organised the way any builder thinks:
                <strong> Walling</strong> on one side (Uniquall and Precon in four finishes),
                <strong> Terraforce® </strong>on the other (the full licensed block range), and the
                <strong> Precast </strong>range on pallets in between — stepping stones, pillars, caps,
                copings, sills, balls, waskattie, kerbs and more.
              </p>
              <p style={{ color: '#2D312E', fontSize: '1rem', lineHeight: 1.7 }}>
                We also extend existing walls higher and repair walls that have shifted or been knocked —
                small jobs welcome, big jobs handled.
              </p>
            </div>

            <div style={{
              position: 'relative',
              borderRadius: '8px',
              overflow: 'hidden',
              border: '1px solid #E6E9E2',
              aspectRatio: '4/3'
            }}>
              <img
                src="/images/ecocrete-signboard.jpg"
                alt="Ecocrete signboard: You're precast concrete product specialist. 30 years in the industry. We manufacture and install."
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          PILLARS
          ============================================================ */}
      <section style={{ padding: '4rem 0', backgroundColor: '#F5F7F3', borderTop: '1px solid #E6E9E2', borderBottom: '1px solid #E6E9E2' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 2.5rem' }}>
            <div style={{ fontSize: '0.75rem', color: '#6FA240', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              How we work
            </div>
            <h2 style={{ fontSize: '2rem', margin: 0, color: '#232623' }}>Four things we get right.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
            {PILLARS.map((p, i) => (
              <div key={i} style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E6E9E2',
                borderRadius: '6px',
                padding: '1.75rem'
              }}>
                <div style={{
                  width: '46px', height: '46px', borderRadius: '4px',
                  backgroundColor: '#EEF6E3',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1rem', color: '#6FA240'
                }}>
                  <p.icon size={22} />
                </div>
                <h3 style={{ fontSize: '1.05rem', color: '#232623', margin: '0 0 0.4rem' }}>{p.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.55, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CONTACT CARD
          ============================================================ */}
      <section style={{ padding: '4.5rem 0', backgroundColor: '#FCFDFA' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '2.5rem', alignItems: 'stretch' }} className="about-two-col">
            <div style={{
              backgroundColor: '#F5F7F3',
              border: '1px solid #E6E9E2',
              borderRadius: '6px',
              padding: '2rem'
            }}>
              <div style={{ fontSize: '0.75rem', color: '#6FA240', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Who to talk to
              </div>
              <h2 style={{ fontSize: '1.7rem', color: '#232623', margin: '0 0 0.35rem' }}>
                {COMPANY_INFO.contactPerson}
              </h2>
              <div style={{ color: '#7C7C7D', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                Sales &amp; site enquiries
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                <a href={`tel:${COMPANY_INFO.phoneClean}`} style={{ display: 'flex', gap: '0.65rem', textDecoration: 'none', color: 'inherit' }}>
                  <Phone size={18} style={{ color: '#6FA240', marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: '0.72rem', color: '#7C7C7D', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Mobile</div>
                    <div style={{ fontSize: '1.02rem', fontWeight: 700, color: '#232623' }}>{COMPANY_INFO.phone}</div>
                  </div>
                </a>
                <a href={`tel:${COMPANY_INFO.landlineClean}`} style={{ display: 'flex', gap: '0.65rem', textDecoration: 'none', color: 'inherit' }}>
                  <Phone size={18} style={{ color: '#6FA240', marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: '0.72rem', color: '#7C7C7D', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Yard</div>
                    <div style={{ fontSize: '1.02rem', fontWeight: 700, color: '#232623' }}>{COMPANY_INFO.landline}</div>
                  </div>
                </a>
                <a href={`mailto:${COMPANY_INFO.emailPrimary}`} style={{ display: 'flex', gap: '0.65rem', textDecoration: 'none', color: 'inherit' }}>
                  <Mail size={18} style={{ color: '#6FA240', marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: '0.72rem', color: '#7C7C7D', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email</div>
                    <div style={{ fontSize: '0.95rem', color: '#232623' }}>{COMPANY_INFO.emailPrimary}</div>
                  </div>
                </a>
                <div style={{ display: 'flex', gap: '0.65rem' }}>
                  <MapPin size={18} style={{ color: '#6FA240', marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: '0.72rem', color: '#7C7C7D', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Location</div>
                    <div style={{ fontSize: '0.95rem', color: '#232623' }}>{COMPANY_INFO.location}</div>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid #E6E9E2', display: 'flex', gap: '1.25rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.88rem', color: '#7C7C7D' }}>
                  <Clock size={15} style={{ color: '#6FA240' }} />
                  {COMPANY_INFO.hours.weekdays}
                </div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.88rem', color: '#7C7C7D' }}>
                  <Clock size={15} style={{ color: '#6FA240' }} />
                  {COMPANY_INFO.hours.saturday}
                </div>
              </div>
            </div>

            <div style={{
              backgroundColor: '#141816',
              color: '#FFFFFF',
              border: '1px solid #262B27',
              borderRadius: '6px',
              padding: '2rem',
              display: 'flex', flexDirection: 'column', justifyContent: 'center'
            }}>
              <div style={{ fontSize: '0.75rem', color: '#92D04F', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                Next step
              </div>
              <h3 style={{ fontSize: '1.4rem', color: '#FFFFFF', margin: '0 0 0.75rem' }}>
                Have a project in mind?
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: 1.55, marginBottom: '1.5rem' }}>
                Send us the site address and a photo — we&apos;ll come back with a quote. Small jobs
                and repairs welcome.
              </p>
              <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                <button
                  onClick={onOpenQuote}
                  style={{
                    backgroundColor: '#92D04F', color: '#141816', border: 'none',
                    padding: '0.75rem 1.35rem', borderRadius: '4px',
                    fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.03em', textTransform: 'uppercase',
                    cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.5rem'
                  }}
                >
                  <FileText size={15} /> Request a Quote
                </button>
                <button
                  onClick={() => onNavigate('services')}
                  style={{
                    backgroundColor: 'transparent', color: '#FFFFFF',
                    border: '2px solid rgba(255,255,255,0.35)',
                    padding: '0.65rem 1.35rem', borderRadius: '4px',
                    fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.03em', textTransform: 'uppercase',
                    cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                    fontFamily: 'inherit'
                  }}
                >
                  See Services <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FAQ
          ============================================================ */}
      <section style={{ padding: '4rem 0 5rem', backgroundColor: '#F5F7F3', borderTop: '1px solid #E6E9E2' }}>
        <div className="container">
          <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <HelpCircle size={24} style={{ color: '#6FA240' }} />
            <h2 style={{ fontSize: '2rem', color: '#232623', margin: 0 }}>Common questions</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {FAQ_GENERAL.map((f, i) => (
              <div key={i} style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E6E9E2',
                borderRadius: '6px',
                padding: '1.25rem 1.5rem'
              }}>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#232623', marginBottom: '0.5rem' }}>
                  {f.question}
                </div>
                <div style={{ fontSize: '0.92rem', color: '#555', lineHeight: 1.6 }}>
                  {f.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 780px) {
          .about-two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};
