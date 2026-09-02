/**
 * NEXUS GAMING TH - Friends & Player Discovery Hub
 * Comprehensive Social System: Add Friend, Search & Discover Players, Friend Requests, Follow/Unfollow.
 */

import { store } from '../store.js';
import { sound } from '../audio.js';
import { showToast, triggerConfetti } from './effects.js';
import { openPlayerProfile } from './profileModal.js';

let currentHubTab = 'discover'; // 'discover' | 'friends' | 'requests' | 'following'
let searchQuery = '';
let selectedGameFilter = 'all';
let filterOnlineOnly = false;

export function initFriendsHub() {
  const hubBtn = document.getElementById('btn-header-friends');
  const hubModal = document.getElementById('modal-friends-hub');
  const closeBtn = document.getElementById('btn-close-friends-hub');
  const tabBtns = document.querySelectorAll('.friends-tab-btn');

  if (hubBtn) {
    hubBtn.addEventListener('click', () => {
      sound.play('click');
      openFriendsHub(currentHubTab);
    });
  }

  if (closeBtn && hubModal) {
    closeBtn.addEventListener('click', () => {
      hubModal.classList.remove('active');
    });
  }

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sound.play('click');
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentHubTab = btn.dataset.ftab;
      renderHubView();
    });
  });

  // Reactive updates
  store.subscribe('friends:updated', () => {
    updateHubBadges();
    if (hubModal && hubModal.classList.contains('active')) {
      renderHubView();
    }
  });

  store.subscribe('user:updated', () => {
    updateHubBadges();
  });

  updateHubBadges();
}

export function openFriendsHub(tab = 'discover') {
  const hubModal = document.getElementById('modal-friends-hub');
  if (!hubModal) return;

  currentHubTab = tab;
  const tabBtns = hubModal.querySelectorAll('.friends-tab-btn');
  tabBtns.forEach(b => b.classList.toggle('active', b.dataset.ftab === tab));

  updateHubBadges();
  renderHubView();
  hubModal.classList.add('active');
}

export function updateHubBadges() {
  const user = store.state.user;
  const friendsCount = (user.friends || []).length;
  const reqsCount = (user.friendRequests || []).length;
  const followingCount = (user.following || []).length;

  const headerBadge = document.getElementById('header-friend-badge');
  if (headerBadge) {
    if (reqsCount > 0) {
      headerBadge.style.display = 'flex';
      headerBadge.textContent = reqsCount;
    } else {
      headerBadge.style.display = 'none';
    }
  }

  const hubFriendsCountEl = document.getElementById('hub-friends-count');
  if (hubFriendsCountEl) hubFriendsCountEl.textContent = friendsCount;

  const hubReqsCountEl = document.getElementById('hub-requests-count');
  if (hubReqsCountEl) hubReqsCountEl.textContent = reqsCount;

  const hubFollowingCountEl = document.getElementById('hub-following-count');
  if (hubFollowingCountEl) hubFollowingCountEl.textContent = followingCount;
}

function renderHubView() {
  const viewContainer = document.getElementById('friends-hub-main-view');
  if (!viewContainer) return;

  switch (currentHubTab) {
    case 'discover':
      renderDiscoverTab(viewContainer);
      break;
    case 'friends':
      renderMyFriendsTab(viewContainer);
      break;
    case 'requests':
      renderRequestsTab(viewContainer);
      break;
    case 'following':
      renderFollowingTab(viewContainer);
      break;
  }
}

