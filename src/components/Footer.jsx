import { ArrowUp, Mail, Heart, Sparkles, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon, PhoneIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import { soundFx } from '../utils/soundEffects';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    soundFx.playTone(680, 'sine', 0.05, 0.02);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      background: 'rgba(6, 9, 19, 0.95)',
      padding: '50px 0 100px',
      position: 'relative',
      zIndex: 10
    }}>
      <div className="container-custom">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px'
        }}>
          {/* Brand & Tagline */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span style={{ 
                fontFamily: 'var(--font-display)', 
                fontWeight: 800, 
                fontSize: '1.2rem',
                background: 'var(--accent-gradient)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                {personal.name}
              </span>
              <span className="badge-tag" style={{ color: '#10b981', borderColor: 'rgba(16, 185, 129, 0.3)' }}>
                VIT Pune '26
              </span>
            </div>
            <p style={{ fontSize: '0.84rem', color: 'var(--text-dim)', maxWidth: '380px' }}>
              Designed &amp; engineered for maximum performance, modern aesthetics, and impact.
            </p>
          </div>

          {/* Socials & Scroll to Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a 
              href={personal.github} 
              target="_blank" 
              rel="noreferrer"
              onClick={() => soundFx.playHover()}
              className="glass-pill"
              style={{ padding: '10px', borderRadius: '50%', textDecoration: 'none' }}
              title="GitHub"
            >
              <GithubIcon size={16} />
            </a>

            <a 
              href={personal.linkedin} 
              target="_blank" 
              rel="noreferrer"
              onClick={() => soundFx.playHover()}
              className="glass-pill"
              style={{ padding: '10px', borderRadius: '50%', textDecoration: 'none' }}
              title="LinkedIn"
            >
              <LinkedinIcon size={16} style={{ color: '#0077b5' }} />
            </a>

            <a 
              href={personal.leetcode} 
              target="_blank" 
              rel="noreferrer"
              onClick={() => soundFx.playHover()}
              className="glass-pill"
              style={{ padding: '10px', borderRadius: '50%', textDecoration: 'none' }}
              title="LeetCode (270+ Problems)"
            >
              <LeetCodeIcon size={16} style={{ color: '#f59e0b' }} />
            </a>

            <a 
              href={`mailto:${personal.email}`}
              onClick={() => soundFx.playHover()}
              className="glass-pill"
              style={{ padding: '10px', borderRadius: '50%', textDecoration: 'none' }}
              title="Email"
            >
              <Mail size={16} style={{ color: 'var(--accent-primary)' }} />
            </a>

            <a 
              href={`tel:${personal.phone}`}
              onClick={() => soundFx.playHover()}
              className="glass-pill"
              style={{ padding: '10px', borderRadius: '50%', textDecoration: 'none' }}
              title="Call / WhatsApp"
            >
              <PhoneIcon size={16} style={{ color: '#10b981' }} />
            </a>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="glass-pill"
              style={{
                cursor: 'pointer',
                padding: '10px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.08)'
              }}
              title="Scroll to Top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Sub-footer Copyright */}
        <div style={{
          marginTop: '32px',
          paddingTop: '20px',
          borderTop: '1px solid rgba(255, 255, 255, 0.04)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '0.85rem',
          color: 'var(--text-dim)'
        }}>
          <div>
            Made by Dnyanesh with <span style={{ color: '#ef4444' }}>❤️</span> and Chai ☕
          </div>
        </div>
      </div>
    </footer>
  );
}
