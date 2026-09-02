/**
 * NEXUS GAMING TH - Main Application Controller
 */

import { store } from './store.js';
import { sound } from './audio.js';
import { initHeroCanvas } from './components/hero.js';
import { renderForumFeed } from './components/forum.js';
import { renderGameHubs } from './components/gameHub.js';
import { renderLFG } from './components/lfg.js';
import { renderTournaments } from './components/tournaments.js';
import { renderChatLounge } from './components/chatLounge.js';
import { renderReviews } from './components/reviews.js';
import { setupProfileModal } from './components/profileModal.js';
import { initFriendsHub, openFriendsHub } from './components/friendsHub.js';
import { renderStoryBar, openStoryViewer } from './components/stories.js';
import { initGlobalEffects, initCard3DTilt, triggerConfetti, triggerLevelUpCelebration } from './components/effects.js';
import { voiceManager } from './components/voiceChat.js';
import { addCustomTextChannel, setActiveRoom } from './components/chatLounge.js';
import { initAuthGate } from './components/authGate.js';
import { initDataManager } from './components/dataManager.js';

function startApp() {
  const steps = [
    { name: 'Theme and Audio', fn: () => initThemeAndAudio() },
    { name: 'Auth Gate', fn: () => { initAuthGate(); updateHeaderUserInfo(store.state.user); } },
    { name: 'Data Manager', fn: () => initDataManager() },
    { name: 'Hero Canvas and FX', fn: () => { initHeroCanvas(); initGlobalEffects(); } },
    { name: 'Navigation', fn: () => initNavigation() },
    { name: 'Filters', fn: () => initFilters() },
    { name: 'Modals and Media', fn: () => { initModals(); initPostMediaUploader(); initStoryCreator(); } },
    { name: 'Profile and Friends', fn: () => { setupProfileModal(); initFriendsHub(); } },
    { name: 'Initial Render', fn: () => {
      renderCurrentTab();
      const storyBarEl = document.getElementById('community-stories-bar');
      if (storyBarEl) renderStoryBar(storyBarEl);
      initCard3DTilt();
    }}
  ];

  steps.forEach(step => {
    try {
      step.fn();
    } catch (err) {
      console.warn(`[NEXUS Init] Warning in ${step.name}:`, err);
    }
  });

  // Subscribe to Store Changes
  store.subscribe('*', () => {
    renderCurrentTab();
    setTimeout(initCard3DTilt, 100);
  });

  store.subscribe('stories:updated', () => {
    const bar = document.getElementById('community-stories-bar');
    if (bar) renderStoryBar(bar);
    setTimeout(initCard3DTilt, 100);
  });

  store.subscribe('user:updated', (user) => {
    updateHeaderUserInfo(user || store.state.user);
    const bar = document.getElementById('community-stories-bar');
    if (bar) renderStoryBar(bar);
    setTimeout(initCard3DTilt, 100);
  });

  store.subscribe('auth:changed', () => {
    updateHeaderUserInfo(store.state.user);
    renderCurrentTab();
  });

  store.subscribe('user:levelup', (user) => {
    triggerLevelUpCelebration(user);
    showToast(`🎉 ยินดีด้วย! คุณเลเวลอัปสู่ Lv.${user.level} แล้ว!`, 'level');
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startApp);
} else {
  // DOM is already parsed (e.g. deferred module scripts)
  startApp();
}

function updateHeaderUserInfo(user) {
  if (!user) return;
  const avatarEl = document.getElementById('header-user-avatar');
  const nameEl = document.getElementById('header-user-name');
  const lvlEl = document.getElementById('header-user-level');
  if (avatarEl && user.avatar) avatarEl.src = user.avatar;
  if (nameEl && user.name) nameEl.textContent = user.name;
  if (lvlEl && user.level) lvlEl.textContent = `LV.${user.level}`;
}

function initThemeAndAudio() {
  const currentTheme = store.state.theme || 'cyber-purple';
  document.documentElement.setAttribute('data-theme', currentTheme);

  // Theme Switcher Button
  const themeBtn = document.getElementById('btn-theme-toggle');
  if (themeBtn) {
    const themes = ['cyber-purple', 'neon-cyan', 'crimson-fury', 'emerald-matrix'];
    themeBtn.addEventListener('click', () => {
      const idx = themes.indexOf(store.state.theme);
      const nextTheme = themes[(idx + 1) % themes.length];
      store.setTheme(nextTheme);
      sound.play('laser');
      showToast(`🎨 สลับธีม: ${getThemeTitle(nextTheme)}`, 'info');
    });
  }

  // Audio Toggle & Volume Popover
  const audioBtn = document.getElementById('btn-audio-toggle');
  const volumePopover = document.getElementById('volume-popover');
  const volumeSlider = document.getElementById('header-volume-slider');
  const volumePctLabel = document.getElementById('volume-pct-label');

  const updateVolumeUI = ({ volume, icon, enabled }) => {
    if (audioBtn) {
      audioBtn.innerHTML = icon;
      audioBtn.classList.toggle('active', enabled);
    }
    if (volumeSlider) {
      volumeSlider.value = volume;
    }
    if (volumePctLabel) {
      volumePctLabel.textContent = `${volume}%`;
    }
  };

  // Initial Sync
  updateVolumeUI({
    volume: sound.getVolume(),
    icon: sound.getIcon(),
    enabled: sound.enabled
  });

  sound.subscribe(updateVolumeUI);

  if (audioBtn) {
    audioBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (volumePopover) {
        const isShown = volumePopover.classList.toggle('active');
        if (!isShown) {
          sound.play('click');
        }
      }
    });
  }

  // Close popover when clicking outside
  document.addEventListener('click', (e) => {
    if (volumePopover && !e.target.closest('#header-volume-widget')) {
      volumePopover.classList.remove('active');
    }
  });

  if (volumeSlider) {
    volumeSlider.addEventListener('input', (e) => {
      const val = parseInt(e.target.value, 10);
      sound.setVolume(val, false);
      if (volumePctLabel) volumePctLabel.textContent = `${val}%`;
    });
    volumeSlider.addEventListener('change', (e) => {
      const val = parseInt(e.target.value, 10);
      sound.setVolume(val, true);
    });
  }

  // Preset volume buttons
  document.querySelectorAll('.btn-vol-preset').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const val = parseInt(btn.dataset.vol, 10);
      sound.setVolume(val, true);
      showToast(`🔊 ปรับระดับเสียง: ${val}%`, 'info');
    });
  });
}

