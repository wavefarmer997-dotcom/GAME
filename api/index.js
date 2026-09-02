/**
 * Vercel Serverless Function Handler for NEXUS GAMING API
 */
const db = require('../server/db');

function sendJSON(res, statusCode, data) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (res.status && typeof res.status === 'function') {
    return res.status(statusCode).json(data);
  }
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*'
  });
  res.end(JSON.stringify(data));
}

function parseBody(req) {
  if (req.body && typeof req.body === 'object') return Promise.resolve(req.body);
  if (req.body && typeof req.body === 'string') {
    try {
      return Promise.resolve(JSON.parse(req.body));
    } catch (e) {
      return Promise.resolve({});
    }
  }
  return new Promise((resolve) => {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
      if (!body) return resolve({});
      try {
        resolve(JSON.parse(body));
      } catch (err) {
        resolve({});
      }
    });
  });
}

module.exports = async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    return res.writeHead ? res.writeHead(204).end() : res.status(204).end();
  }

  const url = req.url || '';
  const [reqPath] = url.split('?');
  const method = (req.method || 'GET').toUpperCase();

  const route = reqPath.startsWith('/api') ? reqPath : `/api${reqPath}`;

  try {
    // 1. Status
    if (route === '/api/status' && method === 'GET') {
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

    // 2. Collections
    if (route === '/api/posts' && method === 'GET') {
      return sendJSON(res, 200, db.getCollection('posts'));
    }
    if (route === '/api/posts' && method === 'POST') {
      const body = await parseBody(req);
      const post = db.insertItem('posts', body);
      return sendJSON(res, 201, { success: true, post });
    }

    if (route === '/api/squads' && method === 'GET') {
      return sendJSON(res, 200, db.getCollection('squads'));
    }
    if (route === '/api/squads' && method === 'POST') {
      const body = await parseBody(req);
      const squad = db.insertItem('squads', body);
      return sendJSON(res, 201, { success: true, squad });
    }

    if (route === '/api/tournaments' && method === 'GET') {
      return sendJSON(res, 200, db.getCollection('tournaments'));
    }
    if (route === '/api/chat' && method === 'GET') {
      return sendJSON(res, 200, db.getCollection('chatMessages'));
    }
    if (route === '/api/stories' && method === 'GET') {
      return sendJSON(res, 200, db.getCollection('stories'));
    }
    if (route === '/api/reviews' && method === 'GET') {
      return sendJSON(res, 200, db.getCollection('reviews'));
    }

    // Default API fallback
    return sendJSON(res, 200, { status: 'ok', route });
  } catch (err) {
    return sendJSON(res, 500, { error: err.message });
  }
};
