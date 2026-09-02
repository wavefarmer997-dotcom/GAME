/**
 * NEXUS GAMING TH - Client-Side API & Database Connector
 * Handles communication with Backend Database REST API with Intelligent Offline Detection
 * Prevents 404/405 errors when running on static servers (e.g., Live Server :5500 or GitHub Pages)
 */

class NexusAPI {
  constructor() {
    this.baseUrl = '';
    this.isOnline = false;
    this.isChecking = false;
    this.listeners = new Set();
    this._initEndpoint();
  }

  async _initEndpoint() {
    if (typeof window === 'undefined') return;

    // 1. First, check relative same-origin /api/status (Works for Node server, Vercel Serverless, etc.)
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 1200);
      const res = await fetch('/api/status', {
        method: 'GET',
        signal: controller.signal
      });
      clearTimeout(timeoutId);
      if (res.ok) {
        this.baseUrl = '';
        this.isOnline = true;
        const data = await res.json();
        this._notifyStatus(true, data);
        return;
      }
    } catch (e) {
      // Same-origin /api/status not reachable
    }

    // 2. If running on local dev server (e.g. Live Server on http://localhost:5500), check localhost:3000
    const isLocalhost = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');
    if (isLocalhost && window.location.protocol === 'http:') {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 800);
        const res = await fetch('http://localhost:3000/api/status', {
          method: 'GET',
          signal: controller.signal,
          mode: 'cors'
        });
        clearTimeout(timeoutId);
        if (res.ok) {
          this.baseUrl = 'http://localhost:3000';
          this.isOnline = true;
          const data = await res.json();
          this._notifyStatus(true, data);
          return;
        }
      } catch (e) {
        // Backend not on localhost:3000 -> work in LocalStorage mode
      }
    }

    this.baseUrl = '';
    this.isOnline = false;
    this._notifyStatus(false, null);
  }

  async checkHealth() {
    if (!this.baseUrl) {
      this.isOnline = false;
      return null;
    }

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 1200);
      const res = await fetch(`${this.baseUrl}/api/status`, {
        method: 'GET',
        cache: 'no-cache',
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      if (res.ok) {
        const data = await res.json();
        this.isOnline = true;
        this._notifyStatus(true, data);
        return data;
      }
    } catch (e) {
      // Silently mark offline
    }

    this.isOnline = false;
    this._notifyStatus(false, null);
    return null;
  }

  onStatusChange(callback) {
    this.listeners.add(callback);
    callback(this.isOnline);
    return () => this.listeners.delete(callback);
  }

  _notifyStatus(status, details) {
    this.listeners.forEach(cb => {
      try {
        cb(status, details);
      } catch (err) {}
    });
  }

  async _request(endpoint, options = {}) {
    // If not online or no backend baseUrl, skip network request entirely to prevent 404/405 errors
    if (!this.isOnline || !this.baseUrl) {
      return null;
    }

    try {
      const url = `${this.baseUrl}${endpoint}`;
      const res = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          ...(options.headers || {})
        },
        ...options
      });
      if (res.ok) {
        return await res.json();
      }
    } catch (err) {
      this.isOnline = false;
    }
    return null;
  }

  // --- Database Operations ---

  async fetchAll() {
    if (!this.isOnline) return null;
    return await this._request('/api/db/all', { method: 'GET' });
  }

  async syncState(state) {
    if (!this.isOnline) return { success: false, offline: true };
    return await this._request('/api/db/sync', {
      method: 'POST',
      body: JSON.stringify(state)
    });
  }

  async resetDB() {
    if (!this.isOnline) return null;
    return await this._request('/api/db/reset', { method: 'POST' });
  }

  // --- Posts ---

  async createPost(post) {
    if (!this.isOnline) return null;
    return await this._request('/api/posts', {
      method: 'POST',
      body: JSON.stringify(post)
    });
  }

  async votePost(postId, delta) {
    if (!this.isOnline) return null;
    return await this._request('/api/posts/vote', {
      method: 'POST',
      body: JSON.stringify({ postId, delta })
    });
  }

  async addComment(postId, comment) {
    if (!this.isOnline) return null;
    return await this._request('/api/posts/comment', {
      method: 'POST',
      body: JSON.stringify({ postId, comment })
    });
  }

  // --- Squads ---

  async createSquad(squad) {
    if (!this.isOnline) return null;
    return await this._request('/api/squads', {
      method: 'POST',
      body: JSON.stringify(squad)
    });
  }

  async joinSquad(squadId, member) {
    if (!this.isOnline) return null;
    return await this._request('/api/squads/join', {
      method: 'POST',
      body: JSON.stringify({ squadId, member })
    });
  }

  // --- Chat Messages ---

  async sendChatMessage(msg) {
    if (!this.isOnline) return null;
    return await this._request('/api/chat', {
      method: 'POST',
      body: JSON.stringify(msg)
    });
  }

  // --- Auth & Users ---

  async register(user) {
    if (!this.isOnline) return null;
    return await this._request('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify(user)
    });
  }

  async login(emailOrName, password) {
    if (!this.isOnline) return null;
    return await this._request('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ emailOrName, password })
    });
  }

  async updateProfile(user) {
    if (!this.isOnline) return null;
    return await this._request('/api/users/profile', {
      method: 'PUT',
      body: JSON.stringify(user)
    });
  }

  // --- Stories ---

  async createStory(story) {
    if (!this.isOnline) return null;
    return await this._request('/api/stories', {
      method: 'POST',
      body: JSON.stringify(story)
    });
  }

  // --- Reviews ---

  async createReview(review) {
    if (!this.isOnline) return null;
    return await this._request('/api/reviews', {
      method: 'POST',
      body: JSON.stringify(review)
    });
  }

  // --- Tournaments ---

  async registerTournament(tournamentId, team) {
    if (!this.isOnline) return null;
    return await this._request('/api/tournaments/register', {
      method: 'POST',
      body: JSON.stringify({ tournamentId, team })
    });
  }
}

export const api = new NexusAPI();
