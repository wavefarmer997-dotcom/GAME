/**
 * NEXUS GAMING TH - Gamer Profile & Gamification Modal
 * Features: Multi-tab Profile, Cover Banner Customizer, Background Theme Customizer, Avatar Editor
 */

import { store } from '../store.js';
import { sound } from '../audio.js';
import { openStoryViewer, openCreateStoryModal } from './stories.js';
import { openLightbox } from './forum.js';
import { showToast } from './effects.js';

let activeProfileTab = 'overview'; // 'overview', 'stories', 'posts', 'gallery'
let viewingPlayerId = null; // null means current logged-in user

export function openPlayerProfile(playerId = null) {
  viewingPlayerId = playerId;
  activeProfileTab = 'overview';
  const modal = document.getElementById('modal-user-profile');
  if (!modal) return;
  renderProfileModal();
  modal.classList.add('active');
}

export function setupProfileModal() {
  const modal = document.getElementById('modal-user-profile');
  if (!modal) return;

  const headerProfileBtn = document.getElementById('btn-header-profile');
  if (headerProfileBtn) {
    headerProfileBtn.addEventListener('click', () => {
      sound.play('click');
      openPlayerProfile(null);
    });
  }

  // Close Button
  const closeBtn = modal.querySelector('.modal-close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  renderProfileModal();
  store.subscribe('user:updated', renderProfileModal);
  store.subscribe('friends:updated', renderProfileModal);
  store.subscribe('stories:updated', renderProfileModal);
  store.subscribe('posts:updated', renderProfileModal);

  // Initialize the Customization Modal Handlers
  initProfileCustomizationModal();
}

function renderProfileModal() {
  const modal = document.getElementById('modal-user-profile');
  if (!modal) return;

  const { user, stories, posts } = store.state;
  const isSelf = !viewingPlayerId || viewingPlayerId === user.id || viewingPlayerId === user.name;

  // Determine which user data to display
  let profileUser = user;
  if (!isSelf) {
    const targetPlayer = store.getPlayerById(viewingPlayerId) || 
      (store.getPlayers() || []).find(p => p.id === viewingPlayerId || p.name === viewingPlayerId);
    
    if (targetPlayer) {
      profileUser = {
        id: targetPlayer.id,
        name: targetPlayer.name,
        gamerTag: targetPlayer.gamerTag,
        bio: targetPlayer.bio || 'เกมเมอร์แห่ง NEXUS GAMING TH พร้อมร่วมตี้และลุยไปด้วยกัน!',
        avatar: targetPlayer.avatar,
        banner: targetPlayer.banner || 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
        level: targetPlayer.level || 30,
        xp: 2400,
        xpNext: 3500,
        rankTitle: targetPlayer.rankTitle || targetPlayer.rank || '🌟 Pro Gamer',
        joinedDate: 'มกราคม 2025',
        favoriteGames: targetPlayer.favoriteGames || [targetPlayer.primaryGame || 'Valorant'],
        primaryGame: targetPlayer.primaryGame || 'Valorant',
        status: targetPlayer.status || 'online',
        statusText: targetPlayer.statusText || 'ออนไลน์',
        mutualFriends: targetPlayer.mutualFriends || 2,
        followersCount: targetPlayer.followersCount || 150,
        badges: [
          { id: 'b-v', name: '🛡️ Verified Player', icon: '🛡️', desc: 'ยืนยันตัวตนใน NEXUS เรียบร้อย' },
          { id: 'b-c', name: '🎯 Top Performer', icon: '🎯', desc: 'อัตราการชนะสูงและเป็นมิตร' }
        ]
      };
    }
  }

  const xpPercent = Math.min(100, Math.round((profileUser.xp / profileUser.xpNext) * 100));

  // Stories & posts for this profile
  const userStories = stories.filter(s => s.userId === profileUser.id || s.userName === profileUser.name);
  const userPosts = posts.filter(p => p.author.id === profileUser.id || p.author.name === profileUser.name);
  const hasActiveStory = userStories.length > 0;

  // Collect all media from posts & stories
  const mediaItems = [];
  userStories.forEach(s => {
    if (s.mediaUrl) {
      mediaItems.push({
        type: s.type,
        url: s.mediaUrl,
        caption: s.caption,
        source: 'สตอรี่',
        date: s.createdAt,
        storyId: s.id
      });
    }
  });
  userPosts.forEach(p => {
    if (p.video) {
      mediaItems.push({
        type: 'video',
        url: p.video,
        caption: p.title,
        source: 'กระทู้',
        date: p.createdAt,
        postId: p.id
      });
    } else if (p.image) {
      mediaItems.push({
        type: 'image',
        url: p.image,
        caption: p.title,
        source: 'กระทู้',
        date: p.createdAt,
        postId: p.id
      });
    }
  });

  // Update Header Avatar & Info in Nav Bar (for current user)
  const navAvatar = document.querySelector('#header-user-avatar');
  const navName = document.querySelector('#header-user-name');
  const navLevel = document.querySelector('#header-user-level');
  if (navAvatar) navAvatar.src = user.avatar;
  if (navName) navName.textContent = user.name;
  if (navLevel) navLevel.textContent = `LV.${user.level}`;

  // Fill Modal Content & Apply Custom Background Theme
  const modalProfileCard = modal.querySelector('.modal-profile-card');
  if (modalProfileCard) {
    modalProfileCard.className = 'modal-profile-card';
    if (isSelf && user.profileBgTheme) {
      modalProfileCard.classList.add(`theme-${user.profileBgTheme}`);
    }
    if (isSelf && user.profileCustomBg) {
      modalProfileCard.style.backgroundImage = `linear-gradient(rgba(10, 14, 23, 0.88), rgba(10, 14, 23, 0.94)), url('${user.profileCustomBg}')`;
      modalProfileCard.style.backgroundSize = 'cover';
      modalProfileCard.style.backgroundPosition = 'center';
    } else {
      modalProfileCard.style.backgroundImage = '';
    }
  }

  const body = modal.querySelector('.modal-profile-content');
  if (!body) return;

  const isFriend = !isSelf && store.isFriend(profileUser.id);
  const isPending = !isSelf && store.isPending(profileUser.id);
  const hasIncoming = !isSelf && store.hasIncomingRequest(profileUser.id);
  const isFollowing = !isSelf && store.isFollowing(profileUser.id);

  body.innerHTML = `
    <!-- Profile Cover Banner -->
    <div class="profile-banner-wrap" style="background-image: url('${profileUser.banner}'); background-size: cover; background-position: center;">
      <div class="profile-banner-overlay"></div>
      ${isSelf ? `
        <button class="btn-edit-banner-quick" id="btn-quick-edit-banner" title="เปลี่ยนภาพปกโปรไฟล์">
          📸 เปลี่ยนภาพปก
        </button>
      ` : `
        <div class="player-profile-badge-overlay">
          <span class="player-status-dot status-${profileUser.status || 'online'}"></span>
          <span>${profileUser.statusText || 'ออนไลน์'}</span>
        </div>
      `}
    </div>

    <div class="profile-header-meta">
      <div class="profile-avatar-container ${hasActiveStory ? 'has-story-ring' : ''}" id="btn-profile-avatar-action" title="${hasActiveStory ? 'คลิกเพื่อดูสตอรี่' : (isSelf ? 'คลิกเพื่อสร้างสตอรี่' : 'โปรไฟล์เกมเมอร์')}">
        <img src="${profileUser.avatar}" alt="${profileUser.name}" class="profile-avatar-lg">
        <div class="profile-avatar-badge">${hasActiveStory ? '⚡' : (isSelf ? '+' : '🎮')}</div>
        ${isSelf ? `<div class="profile-avatar-edit-hint" id="btn-quick-edit-avatar" title="เปลี่ยนรูปโปรไฟล์">📷</div>` : ''}
      </div>

      <div class="profile-names-wrap">
        <div class="profile-name-title">
          ${profileUser.name} 
          <span style="font-size: 0.9rem; color: var(--text-muted); font-family: var(--font-mono);">${profileUser.gamerTag}</span>
        </div>
        <div class="profile-rank-tag">
          <span>${profileUser.rankTitle}</span> • <span style="color: var(--text-muted);">${isSelf ? `เข้าร่วมเมื่อ ${profileUser.joinedDate}` : `🎮 ${profileUser.primaryGame || 'Gamer'}`}</span>
        </div>
        ${!isSelf ? `
          <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 4px;">
            🤝 เพื่อนร่วมกัน ${profileUser.mutualFriends || 0} คน • 👥 ผู้ติดตาม ${profileUser.followersCount || 0} คน
          </div>
        ` : ''}
      </div>

      <div class="profile-header-actions">
        ${isSelf ? `
          <button class="btn btn-primary btn-sm" id="btn-profile-add-story">
            ➕ เพิ่มสตอรี่
          </button>
          <button class="btn btn-secondary btn-sm" id="btn-open-profile-customizer" title="เปลี่ยนภาพปกและพื้นหลังโปรไฟล์">
            🎨 ปรับแต่งโปรไฟล์
          </button>
          <button class="btn btn-secondary btn-sm" id="btn-profile-logout" style="color: #ff4655; border-color: rgba(255, 70, 85, 0.4);" title="ออกจากระบบ">
            🚪 ออกจากระบบ
          </button>
        ` : `
          <!-- Friend Action Button -->
          ${isFriend ? `
            <button class="btn btn-secondary btn-sm is-friend-btn" id="btn-profile-remove-friend" title="เป็นเพื่อนกันแล้ว (คลิกเพื่อลบเพื่อน)">
              🤝 เพื่อนกันแล้ว
            </button>
          ` : (isPending ? `
            <button class="btn btn-secondary btn-sm is-pending-btn" id="btn-profile-cancel-req" title="คลิกเพื่อยกเลิกคำขอ">
              ⏳ ส่งคำขอแล้ว (ยกเลิก)
            </button>
          ` : (hasIncoming ? `
            <button class="btn btn-primary btn-sm" id="btn-profile-accept-req">
              ✓ ยอมรับคำขอ (+25 XP)
            </button>
          ` : `
            <button class="btn btn-primary btn-sm" id="btn-profile-add-friend">
              ➕ เพิ่มเพื่อน (+10 XP)
            </button>
          `))}

          <!-- Follow Button -->
          <button class="btn btn-secondary btn-sm" id="btn-profile-toggle-follow">
            ${isFollowing ? '✓ ติดตามแล้ว' : '⭐ ติดตาม'}
          </button>

          <!-- Invite to Squad Button -->
          <button class="btn btn-secondary btn-sm" id="btn-profile-invite-squad" title="ชวนเข้าร่วมตี้">
            🎮 ชวนเข้าตี้
          </button>

          <!-- Direct Chat Button -->
          <button class="btn btn-secondary btn-sm" id="btn-profile-direct-chat" title="ส่งข้อความแชต">
            💬 แชต
          </button>
        `}
      </div>
    </div>

    <!-- XP Bar Section -->
    <div class="xp-progress-section">
      <div style="display: flex; justify-content: space-between; font-size: 0.85rem;">
        <span>⚡ เลเวล: <strong style="color: var(--primary);">Lv.${profileUser.level}</strong></span>
        <span style="font-family: var(--font-mono); color: var(--text-muted);">${profileUser.xp} / ${profileUser.xpNext} XP (${xpPercent}%)</span>
      </div>
      <div class="xp-bar-bg">
        <div class="xp-bar-fill" style="width: ${xpPercent}%;"></div>
      </div>
    </div>

    <!-- Profile Sub-Navigation Tabs -->
    <div class="profile-tabs-bar">
      <button class="profile-tab-btn ${activeProfileTab === 'overview' ? 'active' : ''}" data-ptab="overview">
        📊 ภาพรวม & สถิติ
      </button>
      <button class="profile-tab-btn ${activeProfileTab === 'stories' ? 'active' : ''}" data-ptab="stories">
        ⚡ สตอรี่ (${userStories.length})
      </button>
      <button class="profile-tab-btn ${activeProfileTab === 'posts' ? 'active' : ''}" data-ptab="posts">
        📝 กระทู้ (${userPosts.length})
      </button>
      <button class="profile-tab-btn ${activeProfileTab === 'gallery' ? 'active' : ''}" data-ptab="gallery">
        🖼️ แกลเลอรี (${mediaItems.length})
      </button>
    </div>

    <!-- Tab Content Area -->
    <div class="profile-tab-content-body">
      ${renderActiveTabContent({ user: profileUser, userStories, userPosts, mediaItems, isSelf })}
    </div>
  `;

  // Bind Sub-Tab Switching
  body.querySelectorAll('.profile-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      sound.play('tab');
      activeProfileTab = btn.dataset.ptab;
      renderProfileModal();
    });
  });

  // Self actions
  if (isSelf) {
    const quickEditBanner = body.querySelector('#btn-quick-edit-banner');
    if (quickEditBanner) {
      quickEditBanner.addEventListener('click', () => {
        sound.play('click');
        openProfileCustomizationModal('banner');
      });
    }

    const quickEditAvatar = body.querySelector('#btn-quick-edit-avatar');
    if (quickEditAvatar) {
      quickEditAvatar.addEventListener('click', (e) => {
        e.stopPropagation();
        sound.play('click');
        openProfileCustomizationModal('avatar');
      });
    }

    const openCustomizerBtn = body.querySelector('#btn-open-profile-customizer');
    if (openCustomizerBtn) {
      openCustomizerBtn.addEventListener('click', () => {
        sound.play('click');
        openProfileCustomizationModal('banner');
      });
    }

    const addStoryBtn = body.querySelector('#btn-profile-add-story');
    if (addStoryBtn) {
      addStoryBtn.addEventListener('click', () => {
        sound.play('click');
        openCreateStoryModal();
      });
    }

    const profileLogoutBtn = body.querySelector('#btn-profile-logout');
    if (profileLogoutBtn) {
      profileLogoutBtn.addEventListener('click', () => {
        sound.play('click');
        if (confirm(`คุณต้องการออกจากระบบ "${user.name}" ใช่หรือไม่?`)) {
          modal.classList.remove('active');
          store.logout();
          showToast('🚪 ออกจากระบบเรียบร้อยแล้ว', 'info');
        }
      });
    }
  } else {
    // Other player social actions
    const addFriendBtn = body.querySelector('#btn-profile-add-friend');
    if (addFriendBtn) {
      addFriendBtn.addEventListener('click', () => {
        const res = store.sendFriendRequest(profileUser.id);
        if (res.success) {
          sound.play('success');
          showToast(res.message, 'success');
        } else {
          showToast(res.message, 'info');
        }
        renderProfileModal();
      });
    }

    const cancelReqBtn = body.querySelector('#btn-profile-cancel-req');
    if (cancelReqBtn) {
      cancelReqBtn.addEventListener('click', () => {
        sound.play('click');
        store.cancelFriendRequest(profileUser.id);
        showToast('ยกเลิกคำขอเป็นเพื่อนเรียบร้อยแล้ว', 'info');
        renderProfileModal();
      });
    }

    const acceptReqBtn = body.querySelector('#btn-profile-accept-req');
    if (acceptReqBtn) {
      acceptReqBtn.addEventListener('click', () => {
        const res = store.acceptFriendRequest(profileUser.id);
        sound.play('levelUp');
        showToast(res.message, 'success');
        renderProfileModal();
      });
    }

    const removeFriendBtn = body.querySelector('#btn-profile-remove-friend');
    if (removeFriendBtn) {
      removeFriendBtn.addEventListener('click', () => {
        if (confirm(`คุณต้องการลบ ${profileUser.name} ออกจากรายชื่อเพื่อนใช่หรือไม่?`)) {
          sound.play('click');
          store.removeFriend(profileUser.id);
          showToast(`ลบ ${profileUser.name} ออกจากเพื่อนแล้ว`, 'info');
          renderProfileModal();
        }
      });
    }

    const toggleFollowBtn = body.querySelector('#btn-profile-toggle-follow');
    if (toggleFollowBtn) {
      toggleFollowBtn.addEventListener('click', () => {
        const res = store.toggleFollow(profileUser.id);
        sound.play('click');
        showToast(res.message, res.following ? 'success' : 'info');
        renderProfileModal();
      });
    }

    const inviteSquadBtn = body.querySelector('#btn-profile-invite-squad');
    if (inviteSquadBtn) {
      inviteSquadBtn.addEventListener('click', () => {
        sound.play('success');
        showToast(`🚀 ส่งคำชวน ${profileUser.name} เข้าร่วมตี้เล่นเกมเรียบร้อยแล้ว!`, 'success');
      });
    }

    const directChatBtn = body.querySelector('#btn-profile-direct-chat');
    if (directChatBtn) {
      directChatBtn.addEventListener('click', () => {
        sound.play('click');
        modal.classList.remove('active');
        store.setTab('chat');
        setTimeout(() => {
          const chatInput = document.getElementById('in-chat-text');
          if (chatInput) {
            chatInput.value = `@${profileUser.name} `;
            chatInput.focus();
          }
        }, 150);
      });
    }
  }

  // Bind Avatar Click (View Story or Add)
  const avatarAction = body.querySelector('#btn-profile-avatar-action');
  if (avatarAction) {
    avatarAction.addEventListener('click', () => {
      if (hasActiveStory) {
        sound.play('laser');
        modal.classList.remove('active');
        openStoryViewer(userStories[0].id);
      } else if (isSelf) {
        sound.play('click');
        openCreateStoryModal();
      }
    });
  }

  // Bind Story Highlights Cards
  body.querySelectorAll('.profile-story-card').forEach(card => {
    card.addEventListener('click', () => {
      const storyId = card.dataset.storyId;
      sound.play('laser');
      modal.classList.remove('active');
      openStoryViewer(storyId);
    });
  });

  // Bind Gallery Lightbox clicks
  body.querySelectorAll('.gallery-grid-item').forEach(item => {
    item.addEventListener('click', () => {
      const type = item.dataset.mediaType;
      const url = item.dataset.mediaUrl;
      const caption = item.dataset.mediaCaption;
      sound.play('click');
      if (type === 'image') {
        openLightbox(url, caption);
      } else if (type === 'video') {
        const storyId = item.dataset.storyId;
        if (storyId) {
          modal.classList.remove('active');
          openStoryViewer(storyId);
        } else {
          openLightbox(url, caption);
        }
      }
    });
  });

  // Bind Create Post from Profile
  const createPostTrigger = body.querySelector('#btn-profile-create-post');
  if (createPostTrigger) {
    createPostTrigger.addEventListener('click', () => {
      modal.classList.remove('active');
      document.getElementById('modal-create-post')?.classList.add('active');
    });
  }
}

