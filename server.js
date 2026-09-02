/**
 * NEXUS GAMING TH - Backend Server & REST API
 * Native Node.js HTTP Server with Built-in Database Controller & Static Asset Server
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const db = require('./server/db');

const PORT = process.env.PORT || 3000;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.mp4': 'video/mp4',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf'
};

// Helper to send JSON responses
function sendJSON(res, statusCode, data) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  });
  res.end(JSON.stringify(data));
}

// Helper to parse JSON request body
function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
      // Guard against oversized payloads (max 10MB)
      if (body.length > 1e7) {
        req.destroy();
        reject(new Error('Payload too large'));
      }
    });
    req.on('end', () => {
      if (!body) return resolve({});
      try {
        resolve(JSON.parse(body));
      } catch (err) {
        resolve({});
      }
    });
    req.on('error', err => reject(err));
  });
}

const server = http.createServer(async (req, res) => {
  // CORS Preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    });
    return res.end();
  }

  const [reqPath, queryString] = req.url.split('?');
  const method = req.method.toUpperCase();

  // =========================================================================
  // 1. API ROUTES (DATABASE REST API)
  // =========================================================================
  if (reqPath.startsWith('/api/')) {
    try {
      // 1.1 System & DB Health
      if (reqPath === '/api/status' && method === 'GET') {
        const all = db.getAll();
        return sendJSON(res, 200, {
          status: 'ok',
          database: 'connected',
          version: all.version || '2.0.0',
          lastUpdated: all.lastUpdated,
          stats: {
            usersCount: (all.users || []).length,
            postsCount: (all.posts || []).length,
            squadsCount: (all.squads || []).length,
            tournamentsCount: (all.tournaments || []).length,
            chatMessagesCount: (all.chatMessages || []).length,
            storiesCount: (all.stories || []).length,
            reviewsCount: (all.reviews || []).length
          }
        });
      }

      // Supabase Server Environment Config Discovery
      if (reqPath === '/api/config/supabase' && method === 'GET') {
        const url = process.env.SUPABASE_URL || '';
        const key = process.env.SUPABASE_ANON_KEY || '';
        return sendJSON(res, 200, {
          configured: Boolean(url && key),
          url: url,
          key: key
        });
      }

      // 1.2 Export / Sync / Reset Entire Database
      if (reqPath === '/api/db/all' && method === 'GET') {
        return sendJSON(res, 200, db.getAll());
      }

      if (reqPath === '/api/db/sync' && method === 'POST') {
        const body = await parseBody(req);
        db.syncAll(body);
        return sendJSON(res, 200, { success: true, message: 'Database synchronized successfully' });
      }

      if (reqPath === '/api/db/reset' && method === 'POST') {
        const fresh = db.resetToDefault();
        return sendJSON(res, 200, { success: true, message: 'Database reset to default seed', data: fresh });
      }

      // 1.3 Posts Collection
      if (reqPath === '/api/posts' && method === 'GET') {
        return sendJSON(res, 200, db.getCollection('posts'));
      }

      if (reqPath === '/api/posts' && method === 'POST') {
        const body = await parseBody(req);
        const newPost = db.insertItem('posts', body);
        return sendJSON(res, 201, { success: true, post: newPost });
      }

      if (reqPath === '/api/posts/vote' && method === 'POST') {
        const { postId, delta } = await parseBody(req);
        const updated = db.updateItem('posts', postId, post => {
          post.upvotes = Math.max(0, (post.upvotes || 0) + (delta || 1));
          return post;
        });
        return sendJSON(res, updated ? 200 : 404, { success: !!updated, post: updated });
      }

      if (reqPath === '/api/posts/comment' && method === 'POST') {
        const { postId, comment } = await parseBody(req);
        const updated = db.updateItem('posts', postId, post => {
          if (!post.comments) post.comments = [];
          if (!comment.id) comment.id = `c-${Date.now()}`;
          if (!comment.createdAt) comment.createdAt = 'เมื่อสักครู่';
          post.comments.push(comment);
          post.commentsCount = post.comments.length;
          return post;
        });
        return sendJSON(res, updated ? 200 : 404, { success: !!updated, post: updated });
      }

      // 1.4 Squads / LFG Collection
      if (reqPath === '/api/squads' && method === 'GET') {
        return sendJSON(res, 200, db.getCollection('squads'));
      }

      if (reqPath === '/api/squads' && method === 'POST') {
        const body = await parseBody(req);
        const newSquad = db.insertItem('squads', body);
        return sendJSON(res, 201, { success: true, squad: newSquad });
      }

      if (reqPath === '/api/squads/join' && method === 'POST') {
        const { squadId, member } = await parseBody(req);
        const updated = db.updateItem('squads', squadId, sq => {
          if (!sq.members) sq.members = [];
          if (sq.members.length < sq.maxSlots) {
            sq.members.push(member);
            sq.slotsNeeded = Math.max(0, sq.maxSlots - sq.members.length);
            if (sq.slotsNeeded === 0) sq.status = 'full';
          }
          return sq;
        });
        return sendJSON(res, updated ? 200 : 400, { success: !!updated, squad: updated });
      }

      // 1.5 Chat Messages Collection
      if (reqPath === '/api/chat' && method === 'GET') {
        return sendJSON(res, 200, db.getCollection('chatMessages'));
      }

      if (reqPath === '/api/chat' && method === 'POST') {
        const body = await parseBody(req);
        if (!body.timestamp) body.timestamp = Date.now();
        const msg = db.insertItem('chatMessages', body);
        return sendJSON(res, 201, { success: true, message: msg });
      }

      // 1.6 User Accounts & Auth
      if (reqPath === '/api/users' && method === 'GET') {
        // Return public profiles (omit passwords)
        const users = db.getCollection('users').map(u => {
          const { password, ...safeUser } = u;
          return safeUser;
        });
        return sendJSON(res, 200, users);
      }

      if (reqPath === '/api/auth/register' && method === 'POST') {
        const body = await parseBody(req);
        const existing = db.getCollection('users').find(u => u.email === body.email || u.name === body.name);
        if (existing) {
          return sendJSON(res, 400, { success: false, message: 'อีเมลหรือชื่อผู้ใช้นี้มีอยู่ในระบบแล้ว' });
        }
        const newUser = db.insertItem('users', body);
        const { password, ...safe } = newUser;
        return sendJSON(res, 201, { success: true, user: safe });
      }

      if (reqPath === '/api/auth/login' && method === 'POST') {
        const { emailOrName, password } = await parseBody(req);
        const user = db.getCollection('users').find(
          u => (u.email === emailOrName || u.name === emailOrName) && u.password === password
        );
        if (!user) {
          return sendJSON(res, 401, { success: false, message: 'อีเมล/ชื่อผู้ใช้ หรือรหัสผ่านไม่ถูกต้อง' });
        }
        const { password: _, ...safe } = user;
        return sendJSON(res, 200, { success: true, user: safe });
      }

      if (reqPath === '/api/users/profile' && method === 'PUT') {
        const body = await parseBody(req);
        const updated = db.updateItem('users', body.id, body);
        return sendJSON(res, updated ? 200 : 404, { success: !!updated, user: updated });
      }

      // 1.7 Stories
      if (reqPath === '/api/stories' && method === 'GET') {
        return sendJSON(res, 200, db.getCollection('stories'));
      }

      if (reqPath === '/api/stories' && method === 'POST') {
        const body = await parseBody(req);
        const story = db.insertItem('stories', body);
        return sendJSON(res, 201, { success: true, story });
      }

      // 1.8 Reviews
      if (reqPath === '/api/reviews' && method === 'GET') {
        return sendJSON(res, 200, db.getCollection('reviews'));
      }

      if (reqPath === '/api/reviews' && method === 'POST') {
        const body = await parseBody(req);
        const rev = db.insertItem('reviews', body);
        return sendJSON(res, 201, { success: true, review: rev });
      }

      // 1.9 Tournaments
      if (reqPath === '/api/tournaments' && method === 'GET') {
        return sendJSON(res, 200, db.getCollection('tournaments'));
      }

      if (reqPath === '/api/tournaments/register' && method === 'POST') {
        const { tournamentId, team } = await parseBody(req);
        const updated = db.updateItem('tournaments', tournamentId, t => {
          if (!t.registeredTeams) t.registeredTeams = [];
          if (t.registeredTeams.length < t.totalTeams) {
            t.registeredTeams.push(team);
            t.registeredCount = t.registeredTeams.length;
          }
          return t;
        });
        return sendJSON(res, updated ? 200 : 400, { success: !!updated, tournament: updated });
      }

      return sendJSON(res, 404, { error: 'API route not found' });
    } catch (apiErr) {
      console.error('❌ API Error:', apiErr);
      return sendJSON(res, 500, { error: 'Internal server error', details: apiErr.message });
    }
  }

  // =========================================================================
  // 2. STATIC ASSETS & FAVICON
  // =========================================================================
  let safePath = reqPath;
  if (safePath === '/') safePath = '/index.html';

  if (safePath === '/favicon.ico' || safePath === '/favicon.png') {
    const icoPath = path.join(__dirname, safePath.slice(1));
    if (fs.existsSync(icoPath)) {
      const data = fs.readFileSync(icoPath);
      res.writeHead(200, { 'Content-Type': safePath.endsWith('.ico') ? 'image/x-icon' : 'image/png' });
      return res.end(data);
    }
    // Fallback vector SVG
    res.writeHead(200, { 'Content-Type': 'image/svg+xml' });
    return res.end('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🎮</text></svg>');
  }

  const filePath = path.join(__dirname, safePath);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Not Found');
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache'
    });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`\n==================================================`);
  console.log(`🎮 NEXUS GAMING TH Server & Database Engine`);
  console.log(`🌐 Web App:  http://localhost:${PORT}`);
  console.log(`🗄️ Database: Connected (${path.join(__dirname, 'data', 'nexus_db.json')})`);
  console.log(`📡 REST API: http://localhost:${PORT}/api/status`);
  console.log(`==================================================\n`);
});
