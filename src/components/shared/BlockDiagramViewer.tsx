import React, { useState } from 'react';
import { ArrowRight, Shield } from 'lucide-react';

interface DiagramPoint {
  id: string;
  x: number; // percentage
  y: number; // percentage
  title: string;
  description: string;
}

interface BlockDiagramViewerProps {
  title: string;
  subtitle: string;
  points: DiagramPoint[];
  imageSrc: string;
}

export const BlockDiagramViewer: React.FC<BlockDiagramViewerProps> = ({
  title,
  subtitle,
  points,
  imageSrc
}) => {
  const [activePointId, setActivePointId] = useState<string>(points[0]?.id || '');

  const activePoint = points.find((p) => p.id === activePointId) || points[0];

  return (
    <div style={{
      backgroundColor: 'var(--bg-surface)',
      border: '1px solid var(--border-dark)',
      borderRadius: '4px',
      overflow: 'hidden',
      marginBottom: '3.5rem'
    }}>
      {/* Diagram Header */}
      <div style={{
        padding: '1.25rem 1.75rem',
        borderBottom: '1px solid var(--border-dark)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
        backgroundColor: '#161817'
      }}>
        <div>
          <div className="mono-tag terracotta" style={{ marginBottom: '0.4rem' }}>
            <span>INTERACTIVE ENGINEERING VISUALIZER</span>
          </div>
          <h4 style={{ fontSize: '1.35rem', color: '#FFFFFF', margin: 0 }}>
            {title}
          </h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0 }}>
            {subtitle} • Click inspection markers on diagram to view structural specifications
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#79D1A5', fontSize: '0.8rem', fontWeight: 600 }}>
          <Shield size={16} />
          <span>SABS 1215 ENGINEERING COMPLIANT</span>
        </div>
      </div>

      <div className="arch-grid" style={{ padding: 0 }}>
        {/* Interactive Diagram Canvas */}
        <div style={{
          gridColumn: 'span 7',
          position: 'relative',
          minHeight: '400px',
          backgroundColor: '#0F1010',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <img
            src={imageSrc}
            alt="Engineering cross-section diagram"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.85
            }}
          />

          {/* Architectural Technical Overlay Grid Lines */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '32px 32px',
            pointerEvents: 'none'
          }} />

          {/* Interactive Inspection Markers */}
          {points.map((point, idx) => {
            const isActive = point.id === activePointId;
            return (
              <button
                key={point.id}
                onClick={() => setActivePointId(point.id)}
                style={{
                  position: 'absolute',
                  left: `${point.x}%`,
                  top: `${point.y}%`,
                  transform: 'translate(-50%, -50%)',
                  width: isActive ? '36px' : '28px',
                  height: isActive ? '36px' : '28px',
                  borderRadius: '50%',
                  backgroundColor: isActive ? '#92D04F' : '#232623',
                  border: isActive ? '2px solid #FFFFFF' : '2px solid #BEC6B9',
                  color: isActive ? '#232623' : '#FFFFFF',
                  fontWeight: 800,
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: isActive ? '0 0 20px rgba(146, 208, 79, 0.6)' : '0 4px 10px rgba(0,0,0,0.15)',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  zIndex: isActive ? 20 : 10
                }}
                aria-label={`Inspect ${point.title}`}
              >
                <span>{idx + 1}</span>
              </button>
            );
          })}
        </div>

        {/* Specification Detail Inspector Panel */}
        <div style={{
          gridColumn: 'span 5',
          padding: '2.25rem 2rem',
          backgroundColor: 'var(--bg-surface)',
          borderLeft: '1px solid var(--border-dark)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <span className="mono-tag terracotta">MARKER [{points.findIndex(p => p.id === activePoint?.id) + 1} OF {points.length}]</span>
              <span className="mono-tag dark">STRUCTURAL NODE</span>
            </div>

            <h4 style={{ fontSize: '1.65rem', color: '#FFFFFF', marginBottom: '0.8rem' }}>
              {activePoint?.title}
            </h4>

            <p style={{ color: 'var(--text-main)', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              {activePoint?.description}
            </p>

            {/* List of all selectable nodes */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              paddingTop: '1.25rem'
            }}>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '0.3rem' }}>
                INSPECT ALL STRUCTURAL POINTS:
              </div>
              {points.map((pt, index) => {
                const isSelected = pt.id === activePointId;
                return (
                  <div
                    key={pt.id}
                    onClick={() => setActivePointId(pt.id)}
                    style={{
                      padding: '0.65rem 0.9rem',
                      borderRadius: '3px',
                      backgroundColor: isSelected ? 'rgba(184, 93, 59, 0.2)' : 'transparent',
                      border: isSelected ? '1px solid rgba(184, 93, 59, 0.5)' : '1px solid rgba(255, 255, 255, 0.06)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'all 0.15s'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                      <span style={{ 
                        width: '20px', 
                        height: '20px', 
                        borderRadius: '50%', 
                        backgroundColor: isSelected ? '#92D04F' : '#BEC6B9', 
                        color: isSelected ? '#232623' : '#232623', 
                        fontSize: '0.75rem', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        fontWeight: 700 
                      }}>
                        {index + 1}
                      </span>
                      <span style={{ fontWeight: isSelected ? 700 : 500, color: isSelected ? '#232623' : 'var(--text-muted)', fontSize: '0.9rem' }}>
                        {pt.title}
                      </span>
                    </div>
                    {isSelected && <ArrowRight size={14} style={{ color: '#92D04F' }} />}
                  </div>
                );
              })}
            </div>
          </div>

          <div style={{
            marginTop: '1.5rem',
            padding: '0.9rem 1rem',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid var(--border-dark)',
            borderRadius: '3px',
            fontSize: '0.82rem',
            color: 'var(--text-muted)'
          }}>
            Need specific CAD details or geotechnical design charts? Contact Ecocrete engineering sales at <strong style={{ color: '#FFF' }}>sales@ecocrete.co.za</strong>.
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
