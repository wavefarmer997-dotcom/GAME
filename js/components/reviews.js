/**
 * NEXUS GAMING TH - Game Reviews & Tier List Component
 */

import { store } from '../store.js';
import { sound } from '../audio.js';

export function renderReviews(container) {
  if (!container) return;

  const { reviews } = store.state;

  container.innerHTML = `
    <div class="reviews-container">
      <div style="display: flex; justify-content: space-between; align-items: center; background: var(--bg-card); padding: 20px 24px; border-radius: var(--radius-lg); border: 1px solid var(--border-subtle);">
        <div>
          <h2 style="font-size: 1.4rem; font-weight: 800; color: #fff;">⭐ ศูนย์รวมรีวิว & คะแนนเกมจากคอมมูนิตี้</h2>
          <p style="font-size: 0.9rem; color: var(--text-secondary); margin-top: 4px;">คะแนนประเมินจริงจากเหล่าเกมเมอร์ตัวจริง เสียงจริง</p>
        </div>
        <button class="btn btn-primary btn-sm" id="btn-open-add-review">
          ✍️ เขียนรีวิวเกม
        </button>
      </div>

      <div style="display: flex; flex-direction: column; gap: 20px;">
        ${reviews.map(rev => `
          <div class="review-card">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; flex-wrap: wrap;">
              <div style="display: flex; gap: 14px; align-items: center;">
                <img src="${rev.avatar}" alt="${rev.author}" style="width: 44px; height: 44px; border-radius: 50%; object-fit: cover;">
                <div>
                  <div style="display: flex; align-items: center; gap: 8px;">
                    <span style="font-weight: 700; color: #fff; font-size: 1rem;">${rev.author}</span>
                    <span class="badge-pill" style="font-size: 0.75rem; background: rgba(var(--primary-rgb), 0.2); color: var(--primary); padding: 2px 8px; border-radius: 9999px;">
                      🎮 ${rev.gameName}
                    </span>
                  </div>
                  <span style="font-size: 0.8rem; color: var(--text-muted);">${rev.date}</span>
                </div>
              </div>

              <div class="review-score-badge">
                ★ ${rev.overallRating} / 5.0
              </div>
            </div>

            <!-- Score metrics -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 10px; margin: 16px 0; background: rgba(10, 14, 23, 0.5); padding: 12px; border-radius: var(--radius-md);">
              <div><span style="font-size: 0.75rem; color: var(--text-muted);">ระบบการเล่น (Gameplay):</span> <strong style="color: var(--secondary);">${rev.scores.gameplay}/10</strong></div>
              <div><span style="font-size: 0.75rem; color: var(--text-muted);">กราฟิก & ภาพ (Graphics):</span> <strong style="color: var(--secondary);">${rev.scores.graphics}/10</strong></div>
              <div><span style="font-size: 0.75rem; color: var(--text-muted);">เนื้อเรื่อง (Story):</span> <strong style="color: var(--secondary);">${rev.scores.story}/10</strong></div>
              <div><span style="font-size: 0.75rem; color: var(--text-muted);">เสียงประกอบ (Soundtrack):</span> <strong style="color: var(--secondary);">${rev.scores.soundtrack}/10</strong></div>
            </div>

            <h3 style="font-size: 1.15rem; font-weight: 800; color: #fff; margin-bottom: 8px;">${rev.title}</h3>
            <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6;">${rev.content}</p>

            <div style="margin-top: 14px; padding-top: 12px; border-top: 1px solid var(--border-subtle); display: flex; justify-content: flex-end;">
              <button class="btn btn-secondary btn-sm" style="font-size: 0.8rem;">👍 มีประโยชน์ (${rev.likes})</button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // Bind write review button
  const addBtn = container.querySelector('#btn-open-add-review');
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      sound.play('click');
      document.getElementById('modal-add-review')?.classList.add('active');
    });
  }
}
