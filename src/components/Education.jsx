import { GraduationCap, Calendar, Award, BookOpen, CheckCircle2, Briefcase } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { soundFx } from '../utils/soundEffects';

export default function Education() {
  const { education, experience } = portfolioData;

  return (
    <section id="education" className="section-spacing">
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 48px' }}>
          <span className="glass-pill" style={{ marginBottom: '14px' }}>
            <Briefcase size={14} style={{ color: 'var(--accent-primary)' }} />
            <span>Experience &amp; Education</span>
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', marginBottom: '16px' }}>
            Professional Journey &amp; <span className="text-gradient">Academics</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
            Industry software engineering experience combined with academic excellence in AI &amp; Data Science.
          </p>
        </div>

        <div style={{ maxWidth: '840px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {/* Industry Experience First */}
          {experience && experience.length > 0 && (
            <div style={{ marginBottom: '12px' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-main)' }}>
                <Briefcase size={18} style={{ color: 'var(--accent-primary)' }} />
                <span>Industry Experience</span>
              </h3>
              {experience.map((exp, idx) => (
                <div 
                  key={idx}
                  className="glass"
                  style={{
                    padding: '32px 28px',
                    borderRadius: 'var(--radius-xl)',
                    border: '1px solid rgba(99, 102, 241, 0.35)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={() => soundFx.playHover()}
                >
                  <div className="shimmer-sweep" />
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '14px', marginBottom: '16px' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                        <span className="glass-pill" style={{ borderColor: '#10b981', color: '#10b981', background: 'rgba(16, 185, 129, 0.1)' }}>
                          {exp.type}
                        </span>
                        <span className="glass-pill">
                          <Calendar size={12} />
                          <span>{exp.period}</span>
                        </span>
                      </div>
                      <h4 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '4px' }}>
                        {exp.role}
                      </h4>
                      <p style={{ fontSize: '1.05rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {exp.highlights.map((h, hIdx) => (
                      <div key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                        <CheckCircle2 size={15} style={{ color: '#10b981', marginTop: '3px', flexShrink: 0 }} />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Academic Degrees */}
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-main)' }}>
              <GraduationCap size={18} style={{ color: 'var(--accent-secondary)' }} />
              <span>Academic Foundations</span>
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {education.map((edu, idx) => (
                <div 
                  key={idx}
                  className="glass"
                  style={{
                    padding: '28px 26px',
                    borderRadius: 'var(--radius-lg)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={() => soundFx.playHover()}
                >
                  <div className="shimmer-sweep" />
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '14px', marginBottom: '14px' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                        <span className="glass-pill" style={{ borderColor: 'var(--accent-primary)', color: 'var(--accent-primary)', background: 'rgba(99, 102, 241, 0.1)' }}>
                          {edu.status}
                        </span>
                        <span className="glass-pill">
                          <Calendar size={12} />
                          <span>{edu.period}</span>
                        </span>
                      </div>
                      <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '4px' }}>
                        {edu.degree}
                      </h4>
                      <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                        {edu.institution}
                      </p>
                    </div>

                    {/* Grade Badge */}
                    <div style={{
                      background: 'rgba(99, 102, 241, 0.12)',
                      border: '1px solid rgba(99, 102, 241, 0.3)',
                      borderRadius: '12px',
                      padding: '8px 16px',
                      textAlign: 'center'
                    }}>
                      <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--accent-primary)', fontFamily: 'var(--font-display)' }}>
                        {edu.grade}
                      </div>
                      <div style={{ fontSize: '0.68rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                        Academic Record
                      </div>
                    </div>
                  </div>

                  {/* Highlights List */}
                  <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '14px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {edu.highlights.map((h, hIdx) => (
                      <div key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                        <CheckCircle2 size={14} style={{ color: '#10b981', marginTop: '3px', flexShrink: 0 }} />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
