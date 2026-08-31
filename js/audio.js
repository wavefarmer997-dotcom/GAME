/**
 * NEXUS GAMING TH - Web Audio API Synthesizer
 * Generates futuristic sci-fi gaming UI sound effects natively without external audio files.
 */

class SoundSynthesizer {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.STORAGE_KEY = 'NEXUS_SOUND_VOLUME_PCT';
    this.volumeLevel = this._loadVolume(); // 0 to 100
    this.volume = (this.volumeLevel / 100) * 0.12; // Scaled base volume
    this.listeners = new Set();
    this.initContext = this.initContext.bind(this);

    if (typeof window !== 'undefined') {
      window.addEventListener('pointerdown', () => this.initContext(), { once: true, passive: true });
    }
  }

  _loadVolume() {
    try {
      const saved = localStorage.getItem(this.STORAGE_KEY);
      if (saved !== null) return parseInt(saved, 10);
    } catch (e) {}
    return 40; // 40% default pleasant volume
  }

  _saveVolume() {
    try {
      localStorage.setItem(this.STORAGE_KEY, this.volumeLevel.toString());
    } catch (e) {}
  }

  setVolume(percent, playSample = true) {
    const clamped = Math.max(0, Math.min(100, parseInt(percent, 10) || 0));
    this.volumeLevel = clamped;
    this.enabled = clamped > 0;
    this.volume = (clamped / 100) * 0.12;
    this._saveVolume();

    if (this.enabled && playSample) {
      this.initContext();
      this.play('click');
    }

    this._notify();
    return this.volumeLevel;
  }

  getVolume() {
    return this.volumeLevel;
  }

  getIcon() {
    if (!this.enabled || this.volumeLevel === 0) return '🔇';
    if (this.volumeLevel < 35) return '🔈';
    if (this.volumeLevel < 70) return '🔉';
    return '🔊';
  }

  subscribe(fn) {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }

  _notify() {
    this.listeners.forEach(fn => fn({ volume: this.volumeLevel, enabled: this.enabled, icon: this.getIcon() }));
  }

  initContext() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggle() {
    if (this.volumeLevel > 0) {
      this.prevVolume = this.volumeLevel;
      this.setVolume(0, false);
    } else {
      this.setVolume(this.prevVolume || 40, true);
    }
    return this.enabled;
  }

  play(type) {
    if (!this.enabled) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      switch (type) {
        case 'hover':
          this._playHover(now);
          break;
        case 'click':
          this._playClick(now);
          break;
        case 'tab':
          this._playTab(now);
          break;
        case 'join':
          this._playJoin(now);
          break;
        case 'levelUp':
          this._playLevelUp(now);
          break;
        case 'message':
          this._playMessage(now);
          break;
        case 'like':
          this._playLike(now);
          break;
        case 'success':
          this._playSuccess(now);
          break;
        case 'laser':
          this._playLaser(now);
          break;
        case 'fire':
          this._playFire(now);
          break;
        case 'zap':
          this._playZap(now);
          break;
        case 'crown':
          this._playCrown(now);
          break;
        case 'target':
          this._playTarget(now);
          break;
        case 'heart':
          this._playHeart(now);
          break;
        case 'whoosh':
          this._playWhoosh(now);
          break;
        case 'sparkle':
          this._playSparkle(now);
          break;
        case 'glitch':
          this._playGlitch(now);
          break;
        default:
          this._playClick(now);
      }
    } catch (e) {
      console.warn('Audio play error:', e);
    }
  }

  _createGain(now, duration, peak = 1) {
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.exponentialRampToValueAtTime(this.volume * peak, now + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    gain.connect(this.ctx.destination);
    return gain;
  }

  _playHover(now) {
    const osc = this.ctx.createOscillator();
    const gain = this._createGain(now, 0.06, 0.25);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(480, now);
    osc.frequency.exponentialRampToValueAtTime(620, now + 0.06);
    osc.connect(gain);
    osc.start(now);
    osc.stop(now + 0.06);
  }

  _playClick(now) {
    const osc = this.ctx.createOscillator();
    const gain = this._createGain(now, 0.08, 0.6);
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.exponentialRampToValueAtTime(240, now + 0.08);
    osc.connect(gain);
    osc.start(now);
    osc.stop(now + 0.08);
  }

  _playTab(now) {
    const osc = this.ctx.createOscillator();
    const gain = this._createGain(now, 0.12, 0.4);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(523.25, now); // C5
    osc.frequency.setValueAtTime(659.25, now + 0.05); // E5
    osc.connect(gain);
    osc.start(now);
    osc.stop(now + 0.12);
  }

  _playJoin(now) {
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gain = this._createGain(now, 0.25, 0.7);

    osc1.type = 'sine';
    osc2.type = 'triangle';

    osc1.frequency.setValueAtTime(440, now);
    osc1.frequency.exponentialRampToValueAtTime(880, now + 0.15);
    osc2.frequency.setValueAtTime(554.37, now);
    osc2.frequency.exponentialRampToValueAtTime(1108.73, now + 0.18);

    osc1.connect(gain);
    osc2.connect(gain);
    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 0.25);
    osc2.stop(now + 0.25);
  }

  _playLevelUp(now) {
    const notes = [440, 554.37, 659.25, 880, 1108.73, 1318.5];
    notes.forEach((freq, idx) => {
      const startTime = now + (idx * 0.07);
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.001, startTime);
      gain.gain.exponentialRampToValueAtTime(this.volume * 0.85, startTime + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.28);
      gain.connect(this.ctx.destination);

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, startTime);
      osc.connect(gain);
      osc.start(startTime);
      osc.stop(startTime + 0.3);
    });
  }

  _playMessage(now) {
    const osc = this.ctx.createOscillator();
    const gain = this._createGain(now, 0.15, 0.5);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, now);
    osc.frequency.exponentialRampToValueAtTime(1320, now + 0.08);
    osc.connect(gain);
    osc.start(now);
    osc.stop(now + 0.15);
  }

  _playLike(now) {
    const osc = this.ctx.createOscillator();
    const gain = this._createGain(now, 0.12, 0.5);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, now);
    osc.frequency.exponentialRampToValueAtTime(1000, now + 0.1);
    osc.connect(gain);
    osc.start(now);
    osc.stop(now + 0.12);
  }

  _playSuccess(now) {
    const osc = this.ctx.createOscillator();
    const gain = this._createGain(now, 0.2, 0.6);
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(523.25, now);
    osc.frequency.setValueAtTime(783.99, now + 0.09);
    osc.connect(gain);
    osc.start(now);
    osc.stop(now + 0.2);
  }

  _playLaser(now) {
    const osc = this.ctx.createOscillator();
    const gain = this._createGain(now, 0.15, 0.7);
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(1800, now);
    osc.frequency.exponentialRampToValueAtTime(120, now + 0.15);
    osc.connect(gain);
    osc.start(now);
    osc.stop(now + 0.15);
  }

  _playFire(now) {
    // Deep sizzle & rising combustion
    const osc = this.ctx.createOscillator();
    const gain = this._createGain(now, 0.22, 0.8);
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(180, now);
    osc.frequency.linearRampToValueAtTime(620, now + 0.12);
    osc.frequency.exponentialRampToValueAtTime(80, now + 0.22);
    osc.connect(gain);
    osc.start(now);
    osc.stop(now + 0.22);
  }

  _playZap(now) {
    // High-voltage electric arc
    [1200, 1800, 2400].forEach((freq, idx) => {
      const startTime = now + (idx * 0.03);
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.001, startTime);
      gain.gain.exponentialRampToValueAtTime(this.volume * 0.7, startTime + 0.005);
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.08);
      gain.connect(this.ctx.destination);

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, startTime);
      osc.frequency.linearRampToValueAtTime(freq / 2, startTime + 0.08);
      osc.connect(gain);
      osc.start(startTime);
      osc.stop(startTime + 0.08);
    });
  }

  _playCrown(now) {
    // Majestic victory chord
    [523.25, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
      const startTime = now + (idx * 0.04);
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.001, startTime);
      gain.gain.exponentialRampToValueAtTime(this.volume * 0.6, startTime + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.25);
      gain.connect(this.ctx.destination);

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, startTime);
      osc.connect(gain);
      osc.start(startTime);
      osc.stop(startTime + 0.25);
    });
  }

  _playTarget(now) {
    // Metallic sniper bullseye ding
    const osc = this.ctx.createOscillator();
    const gain = this._createGain(now, 0.2, 0.9);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(1760, now); // A6
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.2);
    osc.connect(gain);
    osc.start(now);
    osc.stop(now + 0.2);
  }

  _playHeart(now) {
    // Warm soft pulse chime
    const osc = this.ctx.createOscillator();
    const gain = this._createGain(now, 0.18, 0.6);
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(440, now);
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.1);
    osc.connect(gain);
    osc.start(now);
    osc.stop(now + 0.18);
  }

  _playWhoosh(now) {
    // Sci-fi spatial sweep
    const osc = this.ctx.createOscillator();
    const gain = this._createGain(now, 0.18, 0.45);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(300, now);
    osc.frequency.exponentialRampToValueAtTime(1400, now + 0.09);
    osc.frequency.exponentialRampToValueAtTime(200, now + 0.18);
    osc.connect(gain);
    osc.start(now);
    osc.stop(now + 0.18);
  }

  _playSparkle(now) {
    // Cascading crystals for XP reward
    [1046.5, 1318.51, 1567.98, 2093.0].forEach((freq, idx) => {
      const startTime = now + (idx * 0.04);
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.001, startTime);
      gain.gain.exponentialRampToValueAtTime(this.volume * 0.5, startTime + 0.005);
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.15);
      gain.connect(this.ctx.destination);

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, startTime);
      osc.connect(gain);
      osc.start(startTime);
      osc.stop(startTime + 0.15);
    });
  }

  _playGlitch(now) {
    // Digital glitch bit-crush
    const osc = this.ctx.createOscillator();
    const gain = this._createGain(now, 0.1, 0.7);
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(2200, now);
    osc.frequency.setValueAtTime(350, now + 0.03);
    osc.frequency.setValueAtTime(1800, now + 0.06);
    osc.connect(gain);
    osc.start(now);
    osc.stop(now + 0.1);
  }
}

export const sound = new SoundSynthesizer();
