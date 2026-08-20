import React, { useState } from 'react';
import { Search, FileText, Phone, ArrowRight } from 'lucide-react';
import { PRODUCTS_CATALOG, COMPANY_INFO, type ProductItem } from '../data/ecocreteData';

interface ProductsPageProps {
  onOpenSpecSheet: (product: ProductItem) => void;
  onOpenQuote: (productId?: string) => void;
}

const CATEGORIES: { id: 'all' | 'walling' | 'terraforce' | 'precast'; label: string; sub?: string }[] = [
  { id: 'all', label: 'All Products' },
  { id: 'walling', label: 'Walling', sub: 'Uniquall · Precon' },
  { id: 'terraforce', label: 'Terraforce®', sub: 'L15 · 4x4 · Step · Bat · Terrafix · Terrapac' },
  { id: 'precast', label: 'Precast', sub: 'Stepping stones · Pillars · Caps · Copings · Sills · Balls · Waskattie · Kerbs' }
];

export const ProductsPage: React.FC<ProductsPageProps> = ({ onOpenSpecSheet, onOpenQuote }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = PRODUCTS_CATALOG.filter((prod) => {
    const matchesCategory = activeCategory === 'all' || prod.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      prod.name.toLowerCase().includes(q) ||
      prod.code.toLowerCase().includes(q) ||
      prod.shortDesc.toLowerCase().includes(q) ||
      prod.application.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  const activeMeta = CATEGORIES.find((c) => c.id === activeCategory);

  return (
    <div className="products-page">

      {/* ============================================================
          HERO — dark banner
          ============================================================ */}
      <section
        style={{
          position: 'relative',
          padding: '4.5rem 0 4rem',
          backgroundImage: `linear-gradient(rgba(20, 24, 22, 0.78), rgba(20, 24, 22, 0.72)), url('/images/stepping-stones-display.jpg')`,
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
            Our full range
          </div>
          <h1 style={{
            fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', lineHeight: 1.1, fontWeight: 700,
            margin: '0 auto 1rem', maxWidth: '860px', letterSpacing: '-0.015em', color: '#FFFFFF'
          }}>
            Everything we cast, on one page.
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', maxWidth: '640px', margin: '0 auto', lineHeight: 1.55 }}>
            Walling, Terraforce® and the full Precast range — filter by family and search by name or code.
          </p>
        </div>
      </section>

      {/* ============================================================
          FILTER BAR — categories + search
          ============================================================ */}
      <section style={{ backgroundColor: '#FCFDFA', borderBottom: '1px solid #E6E9E2', padding: '1.6rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {CATEGORIES.map((cat) => {
                const active = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    style={{
                      padding: '0.6rem 1.1rem',
                      borderRadius: '4px',
                      border: '1px solid',
                      borderColor: active ? '#92D04F' : '#E6E9E2',
                      backgroundColor: active ? '#92D04F' : '#FFFFFF',
                      color: active ? '#141816' : '#4A4E4A',
                      fontSize: '0.88rem', fontWeight: 700,
                      cursor: 'pointer', fontFamily: 'inherit',
                      letterSpacing: '0.02em', transition: 'all 0.15s'
                    }}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              backgroundColor: '#FFFFFF', border: '1px solid #E6E9E2',
              borderRadius: '4px', padding: '0.5rem 0.85rem',
              minWidth: '260px'
            }}>
              <Search size={16} style={{ color: '#7C7C7D' }} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                style={{
                  border: 'none', outline: 'none', flex: 1,
                  fontSize: '0.9rem', color: '#232623', backgroundColor: 'transparent',
                  fontFamily: 'inherit'
                }}
              />
            </div>
          </div>

          {activeMeta && activeMeta.sub && (
            <div style={{
              marginTop: '0.9rem', fontSize: '0.82rem', color: '#7C7C7D',
              display: 'flex', gap: '0.5rem', alignItems: 'center'
            }}>
              <span style={{ fontWeight: 700, color: '#6FA240' }}>{activeMeta.label}</span>
              <span>·</span>
              <span>{activeMeta.sub}</span>
            </div>
          )}
        </div>
      </section>

      {/* ============================================================
          PRODUCT GRID
          ============================================================ */}
      <section style={{ padding: '3.5rem 0 5rem', backgroundColor: '#F5F7F3' }}>
        <div className="container">
          <div style={{ marginBottom: '1.5rem', color: '#7C7C7D', fontSize: '0.9rem' }}>
            Showing <strong style={{ color: '#232623' }}>{filteredProducts.length}</strong>{' '}
            {filteredProducts.length === 1 ? 'product' : 'products'}
            {activeCategory !== 'all' && (
              <> in <strong style={{ color: '#232623' }}>{activeMeta?.label}</strong></>
            )}
          </div>

          {filteredProducts.length === 0 ? (
            <div style={{
              padding: '3rem', backgroundColor: '#FFFFFF',
              border: '1px dashed #E6E9E2', borderRadius: '6px',
              textAlign: 'center', color: '#7C7C7D'
            }}>
              No products match this search. Try a different keyword or category.
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
              {filteredProducts.map((product) => (
                <article
                  key={product.id}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E6E9E2',
                    borderRadius: '6px',
                    overflow: 'hidden',
                    display: 'flex', flexDirection: 'column',
                    transition: 'transform 0.2s, box-shadow 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden', backgroundColor: '#F5F7F3' }}>
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                    {product.licensed && (
                      <span style={{
                        position: 'absolute', top: '0.65rem', left: '0.65rem',
                        padding: '0.25rem 0.6rem', fontSize: '0.68rem', fontWeight: 700,
                        letterSpacing: '0.06em', textTransform: 'uppercase',
                        color: '#141816', backgroundColor: '#92D04F', borderRadius: '3px'
                      }}>
                        Licensed
                      </span>
                    )}
                    <span style={{
                      position: 'absolute', top: '0.65rem', right: '0.65rem',
                      padding: '0.25rem 0.6rem', fontSize: '0.68rem', fontWeight: 700,
                      letterSpacing: '0.06em', textTransform: 'uppercase',
                      color: '#FFFFFF', backgroundColor: 'rgba(20, 24, 22, 0.85)', borderRadius: '3px'
                    }}>
                      {product.categoryLabel}
                    </span>
                  </div>

                  <div style={{ padding: '1.25rem 1.25rem 1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{ fontSize: '0.72rem', color: '#7C7C7D', letterSpacing: '0.06em', marginBottom: '0.3rem', fontFamily: 'var(--font-mono)' }}>
                      {product.code}
                    </div>
                    <h3 style={{ fontSize: '1.05rem', color: '#232623', margin: '0 0 0.5rem', lineHeight: 1.3 }}>
                      {product.name}
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: '#555', lineHeight: 1.5, margin: '0 0 1rem', flex: 1 }}>
                      {product.shortDesc}
                    </p>

                    <div style={{
                      display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem',
                      padding: '0.7rem', backgroundColor: '#F5F7F3', borderRadius: '4px', marginBottom: '1rem'
                    }}>
                      <div>
                        <div style={{ fontSize: '0.65rem', color: '#7C7C7D', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Size</div>
                        <div style={{ fontSize: '0.82rem', color: '#232623', fontWeight: 600 }}>{product.dimensions}</div>
                      </div>
                      <div>
                        <div style={{ fontSize: '0.65rem', color: '#7C7C7D', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Strength</div>
                        <div style={{ fontSize: '0.82rem', color: '#232623', fontWeight: 600 }}>{product.strengthMPa}</div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button
                        onClick={() => onOpenSpecSheet(product)}
                        style={{
                          flex: 1,
                          backgroundColor: '#141816', color: '#FFFFFF', border: 'none',
                          padding: '0.65rem 0.85rem', borderRadius: '4px',
                          fontSize: '0.82rem', fontWeight: 700,
                          cursor: 'pointer', fontFamily: 'inherit',
                          display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem'
                        }}
                      >
                        <FileText size={14} /> Spec
                      </button>
                      <button
                        onClick={() => onOpenQuote(product.id)}
                        style={{
                          flex: 1,
                          backgroundColor: '#92D04F', color: '#141816', border: 'none',
                          padding: '0.65rem 0.85rem', borderRadius: '4px',
                          fontSize: '0.82rem', fontWeight: 700,
                          cursor: 'pointer', fontFamily: 'inherit',
                          display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem'
                        }}
                      >
                        Quote <ArrowRight size={13} />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ============================================================
          BOTTOM CTA — dark
          ============================================================ */}
      <section style={{ padding: '3.5rem 0', backgroundColor: '#141816', color: '#FFFFFF' }}>
        <div className="container" style={{ display: 'flex', gap: '2rem', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <div style={{ maxWidth: '620px' }}>
            <h2 style={{ fontSize: '1.75rem', margin: '0 0 0.5rem', color: '#FFFFFF' }}>Can&apos;t find what you need?</h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1rem', margin: 0, lineHeight: 1.55 }}>
              Custom sizes and non-standard profiles are cast to order on a short lead time. Send us the dimension and quantity.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => onOpenQuote()}
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
