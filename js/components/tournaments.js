/**
 * NEXUS GAMING TH - Tournaments & Bracket Component
 */

import { store } from '../store.js';
import { sound } from '../audio.js';

export function renderTournaments(container) {
  if (!container) return;

  const { tournaments } = store.state;

  container.innerHTML = tournaments.map(tour => {
    return `
      <div class="tour-featured-card" data-tour-id="${tour.id}">
        <img src="${tour.banner}" alt="${tour.title}" class="tour-banner-img">
        <div class="tour-banner-overlay"></div>

        <div class="tour-card-body">
          <div class="tour-header-info">
            <div>
              <span class="hero-badge" style="margin-bottom: 8px;">${tour.badge}</span>
              <h2 class="tour-title">${tour.title}</h2>
              <p style="color: var(--secondary); font-size: 0.95rem; margin-top: 4px;">🎮 เกม: ${tour.game}</p>
            </div>

            <div class="prize-pool-badge">
              🏆 ${tour.prizePool}
            </div>
          </div>

          <!-- Quick specs -->
          <div class="tour-details-grid">
            <div class="tour-detail-item">
              <h5>รูปแบบการแข่งขัน</h5>
              <p>${tour.format}</p>
            </div>
            <div class="tour-detail-item">
              <h5>ทีมที่ลงทะเบียน</h5>
              <p>${tour.teamsRegistered} / ${tour.teamsMax} ทีม</p>
            </div>
            <div class="tour-detail-item">
              <h5>วันเริ่มการแข่งขัน</h5>
              <p>${tour.startDate}</p>
            </div>
            <div class="tour-detail-item">
              <h5>สถานะ</h5>
              <p style="color: var(--success);">${tour.status === 'open' ? '🟢 เปิดรับสมัคร' : '⚔️ กำลังแข่งขัน'}</p>
            </div>
          </div>

          <div style="display: flex; gap: 12px; align-items: center; margin-bottom: 20px;">
            <button class="btn btn-primary btn-register-tour" data-tour-id="${tour.id}">
              📝 สมัครแข่งขัน (ฟรี)
            </button>
            <button class="btn btn-secondary btn-share-tour" data-title="${tour.title}">
              📢 ชวนเพื่อนร่วมทีม
            </button>
          </div>

          <!-- Interactive Tournament Bracket -->
          <div class="bracket-section">
            <h3 class="bracket-title">⚡ ผังสายการแข่งขันสด (Live Bracket Tree)</h3>
            <div class="bracket-rounds-wrap">
              ${tour.brackets && tour.brackets.length ? tour.brackets.map(round => `
                <div class="bracket-round-col">
                  <div class="round-name">${round.round}</div>
                  ${round.matches.map(match => `
                    <div class="match-card">
                      <div class="match-team ${match.winner === match.teamA ? 'winner' : ''}">
                        <span>${match.teamA}</span>
                        <span class="match-score">${match.scoreA}</span>
                      </div>
                      <div class="match-team ${match.winner === match.teamB ? 'winner' : ''}">
                        <span>${match.teamB}</span>
                        <span class="match-score">${match.scoreB}</span>
                      </div>
                      ${match.date ? `
                        <div style="font-size: 0.75rem; color: var(--warning); text-align: center; margin-top: 4px;">
                          ⏰ ถ่ายทอดสด: ${match.date}
                        </div>
                      ` : ''}
                    </div>
                  `).join('')}
                </div>
              `).join('') : '<p style="color: var(--text-muted);">กำลังจัดสายการแข่งขัน</p>'}
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Event Listeners
  container.querySelectorAll('.btn-register-tour').forEach(btn => {
    btn.addEventListener('click', () => {
      const tourId = btn.dataset.tourId;
      sound.play('click');

      const modal = document.getElementById('modal-register-tour');
      if (modal) {
        modal.dataset.tourId = tourId;
        modal.classList.add('active');
      }
    });
  });

  container.querySelectorAll('.btn-share-tour').forEach(btn => {
    btn.addEventListener('click', () => {
      sound.play('click');
      if (navigator.clipboard) {
        navigator.clipboard.writeText(window.location.href);
      }
      showToast('🔗 คัดลอกลิงก์การแข่งขันเรียบร้อย!', 'success');
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
