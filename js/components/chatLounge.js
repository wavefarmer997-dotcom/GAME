/**
 * NEXUS GAMING TH - Live Gamer Lounge, Real-time Chat & Voice Rooms with Microphone
 */

import { store } from '../store.js';
import { sound } from '../audio.js';
import { voiceManager } from './voiceChat.js';
import { openPlayerProfile } from './profileModal.js';

let currentTextChannel = 'general';
let currentViewMode = 'text'; // 'text' | 'voice'

const BASE_TEXT_CHANNELS = [
  { id: 'general', name: 'พูดคุยทั่วไป', icon: '💬' },
  { id: 'valorant', name: 'valorant-th', icon: '🎯' },
  { id: 'genshin', name: 'genshin-impact', icon: '🌸' },
  { id: 'party', name: 'ชวนตี้ด่วน', icon: '🤝' },
  { id: 'memes', name: 'มีม & ไฮไลท์', icon: '🎭' }
];

function getCustomTextChannels() {
  try {
    const saved = localStorage.getItem('NEXUS_CUSTOM_TEXT_CHANNELS');
    if (saved) return JSON.parse(saved);
  } catch (e) {}
  return [];
}

function saveCustomTextChannels(channels) {
  try {
    localStorage.setItem('NEXUS_CUSTOM_TEXT_CHANNELS', JSON.stringify(channels));
  } catch (e) {}
}

export function addCustomTextChannel({ name, icon, category, topic }) {
  const custom = getCustomTextChannels();
  const newChan = {
    id: `txt-custom-${Date.now()}`,
    name: name.trim(),
    icon: icon || '💬',
    category: category || 'general',
    topic: topic || '',
    isCustom: true,
    createdBy: store.state.user.name
  };
  custom.unshift(newChan);
  saveCustomTextChannels(custom);
  return newChan;
}

export function deleteCustomTextChannel(channelId) {
  let custom = getCustomTextChannels();
  custom = custom.filter(c => c.id !== channelId);
  saveCustomTextChannels(custom);
  if (currentTextChannel === channelId) {
    currentTextChannel = 'general';
  }
}

