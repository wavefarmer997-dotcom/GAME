/**
 * NEXUS GAMING TH - Central Reactive Store & LocalStorage Manager
 */

import {
  INITIAL_GAMES,
  INITIAL_POSTS,
  INITIAL_SQUADS,
  INITIAL_TOURNAMENTS,
  INITIAL_CHAT_MESSAGES,
  INITIAL_USER,
  INITIAL_REVIEWS,
  INITIAL_STORIES,
  INITIAL_PLAYERS
} from './data.js';

class Store {
  constructor() {
    this.STORAGE_KEY = 'NEXUS_GAMING_STATE_V2';
    this.ACCOUNTS_KEY = 'NEXUS_REGISTERED_ACCOUNTS_V2';
    this.listeners = new Map();
    this.accounts = this._loadAccounts();
    this.state = this._loadState();
  }

  _getDemoAccounts() {
    return [
      {
        id: 'u-nexus',
        name: 'NexusGamerTH',
        gamerTag: '#7788',
        email: 'nexus@nexus.th',
        password: 'password123',
        bio: 'เกมเมอร์สายวาโล & แดนไอยาสิทธิ์ สตรีมเมอร์ฝึกหัด พร้อมหาตี้เล่นสนุก ไม่ Toxic ✨',
        avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=200&q=80',
        banner: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
        level: 38,
        xp: 3850,
        xpNext: 5000,
        rankTitle: '🌟 Mythic Challenger',
        joinedDate: 'กุมภาพันธ์ 2025',
        favoriteGames: ['Valorant', 'Genshin Impact', 'Black Myth: Wukong'],
        friends: ['p-1', 'p-4'],
        friendRequests: ['p-3', 'p-9'],
        sentRequests: ['p-2'],
        following: ['p-1', 'p-6'],
        stats: {
          postsCount: 14,
          squadsJoined: 28,
          tournamentsEntered: 3,
          reputationScore: 98
        },
        badges: [
          { id: 'b1', name: '👑 Early Adopter', icon: '👑', desc: 'สมาชิกรุ่นบุกเบิก NEXUS TH' },
          { id: 'b2', name: '🎯 Clutch Master', icon: '🎯', desc: 'ชนะแมตช์หาตี้ติดต่อกัน 10 ครั้ง' },
          { id: 'b3', name: '💬 Top Contributor', icon: '💬', desc: 'เขียนไกด์ยอดนิยมที่มีคนกดไลก์เกิน 200+' },
          { id: 'b4', name: '🛡️ Verified Gamer', icon: '🛡️', desc: 'ยืนยันตัวตนและผูกบัญชีสำเร็จ' }
        ]
      },
      {
        id: 'u-neon',
        name: 'Agent_NeonX',
        gamerTag: '#5544',
        email: 'neon@nexus.th',
        password: 'password123',
        bio: 'Speed & Electricity ⚡ Radiant Duelist พร้อมลุยทุกแรงก์ สตรีมเมอร์พาร์ทไทม์',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
        banner: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80',
        level: 50,
        xp: 5100,
        xpNext: 7500,
        rankTitle: '🌟 Immortal Legend',
        joinedDate: 'มกราคม 2025',
        favoriteGames: ['Valorant', 'Apex Legends'],
        friends: ['p-1', 'p-3', 'p-5'],
        friendRequests: ['p-4'],
        sentRequests: [],
        following: ['p-1'],
        stats: {
          postsCount: 22,
          squadsJoined: 45,
          tournamentsEntered: 6,
          reputationScore: 99
        },
        badges: [
          { id: 'b-radiant', name: '⚡ Radiant Legend', icon: '⚡', desc: 'ผู้เล่นระดับท็อปของเซิร์ฟเวอร์' },
          { id: 'b-mvp', name: '🏆 Premier MVP', icon: '🏆', desc: 'คว้า MVP การแข่งขันประจำเดือน' }
        ]
      },
      {
        id: 'u-sova',
        name: 'Sova_ArrowKing',
        gamerTag: '#9999',
        email: 'sova@nexus.th',
        password: 'password123',
        bio: 'Radiant Initiator • Master of Lineups 🏹🎯 รู้ทุกจุดสแกน Recon และ Shock Dart',
        avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=200&q=80',
        banner: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80',
        level: 45,
        xp: 4200,
        xpNext: 6000,
        rankTitle: '👑 Radiant Champion',
        joinedDate: 'ธันวาคม 2024',
        favoriteGames: ['Valorant', 'Black Myth: Wukong'],
        friends: ['p-2', 'p-4'],
        friendRequests: [],
        sentRequests: [],
        following: ['p-2'],
        stats: {
          postsCount: 18,
          squadsJoined: 32,
          tournamentsEntered: 4,
          reputationScore: 97
        },
        badges: [
          { id: 'b-lineup', name: '🏹 Lineup God', icon: '🏹', desc: 'ผู้เชี่ยวชาญการเปิดวิสัยทัศน์ในแมพ' }
        ]
      },
      {
        id: 'u-mavuika',
        name: 'MavuikaSimp',
        gamerTag: '#7712',
        email: 'mavuika@nexus.th',
        password: 'password123',
        bio: 'ยินดีช่วยลงดันเจี้ยน ฟาร์มอาร์ติแฟกต์ และพาทัวร์เปิดแมพ Natlan 100% 🌋✨',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
        banner: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80',
        level: 60,
        xp: 6800,
        xpNext: 9000,
        rankTitle: '🌸 Natlan Archon Champion',
        joinedDate: 'พฤศจิกายน 2024',
        favoriteGames: ['Genshin Impact', 'Black Myth: Wukong'],
        friends: ['p-1', 'p-2', 'p-3'],
        friendRequests: [],
        sentRequests: [],
        following: ['p-1'],
        stats: {
          postsCount: 29,
          squadsJoined: 51,
          tournamentsEntered: 2,
          reputationScore: 100
        },
        badges: [
          { id: 'b-natlan', name: '🌸 AR 60 Explorer', icon: '🌸', desc: 'ผจญภัยครบทุกพื้นที่ใน Teyvat' }
        ]
      }
    ];
  }

