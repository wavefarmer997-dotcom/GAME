/**
 * NEXUS GAMING TH - Enhanced Game Hub Directory Component
 * Features: Spotlight Featured Game, Genre & Platform Filters, Instant Search, Sorting, Grid/List Views, Game Detail Modal
 */

import { store } from '../store.js';
import { sound } from '../audio.js';
import { showToast } from './effects.js';

// Local UI state for Game Hub
let selectedGenre = 'all'; // 'all', 'fps', 'rpg', 'moba', 'openworld', 'battleroyale', 'sports'
let selectedPlatform = 'all'; // 'all', 'PC', 'Mobile', 'PlayStation', 'Xbox'
let sortBy = 'popular'; // 'popular', 'rating', 'parties', 'name'
let viewMode = 'grid'; // 'grid', 'list'
let localSearchQuery = '';

export function renderGameHubs(container) {
  if (!container) return;

  const games = store.state.games || [];
  const globalSearch = (store.state.searchQuery || '').toLowerCase();
  const search = (localSearchQuery || globalSearch).toLowerCase();

  // 1. Filter Games
  const filtered = games.filter(g => {
    // Genre Filter
    if (selectedGenre !== 'all') {
      const genreLower = (g.genre || '').toLowerCase();
      if (selectedGenre === 'fps' && !genreLower.includes('fps') && !genreLower.includes('tactical') && !genreLower.includes('shooter')) return false;
      if (selectedGenre === 'rpg' && !genreLower.includes('rpg') && !genreLower.includes('soulslike')) return false;
      if (selectedGenre === 'moba' && !genreLower.includes('moba')) return false;
      if (selectedGenre === 'openworld' && !genreLower.includes('open world') && !genreLower.includes('roleplay')) return false;
      if (selectedGenre === 'battleroyale' && !genreLower.includes('battle royale')) return false;
      if (selectedGenre === 'sports' && !genreLower.includes('sports') && !genreLower.includes('football')) return false;
    }

    // Platform Filter
    if (selectedPlatform !== 'all') {
      if (!g.platform || !g.platform.some(p => p.toLowerCase().includes(selectedPlatform.toLowerCase()))) {
        return false;
      }
    }

    // Search Query
    if (search) {
      const matchName = (g.name || '').toLowerCase().includes(search);
      const matchGenre = (g.genre || '').toLowerCase().includes(search);
      const matchDev = (g.developer || '').toLowerCase().includes(search);
      const matchTags = (g.tags || []).some(t => t.toLowerCase().includes(search));
      if (!matchName && !matchGenre && !matchDev && !matchTags) return false;
    }

    return true;
  });

  // 2. Sort Games
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'popular') {
      const parsePlayers = (str) => {
        if (!str) return 0;
        const num = parseFloat(str.replace('K', '')) || 0;
        return str.includes('K') ? num * 1000 : num;
      };
      return parsePlayers(b.activePlayers) - parsePlayers(a.activePlayers);
    }
    if (sortBy === 'rating') {
      return (b.rating || 0) - (a.rating || 0);
    }
    if (sortBy === 'parties') {
      return (b.activePartiesCount || 0) - (a.activePartiesCount || 0);
    }
    if (sortBy === 'name') {
      return (a.name || '').localeCompare(b.name || '');
    }
    return 0;
  });

  // Pick Featured Spotlight Game (Top game in list or Valorant)
  const spotlightGame = games.find(g => g.id === 'valorant') || games[0];

  // 3. Render HTML
  container.innerHTML = `
    <div class="game-hub-root-wrapper">
      <!-- 1. Featured Spotlight Banner (Shown when no search query) -->
      ${!search && selectedGenre === 'all' && selectedPlatform === 'all' ? renderSpotlightBanner(spotlightGame) : ''}

      <!-- 2. Controls & Filter Bar -->
      <div class="game-hub-toolbar">
        <!-- Search & Info Row -->
        <div class="game-hub-search-row">
          <div class="game-hub-search-box">
            <span class="game-search-icon">🔍</span>
            <input 
              type="text" 
              id="game-hub-search-input" 
              class="game-search-input" 
              placeholder="ค้นหาชื่อเกม, ค่ายพัฒนา (เช่น Riot, HoYoverse), หรือแนวเกม..." 
              value="${localSearchQuery}"
            >
            ${localSearchQuery ? `<button class="btn-clear-game-search" id="btn-clear-game-search" title="ล้างการค้นหา">&times;</button>` : ''}
          </div>

          <div class="game-hub-view-switchers">
            <div class="game-count-badge">
              🎮 พบ <strong>${sorted.length}</strong> จาก ${games.length} เกม
            </div>
            <div class="view-mode-btn-group">
              <button class="btn-view-mode ${viewMode === 'grid' ? 'active' : ''}" data-mode="grid" title="มุมมองการ์ด (Grid View)">
                🎴 การ์ด
              </button>
              <button class="btn-view-mode ${viewMode === 'list' ? 'active' : ''}" data-mode="list" title="มุมมองตารางสรุป (List View)">
                📋 ตารางย่อ
              </button>
            </div>
          </div>
        </div>

        <!-- Genre Filter Pills -->
        <div class="game-genre-pills-bar">
          <button class="genre-pill-btn ${selectedGenre === 'all' ? 'active' : ''}" data-genre="all">
            🎮 ทั้งหมด (${games.length})
          </button>
          <button class="genre-pill-btn ${selectedGenre === 'fps' ? 'active' : ''}" data-genre="fps">
            🎯 FPS / Tactical
          </button>
          <button class="genre-pill-btn ${selectedGenre === 'rpg' ? 'active' : ''}" data-genre="rpg">
            ⚔️ Action RPG
          </button>
          <button class="genre-pill-btn ${selectedGenre === 'moba' ? 'active' : ''}" data-genre="moba">
            👑 MOBA
          </button>
          <button class="genre-pill-btn ${selectedGenre === 'openworld' ? 'active' : ''}" data-genre="openworld">
            🚗 Open World / FiveM
          </button>
          <button class="genre-pill-btn ${selectedGenre === 'battleroyale' ? 'active' : ''}" data-genre="battleroyale">
            ⚡ Battle Royale
          </button>
          <button class="genre-pill-btn ${selectedGenre === 'sports' ? 'active' : ''}" data-genre="sports">
            ⚽ Sports / Football
          </button>
        </div>

        <!-- Filter Sub-Row: Platform & Sorting Dropdowns -->
        <div class="game-filters-subrow">
          <div class="game-filter-dropdown-group">
            <label>🕹️ อุปกรณ์/แพลตฟอร์ม:</label>
            <select id="game-platform-select" class="game-select-input">
              <option value="all" ${selectedPlatform === 'all' ? 'selected' : ''}>ทุกแพลตฟอร์ม (All)</option>
              <option value="PC" ${selectedPlatform === 'PC' ? 'selected' : ''}>🖥️ PC Gaming</option>
              <option value="Mobile" ${selectedPlatform === 'Mobile' ? 'selected' : ''}>📱 มือถือ (Mobile)</option>
              <option value="PlayStation" ${selectedPlatform === 'PlayStation' ? 'selected' : ''}>🎮 PlayStation 5</option>
              <option value="Xbox" ${selectedPlatform === 'Xbox' ? 'selected' : ''}>🎮 Xbox</option>
            </select>
          </div>

          <div class="game-filter-dropdown-group">
            <label>📊 จัดเรียงตาม:</label>
            <select id="game-sort-select" class="game-select-input">
              <option value="popular" ${sortBy === 'popular' ? 'selected' : ''}>🔥 ผู้เล่นออนไลน์มากสุด</option>
              <option value="rating" ${sortBy === 'rating' ? 'selected' : ''}>⭐ คะแนนรีวิวสูงสุด</option>
              <option value="parties" ${sortBy === 'parties' ? 'selected' : ''}>🤝 ห้องหาตี้เปิดเยอะสุด</option>
              <option value="name" ${sortBy === 'name' ? 'selected' : ''}>🔤 ชื่อเกม (A-Z)</option>
            </select>
          </div>
        </div>
      </div>

      <!-- 3. Games Listing (Grid vs List) -->
      ${sorted.length === 0 ? renderEmptyState(search) : (
        viewMode === 'grid' ? renderGridView(sorted) : renderListView(sorted)
      )}
    </div>
  `;

  // 4. Attach Event Listeners
  attachGameHubEvents(container, games);
}

