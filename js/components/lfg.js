/**
 * NEXUS GAMING TH - LFG & Squad Finder Component
 */

import { store } from '../store.js';
import { sound } from '../audio.js';
import { openPlayerProfile } from './profileModal.js';

export function renderLFG(container) {
  if (!container) return;

  const { squads, activeGameFilter, searchQuery, user } = store.state;

  const filtered = squads.filter(squad => {
    if (activeGameFilter !== 'all' && squad.gameId !== activeGameFilter) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = squad.title.toLowerCase().includes(q);
      const matchGame = squad.gameName.toLowerCase().includes(q);
      const matchMode = squad.mode.toLowerCase().includes(q);
      if (!matchTitle && !matchGame && !matchMode) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border-subtle);">
        <div style="font-size: 2.5rem; margin-bottom: 12px;">🛡️</div>
        <h3 style="font-size: 1.2rem; color: var(--text-highlight);">ยังไม่มีตี้ที่เปิดรับสมัครในหมวดหมู่นี้</h3>
        <p style="font-size: 0.9rem; color: var(--text-muted); margin: 6px 0 16px;">กดสร้างห้องหาตี้เพื่อรวบรวมเพื่อนร่วมทีมได้ทันที!</p>
        <button class="btn btn-primary btn-sm" id="btn-empty-create-squad">➕ สร้างตี้ใหม่</button>
      </div>
    `;

    const emptyBtn = container.querySelector('#btn-empty-create-squad');
    if (emptyBtn) {
      emptyBtn.addEventListener('click', () => {
        sound.play('click');
        document.getElementById('modal-create-squad')?.classList.add('active');
      });
    }
    return;
  }

  container.innerHTML = filtered.map(squad => {
    const isMember = squad.members.some(m => m.name === user.name);
    const isFull = squad.members.length >= squad.membersMax;
    const vacantSlots = squad.membersMax - squad.members.length;

    return `
      <div class="squad-card" data-squad-id="${squad.id}">
        <div>
          <div class="squad-top">
            <span class="squad-game-badge">🎮 ${squad.gameName}</span>
            <span class="squad-status-badge ${squad.status}">
              ${isFull ? '🔒 ตี้เต็มแล้ว' : `🟢 รับสมัคร (${squad.members.length}/${squad.membersMax})`}
            </span>
          </div>

          <h3 class="squad-title" style="margin: 12px 0 8px;">${squad.title}</h3>

          <div class="squad-meta-tags">
            <span class="squad-meta-item">🎯 ${squad.mode}</span>
            <span class="squad-meta-item">🏆 ${squad.rankRequired}</span>
            <span class="squad-meta-item">🌏 ${squad.server}</span>
            ${squad.micRequired ? '<span class="squad-meta-item" style="color: var(--accent);">🎙️ ต้องใช้ไมค์</span>' : ''}
          </div>
        </div>

        <!-- Slots Visualizer -->
        <div class="squad-slots-wrap">
          <div class="squad-slots-header">
            <span>สมาชิกในปาร์ตี้</span>
            <span>เหลืออีก <strong>${vacantSlots > 0 ? vacantSlots : 0}</strong> ที่</span>
          </div>

          <div class="squad-slots-avatars">
            ${squad.members.map(m => `
              <div class="slot-circle filled btn-lfg-member-profile" data-member-name="${m.name}" title="${m.name} (${m.role}) - คลิกดูโปรไฟล์ / เพิ่มเพื่อน" style="cursor: pointer;">
                <img src="${m.avatar}" alt="${m.name}">
              </div>
            `).join('')}

            ${Array.from({ length: Math.max(0, vacantSlots) }).map(() => `
              <div class="slot-circle" title="ตำแหน่งว่าง">
                +
              </div>
            `).join('')}
          </div>

          <div class="squad-roles-needed">
            <span>ตำแหน่งที่ต้องการ:</span>
            <strong>${squad.rolesNeeded.join(', ')}</strong>
          </div>
        </div>

        <!-- Actions -->
        <div class="squad-bottom-actions">
          <div style="font-size: 0.8rem; color: var(--text-muted);">
            หัวหน้าตี้: <span class="btn-lfg-member-profile" data-member-name="${squad.host.name}" style="color: var(--text-primary); font-weight: 600; cursor: pointer;" title="คลิกดูโปรไฟล์ / เพิ่มเพื่อน">${squad.host.name}</span>
          </div>

          <div style="display: flex; gap: 8px;">
            ${isMember ? `
              <button class="btn btn-primary btn-sm btn-squad-voice" data-squad-id="${squad.id}" title="เปิดไมค์คุยกับทีม">
                🎙️ เข้าห้องเสียงทีม
              </button>
              <button class="btn btn-secondary btn-sm btn-leave-squad" data-squad-id="${squad.id}" style="color: var(--accent);">
                ออกจากตี้
              </button>
            ` : `
              <button class="btn btn-primary btn-sm btn-join-squad" data-squad-id="${squad.id}" ${isFull ? 'disabled style="opacity: 0.5;"' : ''}>
                ${isFull ? 'ตี้เต็ม' : '⚡ ขอเข้าตี้'}
              </button>
            `}
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Voice button handler
  container.querySelectorAll('.btn-squad-voice').forEach(btn => {
    btn.addEventListener('click', async () => {
      sound.play('join');
      import('./voiceChat.js').then(async ({ voiceManager }) => {
        await voiceManager.connect('vc-raid');
        store.setTab('chat');
      });
    });
  });

  // Event handlers
  container.querySelectorAll('.btn-join-squad').forEach(btn => {
    btn.addEventListener('click', () => {
      const squadId = btn.dataset.squadId;
      const squad = squads.find(s => s.id === squadId);
      if (!squad) return;

      sound.play('click');

      // Prompt for role selection
      const modal = document.getElementById('modal-join-squad');
      if (modal) {
        modal.dataset.targetSquadId = squadId;
        const roleSelect = modal.querySelector('#join-squad-role-select');
        if (roleSelect) {
          roleSelect.innerHTML = squad.rolesNeeded.map(r => `<option value="${r}">${r}</option>`).join('') +
                                `<option value="Flex / Any Role">ตำแหน่งอะไรก็ได้ (Flex)</option>`;
        }
        modal.classList.add('active');
      }
    });
  });

  container.querySelectorAll('.btn-leave-squad').forEach(btn => {
    btn.addEventListener('click', () => {
      const squadId = btn.dataset.squadId;
      sound.play('click');
      store.leaveSquad(squadId);
      showToast('ออกจากตี้เรียบร้อยแล้ว', 'info');
    });
  });

  // Member profile triggers
  container.querySelectorAll('.btn-lfg-member-profile').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const memberName = btn.dataset.memberName;
      sound.play('click');
      openPlayerProfile(memberName);
    });
  });
}

function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 2600);
}
