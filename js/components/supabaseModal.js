/**
 * NEXUS GAMING TH - Supabase Cloud Database Settings & Manager Modal
 */

import { supabase } from '../supabase.js';
import { store } from '../store.js';
import { sound } from '../audio.js';
import { showToast, triggerConfetti } from './effects.js';

export function initSupabaseModal() {
  const openBtn = document.getElementById('btn-header-supabase');
  const modal = document.getElementById('modal-supabase-settings');
  const form = document.getElementById('form-supabase-config');
  const inUrl = document.getElementById('supabase-in-url');
  const inKey = document.getElementById('supabase-in-key');
  const statusBadge = document.getElementById('supabase-status-badge');
  const headerStatusDot = document.getElementById('header-supabase-dot');
  const btnCopySql = document.getElementById('btn-copy-supabase-sql');
  const btnTest = document.getElementById('btn-test-supabase');
  const btnDisconnect = document.getElementById('btn-disconnect-supabase');
  const btnSeed = document.getElementById('btn-seed-supabase');
  const btnForceSync = document.getElementById('btn-force-sync-supabase');
  const btnToggleKey = document.getElementById('btn-toggle-key');
  const btnClose = document.getElementById('btn-close-supabase-modal');

  // Auto-discover server environment credentials if not configured locally
  if (typeof fetch !== 'undefined' && !supabase.isConfigured()) {
    fetch('/api/config/supabase')
      .then(res => res.ok ? res.json() : null)
      .then(data => {
        if (data && data.configured && data.url && data.key) {
          if (inUrl && !inUrl.value) inUrl.value = data.url;
          if (inKey && !inKey.value) inKey.value = data.key;
          supabase.saveConfig(data.url, data.key);
        }
      })
      .catch(() => {});
  }

  if (!modal) return;

  // 1. Initial State Sync
  const updateUI = ({ isConnected, isConfigured, lastSync }) => {
    if (headerStatusDot) {
      headerStatusDot.className = isConnected ? 'header-supabase-dot status-dot-green' : (isConfigured ? 'header-supabase-dot status-dot-amber' : 'header-supabase-dot status-dot-grey');
    }
    if (statusBadge) {
      if (isConnected) {
        const timeStr = lastSync ? new Date(lastSync).toLocaleTimeString('th-TH') : 'ล่าสุด';
        statusBadge.innerHTML = `🟢 เชื่อมต่อ Supabase Cloud สำเร็จ ⚡ (Live Sync อัปเดตเมื่อ ${timeStr})`;
        statusBadge.className = 'supabase-badge connected';
      } else if (isConfigured) {
        statusBadge.innerHTML = '🟡 กำลังเชื่อมต่อ / กำลังตรวจสอบตาราง...';
        statusBadge.className = 'supabase-badge connecting';
      } else {
        statusBadge.innerHTML = '⚪ ยังไม่ได้เชื่อมต่อ (ใช้งานโหมด Local Database ในเครื่อง)';
        statusBadge.className = 'supabase-badge offline';
      }
    }

    if (inUrl && !inUrl.value && supabase.config.url) {
      inUrl.value = supabase.config.url;
    }
    if (inKey && !inKey.value && supabase.config.key) {
      inKey.value = supabase.config.key;
    }
  };

  supabase.subscribe(updateUI);

  // 2. Open Modal
  if (openBtn) {
    openBtn.addEventListener('click', () => {
      sound.play('click');
      if (inUrl) inUrl.value = supabase.config.url || '';
      if (inKey) inKey.value = supabase.config.key || '';
      modal.classList.add('active');
    });
  }

  // 2.1 Close Modal button
  if (btnClose) {
    btnClose.addEventListener('click', () => {
      sound.play('click');
      modal.classList.remove('active');
    });
  }

  // 2.2 Toggle API Key visibility
  if (btnToggleKey && inKey) {
    btnToggleKey.addEventListener('click', () => {
      sound.play('click');
      if (inKey.type === 'password') {
        inKey.type = 'text';
        btnToggleKey.textContent = '🙈';
      } else {
        inKey.type = 'password';
        btnToggleKey.textContent = '👁️';
      }
    });
  }

  // 3. Form Submit (Save & Connect)
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const url = inUrl.value.trim();
      const key = inKey.value.trim();

      if (!url || !key) {
        showToast('⚠️ กรุณากรอก Project URL และ Anon Key ให้ครบถ้วน', 'info');
        return;
      }

      showToast('⚡ กำลังทดสอบการเชื่อมต่อไปยัง Supabase...', 'info');
      const res = await supabase.saveConfig(url, key);

      if (res.success) {
        sound.play('success');
        triggerConfetti(window.innerWidth / 2, window.innerHeight * 0.4, 30);
        showToast(`🎉 ${res.message}`, 'success');
        modal.classList.remove('active');
      } else {
        sound.play('click');
        showToast(`⚠️ ${res.message}`, 'danger');
      }
    });
  }

  // 4. Test Connection Button
  if (btnTest) {
    btnTest.addEventListener('click', async () => {
      sound.play('click');
      const url = inUrl.value.trim();
      const key = inKey.value.trim();

      if (!url || !key) {
        showToast('⚠️ กรุณากรอก Project URL และ Anon Key ก่อนกดทดสอบ', 'info');
        return;
      }

      showToast('🔍 กำลังทดสอบการเชื่อมต่อ...', 'info');
      supabase.config.url = url.replace(/\/+$/, '');
      supabase.config.key = key;

      const res = await supabase.checkConnection();
      if (res.success) {
        sound.play('success');
        showToast(`✅ ${res.message}`, 'success');
      } else {
        showToast(`❌ ${res.message}`, 'danger');
      }
    });
  }

  // 5. Disconnect Button
  if (btnDisconnect) {
    btnDisconnect.addEventListener('click', () => {
      sound.play('click');
      supabase.saveConfig('', '');
      if (inUrl) inUrl.value = '';
      if (inKey) inKey.value = '';
      showToast('🔌 ยกเลิกการเชื่อมต่อ Supabase แล้ว (กลับสู่โหมด Local)', 'info');
    });
  }

  // 6. Copy SQL Schema Script
  if (btnCopySql) {
    btnCopySql.addEventListener('click', () => {
      sound.play('click');
      const sqlCode = getSupabaseSchemaSQL();
      if (navigator.clipboard) {
        navigator.clipboard.writeText(sqlCode).then(() => {
          showToast('📋 คัดลอก SQL Schema สำเร็จ! นำไปวางใน Supabase SQL Editor ได้เลย', 'success');
        }).catch(() => {
          copyFallback(sqlCode);
        });
      } else {
        copyFallback(sqlCode);
      }
    });
  }

  // 7. One-click Seed Data to Supabase
  if (btnSeed) {
    btnSeed.addEventListener('click', async () => {
      sound.play('click');
      if (!supabase.isConnected) {
        showToast('⚠️ กรุณาเชื่อมต่อ Supabase ให้สำเร็จก่อนทำการอัปโหลดข้อมูล', 'info');
        return;
      }

      btnSeed.disabled = true;
      btnSeed.textContent = '⏳ กำลังอัปโหลดข้อมูลสู่ Cloud...';
      showToast('🚀 กำลังเริ่มอัปโหลดโพสต์, ปาร์ตี้, ทัวร์นาเมนต์ และบัญชีผู้ใช้ขึ้น Supabase...', 'info');

      try {
        const res = await supabase.seedCloudFromLocal(store.state, (progressMsg) => {
          showToast(`⚡ ${progressMsg}`, 'info');
        });

        if (res && res.success) {
          sound.play('success');
          triggerConfetti(window.innerWidth / 2, window.innerHeight * 0.4, 40);
          showToast(`🎉 ${res.message}`, 'success');
        } else {
          showToast(`⚠️ ${res?.message || 'การอัปโหลดไม่สำเร็จ'}`, 'danger');
        }
      } catch (err) {
        showToast(`❌ เกิดข้อผิดพลาด: ${err.message}`, 'danger');
      } finally {
        btnSeed.disabled = false;
        btnSeed.textContent = '🚀 อัปโหลดข้อมูลสู่ Cloud ตอนนี้';
      }
    });
  }

  // 8. Force Pull Cloud Data
  if (btnForceSync) {
    btnForceSync.addEventListener('click', async () => {
      sound.play('click');
      if (!supabase.isConnected) {
        showToast('⚠️ กรุณาเชื่อมต่อ Supabase ก่อนซิงค์ข้อมูล', 'info');
        return;
      }

      btnForceSync.disabled = true;
      btnForceSync.textContent = '⏳ กำลังดึงข้อมูล...';

      try {
        const freshState = await supabase.fetchAllState();
        if (freshState) {
          ['posts', 'squads', 'tournaments', 'chatMessages', 'stories', 'reviews'].forEach(key => {
            if (freshState[key] && Array.isArray(freshState[key]) && freshState[key].length > 0) {
              store.state[key] = freshState[key];
            }
          });
          store.emit('*');
          sound.play('success');
          showToast('🟢 ซิงค์ข้อมูลล่าสุดจาก Supabase Cloud เรียบร้อย 100%!', 'success');
        } else {
          showToast('⚠️ ไม่สามารถดึงข้อมูลจาก Cloud ได้ กรุณาตรวจสอบตารางฐานข้อมูล', 'info');
        }
      } catch (err) {
        showToast(`❌ ข้อผิดพลาดในการซิงค์: ${err.message}`, 'danger');
      } finally {
        btnForceSync.disabled = false;
        btnForceSync.textContent = '🔄 ซิงค์ข้อมูล Cloud ทันที';
      }
    });
  }
}

