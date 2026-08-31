/**
 * NEXUS GAMING TH - Community Forum & Feed Component
 */

import { store } from '../store.js';
import { sound } from '../audio.js';
import { openPlayerProfile } from './profileModal.js';

export function renderForumFeed(container) {
  if (!container) return;

  const { posts, activeGameFilter, activeCategoryFilter, searchQuery, bookmarks } = store.state;

  // Filter posts
  const filtered = posts.filter(post => {
    // Game filter
    if (activeGameFilter !== 'all' && post.gameId !== activeGameFilter) return false;
    // Category filter
    if (activeCategoryFilter !== 'all') {
      if (activeCategoryFilter === 'bookmarks') {
        if (!bookmarks.includes(post.id)) return false;
      } else if (post.category !== activeCategoryFilter) {
        return false;
      }
    }
    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = post.title.toLowerCase().includes(q);
      const matchContent = post.content.toLowerCase().includes(q);
      const matchGame = post.gameName.toLowerCase().includes(q);
      const matchTags = post.tags && post.tags.some(t => t.toLowerCase().includes(q));
      if (!matchTitle && !matchContent && !matchGame && !matchTags) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 60px 20px; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border-subtle);">
        <div style="font-size: 2.5rem; margin-bottom: 12px;">📭</div>
        <h3 style="font-size: 1.2rem; color: var(--text-highlight);">ยังไม่มีกระทู้ในหมวดหมู่นี้</h3>
        <p style="font-size: 0.9rem; color: var(--text-muted); margin: 6px 0 16px;">มาร่วมเป็นคนแรกที่เปิดประเด็นพูดคุยกันเลย!</p>
        <button class="btn btn-primary btn-sm" id="btn-empty-create-post">✍️ สร้างกระทู้ใหม่</button>
      </div>
    `;

    const emptyBtn = container.querySelector('#btn-empty-create-post');
    if (emptyBtn) {
      emptyBtn.addEventListener('click', () => {
        sound.play('click');
        document.getElementById('modal-create-post')?.classList.add('active');
      });
    }
    return;
  }

  container.innerHTML = filtered.map(post => {
    const isBookmarked = bookmarks.includes(post.id);
    const voteScore = (post.upvotes || 0) - (post.downvotes || 0);

    return `
      <article class="post-card ${post.pinned ? 'pinned' : ''}" data-post-id="${post.id}">
        ${post.pinned ? `
          <div class="pinned-badge">
            📌 ปักหมุดโดยแอดมิน
          </div>
        ` : ''}

        <!-- Vote Column -->
        <div class="vote-col">
          <button class="vote-btn ${post.userVoted === 1 ? 'active-up' : ''}" data-action="upvote" title="กดโหวตขึ้น">
            ▲
          </button>
          <span class="vote-count">${voteScore}</span>
          <button class="vote-btn ${post.userVoted === -1 ? 'active-down' : ''}" data-action="downvote" title="กดโหวตลง">
            ▼
          </button>
        </div>

        <!-- Post Content Main -->
        <div class="post-main">
          <div class="post-header">
            <div class="post-author-info btn-author-profile-trigger" data-author-id="${post.author.id || post.author.name}" title="คลิกดูโปรไฟล์ / เพิ่มเพื่อน" style="cursor: pointer;">
              <img src="${post.author.avatar}" alt="${post.author.name}" class="post-author-avatar">
              <div>
                <div style="display: flex; align-items: center; gap: 6px;">
                  <span class="post-author-name">${post.author.name}</span>
                  <span class="post-author-badge">${post.author.badge}</span>
                </div>
                <span class="post-time">Lv.${post.author.level} • ${post.createdAt}</span>
              </div>
            </div>

            <div class="post-game-tag">
              🎮 ${post.gameName}
            </div>
          </div>

          <h2 class="post-title">${post.title}</h2>
          <div class="post-excerpt">${post.content}</div>

          <!-- Post Media (Image, Video, or YouTube) -->
          ${renderPostMedia(post)}

          ${post.tags && post.tags.length ? `
            <div class="post-tags-list">
              ${post.tags.map(t => `<span class="post-tag-item">#${t}</span>`).join('')}
            </div>
          ` : ''}

          <!-- Footer Actions -->
          <div class="post-footer">
            <div class="post-action-btn-group">
              <button class="post-footer-btn btn-toggle-comments" data-post-id="${post.id}">
                💬 <span>${post.commentsCount || (post.comments ? post.comments.length : 0)} ความคิดเห็น</span>
              </button>
              <button class="post-footer-btn btn-share-post" data-title="${post.title}">
                🔗 <span>แชร์</span>
              </button>
            </div>

            <button class="post-footer-btn ${isBookmarked ? 'bookmarked' : ''} btn-bookmark-post" data-post-id="${post.id}">
              ${isBookmarked ? '★ บันทึกแล้ว' : '☆ บันทึก'}
            </button>
          </div>

          <!-- Comments Thread (Initially Collapsed or Shown) -->
          <div class="post-comments-thread" id="comments-${post.id}" style="display: none;">
            <div class="comments-list">
              ${post.comments && post.comments.length ? post.comments.map(c => `
                <div class="comment-item">
                  <img src="${c.author.avatar}" alt="${c.author.name}" class="comment-avatar">
                  <div class="comment-body">
                    <div class="comment-header">
                      <span class="comment-author-name">${c.author.name}</span>
                      <span style="font-size: 0.7rem; color: var(--text-muted);">${c.author.badge || ''} • ${c.createdAt}</span>
                    </div>
                    <div class="comment-text">${c.content}</div>
                  </div>
                </div>
              `).join('') : '<p style="font-size: 0.85rem; color: var(--text-muted); padding: 8px 0;">ยังไม่มีความคิดเห็น เป็นคนแรกที่แสดงความคิดเห็น!</p>'}
            </div>

            <!-- Comment Input -->
            <form class="comment-input-row" data-post-id="${post.id}">
              <input type="text" placeholder="เขียนความคิดเห็นของคุณ..." required>
              <button type="submit" class="btn btn-primary btn-sm">ส่ง</button>
            </form>
          </div>
        </div>
      </article>
    `;
  }).join('');

  // Bind Event Listeners
  container.querySelectorAll('.vote-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const card = btn.closest('.post-card');
      const postId = card.dataset.postId;
      const action = btn.dataset.action;
      sound.play(action === 'upvote' ? 'like' : 'click');
      store.toggleVote(postId, action === 'upvote' ? 1 : -1);
    });
  });

  container.querySelectorAll('.btn-bookmark-post').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const postId = btn.dataset.postId;
      sound.play('click');
      const saved = store.toggleBookmark(postId);
      showToast(saved ? '📌 บันทึกกระทู้แล้ว' : 'นำกระทู้ออกจากรายการบันทึกแล้ว', 'info');
    });
  });

  container.querySelectorAll('.btn-toggle-comments').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const postId = btn.dataset.postId;
      const thread = container.querySelector(`#comments-${postId}`);
      if (thread) {
        const isHidden = thread.style.display === 'none';
        thread.style.display = isHidden ? 'flex' : 'none';
        sound.play('click');
      }
    });
  });

  container.querySelectorAll('.comment-input-row').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const postId = form.dataset.postId;
      const input = form.querySelector('input');
      const text = input.value;
      if (!text.trim()) return;

      sound.play('message');
      store.addComment(postId, text);
      input.value = '';
      showToast('💬 ส่งความคิดเห็นสำเร็จ (+15 XP)', 'success');
    });
  });

  container.querySelectorAll('.btn-share-post').forEach(btn => {
    btn.addEventListener('click', () => {
      sound.play('click');
      if (navigator.clipboard) {
        navigator.clipboard.writeText(window.location.href);
      }
      showToast('🔗 คัดลอกลิงก์กระทู้แล้ว!', 'success');
    });
  });

  // Author Profile Triggers
  container.querySelectorAll('.btn-author-profile-trigger').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const authorId = trigger.dataset.authorId;
      sound.play('click');
      openPlayerProfile(authorId);
    });
  });

  // Lightbox click on images
  container.querySelectorAll('.post-media-container.image-container').forEach(el => {
    el.addEventListener('click', () => {
      const img = el.querySelector('img');
      if (img) {
        sound.play('click');
        openLightbox(img.src, img.alt);
      }
    });
  });
}