/**
 * Open Profile Customization Modal & Set Active Tab
 */
export function openProfileCustomizationModal(targetTab = 'banner') {
  const modal = document.getElementById('modal-edit-profile-customization');
  if (!modal) return;

  const { user } = store.state;

  // Set Tab
  const tabBtns = modal.querySelectorAll('.profile-edit-tab-btn');
  const panels = modal.querySelectorAll('.profile-edit-panel');

  tabBtns.forEach(b => b.classList.toggle('active', b.dataset.tab === targetTab));
  panels.forEach(p => p.style.display = p.id === `panel-edit-${targetTab}` ? 'block' : 'none');

  // Fill Inputs with current user data
  const inBanner = modal.querySelector('#profile-in-banner-url');
  if (inBanner) inBanner.value = user.banner || '';

  const inAvatar = modal.querySelector('#profile-in-avatar-url');
  if (inAvatar) inAvatar.value = user.avatar || '';

  const inCustomWp = modal.querySelector('#profile-in-custom-wallpaper');
  if (inCustomWp) inCustomWp.value = user.profileCustomBg || '';

  // Set Theme Radio
  const currentTheme = user.profileBgTheme || 'cyber-dark';
  modal.querySelectorAll('.bg-theme-option-card').forEach(card => {
    const radio = card.querySelector('input[type="radio"]');
    const isMatch = card.dataset.bgTheme === currentTheme;
    card.classList.toggle('active', isMatch);
    if (radio) radio.checked = isMatch;
  });

  // Update Live Preview
  updateBannerLivePreview(user.banner || '');

  modal.classList.add('active');
}

