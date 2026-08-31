/**
 * NEXUS GAMING TH - Gamer Stories & Interactive Story Viewer Component
 * Optimized for butter-smooth video playback (60fps), adaptive video aspect ratio,
 * and maximum 2-minute (120s) clip support.
 */

import { store } from '../store.js';
import { sound } from '../audio.js';
import { openPlayerProfile } from './profileModal.js';
import { showToast, triggerConfetti } from './effects.js';

let storyTimer = null;
let currentStoryIndex = 0;
let isPaused = false;
let isMuted = true;
let progressAnimFrame = null;
let activeVideoElement = null;

export function renderStoryBar(container) {
  if (!container) return;

  const { stories, user } = store.state;
  const userStories = stories.filter(s => s.userId === user.id);
  const hasUserStory = userStories.length > 0;
  const otherStories = stories.filter(s => s.userId !== user.id);

  container.innerHTML = `
    <div class="stories-bar-track">
      <!-- Current User Add/View Story -->
      <div class="story-item-bubble ${hasUserStory ? 'has-story' : 'add-story'}" id="story-trigger-self">
        <div class="story-avatar-wrapper ${hasUserStory ? 'ring-active' : 'ring-add'}">
          <img src="${user.avatar}" alt="${user.name}" class="story-avatar-img">
          <div class="story-badge-icon">${hasUserStory ? '⚡' : '+'}</div>
        </div>
        <div class="story-user-label">
          <span>${hasUserStory ? 'สตอรี่ของคุณ' : 'สร้างสตอรี่'}</span>
        </div>
      </div>

      <!-- Other Gamers' Stories -->
      ${otherStories.map((story) => `
        <div class="story-item-bubble has-story" data-story-id="${story.id}">
          <div class="story-avatar-wrapper ring-active ${story.type === 'video' ? 'ring-video' : ''}">
            <img src="${story.userAvatar}" alt="${story.userName}" class="story-avatar-img">
            <div class="story-type-tag">${story.type === 'video' ? '🎬' : '📸'}</div>
          </div>
          <div class="story-user-label">
            <span class="story-user-name">${story.userName}</span>
            <span class="story-time-mini">${story.createdAt}</span>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  // Bind click for user bubble
  const selfBubble = container.querySelector('#story-trigger-self');
  if (selfBubble) {
    selfBubble.addEventListener('click', () => {
      sound.play('click');
      if (hasUserStory) {
        openStoryViewer(userStories[0].id);
      } else {
        openCreateStoryModal();
      }
    });
  }

  // Bind click for other story bubbles
  container.querySelectorAll('.story-item-bubble[data-story-id]').forEach(el => {
    el.addEventListener('click', () => {
      const storyId = el.dataset.storyId;
      sound.play('tab');
      openStoryViewer(storyId);
    });
  });
}

export function openCreateStoryModal() {
  const modal = document.getElementById('modal-create-story');
  if (modal) {
    modal.classList.add('active');
    sound.play('click');
  }
}

export function openStoryViewer(initialStoryId) {
  const modal = document.getElementById('modal-story-viewer');
  if (!modal) return;

  const { stories } = store.state;
  if (!stories.length) return;

  const foundIndex = stories.findIndex(s => s.id === initialStoryId);
  currentStoryIndex = foundIndex >= 0 ? foundIndex : 0;
  isPaused = false;

  modal.classList.add('active');
  renderStorySlide();
}

export function closeStoryViewer() {
  const modal = document.getElementById('modal-story-viewer');
  if (modal) {
    modal.classList.remove('active');
    if (activeVideoElement) {
      activeVideoElement.pause();
      activeVideoElement.src = '';
      activeVideoElement = null;
    }
  }
  clearStoryTimers();
}

function clearStoryTimers() {
  if (storyTimer) clearTimeout(storyTimer);
  if (progressAnimFrame) cancelAnimationFrame(progressAnimFrame);
  storyTimer = null;
  progressAnimFrame = null;
}

