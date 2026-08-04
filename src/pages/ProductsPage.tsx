import React, { useState } from 'react';
import { 
  Search, 
  FileText, 
  Phone
} from 'lucide-react';
import { PRODUCTS_CATALOG, COMPANY_INFO, type ProductItem } from '../data/ecocreteData';

interface ProductsPageProps {
  onOpenSpecSheet: (product: ProductItem) => void;
  onOpenQuote: (productId?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onOpenSpecSheet,
  onOpenQuote,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Precast Products' },
    { id: 'retaining', label: 'Retaining & Green Belts (Terraforce®)' },
    { id: 'structural', label: 'Structural Beams & Slabs' },
    { id: 'boundary', label: 'Boundary & Security Walls' },
    { id: 'drainage', label: 'Stormwater Box Culverts & Pipes' },
    { id: 'paving', label: 'Kerbs & Paving' },
  ];

  const filteredProducts = PRODUCTS_CATALOG.filter((prod) => {
    const matchesCategory = activeCategory === 'all' || prod.category === activeCategory;
    const matchesSearch =
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.application.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="products-page" style={{ backgroundColor: 'var(--bg-primary)' }}>
      
      {/* 1. Page Banner */}
      <section style={{
        padding: '5rem 0 3.5rem',
        backgroundColor: '#0F1010',
        borderBottom: '1px solid var(--border-dark)'
      }} className="bg-grid-dark">
        <div className="container">
          <div style={{ maxWidth: '820px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '0.8rem' }}>
              <span className="mono-tag green">SABS 1215 QUALITY ASSURED</span>
              <span className="mono-tag green">{COMPANY_INFO.licenseText}</span>
            </div>

            <h1 style={{ fontSize: '3.6rem', color: '#FFFFFF', marginBottom: '1.25rem', lineHeight: 1.1 }}>
              Precast Concrete <br />
              <span style={{ color: '#92D04F' }}>Products Showcase</span>
            </h1>

            <p style={{ color: 'rgba(255, 255, 255, 0.88)', fontSize: '1.12rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              Explore our SABS-tested precast catalog. From open-loop round face Terraforce® retaining blocks to heavy-duty 40 MPa structural T-beams and stormwater box culverts. Click any product to inspect or print technical spec sheets.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => onOpenQuote()}
                className="btn btn-primary"
                style={{ padding: '0.9rem 2rem' }}
              >
                <FileText size={17} />
                <span>Request Bulk Quotation</span>
              </button>
              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="btn btn-outline-dark"
                style={{ padding: '0.9rem 1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <Phone size={17} style={{ color: '#92D04F' }} />
                <span>Call Sales: {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Catalog Category Filters & Search */}
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
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  backgroundColor: activeCategory === cat.id ? 'var(--accent-terracotta)' : 'rgba(255, 255, 255, 0.05)',
                  color: activeCategory === cat.id ? '#FFFFFF' : 'var(--text-muted)',
                  border: activeCategory === cat.id ? '1px solid var(--accent-terracotta)' : '1px solid var(--border-dark)',
                  padding: '0.5rem 0.9rem',
                  borderRadius: '3px',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: '0.2s'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div style={{ position: 'relative', width: '280px', maxWidth: '100%' }}>
            <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder="Search product code / application..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.6rem 1rem 0.6rem 2.4rem',
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                border: '1px solid var(--border-dark)',
                borderRadius: '3px',
                color: '#FFF',
                fontSize: '0.88rem',
                fontFamily: 'var(--font-body)'
              }}
            />
          </div>

        </div>
      </section>

      {/* 3. Products Grid */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          
          {filteredProducts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '5rem 1rem', backgroundColor: 'var(--bg-surface)', borderRadius: '4px', border: '1px solid var(--border-dark)' }}>
              <div style={{ fontSize: '1.25rem', color: '#FFF', marginBottom: '0.5rem' }}>No products found</div>
              <p style={{ color: 'var(--text-muted)' }}>Try selecting "All Precast Products" or clearing your search term.</p>
              <button
                onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
                className="btn btn-outline-dark"
                style={{ marginTop: '1rem' }}
              >
                Reset Catalog Filter
              </button>
            </div>
          ) : (
            <div className="arch-grid">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="arch-card"
                  style={{
                    gridColumn: 'span 4',
                    padding: '2rem',
                    justifyContent: 'space-between',
                    minHeight: '520px'
                  }}
                >
                  <div>
                    {/* Top Row: Product Code & Licensed Badge */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                      <span className="mono-tag dark">{product.code}</span>
                      {product.licensed ? (
                        <span className="mono-tag green">TERRAFORCE® LICENSED</span>
                      ) : (
                        <span style={{ fontSize: '0.78rem', color: '#79D1A5', fontWeight: 700 }}>SABS TESTED</span>
                      )}
                    </div>

                    {/* Image Thumbnail */}
                    <div style={{
                      height: '210px',
                      borderRadius: '3px',
                      overflow: 'hidden',
                      marginBottom: '1.25rem',
                      border: '1px solid var(--border-dark)',
                      backgroundColor: '#101111'
                    }}>
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />
                    </div>

                    {/* Product Name & Short Desc */}
                    <h3 style={{ fontSize: '1.4rem', color: '#FFFFFF', marginBottom: '0.6rem', lineHeight: 1.2 }}>
                      {product.name}
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.25rem', lineHeight: 1.5 }}>
                      {product.shortDesc}
                    </p>

                    {/* Specification Badges Box */}
                    <div style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-dark)',
                      padding: '0.8rem 1rem',
                      borderRadius: '3px',
                      marginBottom: '1.5rem',
                      fontSize: '0.82rem',
                      fontFamily: 'var(--font-mono)'
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                        <span style={{ color: 'var(--text-muted)' }}>DIMENSIONS:</span>
                        <span style={{ color: '#FFF' }}>{product.dimensions}</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                        <span style={{ color: 'var(--text-muted)' }}>MASS:</span>
                        <span style={{ color: '#FFF' }}>{product.weight}</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: 'var(--text-muted)' }}>STRENGTH:</span>
                        <span style={{ color: '#6FA240' }}>{product.strengthMPa}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    paddingTop: '1.25rem'
                  }}>
                    <button
                      onClick={() => onOpenSpecSheet(product)}
                      className="btn btn-outline-dark"
                      style={{ flex: 1, padding: '0.75rem', fontSize: '0.85rem' }}
                    >
                      <FileText size={15} />
                      <span>Spec Sheet</span>
                    </button>
                    <button
                      onClick={() => onOpenQuote(product.id)}
                      className="btn btn-primary"
                      style={{ flex: 1, padding: '0.75rem', fontSize: '0.85rem' }}
                    >
                      <span>Quote</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* 4. SABS & Custom Engineering CTA */}
      <section style={{
        padding: '5rem 0',
        backgroundColor: '#F2F5EF',
        borderTop: '1px solid #BEC6B9'
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
          <div style={{ maxWidth: '640px' }}>
            <div className="mono-tag terracotta" style={{ marginBottom: '0.6rem' }}>
              <span>CUSTOM STRUCTURAL REINFORCEMENT AVAILABLE</span>
            </div>
            <h2 style={{ fontSize: '2.3rem', color: '#232623', marginBottom: '0.8rem' }}>
              Need custom precast beam lengths or portal culvert specifications?
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6 }}>
              Send your civil engineer's bending schedules and CAD layout plans directly to <strong style={{ color: '#232623' }}>{COMPANY_INFO.emailPrimary}</strong>. We manufacture in our Free State yard with prompt site delivery.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => onOpenQuote()}
              className="btn btn-primary"
              style={{ padding: '1rem 2rem', fontSize: '1rem' }}
            >
              <span>Submit Engineering Drawings</span>
            </button>
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="btn btn-outline-dark"
              style={{ padding: '1rem 1.75rem', fontSize: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <Phone size={18} style={{ color: '#92D04F' }} />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .arch-card {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </div>
  );
};
