/**
 * NEXUS GAMING TH - Supabase Cloud Database Connector
 * Native lightweight REST & Realtime synchronization with Supabase.com
 * Zero external library dependencies - 100% reliable across all browsers and hosts.
 */

class SupabaseConnector {
  constructor() {
    this.STORAGE_KEY = 'NEXUS_SUPABASE_CONFIG_V2';
    this.config = this._loadConfig();
    this.isConnected = false;
    this.lastSyncTime = null;
    this.listeners = new Set();
    this.pollInterval = null;

    if (this.isConfigured()) {
      this.checkConnection();
    }
  }

  _loadConfig() {
    try {
      if (typeof localStorage !== 'undefined') {
        const saved = localStorage.getItem(this.STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (parsed.url && parsed.key) return parsed;
        }
      }
    } catch (e) {}

    // Default configuration (can be updated anytime in UI)
    return {
      url: '',
      key: ''
    };
  }

  saveConfig(url, key) {
    let cleanUrl = (url || '').trim().replace(/\/+$/, '');
    let cleanKey = (key || '').trim();

    this.config = { url: cleanUrl, key: cleanKey };
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.config));
      }
    } catch (e) {}

    return this.checkConnection();
  }

  isConfigured() {
    return Boolean(this.config.url && this.config.key && this.config.url.startsWith('https://'));
  }

  subscribe(callback) {
    this.listeners.add(callback);
    callback({ isConnected: this.isConnected, isConfigured: this.isConfigured(), lastSync: this.lastSyncTime });
    return () => this.listeners.delete(callback);
  }

  _notify() {
    const status = {
      isConnected: this.isConnected,
      isConfigured: this.isConfigured(),
      lastSync: this.lastSyncTime
    };
    this.listeners.forEach(cb => {
      try { cb(status); } catch (e) {}
    });
  }

  getHeaders() {
    return {
      'Content-Type': 'application/json',
      'apikey': this.config.key,
      'Authorization': `Bearer ${this.config.key}`,
      'Prefer': 'return=representation'
    };
  }

  async checkConnection() {
    if (!this.isConfigured()) {
      this.isConnected = false;
      this._notify();
      return { success: false, message: 'กรุณากรอก Supabase URL และ Anon Key' };
    }

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4000);

      const res = await fetch(`${this.config.url}/rest/v1/nexus_posts?select=id&limit=1`, {
        method: 'GET',
        headers: this.getHeaders(),
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      if (res.ok) {
        this.isConnected = true;
        this.lastSyncTime = new Date();
        this._notify();
        this.startRealtimePolling();
        return { success: true, message: 'เชื่อมต่อ Supabase Cloud สำเร็จ 100% ⚡' };
      } else {
        const errText = await res.text();
        this.isConnected = false;
        this._notify();
        if (res.status === 404 || errText.includes('does not exist')) {
          return { success: false, message: 'เชื่อมต่อได้ แต่ยังไม่พบตารางข้อมูล (กรุณารัน SQL Schema ใน Supabase SQL Editor)' };
        }
        return { success: false, message: `รหัสข้อผิดพลาดจาก Supabase: ${res.status} (${errText.substring(0, 80)})` };
      }
    } catch (e) {
      this.isConnected = false;
      this._notify();
      return { success: false, message: `ไม่สามารถเชื่อมต่อได้: ${e.message}` };
    }
  }

  startRealtimePolling(onUpdate = null) {
    if (this.pollInterval) clearInterval(this.pollInterval);
    if (!this.isConfigured()) return;

    this.pollInterval = setInterval(async () => {
      if (!this.isConnected) return;
      if (onUpdate) {
        try {
          const freshData = await this.fetchAllState();
          if (freshData) onUpdate(freshData);
        } catch (e) {}
      }
    }, 5000);
  }

  // ==========================================================================
  // Generic REST Operations
  // ==========================================================================

  async fetchTable(tableName, orderColumn = 'created_at') {
    if (!this.isConnected || !this.isConfigured()) return null;

    try {
      const res = await fetch(`${this.config.url}/rest/v1/${tableName}?select=*&order=${orderColumn}.desc`, {
        method: 'GET',
        headers: this.getHeaders()
      });
      if (res.ok) {
        return await res.json();
      }
    } catch (e) {
      console.warn(`[Supabase] Fetch table ${tableName} failed:`, e);
    }
    return null;
  }

  async upsertItem(tableName, item) {
    if (!this.isConnected || !this.isConfigured()) return false;

    try {
      const res = await fetch(`${this.config.url}/rest/v1/${tableName}`, {
        method: 'POST',
        headers: {
          ...this.getHeaders(),
          'Prefer': 'resolution=merge-duplicates,return=representation'
        },
        body: JSON.stringify(item)
      });
      return res.ok;
    } catch (e) {
      console.warn(`[Supabase] Upsert ${tableName} failed:`, e);
      return false;
    }
  }

  async deleteItem(tableName, id) {
    if (!this.isConnected || !this.isConfigured()) return false;

    try {
      const res = await fetch(`${this.config.url}/rest/v1/${tableName}?id=eq.${encodeURIComponent(id)}`, {
        method: 'DELETE',
        headers: this.getHeaders()
      });
      return res.ok;
    } catch (e) {
      console.warn(`[Supabase] Delete ${tableName} failed:`, e);
      return false;
    }
  }

  // ==========================================================================
  // High-Level Sync Adapters for NEXUS Store
  // ==========================================================================

  async fetchAllState() {
    if (!this.isConfigured()) return null;

    try {
      const [rawPosts, rawSquads, rawChat, rawStories, rawReviews, rawTournaments, rawUsers] = await Promise.all([
        this.fetchTable('nexus_posts'),
        this.fetchTable('nexus_squads'),
        this.fetchTable('nexus_chat_messages'),
        this.fetchTable('nexus_stories'),
        this.fetchTable('nexus_reviews'),
        this.fetchTable('nexus_tournaments'),
        this.fetchTable('nexus_users')
      ]);

      const state = {};

      if (Array.isArray(rawPosts) && rawPosts.length > 0) {
        state.posts = rawPosts.map(p => ({
          id: p.id,
          title: p.title,
          content: p.content,
          category: p.category,
          gameId: p.game_id,
          gameName: p.game_name,
          author: typeof p.author === 'string' ? JSON.parse(p.author) : (p.author || {}),
          tags: p.tags || [],
          image: p.image,
          video: p.video,
          mediaType: p.media_type,
          upvotes: p.upvotes || 0,
          downvotes: p.downvotes || 0,
          likes: p.likes || 0,
          commentsCount: p.comments_count || 0,
          comments: typeof p.comments === 'string' ? JSON.parse(p.comments) : (p.comments || []),
          pinned: p.pinned || false,
          createdAt: p.created_at ? new Date(p.created_at).toLocaleDateString('th-TH') : 'ไม่นานมานี้'
        }));
      }

      if (Array.isArray(rawSquads) && rawSquads.length > 0) {
        state.squads = rawSquads.map(s => ({
          id: s.id,
          title: s.title,
          gameId: s.game_id,
          gameName: s.game_name,
          mode: s.mode,
          rankRequired: s.rank_required,
          server: s.server,
          hostRole: s.host_role,
          hostName: s.host_name,
          membersMax: s.members_max,
          rolesNeeded: s.roles_needed || [],
          micRequired: s.mic_required,
          status: s.status || 'open',
          members: typeof s.members === 'string' ? JSON.parse(s.members) : (s.members || []),
          createdAt: s.created_at ? new Date(s.created_at).toLocaleDateString('th-TH') : 'เมื่อสักครู่'
        }));
      }

      if (Array.isArray(rawChat) && rawChat.length > 0) {
        state.chatMessages = rawChat.map(c => ({
          id: c.id,
          channel: c.channel,
          user: typeof c.user_info === 'string' ? JSON.parse(c.user_info) : (c.user_info || {}),
          text: c.text,
          time: c.time || '12:00'
        }));
      }

      if (Array.isArray(rawStories) && rawStories.length > 0) {
        state.stories = rawStories.map(st => ({
          id: st.id,
          userId: st.user_id,
          userName: st.user_name,
          userAvatar: st.user_avatar,
          mediaUrl: st.media_url,
          type: st.type,
          caption: st.caption,
          tag: st.tag,
          viewsCount: st.views_count || 0,
          likesCount: st.likes_count || 0,
          createdAt: 'เมื่อสักครู่'
        }));
      }

      if (Array.isArray(rawReviews) && rawReviews.length > 0) {
        state.reviews = rawReviews.map(r => ({
          id: r.id,
          gameId: r.game_id,
          gameName: r.game_name,
          author: r.author,
          avatar: r.avatar,
          overallRating: parseFloat(r.overall_rating) || 5.0,
          title: r.title,
          content: r.content,
          scores: typeof r.scores === 'string' ? JSON.parse(r.scores) : (r.scores || { gameplay: 9, graphics: 9, story: 9, soundtrack: 9 }),
          likes: r.likes || 0,
          date: r.date || 'วันนี้'
        }));
      }

      if (Array.isArray(rawUsers) && rawUsers.length > 0) {
        state.users = rawUsers.map(u => ({
          id: u.id,
          name: u.name,
          gamerTag: u.gamer_tag,
          email: u.email,
          password: u.password,
          bio: u.bio,
          avatar: u.avatar,
          banner: u.banner,
          level: u.level || 1,
          xp: u.xp || 100,
          xpNext: u.xp_next || 500,
          rankTitle: u.rank_title,
          favoriteGames: u.favorite_games || [],
          friends: u.friends || [],
          friendRequests: u.friend_requests || [],
          sentRequests: u.sent_requests || [],
          following: u.following || [],
          stats: typeof u.stats === 'string' ? JSON.parse(u.stats) : (u.stats || {}),
          badges: typeof u.badges === 'string' ? JSON.parse(u.badges) : (u.badges || [])
        }));
      }

      this.lastSyncTime = new Date();
      this.isConnected = true;
      this._notify();
      return state;
    } catch (e) {
      console.warn('[Supabase] Sync state error:', e);
      return null;
    }
  }

  // Save Post to Supabase
  async syncPost(post) {
    if (!this.isConnected) return false;
    return this.upsertItem('nexus_posts', {
      id: post.id,
      title: post.title,
      content: post.content,
      category: post.category || 'discussion',
      game_id: post.gameId || 'valorant',
      game_name: post.gameName || 'Valorant',
      author: post.author,
      tags: post.tags || [],
      image: post.image || null,
      video: post.video || null,
      media_type: post.mediaType || null,
      upvotes: post.upvotes || 0,
      downvotes: post.downvotes || 0,
      likes: post.likes || 0,
      comments_count: post.commentsCount || (post.comments ? post.comments.length : 0),
      comments: post.comments || [],
      pinned: post.pinned || false,
      updated_at: new Date().toISOString()
    });
  }

  // Save Squad to Supabase
  async syncSquad(squad) {
    if (!this.isConnected) return false;
    return this.upsertItem('nexus_squads', {
      id: squad.id,
      title: squad.title,
      game_id: squad.gameId,
      game_name: squad.gameName,
      mode: squad.mode,
      rank_required: squad.rankRequired,
      server: squad.server,
      host_role: squad.hostRole,
      host_name: squad.hostName || squad.members[0]?.name || 'Host',
      members_max: squad.membersMax,
      roles_needed: squad.rolesNeeded || [],
      mic_required: squad.micRequired || false,
      status: squad.status || 'open',
      members: squad.members || [],
      updated_at: new Date().toISOString()
    });
  }

  // Save Tournament to Supabase
  async syncTournament(tour) {
    if (!this.isConnected) return false;
    return this.upsertItem('nexus_tournaments', {
      id: tour.id,
      title: tour.title,
      game: tour.game,
      prize_pool: tour.prizePool || tour.prize_pool,
      badge: tour.badge || null,
      banner: tour.banner || null,
      format: tour.format || 'Single Elimination',
      start_date: tour.startDate || tour.start_date || 'เร็วๆ นี้',
      teams_max: tour.teamsMax || tour.teams_max || 32,
      teams_registered: tour.teamsRegistered || tour.teams_registered || (tour.teams ? tour.teams.length : 0),
      status: tour.status || 'open',
      brackets: tour.brackets || [],
      teams: tour.teams || [],
      updated_at: new Date().toISOString()
    });
  }

  // Save Chat Message to Supabase
  async syncChatMessage(msg) {
    if (!this.isConnected) return false;
    return this.upsertItem('nexus_chat_messages', {
      id: msg.id,
      channel: msg.channel || 'general',
      user_info: msg.user,
      text: msg.text,
      time: msg.time || new Date().toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })
    });
  }

  // Save Story to Supabase
  async syncStory(story) {
    if (!this.isConnected) return false;
    return this.upsertItem('nexus_stories', {
      id: story.id,
      user_id: story.userId,
      user_name: story.userName,
      user_avatar: story.userAvatar,
      media_url: story.mediaUrl,
      type: story.type || 'image',
      caption: story.caption || '',
      tag: story.tag || '#Highlight',
      views_count: story.viewsCount || 0,
      likes_count: story.likesCount || 0
    });
  }

  // Save Review to Supabase
  async syncReview(rev) {
    if (!this.isConnected) return false;
    return this.upsertItem('nexus_reviews', {
      id: rev.id,
      game_id: rev.gameId,
      game_name: rev.gameName,
      author: rev.author,
      avatar: rev.avatar,
      overall_rating: rev.overallRating || 5.0,
      title: rev.title,
      content: rev.content,
      scores: rev.scores || {},
      likes: rev.likes || 0,
      date: rev.date || 'วันนี้'
    });
  }

  // Save User to Supabase
  async syncUser(user) {
    if (!this.isConnected || !user) return false;
    return this.upsertItem('nexus_users', {
      id: user.id,
      name: user.name,
      gamer_tag: user.gamerTag || user.gamer_tag || '#0000',
      email: user.email || null,
      password: user.password || null,
      bio: user.bio || '',
      avatar: user.avatar || '',
      banner: user.banner || '',
      level: user.level || 1,
      xp: user.xp || 100,
      xp_next: user.xpNext || user.xp_next || 500,
      rank_title: user.rankTitle || user.rank_title || '🎮 New Challenger',
      favorite_games: user.favoriteGames || user.favorite_games || [],
      friends: user.friends || [],
      friend_requests: user.friendRequests || user.friend_requests || [],
      sent_requests: user.sentRequests || user.sent_requests || [],
      following: user.following || [],
      stats: user.stats || {},
      badges: user.badges || [],
      updated_at: new Date().toISOString()
    });
  }

  // One-click Seed local/default state up to Supabase Cloud
  async seedCloudFromLocal(state, onProgress = null) {
    if (!this.isConnected) {
      const check = await this.checkConnection();
      if (!check.success) return check;
    }

    const report = { posts: 0, squads: 0, tournaments: 0, stories: 0, reviews: 0, chat: 0, users: 0 };

    try {
      if (onProgress) onProgress('กำลังอัปโหลดโพสต์และกระทู้...');
      if (Array.isArray(state.posts)) {
        for (const post of state.posts) {
          const ok = await this.syncPost(post);
          if (ok) report.posts++;
        }
      }

      if (onProgress) onProgress('กำลังอัปโหลดตี้ LFG...');
      if (Array.isArray(state.squads)) {
        for (const squad of state.squads) {
          const ok = await this.syncSquad(squad);
          if (ok) report.squads++;
        }
      }

      if (onProgress) onProgress('กำลังอัปโหลดทัวร์นาเมนต์...');
      if (Array.isArray(state.tournaments)) {
        for (const tour of state.tournaments) {
          const ok = await this.syncTournament(tour);
          if (ok) report.tournaments++;
        }
      }

      if (onProgress) onProgress('กำลังอัปโหลดรีวิวเกม...');
      if (Array.isArray(state.reviews)) {
        for (const rev of state.reviews) {
          const ok = await this.syncReview(rev);
          if (ok) report.reviews++;
        }
      }

      if (onProgress) onProgress('กำลังอัปโหลดสตอรี่ไฮไลท์...');
      if (Array.isArray(state.stories)) {
        for (const story of state.stories) {
          const ok = await this.syncStory(story);
          if (ok) report.stories++;
        }
      }

      if (onProgress) onProgress('กำลังอัปโหลดข้อความแชท...');
      if (Array.isArray(state.chatMessages)) {
        for (const msg of state.chatMessages) {
          const ok = await this.syncChatMessage(msg);
          if (ok) report.chat++;
        }
      }

      if (onProgress) onProgress('กำลังอัปโหลดบัญชีผู้ใช้...');
      if (Array.isArray(state.users)) {
        for (const u of state.users) {
          const ok = await this.syncUser(u);
          if (ok) report.users++;
        }
      } else if (state.user) {
        const ok = await this.syncUser(state.user);
        if (ok) report.users++;
      }

      return {
        success: true,
        message: `อัปโหลดข้อมูลสู่ Supabase สำเร็จ! (โพสต์: ${report.posts}, ตี้: ${report.squads}, ทัวร์: ${report.tournaments}, รีวิว: ${report.reviews}, สตอรี่: ${report.stories}, ผู้ใช้: ${report.users})`,
        report
      };
    } catch (e) {
      return { success: false, message: `เกิดข้อผิดพลาดในการอัปโหลด: ${e.message}` };
    }
  }
}

export const supabase = new SupabaseConnector();
