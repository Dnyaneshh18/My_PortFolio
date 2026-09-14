import { useState, useEffect } from 'react';
import { Home, User, Cpu, FolderGit2, GraduationCap, Trophy, Terminal, Mail } from 'lucide-react';
import { soundFx } from '../utils/soundEffects';

export default function FloatingDock({ activeSection, onNavigate }) {
  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Cpu },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'terminal', label: 'Terminal', icon: Terminal },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'achievements', label: 'Awards', icon: Trophy },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  return (
    <nav className="floating-dock" aria-label="Quick Navigation Dock">
      {navItems.map((item) => {
        const IconComponent = item.icon;
        const isActive = activeSection === item.id;

        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => {
              soundFx.playHover();
              if (onNavigate) onNavigate(item.id);
            }}
            className={`dock-item ${isActive ? 'active' : ''}`}
            title={item.label}
          >
            <IconComponent size={17} />
            <span style={{ fontSize: '0.68rem' }}>{item.label}</span>
          </a>
        );
      })}
    </nav>
  );
}