function renderPostMedia(post) {
  if (post.mediaType === 'video' || (post.video && !post.mediaType)) {
    return `
      <div class="post-media-container video-container">
        <div class="media-type-badge">🎬 คลิปไฮไลท์</div>
        <video src="${post.video || post.image}" controls preload="metadata" playsinline class="post-media-video" poster="${post.image || ''}"></video>
      </div>
    `;
  }
  if (post.mediaType === 'youtube' && post.video) {
    let embedUrl = post.video;
    if (embedUrl.includes('watch?v=')) {
      embedUrl = embedUrl.replace('watch?v=', 'embed/');
    } else if (embedUrl.includes('youtu.be/')) {
      embedUrl = embedUrl.replace('youtu.be/', 'www.youtube.com/embed/');
    }
    return `
      <div class="post-media-container youtube-container">
        <div class="media-type-badge">▶️ YouTube Clip</div>
        <iframe src="${embedUrl}" title="${post.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="post-media-iframe"></iframe>
      </div>
    `;
  }
  if (post.image) {
    return `
      <div class="post-media-container image-container" title="คลิกเพื่อดูรูปภาพขนาดเต็ม">
        <div class="media-type-badge">📸 ภาพประกอบ</div>
        <img src="${post.image}" alt="${post.title}" class="post-media-img" loading="lazy">
        <div class="image-zoom-hint">🔍 ซูมดูภาพ</div>
      </div>
    `;
  }
  return '';
}

export function openLightbox(src, caption = '') {
  let modal = document.getElementById('modal-lightbox');
  if (!modal) return;

  const img = modal.querySelector('.lightbox-image');
  const cap = modal.querySelector('.lightbox-caption');
  if (img) img.src = src;
  if (cap) cap.textContent = caption || '';

  modal.classList.add('active');
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
