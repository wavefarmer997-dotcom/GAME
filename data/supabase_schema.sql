-- ============================================================================
-- NEXUS GAMING TH - Supabase Database Schema
-- Copy and paste this script into your Supabase SQL Editor and click 'RUN'
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

-- ============================================================================
-- 9. Enable Row Level Security (RLS) with Public Access for NEXUS Community App
-- ============================================================================

ALTER TABLE public.nexus_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.nexus_squads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.nexus_chat_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.nexus_stories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.nexus_reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.nexus_tournaments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.nexus_users ENABLE ROW LEVEL SECURITY;

-- Allow Public Anon Read & Write Access for seamless community interactions
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

-- Enable Realtime publication for Instant Sync across all gamers
ALTER PUBLICATION supabase_realtime ADD TABLE public.nexus_posts;
ALTER PUBLICATION supabase_realtime ADD TABLE public.nexus_squads;
ALTER PUBLICATION supabase_realtime ADD TABLE public.nexus_chat_messages;
ALTER PUBLICATION supabase_realtime ADD TABLE public.nexus_stories;
