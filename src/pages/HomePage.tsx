import React from 'react';
import {
  ArrowRight,
  Phone,
  FileText,
  Wrench,
  Award,
  Truck,
  MapPin,
  Hammer,
  Layers,
  ShieldCheck
} from 'lucide-react';
import { COMPANY_INFO, TESTIMONIALS } from '../data/ecocreteData';

interface HomePageProps {
  onNavigate: (view: 'home' | 'services' | 'products' | 'about' | 'contact', serviceId?: string) => void;
  onOpenQuote: () => void;
}

// Three product families — mirror the top three boxes on the Ecocrete note
const PRODUCT_FAMILIES = [
  {
    slug: 'walling',
    title: 'Walling',
    tagline: 'Uniquall & Precon',
    blurb: 'Uniquall (650 & 500 slab) and Precon Wall in four finishes — Louvred, Between, Sandstone and Global Plain. Available in different heights.',
    image: '/images/precast-boundary-h-post.jpg'
  },
  {
    slug: 'terraforce',
    title: 'Terraforce®',
    tagline: 'Licensed round-face retaining',
    blurb: 'The full block range — L15, 4x4, Step, Bat, Terrafix and Terrapac. Round-face profile handles curves without cutting; every core plants.',
    image: '/images/terraforce-tiered-commercial.jpg'
  },
  {
    slug: 'precast',
    title: 'Precast',
    tagline: 'Everything else, cast in the yard',
    blurb: 'Stepping stones, pillars & caps, copings, sills, balls, waskattie, kerbs — the full range on pallets in the yard.',
    image: '/images/stepping-stones-display.jpg'
  }
];

// The two on-site services from the note
const ON_SITE_SERVICES = [
  {
    slug: 'extend-walling',
    title: 'Extend Walling',
    icon: Layers,
    blurb: 'Take an existing wall higher — matched profile, tied in cleanly, no wall replacement.'
  },
  {
    slug: 'repairs',
    title: 'Repairs',
    icon: Wrench,
    blurb: 'Shifted Terraforce® courses, cracked panels, leaning posts, replacement caps. Small jobs welcome.'
  }
];