function renderSpotlightBanner(game) {
  if (!game) return '';
  return `
    <div class="game-spotlight-hero" style="--spotlight-accent: ${game.color || '#ff4655'};">
      <div class="spotlight-bg-overlay" style="background-image: linear-gradient(90deg, rgba(10, 14, 24, 0.95) 0%, rgba(10, 14, 24, 0.7) 60%, rgba(10, 14, 24, 0.4) 100%), url('${game.banner || game.cover}');"></div>
      
      <div class="spotlight-content">
        <div class="spotlight-badge-row">
          <span class="spotlight-tag">⭐ เกมแนะนำยอดนิยมประจำสัปดาห์</span>
          <span class="spotlight-live-pill">
            <span class="live-pulse-dot"></span>
            🟢 ${game.activePlayers} คนกำลังเล่นอยู่
          </span>
        </div>

        <h2 class="spotlight-title">${game.name}</h2>
        <div class="spotlight-meta">
          <span class="spotlight-genre">${game.genre}</span>
          <span class="spotlight-dot">•</span>
          <span class="spotlight-dev">ค่าย ${game.developer}</span>
          <span class="spotlight-dot">•</span>
          <span class="spotlight-rating">★ ${game.rating} (${game.reviewsCount?.toLocaleString()} รีวิว)</span>
        </div>

        <p class="spotlight-desc">${game.description}</p>

        <div class="spotlight-actions">
          <button class="btn btn-primary btn-spotlight-feed" data-game-id="${game.id}">
            📌 ดูกระทู้ & เมต้า (${game.name})
          </button>
          <button class="btn btn-secondary btn-spotlight-lfg" data-game-id="${game.id}">
            🤝 หาตี้ด่วน (${game.activePartiesCount} ห้องเปิดอยู่)
          </button>
          <button class="btn btn-secondary btn-spotlight-details" data-game-id="${game.id}">
            🔍 ดูข้อมูลเต็ม
          </button>
        </div>
      </div>

      <div class="spotlight-cover-preview">
        <img src="${game.cover}" alt="${game.name}" class="spotlight-cover-img">
      </div>
    </div>
  `;
}

