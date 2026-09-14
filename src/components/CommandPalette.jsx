import { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  X, 
  FolderGit2, 
  Cpu, 
  User, 
  GraduationCap, 
  Trophy, 
  Terminal, 
  Mail, 
  Download, 
  Sparkles, 
  Volume2,
  Copy,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';
import { soundFx } from '../utils/soundEffects';

export default function CommandPalette({ 
  isOpen, 
  onClose, 
  onThemeChange, 
  onOpenTerminal 
}) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  const { personal } = portfolioData;

  const allActions = [
    { id: 'proj', title: 'Go to Projects Showcase', category: 'Navigation', icon: FolderGit2, action: () => { window.location.hash = '#projects'; } },
    { id: 'skills', title: 'Explore Tech Stack & Skills', category: 'Navigation', icon: Cpu, action: () => { window.location.hash = '#skills'; } },
    { id: 'about', title: 'Read Bio & Story', category: 'Navigation', icon: User, action: () => { window.location.hash = '#about'; } },
    { id: 'term', title: 'Launch Interactive Cyber Terminal', category: 'Interactive', icon: Terminal, action: () => { onOpenTerminal(); } },
    { id: 'edu', title: 'View VIT Pune Education Details', category: 'Navigation', icon: GraduationCap, action: () => { window.location.hash = '#education'; } },
    { id: 'achieve', title: 'View Hackathons & Awards', category: 'Navigation', icon: Trophy, action: () => { window.location.hash = '#achievements'; } },
    { id: 'contact', title: 'Get In Touch / Contact Form', category: 'Navigation', icon: Mail, action: () => { window.location.hash = '#contact'; } },
    { id: 'resume', title: 'Download Official Resume PDF', category: 'Quick Action', icon: Download, action: () => { 
      const link = document.createElement('a');
      link.href = personal.resumeUrl;
      link.download = 'Dnyaneshwar_Patil_Resume.pdf';
      link.click();
    }},
    { id: 'email', title: 'Copy Email to Clipboard', category: 'Quick Action', icon: Copy, action: () => {
      navigator.clipboard.writeText(personal.email);
      confetti({ particleCount: 40, spread: 60 });
    }},
    { id: 'theme-cyan', title: 'Switch Accent: Cyber Cyan', category: 'Theme', icon: Sparkles, action: () => onThemeChange('cyan') },
    { id: 'theme-indigo', title: 'Switch Accent: Electric Indigo', category: 'Theme', icon: Sparkles, action: () => onThemeChange('indigo') },
    { id: 'theme-emerald', title: 'Switch Accent: Neon Emerald', category: 'Theme', icon: Sparkles, action: () => onThemeChange('emerald') },
    { id: 'theme-rose', title: 'Switch Accent: Sunset Rose', category: 'Theme', icon: Sparkles, action: () => onThemeChange('rose') }
  ];

  const filteredActions = allActions.filter(a => 
    a.title.toLowerCase().includes(query.toLowerCase()) || 
    a.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        soundFx.playOpen();
        onClose(); // toggles
      } else if (e.key === 'Escape' && isOpen) {
        soundFx.playClose();
        onClose();
      } else if (isOpen) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          soundFx.playTone(380, 'sine', 0.03, 0.015);
          setSelectedIndex((prev) => (prev + 1) % (filteredActions.length || 1));
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          soundFx.playTone(380, 'sine', 0.03, 0.015);
          setSelectedIndex((prev) => (prev - 1 + filteredActions.length) % (filteredActions.length || 1));
        } else if (e.key === 'Enter') {
          e.preventDefault();
          if (filteredActions[selectedIndex]) {
            soundFx.playSuccess();
            filteredActions[selectedIndex].action();
            onClose();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredActions, selectedIndex, onClose]);

  if (!isOpen) return null;

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
      <div 
        className="modal-content" 
        style={{ 
          maxWidth: '580px', 
          borderRadius: 'var(--radius-lg)', 
          overflow: 'hidden',
          background: '#0a0f1e'
        }}
      >
        {/* Search Header */}
        <div style={{
          padding: '16px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          <Search size={18} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command or jump to section..."
            style={{
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: 'var(--text-main)',
              fontSize: '1rem',
              width: '100%'
            }}
          />
          <button
            onClick={() => {
              soundFx.playClose();
              onClose();
            }}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-dim)',
              cursor: 'pointer',
              display: 'flex'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Action List */}
        <div style={{ maxHeight: '360px', overflowY: 'auto', padding: '8px' }}>
          {filteredActions.length === 0 ? (
            <div style={{ padding: '32px', textAlign: 'center', color: 'var(--text-dim)', fontSize: '0.9rem' }}>
              No matching commands found for "{query}".
            </div>
          ) : (
            filteredActions.map((action, idx) => {
              const IconComp = action.icon;
              const isSelected = selectedIndex === idx;

              return (
                <div
                  key={action.id}
                  onClick={() => {
                    soundFx.playSuccess();
                    action.action();
                    onClose();
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  style={{
                    padding: '10px 14px',
                    borderRadius: '10px',
                    background: isSelected ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
                    border: isSelected ? '1px solid rgba(99, 102, 241, 0.3)' : '1px solid transparent',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: isSelected ? 'var(--accent-primary)' : 'rgba(255, 255, 255, 0.05)',
                      color: isSelected ? '#ffffff' : 'var(--text-muted)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <IconComp size={16} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.88rem', fontWeight: 600, color: isSelected ? '#ffffff' : 'var(--text-main)' }}>
                        {action.title}
                      </div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>
                        {action.category}
                      </div>
                    </div>
                  </div>

                  {isSelected && (
                    <ArrowRight size={15} style={{ color: 'var(--accent-primary)' }} />
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts helper */}
        <div style={{
          padding: '10px 16px',
          background: 'rgba(255, 255, 255, 0.02)',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.74rem',
          color: 'var(--text-dim)'
        }}>
          <div style={{ display: 'flex', gap: '10px' }}>
            <span><kbd className="font-mono">↑↓</kbd> navigate</span>
            <span><kbd className="font-mono">↵</kbd> select</span>
            <span><kbd className="font-mono">esc</kbd> close</span>
          </div>
          <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>DnyaneshwarOS QuickNav</span>
        </div>
      </div>
    </div>
  );
}
