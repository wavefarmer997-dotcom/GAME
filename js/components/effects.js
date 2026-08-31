/**
 * NEXUS GAMING TH - Minimal, Calm & High-Performance FX Engine
 */

import { sound } from '../audio.js';

export function initGlobalEffects() {
  // Clean, no continuous or intrusive click sparks
}

export function createSparksBurst(x, y, count = 3, colors = ['#00e5ff', '#a855f7']) {
  // Minimal burst
}

export function initCard3DTilt() {
  // Minimal CSS
}

/**
 * Confetti & Victory Particles (Subtle & Quick)
 */
export function triggerConfetti(originX = window.innerWidth / 2, originY = window.innerHeight / 2, count = 8) {
  const colors = ['#00e5ff', '#ff0080', '#a855f7', '#00ff88', '#ffd700'];
  sound.play('sparkle');

  for (let i = 0; i < count; i++) {
    const piece = document.createElement('div');
    piece.className = 'fx-confetti-particle';
    const color = colors[i % colors.length];
    const sizeW = 5;
    const sizeH = 6;
    const angle = (Math.PI * 2 * i) / count;
    const velocity = Math.random() * 80 + 40;
    const destX = Math.cos(angle) * velocity;
    const destY = Math.sin(angle) * velocity - 20;

    piece.style.left = `${originX}px`;
    piece.style.top = `${originY}px`;
    piece.style.width = `${sizeW}px`;
    piece.style.height = `${sizeH}px`;
    piece.style.backgroundColor = color;
    piece.style.setProperty('--cx', `${destX}px`);
    piece.style.setProperty('--cy', `${destY}px`);

    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 600);
  }
}

/**
 * Clean & Elegant Level-Up Modal
 */
export function triggerLevelUpCelebration(user) {
  sound.play('levelUp');

  const modal = document.createElement('div');
  modal.className = 'modal-overlay active fx-levelup-modal-overlay';
  modal.innerHTML = `
    <div class="fx-levelup-card">
      <div class="fx-levelup-badge-icon" style="font-size: 3rem; margin-bottom: 6px;">👑</div>
      <div class="fx-levelup-title" style="font-size: 1.8rem; color: #ffd700;">LEVEL UP!</div>
      <div class="fx-levelup-level-num" style="font-size: 1.3rem; margin: 4px 0;">LEVEL ${user.level}</div>
      <div class="fx-levelup-rank" style="font-size: 0.95rem; color: var(--secondary);">${user.rankTitle || 'Mythic Challenger'}</div>
      <p class="fx-levelup-desc" style="font-size: 0.85rem; margin-top: 8px;">ยินดีด้วย! คุณได้รับพลังและสิทธิ์การเข้าถึงทัวร์นาเมนต์ระดับสูงขึ้น</p>
      <button class="btn btn-primary btn-sm" id="btn-claim-levelup" style="margin-top: 16px; width: 100%;">
        ⚡ ยืนยัน
      </button>
    </div>
  `;

  document.body.appendChild(modal);

  const claimBtn = modal.querySelector('#btn-claim-levelup');
  if (claimBtn) {
    claimBtn.addEventListener('click', () => {
      sound.play('click');
      modal.classList.remove('active');
      setTimeout(() => modal.remove(), 200);
    });
  }
}

/**
 * Global Toast Notification
 */
export function showToast(message, type = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