// 1. Discover & Search Players Tab
function renderDiscoverTab(container) {
  const players = store.getPlayers();
  const user = store.state.user;

  // Filter players
  const filtered = players.filter(p => {
    if (p.id === user.id) return false;
    const matchQuery = !searchQuery || 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.gamerTag.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.primaryGame.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.bio && p.bio.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchGame = selectedGameFilter === 'all' || p.primaryGame === selectedGameFilter;
    const matchOnline = !filterOnlineOnly || p.status !== 'offline';

    return matchQuery && matchGame && matchOnline;
  });

  const gamesList = ['all', 'Valorant', 'Genshin Impact', 'Arena of Valor (ROV)', 'Black Myth: Wukong', 'Apex Legends'];

  container.innerHTML = `
    <!-- Direct Add Friend by GamerTag Form -->
    <div class="hub-direct-add-card">
      <div class="direct-add-left">
        <div class="direct-add-icon">⚡</div>
        <div>
          <h4 class="direct-add-title">เพิ่มเพื่อนด่วนด้วย GamerTag หรือชื่อผู้ใช้</h4>
          <p class="direct-add-desc">พิมพ์ชื่อเกมเมอร์ หรือ #Tag เช่น #1337, #9999 เพื่อส่งคำขอเป็นเพื่อนทันที</p>
        </div>
      </div>
      <form class="direct-add-form" id="form-hub-direct-add">
        <div class="direct-add-input-wrap">
          <input type="text" class="direct-add-input" id="in-hub-direct-tag" placeholder="เช่น #1337 หรือ Sakura_Blade" required>
        </div>
        <button type="submit" class="btn btn-primary btn-sm">➕ ส่งคำขอ (+10 XP)</button>
      </form>
    </div>

    <!-- Search & Filter Controls -->
    <div class="hub-search-bar-wrap">
      <div class="hub-search-input-box">
        <span style="font-size: 1.1rem; color: var(--text-muted);">🔍</span>
        <input type="text" class="hub-search-input" id="in-player-search" placeholder="ค้นหาชื่อเกมเมอร์, GamerTag เช่น #9988, หรือชื่อเกม..." value="${searchQuery}">
        ${searchQuery ? `<button type="button" class="btn-clear-search" id="btn-clear-player-search">&times;</button>` : ''}
      </div>

      <div class="hub-filter-chips-row">
        <div class="hub-chips-scroll">
          ${gamesList.map(g => `
            <button type="button" class="hub-filter-chip ${selectedGameFilter === g ? 'active' : ''}" data-game="${g}">
              ${g === 'all' ? '🎮 เกมทั้งหมด' : g}
            </button>
          `).join('')}
        </div>

        <label class="hub-checkbox-label">
          <input type="checkbox" id="chk-online-only" ${filterOnlineOnly ? 'checked' : ''}>
          <span>🟢 เฉพาะคนออนไลน์</span>
        </label>
      </div>
    </div>

    <!-- Players Cards Grid -->
    <div class="hub-players-grid">
      ${filtered.length ? filtered.map(player => {
        const isFriend = store.isFriend(player.id);
        const isPending = store.isPending(player.id);
        const hasIncoming = store.hasIncomingRequest(player.id);
        const isFollowing = store.isFollowing(player.id);

        return `
          <div class="hub-player-card">
            <div class="player-card-top btn-view-profile-trigger" data-pid="${player.id}" title="คลิกเพื่อดูโปรไฟล์">
              <div class="player-avatar-wrap">
                <img src="${player.avatar}" alt="${player.name}" class="player-avatar">
                <span class="player-status-dot status-${player.status}"></span>
              </div>
              <div class="player-header-info">
                <div class="player-name-row">
                  <span class="player-name">${player.name}</span>
                  <span class="player-tag">${player.gamerTag}</span>
                  <span class="player-lvl">Lv.${player.level}</span>
                </div>
                <div class="player-rank-badge">${player.rank}</div>
                <div class="player-status-text">${player.statusText}</div>
              </div>
            </div>

            <p class="player-bio-text">${player.bio || 'ไม่มีข้อมูลแนะนำตัว'}</p>

            <div class="player-meta-row">
              <span class="player-game-tag">🎮 ${player.primaryGame}</span>
              <span class="player-mutuals">🤝 เพื่อนร่วมกัน ${player.mutualFriends || 0} คน</span>
            </div>

            <div class="player-actions-row">
              <!-- Friend Button -->
              ${isFriend ? `
                <button type="button" class="btn-hub-action btn-friend-status is-friend" data-pid="${player.id}" title="เป็นเพื่อนกันแล้ว">
                  🤝 เพื่อนกันแล้ว
                </button>
              ` : (isPending ? `
                <button type="button" class="btn-hub-action btn-friend-status is-pending" data-pid="${player.id}" title="คลิกเพื่อยกเลิกคำขอ">
                  ⏳ ส่งคำขอแล้ว
                </button>
              ` : (hasIncoming ? `
                <button type="button" class="btn-hub-action btn-accept-req" data-pid="${player.id}">
                  ✓ ยอมรับคำขอ (+25 XP)
                </button>
              ` : `
                <button type="button" class="btn-hub-action btn-add-friend" data-pid="${player.id}">
                  ➕ เพิ่มเพื่อน (+10 XP)
                </button>
              `))}

              <!-- Follow Button -->
              <button type="button" class="btn-hub-action ${isFollowing ? 'btn-following' : 'btn-follow'}" data-pid="${player.id}">
                ${isFollowing ? '✓ ติดตามแล้ว' : '⭐ ติดตาม'}
              </button>
            </div>
          </div>
        `;
      }).join('') : `
        <div class="hub-empty-state">
          <div style="font-size: 3rem; margin-bottom: 10px;">🕵️‍♂️</div>
          <h4>ไม่พบผู้เล่นที่ตรงกับคำค้นหา</h4>
          <p style="color: var(--text-muted); font-size: 0.85rem;">ลองเปลี่ยนคำค้นหา หรือใช้กล่อง "เพิ่มเพื่อนด่วนด้วย GamerTag" ด้านบนเพื่อค้นหา</p>
        </div>
      `}
    </div>
  `;

  // Bind Direct Add Form
  const formDirectAdd = container.querySelector('#form-hub-direct-add');
  if (formDirectAdd) {
    formDirectAdd.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = container.querySelector('#in-hub-direct-tag');
      const tagVal = input ? input.value.trim() : '';
      if (!tagVal) return;

      const res = store.addFriendDirect(tagVal);
      if (res.success) {
        sound.play('success');
        triggerConfetti(window.innerWidth / 2, window.innerHeight * 0.4, 30);
        showToast(res.message, 'success');
        if (input) input.value = '';
      } else {
        showToast(res.message, 'info');
      }
    });
  }

  // Bind Discover Events
  const inSearch = container.querySelector('#in-player-search');
  if (inSearch) {
    inSearch.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderDiscoverTab(container);
    });
  }

  const btnClearSearch = container.querySelector('#btn-clear-player-search');
  if (btnClearSearch) {
    btnClearSearch.addEventListener('click', () => {
      searchQuery = '';
      renderDiscoverTab(container);
    });
  }

  container.querySelectorAll('.hub-filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      sound.play('click');
      selectedGameFilter = chip.dataset.game;
      renderDiscoverTab(container);
    });
  });

  const chkOnline = container.querySelector('#chk-online-only');
  if (chkOnline) {
    chkOnline.addEventListener('change', (e) => {
      filterOnlineOnly = e.target.checked;
      renderDiscoverTab(container);
    });
  }

  // Click on Player Card / Avatar to view Profile
  container.querySelectorAll('.btn-view-profile-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const pid = trigger.dataset.pid;
      sound.play('click');
      document.getElementById('modal-friends-hub')?.classList.remove('active');
      openPlayerProfile(pid);
    });
  });

  // Add Friend Buttons
  container.querySelectorAll('.btn-add-friend').forEach(btn => {
    btn.addEventListener('click', () => {
      const pid = btn.dataset.pid;
      const res = store.sendFriendRequest(pid);
      if (res.success) {
        sound.play('success');
        triggerConfetti(window.innerWidth / 2, window.innerHeight * 0.4, 25);
        showToast(res.message, 'success');
      } else {
        showToast(res.message, 'info');
      }
    });
  });

  // Cancel sent request when clicking pending button
  container.querySelectorAll('.btn-friend-status.is-pending').forEach(btn => {
    btn.addEventListener('click', () => {
      const pid = btn.dataset.pid;
      sound.play('click');
      store.cancelFriendRequest(pid);
      showToast('ยกเลิกคำขอเป็นเพื่อนเรียบร้อยแล้ว', 'info');
    });
  });

  // Accept Friend Request from Discover view
  container.querySelectorAll('.btn-accept-req').forEach(btn => {
    btn.addEventListener('click', () => {
      const pid = btn.dataset.pid;
      const res = store.acceptFriendRequest(pid);
      sound.play('levelUp');
      triggerConfetti(window.innerWidth / 2, window.innerHeight * 0.4, 40);
      showToast(res.message, 'success');
    });
  });

  // Follow / Unfollow Buttons
  container.querySelectorAll('.btn-follow, .btn-following').forEach(btn => {
    btn.addEventListener('click', () => {
      const pid = btn.dataset.pid;
      const res = store.toggleFollow(pid);
      sound.play('click');
      showToast(res.message, res.following ? 'success' : 'info');
    });
  });
}

