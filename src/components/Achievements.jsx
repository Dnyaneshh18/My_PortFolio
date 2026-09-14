import { Trophy, Sparkles, Code2, Terminal, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { soundFx } from '../utils/soundEffects';

export default function Achievements() {
  const { achievements } = portfolioData;

  const iconMap = {
    Trophy,
    Sparkles,
    Code2,
    Terminal
  };

  return (
    <section id="achievements" className="section-spacing">
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 48px' }}>
          <span className="glass-pill" style={{ marginBottom: '14px' }}>
            <Award size={14} style={{ color: '#f59e0b' }} />
            <span>Honors &amp; Milestones</span>
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', marginBottom: '16px' }}>
            Hackathon Wins &amp; <span className="text-gradient">Recognition</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
            Proven competitive track record across national hackathons and algorithmic platforms.
          </p>
        </div>

        {/* Achievements Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          {achievements.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Trophy;

            return (
              <div 
                key={idx}
                className="glass"
                style={{
                  padding: '28px 24px',
                  borderRadius: 'var(--radius-lg)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative'
                }}
                onMouseEnter={() => soundFx.playHover()}
              >
                <div className="shimmer-sweep" />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: `${item.accent}15`,
                    border: `1px solid ${item.accent}35`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: item.accent
                  }}>
                    <IconComponent size={22} />
                  </div>

                  <span className="glass-pill" style={{ fontSize: '0.74rem' }}>
                    {item.year}
                  </span>
                </div>

                <div style={{ fontSize: '0.75rem', color: item.accent, textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 600, marginBottom: '6px' }}>
                  {item.category}
                </div>

                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px', lineHeight: 1.35 }}>
                  {item.title}
                </h3>

                <div style={{ fontSize: '0.84rem', color: 'var(--text-dim)', marginBottom: '12px', fontWeight: 500 }}>
                  {item.organization}
                </div>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6, marginTop: 'auto' }}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