export function renderChatLounge(container) {
  if (!container) return;

  const { chatMessages, user } = store.state;
  const filteredMessages = chatMessages.filter(m => m.channel === currentTextChannel);
  const isVoiceConnected = voiceManager.state.connected;
  const customTextChannels = getCustomTextChannels();
  const allTextChannels = [...BASE_TEXT_CHANNELS, ...customTextChannels];
  const allVoiceChannels = voiceManager.channels;

  container.innerHTML = `
    <div class="chat-lounge-container">
      <!-- Channels Sidebar -->
      <div class="chat-channels-sidebar">
        <!-- Top Create Channel Action -->
        <div class="channels-header-action-row">
          <span class="channels-super-title">🕹️ GAMER CHANNELS</span>
          <button class="btn btn-primary btn-xs" id="btn-open-create-channel" title="สร้างห้องพูดคุยหรือห้องเสียงใหม่">
            ➕ สร้างห้อง
          </button>
        </div>

        <!-- Text Channels Section -->
        <div class="channels-section-title">
          <span>💬 ช่องข้อความ (#TEXT)</span>
        </div>
        ${allTextChannels.map(ch => `
          <div class="channel-btn-row">
            <button class="channel-btn ${currentViewMode === 'text' && currentTextChannel === ch.id ? 'active' : ''}" data-type="text" data-channel="${ch.id}">
              <span>${ch.icon} # ${ch.name}</span>
            </button>
            ${ch.isCustom ? `
              <button class="btn-delete-channel" data-del-type="text" data-del-id="${ch.id}" title="ลบห้องนี้">&times;</button>
            ` : ''}
          </div>
        `).join('')}

        <!-- Voice Channels Section -->
        <div class="channels-section-title" style="margin-top: 18px;">
          <span>🔊 ห้องเสียง & เปิดไมค์ (#VOICE)</span>
        </div>
        ${allVoiceChannels.map(vc => {
          const isThisActive = isVoiceConnected && voiceManager.state.channelId === vc.id;
          return `
            <div class="channel-btn-row">
              <button class="channel-btn voice-channel-btn ${isThisActive ? 'active-voice' : ''}" data-type="voice" data-vc-id="${vc.id}">
                <div class="voice-btn-inner">
                  <span>${vc.icon} ${vc.name}</span>
                  <span class="voice-active-badge ${isThisActive ? 'live' : ''}">
                    ${isThisActive ? '🟢 ในห้อง' : `👥 ${vc.members ? vc.members.length : 0}`}
                  </span>
                </div>
              </button>
              ${vc.isCustom ? `
                <button class="btn-delete-channel" data-del-type="voice" data-del-id="${vc.id}" title="ลบห้องเสียงนี้">&times;</button>
              ` : ''}
            </div>
          `;
        }).join('')}

        <!-- Bottom User Voice Status Strip -->
        <div class="voice-user-status-strip">
          <div class="user-avatar-mini-wrap">
            <img src="${user.avatar}" alt="${user.name}" class="voice-strip-avatar ${isVoiceConnected && voiceManager.state.isSpeaking ? 'speaking-ring' : ''}">
            <span class="user-status-dot online"></span>
          </div>
          <div class="voice-strip-user-info">
            <div class="voice-strip-name">${user.name}</div>
            <div class="voice-strip-sub">${isVoiceConnected ? `🔊 ${voiceManager.state.channelName.substring(0, 16)}...` : '🟢 สแตนด์บาย'}</div>
          </div>
          <div class="voice-strip-actions">
            <button class="btn-strip-ctrl ${voiceManager.state.isMuted ? 'muted' : ''}" id="btn-strip-mute" title="${voiceManager.state.isMuted ? 'เปิดไมค์' : 'ปิดไมค์'}">
              ${voiceManager.state.isMuted ? '🔇' : '🎙️'}
            </button>
            <button class="btn-strip-ctrl ${voiceManager.state.isDeafened ? 'deafened' : ''}" id="btn-strip-deafen" title="${voiceManager.state.isDeafened ? 'เปิดเสียงหูฟัง' : 'ปิดเสียงหูฟัง'}">
              ${voiceManager.state.isDeafened ? '🔕' : '🎧'}
            </button>
          </div>
        </div>
      </div>

      <!-- Main Area: Either Voice Room Stage or Text Chat Stream -->
      <div class="chat-main-area" id="chat-main-viewport">
        ${currentViewMode === 'voice' && isVoiceConnected ? renderVoiceRoomHTML() : renderTextChatHTML(filteredMessages)}
      </div>
    </div>
  `;

  // Bind Event Listeners
  bindLoungeEvents(container);

  // Subscribe to voice changes so UI updates live
  voiceManager.subscribe(() => {
    const isVoice = currentViewMode === 'voice' && voiceManager.state.connected;
    if (isVoice) {
      const mainView = container.querySelector('#chat-main-viewport');
      if (mainView) mainView.innerHTML = renderVoiceRoomHTML();
      bindVoiceRoomControls(container);
    }
  });
}

