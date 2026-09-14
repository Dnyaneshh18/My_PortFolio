import { useState } from 'react';
import { Cpu, Code, Layout, Server, Database, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { soundFx } from '../utils/soundEffects';

export default function Skills() {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('All');

  const iconMap = {
    Code,
    Layout,
    Server,
    Database,
    Cpu
  };

  const categories = ['All', ...skills.map(s => s.category)];

  const displayedSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="section-spacing">
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 48px' }}>
          <span className="glass-pill" style={{ marginBottom: '14px' }}>
            <Cpu size={14} style={{ color: 'var(--accent-primary)' }} />
            <span>Technical Capabilities</span>
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', marginBottom: '16px' }}>
            Skills &amp; <span className="text-gradient">Tech Stack</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
            A battle-tested set of languages, frameworks, AI architectures, and developer tools.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '10px',
          marginBottom: '42px'
        }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                soundFx.playHover();
                setActiveCategory(cat);
              }}
              className="glass-pill"
              style={{
                cursor: 'pointer',
                background: activeCategory === cat ? 'var(--accent-primary)' : 'rgba(255, 255, 255, 0.04)',
                color: activeCategory === cat ? '#ffffff' : 'var(--text-muted)',
                borderColor: activeCategory === cat ? 'var(--accent-primary)' : 'rgba(255, 255, 255, 0.08)',
                boxShadow: activeCategory === cat ? '0 0 16px var(--accent-glow)' : 'none',
                padding: '8px 18px',
                fontSize: '0.84rem'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {displayedSkills.map((categoryGroup, idx) => {
            const IconComponent = iconMap[categoryGroup.icon] || Code;
            return (
              <div 
                key={idx}
                className="glass"
                style={{
                  padding: '28px 24px',
                  borderRadius: 'var(--radius-lg)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                onMouseEnter={() => soundFx.playHover()}
              >
                <div className="shimmer-sweep" />
                
                {/* Category Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '22px' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: `${categoryGroup.accent}15`,
                    border: `1px solid ${categoryGroup.accent}35`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: categoryGroup.accent
                  }}>
                    <IconComponent size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>
                      {categoryGroup.category}
                    </h3>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                      {categoryGroup.items.length} Technologies
                    </span>
                  </div>
                </div>

                {/* Skill Items List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: 'auto' }}>
                  {categoryGroup.items.map((skill, sIdx) => (
                    <div key={sIdx}>
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center', 
                        marginBottom: '6px',
                        fontSize: '0.88rem' 
                      }}>
                        <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>
                          {skill.name}
                        </span>
                        <span style={{ 
                          fontSize: '0.72rem', 
                          color: 'var(--text-dim)',
                          background: 'rgba(255, 255, 255, 0.05)',
                          padding: '2px 8px',
                          borderRadius: '10px'
                        }}>
                          {skill.tag}
                        </span>
                      </div>

                      {/* Animated Progress Bar */}
                      <div style={{
                        height: '6px',
                        background: 'rgba(255, 255, 255, 0.06)',
                        borderRadius: '3px',
                        overflow: 'hidden',
                        position: 'relative'
                      }}>
                        <div style={{
                          width: `${skill.level}%`,
                          height: '100%',
                          background: `linear-gradient(90deg, ${categoryGroup.accent}, #a855f7)`,
                          borderRadius: '3px',
                          boxShadow: `0 0 10px ${categoryGroup.accent}66`
                        }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
