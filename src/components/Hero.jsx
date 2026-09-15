import { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Download, 
  Copy, 
  Check, 
  Mail, 
  MapPin, 
  Sparkles, 
  Terminal,
  Code2
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon, PhoneIcon } from './Icons';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';
import { soundFx } from '../utils/soundEffects';

export default function Hero({ onOpenTerminal }) {
  const { personal } = portfolioData;

  // Typewriter effect state
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Mouse tilt coordinates for 3D card
  const [cardTilt, setCardTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const currentRole = personal.roles[roleIndex];
    const typingSpeed = isDeleting ? 38 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentRole.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % personal.roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex, personal.roles]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    soundFx.playSuccess();
    setCopiedEmail(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#6366f1', '#a855f7', '#06b6d4']
    });
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  const handleCardMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setCardTilt({
      x: -(y / (rect.height / 2)) * 10,
      y: (x / (rect.width / 2)) * 10
    });
    
    // Update mouse coordinates for the spotlight effect
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${mouseX}px`);
    card.style.setProperty('--mouse-y', `${mouseY}px`);
  };

  const handleCardMouseLeave = () => {
    setCardTilt({ x: 0, y: 0 });
  };

  return (
    <section id="hero" className="section-spacing" style={{ paddingTop: '140px', paddingBottom: '70px' }}>
      <div className="container-custom">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '48px',
          alignItems: 'center'
        }}>
          {/* Left Column: Introductions & CTAs */}
          <div>
            {/* Availability Pill */}
            <div style={{ marginBottom: '20px' }}>
              <span className="glass-pill" style={{ borderColor: 'rgba(16, 185, 129, 0.3)', background: 'rgba(16, 185, 129, 0.08)' }}>
                <span className="status-indicator" />
                <span style={{ color: '#34d399', fontWeight: 600 }}>{personal.status}</span>
              </span>
            </div>

            {/* Main Greeting & Name */}
            <div style={{ marginBottom: '16px' }}>
              <div style={{ fontSize: '1.05rem', color: 'var(--text-muted)', fontWeight: 500, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '8px' }}>
                Engineering the Future
              </div>
              <h1 style={{ 
                fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)', 
                lineHeight: 1.1, 
                fontWeight: 800,
                letterSpacing: '-0.035em'
              }}>
                I'm <span className="text-gradient">{personal.name}</span>
              </h1>
            </div>

            {/* Dynamic Typewriter Title */}
            <div style={{ 
              fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', 
              fontWeight: 600, 
              color: 'var(--text-main)', 
              minHeight: '2.4em',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              marginBottom: '20px'
            }}>
              <span style={{ color: 'var(--accent-primary)' }}>&gt;</span>
              <span>{displayedText}</span>
              <span style={{ 
                display: 'inline-block', 
                width: '3px', 
                height: '1.2em', 
                background: 'var(--accent-primary)', 
                marginLeft: '2px',
                animation: 'pulseDot 0.8s infinite'
              }} />
            </div>

            {/* Punchy Bio Summary */}
            <p style={{ 
              color: 'var(--text-muted)', 
              fontSize: '1.05rem', 
              lineHeight: 1.7, 
              maxWidth: '540px',
              marginBottom: '32px'
            }}>
              Passionate about building impactful solutions through <strong style={{ color: 'var(--text-main)', fontWeight: 600 }}>Full-Stack Development &amp; Data Science</strong>, combining modern web technologies with predictive, data-driven intelligence.
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '36px' }}>
              <a 
                href="#projects" 
                onClick={() => soundFx.playClick()}
                className="btn-primary"
              >
                <span>Explore Projects</span>
                <ArrowRight size={16} />
                <div className="shimmer-sweep" />
              </a>

              <a 
                href={personal.resumeUrl} 
                download="Dnyaneshwar_Patil_Resume.pdf"
                onClick={() => soundFx.playSuccess()}
                className="btn-secondary"
              >
                <Download size={16} style={{ color: 'var(--accent-primary)' }} />
                <span>Download Resume</span>
              </a>

              <button 
                onClick={handleCopyEmail}
                className="btn-secondary"
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <>
                    <Check size={16} style={{ color: '#10b981' }} />
                    <span style={{ color: '#10b981' }}>Copied Email!</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} style={{ color: 'var(--text-muted)' }} />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Links & Location */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '16px' }}>
              <a 
                href={personal.github} 
                target="_blank" 
                rel="noreferrer"
                onClick={() => soundFx.playHover()}
                className="glass-pill"
                style={{ textDecoration: 'none' }}
              >
                <GithubIcon size={15} />
                <span>GitHub</span>
              </a>

              <a 
                href={personal.linkedin} 
                target="_blank" 
                rel="noreferrer"
                onClick={() => soundFx.playHover()}
                className="glass-pill"
                style={{ textDecoration: 'none' }}
              >
                <LinkedinIcon size={15} style={{ color: '#0077b5' }} />
                <span>LinkedIn</span>
              </a>

              <a 
                href={personal.leetcode} 
                target="_blank" 
                rel="noreferrer"
                onClick={() => soundFx.playHover()}
                className="glass-pill"
                style={{ textDecoration: 'none' }}
              >
                <LeetCodeIcon size={15} style={{ color: '#f59e0b' }} />
                <span>LeetCode (270+)</span>
              </a>

              <a 
                href={`tel:${personal.phone}`}
                onClick={() => soundFx.playHover()}
                className="glass-pill"
                style={{ textDecoration: 'none' }}
              >
                <PhoneIcon size={14} style={{ color: '#10b981' }} />
                <span>{personal.phone}</span>
              </a>

              <span className="glass-pill" style={{ cursor: 'default' }}>
                <MapPin size={14} style={{ color: 'var(--accent-rose)' }} />
                <span>{personal.location}</span>
              </span>
            </div>
          </div>

          {/* Right Column: 3D Holographic Card & Avatar */}
          <div 
            className="tilt-card-wrapper"
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div 
              className="glass tilt-card-inner"
              style={{
                maxWidth: '420px',
                width: '100%',
                padding: '32px 28px',
                transform: `rotateX(${cardTilt.x}deg) rotateY(${cardTilt.y}deg)`,
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                overflow: 'hidden'
              }}
            >
              <div className="spotlight-overlay" />
              <div className="shimmer-sweep" />

              {/* Avatar with Animated Glow Halo */}
              <div style={{ position: 'relative', width: '100%', maxWidth: '300px', marginBottom: '22px' }}>
                <div 
                  style={{
                    width: '100%',
                    height: '320px',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    border: '1.5px solid rgba(255, 255, 255, 0.18)',
                    boxShadow: '0 20px 45px -10px rgba(0, 0, 0, 0.8), 0 0 35px -5px var(--accent-glow)',
                    position: 'relative',
                    zIndex: 2,
                    background: '#090d18'
                  }}
                >
                  <img 
                    src={personal.avatar} 
                    alt={personal.name} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      objectPosition: 'center 12%',
                      transform: 'scale(1.03)',
                      display: 'block'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(9, 13, 24, 0.35) 0%, transparent 40%)',
                    pointerEvents: 'none'
                  }} />
                </div>
              </div>

              {/* Profile Details */}
              <h2 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '4px' }}>
                {personal.name}
              </h2>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
                B.Tech in AI &amp; Data Science &bull; SDE Intern
              </p>

              {/* Quick Metrics Matrix inside the 3D card */}
              <div style={{ 
                width: '100%', 
                display: 'grid', 
                gridTemplateColumns: '1fr 1fr', 
                gap: '10px',
                marginTop: '10px'
              }}>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '12px',
                  padding: '12px 10px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--accent-primary)' }}>
                    270+
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>
                    LeetCode Solved
                  </div>
                </div>

                <div style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '12px',
                  padding: '12px 10px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#10b981' }}>
                    8.79
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>
                    CGPA · AI &amp; Data
                  </div>
                </div>
              </div>

              {/* Terminal Quick Prompt */}
              <div 
                onClick={() => {
                  soundFx.playClick();
                  onOpenTerminal();
                }}
                style={{
                  marginTop: '18px',
                  width: '100%',
                  background: 'rgba(99, 102, 241, 0.08)',
                  border: '1px dashed rgba(99, 102, 241, 0.3)',
                  borderRadius: '12px',
                  padding: '8px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  fontSize: '0.78rem',
                  color: 'var(--text-muted)',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Terminal size={14} style={{ color: 'var(--accent-primary)' }} />
                  <span>Interactive Terminal</span>
                </div>
                <span className="font-mono" style={{ color: 'var(--accent-primary)', fontSize: '0.72rem' }}>$ dnyaneshwar --help</span>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Stats Bar underneath Hero */}
        <div style={{ 
          marginTop: '70px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '16px'
        }}>
          {personal.quickStats.map((stat, idx) => (
            <div 
              key={idx}
              className="glass"
              style={{
                padding: '20px 24px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                borderRadius: 'var(--radius-md)'
              }}
            >
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-primary)'
              }}>
                <Sparkles size={20} />
              </div>
              <div>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
