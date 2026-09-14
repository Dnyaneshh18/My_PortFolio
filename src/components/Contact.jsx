import { useState } from 'react';
import { Mail, Send, Copy, Check, MapPin, Sparkles, MessageSquare, Clock, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon, PhoneIcon } from './Icons';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';
import { soundFx } from '../utils/soundEffects';

export default function Contact() {
  const { personal } = portfolioData;

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'sent'
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    soundFx.playSuccess();
    setCopiedEmail(true);
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#6366f1', '#a855f7', '#10b981']
    });
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    soundFx.playTone(600, 'sine', 0.08, 0.03);
    setStatus('sending');

    setTimeout(() => {
      setStatus('sent');
      soundFx.playSuccess();
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 }
      });
      setFormState({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setStatus('idle'), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="section-spacing">
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 52px' }}>
          <span className="glass-pill" style={{ marginBottom: '14px' }}>
            <Mail size={14} style={{ color: 'var(--accent-primary)' }} />
            <span>Get In Touch</span>
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', marginBottom: '16px' }}>
            Let's Build Something <span className="text-gradient">Extraordinary</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
            Whether you have a full-time opportunity, an ambitious project, or just want to connect.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '36px',
          alignItems: 'start'
        }}>
          {/* Left Column: Direct Info & Socials */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Quick Email Card */}
            <div className="glass" style={{ padding: '32px 28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(99, 102, 241, 0.15)',
                  border: '1px solid rgba(99, 102, 241, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-primary)'
                }}>
                  <Mail size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>
                    Direct Inbox
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    Responds within 24 hours
                  </p>
                </div>
              </div>

              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                padding: '12px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '16px'
              }}>
                <span className="font-mono" style={{ fontSize: '0.9rem', color: 'var(--text-main)' }}>
                  {personal.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="glass-pill"
                  style={{ cursor: 'pointer', padding: '6px 12px', fontSize: '0.78rem' }}
                >
                  {copiedEmail ? (
                    <>
                      <Check size={13} style={{ color: '#10b981' }} />
                      <span style={{ color: '#10b981' }}>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a 
                href={`mailto:${personal.email}`}
                onClick={() => soundFx.playClick()}
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <span>Compose Mail</span>
                <Send size={15} />
                <div className="shimmer-sweep" />
              </a>
            </div>

            {/* Availability & Location Card */}
            <div className="glass" style={{ padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Clock size={18} style={{ color: '#10b981' }} />
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Active Status</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{personal.status}</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <MapPin size={18} style={{ color: 'var(--accent-rose)' }} />
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Location</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{personal.location} (Open to Relocation &amp; Remote)</div>
                </div>
              </div>

              {/* Direct Phone & WhatsApp */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Phone size={18} style={{ color: '#10b981' }} />
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Phone / WhatsApp</div>
                  <a 
                    href={`tel:${personal.phone}`} 
                    style={{ fontSize: '0.84rem', color: 'var(--accent-primary)', textDecoration: 'none', fontWeight: 600 }}
                  >
                    {personal.phone}
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '8px', marginTop: '10px', flexWrap: 'wrap' }}>
                <a 
                  href={personal.github} 
                  target="_blank" 
                  rel="noreferrer"
                  onClick={() => soundFx.playHover()}
                  className="glass-pill"
                  style={{ flexGrow: 1, justifyContent: 'center', textDecoration: 'none' }}
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
                  style={{ flexGrow: 1, justifyContent: 'center', textDecoration: 'none' }}
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
                  style={{ flexGrow: 1, justifyContent: 'center', textDecoration: 'none' }}
                >
                  <LeetCodeIcon size={15} style={{ color: '#f59e0b' }} />
                  <span>LeetCode</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="glass" style={{ padding: '36px 32px' }}>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '6px' }}>
              Send a Direct Message
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
              Leave a message and I will reply to your provided email address promptly.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 500 }}>
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="e.g. Alex Morgan"
                  style={{
                    width: '100%',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '10px',
                    padding: '12px 14px',
                    color: 'var(--text-main)',
                    fontSize: '0.9rem',
                    outline: 'none',
                    transition: 'border-color 0.2s ease'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 500 }}>
                  Your Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="alex@company.com"
                  style={{
                    width: '100%',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '10px',
                    padding: '12px 14px',
                    color: 'var(--text-main)',
                    fontSize: '0.9rem',
                    outline: 'none',
                    transition: 'border-color 0.2s ease'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 500 }}>
                  Subject / Role
                </label>
                <input
                  type="text"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  placeholder="Software Engineer Opportunity / Project Inquiry"
                  style={{
                    width: '100%',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '10px',
                    padding: '12px 14px',
                    color: 'var(--text-main)',
                    fontSize: '0.9rem',
                    outline: 'none',
                    transition: 'border-color 0.2s ease'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 500 }}>
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tell me about your team, project, or what you'd like to collaborate on..."
                  style={{
                    width: '100%',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '10px',
                    padding: '12px 14px',
                    color: 'var(--text-main)',
                    fontSize: '0.9rem',
                    outline: 'none',
                    resize: 'vertical',
                    transition: 'border-color 0.2s ease'
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', marginTop: '6px' }}
              >
                {status === 'sending' ? (
                  <span>Dispatching Message...</span>
                ) : status === 'sent' ? (
                  <>
                    <Check size={16} />
                    <span>Message Dispatched Successfully!</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={15} />
                    <div className="shimmer-sweep" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