function renderStorySlide() {
  const modal = document.getElementById('modal-story-viewer');
  if (!modal) return;

  const { stories, user } = store.state;
  if (currentStoryIndex >= stories.length) {
    closeStoryViewer();
    return;
  }
  if (currentStoryIndex < 0) {
    currentStoryIndex = 0;
  }

  const story = stories[currentStoryIndex];
  const isOwner = story.userId === user.id;

  clearStoryTimers();

  const container = modal.querySelector('.story-viewer-container');
  if (!container) return;

  container.innerHTML = `
    <!-- Top Segmented Progress Bar -->
    <div class="story-progress-segments">
      ${stories.map((s, idx) => `
        <div class="story-progress-bar-bg">
          <div class="story-progress-bar-fill" id="story-progress-${idx}" style="width: ${idx < currentStoryIndex ? '100%' : '0%'};"></div>
        </div>
      `).join('')}
    </div>

    <!-- Story Header Info -->
    <div class="story-viewer-header">
      <div class="story-viewer-author btn-story-author-profile" title="คลิกเพื่อดูโปรไฟล์" style="cursor: pointer;">
        <img src="${story.userAvatar}" alt="${story.userName}" class="story-viewer-avatar">
        <div>
          <div class="story-viewer-name-row">
            <span class="story-viewer-name">${story.userName}</span>
            <span class="story-viewer-badge">${story.badge || story.userTag || ''}</span>
          </div>
          <span class="story-viewer-time">Lv.${story.userLevel || 30} • ${story.createdAt}</span>
        </div>
      </div>

      <div class="story-viewer-top-actions">
        ${!isOwner ? `
          ${store.isFriend(story.userId) ? `
            <span class="badge-pill" style="background: rgba(0, 229, 255, 0.2); color: #00e5ff; font-size: 0.75rem;">🤝 เพื่อน</span>
          ` : (store.isPending(story.userId) ? `
            <span class="badge-pill" style="background: rgba(255, 255, 255, 0.15); color: #fff; font-size: 0.75rem;">⏳ ส่งคำขอแล้ว</span>
          ` : `
            <button type="button" class="btn btn-primary btn-xs btn-story-add-friend" data-user-id="${story.userId || story.userName}" title="ส่งคำขอเป็นเพื่อน">
              ➕ เพิ่มเพื่อน (+10 XP)
            </button>
          `)}
        ` : ''}

        <!-- Story Visual Filter Switcher -->
        <button class="btn-story-filter-toggle" id="btn-toggle-story-filter" title="สลับเอฟเฟกต์ฟิลเตอร์ Cyber">
          ✨
        </button>
        ${isOwner ? `
          <button class="btn-story-delete" id="btn-delete-current-story" title="ลบสตอรี่นี้">
            🗑️
          </button>
        ` : ''}
        <button class="btn-story-pause" id="btn-toggle-pause" title="หยุด/เล่นต่อ">
          ${isPaused ? '▶️' : '⏸️'}
        </button>
        <button class="btn-story-close" id="btn-close-story-viewer" title="ปิดสตอรี่">
          &times;
        </button>
      </div>
    </div>

    <!-- Media Area (Adaptive Fitting & Single Optimized Video Player) -->
    <div class="story-media-stage" id="story-media-stage">
      ${story.type === 'video' ? `
        <div class="story-video-wrapper">
          <video src="${story.mediaUrl}" autoplay ${isMuted ? 'muted' : ''} playsinline disablePictureInPicture preload="auto" class="story-video-player" id="story-active-video"></video>
          
          <!-- Story Video Volume Controller -->
          <div class="story-video-volume-bar" id="story-video-volume-bar">
            <button type="button" class="btn-story-vol-icon" id="btn-toggle-video-sound" title="เปิด/ปิดเสียง">
              ${isMuted ? '🔇' : '🔊'}
            </button>
            <input type="range" min="0" max="100" value="${isMuted ? 0 : 80}" class="story-vol-slider" id="story-vol-slider" title="ปรับระดับเสียงวิดีโอ">
            <span class="story-vol-pct" id="story-vol-pct">${isMuted ? 'ปิดเสียง' : '80%'}</span>
          </div>
        </div>
      ` : `
        <img src="${story.mediaUrl}" alt="${story.caption}" class="story-image-element">
      `}
      <div class="story-filter-overlay" id="story-filter-overlay"></div>
    </div>

    <!-- Touch / Click Navigation Overlay -->
    <div class="story-nav-hotspots">
      <div class="story-nav-hotspot prev" id="hotspot-prev" title="สตอรี่ก่อนหน้า"></div>
      <div class="story-nav-hotspot next" id="hotspot-next" title="สตอรี่ถัดไป"></div>
    </div>

    <!-- Story Bottom Overlay & Reactions -->
    <div class="story-viewer-footer">
      <div class="story-caption-box">
        ${story.tag ? `<div class="story-tag-pill">${story.tag}</div>` : ''}
        <div class="story-caption-text">${story.caption}</div>
      </div>

      <div class="story-reactions-bar">
        <div class="story-reaction-btns">
          ${['🔥', '👑', '⚡', '🎯', '❤️'].map(emoji => `
            <button class="btn-story-react" data-emoji="${emoji}">
              <span>${emoji}</span>
              <span class="react-count">${(story.reactions && story.reactions[emoji]) || 0}</span>
            </button>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  const activeFill = container.querySelector(`#story-progress-${currentStoryIndex}`);

  // Story Progress Handling
  if (story.type === 'video') {
    const video = container.querySelector('#story-active-video');
    activeVideoElement = video;

    if (video) {
      video.volume = isMuted ? 0 : 0.8;

      // Direct 60fps hardware sync with video decoder
      const onTimeUpdate = () => {
        if (!isPaused && video.duration) {
          const pct = (video.currentTime / video.duration) * 100;
          if (activeFill) activeFill.style.width = `${Math.min(100, pct)}%`;
        }
      };

      const onEnded = () => {
        nextStory();
      };

      video.addEventListener('timeupdate', onTimeUpdate);
      video.addEventListener('ended', onEnded);

      // Volume slider and sound toggle
      const soundBtn = container.querySelector('#btn-toggle-video-sound');
      const volSlider = container.querySelector('#story-vol-slider');
      const volPct = container.querySelector('#story-vol-pct');

      if (soundBtn && volSlider) {
        soundBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          isMuted = !isMuted;
          video.muted = isMuted;
          const currentVal = isMuted ? 0 : 80;
          video.volume = currentVal / 100;
          volSlider.value = currentVal;
          if (volPct) volPct.textContent = isMuted ? 'ปิดเสียง' : `${currentVal}%`;
          soundBtn.textContent = isMuted ? '🔇' : '🔊';
          sound.play('click');
        });

        volSlider.addEventListener('input', (e) => {
          e.stopPropagation();
          const val = parseInt(e.target.value, 10);
          isMuted = val === 0;
          video.muted = isMuted;
          video.volume = val / 100;
          if (volPct) volPct.textContent = val === 0 ? 'ปิดเสียง' : `${val}%`;
          if (soundBtn) soundBtn.textContent = val === 0 ? '🔇' : (val < 50 ? '🔉' : '🔊');
        });

        volSlider.addEventListener('click', (e) => e.stopPropagation());
      }

      // Smooth play trigger
      video.play().catch(() => {
        video.muted = true;
        video.play().catch(() => {});
      });
    }
  } else {
    // Image Story timer (5.5 seconds)
    const imageDuration = 5500;
    const startTime = performance.now();

    const updateImageProgress = (now) => {
      if (!isPaused) {
        const elapsed = now - startTime;
        const pct = (elapsed / imageDuration) * 100;
        if (activeFill) activeFill.style.width = `${Math.min(100, pct)}%`;
        if (elapsed >= imageDuration) {
          nextStory();
          return;
        }
      }
      progressAnimFrame = requestAnimationFrame(updateImageProgress);
    };

    progressAnimFrame = requestAnimationFrame(updateImageProgress);
  }

  // Bind Buttons
  const closeBtn = container.querySelector('#btn-close-story-viewer');
  if (closeBtn) closeBtn.addEventListener('click', closeStoryViewer);

  const prevHotspot = container.querySelector('#hotspot-prev');
  if (prevHotspot) prevHotspot.addEventListener('click', (e) => {
    e.stopPropagation();
    prevStory();
  });

  const nextHotspot = container.querySelector('#hotspot-next');
  if (nextHotspot) nextHotspot.addEventListener('click', (e) => {
    e.stopPropagation();
    nextStory();
  });

  // Pause toggle
  const pauseBtn = container.querySelector('#btn-toggle-pause');
  if (pauseBtn) {
    pauseBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleStoryPause();
    });
  }

  // Delete Story (Owner only)
  const deleteBtn = container.querySelector('#btn-delete-current-story');
  if (deleteBtn) {
    deleteBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (confirm('คุณต้องการลบสตอรี่นี้ใช่หรือไม่?')) {
        sound.play('click');
        store.deleteStory(story.id);
        if (currentStoryIndex >= store.state.stories.length) {
          currentStoryIndex = Math.max(0, store.state.stories.length - 1);
        }
        if (store.state.stories.length === 0) {
          closeStoryViewer();
        } else {
          renderStorySlide();
        }
      }
    });
  }

  // Author Profile Trigger
  const authorTrigger = container.querySelector('.btn-story-author-profile');
  if (authorTrigger) {
    authorTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      sound.play('click');
      closeStoryViewer();
      openPlayerProfile(story.userId || story.userName);
    });
  }

  // Quick Add Friend from Story
  const addFriendBtn = container.querySelector('.btn-story-add-friend');
  if (addFriendBtn) {
    addFriendBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const targetId = addFriendBtn.dataset.userId;
      const res = store.sendFriendRequest(targetId);
      if (res.success) {
        sound.play('success');
        triggerConfetti(window.innerWidth / 2, window.innerHeight * 0.4, 25);
        showToast(res.message, 'success');
      } else {
        showToast(res.message, 'info');
      }
      renderStorySlide();
    });
  }

  // Filter Switcher
  const filterBtn = container.querySelector('#btn-toggle-story-filter');
  const mediaStage = container.querySelector('#story-media-stage');
  const filters = ['', 'filter-cyber', 'filter-vhs', 'filter-matrix', 'filter-flame'];
  let currentFilterIdx = 0;

  if (filterBtn && mediaStage) {
    filterBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      sound.play('click');
      currentFilterIdx = (currentFilterIdx + 1) % filters.length;
      filters.forEach(f => f && mediaStage.classList.remove(f));
      if (filters[currentFilterIdx]) {
        mediaStage.classList.add(filters[currentFilterIdx]);
      }
    });
  }

  // Reactions
  container.querySelectorAll('.btn-story-react').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const emoji = btn.dataset.emoji;
      const countSpan = btn.querySelector('.react-count');
      const newCount = store.reactStory(story.id, emoji);
      if (countSpan && newCount !== undefined) {
        countSpan.textContent = newCount;
      }
      btn.style.transform = 'scale(1.3)';
      setTimeout(() => btn.style.transform = '', 200);
      sound.play('sparkle');
    });
  });
}

function toggleStoryPause() {
  isPaused = !isPaused;
  const modal = document.getElementById('modal-story-viewer');
  if (modal) {
    const pauseBtn = modal.querySelector('#btn-toggle-pause');
    if (pauseBtn) pauseBtn.textContent = isPaused ? '▶️' : '⏸️';

    if (activeVideoElement) {
      if (isPaused) activeVideoElement.pause();
      else activeVideoElement.play().catch(() => {});
    }
  }
}

function nextStory() {
  const { stories } = store.state;
  if (currentStoryIndex < stories.length - 1) {
    currentStoryIndex++;
    renderStorySlide();
  } else {
    closeStoryViewer();
  }
}

function prevStory() {
  if (currentStoryIndex > 0) {
    currentStoryIndex--;
    renderStorySlide();
  }
}