function getThemeTitle(th) {
  const names = {
    'cyber-purple': 'Cyber Purple (สีม่วงนีออน)',
    'neon-cyan': 'Neon Cyan (สีฟ้าไซเบอร์)',
    'crimson-fury': 'Crimson Fury (สีแดงเพลิง)',
    'emerald-matrix': 'Emerald Matrix (สีเขียวเมทริกซ์)'
  };
  return names[th] || th;
}

function syncNavigationUI(tab) {
  if (!tab) return;
  // Sync desktop header buttons
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tab);
  });
  // Sync mobile bottom dock buttons
  document.querySelectorAll('.mobile-dock-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tab);
  });
}

function initNavigation() {
  // Desktop Header Nav Buttons
  const navBtns = document.querySelectorAll('.nav-btn');
  navBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const tab = btn.dataset.tab;
      if (!tab) return;

      sound.play('tab');
      syncNavigationUI(tab);
      store.setTab(tab);
    });
  });

  // Mobile Bottom Navigation Dock Buttons
  const mobileDockBtns = document.querySelectorAll('.mobile-dock-btn');
  mobileDockBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const tab = btn.dataset.tab;
      if (!tab) return;

      sound.play('tab');
      syncNavigationUI(tab);
      store.setTab(tab);

      // Smooth scroll to top of content on mobile & tablet
      const contentElem = document.querySelector('.main-content-area');
      if (contentElem && window.innerWidth <= 1100) {
        const topPos = contentElem.getBoundingClientRect().top + window.pageYOffset - 70;
        window.scrollTo({ top: Math.max(0, topPos), behavior: 'smooth' });
      }
    });
  });

  // User profile button in header
  const profileBtn = document.getElementById('btn-header-profile');
  if (profileBtn) {
    profileBtn.addEventListener('click', () => {
      sound.play('click');
      document.getElementById('modal-user-profile')?.classList.add('active');
    });
  }

  // Quick CTA in Hero & Footer
  document.querySelectorAll('.btn-hero-action').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetTab = btn.dataset.targetTab;
      if (targetTab) {
        sound.play('tab');
        syncNavigationUI(targetTab);
        store.setTab(targetTab);

        const contentElem = document.querySelector('.main-content-area');
        if (contentElem) {
          const topPos = contentElem.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top: Math.max(0, topPos), behavior: 'smooth' });
        }
      }
    });
  });
}