// 2. My Friends List Tab
function renderMyFriendsTab(container) {
  const user = store.state.user;
  const friendIds = user.friends || [];
  const myFriends = friendIds.map(id => store.getPlayerById(id)).filter(Boolean);

  if (!myFriends.length) {
    container.innerHTML = `
      <div class="hub-empty-state">
        <div style="font-size: 3.5rem; margin-bottom: 12px;">🤝</div>
        <h4>คุณยังไม่มีรายชื่อเพื่อนในระบบ</h4>
        <p style="color: var(--text-muted); font-size: 0.85rem; margin-bottom: 16px;">
          ไปที่แท็บ "ค้นหาเพื่อนใหม่" หรือใส่ GamerTag เพื่อเพิ่มเพื่อนสายลุยและตั้งตี้เล่นเกมด้วยกัน!
        </p>
        <button type="button" class="btn btn-primary btn-sm" id="btn-go-discover">
          🔍 ไปค้นหาเพื่อนใหม่
        </button>
      </div>
    `;

    container.querySelector('#btn-go-discover')?.addEventListener('click', () => {
      openFriendsHub('discover');
    });
    return;
  }

  container.innerHTML = `
    <div class="hub-friends-list">
      ${myFriends.map(friend => `
        <div class="hub-friend-row-card">
          <div class="friend-row-left btn-view-profile-trigger" data-pid="${friend.id}" title="คลิกเพื่อดูโปรไฟล์" style="cursor: pointer;">
            <div class="player-avatar-wrap">
              <img src="${friend.avatar}" alt="${friend.name}" class="player-avatar">
              <span class="player-status-dot status-${friend.status}"></span>
            </div>
            <div class="friend-row-details">
              <div class="player-name-row">
                <span class="player-name">${friend.name}</span>
                <span class="player-tag">${friend.gamerTag}</span>
                <span class="player-lvl">Lv.${friend.level}</span>
              </div>
              <div class="player-status-text">${friend.statusText}</div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">🎮 ${friend.primaryGame} • ${friend.rank}</div>
            </div>
          </div>

          <div class="friend-row-actions">
            <button type="button" class="btn-hub-sm btn-invite-party" data-name="${friend.name}" title="ส่งคำชวนเข้าตี้">
              🎮 ชวนเข้าตี้
            </button>
            <button type="button" class="btn-hub-sm btn-message-friend" data-name="${friend.name}" title="ส่งข้อความแชต">
              💬 แชต
            </button>
            <button type="button" class="btn-hub-sm btn-remove-friend" data-pid="${friend.id}" data-name="${friend.name}" title="ลบเพื่อน">
              🗑️ ลบ
            </button>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  // Profile triggers
  container.querySelectorAll('.btn-view-profile-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const pid = trigger.dataset.pid;
      sound.play('click');
      document.getElementById('modal-friends-hub')?.classList.remove('active');
      openPlayerProfile(pid);
    });
  });

  // Invite to Party
  container.querySelectorAll('.btn-invite-party').forEach(btn => {
    btn.addEventListener('click', () => {
      sound.play('success');
      showToast(`🚀 ส่งคำชวน ${btn.dataset.name} เข้าร่วมตี้เล่นเกมเรียบร้อยแล้ว!`, 'success');
    });
  });

  // Message Friend -> switches to Chat tab
  container.querySelectorAll('.btn-message-friend').forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.dataset.name;
      sound.play('click');
      document.getElementById('modal-friends-hub')?.classList.remove('active');
      store.setTab('chat');
      setTimeout(() => {
        const chatInput = document.getElementById('chat-msg-input') || document.getElementById('in-chat-text');
        if (chatInput) {
          chatInput.value = `@${name} `;
          chatInput.focus();
        }
      }, 150);
    });
  });

  // Remove Friend
  container.querySelectorAll('.btn-remove-friend').forEach(btn => {
    btn.addEventListener('click', () => {
      const pid = btn.dataset.pid;
      const name = btn.dataset.name;
      if (confirm(`คุณต้องการลบ ${name} ออกจากรายชื่อเพื่อนใช่หรือไม่?`)) {
        sound.play('click');
        store.removeFriend(pid);
        showToast(`ลบ ${name} ออกจากเพื่อนเรียบร้อยแล้ว`, 'info');
      }
    });
  });
}

