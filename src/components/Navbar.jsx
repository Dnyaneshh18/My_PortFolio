import { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles, Command, Send, Code, TerminalSquare } from 'lucide-react';
import { soundFx } from '../utils/soundEffects';

export default function Navbar({ 
  currentTheme, 
  onThemeChange, 
  onOpenCommandPalette,
  onOpenTerminal
}) {
  const [scrolled, setScrolled] = useState(false);
  const [isMuted, setIsMuted] = useState(soundFx.isMuted());
  const [themesOpen, setThemesOpen] = useState(false);

  const themes = [
    { id: 'indigo', name: 'Electric Indigo', color: '#6366f1' },
    { id: 'cyan', name: 'Cyber Cyan', color: '#06b6d4' },
    { id: 'emerald', name: 'Neon Emerald', color: '#10b981' },
    { id: 'rose', name: 'Sunset Rose', color: '#f43f5e' },
    { id: 'amber', name: 'Solar Amber', color: '#f59e0b' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const newMuted = soundFx.toggleMute();
    setIsMuted(newMuted);
  };

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 80,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(6, 9, 19, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : 'none',
        padding: scrolled ? '12px 0' : '20px 0'
      }}
    >
      <div className="container-custom" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo / Monogram */}
        <a 
          href="#" 
          onClick={() => soundFx.playClick()}
          style={{ 
            textDecoration: 'none', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px',
            color: 'inherit'
          }}
        >
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))',
            border: '1px solid rgba(255,255,255,0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <span style={{ 
              fontFamily: 'var(--font-display)', 
              fontWeight: 800, 
              fontSize: '1.2rem',
              background: 'var(--accent-gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              DP
            </span>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.05rem', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '8px' }}>
              Dnyaneshwar Patil
              <span className="status-indicator" title="Available for hire" />
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              Full Stack &bull; AI &amp; Data Science
            </div>
          </div>
        </a>

        {/* Quick Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Command Palette trigger */}
          <button
            onClick={() => {
              soundFx.playOpen();
              onOpenCommandPalette();
            }}
            className="glass-pill"
            style={{ 
              cursor: 'pointer', 
              padding: '7px 12px',
              gap: '6px',
              border: '1px solid rgba(255,255,255,0.12)'
            }}
            title="Press Ctrl+K or Cmd+K"
          >
            <Command size={14} style={{ color: 'var(--accent-primary)' }} />
            <span style={{ display: 'none', mdDisplay: 'inline' }} className="hidden sm:inline">Search</span>
            <kbd style={{ 
              background: 'rgba(255,255,255,0.08)', 
              borderRadius: '4px', 
              padding: '1px 5px', 
              fontSize: '0.68rem',
              fontFamily: 'var(--font-mono)' 
            }}>
              ⌘K
            </kbd>
          </button>

          {/* Terminal Launcher */}
          <button
            onClick={() => {
              soundFx.playClick();
              onOpenTerminal();
            }}
            className="glass-pill"
            style={{ 
              cursor: 'pointer',
              padding: '7px 12px',
              gap: '6px'
            }}
            title="Launch Cyber Terminal"
          >
            <TerminalSquare size={15} style={{ color: 'var(--accent-secondary)' }} />
            <span style={{ fontSize: '0.8rem' }}>CLI</span>
          </button>

          {/* Theme Switcher Dropdown */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => {
                soundFx.playClick();
                setThemesOpen(!themesOpen);
              }}
              className="glass-pill"
              style={{ 
                cursor: 'pointer',
                padding: '8px',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              title="Change Color Theme"
            >
              <Sparkles size={16} style={{ color: 'var(--accent-primary)' }} />
            </button>

            {themesOpen && (
              <div 
                style={{
                  position: 'absolute',
                  top: '46px',
                  right: 0,
                  background: '#0c1324',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: '16px',
                  padding: '8px',
                  width: '180px',
                  boxShadow: '0 16px 36px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)',
                  zIndex: 99,
                  animation: 'fadeIn 0.2s ease-out'
                }}
              >
                <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', padding: '4px 8px 8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Theme Accents
                </div>
                {themes.map(t => (
                  <button
                    key={t.id}
                    onClick={() => {
                      soundFx.playSuccess();
                      onThemeChange(t.id);
                      setThemesOpen(false);
                    }}
                    style={{
                      width: '100%',
                      background: currentTheme === t.id ? 'rgba(255,255,255,0.1)' : 'transparent',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '8px 10px',
                      color: 'var(--text-main)',
                      fontSize: '0.82rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      cursor: 'pointer',
                      textAlign: 'left'
                    }}
                  >
                    <span style={{ 
                      width: '12px', 
                      height: '12px', 
                      borderRadius: '50%', 
                      background: t.color,
                      boxShadow: currentTheme === t.id ? `0 0 10px ${t.color}` : 'none'
                    }} />
                    {t.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Sound Toggle */}
          <button
            onClick={handleSoundToggle}
            className="glass-pill"
            style={{ 
              cursor: 'pointer',
              padding: '8px',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            title={isMuted ? "Unmute Sound Effects" : "Mute Sound Effects"}
          >
            {isMuted ? (
              <VolumeX size={16} style={{ color: 'var(--text-dim)' }} />
            ) : (
              <Volume2 size={16} style={{ color: 'var(--accent-primary)' }} />
            )}
          </button>

          {/* Hire / Contact CTA */}
          <a
            href="#contact"
            onClick={() => soundFx.playClick()}
            className="btn-primary"
            style={{ 
              padding: '8px 18px',
              fontSize: '0.85rem',
              borderRadius: 'var(--radius-full)'
            }}
          >
            <span>Let's Talk</span>
            <Send size={13} />
            <div className="shimmer-sweep" />
          </a>
        </div>
      </div>
    </header>
  );
}