function initFilters() {
  // Category Pills
  const pills = document.querySelectorAll('.filter-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      const cat = pill.dataset.category;
      sound.play('click');
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      store.setCategoryFilter(cat);
    });
  });

  // Game Category Sidebar items
  const catItems = document.querySelectorAll('.game-cat-item');
  catItems.forEach(item => {
    item.addEventListener('click', () => {
      const gameId = item.dataset.gameId;
      sound.play('click');
      catItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      store.setGameFilter(gameId);
    });
  });

  // Search input
  const searchInput = document.getElementById('main-search-input');
  if (searchInput) {
    let timeout = null;
    searchInput.addEventListener('input', (e) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        store.setSearchQuery(e.target.value);
      }, 250);
    });
  }

  // Quick Post Bar in Forum
  const quickPostBar = document.getElementById('quick-post-trigger');
  if (quickPostBar) {
    quickPostBar.addEventListener('click', () => {
      sound.play('click');
      document.getElementById('modal-create-post')?.classList.add('active');
    });
  }
}

function renderCurrentTab() {
  const tab = store.state.activeTab;
  syncNavigationUI(tab);
  const feedContainer = document.getElementById('tab-content-feed');
  const lfgContainer = document.getElementById('tab-content-lfg');
  const gamesContainer = document.getElementById('tab-content-games');
  const tourContainer = document.getElementById('tab-content-tournaments');
  const chatContainer = document.getElementById('tab-content-chat');
  const reviewsContainer = document.getElementById('tab-content-reviews');

  // Hide all containers
  [feedContainer, lfgContainer, gamesContainer, tourContainer, chatContainer, reviewsContainer].forEach(el => {
    if (el) el.style.display = 'none';
  });

  const mainGridLayout = document.getElementById('main-grid-layout');
  const filterBar = document.getElementById('global-filter-bar');
  const leftSidebar = document.getElementById('sidebar-left-games');

  if (tab === 'feed') {
    if (mainGridLayout) mainGridLayout.classList.remove('no-sidebars');
    if (feedContainer) feedContainer.style.display = 'block';
    if (filterBar) filterBar.style.display = '';
    if (leftSidebar) leftSidebar.style.display = '';
    renderForumFeed(document.getElementById('posts-stream-container'));
  } else if (tab === 'lfg') {
    if (mainGridLayout) mainGridLayout.classList.remove('no-sidebars');
    if (lfgContainer) lfgContainer.style.display = 'block';
    if (filterBar) filterBar.style.display = '';
    if (leftSidebar) leftSidebar.style.display = '';
    renderLFG(document.getElementById('squads-stream-container'));
  } else if (tab === 'games') {
    if (mainGridLayout) mainGridLayout.classList.add('no-sidebars');
    if (gamesContainer) gamesContainer.style.display = 'block';
    if (filterBar) filterBar.style.display = 'none';
    if (leftSidebar) leftSidebar.style.display = 'none';
    renderGameHubs(document.getElementById('games-stream-container'));
  } else if (tab === 'tournaments') {
    if (mainGridLayout) mainGridLayout.classList.add('no-sidebars');
    if (tourContainer) tourContainer.style.display = 'block';
    if (filterBar) filterBar.style.display = 'none';
    if (leftSidebar) leftSidebar.style.display = 'none';
    renderTournaments(document.getElementById('tournaments-stream-container'));
  } else if (tab === 'chat') {
    if (mainGridLayout) mainGridLayout.classList.add('no-sidebars');
    if (chatContainer) chatContainer.style.display = 'block';
    if (filterBar) filterBar.style.display = 'none';
    if (leftSidebar) leftSidebar.style.display = 'none';
    renderChatLounge(document.getElementById('chat-stream-container'));
  } else if (tab === 'reviews') {
    if (mainGridLayout) mainGridLayout.classList.add('no-sidebars');
    if (reviewsContainer) reviewsContainer.style.display = 'block';
    if (filterBar) filterBar.style.display = 'none';
    if (leftSidebar) leftSidebar.style.display = 'none';
    renderReviews(document.getElementById('reviews-stream-container'));
  }
}

