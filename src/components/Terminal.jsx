import { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Sparkles, Send, Trash2, CornerDownLeft } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { soundFx } from '../utils/soundEffects';

export default function Terminal({ isOpenByDefault = false }) {
  const [history, setHistory] = useState([
    { type: 'system', text: "Antigravity Cyber Kernel v4.2.0-release [VIT-PUNE-SYS]" },
    { type: 'system', text: "Type 'help' or click any quick command below to inspect engineering telemetry." }
  ]);
  const [inputVal, setInputVal] = useState('');
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  const quickCommands = ['help', 'bio', 'projects', 'skills', 'achievements', 'edu', 'contact', 'hire', 'clear'];

  useEffect(() => {
    if (history.length > 2) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history]);

  const executeCommand = (cmdStr) => {
    const cleanCmd = cmdStr.trim().toLowerCase();
    if (!cleanCmd) return;

    soundFx.playTone(550, 'triangle', 0.04, 0.03);

    const newHistory = [...history, { type: 'input', text: `$ ${cmdStr}` }];

    if (cleanCmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    const { terminalCommands } = portfolioData;

    if (terminalCommands[cleanCmd]) {
      newHistory.push({ type: 'output', text: terminalCommands[cleanCmd] });
    } else {
      newHistory.push({ 
        type: 'error', 
        text: `Command not found: '${cleanCmd}'. Type 'help' to see valid commands.` 
      });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    }
  };

  return (
    <section id="terminal" className="section-spacing">
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 40px' }}>
          <span className="glass-pill" style={{ marginBottom: '14px' }}>
            <TerminalIcon size={14} style={{ color: 'var(--accent-primary)' }} />
            <span>Developer Console</span>
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', marginBottom: '16px' }}>
            Interactive <span className="text-gradient">Cyber Terminal</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
            Direct shell interface into Dnyaneshwar's credentials, project architectures, and contact streams.
          </p>
        </div>

        {/* Terminal Window Container */}
        <div className="terminal-window" style={{ maxWidth: '840px', margin: '0 auto' }}>
          {/* Terminal Title Bar */}
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="terminal-dot terminal-dot-red" />
              <span className="terminal-dot terminal-dot-yellow" />
              <span className="terminal-dot terminal-dot-green" />
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', letterSpacing: '0.04em' }}>
              guest@dnyaneshwar-terminal:~ (zsh)
            </div>
            <button
              onClick={() => {
                soundFx.playClick();
                setHistory([]);
              }}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-dim)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '0.75rem'
              }}
              title="Clear Terminal"
            >
              <Trash2 size={13} />
              <span>Clear</span>
            </button>
          </div>

          {/* Terminal Output Area */}
          <div className="terminal-body" onClick={() => inputRef.current?.focus()}>
            {history.map((item, idx) => (
              <div key={idx} style={{ marginBottom: '8px' }}>
                {item.type === 'input' && (
                  <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>
                    {item.text}
                  </span>
                )}
                {item.type === 'system' && (
                  <span style={{ color: '#06b6d4', opacity: 0.9 }}>
                    [SYSTEM] {item.text}
                  </span>
                )}
                {item.type === 'output' && (
                  <span style={{ color: '#34d399', whiteSpace: 'pre-wrap' }}>
                    {item.text}
                  </span>
                )}
                {item.type === 'error' && (
                  <span style={{ color: '#f87171' }}>
                    {item.text}
                  </span>
                )}
              </div>
            ))}

            {/* Current Input Line */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '6px' }}>
              <span style={{ color: 'var(--accent-primary)', fontWeight: 700 }}>$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type a command (e.g. 'projects', 'hire')..."
                style={{
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: 'var(--text-main)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.88rem',
                  flexGrow: 1
                }}
              />
              <button
                onClick={() => executeCommand(inputVal)}
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: 'none',
                  borderRadius: '6px',
                  color: 'var(--text-muted)',
                  padding: '3px 8px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <CornerDownLeft size={13} />
              </button>
            </div>
            <div ref={bottomRef} />
          </div>

          {/* Quick Command Pills for Mobile and Fast Interaction */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.02)',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            padding: '10px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            flexWrap: 'wrap'
          }}>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Quick Commands:
            </span>
            {quickCommands.map((cmd) => (
              <button
                key={cmd}
                onClick={() => executeCommand(cmd)}
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '6px',
                  color: cmd === 'hire' ? '#10b981' : 'var(--text-muted)',
                  fontSize: '0.74rem',
                  fontFamily: 'var(--font-mono)',
                  padding: '2px 8px',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                {cmd}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