function renderGridView(games) {
  return `
    <div class="games-grid-layout">
      ${games.map(game => `
        <div class="game-hub-card-v2" data-game-id="${game.id}">
          <!-- Cover & Badges -->
          <div class="game-card-cover-container">
            <img src="${game.cover}" alt="${game.name}" class="game-card-img" loading="lazy">
            <div class="game-card-gradient-mask"></div>

            <div class="game-card-top-badges">
              <span class="game-card-rating-badge">★ ${game.rating}</span>
              <span class="game-card-live-badge">🟢 ${game.activePlayers}</span>
            </div>

            <div class="game-card-platforms-overlay">
              ${(game.platform || ['PC']).map(p => {
                let icon = '🖥️';
                if (p.includes('Mobile')) icon = '📱';
                if (p.includes('PlayStation') || p.includes('Xbox') || p.includes('Switch')) icon = '🎮';
                return `<span class="platform-chip-sm" title="${p}">${icon} ${p}</span>`;
              }).join('')}
            </div>
          </div>

          <!-- Card Content Body -->
          <div class="game-card-content">
            <div class="game-card-header-info">
              <div class="game-card-genre-text">${game.genre}</div>
              <h3 class="game-card-name-title" title="${game.name}">${game.name}</h3>
              <div class="game-card-dev-text">โดย ${game.developer}</div>
            </div>

            <p class="game-card-desc-snippet">${game.description}</p>

            <!-- Tags Cloud -->
            <div class="game-card-tags-row">
              ${(game.tags || []).slice(0, 3).map(tag => `<span class="game-tag-pill">#${tag}</span>`).join('')}
            </div>

            <!-- 3-Column Community Metrics -->
            <div class="game-card-metrics-grid">
              <div class="metric-box">
                <span class="metric-label">👥 ออนไลน์</span>
                <strong class="metric-val text-primary">${game.activePlayers}</strong>
              </div>
              <div class="metric-box">
                <span class="metric-label">🤝 ปาร์ตี้</span>
                <strong class="metric-val text-cyan">${game.activePartiesCount || 0} ตี้</strong>
              </div>
              <div class="metric-box">
                <span class="metric-label">🏆 ทัวร์</span>
                <strong class="metric-val text-gold">${game.activeTournamentsCount || 0}</strong>
              </div>
            </div>

            <!-- Action Buttons Row -->
            <div class="game-card-actions-row">
              <button class="btn btn-primary btn-sm btn-filter-game" data-game-id="${game.id}" title="ดูกระทู้และไกด์เกมนี้">
                📌 ดูกระทู้
              </button>
              <button class="btn btn-secondary btn-sm btn-view-game-lfg" data-game-id="${game.id}" title="หาตี้เล่นเกมนี้">
                🤝 หาตี้
              </button>
              <button class="btn btn-secondary btn-sm btn-quick-details" data-game-id="${game.id}" title="ดูรายละเอียดเกม">
                🔍 ข้อมูล
              </button>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderListView(games) {
  return `
    <div class="games-list-layout">
      ${games.map(game => `
        <div class="game-list-row-card" data-game-id="${game.id}">
          <div class="game-list-thumb-wrap">
            <img src="${game.cover}" alt="${game.name}" class="game-list-thumb">
            <span class="game-list-rating-badge">★ ${game.rating}</span>
          </div>

          <div class="game-list-main-info">
            <div class="game-list-title-row">
              <h3 class="game-list-title">${game.name}</h3>
              <span class="game-list-dev-badge">ค่าย ${game.developer}</span>
            </div>
            <div class="game-list-genre-text">${game.genre}</div>
            <p class="game-list-desc-text">${game.description}</p>
            <div class="game-list-platforms">
              ${(game.platform || []).map(p => `<span class="platform-chip-sm">${p}</span>`).join('')}
            </div>
          </div>

          <div class="game-list-stats-column">
            <div class="list-stat-item">
              <span>👥 ผู้เล่นสด:</span>
              <strong class="text-primary">${game.activePlayers}</strong>
            </div>
            <div class="list-stat-item">
              <span>🤝 ปาร์ตี้เปิด:</span>
              <strong class="text-cyan">${game.activePartiesCount || 0} ตี้</strong>
            </div>
            <div class="list-stat-item">
              <span>🏆 การแข่งขัน:</span>
              <strong class="text-gold">${game.activeTournamentsCount || 0} ทัวร์</strong>
            </div>
          </div>

          <div class="game-list-actions-column">
            <button class="btn btn-primary btn-sm btn-filter-game" data-game-id="${game.id}">
              📌 กระทู้
            </button>
            <button class="btn btn-secondary btn-sm btn-view-game-lfg" data-game-id="${game.id}">
              🤝 หาตี้
            </button>
            <button class="btn btn-secondary btn-sm btn-quick-details" data-game-id="${game.id}">
              🔍 ข้อมูล
            </button>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderEmptyState(search) {
  return `
    <div class="game-hub-empty-state">
      <div class="empty-icon">🎮</div>
      <h3>ไม่พบเกมที่ตรงกับเงื่อนไขการค้นหา</h3>
      <p>ไม่พบเกมสำหรับคำค้นหา "${search || 'ตัวกรองที่เลือก'}" ลองปรับหมวดหมู่หรือล้างการค้นหาดูใหม่อีกครั้ง</p>
      <button class="btn btn-primary btn-sm" id="btn-reset-game-filters" style="margin-top: 14px;">
        🔄 ล้างตัวกรองทั้งหมด
      </button>
    </div>
  `;
}

function attachGameHubEvents(container, games) {
  // 1. Search Input Event (Debounced)
  const searchInput = container.querySelector('#game-hub-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      localSearchQuery = e.target.value;
      renderGameHubs(container);
      // Retain focus
      const updatedInput = container.querySelector('#game-hub-search-input');
      if (updatedInput) {
        updatedInput.focus();
        updatedInput.setSelectionRange(updatedInput.value.length, updatedInput.value.length);
      }
    });
  }

  // Clear Search Button
  const clearSearchBtn = container.querySelector('#btn-clear-game-search');
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      sound.play('click');
      localSearchQuery = '';
      renderGameHubs(container);
    });
  }

  // 2. Genre Pills Switching
  container.querySelectorAll('.genre-pill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      sound.play('tab');
      selectedGenre = btn.dataset.genre;
      renderGameHubs(container);
    });
  });

  // 3. Platform Select Dropdown
  const platformSelect = container.querySelector('#game-platform-select');
  if (platformSelect) {
    platformSelect.addEventListener('change', (e) => {
      sound.play('click');
      selectedPlatform = e.target.value;
      renderGameHubs(container);
    });
  }

  // 4. Sort Select Dropdown
  const sortSelect = container.querySelector('#game-sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      sound.play('click');
      sortBy = e.target.value;
      renderGameHubs(container);
    });
  }

  // 5. View Mode Toggle (Grid vs List)
  container.querySelectorAll('.btn-view-mode').forEach(btn => {
    btn.addEventListener('click', () => {
      sound.play('click');
      viewMode = btn.dataset.mode;
      renderGameHubs(container);
    });
  });

  // 6. Reset Filters Button
  const resetBtn = container.querySelector('#btn-reset-game-filters');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      sound.play('click');
      selectedGenre = 'all';
      selectedPlatform = 'all';
      localSearchQuery = '';
      sortBy = 'popular';
      renderGameHubs(container);
    });
  }

  // 7. Navigation: View Feed / Guides for Game
  container.querySelectorAll('.btn-filter-game, .btn-spotlight-feed').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const gameId = btn.dataset.gameId;
      sound.play('click');
      store.setGameFilter(gameId);
      store.setTab('feed');
      showToast(`📌 กำลังดูกระทู้และไกด์ของเกม: ${getGameName(gameId, games)}`, 'info');
    });
  });

  // 8. Navigation: View LFG for Game
  container.querySelectorAll('.btn-view-game-lfg, .btn-spotlight-lfg').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const gameId = btn.dataset.gameId;
      sound.play('click');
      store.setGameFilter(gameId);
      store.setTab('lfg');
      showToast(`🤝 กำลังดูปาร์ตี้หาตี้ของเกม: ${getGameName(gameId, games)}`, 'info');
    });
  });

  // 9. Open Game Quick Detail Modal
  container.querySelectorAll('.btn-quick-details, .btn-spotlight-details').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const gameId = btn.dataset.gameId;
      sound.play('click');
      openGameDetailModal(gameId, games);
    });
  });

  // Clicking on Card container also opens quick detail modal
  container.querySelectorAll('.game-hub-card-v2').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('button')) return; // ignore buttons inside
      const gameId = card.dataset.gameId;
      sound.play('click');
      openGameDetailModal(gameId, games);
    });
  });
}