// 3. Friend Requests Tab (Incoming & Sent)
function renderRequestsTab(container) {
  const user = store.state.user;
  const incomingIds = user.friendRequests || [];
  const sentIds = user.sentRequests || [];

  const incomingPlayers = incomingIds.map(id => store.getPlayerById(id)).filter(Boolean);
  const sentPlayers = sentIds.map(id => store.getPlayerById(id)).filter(Boolean);

  if (!incomingPlayers.length && !sentPlayers.length) {
    container.innerHTML = `
      <div class="hub-empty-state">
        <div style="font-size: 3.5rem; margin-bottom: 12px;">📭</div>
        <h4>ไม่มีคำขอเป็นเพื่อนที่รอดำเนินการ</h4>
        <p style="color: var(--text-muted); font-size: 0.85rem;">
          เมื่อมีคนส่งคำขอเป็นเพื่อนมาหาคุณ หรือคุณส่งคำขอไป จะปรากฏในหน้านี้
        </p>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="hub-requests-view">
      <!-- Incoming Requests -->
      ${incomingPlayers.length ? `
        <div class="requests-section-title">
          <span>📥 คำขอเป็นเพื่อนที่รอคุณตอบรับ (${incomingPlayers.length})</span>
        </div>
        <div class="hub-friends-list" style="margin-bottom: 24px;">
          ${incomingPlayers.map(p => `
            <div class="hub-friend-row-card">
              <div class="friend-row-left btn-view-profile-trigger" data-pid="${p.id}" style="cursor: pointer;" title="คลิกดูโปรไฟล์">
                <div class="player-avatar-wrap">
                  <img src="${p.avatar}" alt="${p.name}" class="player-avatar">
                  <span class="player-status-dot status-${p.status}"></span>
                </div>
                <div class="friend-row-details">
                  <div class="player-name-row">
                    <span class="player-name">${p.name}</span>
                    <span class="player-tag">${p.gamerTag}</span>
                    <span class="player-lvl">Lv.${p.level}</span>
                  </div>
                  <div style="font-size: 0.8rem; color: var(--primary);">🎮 ${p.primaryGame} • ${p.rank}</div>
                  <div style="font-size: 0.75rem; color: var(--text-muted);">🤝 เพื่อนร่วมกัน ${p.mutualFriends || 0} คน</div>
                </div>
              </div>

              <div class="friend-row-actions">
                <button type="button" class="btn btn-primary btn-sm btn-accept-req-row" data-pid="${p.id}">
                  ✓ ยอมรับ (+25 XP)
                </button>
                <button type="button" class="btn btn-secondary btn-sm btn-decline-req-row" data-pid="${p.id}">
                  ✕ ปฏิเสธ
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      ` : ''}

      <!-- Sent Requests -->
      ${sentPlayers.length ? `
        <div class="requests-section-title">
          <span>📤 คำขอที่คุณส่งไปแล้ว (${sentPlayers.length})</span>
        </div>
        <div class="hub-friends-list">
          ${sentPlayers.map(p => `
            <div class="hub-friend-row-card" style="opacity: 0.9;">
              <div class="friend-row-left btn-view-profile-trigger" data-pid="${p.id}" style="cursor: pointer;" title="คลิกดูโปรไฟล์">
                <div class="player-avatar-wrap">
                  <img src="${p.avatar}" alt="${p.name}" class="player-avatar">
                </div>
                <div class="friend-row-details">
                  <div class="player-name-row">
                    <span class="player-name">${p.name}</span>
                    <span class="player-tag">${p.gamerTag}</span>
                  </div>
                  <div style="font-size: 0.8rem; color: var(--text-muted);">⏳ รออีกฝ่ายตอบรับคำขอ...</div>
                </div>
              </div>
              <div class="friend-row-actions">
                <button type="button" class="btn btn-secondary btn-xs btn-cancel-sent-req" data-pid="${p.id}">
                  ✕ ยกเลิกคำขอ
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      ` : ''}
    </div>
  `;

  // Profile triggers
  container.querySelectorAll('.btn-view-profile-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const pid = trigger.dataset.pid;
      sound.play('click');
      document.getElementById('modal-friends-hub')?.classList.remove('active');
      openPlayerProfile(pid);
    });
  });

  // Accept Handler
  container.querySelectorAll('.btn-accept-req-row').forEach(btn => {
    btn.addEventListener('click', () => {
      const pid = btn.dataset.pid;
      const res = store.acceptFriendRequest(pid);
      sound.play('levelUp');
      triggerConfetti(window.innerWidth / 2, window.innerHeight * 0.4, 40);
      showToast(res.message, 'success');
    });
  });

  // Decline Handler
  container.querySelectorAll('.btn-decline-req-row').forEach(btn => {
    btn.addEventListener('click', () => {
      const pid = btn.dataset.pid;
      const res = store.declineFriendRequest(pid);
      sound.play('click');
      showToast(res.message, 'info');
    });
  });

  // Cancel Sent Request Handler
  container.querySelectorAll('.btn-cancel-sent-req').forEach(btn => {
    btn.addEventListener('click', () => {
      const pid = btn.dataset.pid;
      sound.play('click');
      store.cancelFriendRequest(pid);
      showToast('ยกเลิกคำขอเป็นเพื่อนเรียบร้อยแล้ว', 'info');
    });
  });
}

