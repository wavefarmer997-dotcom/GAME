/**
 * NEXUS GAMING TH - Client-Side API & Database Connector
 * Handles communication with Backend Database REST API with Graceful Offline Fallback
 */

class NexusAPI {
  constructor() {
    this.baseUrl = window.location.origin;
    this.isOnline = false;
    this.listeners = new Set();
    this.checkHealth();
  }

  async checkHealth() {
    try {
      const res = await fetch(`${this.baseUrl}/api/status`, { method: 'GET', cache: 'no-cache' });
      if (res.ok) {
        const data = await res.json();
        this.isOnline = true;
        this._notifyStatus(true, data);
        return data;
      }
    } catch (e) {
      this.isOnline = false;
      this._notifyStatus(false, null);
    }
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
      } catch (err) {
        console.warn('[API] Status listener error:', err);
      }
    });
  }

  async _request(endpoint, options = {}) {
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
        this.isOnline = true;
        return await res.json();
      }
      return null;
    } catch (err) {
      this.isOnline = false;
      return null;
    }
  }

  // --- Database Operations ---

  async fetchAll() {
    return await this._request('/api/db/all', { method: 'GET' });
  }

  async syncState(state) {
    return await this._request('/api/db/sync', {
      method: 'POST',
      body: JSON.stringify(state)
    });
  }

  async resetDB() {
    return await this._request('/api/db/reset', { method: 'POST' });
  }

  // --- Posts ---

  async createPost(post) {
    return await this._request('/api/posts', {
      method: 'POST',
      body: JSON.stringify(post)
    });
  }

  async votePost(postId, delta) {
    return await this._request('/api/posts/vote', {
      method: 'POST',
      body: JSON.stringify({ postId, delta })
    });
  }

  async addComment(postId, comment) {
    return await this._request('/api/posts/comment', {
      method: 'POST',
      body: JSON.stringify({ postId, comment })
    });
  }

  // --- Squads ---

  async createSquad(squad) {
    return await this._request('/api/squads', {
      method: 'POST',
      body: JSON.stringify(squad)
    });
  }

  async joinSquad(squadId, member) {
    return await this._request('/api/squads/join', {
      method: 'POST',
      body: JSON.stringify({ squadId, member })
    });
  }

  // --- Chat Messages ---

  async sendChatMessage(msg) {
    return await this._request('/api/chat', {
      method: 'POST',
      body: JSON.stringify(msg)
    });
  }

  // --- Auth & Users ---

  async register(user) {
    return await this._request('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify(user)
    });
  }

  async login(emailOrName, password) {
    return await this._request('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ emailOrName, password })
    });
  }

  async updateProfile(user) {
    return await this._request('/api/users/profile', {
      method: 'PUT',
      body: JSON.stringify(user)
    });
  }

  // --- Stories ---

  async createStory(story) {
    return await this._request('/api/stories', {
      method: 'POST',
      body: JSON.stringify(story)
    });
  }

  // --- Reviews ---

  async createReview(review) {
    return await this._request('/api/reviews', {
      method: 'POST',
      body: JSON.stringify(review)
    });
  }

  // --- Tournaments ---

  async registerTournament(tournamentId, team) {
    return await this._request('/api/tournaments/register', {
      method: 'POST',
      body: JSON.stringify({ tournamentId, team })
    });
  }
}

export const api = new NexusAPI();