function initModals() {
  // Modal close buttons
  document.querySelectorAll('.modal-close-btn, .btn-modal-cancel').forEach(btn => {
    btn.addEventListener('click', () => {
      sound.play('click');
      document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
    });
  });

  // Close when clicking overlay backdrop
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        sound.play('click');
        modal.classList.remove('active');
      }
    });
  });

  // Modal: Create Post
  const formCreatePost = document.getElementById('form-create-post');
  if (formCreatePost) {
    formCreatePost.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('post-in-title').value;
      const content = document.getElementById('post-in-content').value;
      const gameSelect = document.getElementById('post-in-game');
      const gameId = gameSelect.value;
      const gameName = gameSelect.options[gameSelect.selectedIndex].text;
      const category = document.getElementById('post-in-category').value;
      const tagsStr = document.getElementById('post-in-tags').value;

      const mediaType = window._postMediaState ? window._postMediaState.type : 'none';
      const mediaUrl = window._postMediaState ? window._postMediaState.url : null;

      const tags = tagsStr.split(',').map(t => t.trim()).filter(Boolean);

      store.addPost({
        title,
        content,
        gameId,
        gameName,
        category,
        tags,
        image: mediaType === 'image' ? mediaUrl : (mediaType === 'video' ? mediaUrl : null),
        video: (mediaType === 'video' || mediaType === 'youtube') ? mediaUrl : null,
        mediaType: mediaType === 'none' ? null : mediaType
      });

      sound.play('success');
      triggerConfetti(window.innerWidth / 2, window.innerHeight * 0.4, 45);
      formCreatePost.reset();
      if (window._resetPostMedia) window._resetPostMedia();
      document.getElementById('modal-create-post')?.classList.remove('active');
      showToast('🎉 โพสต์กระทู้และสื่อสำเร็จ! ได้รับ +50 XP', 'success');
      store.setTab('feed');
    });
  }

  // Modal: Create Squad
  const formCreateSquad = document.getElementById('form-create-squad');
  if (formCreateSquad) {
    formCreateSquad.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('squad-in-title').value;
      const gameSelect = document.getElementById('squad-in-game');
      const gameId = gameSelect.value;
      const gameName = gameSelect.options[gameSelect.selectedIndex].text;
      const mode = document.getElementById('squad-in-mode').value;
      const rankRequired = document.getElementById('squad-in-rank').value;
      const server = document.getElementById('squad-in-server').value;
      const hostRole = document.getElementById('squad-in-role').value;
      const membersMax = document.getElementById('squad-in-slots').value;
      const rolesNeededStr = document.getElementById('squad-in-needed').value;
      const micRequired = document.getElementById('squad-in-mic').checked;

      const rolesNeeded = rolesNeededStr.split(',').map(r => r.trim()).filter(Boolean);

      store.addSquad({
        title,
        gameId,
        gameName,
        mode,
        rankRequired,
        server,
        hostRole,
        membersMax,
        rolesNeeded,
        micRequired
      });

      sound.play('join');
      formCreateSquad.reset();
      document.getElementById('modal-create-squad')?.classList.remove('active');
      showToast('⚔️ สร้างห้องหาตี้สำเร็จ! ได้รับ +30 XP', 'success');
      store.setTab('lfg');
    });
  }

  // Modal: Join Squad Confirmation
  const formJoinSquad = document.getElementById('form-join-squad');
  if (formJoinSquad) {
    formJoinSquad.addEventListener('submit', (e) => {
      e.preventDefault();
      const modal = document.getElementById('modal-join-squad');
      const squadId = modal.dataset.targetSquadId;
      const roleSelect = document.getElementById('join-squad-role-select');
      const role = roleSelect ? roleSelect.value : 'Player';

      const res = store.joinSquad(squadId, role);
      if (res.success) {
        sound.play('join');
        showToast(`🎉 ${res.message} (+25 XP)`, 'success');
      } else {
        sound.play('click');
        showToast(`⚠️ ${res.message}`, 'info');
      }

      modal.classList.remove('active');
    });
  }

  // Modal: Register Tournament
  const formRegTour = document.getElementById('form-register-tour');
  if (formRegTour) {
    formRegTour.addEventListener('submit', (e) => {
      e.preventDefault();
      const modal = document.getElementById('modal-register-tour');
      const tourId = modal.dataset.tourId;
      const teamName = document.getElementById('tour-in-teamname').value;

      const res = store.registerTournament(tourId, teamName);
      if (res.success) {
        sound.play('success');
        showToast(`🏆 ${res.message} (+100 XP)`, 'success');
      } else {
        sound.play('click');
        showToast(`⚠️ ${res.message}`, 'info');
      }

      formRegTour.reset();
      modal.classList.remove('active');
    });
  }

  // Modal: Add Review
  const formAddReview = document.getElementById('form-add-review');
  if (formAddReview) {
    formAddReview.addEventListener('submit', (e) => {
      e.preventDefault();
      const gameSelect = document.getElementById('rev-in-game');
      const gameId = gameSelect.value;
      const gameName = gameSelect.options[gameSelect.selectedIndex].text;
      const overallRating = document.getElementById('rev-in-rating').value;
      const title = document.getElementById('rev-in-title').value;
      const content = document.getElementById('rev-in-content').value;
      const gameplay = document.getElementById('rev-in-gp').value;
      const graphics = document.getElementById('rev-in-gfx').value;
      const story = document.getElementById('rev-in-story').value;
      const soundtrack = document.getElementById('rev-in-snd').value;

      store.addReview({
        gameId,
        gameName,
        overallRating,
        title,
        content,
        gameplay,
        graphics,
        story,
        soundtrack
      });

      sound.play('success');
      formAddReview.reset();
      document.getElementById('modal-add-review')?.classList.remove('active');
      showToast('⭐ ส่งรีวิวเกมสำเร็จ! ได้รับ +40 XP', 'success');
      store.setTab('reviews');
    });
  }

  // Modal: Create Channel (Voice Room or Text Channel)
  const modalCreateChan = document.getElementById('modal-create-channel');
  const formCreateChan = document.getElementById('form-create-channel');
  if (formCreateChan && modalCreateChan) {
    // Room Type Toggle
    const typeBtns = modalCreateChan.querySelectorAll('.btn-room-type-toggle');
    const inType = modalCreateChan.querySelector('#channel-in-type');
    const inIcon = modalCreateChan.querySelector('#channel-in-icon');
    const groupSlots = modalCreateChan.querySelector('#group-channel-slots');

    typeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        sound.play('click');
        typeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const roomType = btn.dataset.roomType;
        if (inType) inType.value = roomType;

        if (groupSlots) {
          groupSlots.style.display = roomType === 'voice' ? 'block' : 'none';
        }
        if (inIcon) {
          inIcon.value = roomType === 'voice' ? '🔊' : '💬';
        }
      });
    });

    // Preset Icon Chips
    modalCreateChan.querySelectorAll('.btn-icon-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        sound.play('click');
        if (inIcon) inIcon.value = chip.dataset.icon;
      });
    });

    // Form Submit
    formCreateChan.addEventListener('submit', async (e) => {
      e.preventDefault();
      const type = inType ? inType.value : 'voice';
      const name = document.getElementById('channel-in-name').value;
      const category = document.getElementById('channel-in-category').value;
      const icon = inIcon ? inIcon.value : (type === 'voice' ? '🔊' : '💬');
      const slots = parseInt(document.getElementById('channel-in-slots')?.value || '5', 10);
      const topic = document.getElementById('channel-in-topic')?.value || '';

      sound.play('success');
      triggerConfetti(window.innerWidth / 2, window.innerHeight * 0.4, 40);

      store.awardXP(25);

      if (type === 'voice') {
        const newVc = voiceManager.addVoiceChannel({ name, icon, category, slots, topic });
        store.setTab('chat');
        setTimeout(() => {
          setActiveRoom('voice', newVc.id);
        }, 100);
        showToast(`🎉 สร้างห้องเสียง "${name}" สำเร็จ! (+25 XP)`, 'success');
      } else {
        const newTxt = addCustomTextChannel({ name, icon, category, topic });
        store.setTab('chat');
        setTimeout(() => {
          setActiveRoom('text', newTxt.id);
        }, 100);
        showToast(`🎉 สร้างห้องข้อความ "${name}" สำเร็จ! (+25 XP)`, 'success');
      }

      formCreateChan.reset();
      modalCreateChan.classList.remove('active');
    });
  }
}

