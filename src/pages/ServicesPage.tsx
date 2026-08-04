import React, { useState } from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Search, 
  FileText, 
  CheckCircle, 
  Phone
} from 'lucide-react';
import { SERVICES_DATA, COMPANY_INFO } from '../data/ecocreteData';

interface ServicesPageProps {
  onSelectService: (serviceId: string) => void;
  onOpenQuote: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onSelectService,
  onOpenQuote,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Retaining & Bio-Engineering', 'Heavy Structural Concrete', 'Perimeter Security & Privacy', 'Civil Infrastructure', 'Site Installation & Engineering'];

  const filteredServices = SERVICES_DATA.filter((srv) => {
    const matchesCategory = selectedCategory === 'All' || srv.category === selectedCategory;
    const matchesSearch = 
      srv.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      srv.shortDesc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      srv.applications.some(a => a.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="services-page" style={{ backgroundColor: 'var(--bg-primary)' }}>
      
      {/* 1. Page Header Banner */}
      <section style={{
        padding: '5rem 0 3.5rem',
        borderBottom: '1px solid var(--border-dark)',
        backgroundColor: '#0F1010'
      }} className="bg-grid-dark">
        <div className="container">
          <div style={{ maxWidth: '820px' }}>
            <div className="mono-tag green" style={{ marginBottom: '0.8rem' }}>
              <span>ENGINEERED TO SOUTH AFRICAN STANDARDS</span>
            </div>
            <h1 style={{ fontSize: '3.6rem', color: '#FFFFFF', marginBottom: '1.25rem', lineHeight: 1.1 }}>
              Specialized Precast & <br />
              <span style={{ color: '#92D04F' }}>Civil Engineering</span> Services.
            </h1>
            <p style={{ color: 'rgba(255, 255, 255, 0.88)', fontSize: '1.12rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              From official Free State licensed manufacturing of SABS-tested Terraforce® retaining blocks to turnkey civil site installation. Click any service below to explore full technical specifications, SABS data, and engineering diagrams.
            </p>

            {/* Quick Contact & Quote CTA bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={onOpenQuote}
                className="btn btn-primary"
                style={{ padding: '0.9rem 2rem' }}
              >
                <FileText size={17} />
                <span>Request Custom Engineering Quote</span>
              </button>
              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="btn btn-outline-dark"
                style={{ padding: '0.9rem 1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <Phone size={17} style={{ color: '#92D04F' }} />
                <span>Call Elza Liebenberg: {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Filter & Search Controls */}
      <section style={{
        padding: '1.75rem 0',
        backgroundColor: 'var(--bg-surface)',
        borderBottom: '1px solid var(--border-dark)',
        position: 'sticky',
        top: '74px',
        zIndex: 50,
        backdropFilter: 'blur(10px)'
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          
          {/* Category Tabs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  backgroundColor: selectedCategory === cat ? '#92D04F' : '#F2F5EF',
                  color: selectedCategory === cat ? '#232623' : '#7C7C7D',
                  border: selectedCategory === cat ? '1px solid #92D04F' : '1px solid #BEC6B9',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: '0.2s'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div style={{ position: 'relative', width: '320px', maxWidth: '100%' }}>
            <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder="Filter by application or product..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '0.6rem 1rem 0.6rem 2.4rem',
                backgroundColor: '#F2F5EF',
                border: '1px solid #BEC6B9',
                borderRadius: '6px',
                color: '#232623',
                fontSize: '0.88rem',
                fontFamily: 'var(--font-body)'
              }}
            />
          </div>

        </div>
      </section>

      {/* 3. Expandable Services Cards List */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          
          {filteredServices.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '5rem 1rem', backgroundColor: 'var(--bg-surface)', borderRadius: '4px', border: '1px solid var(--border-dark)' }}>
              <div style={{ fontSize: '1.25rem', color: '#FFF', marginBottom: '0.5rem' }}>No matching precast services found</div>
              <p style={{ color: 'var(--text-muted)' }}>Try resetting your category filter or search query.</p>
              <button
                onClick={() => { setSelectedCategory('All'); setSearchTerm(''); }}
                className="btn btn-outline-dark"
                style={{ marginTop: '1rem' }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {filteredServices.map((service, idx) => (
                <div
                  key={service.id}
                  className="arch-card"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(12, 1fr)',
                    cursor: 'pointer',
                    minHeight: '360px',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onClick={() => onSelectService(service.id)}
                >
                  {/* Left Column: High-Res Service Image */}
                  <div style={{
                    gridColumn: 'span 5',
                    position: 'relative',
                    minHeight: '320px',
                    overflow: 'hidden',
                    backgroundColor: '#101111'
                  }}>
                    <img
                      src={service.heroImage}
                      alt={service.title}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s'
                      }}
                    />
                    {/* Dark gradient edge */}
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to right, transparent 50%, rgba(29, 31, 30, 0.95) 100%)',
                      pointerEvents: 'none'
                    }} />

                    {/* Category overlay label */}
                    <div style={{ position: 'absolute', top: '1.25rem', left: '1.25rem' }}>
                      <span className="mono-tag dark">
                        <span>SERVICE 0{idx + 1} • {service.category}</span>
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Service Description, Applications, and CTA */}
                  <div style={{
                    gridColumn: 'span 7',
                    padding: '2.5rem 3rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    backgroundColor: 'var(--bg-surface)'
                  }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
                        <span style={{ color: '#92D04F', fontWeight: 700, fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                          <ShieldCheck size={14} />
                          <span>SABS COMPLIANT & LICENSED</span>
                        </span>
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
                          REF: {service.slug.toUpperCase()}
                        </span>
                      </div>

                      <h2 style={{ fontSize: '2.15rem', color: '#232623', marginBottom: '0.8rem', lineHeight: 1.18 }}>
                        {service.title}
                      </h2>

                      <p style={{ color: 'var(--text-main)', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                        {service.shortDesc}
                      </p>

                      {/* Key Application Bullet Points */}
                      <div style={{
                        backgroundColor: '#F2F5EF',
                        border: '1px solid #BEC6B9',
                        padding: '1.2rem 1.4rem',
                        borderRadius: '6px',
                        marginBottom: '1.75rem'
                      }}>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '0.6rem', textTransform: 'uppercase' }}>
                          TYPICAL ENGINEERING APPLICATIONS:
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
                          {service.applications.slice(0, 4).map((app, appIdx) => (
                            <div key={appIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.88rem', color: '#232623' }}>
                              <CheckCircle size={15} style={{ color: '#92D04F', marginTop: '3px', flexShrink: 0 }} />
                              <span>{app}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderTop: '1px solid #BEC6B9',
                      paddingTop: '1.25rem',
                      flexWrap: 'wrap',
                      gap: '1rem'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <ShieldCheck size={15} style={{ color: '#92D04F' }} />
                          <span>Turnkey Installation Teams</span>
                        </span>
                        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                          SABS Certificate: <strong>Available on Request</strong>
                        </span>
                      </div>
                      
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <button
                          onClick={() => onSelectService(service.id)}
                          className="btn btn-outline-dark"
                          style={{ padding: '0.65rem 1.25rem', fontSize: '0.85rem' }}
                        >
                          <span>Full Specifications</span>
                          <ArrowRight size={15} />
                        </button>

                        <button
                          onClick={onOpenQuote}
                          className="btn btn-primary"
                          style={{ padding: '0.65rem 1.25rem', fontSize: '0.85rem' }}
                        >
                          <span>Quote</span>
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* 4. Bottom Technical Assistance Banner */}
      <section style={{ backgroundColor: '#F2F5EF', borderTop: '1px solid #BEC6B9', padding: '4.5rem 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '780px' }}>
          <div className="mono-tag terracotta" style={{ marginBottom: '1rem' }}>
            <span>DIRECT ENGINEERING CONSULTATION</span>
          </div>
          <h2 style={{ fontSize: '2.5rem', color: '#232623', marginBottom: '1rem' }}>
            Need Custom Precast Specifications?
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '2.25rem' }}>
            Our technical team works with civil contractors across the Free State to engineer custom drainage boxes, specialized retaining slopes, and heavy-duty industrial elements.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={onOpenQuote}
              className="btn btn-primary"
              style={{ padding: '0.9rem 2rem' }}
            >
              <span>Request Turnkey Quote</span>
            </button>
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="btn btn-outline-dark"
              style={{ padding: '0.9rem 1.75rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
            >
              <Phone size={17} style={{ color: '#92D04F' }} />
              <span>Call {COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .arch-card > div {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </div>
  );
};
