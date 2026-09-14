import { CheckCircle2, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { soundFx } from '../utils/soundEffects';

export default function About() {
  const { personal } = portfolioData;



  return (
    <section id="about" className="section-spacing">
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 56px' }}>
          <span className="glass-pill" style={{ marginBottom: '14px' }}>
            <Award size={14} style={{ color: 'var(--accent-primary)' }} />
            <span>Behind The Code</span>
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', marginBottom: '16px' }}>
            Transforming Complex Logic into <span className="text-gradient">Real-World Software</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
            A fusion of academic excellence at VIT Pune and hands-on software engineering.
          </p>
        </div>

        {/* Narrative */}
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          {/* Bio Narrative */}
          <div className="glass" style={{ padding: '36px 32px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
              <span>Hi, I'm {personal.name}</span>
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.75 }}>
              {personal.bioParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Key highlights checklist */}
            <div style={{ 
              marginTop: '28px', 
              paddingTop: '24px', 
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '0.95rem', color: 'var(--text-main)' }}>
                <CheckCircle2 size={18} style={{ color: '#10b981', flexShrink: 0 }} />
                <span>Full-Stack Web Architecture</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '0.95rem', color: 'var(--text-main)' }}>
                <CheckCircle2 size={18} style={{ color: '#10b981', flexShrink: 0 }} />
                <span>AI &amp; Data Science Solutions</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '0.95rem', color: 'var(--text-main)' }}>
                <CheckCircle2 size={18} style={{ color: '#10b981', flexShrink: 0 }} />
                <span>Data-Driven Problem Solving</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '0.95rem', color: 'var(--text-main)' }}>
                <CheckCircle2 size={18} style={{ color: '#10b981', flexShrink: 0 }} />
                <span>Pune, India • Open to Roles</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