// 4. Following List Tab
function renderFollowingTab(container) {
  const user = store.state.user;
  const followingIds = user.following || [];
  const allPlayers = store.getPlayers();
  const followingPlayers = allPlayers.filter(p => followingIds.includes(p.id));

  if (!followingPlayers.length) {
    container.innerHTML = `
      <div class="hub-empty-state">
        <div style="font-size: 3.5rem; margin-bottom: 12px;">⭐</div>
        <h4>คุณยังไม่ได้ติดตามเกมเมอร์คนใด</h4>
        <p style="color: var(--text-muted); font-size: 0.85rem; margin-bottom: 16px;">
          กดติดตามสตรีมเมอร์ หรือผู้เล่นฝีมือดี เพื่ออัปเดตโพสต์และสตอรี่ของพวกเขาก่อนใคร!
        </p>
        <button type="button" class="btn btn-primary btn-sm" id="btn-go-follow-discover">
          🔍 ค้นหาผู้เล่นน่าติดตาม
        </button>
      </div>
    `;

    container.querySelector('#btn-go-follow-discover')?.addEventListener('click', () => {
      openFriendsHub('discover');
    });
    return;
  }

  container.innerHTML = `
    <div class="hub-friends-list">
      ${followingPlayers.map(p => `
        <div class="hub-friend-row-card">
          <div class="friend-row-left btn-view-profile-trigger" data-pid="${p.id}" style="cursor: pointer;" title="คลิกดูโปรไฟล์">
            <div class="player-avatar-wrap">
              <img src="${p.avatar}" alt="${p.name}" class="player-avatar">
              <span class="player-status-dot status-${p.status}"></span>
            </div>
            <div class="friend-row-details">
              <div class="player-name-row">
                <span class="player-name">${p.name}</span>
                <span class="player-tag">${p.gamerTag}</span>
                <span class="player-lvl">Lv.${p.level}</span>
              </div>
              <p style="font-size: 0.8rem; color: var(--text-secondary); margin: 2px 0;">${p.bio || ''}</p>
              <div style="font-size: 0.75rem; color: var(--primary);">👥 ผู้ติดตาม ${p.followersCount || 0} คน</div>
            </div>
          </div>

          <div class="friend-row-actions">
            <button type="button" class="btn-hub-sm btn-unfollow-hub" data-pid="${p.id}" data-name="${p.name}">
              ✓ กำลังติดตาม
            </button>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  // Profile triggers
  container.querySelectorAll('.btn-view-profile-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const pid = trigger.dataset.pid;
      sound.play('click');
      document.getElementById('modal-friends-hub')?.classList.remove('active');
      openPlayerProfile(pid);
    });
  });

  // Unfollow button
  container.querySelectorAll('.btn-unfollow-hub').forEach(btn => {
    btn.addEventListener('click', () => {
      const pid = btn.dataset.pid;
      const name = btn.dataset.name;
      if (confirm(`คุณต้องการเลิกติดตาม ${name} ใช่หรือไม่?`)) {
        sound.play('click');
        store.toggleFollow(pid);
        showToast(`เลิกติดตาม ${name} เรียบร้อยแล้ว`, 'info');
      }
    });
  });
}
