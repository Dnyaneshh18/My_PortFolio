import { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  Star, 
  ArrowUpRight,
  Maximize2
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import { soundFx } from '../utils/soundEffects';

export default function Projects({ onSelectProject }) {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI & Machine Learning' },
    { id: 'systems', label: 'Systems & Security' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.categoryKey === activeFilter);

  // Tilt card hover handler
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = -((y - centerY) / centerY) * 7;
    const tiltY = ((x - centerX) / centerX) * 7;

    const inner = card.querySelector('.tilt-card-inner');
    if (inner) {
      inner.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-4px)`;
    }
  };

  const handleMouseLeave = (e) => {
    const inner = e.currentTarget.querySelector('.tilt-card-inner');
    if (inner) {
      inner.style.transform = 'rotateX(0deg) rotateY(0deg) translateY(0px)';
    }
  };

  return (
    <section id="projects" className="section-spacing">
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 48px' }}>
          <span className="glass-pill" style={{ marginBottom: '14px' }}>
            <FolderGit2 size={14} style={{ color: 'var(--accent-primary)' }} />
            <span>Featured Portfolio</span>
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', marginBottom: '16px' }}>
            Crafted with <span className="text-gradient">Precision &amp; Scale</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
            Production-grade systems ranging from autonomous AI digital twins to cross-platform mobile engines.
          </p>
        </div>

        {/* Filter Navigation */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '10px',
          marginBottom: '48px'
        }}>
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                soundFx.playHover();
                setActiveFilter(tab.id);
              }}
              className="glass-pill"
              style={{
                cursor: 'pointer',
                background: activeFilter === tab.id ? 'var(--accent-primary)' : 'rgba(255, 255, 255, 0.04)',
                color: activeFilter === tab.id ? '#ffffff' : 'var(--text-muted)',
                borderColor: activeFilter === tab.id ? 'var(--accent-primary)' : 'rgba(255, 255, 255, 0.08)',
                boxShadow: activeFilter === tab.id ? '0 0 16px var(--accent-glow)' : 'none',
                padding: '8px 18px',
                fontSize: '0.84rem'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '32px'
        }}>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="tilt-card-wrapper"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div 
                className="glass tilt-card-inner"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  border: project.featured ? '1px solid rgba(99, 102, 241, 0.35)' : '1px solid var(--border-subtle)'
                }}
              >
                <div className="spotlight-overlay" />
                <div className="shimmer-sweep" />

                {/* Main Clickable Area (Opens Modal) */}
                <div 
                  onClick={() => {
                    soundFx.playOpen();
                    onSelectProject(project);
                  }}
                  style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', flexGrow: 1 }}
                >
                  {/* Project Image Thumbnail */}
                  <div style={{ position: 'relative', height: '210px', overflow: 'hidden', background: '#0a0f1e' }}>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease'
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(14, 21, 38, 0.95) 0%, rgba(14, 21, 38, 0.3) 60%, transparent 100%)'
                    }} />

                    {/* Top Badges */}
                    <div style={{ position: 'absolute', top: '14px', left: '16px', right: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span className="glass-pill" style={{ fontSize: '0.72rem', padding: '4px 10px', background: 'rgba(0, 0, 0, 0.65)' }}>
                        {project.category}
                      </span>

                      {project.featured && (
                        <span className="glass-pill" style={{ 
                          fontSize: '0.72rem', 
                          padding: '4px 10px', 
                          borderColor: '#f59e0b', 
                          color: '#f59e0b',
                          background: 'rgba(0,0,0,0.65)' 
                        }}>
                          <Star size={11} fill="#f59e0b" />
                          <span>Featured</span>
                        </span>
                      )}
                    </div>

                    {/* Year & Metrics Pill at bottom of image */}
                    <div style={{ position: 'absolute', bottom: '12px', left: '16px', right: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                        {project.year}
                      </span>
                      {project.metrics && (
                        <span className="badge-tag" style={{ color: 'var(--accent-primary)', borderColor: 'var(--border-glow)' }}>
                          {project.metrics}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Project Card Content */}
                  <div style={{ padding: '24px 22px 0', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px', marginBottom: '8px' }}>
                      <h3 style={{ fontSize: '1.3rem', fontWeight: 700 }}>
                        {project.title}
                      </h3>
                      <div style={{ 
                        width: '32px', 
                        height: '32px', 
                        borderRadius: '8px', 
                        background: 'rgba(255, 255, 255, 0.05)', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        color: 'var(--text-muted)',
                        flexShrink: 0
                      }}>
                        <Maximize2 size={14} />
                      </div>
                    </div>

                    <p style={{ fontSize: '0.86rem', color: 'var(--text-dim)', marginBottom: '14px', fontWeight: 500 }}>
                      {project.subtitle}
                    </p>

                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '20px', flexGrow: 1 }}>
                      {project.summary}
                    </p>

                    {/* Tech stack badges */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                      {project.tech.slice(0, 4).map((t, idx) => (
                        <span key={idx} className="badge-tag">
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="badge-tag" style={{ color: 'var(--text-dim)' }}>
                          +{project.tech.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Quick Card Footer Actions (Outside Clickable Area) */}
                <div style={{ padding: '0 22px 20px' }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    paddingTop: '16px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)'
                  }}>
                    <span 
                      style={{ 
                        fontSize: '0.82rem', 
                        fontWeight: 600, 
                        color: 'var(--accent-primary)', 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '4px',
                        cursor: 'pointer'
                      }}
                      onClick={() => {
                        soundFx.playOpen();
                        onSelectProject(project);
                      }}
                    >
                      <span>Explore Architecture</span>
                      <ArrowUpRight size={14} />
                    </span>

                    <div style={{ display: 'flex', gap: '8px' }}>
                      {project.liveDemo && (
                        <a 
                          href={project.liveDemo} 
                          target="_blank" 
                          rel="noreferrer"
                          onClick={() => soundFx.playSuccess()}
                          className="glass-pill"
                          style={{ textDecoration: 'none' }}
                          title="Live Demo"
                        >
                          <ExternalLink size={14} />
                          <span>Live</span>
                        </a>
                      )}
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noreferrer"
                          onClick={() => soundFx.playHover()}
                          className="glass-pill"
                          style={{ textDecoration: 'none' }}
                          title="GitHub Source"
                        >
                          <GithubIcon size={14} />
                          <span>Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