function initPostMediaUploader() {
  window._postMediaState = {
    type: 'none',
    url: null
  };

  const tabs = document.querySelectorAll('#modal-create-post .media-type-btn');
  const panelImg = document.getElementById('panel-image');
  const panelVid = document.getElementById('panel-video');
  const panelYt = document.getElementById('panel-youtube');
  const presetsRow = document.getElementById('post-media-presets');
  const previewStage = document.getElementById('post-media-preview-stage');
  const previewBody = document.getElementById('post-media-preview-body');
  const btnRemove = document.getElementById('btn-remove-post-media');

  const fileImg = document.getElementById('file-post-image');
  const fileVid = document.getElementById('file-post-video');
  const dropImg = document.getElementById('dropzone-post-image');
  const dropVid = document.getElementById('dropzone-post-video');

  const inImgUrl = document.getElementById('post-in-image-url');
  const inVidUrl = document.getElementById('post-in-video-url');
  const inYtUrl = document.getElementById('post-in-youtube-url');

  const updatePreview = () => {
    const { type, url } = window._postMediaState;
    if (!url || type === 'none') {
      if (previewStage) previewStage.style.display = 'none';
      if (previewBody) previewBody.innerHTML = '';
      return;
    }

    if (previewStage) previewStage.style.display = 'block';
    if (previewBody) {
      if (type === 'image') {
        previewBody.innerHTML = `<img src="${url}" alt="Preview" class="preview-media-item">`;
      } else if (type === 'video') {
        previewBody.innerHTML = `<video src="${url}" controls playsinline class="preview-media-item"></video>`;
      } else if (type === 'youtube') {
        let embed = url;
        if (embed.includes('watch?v=')) embed = embed.replace('watch?v=', 'embed/');
        else if (embed.includes('youtu.be/')) embed = embed.replace('youtu.be/', 'www.youtube.com/embed/');
        previewBody.innerHTML = `<iframe src="${embed}" class="preview-media-item" frameborder="0"></iframe>`;
      }
    }
  };

  window._resetPostMedia = () => {
    window._postMediaState = { type: 'none', url: null };
    tabs.forEach(t => t.classList.toggle('active', t.dataset.mtype === 'none'));
    if (panelImg) panelImg.style.display = 'none';
    if (panelVid) panelVid.style.display = 'none';
    if (panelYt) panelYt.style.display = 'none';
    if (presetsRow) presetsRow.style.display = 'none';
    if (inImgUrl) inImgUrl.value = '';
    if (inVidUrl) inVidUrl.value = '';
    if (inYtUrl) inYtUrl.value = '';
    if (fileImg) fileImg.value = '';
    if (fileVid) fileVid.value = '';
    updatePreview();
  };

  // Tabs click
  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      sound.play('click');
      tabs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const mtype = btn.dataset.mtype;
      window._postMediaState.type = mtype;

      if (panelImg) panelImg.style.display = mtype === 'image' ? 'block' : 'none';
      if (panelVid) panelVid.style.display = mtype === 'video' ? 'block' : 'none';
      if (panelYt) panelYt.style.display = mtype === 'youtube' ? 'block' : 'none';
      if (presetsRow) presetsRow.style.display = mtype !== 'none' ? 'flex' : 'none';

      // if changed type without url, clear
      if (mtype === 'none') {
        window._postMediaState.url = null;
      }
      updatePreview();
    });
  });

  // Dropzone clicks
  if (dropImg && fileImg) {
    dropImg.addEventListener('click', () => fileImg.click());
    fileImg.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (ev) => {
          window._postMediaState.type = 'image';
          window._postMediaState.url = ev.target.result;
          updatePreview();
        };
        reader.readAsDataURL(file);
      }
    });
  }

  if (dropVid && fileVid) {
    dropVid.addEventListener('click', () => fileVid.click());
    fileVid.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (ev) => {
          window._postMediaState.type = 'video';
          window._postMediaState.url = ev.target.result;
          updatePreview();
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // URL inputs
  if (inImgUrl) {
    inImgUrl.addEventListener('input', (e) => {
      window._postMediaState.type = 'image';
      window._postMediaState.url = e.target.value.trim() || null;
      updatePreview();
    });
  }

  if (inVidUrl) {
    inVidUrl.addEventListener('input', (e) => {
      window._postMediaState.type = 'video';
      window._postMediaState.url = e.target.value.trim() || null;
      updatePreview();
    });
  }

  if (inYtUrl) {
    inYtUrl.addEventListener('input', (e) => {
      window._postMediaState.type = 'youtube';
      window._postMediaState.url = e.target.value.trim() || null;
      updatePreview();
    });
  }

  // Presets
  document.querySelectorAll('#post-media-presets .btn-preset-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      sound.play('click');
      const ptype = chip.dataset.type;
      const purl = chip.dataset.url;
      window._postMediaState.type = ptype;
      window._postMediaState.url = purl;

      tabs.forEach(t => t.classList.toggle('active', t.dataset.mtype === ptype));
      if (panelImg) panelImg.style.display = ptype === 'image' ? 'block' : 'none';
      if (panelVid) panelVid.style.display = ptype === 'video' ? 'block' : 'none';
      if (panelYt) panelYt.style.display = 'none';

      if (ptype === 'image' && inImgUrl) inImgUrl.value = purl;
      if (ptype === 'video' && inVidUrl) inVidUrl.value = purl;

      updatePreview();
    });
  });

  // Remove preview
  if (btnRemove) {
    btnRemove.addEventListener('click', () => {
      sound.play('click');
      window._postMediaState.url = null;
      if (inImgUrl) inImgUrl.value = '';
      if (inVidUrl) inVidUrl.value = '';
      if (inYtUrl) inYtUrl.value = '';
      if (fileImg) fileImg.value = '';
      if (fileVid) fileVid.value = '';
      updatePreview();
    });
  }
}

