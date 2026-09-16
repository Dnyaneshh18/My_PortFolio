import { useEffect } from 'react';
import { X, ExternalLink, Sparkles, CheckCircle2, ShieldCheck, Star } from 'lucide-react';
import { GithubIcon } from './Icons';
import { soundFx } from '../utils/soundEffects';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    // Prevent background scrolling when modal is open
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        soundFx.playClose();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      // Restore background scrolling
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div 
      className="modal-backdrop" 
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          soundFx.playClose();
          onClose();
        }
      }}
    >
      <div className="modal-content" style={{ padding: '0', overflowY: 'auto', overflowX: 'hidden' }}>
        {/* Modal Banner Image */}
        <div style={{ position: 'relative', width: '100%', maxHeight: '340px', overflow: 'hidden' }}>
          <img 
            src={project.image} 
            alt={project.title} 
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, #0c1222 0%, rgba(12, 18, 34, 0.4) 60%, transparent 100%)'
          }} />

          {/* Close Button */}
          <button
            onClick={() => {
              soundFx.playClose();
              onClose();
            }}
            className="glass-pill"
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              cursor: 'pointer',
              padding: '8px',
              borderRadius: '50%',
              width: '38px',
              height: '38px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(0, 0, 0, 0.65)'
            }}
            title="Close (Esc)"
          >
            <X size={18} />
          </button>

          {/* Category & Year Badges */}
          <div style={{ position: 'absolute', bottom: '20px', left: '24px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <span className="glass-pill" style={{ background: 'rgba(99, 102, 241, 0.25)', borderColor: 'var(--accent-primary)', color: '#fff' }}>
              {project.category}
            </span>
            <span className="glass-pill">
              {project.year}
            </span>
            {project.featured && (
              <span className="glass-pill" style={{ borderColor: '#f59e0b', color: '#f59e0b' }}>
                <Star size={12} fill="#f59e0b" />
                <span>Flagship Project</span>
              </span>
            )}
          </div>
        </div>

        {/* Modal Inner Body */}
        <div style={{ padding: '28px 32px 36px' }}>
          {/* Title & Subtitle */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
            <div>
              <h3 style={{ fontSize: '1.85rem', fontWeight: 800, marginBottom: '6px' }}>
                {project.title}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', fontWeight: 500 }}>
                {project.subtitle}
              </p>
            </div>

            {/* Links */}
            <div style={{ display: 'flex', gap: '10px' }}>
              {project.liveDemo && (
                <a 
                  href={project.liveDemo} 
                  target="_blank" 
                  rel="noreferrer"
                  onClick={() => soundFx.playSuccess()}
                  className="btn-primary"
                  style={{ padding: '9px 18px', fontSize: '0.86rem' }}
                >
                  <span>Live App</span>
                  <ExternalLink size={14} />
                  <div className="shimmer-sweep" />
                </a>
              )}

              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noreferrer"
                  onClick={() => soundFx.playHover()}
                  className="btn-secondary"
                  style={{ padding: '9px 18px', fontSize: '0.86rem' }}
                >
                  <GithubIcon size={14} />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </div>

          {/* Description */}
          <div style={{ color: 'var(--text-main)', fontSize: '0.96rem', lineHeight: 1.7, marginBottom: '28px' }}>
            {project.description}
          </div>

          {/* Key Architectural Points */}
          <div style={{ marginBottom: '28px' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ShieldCheck size={18} style={{ color: 'var(--accent-primary)' }} />
              <span>Core Architecture &amp; Capabilities</span>
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {project.points.map((pt, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  <CheckCircle2 size={16} style={{ color: '#10b981', marginTop: '3px', flexShrink: 0 }} />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Engineering Challenges Solved */}
          {project.engineeringHighlights && (
            <div style={{ marginBottom: '28px' }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Sparkles size={18} style={{ color: 'var(--accent-secondary)' }} />
                <span>Engineering Highlights</span>
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
                {project.engineeringHighlights.map((hl, idx) => (
                  <div 
                    key={idx}
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '12px',
                      padding: '14px'
                    }}
                  >
                    <div style={{ fontWeight: 600, fontSize: '0.88rem', color: 'var(--text-main)', marginBottom: '4px' }}>
                      {hl.title}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', lineHeight: 1.5 }}>
                      {hl.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div>
            <h4 style={{ fontSize: '0.84rem', textTransform: 'uppercase', color: 'var(--text-dim)', letterSpacing: '0.05em', marginBottom: '12px' }}>
              Technologies Utilized
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.tech.map((t, idx) => (
                <span key={idx} className="glass-pill" style={{ background: 'rgba(255, 255, 255, 0.04)', fontSize: '0.8rem' }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
