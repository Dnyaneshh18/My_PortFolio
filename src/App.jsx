import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import FloatingDock from './components/FloatingDock';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import Terminal from './components/Terminal';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import CommandPalette from './components/CommandPalette';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

export default function App() {
  const [currentTheme, setCurrentTheme] = useState('indigo');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Theme colors map for particle background
  const themeColors = {
    indigo: '#6366f1',
    cyan: '#06b6d4',
    emerald: '#10b981',
    rose: '#f43f5e',
    amber: '#f59e0b'
  };

  const handleThemeChange = (themeId) => {
    setCurrentTheme(themeId);
    document.body.setAttribute('data-theme', themeId);
  };

  const handleOpenTerminal = () => {
    const termEl = document.getElementById('terminal');
    if (termEl) {
      termEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll spy to update active section in floating dock
  useEffect(() => {
    const sections = ['hero', 'about', 'skills', 'projects', 'terminal', 'education', 'achievements', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Dynamic Interactive Canvas Particles */}
      <ParticleBackground themeAccent={themeColors[currentTheme] || '#6366f1'} />

      {/* Ambient Glowing Background Orbs */}
      <div className="ambient-mesh">
        <div className="ambient-orb ambient-orb-1" />
        <div className="ambient-orb ambient-orb-2" />
        <div className="ambient-orb ambient-orb-3" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="grid-overlay" />

      {/* Navigation Header */}
      <Navbar
        currentTheme={currentTheme}
        onThemeChange={handleThemeChange}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenTerminal={handleOpenTerminal}
      />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenTerminal={handleOpenTerminal} />
        <About />
        <Skills />
        <Projects onSelectProject={(p) => setSelectedProject(p)} />
        <Terminal />
        <Education />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Island Dock Navigation */}
      <FloatingDock 
        activeSection={activeSection} 
        onNavigate={(id) => setActiveSection(id)} 
      />

      {/* Interactive Project Deep Dive Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Command Palette (Ctrl+K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onThemeChange={handleThemeChange}
        onOpenTerminal={handleOpenTerminal}
      />
    </div>
  );
}