function initStoryCreator() {
  const form = document.getElementById('form-create-story');
  if (!form) return;

  let currentStoryType = 'image'; // 'image' | 'video'
  let currentStoryUrl = null;
  let currentStoryDuration = 0; // seconds

  const typeBtns = form.querySelectorAll('.story-type-btn');
  const dropzone = form.querySelector('#dropzone-story-file');
  const fileInput = form.querySelector('#file-story-media');
  const dropIcon = form.querySelector('#dropzone-story-icon');
  const dropText = form.querySelector('#dropzone-story-text');
  const urlInput = form.querySelector('#story-in-url');
  const captionInput = form.querySelector('#story-in-caption');
  const tagInput = form.querySelector('#story-in-tag');
  const previewCanvas = form.querySelector('#story-canvas-preview');

  const formatDuration = (secs) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const validateVideoDuration = (url, onValid, onInvalid) => {
    const tempVid = document.createElement('video');
    tempVid.preload = 'metadata';
    tempVid.src = url;
    tempVid.onloadedmetadata = () => {
      const dur = tempVid.duration;
      if (dur > 120) { // Max 2 minutes (120 seconds)
        if (onInvalid) onInvalid(dur);
      } else {
        if (onValid) onValid(dur);
      }
    };
    tempVid.onerror = () => {
      // In case of CORS or preview error, allow default duration
      if (onValid) onValid(15);
    };
  };

  const updateStoryPreview = () => {
    if (!previewCanvas) return;
    if (!currentStoryUrl) {
      previewCanvas.innerHTML = `<div class="story-preview-placeholder">กรุณาเลือกไฟล์หรือคลิกตัวอย่างด้านบน (คลิปวิดีโอต้องยาวไม่เกิน 2 นาที)</div>`;
      return;
    }

    if (currentStoryType === 'video') {
      previewCanvas.innerHTML = `
        <div class="story-preview-frame">
          <video src="${currentStoryUrl}" autoplay muted loop playsinline class="story-preview-media"></video>
          <div class="story-preview-badge">🎬 วิดีโอ • ${currentStoryDuration ? formatDuration(currentStoryDuration) : '< 2:00'} นาที</div>
          <div class="story-preview-overlay">
            <div class="story-preview-cap">${captionInput.value || 'ตัวอย่างแคปชั่น...'}</div>
            <div class="story-preview-tag">${tagInput.value || '#Highlight'}</div>
          </div>
        </div>
      `;
    } else {
      previewCanvas.innerHTML = `
        <div class="story-preview-frame">
          <img src="${currentStoryUrl}" alt="Preview" class="story-preview-media">
          <div class="story-preview-badge">📸 ภาพถ่าย</div>
          <div class="story-preview-overlay">
            <div class="story-preview-cap">${captionInput.value || 'ตัวอย่างแคปชั่น...'}</div>
            <div class="story-preview-tag">${tagInput.value || '#Highlight'}</div>
          </div>
        </div>
      `;
    }
  };

  // Story Type tabs
  typeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sound.play('click');
      typeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentStoryType = btn.dataset.stype;

      if (dropIcon) dropIcon.textContent = currentStoryType === 'video' ? '🎥' : '📸';
      if (dropText) dropText.textContent = currentStoryType === 'video' ? 'คลิกเพื่อเลือกไฟล์วิดีโอจากเครื่อง (ความยาวไม่เกิน 2 นาที)' : 'คลิกเพื่อเลือกไฟล์รูปภาพจากเครื่อง';
      if (fileInput) fileInput.accept = currentStoryType === 'video' ? 'video/mp4,video/webm,video/ogg' : 'image/*';

      updateStoryPreview();
    });
  });

  // Dropzone click
  if (dropzone && fileInput) {
    dropzone.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        currentStoryType = file.type.startsWith('video') ? 'video' : 'image';
        typeBtns.forEach(b => b.classList.toggle('active', b.dataset.stype === currentStoryType));
        const reader = new FileReader();
        reader.onload = (ev) => {
          const loadedUrl = ev.target.result;
          if (currentStoryType === 'video') {
            validateVideoDuration(loadedUrl, (dur) => {
              currentStoryDuration = dur;
              currentStoryUrl = loadedUrl;
              updateStoryPreview();
              showToast(`⏱️ ตรวจสอบวิดีโอเรียบร้อย (ความยาว: ${formatDuration(dur)} นาที)`, 'info');
            }, (dur) => {
              fileInput.value = '';
              currentStoryUrl = null;
              currentStoryDuration = 0;
              updateStoryPreview();
              showToast(`⚠️ วิดีโอสตอรี่ต้องมีความยาวไม่เกิน 2 นาที (120 วินาที) คลิปนี้ยาว ${formatDuration(dur)} นาที กรุณาเลือกคลิปใหม่`, 'danger');
            });
          } else {
            currentStoryUrl = loadedUrl;
            updateStoryPreview();
          }
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // URL input
  if (urlInput) {
    urlInput.addEventListener('input', (e) => {
      const val = e.target.value.trim();
      if (!val) {
        currentStoryUrl = null;
        updateStoryPreview();
        return;
      }
      if (currentStoryType === 'video') {
        validateVideoDuration(val, (dur) => {
          currentStoryDuration = dur;
          currentStoryUrl = val;
          updateStoryPreview();
        }, (dur) => {
          currentStoryUrl = null;
          updateStoryPreview();
          showToast(`⚠️ วิดีโอต้องยาวไม่เกิน 2 นาที (คลิปนี้ยาว ${formatDuration(dur)} นาที)`, 'danger');
        });
      } else {
        currentStoryUrl = val;
        updateStoryPreview();
      }
    });
  }

  if (captionInput) {
    captionInput.addEventListener('input', updateStoryPreview);
  }

  if (tagInput) {
    tagInput.addEventListener('input', updateStoryPreview);
  }

  // Presets
  form.querySelectorAll('.btn-story-preset').forEach(btn => {
    btn.addEventListener('click', () => {
      sound.play('click');
      const ptype = btn.dataset.type;
      const purl = btn.dataset.url;
      const pcap = btn.dataset.caption;
      const ptag = btn.dataset.tag;

      currentStoryType = ptype;
      currentStoryUrl = purl;
      currentStoryDuration = ptype === 'video' ? 12 : 0;

      typeBtns.forEach(b => b.classList.toggle('active', b.dataset.stype === ptype));
      if (urlInput) urlInput.value = purl;
      if (captionInput) captionInput.value = pcap;
      if (tagInput) tagInput.value = ptag;

      updateStoryPreview();
    });
  });

  // Tag suggestion chips
  form.querySelectorAll('.story-tag-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      sound.play('click');
      const tag = chip.dataset.tag;
      if (tagInput) {
        if (!tagInput.value.includes(tag)) {
          tagInput.value = (tagInput.value + ' ' + tag).trim();
        }
        updateStoryPreview();
      }
    });
  });

  // Form Submit
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (currentStoryType === 'video' && currentStoryDuration > 120) {
      showToast('⚠️ วิดีโอสตอรี่ต้องมีความยาวไม่เกิน 2 นาที (120 วินาที)', 'danger');
      return;
    }

    const caption = captionInput.value.trim();
    const tag = tagInput.value.trim();
    const mediaUrl = currentStoryUrl || 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1080&q=80';

    const newStory = store.addStory({
      type: currentStoryType,
      mediaUrl: mediaUrl,
      caption: caption,
      tag: tag || '#GamerStories'
    });

    sound.play('success');
    triggerConfetti(window.innerWidth / 2, window.innerHeight * 0.4, 16);
    form.reset();
    currentStoryUrl = null;
    currentStoryDuration = 0;
    updateStoryPreview();

    document.getElementById('modal-create-story')?.classList.remove('active');
    showToast('🚀 เผยแพร่สตอรี่เกมเมอร์สำเร็จ! ได้รับ +35 XP', 'success');

    // Open viewer to view newly created story
    setTimeout(() => {
      openStoryViewer(newStory.id);
    }, 300);
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
  }, 2800);
}
