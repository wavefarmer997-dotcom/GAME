/**
 * NEXUS GAMING TH - Real-time Voice Chat & Microphone Manager
 * Uses Web Audio API & MediaStream to capture real microphone input,
 * compute live speaking volume/frequencies, and render reactive gamer voice visualizers.
 */

import { store } from '../store.js';
import { sound } from '../audio.js';

export const INITIAL_VOICE_CHANNELS = [
  {
    id: 'vc-general',
    name: 'ห้องพูดคุยทั่วไป (Lounge Voice)',
    icon: '🔊',
    category: 'general',
    members: [
      { id: 'u-1', name: 'Agent_NeonX', avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=150&q=80', isSpeaking: false, isMuted: false, role: 'Radiant Duelist' },
      { id: 'u-2', name: 'Khaosan_Clutcher', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80', isSpeaking: true, isMuted: false, role: 'Tournament MVP' },
      { id: 'u-3', name: 'Valkyrie_TH', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80', isSpeaking: false, isMuted: true, role: 'Controller' }
    ]
  },
  {
    id: 'vc-valorant',
    name: 'Valorant Ranked #1 (Competitive)',
    icon: '🎯',
    category: 'valorant',
    members: [
      { id: 'u-4', name: 'Sova_ArrowKing', avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=150&q=80', isSpeaking: false, isMuted: false, role: 'Initiator' },
      { id: 'u-5', name: 'ShadowNinja', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80', isSpeaking: false, isMuted: false, role: 'Duelist' }
    ]
  },
  {
    id: 'vc-raid',
    name: 'Raid Party (Wukong & MMO Boss)',
    icon: '⚔️',
    category: 'mmo',
    members: [
      { id: 'u-6', name: 'Destiny_Hunter', avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80', isSpeaking: true, isMuted: false, role: 'Raid Lead' }
    ]
  },
  {
    id: 'vc-chill',
    name: 'Gamer Chill & Music Talk',
    icon: '☕',
    category: 'general',
    members: [
      { id: 'u-7', name: 'CyberDJ', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80', isSpeaking: false, isMuted: false, role: 'Audio Streamer' }
    ]
  }
];

class VoiceChatManager {
  constructor() {
    this.STORAGE_KEY = 'NEXUS_VOICE_CHANNELS_V1';
    this.channels = this._loadChannels();

    this.state = {
      connected: false,
      channelId: null,
      channelName: '',
      isMuted: false,
      isDeafened: false,
      isSpeaking: false,
      voiceLevel: 0,
      micPermission: 'prompt', // 'prompt' | 'granted' | 'denied' | 'simulated'
      members: []
    };

    this.mediaStream = null;
    this.audioContext = null;
    this.analyser = null;
    this.dataArray = null;
    this.animFrameId = null;
    this.botSpeakingInterval = null;
    this.listeners = new Set();
  }

  _loadChannels() {
    try {
      const saved = localStorage.getItem(this.STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return [...INITIAL_VOICE_CHANNELS];
  }

  _saveChannels() {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.channels));
    } catch (e) {}
  }

  addVoiceChannel({ name, icon, category, slots, topic }) {
    const newChannel = {
      id: `vc-custom-${Date.now()}`,
      name: name.trim(),
      icon: icon || '🔊',
      category: category || 'general',
      slots: slots || 5,
      topic: topic || '',
      isCustom: true,
      createdBy: store.state.user.name,
      members: []
    };

    this.channels.unshift(newChannel);
    this._saveChannels();
    this._notify();
    return newChannel;
  }

  deleteVoiceChannel(channelId) {
    this.channels = this.channels.filter(c => c.id !== channelId);
    this._saveChannels();
    if (this.state.channelId === channelId) {
      this.disconnect();
    }
    this._notify();
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  _notify() {
    this.listeners.forEach(fn => fn(this.state));
  }

  async connect(channelId) {
    const channel = this.channels.find(c => c.id === channelId) || this.channels[0];
    sound.play('join');

    const currentUser = store.state.user;
    const initialMembers = [
      {
        id: 'me',
        name: currentUser.name || 'Gamer (คุณ)',
        avatar: currentUser.avatar,
        isSpeaking: false,
        isMuted: this.state.isMuted,
        isMe: true,
        role: currentUser.rankTitle || 'Player'
      },
      ...channel.members.map(m => ({ ...m }))
    ];

    this.state.connected = true;
    this.state.channelId = channel.id;
    this.state.channelName = channel.name;
    this.state.members = initialMembers;
    this._notify();

    // Start Microphone Capture
    await this.initMicrophone();

    // Start Bot Speaking Simulator (Makes the room feel alive!)
    this.startBotSpeakingLoop();

    // Render / Update Floating Dock
    this.updateFloatingVoiceDock();
  }

  async initMicrophone() {
    try {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: {
            echoCancellation: true,
            noiseSuppression: true,
            autoGainControl: true
          }
        });

        this.mediaStream = stream;
        this.state.micPermission = 'granted';

        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
          this.audioContext = new AudioContext();
          const source = this.audioContext.createMediaStreamSource(stream);
          this.analyser = this.audioContext.createAnalyser();
          this.analyser.fftSize = 64;
          this.analyser.smoothingTimeConstant = 0.6;
          source.connect(this.analyser);

          this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
          this.startVoiceAnalysis();
        }
      } else {
        this.state.micPermission = 'simulated';
        this.startSimulatedVoiceAnalysis();
      }
    } catch (err) {
      console.warn('Microphone access not granted or unavailable, falling back to simulated voice meter:', err);
      this.state.micPermission = 'simulated';
      this.startSimulatedVoiceAnalysis();
    }
    this._notify();
  }

  startVoiceAnalysis() {
    if (this.animFrameId) {
      clearInterval(this.animFrameId);
      this.animFrameId = null;
    }

    this.animFrameId = setInterval(() => {
      if (!this.state.connected) {
        clearInterval(this.animFrameId);
        return;
      }

      if (this.analyser && !this.state.isMuted) {
        this.analyser.getByteFrequencyData(this.dataArray);
        let sum = 0;
        for (let i = 0; i < this.dataArray.length; i++) {
          sum += this.dataArray[i];
        }
        const avg = sum / this.dataArray.length;
        const normalized = Math.min(100, Math.round((avg / 255) * 100 * 2.2));
        this.state.voiceLevel = normalized;

        const isSpeaking = normalized > 14;
        if (this.state.isSpeaking !== isSpeaking) {
          this.state.isSpeaking = isSpeaking;
          const me = this.state.members.find(m => m.isMe);
          if (me) me.isSpeaking = isSpeaking;
          this._notify();
        }

        // Live meter update in DOM if present
        const meterBar = document.getElementById('voice-live-meter-fill');
        if (meterBar) {
          meterBar.style.width = `${normalized}%`;
          meterBar.style.backgroundColor = isSpeaking ? '#00ff88' : 'var(--primary)';
        }
      } else {
        this.state.voiceLevel = 0;
        this.state.isSpeaking = false;
      }
    }, 60);
  }

  startSimulatedVoiceAnalysis() {
    // When real mic is not allowed/available, allows testing with simulated input
    if (this.animFrameId) cancelAnimationFrame(this.animFrameId);

    const checkLevel = () => {
      if (!this.state.connected) return;

      if (!this.state.isMuted) {
        // Random micro variations to show living meter
        const randomActive = Math.random() > 0.65;
        const level = randomActive ? Math.floor(Math.random() * 55 + 25) : Math.floor(Math.random() * 8);
        this.state.voiceLevel = level;

        const isSpeaking = level > 20;
        if (this.state.isSpeaking !== isSpeaking) {
          this.state.isSpeaking = isSpeaking;
          const me = this.state.members.find(m => m.isMe);
          if (me) me.isSpeaking = isSpeaking;
          this._notify();
        }

        const meterBar = document.getElementById('voice-live-meter-fill');
        if (meterBar) {
          meterBar.style.width = `${level}%`;
          meterBar.style.backgroundColor = isSpeaking ? '#00ff88' : 'var(--primary)';
        }
      } else {
        this.state.voiceLevel = 0;
        this.state.isSpeaking = false;
      }

      this.animFrameId = setTimeout(() => requestAnimationFrame(checkLevel), 120);
    };

    requestAnimationFrame(checkLevel);
  }

  startBotSpeakingLoop() {
    if (this.botSpeakingInterval) clearInterval(this.botSpeakingInterval);

    this.botSpeakingInterval = setInterval(() => {
      if (!this.state.connected) return;

      const otherMembers = this.state.members.filter(m => !m.isMe && !m.isMuted);
      if (otherMembers.length > 0) {
        const target = otherMembers[Math.floor(Math.random() * otherMembers.length)];
        target.isSpeaking = true;
        this._notify();

        setTimeout(() => {
          if (target) {
            target.isSpeaking = false;
            this._notify();
          }
        }, 1800 + Math.random() * 1600);
      }
    }, 4500);
  }

  toggleMute() {
    this.state.isMuted = !this.state.isMuted;
    sound.play(this.state.isMuted ? 'click' : 'laser');

    if (this.mediaStream) {
      this.mediaStream.getAudioTracks().forEach(track => {
        track.enabled = !this.state.isMuted;
      });
    }

    const me = this.state.members.find(m => m.isMe);
    if (me) {
      me.isMuted = this.state.isMuted;
      if (this.state.isMuted) me.isSpeaking = false;
    }

    this._notify();
    this.updateFloatingVoiceDock();
  }

  toggleDeafen() {
    this.state.isDeafened = !this.state.isDeafened;
    sound.play('click');

    // If deafened, automatically mute mic too
    if (this.state.isDeafened && !this.state.isMuted) {
      this.toggleMute();
    }

    this._notify();
    this.updateFloatingVoiceDock();
  }

  disconnect() {
    sound.play('tab');
    this.state.connected = false;
    this.state.channelId = null;
    this.state.channelName = '';
    this.state.members = [];
    this.state.isSpeaking = false;
    this.state.voiceLevel = 0;

    if (this.mediaStream) {
      this.mediaStream.getTracks().forEach(t => t.stop());
      this.mediaStream = null;
    }
    if (this.audioContext && this.audioContext.state !== 'closed') {
      this.audioContext.close().catch(() => {});
      this.audioContext = null;
    }
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
      clearTimeout(this.animFrameId);
    }
    if (this.botSpeakingInterval) {
      clearInterval(this.botSpeakingInterval);
    }

    this._notify();
    this.updateFloatingVoiceDock();
  }

  playVoiceSoundboard(soundType) {
    sound.play(soundType);
    // Flash speaking for user when playing soundboard
    const me = this.state.members.find(m => m.isMe);
    if (me) {
      me.isSpeaking = true;
      this._notify();
      setTimeout(() => {
        if (me && !this.state.isSpeaking) {
          me.isSpeaking = false;
          this._notify();
        }
      }, 1000);
    }
  }

  updateFloatingVoiceDock() {
    let dock = document.getElementById('nexus-floating-voice-dock');
    if (!this.state.connected) {
      if (dock) dock.style.display = 'none';
      return;
    }

    if (!dock) {
      dock = document.createElement('div');
      dock.id = 'nexus-floating-voice-dock';
      dock.className = 'voice-dock-widget animate-float';
      document.body.appendChild(dock);
    }

    dock.style.display = 'flex';
    dock.innerHTML = `
      <div class="voice-dock-info" id="btn-dock-open-lounge">
        <div class="voice-dock-ping">
          <span class="ping-dot"></span>
          <span class="ping-text">Voice Connected</span>
        </div>
        <div class="voice-dock-channel-title">
          🔊 ${this.state.channelName}
        </div>
        <div class="voice-dock-members-preview">
          ${this.state.members.map(m => `
            <img src="${m.avatar}" alt="${m.name}" class="dock-member-mini-avatar ${m.isSpeaking ? 'speaking' : ''}" title="${m.name} ${m.isSpeaking ? '(กำลังพูด)' : ''}">
          `).join('')}
        </div>
      </div>
      <div class="voice-dock-actions">
        <button class="btn-dock-voice-ctrl ${this.state.isMuted ? 'muted' : ''}" id="btn-dock-mute" title="${this.state.isMuted ? 'เปิดไมค์' : 'ปิดไมค์'}">
          ${this.state.isMuted ? '🔇' : '🎙️'}
        </button>
        <button class="btn-dock-voice-ctrl ${this.state.isDeafened ? 'deafened' : ''}" id="btn-dock-deafen" title="${this.state.isDeafened ? 'เปิดหูฟัง' : 'ปิดเสียงหูฟัง'}">
          ${this.state.isDeafened ? '🔕' : '🎧'}
        </button>
        <button class="btn-dock-voice-ctrl disconnect" id="btn-dock-disconnect" title="ตัดการเชื่อมต่อ">
          🔴
        </button>
      </div>
    `;

    // Dock event listeners
    const openLounge = dock.querySelector('#btn-dock-open-lounge');
    if (openLounge) {
      openLounge.addEventListener('click', () => {
        sound.play('click');
        store.setTab('chat');
      });
    }

    const muteBtn = dock.querySelector('#btn-dock-mute');
    if (muteBtn) {
      muteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggleMute();
      });
    }

    const deafenBtn = dock.querySelector('#btn-dock-deafen');
    if (deafenBtn) {
      deafenBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggleDeafen();
      });
    }

    const discBtn = dock.querySelector('#btn-dock-disconnect');
    if (discBtn) {
      discBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.disconnect();
      });
    }
  }
}

export const voiceManager = new VoiceChatManager();