function renderTextChatHTML(filteredMessages) {
  return `
    <div class="chat-header-bar">
      <div class="chat-header-title">
        <span>💬 # ${getChannelTitle(currentTextChannel)}</span>
        <span class="badge-pill" style="font-size: 0.75rem; background: rgba(var(--primary-rgb), 0.2); color: var(--primary); padding: 2px 8px; border-radius: 9999px;">
          Live Chat
        </span>
      </div>
      <div class="chat-header-right-actions">
        ${voiceManager.state.connected ? `
          <button class="btn btn-sm btn-outline" id="btn-switch-to-voice" style="border-color: #00ff88; color: #00ff88;">
            🔊 กลับเข้าห้องเสียง (${voiceManager.state.channelName.substring(0, 12)}...)
          </button>
        ` : `
          <button class="btn btn-sm btn-primary" id="btn-quick-join-voice">
            🎙️ เข้าร่วมห้องพูดคุยเสียง
          </button>
        `}
      </div>
    </div>

    <div class="chat-messages-scroll" id="chat-stream-box">
      ${filteredMessages.length ? filteredMessages.map(msg => `
        <div class="chat-message-row">
          <img src="${msg.user.avatar}" alt="${msg.user.name}" class="chat-user-avatar btn-chat-user-profile" data-username="${msg.user.name}" title="คลิกดูโปรไฟล์ / เพิ่มเพื่อน" style="cursor: pointer;">
          <div class="chat-bubble-wrap">
            <div class="chat-meta">
              <span class="chat-user-name btn-chat-user-profile" data-username="${msg.user.name}" title="คลิกดูโปรไฟล์ / เพิ่มเพื่อน" style="color: ${msg.user.roleColor || '#fff'}; cursor: pointer;">${msg.user.name}</span>
              <span class="chat-user-badge" style="background: rgba(255,255,255,0.08); color: ${msg.user.roleColor || 'var(--text-secondary)'};">
                ${msg.user.badge || 'Member'}
              </span>
              <span class="chat-time">${msg.time}</span>
            </div>
            <div class="chat-text-content">
              ${msg.text}
            </div>
          </div>
        </div>
      `).join('') : '<p style="text-align: center; color: var(--text-muted); padding: 40px;">ห้องนี้ยังไม่มีข้อความ เริ่มต้นคุยกันได้เลย!</p>'}
    </div>

    <!-- Input Row -->
    <form class="chat-input-container" id="chat-send-form">
      <button type="button" class="chat-emoji-btn" id="btn-quick-emoji" title="ใส่อีโมจิ">😄</button>
      <input type="text" class="chat-input-box" id="chat-msg-input" placeholder="พิมพ์ข้อความส่งใน #${getChannelTitle(currentTextChannel)}... (กด Enter เพื่อส่ง)" autocomplete="off" required>
      <button type="submit" class="btn btn-primary btn-sm">ส่งข้อความ 🚀</button>
    </form>
  `;
}