function updateBannerLivePreview(url) {
  const preview = document.getElementById('banner-live-preview-box');
  if (!preview) return;
  if (url) {
    preview.innerHTML = `
      <div style="width: 100%; height: 120px; border-radius: var(--radius-md); background: url('${url}') center/cover no-repeat; border: 1px solid var(--border-medium);"></div>
    `;
  } else {
    preview.innerHTML = `<div style="height: 60px; display: flex; align-items: center; justify-content: center; color: var(--text-muted); font-size: 0.8rem;">ยังไม่ได้เลือกภาพปก</div>`;
  }
}

/**
 * Initialize Profile Customization Modal Events
 */
function initProfileCustomizationModal() {
  const modal = document.getElementById('modal-edit-profile-customization');
  const form = document.getElementById('form-edit-profile-customization');
  if (!modal || !form) return;

  // 1. Sub-Tab Switching
  modal.querySelectorAll('.profile-edit-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      sound.play('tab');
      const tab = btn.dataset.tab;
      modal.querySelectorAll('.profile-edit-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      modal.querySelectorAll('.profile-edit-panel').forEach(p => {
        p.style.display = p.id === `panel-edit-${tab}` ? 'block' : 'none';
      });
    });
  });

  // 2. Banner File Upload
  const dropzoneBanner = modal.querySelector('#dropzone-profile-banner');
  const fileInputBanner = modal.querySelector('#file-profile-banner');
  const inBannerUrl = modal.querySelector('#profile-in-banner-url');

  if (dropzoneBanner && fileInputBanner) {
    dropzoneBanner.addEventListener('click', () => fileInputBanner.click());

    fileInputBanner.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const dataUrl = event.target.result;
          if (inBannerUrl) inBannerUrl.value = dataUrl;
          updateBannerLivePreview(dataUrl);
          sound.play('click');
        };
        reader.readAsDataURL(file);
      }
    });
  }

  if (inBannerUrl) {
    inBannerUrl.addEventListener('input', () => {
      updateBannerLivePreview(inBannerUrl.value.trim());
    });
  }

  // Preset Banner Chips
  modal.querySelectorAll('.btn-banner-preset').forEach(btn => {
    btn.addEventListener('click', () => {
      sound.play('click');
      const url = btn.dataset.url;
      if (inBannerUrl) inBannerUrl.value = url;
      updateBannerLivePreview(url);
    });
  });

  // 3. Background Theme Cards
  modal.querySelectorAll('.bg-theme-option-card').forEach(card => {
    card.addEventListener('click', () => {
      sound.play('click');
      modal.querySelectorAll('.bg-theme-option-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      const radio = card.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;
    });
  });

  // Custom Wallpaper Upload
  const btnBrowseWp = modal.querySelector('#btn-browse-wallpaper');
  const fileInputWp = modal.querySelector('#file-profile-wallpaper');
  const inCustomWp = modal.querySelector('#profile-in-custom-wallpaper');

  if (btnBrowseWp && fileInputWp) {
    btnBrowseWp.addEventListener('click', () => fileInputWp.click());

    fileInputWp.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const dataUrl = event.target.result;
          if (inCustomWp) inCustomWp.value = dataUrl;
          sound.play('click');
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // 4. Avatar File Upload & Presets
  const dropzoneAvatar = modal.querySelector('#dropzone-profile-avatar');
  const fileInputAvatar = modal.querySelector('#file-profile-avatar');
  const inAvatarUrl = modal.querySelector('#profile-in-avatar-url');

  if (dropzoneAvatar && fileInputAvatar) {
    dropzoneAvatar.addEventListener('click', () => fileInputAvatar.click());

    fileInputAvatar.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const dataUrl = event.target.result;
          if (inAvatarUrl) inAvatarUrl.value = dataUrl;
          sound.play('click');
        };
        reader.readAsDataURL(file);
      }
    });
  }

  modal.querySelectorAll('.btn-avatar-preset').forEach(img => {
    img.addEventListener('click', () => {
      sound.play('click');
      if (inAvatarUrl) inAvatarUrl.value = img.src;
    });
  });

  // 5. Form Submit (Save Profile Changes)
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const banner = inBannerUrl ? inBannerUrl.value.trim() : store.state.user.banner;
    const avatar = inAvatarUrl ? inAvatarUrl.value.trim() : store.state.user.avatar;
    const profileCustomBg = inCustomWp ? inCustomWp.value.trim() : '';

    const activeThemeCard = modal.querySelector('.bg-theme-option-card.active');
    const profileBgTheme = activeThemeCard ? activeThemeCard.dataset.bgTheme : 'cyber-dark';

    store.updateProfile({
      banner: banner || store.state.user.banner,
      avatar: avatar || store.state.user.avatar,
      profileBgTheme: profileBgTheme,
      profileCustomBg: profileCustomBg
    });

    sound.play('success');
    modal.classList.remove('active');

    // Show toast
    const toast = document.createElement('div');
    toast.className = 'toast success';
    toast.innerHTML = `<span>✨ ปรับแต่งภาพปกและพื้นหลังโปรไฟล์เรียบร้อยแล้ว!</span>`;
    const toastContainer = document.getElementById('toast-container');
    if (toastContainer) {
      toastContainer.appendChild(toast);
      setTimeout(() => toast.remove(), 3500);
    }
  });
}