// Real yard photos for the "In the yard" strip
const YARD_STRIP = [
  { src: '/images/terraforce-poolside.jpg', label: 'Terraforce® poolside wall' },
  { src: '/images/precast-boundary-decorative.jpg', label: 'Precon walling + caps' },
  { src: '/images/pillar-fluted-cap.jpg', label: 'Fluted pillar & cap' },
  { src: '/images/kerb-installation.jpg', label: 'Kerb laid to line' },
  { src: '/images/precast-braai.jpg', label: 'Stone-face braai unit' },
  { src: '/images/stepping-stones-display.jpg', label: 'Stepping stones on pallet' }
];

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenQuote }) => {

  return (
    <div className="home-page">

      {/* ============================================================
          1. HERO — dark image, white overlay, two CTAs
          ============================================================ */}
      <section
        style={{
          position: 'relative',
          minHeight: '620px',
          display: 'flex',
          alignItems: 'center',
          backgroundImage: `linear-gradient(rgba(20, 24, 22, 0.72), rgba(20, 24, 22, 0.62)), url('/images/terraforce-tiered-commercial.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#FFFFFF',
          padding: '5rem 0'
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.35rem 0.9rem',
            backgroundColor: 'rgba(146, 208, 79, 0.18)',
            border: '1px solid rgba(146, 208, 79, 0.4)',
            borderRadius: '999px',
            fontSize: '0.78rem',
            fontWeight: 600,
            color: '#C8E9A3',
            marginBottom: '1.5rem',
            letterSpacing: '0.04em',
            textTransform: 'uppercase'
          }}>
            <ShieldCheck size={14} /> 30 years in the industry
          </div>

          <h1 style={{
            fontSize: 'clamp(2.4rem, 5vw, 3.75rem)',
            lineHeight: 1.1,
            fontWeight: 700,
            color: '#FFFFFF',
            maxWidth: '900px',
            margin: '0 auto 1.25rem',
            letterSpacing: '-0.015em'
          }}>
            Your precast &amp; concrete<br />
            <span style={{ color: '#92D04F' }}>product specialist.</span>
          </h1>

          <p style={{
            fontSize: '1.1rem',
            color: 'rgba(255, 255, 255, 0.82)',
            maxWidth: '640px',
            margin: '0 auto 2.25rem',
            lineHeight: 1.55
          }}>
            Walling, Terraforce® retaining walls, and the full range of precast products —
            manufactured in our Bloemfontein yard and installed by our own team.
          </p>

          <div style={{ display: 'flex', gap: '0.9rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => onNavigate('products')}
              style={{
                backgroundColor: '#92D04F',
                color: '#141816',
                border: 'none',
                padding: '0.95rem 1.75rem',
                borderRadius: '4px',
                fontWeight: 700,
                fontSize: '0.95rem',
                letterSpacing: '0.03em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#7ABC3A'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#92D04F'}
            >
              Explore Our Products
              <ArrowRight size={16} />
            </button>

            <button
              onClick={onOpenQuote}
              style={{
                backgroundColor: 'transparent',
                color: '#FFFFFF',
                border: '2px solid #FFFFFF',
                padding: '0.85rem 1.75rem',
                borderRadius: '4px',
                fontWeight: 700,
                fontSize: '0.95rem',
                letterSpacing: '0.03em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#FFFFFF'; e.currentTarget.style.color = '#141816'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#FFFFFF'; }}
            >
              <FileText size={16} />
              Get a Free Quote
            </button>
          </div>
        </div>
      </section>

      {/* ============================================================
          2. TRUST BAR — 4 icon cells
          ============================================================ */}
      <section style={{ backgroundColor: '#FCFDFA', borderBottom: '1px solid #E6E9E2', padding: '2.75rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            {[
              { icon: Award, label: '30 Years in the Industry', sub: 'Casting in the Free State since the mid-1990s' },
              { icon: Hammer, label: 'We Manufacture & Install', sub: 'One team from the yard to the finished wall' },
              { icon: ShieldCheck, label: 'Terraforce® Licensed', sub: 'Full block range in stock: L15, 4x4, Step, Bat, Terrafix, Terrapac' },
              { icon: Truck, label: 'Bloemfontein Based', sub: 'Delivery on our own truck across the Free State' }
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '4px',
                  backgroundColor: '#EEF6E3',
                  color: '#6FA240',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <item.icon size={22} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: '#232623', fontSize: '0.98rem', marginBottom: '0.2rem' }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#7C7C7D', lineHeight: 1.45 }}>
                    {item.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          3. THREE PRODUCT FAMILIES — big photo cards
          ============================================================ */}
      <section style={{ padding: '5rem 0', backgroundColor: '#F5F7F3' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '620px', margin: '0 auto 3rem' }}>
            <div style={{
              fontSize: '0.78rem', color: '#6FA240', fontWeight: 700, textTransform: 'uppercase',
              letterSpacing: '0.1em', marginBottom: '0.6rem'
            }}>
              What we cast
            </div>
            <h2 style={{ fontSize: '2.25rem', color: '#232623', margin: '0 0 0.9rem' }}>
              Three product families
            </h2>
            <p style={{ color: '#7C7C7D', fontSize: '1rem', lineHeight: 1.6 }}>
              The Ecocrete range organised the way the yard is organised — Walling on one side,
              Terraforce® on the other, and the full Precast range on pallets in between.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {PRODUCT_FAMILIES.map((fam) => (
              <button
                key={fam.slug}
                onClick={() => onNavigate('services', fam.slug)}
                style={{
                  textAlign: 'left',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E6E9E2',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  padding: 0,
                  color: 'inherit',
                  fontFamily: 'inherit'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ height: '240px', overflow: 'hidden' }}>
                  <img
                    src={fam.image}
                    alt={fam.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <div style={{ padding: '1.5rem 1.5rem 1.75rem' }}>
                  <div style={{ fontSize: '0.72rem', color: '#6FA240', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                    {fam.tagline}
                  </div>
                  <h3 style={{ fontSize: '1.5rem', margin: '0 0 0.7rem', color: '#232623' }}>{fam.title}</h3>
                  <p style={{ fontSize: '0.92rem', color: '#7C7C7D', lineHeight: 1.55, margin: '0 0 1rem' }}>
                    {fam.blurb}
                  </p>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#6FA240', fontWeight: 700, fontSize: '0.9rem' }}>
                    See the range <ArrowRight size={15} />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          4. ON-SITE SERVICES — Extend Walling + Repairs
          ============================================================ */}
      <section style={{ padding: '5rem 0', backgroundColor: '#FCFDFA', borderTop: '1px solid #E6E9E2', borderBottom: '1px solid #E6E9E2' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }} className="on-site-grid">
            <div>
              <div style={{
                fontSize: '0.78rem', color: '#6FA240', fontWeight: 700, textTransform: 'uppercase',
                letterSpacing: '0.1em', marginBottom: '0.6rem'
              }}>
                On the site, not just from the yard
              </div>
              <h2 style={{ fontSize: '2.1rem', margin: '0 0 1rem', color: '#232623' }}>
                Extend an existing wall. Repair a knocked one.
              </h2>
              <p style={{ color: '#555', fontSize: '1rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                You don't have to replace a whole wall to make it taller, and you don't have to
                rebuild after a knock. Our crew comes out, matches the profile, and hands the wall
                back finished — small jobs welcome.
              </p>
              <button
                onClick={() => onNavigate('services')}
                style={{
                  backgroundColor: 'transparent',
                  color: '#6FA240',
                  border: '2px solid #6FA240',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '4px',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  letterSpacing: '0.03em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                All Services <ArrowRight size={15} />
              </button>
            </div>

            <div style={{ display: 'grid', gap: '1rem' }}>
              {ON_SITE_SERVICES.map((s) => (
                <button
                  key={s.slug}
                  onClick={() => onNavigate('services', s.slug)}
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    padding: '1.25rem',
                    backgroundColor: '#F5F7F3',
                    border: '1px solid #E6E9E2',
                    borderRadius: '6px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    color: 'inherit',
                    fontFamily: 'inherit',
                    transition: 'border-color 0.2s, background 0.2s'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#92D04F'; e.currentTarget.style.backgroundColor = '#EEF6E3'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#E6E9E2'; e.currentTarget.style.backgroundColor = '#F5F7F3'; }}
                >
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '4px',
                    backgroundColor: '#FFFFFF', border: '1px solid #E6E9E2',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#6FA240', flexShrink: 0
                  }}>
                    <s.icon size={22} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#232623', fontSize: '1.05rem', marginBottom: '0.25rem' }}>
                      {s.title}
                    </div>
                    <div style={{ fontSize: '0.9rem', color: '#7C7C7D', lineHeight: 1.5 }}>
                      {s.blurb}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          5. YARD STRIP — real photos
          ============================================================ */}
      <section style={{ padding: '5rem 0', backgroundColor: '#F5F7F3' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
            <div>
              <div style={{ fontSize: '0.78rem', color: '#6FA240', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>
                From the yard
              </div>
              <h2 style={{ fontSize: '2rem', margin: 0, color: '#232623' }}>What we&apos;ve been casting</h2>
            </div>
            <button
              onClick={() => onNavigate('products')}
              style={{
                background: 'transparent', border: 'none', color: '#6FA240',
                fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer',
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem'
              }}
            >
              View all products <ArrowRight size={15} />
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
            {YARD_STRIP.map((y, i) => (
              <div key={i} style={{
                position: 'relative',
                aspectRatio: '4/3',
                overflow: 'hidden',
                borderRadius: '4px',
                border: '1px solid #E6E9E2'
              }}>
                <img src={y.src} alt={y.label} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <div style={{
                  position: 'absolute', left: 0, right: 0, bottom: 0,
                  background: 'linear-gradient(transparent, rgba(20,24,22,0.75))',
                  color: '#FFFFFF', padding: '1.5rem 0.9rem 0.7rem',
                  fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.02em'
                }}>
                  {y.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          6. TESTIMONIALS — 3 quotes
          ============================================================ */}
      <section style={{ padding: '5rem 0', backgroundColor: '#FCFDFA', borderTop: '1px solid #E6E9E2' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto 2.75rem' }}>
            <div style={{ fontSize: '0.78rem', color: '#6FA240', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.6rem' }}>
              What people say
            </div>
            <h2 style={{ fontSize: '2rem', margin: 0, color: '#232623' }}>Straight from site.</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {TESTIMONIALS.slice(0, 3).map((t, i) => (
              <div key={i} style={{
                padding: '1.75rem',
                backgroundColor: '#F5F7F3',
                border: '1px solid #E6E9E2',
                borderRadius: '6px'
              }}>
                <div style={{ fontSize: '1.5rem', color: '#92D04F', lineHeight: 1, marginBottom: '0.5rem' }}>&ldquo;</div>
                <p style={{ color: '#2D312E', fontSize: '0.95rem', lineHeight: 1.6, margin: '0 0 1.25rem' }}>
                  {t.quote}
                </p>
                <div style={{ borderTop: '1px solid #E6E9E2', paddingTop: '0.9rem' }}>
                  <div style={{ fontWeight: 700, color: '#232623', fontSize: '0.9rem' }}>{t.author}</div>
                  <div style={{ fontSize: '0.8rem', color: '#7C7C7D' }}>{t.project} · {t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          7. CONTACT CTA BAND — dark
          ============================================================ */}
      <section style={{ padding: '4.5rem 0', backgroundColor: '#141816', color: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '3rem', alignItems: 'center' }} className="on-site-grid">
            <div>
              <h2 style={{ fontSize: '2.1rem', color: '#FFFFFF', margin: '0 0 0.75rem' }}>
                Ready to talk about your wall?
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', lineHeight: 1.55, marginBottom: '1.75rem' }}>
                Call the yard, WhatsApp Elza, or send us the site details and we&apos;ll come back with a quote.
                Small jobs and repairs welcome.
              </p>

              <div style={{ display: 'flex', gap: '0.9rem', flexWrap: 'wrap' }}>
                <button
                  onClick={onOpenQuote}
                  style={{
                    backgroundColor: '#92D04F', color: '#141816', border: 'none',
                    padding: '0.85rem 1.5rem', borderRadius: '4px', fontWeight: 700,
                    fontSize: '0.9rem', letterSpacing: '0.03em', textTransform: 'uppercase',
                    cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.5rem'
                  }}
                >
                  <FileText size={16} /> Request a Quote
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  style={{
                    backgroundColor: 'transparent', color: '#FFFFFF', border: '2px solid rgba(255,255,255,0.35)',
                    padding: '0.75rem 1.5rem', borderRadius: '4px', fontWeight: 700,
                    fontSize: '0.9rem', letterSpacing: '0.03em', textTransform: 'uppercase',
                    cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.5rem'
                  }}
                >
                  Contact Us
                </button>
              </div>
            </div>

            <div style={{
              backgroundColor: '#1F2320',
              border: '1px solid #2B302C',
              borderRadius: '6px',
              padding: '1.75rem'
            }}>
              <div style={{ fontSize: '0.75rem', color: '#92D04F', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.9rem' }}>
                Direct contact
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Sales — {COMPANY_INFO.contactPerson}</div>
                <a href={`tel:${COMPANY_INFO.phoneClean}`} style={{ color: '#FFFFFF', fontSize: '1.15rem', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Phone size={16} style={{ color: '#92D04F' }} /> {COMPANY_INFO.phone}
                </a>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Yard</div>
                <a href={`tel:${COMPANY_INFO.landlineClean}`} style={{ color: '#FFFFFF', fontSize: '1.05rem', textDecoration: 'none' }}>
                  {COMPANY_INFO.landline}
                </a>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email</div>
                <a href={`mailto:${COMPANY_INFO.emailPrimary}`} style={{ color: '#FFFFFF', fontSize: '0.95rem', textDecoration: 'none' }}>
                  {COMPANY_INFO.emailPrimary}
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginTop: '0.75rem' }}>
                <MapPin size={14} style={{ color: '#92D04F' }} /> {COMPANY_INFO.location}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