function copyFallback(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  showToast('📋 คัดลอก SQL Schema สำเร็จ! นำไปวางใน Supabase SQL Editor ได้เลย', 'success');
}

export function getSupabaseSchemaSQL() {
  return `-- ============================================================================
-- NEXUS GAMING TH - Supabase Complete Database Schema
-- Copy & Paste into Supabase SQL Editor and click 'RUN'
-- ============================================================================

-- 1. Enable UUID Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Table: Posts (กระทู้ ไกด์ ข่าวสาร มีม)
CREATE TABLE IF NOT EXISTS public.nexus_posts (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT DEFAULT 'discussion',
  game_id TEXT DEFAULT 'valorant',
  game_name TEXT DEFAULT 'Valorant',
  author JSONB NOT NULL DEFAULT '{}'::jsonb,
  tags TEXT[] DEFAULT '{}',
  image TEXT,
  video TEXT,
  media_type TEXT,
  upvotes INTEGER DEFAULT 0,
  downvotes INTEGER DEFAULT 0,
  likes INTEGER DEFAULT 0,
  comments_count INTEGER DEFAULT 0,
  comments JSONB DEFAULT '[]'::jsonb,
  pinned BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Table: Squads (ปาร์ตี้หาตี้เล่นเกม LFG)
CREATE TABLE IF NOT EXISTS public.nexus_squads (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  game_id TEXT NOT NULL,
  game_name TEXT NOT NULL,
  mode TEXT DEFAULT 'Competitive',
  rank_required TEXT DEFAULT 'Any Rank',
  server TEXT DEFAULT 'Asia / Thailand',
  host_role TEXT DEFAULT 'Flex',
  host_name TEXT NOT NULL,
  members_max INTEGER DEFAULT 5,
  roles_needed TEXT[] DEFAULT '{}',
  mic_required BOOLEAN DEFAULT FALSE,
  status TEXT DEFAULT 'open',
  members JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Table: Chat Messages (ห้องแชทสด Real-time Gamer Lounge)
CREATE TABLE IF NOT EXISTS public.nexus_chat_messages (
  id TEXT PRIMARY KEY,
  channel TEXT NOT NULL DEFAULT 'general',
  user_info JSONB NOT NULL DEFAULT '{}'::jsonb,
  text TEXT NOT NULL,
  time TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Table: Stories (สตอรี่ไฮไลท์เกมเมอร์)
CREATE TABLE IF NOT EXISTS public.nexus_stories (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  user_name TEXT NOT NULL,
  user_avatar TEXT,
  media_url TEXT NOT NULL,
  type TEXT DEFAULT 'image',
  caption TEXT,
  tag TEXT DEFAULT '#Highlight',
  views_count INTEGER DEFAULT 0,
  likes_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. Table: Reviews (รีวิวเกมและคะแนนจากคอมมูนิตี้)
CREATE TABLE IF NOT EXISTS public.nexus_reviews (
  id TEXT PRIMARY KEY,
  game_id TEXT NOT NULL,
  game_name TEXT NOT NULL,
  author TEXT NOT NULL,
  avatar TEXT,
  overall_rating NUMERIC(3,1) DEFAULT 5.0,
  title TEXT,
  content TEXT,
  scores JSONB DEFAULT '{"gameplay":9,"graphics":9,"story":8,"soundtrack":9}'::jsonb,
  likes INTEGER DEFAULT 0,
  date TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. Table: Tournaments (ทัวร์นาเมนต์และการแข่งขัน)
CREATE TABLE IF NOT EXISTS public.nexus_tournaments (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  game TEXT NOT NULL,
  prize_pool TEXT,
  badge TEXT,
  banner TEXT,
  format TEXT,
  start_date TEXT,
  teams_max INTEGER DEFAULT 32,
  teams_registered INTEGER DEFAULT 0,
  status TEXT DEFAULT 'open',
  brackets JSONB DEFAULT '[]'::jsonb,
  teams JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. Table: Registered Users (บัญชีผู้ใช้งาน สถิติ และเลเวล)
CREATE TABLE IF NOT EXISTS public.nexus_users (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  gamer_tag TEXT NOT NULL,
  email TEXT UNIQUE,
  password TEXT,
  bio TEXT,
  avatar TEXT,
  banner TEXT,
  level INTEGER DEFAULT 1,
  xp INTEGER DEFAULT 100,
  xp_next INTEGER DEFAULT 500,
  rank_title TEXT DEFAULT '🎮 New Challenger',
  favorite_games TEXT[] DEFAULT '{}',
  friends TEXT[] DEFAULT '{}',
  friend_requests TEXT[] DEFAULT '{}',
  sent_requests TEXT[] DEFAULT '{}',
  following TEXT[] DEFAULT '{}',
  stats JSONB DEFAULT '{"postsCount":0,"squadsJoined":0,"tournamentsEntered":0,"reputationScore":100}'::jsonb,
  badges JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.nexus_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.nexus_squads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.nexus_chat_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.nexus_stories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.nexus_reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.nexus_tournaments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.nexus_users ENABLE ROW LEVEL SECURITY;

-- Enable Public Anon Read & Write Access
DROP POLICY IF EXISTS "Public Anon Read Posts" ON public.nexus_posts;
CREATE POLICY "Public Anon Read Posts" ON public.nexus_posts FOR SELECT USING (true);
DROP POLICY IF EXISTS "Public Anon Write Posts" ON public.nexus_posts;
CREATE POLICY "Public Anon Write Posts" ON public.nexus_posts FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Public Anon Read Squads" ON public.nexus_squads;
CREATE POLICY "Public Anon Read Squads" ON public.nexus_squads FOR SELECT USING (true);
DROP POLICY IF EXISTS "Public Anon Write Squads" ON public.nexus_squads;
CREATE POLICY "Public Anon Write Squads" ON public.nexus_squads FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Public Anon Read Chat" ON public.nexus_chat_messages;
CREATE POLICY "Public Anon Read Chat" ON public.nexus_chat_messages FOR SELECT USING (true);
DROP POLICY IF EXISTS "Public Anon Write Chat" ON public.nexus_chat_messages FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Public Anon Read Stories" ON public.nexus_stories;
CREATE POLICY "Public Anon Read Stories" ON public.nexus_stories FOR SELECT USING (true);
DROP POLICY IF EXISTS "Public Anon Write Stories" ON public.nexus_stories FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Public Anon Read Reviews" ON public.nexus_reviews;
CREATE POLICY "Public Anon Read Reviews" ON public.nexus_reviews FOR SELECT USING (true);
DROP POLICY IF EXISTS "Public Anon Write Reviews" ON public.nexus_reviews FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Public Anon Read Tournaments" ON public.nexus_tournaments;
CREATE POLICY "Public Anon Read Tournaments" ON public.nexus_tournaments FOR SELECT USING (true);
DROP POLICY IF EXISTS "Public Anon Write Tournaments" ON public.nexus_tournaments FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Public Anon Read Users" ON public.nexus_users;
CREATE POLICY "Public Anon Read Users" ON public.nexus_users FOR SELECT USING (true);
DROP POLICY IF EXISTS "Public Anon Write Users" ON public.nexus_users FOR ALL USING (true) WITH CHECK (true);

-- Enable Realtime publication
ALTER PUBLICATION supabase_realtime ADD TABLE public.nexus_posts;
ALTER PUBLICATION supabase_realtime ADD TABLE public.nexus_squads;
ALTER PUBLICATION supabase_realtime ADD TABLE public.nexus_chat_messages;
ALTER PUBLICATION supabase_realtime ADD TABLE public.nexus_stories;
`;
}