  _loadAccounts() {
    try {
      if (typeof localStorage !== 'undefined') {
        const saved = localStorage.getItem(this.ACCOUNTS_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length) {
            return parsed;
          }
        }
      } else if (this.accounts && Array.isArray(this.accounts) && this.accounts.length) {
        return this.accounts;
      }
    } catch (e) {
      console.warn('Failed to load accounts from localStorage', e);
    }
    const demoAccounts = this._getDemoAccounts();
    this._saveAccounts(demoAccounts);
    return demoAccounts;
  }

  _saveAccounts(accounts = this.accounts) {
    this.accounts = accounts;
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(this.ACCOUNTS_KEY, JSON.stringify(accounts));
      }
    } catch (e) {
      console.warn('Failed to save accounts to localStorage', e);
    }
  }

  _loadState() {
    try {
      if (typeof localStorage !== 'undefined') {
        const saved = localStorage.getItem(this.STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (!parsed.games || parsed.games.length < INITIAL_GAMES.length) {
            parsed.games = INITIAL_GAMES;
          }
          if (!parsed.stories || !parsed.stories.length) {
            parsed.stories = INITIAL_STORIES;
          }
          if (!parsed.players || !parsed.players.length) {
            parsed.players = INITIAL_PLAYERS;
          }
          if (parsed.user) {
            parsed.user.friends = parsed.user.friends || ['p-1', 'p-4'];
            parsed.user.friendRequests = parsed.user.friendRequests || ['p-3', 'p-9'];
            parsed.user.sentRequests = parsed.user.sentRequests || ['p-2'];
            parsed.user.following = parsed.user.following || ['p-1', 'p-6'];
          }
          if (parsed.isAuthenticated === undefined) {
            parsed.isAuthenticated = true;
          }
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Failed to load state from localStorage', e);
    }

    return {
      user: INITIAL_USER,
      isAuthenticated: true,
      games: INITIAL_GAMES,
      posts: INITIAL_POSTS,
      squads: INITIAL_SQUADS,
      tournaments: INITIAL_TOURNAMENTS,
      chatMessages: INITIAL_CHAT_MESSAGES,
      reviews: INITIAL_REVIEWS,
      stories: INITIAL_STORIES,
      players: INITIAL_PLAYERS,
      bookmarks: ['post-1', 'post-4'],
      theme: 'cyber-purple', // cyber-purple, neon-cyan, crimson-fury, emerald-matrix
      soundEnabled: true,
      activeTab: 'feed', // feed, lfg, games, tournaments, chat, reviews
      activeGameFilter: 'all',
      activeCategoryFilter: 'all',
      searchQuery: ''
    };
  }

  _saveState() {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.state));
      }
    } catch (e) {
      console.warn('Failed to save state to localStorage', e);
    }
  }

  // Authentication
  login({ identifier, password, rememberMe = true }) {
    const cleanId = (identifier || '').trim().toLowerCase();
    const cleanPwd = (password || '').trim();

    if (!cleanId) return { success: false, message: 'กรุณากรอกชื่อผู้ใช้หรืออีเมล' };
    if (!cleanPwd) return { success: false, message: 'กรุณากรอกรหัสผ่าน' };

    // Refresh accounts list
    this.accounts = this._loadAccounts();

    // Match by username, gamerTag, or email
    const targetAccount = this.accounts.find(acc => {
      const matchName = (acc.name || '').toLowerCase() === cleanId;
      const matchEmail = (acc.email || '').toLowerCase() === cleanId;
      const matchTag = (acc.name + (acc.gamerTag || '')).toLowerCase() === cleanId;
      return matchName || matchEmail || matchTag;
    });

    if (!targetAccount) {
      return { success: false, message: `ไม่พบบัญชี "${identifier}" ในระบบ กรุณาตรวจสอบหรือสมัครสมาชิกใหม่` };
    }

    // Password validation (accept 'password123' or user's stored password)
    if (targetAccount.password && targetAccount.password !== cleanPwd && cleanPwd !== 'password123') {
      return { success: false, message: 'รหัสผ่านไม่ถูกต้อง กรุณาตรวจสอบและลองใหม่อีกครั้ง' };
    }

    // Login successful
    this.state.user = { ...targetAccount };
    this.state.isAuthenticated = true;
    this._saveState();
    this.emit('auth:changed', true);
    this.emit('user:updated', this.state.user);

    return {
      success: true,
      user: this.state.user,
      message: `ยินดีต้อนรับกลับสู่ NEXUS, ${this.state.user.name}! 🎮`
    };
  }

  register({ name, gamerTag, email, password, favoriteGames, avatar }) {
    const cleanName = (name || '').trim();
    const cleanEmail = (email || '').trim().toLowerCase();
    const cleanPwd = (password || '').trim();

    if (!cleanName) return { success: false, message: 'กรุณากรอกชื่อเกมเมอร์ของคุณ' };
    if (cleanName.length < 2) return { success: false, message: 'ชื่อเกมเมอร์ต้องมีความยาวอย่างน้อย 2 ตัวอักษร' };
    if (!cleanEmail) return { success: false, message: 'กรุณากรอกอีเมลของคุณ' };
    if (!cleanEmail.includes('@') || !cleanEmail.includes('.')) {
      return { success: false, message: 'รูปแบบอีเมลไม่ถูกต้อง (ตัวอย่าง: player@gmail.com)' };
    }
    if (!cleanPwd) return { success: false, message: 'กรุณากำหนดรหัสผ่าน' };
    if (cleanPwd.length < 4) return { success: false, message: 'รหัสผ่านต้องมีความยาวอย่างน้อย 4 ตัวอักษร' };

    // Refresh accounts list
    this.accounts = this._loadAccounts();

    // Check duplicate username or email
    const duplicate = this.accounts.find(acc => 
      (acc.name || '').toLowerCase() === cleanName.toLowerCase() ||
      (acc.email || '').toLowerCase() === cleanEmail
    );

    if (duplicate) {
      if ((duplicate.name || '').toLowerCase() === cleanName.toLowerCase()) {
        return { success: false, message: `ชื่อ "${cleanName}" มีผู้ใช้งานแล้ว กรุณาเลือกชื่ออื่น` };
      }
      return { success: false, message: `อีเมล "${cleanEmail}" ถูกใช้งานในระบบแล้ว` };
    }

    const tag = gamerTag && gamerTag.startsWith('#') ? gamerTag : '#' + Math.floor(1000 + Math.random() * 9000);
    const defaultAvatar = avatar || 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=200&q=80';

    const newUser = {
      id: `user-${Date.now()}`,
      name: cleanName,
      gamerTag: tag,
      email: cleanEmail,
      password: cleanPwd,
      bio: 'สมาชิกใหม่แห่ง NEXUS GAMING TH พร้อมลุยทุกแมตช์และหาตี้เล่นสนุก!',
      avatar: defaultAvatar,
      banner: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
      level: 1,
      xp: 100, // 100 XP Welcome bonus
      xpNext: 500,
      rankTitle: '🌱 Rookie Gamer',
      joinedDate: 'กุมภาพันธ์ 2026',
      favoriteGames: favoriteGames && favoriteGames.length ? favoriteGames : ['Valorant', 'Genshin Impact'],
      friends: ['p-1'],
      friendRequests: ['p-4'],
      sentRequests: [],
      following: ['p-1'],
      stats: {
        postsCount: 0,
        squadsJoined: 0,
        tournamentsEntered: 0,
        reputationScore: 100
      },
      badges: [
        { id: 'b-welcome', name: '🎮 First Quest', icon: '🎮', desc: 'สมัครสมาชิกและเข้าสู่ NEXUS สำเร็จ' }
      ]
    };

    // Save into registered accounts
    this.accounts.push(newUser);
    this._saveAccounts(this.accounts);

    // Set active session
    this.state.user = newUser;
    this.state.isAuthenticated = true;
    this._saveState();
    this.emit('auth:changed', true);
    this.emit('user:updated', this.state.user);

    return {
      success: true,
      user: this.state.user,
      message: `🎉 สร้างบัญชีสำเร็จ! ยินดีต้อนรับ ${newUser.name} เข้าสู่ NEXUS (+100 XP)`
    };
  }

  loginAsGuest() {
    this.state.user = {
      ...INITIAL_USER,
      name: 'Guest_' + Math.floor(100 + Math.random() * 900),
      gamerTag: '#0000',
      rankTitle: '🕹️ Guest Adventurer',
      level: 5
    };
    this.state.isAuthenticated = true;
    this._saveState();
    this.emit('auth:changed', true);
    this.emit('user:updated', this.state.user);
    return { success: true, user: this.state.user, message: 'เข้าใช้งานในโหมดทดลองเล่น (Guest Mode) สำเร็จ! 🚀' };
  }

  logout() {
    this.state.isAuthenticated = false;
    this._saveState();
    this.emit('auth:changed', false);
  }

  subscribe(event, callback) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event).push(callback);
    return () => {
      const arr = this.listeners.get(event) || [];
      this.listeners.set(event, arr.filter(cb => cb !== callback));
    };
  }

  emit(event, data) {
    this._saveState();
    const arr = this.listeners.get(event) || [];
    arr.forEach(cb => cb(data, this.state));
    // Also emit global change
    const globalArr = this.listeners.get('*') || [];
    globalArr.forEach(cb => cb(event, data, this.state));
  }

  // --- Actions ---

  // Post Actions
  addPost(postData) {
    const mediaType = postData.mediaType || (postData.video ? 'video' : (postData.image ? 'image' : null));
    const newPost = {
      id: 'post-' + Date.now(),
      title: postData.title,
      content: postData.content,
      author: {
        id: this.state.user.id,
        name: this.state.user.name,
        tag: this.state.user.gamerTag,
        avatar: this.state.user.avatar,
        badge: this.state.user.rankTitle,
        level: this.state.user.level,
        verified: true
      },
      gameId: postData.gameId || 'valorant',
      gameName: postData.gameName || 'Valorant',
      category: postData.category || 'general',
      tags: postData.tags || ['Gaming'],
      image: postData.image || null,
      video: postData.video || null,
      mediaType: mediaType,
      upvotes: 1,
      downvotes: 0,
      userVoted: 1,
      commentsCount: 0,
      views: 1,
      createdAt: 'เมื่อสักครู่',
      pinned: false,
      comments: []
    };

    this.state.posts.unshift(newPost);
    this.state.user.stats.postsCount = (this.state.user.stats.postsCount || 0) + 1;
    this.addXP(50); // Reward for posting
    this.emit('posts:updated', this.state.posts);
    return newPost;
  }

  toggleVote(postId, voteType) { // voteType: 1 (up) or -1 (down)
    const post = this.state.posts.find(p => p.id === postId);
    if (!post) return;

    if (post.userVoted === voteType) {
      // cancel vote
      if (voteType === 1) post.upvotes--;
      if (voteType === -1) post.downvotes--;
      post.userVoted = 0;
    } else {
      // reverse previous vote if any
      if (post.userVoted === 1) post.upvotes--;
      if (post.userVoted === -1) post.downvotes--;

      // apply new vote
      if (voteType === 1) {
        post.upvotes++;
        this.addXP(5);
      }
      if (voteType === -1) post.downvotes++;
      post.userVoted = voteType;
    }

    this.emit('posts:updated', this.state.posts);
  }

  addComment(postId, commentText) {
    const post = this.state.posts.find(p => p.id === postId);
    if (!post || !commentText.trim()) return null;

    const newComment = {
      id: 'c-' + Date.now(),
      author: {
        name: this.state.user.name,
        avatar: this.state.user.avatar,
        level: this.state.user.level,
        badge: this.state.user.rankTitle
      },
      content: commentText.trim(),
      likes: 0,
      createdAt: 'เมื่อสักครู่'
    };

    if (!post.comments) post.comments = [];
    post.comments.push(newComment);
    post.commentsCount = post.comments.length;
    this.addXP(15);

    this.emit('posts:updated', this.state.posts);
    return newComment;
  }

  toggleBookmark(postId) {
    const idx = this.state.bookmarks.indexOf(postId);
    if (idx > -1) {
      this.state.bookmarks.splice(idx, 1);
    } else {
      this.state.bookmarks.push(postId);
    }
    this.emit('bookmarks:updated', this.state.bookmarks);
    return this.state.bookmarks.includes(postId);
  }

  // Squad / LFG Actions
  addSquad(squadData) {
    const newSquad = {
      id: 'sq-' + Date.now(),
      gameId: squadData.gameId,
      gameName: squadData.gameName,
      title: squadData.title,
      mode: squadData.mode || 'Ranked Match',
      rankRequired: squadData.rankRequired || 'All Ranks',
      server: squadData.server || 'Asia / TH',
      host: {
        name: this.state.user.name,
        avatar: this.state.user.avatar,
        rank: this.state.user.rankTitle,
        role: squadData.hostRole || 'Squad Leader'
      },
      membersMax: parseInt(squadData.membersMax, 10) || 5,
      members: [
        {
          name: this.state.user.name,
          role: `${squadData.hostRole || 'Leader'} (Host)`,
          avatar: this.state.user.avatar
        }
      ],
      rolesNeeded: squadData.rolesNeeded || ['Any Role'],
      micRequired: !!squadData.micRequired,
      discordChannel: squadData.discordChannel || 'https://discord.gg/nexus-gaming-th',
      createdAt: 'เมื่อสักครู่',
      status: 'recruiting'
    };

    this.state.squads.unshift(newSquad);
    this.addXP(30);
    this.emit('squads:updated', this.state.squads);
    return newSquad;
  }

  joinSquad(squadId, selectedRole = 'Player') {
    const squad = this.state.squads.find(s => s.id === squadId);
    if (!squad) return { success: false, message: 'ไม่พบตี้ดังกล่าว' };

    const isMember = squad.members.some(m => m.name === this.state.user.name);
    if (isMember) {
      return { success: false, message: 'คุณอยู่ในตี้กลุ่มนี้แล้ว' };
    }

    if (squad.members.length >= squad.membersMax) {
      return { success: false, message: 'ตี้เต็มเรียบร้อยแล้ว' };
    }

    squad.members.push({
      name: this.state.user.name,
      role: selectedRole,
      avatar: this.state.user.avatar
    });

    if (squad.members.length >= squad.membersMax) {
      squad.status = 'full';
    }

    this.state.user.stats.squadsJoined = (this.state.user.stats.squadsJoined || 0) + 1;
    this.addXP(25);
    this.emit('squads:updated', this.state.squads);
    return { success: true, message: 'เข้าร่วมตี้สำเร็จ! เตรียมพร้อมลุย' };
  }

  leaveSquad(squadId) {
    const squad = this.state.squads.find(s => s.id === squadId);
    if (!squad) return;

    squad.members = squad.members.filter(m => m.name !== this.state.user.name);
    if (squad.members.length < squad.membersMax) {
      squad.status = 'recruiting';
    }
    this.emit('squads:updated', this.state.squads);
  }

  // Chat Actions
  sendChatMessage(text, channel = 'general') {
    if (!text || !text.trim()) return null;

    const newMsg = {
      id: 'msg-' + Date.now(),
      channel: channel,
      user: {
        name: this.state.user.name,
        avatar: this.state.user.avatar,
        badge: this.state.user.rankTitle,
        roleColor: '#00e5ff'
      },
      text: text.trim(),
      time: new Date().toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })
    };

    this.state.chatMessages.push(newMsg);
    this.addXP(2);
    this.emit('chat:updated', this.state.chatMessages);

    // Trigger occasional lively automated response
    this._simulateChatReplies(channel, text.trim());
    return newMsg;
  }

  _simulateChatReplies(channel, userMsg) {
    const botReplies = [
      { name: 'Sakura_Blade', role: '🌸 Moderator', color: '#f43f5e', text: 'ยินดีเลยครับ! ยินดีที่ได้คุยกันนะ' },
      { name: 'Khaosan_Aim', role: '⚡ Duelist', color: '#ffaa00', text: 'ช็อตเมื่อกี้ตึงมาก ใครอยากลงแรงก์บอกเลย' },
      { name: 'Gamer_TH_Bot', role: '🤖 NEXUS Bot', color: '#a855f7', text: 'อย่าลืมแวะไปดูแท็บหาตี้และทัวร์นาเมนต์ได้นะ!' },
      { name: 'Viper_Poison', role: '👑 Radiant', color: '#00ff88', text: 'มีใครดูแมตช์พรีเมียร์รอบชิงสดบ้าง เดือดจัด!' }
    ];

    setTimeout(() => {
      const randomReply = botReplies[Math.floor(Math.random() * botReplies.length)];
      const botMsg = {
        id: 'msg-bot-' + Date.now(),
        channel: channel,
        user: {
          name: randomReply.name,
          avatar: `https://images.unsplash.com/photo-${1535713875000 + Math.floor(Math.random() * 500)}?auto=format&fit=crop&w=100&q=80`,
          badge: randomReply.role,
          roleColor: randomReply.color
        },
        text: randomReply.text,
        time: new Date().toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })
      };
      this.state.chatMessages.push(botMsg);
      this.emit('chat:updated', this.state.chatMessages);
    }, 1400);
  }

  // Tournament Actions
  registerTournament(tournamentId, teamName) {
    const tour = this.state.tournaments.find(t => t.id === tournamentId);
    if (!tour) return { success: false, message: 'ไม่พบรายการแข่ง' };

    if (tour.teamsRegistered >= tour.teamsMax) {
      return { success: false, message: 'ทีมสมัครเต็มแล้ว' };
    }

    tour.teamsRegistered++;
    this.state.user.stats.tournamentsEntered = (this.state.user.stats.tournamentsEntered || 0) + 1;
    this.addXP(100);
    this.emit('tournaments:updated', this.state.tournaments);
    return { success: true, message: `ลงทะเบียนทีม "${teamName}" เข้าร่วมสำเร็จ!` };
  }

  // Reviews
  addReview(reviewData) {
    const newRev = {
      id: 'rev-' + Date.now(),
      gameId: reviewData.gameId,
      gameName: reviewData.gameName,
      author: this.state.user.name,
      avatar: this.state.user.avatar,
      overallRating: parseFloat(reviewData.overallRating) || 5,
      scores: {
        gameplay: parseFloat(reviewData.gameplay) || 9.0,
        graphics: parseFloat(reviewData.graphics) || 9.0,
        story: parseFloat(reviewData.story) || 8.5,
        soundtrack: parseFloat(reviewData.soundtrack) || 9.0
      },
      title: reviewData.title,
      content: reviewData.content,
      date: 'เมื่อสักครู่',
      likes: 1
    };

    this.state.reviews.unshift(newRev);
    this.addXP(40);
    this.emit('reviews:updated', this.state.reviews);
    return newRev;
  }

  // Story Actions
  addStory(storyData) {
    const newStory = {
      id: 'story-' + Date.now(),
      userId: this.state.user.id,
      userName: this.state.user.name,
      userTag: this.state.user.gamerTag,
      userAvatar: this.state.user.avatar,
      userLevel: this.state.user.level,
      type: storyData.type || 'image', // 'image' | 'video' | 'text'
      mediaUrl: storyData.mediaUrl || null,
      caption: storyData.caption || '',
      tag: storyData.tag || '#GamerLife',
      badge: this.state.user.rankTitle,
      bgGradient: storyData.bgGradient || 'linear-gradient(135deg, #7928CA, #FF0080)',
      createdAt: 'เมื่อสักครู่',
      viewsCount: 1,
      reactions: { '🔥': 0, '👑': 0, '⚡': 0, '🎯': 0, '❤️': 0 }
    };

    this.state.stories.unshift(newStory);
    this.addXP(35); // Reward for story
    this.emit('stories:updated', this.state.stories);
    return newStory;
  }

  deleteStory(storyId) {
    this.state.stories = this.state.stories.filter(s => s.id !== storyId);
    this.emit('stories:updated', this.state.stories);
  }

  reactStory(storyId, emoji) {
    const story = this.state.stories.find(s => s.id === storyId);
    if (!story) return;
    if (!story.reactions) {
      story.reactions = { '🔥': 0, '👑': 0, '⚡': 0, '🎯': 0, '❤️': 0 };
    }
    story.reactions[emoji] = (story.reactions[emoji] || 0) + 1;
    this.addXP(2);
    this.emit('stories:updated', this.state.stories);
    return story.reactions[emoji];
  }

  getUserStories(userId) {
    return this.state.stories.filter(s => s.userId === userId);
  }

  // Profile & Gamification
  addXP(amount) {
    const user = this.state.user;
    user.xp += amount;
    let leveledUp = false;

    while (user.xp >= user.xpNext) {
      user.level++;
      user.xp -= user.xpNext;
      user.xpNext = Math.floor(user.xpNext * 1.25);
      leveledUp = true;
    }

    if (leveledUp) {
      this.emit('user:levelup', user);
    }
    this.emit('user:updated', user);
  }

  updateProfile(newData) {
    this.state.user = {
      ...this.state.user,
      ...newData
    };
    this.emit('user:updated', this.state.user);
  }

  // --- Social & Friends System ---
  getPlayers() {
    return this.state.players || INITIAL_PLAYERS;
  }

  getPlayerById(id) {
    return (this.state.players || []).find(p => p.id === id) || null;
  }

  isFriend(playerId) {
    const friends = this.state.user.friends || [];
    return friends.includes(playerId);
  }

  isPending(playerId) {
    const sent = this.state.user.sentRequests || [];
    return sent.includes(playerId);
  }

  hasIncomingRequest(playerId) {
    const reqs = this.state.user.friendRequests || [];
    return reqs.includes(playerId);
  }

  isFollowing(playerId) {
    const following = this.state.user.following || [];
    return following.includes(playerId);
  }

  sendFriendRequest(playerId) {
    const user = this.state.user;
    if (!user.friends) user.friends = [];
    if (!user.sentRequests) user.sentRequests = [];
    if (!user.friendRequests) user.friendRequests = [];

    if (user.friends.includes(playerId)) {
      return { success: false, message: 'คุณเป็นเพื่อนกับผู้เล่นคนนี้อยู่แล้ว' };
    }

    if (user.sentRequests.includes(playerId)) {
      return { success: false, message: 'คุณได้ส่งคำขอเป็นเพื่อนไปแล้ว กำลังรอตอบรับ' };
    }

    // If there's an incoming request from this player, auto-accept it!
    if (user.friendRequests.includes(playerId)) {
      return this.acceptFriendRequest(playerId);
    }

    user.sentRequests.push(playerId);
    this.addXP(10); // Reward for social activity
    this.emit('friends:updated', { type: 'request_sent', playerId });
    this.emit('user:updated', this.state.user);

    const player = this.getPlayerById(playerId);
    const targetName = player ? player.name : 'ผู้เล่น';
    return {
      success: true,
      message: `ส่งคำขอเป็นเพื่อนถึง ${targetName} เรียบร้อยแล้ว! (+10 XP)`
    };
  }

  acceptFriendRequest(playerId) {
    const user = this.state.user;
    if (!user.friends) user.friends = [];
    if (!user.friendRequests) user.friendRequests = [];
    if (!user.sentRequests) user.sentRequests = [];

    user.friendRequests = user.friendRequests.filter(id => id !== playerId);
    user.sentRequests = user.sentRequests.filter(id => id !== playerId);

    if (!user.friends.includes(playerId)) {
      user.friends.push(playerId);
    }

    this.addXP(25); // Reward for accepting friend
    this.emit('friends:updated', { type: 'friend_added', playerId });
    this.emit('user:updated', this.state.user);

    const player = this.getPlayerById(playerId);
    const targetName = player ? player.name : 'ผู้เล่น';
    return {
      success: true,
      message: `เป็นเพื่อนกับ ${targetName} เรียบร้อยแล้ว! (+25 XP)`
    };
  }

  declineFriendRequest(playerId) {
    const user = this.state.user;
    if (!user.friendRequests) user.friendRequests = [];
    user.friendRequests = user.friendRequests.filter(id => id !== playerId);

    this.emit('friends:updated', { type: 'request_declined', playerId });
    this.emit('user:updated', this.state.user);

    const player = this.getPlayerById(playerId);
    const targetName = player ? player.name : 'ผู้เล่น';
    return {
      success: true,
      message: `ปฏิเสธคำขอเป็นเพื่อนจาก ${targetName} แล้ว`
    };
  }

  cancelFriendRequest(playerId) {
    const user = this.state.user;
    if (!user.sentRequests) user.sentRequests = [];
    user.sentRequests = user.sentRequests.filter(id => id !== playerId);

    this.emit('friends:updated', { type: 'request_cancelled', playerId });
    this.emit('user:updated', this.state.user);

    return {
      success: true,
      message: 'ยกเลิกคำขอเป็นเพื่อนเรียบร้อยแล้ว'
    };
  }

  removeFriend(playerId) {
    const user = this.state.user;
    if (!user.friends) user.friends = [];
    user.friends = user.friends.filter(id => id !== playerId);

    this.emit('friends:updated', { type: 'friend_removed', playerId });
    this.emit('user:updated', this.state.user);

    const player = this.getPlayerById(playerId);
    const targetName = player ? player.name : 'ผู้เล่น';
    return {
      success: true,
      message: `ลบ ${targetName} ออกจากรายชื่อเพื่อนแล้ว`
    };
  }

  addFriendDirect(query) {
    const cleanQuery = (query || '').trim();
    if (!cleanQuery) {
      return { success: false, message: 'กรุณากรอกชื่อผู้เล่น หรือ GamerTag (เช่น #1337)' };
    }

    const q = cleanQuery.toLowerCase();
    let player = (this.state.players || []).find(p =>
      p.name.toLowerCase() === q ||
      p.gamerTag.toLowerCase() === q ||
      `${p.name}${p.gamerTag}`.toLowerCase() === q.replace(/\s+/g, '')
    );

    if (!player && cleanQuery.length >= 3) {
      player = (this.state.players || []).find(p =>
        p.name.toLowerCase().includes(q) ||
        p.gamerTag.toLowerCase().includes(q)
      );
    }

    if (!player) {
      const tag = cleanQuery.startsWith('#') ? cleanQuery : `#${Math.floor(1000 + Math.random() * 9000)}`;
      const name = cleanQuery.startsWith('#') ? `Gamer_${cleanQuery.replace('#', '')}` : cleanQuery.split('#')[0];
      player = {
        id: `p-dyn-${Date.now()}`,
        name: name,
        gamerTag: tag,
        avatar: `https://images.unsplash.com/photo-${1535713875000 + Math.floor(Math.random() * 500)}?auto=format&fit=crop&w=200&q=80`,
        banner: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
        level: Math.floor(15 + Math.random() * 40),
        rank: '🌟 Ascendant / Diamond',
        rankTitle: '🎯 Pro Challenger',
        status: 'online',
        statusText: 'กำลังออนไลน์ในระบบ NEXUS',
        primaryGame: 'Valorant',
        favoriteGames: ['Valorant', 'Genshin Impact'],
        bio: 'เกมเมอร์สายจริงจัง ค้นพบผ่าน GamerTag Direct Add 🚀',
        mutualFriends: 1,
        followersCount: Math.floor(20 + Math.random() * 100)
      };
      if (!this.state.players) this.state.players = [];
      this.state.players.unshift(player);
    }

    return this.sendFriendRequest(player.id);
  }

  toggleFollow(playerId) {
    const user = this.state.user;
    if (!user.following) user.following = [];

    const idx = user.following.indexOf(playerId);
    let isNowFollowing = false;

    const player = this.getPlayerById(playerId);
    const targetName = player ? player.name : 'ผู้เล่น';

    if (idx > -1) {
      user.following.splice(idx, 1);
      if (player && player.followersCount > 0) player.followersCount--;
      isNowFollowing = false;
    } else {
      user.following.push(playerId);
      if (player) player.followersCount = (player.followersCount || 0) + 1;
      this.addXP(5);
      isNowFollowing = true;
    }

    this.emit('friends:updated', { type: 'follow_toggled', playerId, following: isNowFollowing });
    this.emit('user:updated', this.state.user);

    return {
      success: true,
      following: isNowFollowing,
      message: isNowFollowing ? `ติดตาม ${targetName} เรียบร้อยแล้ว (+5 XP)` : `เลิกติดตาม ${targetName} แล้ว`
    };
  }

  // Theme & Navigation
  setTheme(themeName) {
    this.state.theme = themeName;
    document.documentElement.setAttribute('data-theme', themeName);
    this.emit('theme:changed', themeName);
  }

  setTab(tabName) {
    this.state.activeTab = tabName;
    this.emit('tab:changed', tabName);
  }

  setGameFilter(gameId) {
    this.state.activeGameFilter = gameId;
    this.emit('filter:game', gameId);
  }

  setCategoryFilter(category) {
    this.state.activeCategoryFilter = category;
    this.emit('filter:category', category);
  }

  setSearchQuery(q) {
    this.state.searchQuery = q;
    this.emit('search:updated', q);
  }

  // --- Data Persistence & Backup Management APIs ---
  save() {
    this._saveState();
    this._saveAccounts(this.accounts);
    return {
      success: true,
      timestamp: new Date().toLocaleTimeString(),
      stats: this.getStatsSummary()
    };
  }

  getStatsSummary() {
    const postsCount = (this.state.posts || []).length;
    const squadsCount = (this.state.squads || []).length;
    const reviewsCount = (this.state.reviews || []).length;
    const accountsCount = (this.accounts || []).length;
    const chatCount = (this.state.chatMessages || []).length;
    const storiesCount = (this.state.stories || []).length;

    let storageBytes = 0;
    try {
      if (typeof localStorage !== 'undefined') {
        const stateStr = localStorage.getItem(this.STORAGE_KEY) || '';
        const accStr = localStorage.getItem(this.ACCOUNTS_KEY) || '';
        storageBytes = new Blob([stateStr, accStr]).size;
      }
    } catch (e) {}

    return {
      postsCount,
      squadsCount,
      reviewsCount,
      accountsCount,
      chatCount,
      storiesCount,
      storageKb: (storageBytes / 1024).toFixed(1)
    };
  }

  exportBackup() {
    let customChannels = [];
    try {
      const savedChan = localStorage.getItem('NEXUS_CUSTOM_TEXT_CHANNELS');
      if (savedChan) customChannels = JSON.parse(savedChan);
    } catch (e) {}

    const backupData = {
      app: 'NEXUS_GAMING_TH',
      version: '2.5.0',
      exportedAt: new Date().toISOString(),
      state: JSON.parse(JSON.stringify(this.state)),
      accounts: JSON.parse(JSON.stringify(this.accounts)),
      customTextChannels: customChannels
    };

    return backupData;
  }

  importBackup(backupData) {
    try {
      const data = typeof backupData === 'string' ? JSON.parse(backupData) : backupData;
      if (!data || !data.state) {
        return { success: false, message: 'ไฟล์สำรองข้อมูลไม่ถูกต้อง (Invalid Backup Structure)' };
      }

      // Restore accounts
      if (Array.isArray(data.accounts) && data.accounts.length) {
        this.accounts = data.accounts;
        this._saveAccounts(this.accounts);
      }

      // Restore custom text channels if present
      if (Array.isArray(data.customTextChannels) && typeof localStorage !== 'undefined') {
        localStorage.setItem('NEXUS_CUSTOM_TEXT_CHANNELS', JSON.stringify(data.customTextChannels));
      }

      // Restore central state
      this.state = {
        ...this.state,
        ...data.state
      };
      this._saveState();

      // Emit global reactive update
      this.emit('*', this.state);
      this.emit('auth:changed', this.state.isAuthenticated);
      this.emit('user:updated', this.state.user);
      this.emit('posts:updated', this.state.posts);
      this.emit('squads:updated', this.state.squads);
      this.emit('reviews:updated', this.state.reviews);
      this.emit('chat:updated', this.state.chatMessages);

      return {
        success: true,
        message: '🎉 กู้คืนข้อมูลสำเร็จเรียบร้อยแล้ว!',
        stats: this.getStatsSummary()
      };
    } catch (e) {
      console.error('Import backup failed:', e);
      return { success: false, message: 'เกิดข้อผิดพลาดในการอ่านไฟล์สำรองข้อมูล: ' + e.message };
    }
  }

  resetToDefaultData() {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.removeItem(this.STORAGE_KEY);
        localStorage.removeItem(this.ACCOUNTS_KEY);
        localStorage.removeItem('NEXUS_CUSTOM_TEXT_CHANNELS');
      }
    } catch (e) {}

    this.accounts = this._getDemoAccounts();
    this._saveAccounts(this.accounts);

    this.state = {
      user: INITIAL_USER,
      isAuthenticated: true,
      games: INITIAL_GAMES,
      posts: INITIAL_POSTS,
      squads: INITIAL_SQUADS,
      tournaments: INITIAL_TOURNAMENTS,
      chatMessages: INITIAL_CHAT_MESSAGES,
      reviews: INITIAL_REVIEWS,
      stories: INITIAL_STORIES,
      players: INITIAL_PLAYERS,
      bookmarks: ['post-1', 'post-4'],
      theme: 'cyber-purple',
      soundEnabled: true,
      activeTab: 'feed',
      activeGameFilter: 'all',
      activeCategoryFilter: 'all',
      searchQuery: ''
    };

    this._saveState();

    this.emit('*', this.state);
    this.emit('auth:changed', true);
    this.emit('user:updated', this.state.user);
    this.emit('posts:updated', this.state.posts);
    this.emit('squads:updated', this.state.squads);
    this.emit('reviews:updated', this.state.reviews);
    this.emit('chat:updated', this.state.chatMessages);

    return { success: true, message: 'รีเซ็ตข้อมูลเริ่มต้น (Default Demo Data) สำเร็จแล้ว!' };
  }
}

export const store = new Store();
