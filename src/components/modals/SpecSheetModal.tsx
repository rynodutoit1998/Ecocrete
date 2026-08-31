import React, { useState } from 'react';
import { X, Printer, Check, Award, FileText, Layers, Ruler } from 'lucide-react';
import { COMPANY_INFO, type ProductItem } from '../../data/ecocreteData';

interface SpecSheetModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onOpenQuote: () => void;
}

export const SpecSheetModal: React.FC<SpecSheetModalProps> = ({
  product,
  onClose,
  onOpenQuote
}) => {
  const [copied, setCopied] = useState(false);

  if (!product) return null;

  const handleCopySpec = () => {
    navigator.clipboard.writeText(
      `ECOCRETE TECHNICAL SPECIFICATION\n` +
      `Product: ${product.name} (${product.code})\n` +
      `Dimensions: ${product.dimensions}\n` +
      `Mass: ${product.weight}\n` +
      `Compressive Strength: ${product.strengthMPa}\n` +
      `Licensed by: ${COMPANY_INFO.licenseText}\n` +
      `Contact: ${COMPANY_INFO.phone} | ${COMPANY_INFO.emailPrimary}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ position: 'relative', padding: '2.5rem 2.5rem', maxWidth: '780px' }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'none',
            border: 'none',
            color: 'var(--text-muted)',
            cursor: 'pointer',
            padding: '0.4rem'
          }}
          aria-label="Close Modal"
        >
          <X size={22} />
        </button>

        {/* Spec Sheet Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', borderBottom: '1px solid var(--border-dark)', paddingBottom: '1.5rem', marginBottom: '1.5rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <span className="mono-tag terracotta">SPEC SHEET: {product.code}</span>
              {product.licensed && (
                <span className="mono-tag green">TERRAFORCE® LICENSED</span>
              )}
            </div>
            <h3 style={{ fontSize: '1.85rem', color: '#FFFFFF', marginBottom: '0.4rem' }}>
              {product.name}
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              {product.shortDesc}
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <button
              onClick={handlePrint}
              className="btn btn-outline-dark"
              style={{ padding: '0.6rem 1rem', fontSize: '0.85rem' }}
              title="Print Specification"
            >
              <Printer size={15} />
              <span>Print Spec</span>
            </button>
            <button
              onClick={handleCopySpec}
              className="btn btn-outline-dark"
              style={{ padding: '0.6rem 1rem', fontSize: '0.85rem' }}
            >
              {copied ? <Check size={15} style={{ color: '#79D1A5' }} /> : <FileText size={15} />}
              <span>{copied ? 'Copied Data!' : 'Copy Spec Text'}</span>
            </button>
          </div>
        </div>

        {/* Technical Specification Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{
            backgroundColor: '#F2F5EF',
            border: '1px solid #BEC6B9',
            padding: '1.2rem 1.4rem',
            borderRadius: '6px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.78rem', fontFamily: 'var(--font-mono)', marginBottom: '0.4rem' }}>
              <Ruler size={14} style={{ color: '#92D04F' }} />
              <span>DIMENSIONS</span>
            </div>
            <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#232623' }}>
              {product.dimensions}
            </div>
          </div>

          <div style={{
            backgroundColor: '#F2F5EF',
            border: '1px solid #BEC6B9',
            padding: '1.2rem 1.4rem',
            borderRadius: '6px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.78rem', fontFamily: 'var(--font-mono)', marginBottom: '0.4rem' }}>
              <Layers size={14} style={{ color: '#6FA240' }} />
              <span>UNIT MASS</span>
            </div>
            <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#232623' }}>
              {product.weight}
            </div>
          </div>

          <div style={{
            backgroundColor: '#F2F5EF',
            border: '1px solid #BEC6B9',
            padding: '1.2rem 1.4rem',
            borderRadius: '6px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.78rem', fontFamily: 'var(--font-mono)', marginBottom: '0.4rem' }}>
              <Award size={14} style={{ color: '#92D04F' }} />
              <span>COMPRESSIVE STRENGTH</span>
            </div>
            <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#232623' }}>
              {product.strengthMPa}
            </div>
          </div>
        </div>

        {/* Detailed Application & Features Table */}
        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ fontSize: '1rem', color: '#232623', marginBottom: '0.8rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>
            Engineering Application & Compliance
          </h4>
          <table className="spec-table">
            <tbody>
              <tr>
                <th>Primary Application</th>
                <td style={{ color: '#232623', fontWeight: 600 }}>{product.application}</td>
              </tr>
              <tr>
                <th>Standard & Compliance</th>
                <td>SABS 1215 / SANS 10100 (High Grade Structural Concrete)</td>
              </tr>
              <tr>
                <th>Manufacturing License</th>
                <td>{product.licensed ? COMPANY_INFO.licenseText : 'Manufactured by Ecocrete Free State'}</td>
              </tr>
              <tr>
                <th>Installation Service</th>
                <td>Turnkey engineering installation available across Free State & border regions</td>
              </tr>
              <tr>
                <th>Engineering Features</th>
                <td>
                  <ul style={{ paddingLeft: '1.2rem', color: '#232623', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                    {product.features.map((feat, idx) => (
                      <li key={idx}>{feat}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer Actions */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#F2F5EF',
          padding: '1rem 1.25rem',
          border: '1px solid #BEC6B9',
          borderRadius: '6px'
        }}>
          <div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              Need an engineer's site assessment or bulk supply quotation?
            </div>
            <div style={{ fontWeight: 700, color: '#232623', fontSize: '0.92rem' }}>
              Contact Ecocrete Sales: {COMPANY_INFO.phone} | {COMPANY_INFO.emailPrimary}
            </div>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenQuote();
            }}
            className="btn btn-primary"
            style={{ padding: '0.8rem 1.75rem' }}
          >
            <span>Request Quote for {product.code}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