function renderVoiceRoomHTML() {
  const { channelName, members, isMuted, isDeafened, isSpeaking } = voiceManager.state;

  return `
    <div class="voice-room-stage">
      <!-- Voice Header -->
      <div class="voice-room-header">
        <div>
          <div class="voice-room-title">
            <span>🔊 ${channelName}</span>
            <span class="voice-status-pill-live">
              <span class="pulse-dot-green"></span>
              เชื่อมต่อไมค์สดแล้ว (18ms • Ping ปกติ)
            </span>
          </div>
          <div class="voice-room-sub">สมาชิกในห้อง: ${members.length} คน • ระบบตรวจจับเสียงพูดแบบเรียลไทม์</div>
        </div>

        <div class="voice-header-actions">
          <button class="btn btn-outline btn-sm" id="btn-voice-switch-text">
            💬 ดูช่องข้อความ
          </button>
          <button class="btn btn-danger btn-sm" id="btn-voice-disconnect-room">
            🔴 ออกจากห้อง
          </button>
        </div>
      </div>

      <!-- Soundboard Memes -->
      <div class="voice-soundboard-bar">
        <span class="soundboard-label">🔊 Soundboard:</span>
        <button class="btn-soundboard-chip" data-snd="fire">🔥 ไฟลุก!</button>
        <button class="btn-soundboard-chip" data-snd="crown">👑 GG Victory!</button>
        <button class="btn-soundboard-chip" data-snd="laser">⚡ Laser Beam!</button>
        <button class="btn-soundboard-chip" data-snd="target">🎯 Nice Shot!</button>
        <button class="btn-soundboard-chip" data-snd="heart">❤️ ส่งใจ</button>
        <button class="btn-soundboard-chip" data-snd="glitch">👾 Cyber Glitch</button>
      </div>

      <!-- Voice Members Grid Stage -->
      <div class="voice-members-grid">
        ${members.map(member => {
          const isMemberSpeaking = member.isSpeaking;
          return `
            <div class="voice-member-card ${isMemberSpeaking ? 'speaking-active' : ''} ${member.isMuted ? 'muted' : ''}">
              <div class="voice-member-avatar-wrap">
                <img src="${member.avatar}" alt="${member.name}" class="voice-member-avatar">
                ${isMemberSpeaking ? `
                  <div class="voice-wave-bars">
                    <span class="voice-wave-bar"></span>
                    <span class="voice-wave-bar"></span>
                    <span class="voice-wave-bar"></span>
                    <span class="voice-wave-bar"></span>
                    <span class="voice-wave-bar"></span>
                  </div>
                ` : ''}
                <div class="voice-status-icon-badge ${member.isMuted ? 'muted' : (isMemberSpeaking ? 'speaking' : '')}">
                  ${member.isMuted ? '🔇' : (isMemberSpeaking ? '🎙️' : '🎙️')}
                </div>
              </div>

              <div class="voice-member-info">
                <div class="voice-member-name">
                  ${member.name} ${member.isMe ? '<span class="you-badge">(คุณ)</span>' : ''}
                </div>
                <div class="voice-member-role">${member.role || 'Gamer'}</div>
              </div>

              <div class="voice-member-status-label">
                ${member.isMuted ? '🔇 ปิดไมโครโฟน' : (isMemberSpeaking ? '🟢 กำลังพูด...' : '🎙️ ไมค์พร้อม')}
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <!-- Bottom Voice Controls Panel -->
      <div class="voice-bottom-controls-bar">
        <!-- Live Microphone Sensitivity Level Meter -->
        <div class="voice-live-meter-wrap">
          <div class="meter-label">
            <span>🎙️ ระดับเสียงไมค์สด (Live Mic Level):</span>
            <span id="voice-level-txt">${isMuted ? 'Muted' : (isSpeaking ? 'Speaking' : 'Ready')}</span>
          </div>
          <div class="voice-live-meter-track">
            <div class="voice-live-meter-fill" id="voice-live-meter-fill" style="width: ${voiceManager.state.voiceLevel}%;"></div>
          </div>
        </div>

        <!-- Voice Room Output Volume Slider -->
        <div class="voice-output-vol-wrap">
          <div class="meter-label">
            <span>🔊 ระดับเสียงห้อง (Output):</span>
            <span id="voice-output-vol-label" style="font-family: var(--font-mono); color: var(--primary); font-weight: 700;">${sound.getVolume()}%</span>
          </div>
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 0.8rem;">🔈</span>
            <input type="range" min="0" max="100" value="${sound.getVolume()}" class="voice-vol-slider" id="voice-room-volume-slider" title="ปรับระดับเสียงห้องพูดคุย">
            <span style="font-size: 0.8rem;">🔊</span>
          </div>
        </div>

        <!-- Big Voice Action Buttons -->
        <div class="voice-main-actions">
          <button class="btn-voice-round ${isMuted ? 'active-mute' : ''}" id="btn-main-toggle-mute" title="${isMuted ? 'เปิดไมโครโฟน' : 'ปิดไมโครโฟน'}">
            <span class="btn-icon">${isMuted ? '🔇' : '🎙️'}</span>
            <span class="btn-label">${isMuted ? 'เปิดไมค์' : 'ปิดไมค์'}</span>
          </button>

          <button class="btn-voice-round ${isDeafened ? 'active-deafen' : ''}" id="btn-main-toggle-deafen" title="${isDeafened ? 'เปิดเสียงห้อง' : 'ปิดเสียงหูฟัง'}">
            <span class="btn-icon">${isDeafened ? '🔕' : '🎧'}</span>
            <span class="btn-label">${isDeafened ? 'เปิดหูฟัง' : 'ปิดเสียง'}</span>
          </button>

          <button class="btn-voice-round disconnect" id="btn-main-disconnect" title="ออกจากห้องเสียง">
            <span class="btn-icon">🔴</span>
            <span class="btn-label">ตัดสาย</span>
          </button>
        </div>
      </div>
    </div>
  `;
}

function bindLoungeEvents(container) {
  // Open Create Channel Modal
  const createChanBtn = container.querySelector('#btn-open-create-channel');
  if (createChanBtn) {
    createChanBtn.addEventListener('click', () => {
      sound.play('click');
      document.getElementById('modal-create-channel')?.classList.add('active');
    });
  }

  // Delete Custom Channels
  container.querySelectorAll('.btn-delete-channel').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const type = btn.dataset.delType;
      const id = btn.dataset.delId;
      if (confirm('คุณต้องการลบห้องพูดคุยนี้ใช่หรือไม่?')) {
        sound.play('click');
        if (type === 'text') {
          deleteCustomTextChannel(id);
        } else {
          voiceManager.deleteVoiceChannel(id);
        }
        renderChatLounge(container);
      }
    });
  });

  // Auto scroll chat to bottom
  const scrollBox = container.querySelector('#chat-stream-box');
  if (scrollBox) {
    scrollBox.scrollTop = scrollBox.scrollHeight;
  }

  // Switch Text Channels
  container.querySelectorAll('.channel-btn[data-type="text"]').forEach(btn => {
    btn.addEventListener('click', () => {
      currentTextChannel = btn.dataset.channel;
      currentViewMode = 'text';
      sound.play('tab');
      renderChatLounge(container);
    });
  });

  // Switch Voice Channels
  container.querySelectorAll('.channel-btn[data-type="voice"]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const vcId = btn.dataset.vcId;
      await voiceManager.connect(vcId);
      currentViewMode = 'voice';
      renderChatLounge(container);
    });
  });

  // Quick Join Voice button in text chat header
  const quickJoin = container.querySelector('#btn-quick-join-voice');
  if (quickJoin) {
    quickJoin.addEventListener('click', async () => {
      await voiceManager.connect('vc-general');
      currentViewMode = 'voice';
      renderChatLounge(container);
    });
  }

  const switchToVoice = container.querySelector('#btn-switch-to-voice');
  if (switchToVoice) {
    switchToVoice.addEventListener('click', () => {
      currentViewMode = 'voice';
      sound.play('tab');
      renderChatLounge(container);
    });
  }

  // Bottom strip mute / deafen
  const stripMute = container.querySelector('#btn-strip-mute');
  if (stripMute) {
    stripMute.addEventListener('click', () => {
      voiceManager.toggleMute();
      renderChatLounge(container);
    });
  }

  const stripDeafen = container.querySelector('#btn-strip-deafen');
  if (stripDeafen) {
    stripDeafen.addEventListener('click', () => {
      voiceManager.toggleDeafen();
      renderChatLounge(container);
    });
  }

  // Form submit for text chat
  const form = container.querySelector('#chat-send-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('#chat-msg-input');
      const text = input.value;
      if (!text.trim()) return;

      sound.play('message');
      store.sendChatMessage(text, currentTextChannel);
      input.value = '';

      // Simulated auto-response
      simulateGamerResponse(currentTextChannel);
    });
  }

  // Chat User Profile Triggers
  container.querySelectorAll('.btn-chat-user-profile').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const uname = trigger.dataset.username;
      sound.play('click');
      openPlayerProfile(uname);
    });
  });

  // If in voice mode, bind voice room controls
  if (currentViewMode === 'voice') {
    bindVoiceRoomControls(container);
  }
}

function bindVoiceRoomControls(container) {
  const btnSwitchText = container.querySelector('#btn-voice-switch-text');
  if (btnSwitchText) {
    btnSwitchText.addEventListener('click', () => {
      currentViewMode = 'text';
      sound.play('tab');
      renderChatLounge(container);
    });
  }

  const btnDiscRoom = container.querySelector('#btn-voice-disconnect-room');
  if (btnDiscRoom) {
    btnDiscRoom.addEventListener('click', () => {
      voiceManager.disconnect();
      currentViewMode = 'text';
      renderChatLounge(container);
    });
  }

  const btnToggleMute = container.querySelector('#btn-main-toggle-mute');
  if (btnToggleMute) {
    btnToggleMute.addEventListener('click', () => {
      voiceManager.toggleMute();
      renderChatLounge(container);
    });
  }

  const btnToggleDeafen = container.querySelector('#btn-main-toggle-deafen');
  if (btnToggleDeafen) {
    btnToggleDeafen.addEventListener('click', () => {
      voiceManager.toggleDeafen();
      renderChatLounge(container);
    });
  }

  const btnMainDisc = container.querySelector('#btn-main-disconnect');
  if (btnMainDisc) {
    btnMainDisc.addEventListener('click', () => {
      voiceManager.disconnect();
      currentViewMode = 'text';
      renderChatLounge(container);
    });
  }

  // Voice Output Volume Slider
  const voiceVolSlider = container.querySelector('#voice-room-volume-slider');
  const voiceVolLabel = container.querySelector('#voice-output-vol-label');
  if (voiceVolSlider) {
    voiceVolSlider.addEventListener('input', (e) => {
      const val = parseInt(e.target.value, 10);
      sound.setVolume(val, false);
      if (voiceVolLabel) voiceVolLabel.textContent = `${val}%`;
    });
    voiceVolSlider.addEventListener('change', (e) => {
      const val = parseInt(e.target.value, 10);
      sound.setVolume(val, true);
    });
  }

  // Soundboard Buttons
  container.querySelectorAll('.btn-soundboard-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      const snd = btn.dataset.snd;
      voiceManager.playVoiceSoundboard(snd);
    });
  });
}

export function setActiveRoom(type, id) {
  if (type === 'voice') {
    currentViewMode = 'voice';
    voiceManager.connect(id);
  } else {
    currentViewMode = 'text';
    currentTextChannel = id;
  }
  const container = document.getElementById('chat-stream-container');
  if (container) renderChatLounge(container);
}

function simulateGamerResponse(channel) {
  const responses = {
    general: [
      { name: 'Agent_NeonX', avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=150&q=80', badge: 'Radiant', text: 'ยินดีต้อนรับทุกคนครับ! ใครอยากคุยเสียงกดเข้าห้องเสียงได้เลยนะ 🎙️' },
      { name: 'Khaosan_Clutcher', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80', badge: 'MVP', text: 'มาเปิดไมค์คุยในห้องเสียงได้นะ คุยเฮฮากันอยู่ 🔥' }
    ]
  };

  const pool = responses[channel] || responses.general;
  const pick = pool[Math.floor(Math.random() * pool.length)];

  setTimeout(() => {
    const time = new Date().toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' });
    store.state.chatMessages.push({
      id: `msg-${Date.now()}`,
      channel: channel,
      user: {
        name: pick.name,
        avatar: pick.avatar,
        badge: pick.badge,
        roleColor: 'var(--secondary)'
      },
      text: pick.text,
      time: time
    });
    store._saveState();
    sound.play('message');

    const container = document.getElementById('chat-stream-container');
    if (container && currentViewMode === 'text') {
      renderChatLounge(container);
    }
  }, 1600);
}

function getChannelTitle(ch) {
  const allText = [...BASE_TEXT_CHANNELS, ...getCustomTextChannels()];
  const found = allText.find(c => c.id === ch);
  return found ? found.name : ch;
}
