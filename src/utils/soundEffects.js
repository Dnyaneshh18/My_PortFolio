// Synthesized Web Audio Micro-Interactions
// Lightweight, zero-asset, crisp audio feedback with state persistence

class SoundManager {
  constructor() {
    this.audioCtx = null;
    this.muted = localStorage.getItem('portfolio_sound_muted') === 'true';
  }

  init() {
    if (!this.audioCtx && typeof window !== 'undefined') {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
      }
    }
  }

  isMuted() {
    return this.muted;
  }

  toggleMute() {
    this.muted = !this.muted;
    localStorage.setItem('portfolio_sound_muted', String(this.muted));
    if (!this.muted) {
      this.playClick();
    }
    return this.muted;
  }

  playTone(freq, type = 'sine', duration = 0.06, gainLevel = 0.03) {
    if (this.muted) return;
    try {
      this.init();
      if (!this.audioCtx) return;
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

      gain.gain.setValueAtTime(gainLevel, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start();
      osc.stop(this.audioCtx.currentTime + duration);
    } catch {
      // Ignore audio failure if restricted by browser autoplay policy
    }
  }

  playHover() {
    this.playTone(320, 'sine', 0.04, 0.015);
  }

  playClick() {
    this.playTone(580, 'triangle', 0.05, 0.04);
  }

  playSuccess() {
    if (this.muted) return;
    setTimeout(() => this.playTone(523.25, 'sine', 0.08, 0.03), 0);
    setTimeout(() => this.playTone(659.25, 'sine', 0.08, 0.03), 80);
    setTimeout(() => this.playTone(783.99, 'sine', 0.12, 0.04), 160);
  }

  playOpen() {
    if (this.muted) return;
    setTimeout(() => this.playTone(440, 'triangle', 0.06, 0.025), 0);
    setTimeout(() => this.playTone(660, 'triangle', 0.07, 0.03), 60);
  }

  playClose() {
    if (this.muted) return;
    setTimeout(() => this.playTone(660, 'triangle', 0.06, 0.025), 0);
    setTimeout(() => this.playTone(440, 'triangle', 0.07, 0.03), 60);
  }
}

export const soundFx = new SoundManager();