function renderActiveTabContent({ user, userStories, userPosts, mediaItems, isSelf = true }) {
  if (activeProfileTab === 'overview') {
    return `
      <div style="padding: 10px 24px 24px;">
        <div class="profile-bio-box">
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-muted); margin-bottom: 6px; text-transform: uppercase;">
            💬 แนะนำตัว (Bio)
          </div>
          <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-primary);">
            ${user.bio || 'ยังไม่มีคำแนะนำตัว'}
          </p>
        </div>

        <div style="margin-top: 20px;">
          <h4 style="font-size: 1rem; color: var(--text-highlight); margin-bottom: 12px;">🏆 เหรียญตราเกียรติยศ (Badges)</h4>
          <div class="profile-badges-grid">
            ${(user.badges || []).map(b => `
              <div class="profile-badge-item">
                <div class="badge-icon-wrap">${b.icon}</div>
                <div class="badge-info-wrap">
                  <div class="badge-title">${b.name}</div>
                  <div class="badge-desc">${b.desc}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <div style="margin-top: 20px;">
          <h4 style="font-size: 1rem; color: var(--text-highlight); margin-bottom: 12px;">🎮 เกมโปรด</h4>
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            ${(user.favoriteGames || []).map(g => `
              <span class="badge-pill" style="padding: 6px 14px; font-size: 0.85rem; background: rgba(255, 255, 255, 0.06); border: 1px solid var(--border-subtle); color: #fff;">
                ${g}
              </span>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  if (activeProfileTab === 'stories') {
    return `
      <div style="padding: 10px 24px 24px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px;">
          <div>
            <h4 style="font-size: 1rem; color: var(--text-highlight);">⚡ สตอรี่ & ไฮไลท์${isSelf ? 'ของคุณ' : `ของ ${user.name}`}</h4>
            <p style="font-size: 0.8rem; color: var(--text-muted);">${isSelf ? 'สตอรี่จะแสดงบนหน้าฟีดชุมชนและหน้าโปรไฟล์' : 'คลิกเพื่อดูสตอรี่แบบเต็มจอ'}</p>
          </div>
          ${isSelf ? `
            <button class="btn btn-primary btn-sm" onclick="document.getElementById('modal-user-profile')?.classList.remove('active'); import('./stories.js').then(m => m.openCreateStoryModal());">
              ➕ เพิ่มสตอรี่ใหม่
            </button>
          ` : ''}
        </div>

        ${userStories.length ? `
          <div class="profile-stories-grid">
            ${userStories.map(story => `
              <div class="profile-story-card" data-story-id="${story.id}">
                ${story.type === 'video' ? `
                  <video src="${story.mediaUrl}" muted class="profile-story-thumb"></video>
                  <div class="profile-story-type-badge">🎬 คลิป</div>
                ` : `
                  <img src="${story.mediaUrl}" alt="${story.caption}" class="profile-story-thumb">
                  <div class="profile-story-type-badge">📸 ภาพ</div>
                `}
                <div class="profile-story-overlay">
                  <div class="profile-story-caption">${story.caption || 'Gamer Story'}</div>
                  <div class="profile-story-time">${story.createdAt}</div>
                </div>
              </div>
            `).join('')}
          </div>
        ` : `
          <div class="profile-empty-tab">
            <div style="font-size: 2.2rem; margin-bottom: 8px;">⚡</div>
            <h4>${isSelf ? 'คุณยังไม่มีสตอรี่ในขณะนี้' : `${user.name} ยังไม่ได้เผยแพร่สตอรี่`}</h4>
            <p>${isSelf ? 'แชร์ช่วงเวลาไฮไลท์การเล่นเกมของคุณได้เลยตอนนี้' : 'เมื่อมีสตอรี่ใหม่จะแสดงในหน้านี้'}</p>
          </div>
        `}
      </div>
    `;
  }

  if (activeProfileTab === 'posts') {
    return `
      <div style="padding: 10px 24px 24px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px;">
          <div>
            <h4 style="font-size: 1rem; color: var(--text-highlight);">📝 กระทู้${isSelf ? 'ที่คุณเคยสร้าง' : `ของ ${user.name}`}</h4>
            <p style="font-size: 0.8rem; color: var(--text-muted);">บทความ ไกด์ และวิดีโอคลิปที่เผยแพร่</p>
          </div>
          ${isSelf ? `
            <button class="btn btn-primary btn-sm" id="btn-profile-create-post">
              ✍️ ตั้งกระทู้ใหม่
            </button>
          ` : ''}
        </div>

        ${userPosts.length ? `
          <div class="profile-posts-list">
            ${userPosts.map(post => `
              <div class="profile-post-card">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 10px;">
                  <h5 class="profile-post-title">${post.title}</h5>
                  <span class="badge-pill" style="font-size: 0.7rem; background: rgba(var(--primary-rgb), 0.15); color: var(--primary); white-space: nowrap;">
                    ${post.gameName}
                  </span>
                </div>
                <p class="profile-post-snippet">${post.content}</p>
                <div class="profile-post-meta">
                  <span>📅 ${post.createdAt}</span>
                  <span>❤️ ${post.likes || 1} ไลก์</span>
                  <span>💬 ${(post.comments || []).length} ความคิดเห็น</span>
                </div>
              </div>
            `).join('')}
          </div>
        ` : `
          <div class="profile-empty-tab">
            <div style="font-size: 2.2rem; margin-bottom: 8px;">📝</div>
            <h4>${isSelf ? 'ยังไม่มีกระทู้ที่สร้าง' : `${user.name} ยังไม่มีกระทู้`}</h4>
            <p>${isSelf ? 'แชร์เทคนิคการเล่น ไกด์ หรือคลิปไฮไลท์กับชุมชนเกมเมอร์' : 'ติดตามผู้เล่นเพื่อรับการแจ้งเตือนเมื่อมีกระทู้ใหม่'}</p>
          </div>
        `}
      </div>
    `;
  }

  if (activeProfileTab === 'gallery') {
    return `
      <div style="padding: 10px 24px 24px;">
        <div style="margin-bottom: 14px;">
          <h4 style="font-size: 1rem; color: var(--text-highlight);">🖼️ แกลเลอรีรูปภาพ & วิดีโอคลิป</h4>
          <p style="font-size: 0.8rem; color: var(--text-muted);">รวมสื่อทั้งหมด (คลิกเพื่อเปิดดูขนาดเต็ม)</p>
        </div>

        ${mediaItems.length ? `
          <div class="profile-gallery-grid">
            ${mediaItems.map(m => `
              <div class="gallery-grid-item" data-media-type="${m.type}" data-media-url="${m.url}" data-media-caption="${m.caption}" data-story-id="${m.storyId || ''}">
                ${m.type === 'video' ? `
                  <video src="${m.url}" muted class="gallery-thumb"></video>
                  <div class="gallery-item-badge">🎬 คลิป</div>
                ` : `
                  <img src="${m.url}" alt="${m.caption}" class="gallery-thumb">
                  <div class="gallery-item-badge">📸 ภาพ</div>
                `}
                <div class="gallery-hover-overlay">
                  <div class="gallery-caption-peek">${m.caption || m.source}</div>
                  <span class="gallery-view-btn">🔍 ขยาย</span>
                </div>
              </div>
            `).join('')}
          </div>
        ` : `
          <div class="profile-empty-tab">
            <div style="font-size: 2.2rem; margin-bottom: 8px;">🖼️</div>
            <h4>แกลเลอรียังว่างอยู่</h4>
            <p>เมื่อโพสต์รูปภาพหรือวิดีโอในกระทู้และสตอรี่ สื่อเหล่านั้นจะมารวมกันที่นี่โดยอัตโนมัติ</p>
          </div>
        `}
      </div>
    `;
  }

  return '';
}