function getGameName(gameId, games) {
  const target = (games || []).find(g => g.id === gameId);
  return target ? target.name : gameId;
}

/**
 * Game Quick Detail Modal Handler
 */
export function openGameDetailModal(gameId, gamesList = store.state.games) {
  const game = (gamesList || []).find(g => g.id === gameId);
  if (!game) return;

  let modal = document.getElementById('modal-game-detail');
  if (!modal) {
    // Create modal dynamically if not yet in DOM
    modal = document.createElement('div');
    modal.id = 'modal-game-detail';
    modal.className = 'modal-overlay';
    modal.innerHTML = `
      <div class="modal-content modal-game-detail-card">
        <button class="modal-close-btn" id="btn-close-game-modal">&times;</button>
        <div id="game-modal-inner-body"></div>
      </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector('#btn-close-game-modal').addEventListener('click', () => {
      modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }

  const squads = (store.state.squads || []).filter(s => s.gameId === game.id);
  const posts = (store.state.posts || []).filter(p => p.gameId === game.id);

  const bodyEl = modal.querySelector('#game-modal-inner-body');
  if (bodyEl) {
    bodyEl.innerHTML = `
      <!-- Game Detail Banner -->
      <div class="game-detail-modal-banner" style="background-image: linear-gradient(180deg, rgba(10, 14, 24, 0.4) 0%, rgba(10, 14, 24, 0.95) 100%), url('${game.banner || game.cover}');">
        <div class="game-detail-header-info">
          <div class="game-detail-badge-pill">★ ${game.rating} • 🟢 ${game.activePlayers} คนออนไลน์</div>
          <h2 class="game-detail-title">${game.name}</h2>
          <div class="game-detail-submeta">
            <span>🏷️ ${game.genre}</span> • <span>🏢 ค่าย ${game.developer}</span>
          </div>
        </div>
      </div>

      <div class="game-detail-modal-body-content">
        <!-- Overview & Description -->
        <div class="game-detail-section">
          <h4 class="game-detail-section-title">📖 ข้อมูลและรายละเอียดเกม</h4>
          <p style="color: var(--text-secondary); line-height: 1.6; font-size: 0.92rem;">
            ${game.description}
          </p>
        </div>

        <!-- Platforms & Tags -->
        <div class="game-detail-section">
          <h4 class="game-detail-section-title">🕹️ แพลตฟอร์ม & แท็กที่เกี่ยวข้อง</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 10px;">
            ${(game.platform || []).map(p => `<span class="platform-chip-sm" style="font-size: 0.85rem; padding: 4px 12px;">🖥️ ${p}</span>`).join('')}
            ${(game.tags || []).map(t => `<span class="game-tag-pill" style="font-size: 0.85rem; padding: 4px 10px;">#${t}</span>`).join('')}
          </div>
        </div>

        <!-- Stats 3-Box -->
        <div class="game-detail-stats-grid">
          <div class="stat-card">
            <span class="stat-card-label">👥 สมาชิกออนไลน์</span>
            <strong class="stat-card-val text-primary">${game.activePlayers}</strong>
          </div>
          <div class="stat-card">
            <span class="stat-card-label">🤝 ปาร์ตี้เปิดรับคน</span>
            <strong class="stat-card-val text-cyan">${squads.length || game.activePartiesCount || 0} ตี้</strong>
          </div>
          <div class="stat-card">
            <span class="stat-card-label">📝 กระทู้ & ไกด์</span>
            <strong class="stat-card-val text-gold">${posts.length || 12} โพสต์</strong>
          </div>
        </div>

        <!-- Quick Jump Buttons -->
        <div class="game-detail-modal-actions">
          <button class="btn btn-primary btn-block btn-lg" id="modal-btn-jump-feed">
            📌 ดูกระทู้และไกด์ทั้งหมดของ ${game.name}
          </button>
          <button class="btn btn-secondary btn-block" id="modal-btn-jump-lfg">
            🤝 เปิดบอร์ดหาตี้เล่น ${game.name}
          </button>
        </div>
      </div>
    `;

    // Bind Jump buttons
    const jumpFeed = bodyEl.querySelector('#modal-btn-jump-feed');
    if (jumpFeed) {
      jumpFeed.addEventListener('click', () => {
        modal.classList.remove('active');
        sound.play('click');
        store.setGameFilter(game.id);
        store.setTab('feed');
      });
    }

    const jumpLfg = bodyEl.querySelector('#modal-btn-jump-lfg');
    if (jumpLfg) {
      jumpLfg.addEventListener('click', () => {
        modal.classList.remove('active');
        sound.play('click');
        store.setGameFilter(game.id);
        store.setTab('lfg');
      });
    }
  }

  modal.classList.add('active');
}

