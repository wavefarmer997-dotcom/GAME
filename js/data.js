/**
 * NEXUS GAMING TH - Comprehensive Seed Data
 * Contains realistic game hubs, forum posts, LFG parties, tournaments, reviews, and user profile data.
 */

export const INITIAL_GAMES = [
  {
    id: 'valorant',
    name: 'Valorant',
    genre: 'FPS / Tactical Shooter',
    developer: 'Riot Games',
    platform: ['PC'],
    cover: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
    banner: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1400&q=80',
    color: '#ff4655',
    activePlayers: '42.8K',
    rating: 4.8,
    reviewsCount: 1420,
    tags: ['Competitive', 'Tactical', 'Esports', 'Ranked'],
    description: 'เกมยิงปืนเชิงกลยุทธ์ 5v5 ที่ผสมผสานความแม่นยำของการยิงปืนและพลังสกิลเฉพาะตัวของแต่ละ Agent',
    activePartiesCount: 18,
    activeTournamentsCount: 3
  },
  {
    id: 'genshin',
    name: 'Genshin Impact',
    genre: 'Action RPG / Open World',
    developer: 'HoYoverse',
    platform: ['PC', 'Mobile', 'PlayStation'],
    cover: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80',
    banner: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1400&q=80',
    color: '#00e5ff',
    activePlayers: '55.3K',
    rating: 4.9,
    reviewsCount: 2890,
    tags: ['Anime', 'Open World', 'Gacha', 'Story Rich'],
    description: 'ออกสำรวจทวีป Teyvat อันกว้างใหญ่ ค้นพบปริศนา พลังธาตุทั้ง 7 และเรื่องราวการตามหาครอบครัวที่พลัดพราก',
    activePartiesCount: 12,
    activeTournamentsCount: 1
  },
  {
    id: 'rov',
    name: 'Arena of Valor (ROV)',
    genre: 'MOBA 5v5',
    developer: 'Garena / TiMi Studios',
    platform: ['Mobile'],
    cover: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80',
    banner: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1400&q=80',
    color: '#ffaa00',
    activePlayers: '68.1K',
    rating: 4.7,
    reviewsCount: 3100,
    tags: ['MOBA', 'Mobile', 'Competitive', 'Fast Paced'],
    description: 'สุดยอดเกม MOBA บนมือถือขวัญใจเกมเมอร์ไทย รวมฮีโร่สายแบก ไฟต์เตอร์ เมจ แครี่ สู้กันแบบ Real-time',
    activePartiesCount: 25,
    activeTournamentsCount: 4
  },
  {
    id: 'gta5',
    name: 'GTA V / FiveM Thailand',
    genre: 'Open World / Roleplay',
    developer: 'Rockstar Games / Community',
    platform: ['PC'],
    cover: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
    banner: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1400&q=80',
    color: '#00ff88',
    activePlayers: '38.4K',
    rating: 4.8,
    reviewsCount: 1850,
    tags: ['Roleplay', 'City Life', 'Sandbox', 'Voice Chat'],
    description: 'จำลองการใช้ชีวิตในเมือง Los Santos สวมบทบาทเป็นตำรวจ หมอ แก๊งสเตอร์ หรือนักธุรกิจในเซิร์ฟเวอร์ FiveM ยอดฮิต',
    activePartiesCount: 14,
    activeTournamentsCount: 2
  },
  {
    id: 'wukong',
    name: 'Black Myth: Wukong',
    genre: 'Action RPG / Soulslike',
    developer: 'Game Science',
    platform: ['PC', 'PlayStation 5'],
    cover: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    banner: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1400&q=80',
    color: '#d4af37',
    activePlayers: '29.7K',
    rating: 4.95,
    reviewsCount: 950,
    tags: ['Mythology', 'Souls-like', 'Next-Gen', 'Single Player'],
    description: 'ตำนานไซอิ๋วฉบับแอ็กชันสุดมันส์ กราฟิกระดับ Unreal Engine 5 บู๊ดุเดือด แปลงร่าง และฟาดฟันบอสสุดอลังการ',
    activePartiesCount: 6,
    activeTournamentsCount: 1
  },
  {
    id: 'eldenring',
    name: 'Elden Ring: Shadow of the Erdtree',
    genre: 'Action RPG / Dark Fantasy',
    developer: 'FromSoftware',
    platform: ['PC', 'PlayStation', 'Xbox'],
    cover: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
    banner: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1400&q=80',
    color: '#e67e22',
    activePlayers: '22.1K',
    rating: 4.9,
    reviewsCount: 1670,
    tags: ['Hardcore', 'Dark Fantasy', 'Masterpiece', 'Exploration'],
    description: 'การผจญภัยในแดนมรณะ Lands Between และ Realm of Shadow เผชิญหน้าบอสสุดท้าทายและค้นพบความลับโบราณ',
    activePartiesCount: 8,
    activeTournamentsCount: 1
  },
  {
    id: 'fc24',
    name: 'EA SPORTS FC 24 / 25',
    genre: 'Sports / Football Simulation',
    developer: 'EA Sports',
    platform: ['PC', 'PlayStation', 'Xbox', 'Switch'],
    cover: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80',
    banner: 'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?auto=format&fit=crop&w=1400&q=80',
    color: '#10b981',
    activePlayers: '31.2K',
    rating: 4.4,
    reviewsCount: 890,
    tags: ['Football', 'Ultimate Team', 'PvP', 'Co-op'],
    description: 'เกมฟุตบอลระดับโลก สร้างดรีมทีมใน Ultimate Team และลุย Clubs แข่งขันกับผู้เล่นทั่วโลก',
    activePartiesCount: 11,
    activeTournamentsCount: 2
  },
  {
    id: 'apex',
    name: 'Apex Legends',
    genre: 'Battle Royale / Hero Shooter',
    developer: 'Respawn Entertainment',
    platform: ['PC', 'PlayStation', 'Xbox'],
    cover: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
    banner: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1400&q=80',
    color: '#f43f5e',
    activePlayers: '26.4K',
    rating: 4.6,
    reviewsCount: 1120,
    tags: ['Battle Royale', 'Movement', 'Squad Based', 'Fast'],
    description: 'แบทเทิลรอยัลความเร็วสูง ใช้สกิล Legend วิ่ง สไลด์ ยิง และชิงชัยเป็น Champion ใน The Outlands',
    activePartiesCount: 16,
    activeTournamentsCount: 2
  },
  {
    id: 'marvelrivals',
    name: 'Marvel Rivals',
    genre: 'Team-Based PvP Shooter / Hero Shooter',
    developer: 'NetEase Games / Marvel Games',
    platform: ['PC', 'PlayStation 5', 'Xbox Series X/S'],
    cover: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80',
    banner: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1400&q=80',
    color: '#38bdf8',
    activePlayers: '45.1K',
    rating: 4.85,
    reviewsCount: 2150,
    tags: ['Marvel', 'Team Shooter', 'Superheroes', 'Destructible'],
    description: 'เกมยิงฮีโร่ทีม 6v6 รวมพลังซูเปอร์ฮีโร่และวายร้าย Marvel พร้อมระบบทำลายฉากและสกิลประสาน Team-Up สุดอลังการ',
    activePartiesCount: 20,
    activeTournamentsCount: 3
  },
  {
    id: 'hsr',
    name: 'Honkai: Star Rail',
    genre: 'Turn-Based RPG / Space Fantasy',
    developer: 'HoYoverse',
    platform: ['PC', 'Mobile', 'PlayStation 5'],
    cover: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80',
    banner: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1400&q=80',
    color: '#a855f7',
    activePlayers: '49.8K',
    rating: 4.88,
    reviewsCount: 2400,
    tags: ['Space Fantasy', 'Turn-Based', 'Anime', 'Gacha', 'Story'],
    description: 'ออกเดินทางข้ามดวงดาวไปกับรถไฟ Astral Express เผชิญหน้ากับ Stellaron และเปิดโปงความลึกลับของเหล่า Aeon',
    activePartiesCount: 14,
    activeTournamentsCount: 1
  }
];

export const INITIAL_POSTS = [
  {
    id: 'post-1',
    title: '🔥 สรุป Meta Patch ล่าสุด Valorant: ทำไม Vyse ถึงเปลี่ยนการเล่นแผนที่ Haven ไปตลอดกาล!',
    content: `หลังจากลองเทส Agent ใหม่อย่าง Vyse ใน Ranked Diamond/Ascendant บอกเลยว่ากำแพงหนามและกับดัก Flash สวนทางแก้ทางไซต์ A Short ได้หมดจดมาก 

**เทคนิคแนะนำ:**
1. วาง Shear ไว้ตรงช่องแคบ Long A ดักคนวิ่งตัด
2. ใช้ Flash สวนมุมกับดักตรง Connector A to B
3. ถ้าเล่นคู่กับ Cypher หรือ Killjoy การรีเทคไซต์แทบจะไร้ช่องโหว่

ใครลองเล่นแล้วบ้าง คิดว่าต้องเนิร์ฟตรงไหนมั้ย มาแลกเปลี่ยนกันครับ!`,
    author: {
      id: 'u-1',
      name: 'Agent_NeonX',
      tag: '@neon_aimbot',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
      badge: '👑 Radiant Master',
      level: 48,
      verified: true
    },
    gameId: 'valorant',
    gameName: 'Valorant',
    category: 'guides', // guides, lfg, highlights, trade, news, general
    tags: ['Valorant', 'PatchNotes', 'AgentVyse', 'Tips&Tricks'],
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
    mediaType: 'image',
    video: null,
    upvotes: 248,
    downvotes: 6,
    userVoted: 1, // 1 for upvote, -1 for downvote, 0 for none
    commentsCount: 34,
    views: 1840,
    createdAt: '15 นาทีที่แล้ว',
    pinned: true,
    comments: [
      {
        id: 'c-1',
        author: {
          name: 'JettDash99',
          avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80',
          level: 32,
          badge: '⚡ Duelist Main'
        },
        content: 'เห็นด้วยเลยครับ สกิลแฟลชติดผนังคือหลบยากมากถ้าไม่จำจุดวาง',
        likes: 18,
        createdAt: '10 นาทีที่แล้ว'
      },
      {
        id: 'c-2',
        author: {
          name: 'Sova_ArrowKing',
          avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=150&q=80',
          level: 41,
          badge: '🎯 Lineup God'
        },
        content: 'Recon Dart สแกนตำแหน่งกับดักได้นะ แต่ต้องยิงมุมสูงข้ามกำแพง',
        likes: 12,
        createdAt: '5 นาทีที่แล้ว'
      }
    ]
  },
  {
    id: 'post-2',
    title: '🤝 [ด่วน] หาตี้ Genshin Impact ลง Abyss ชั้น 12 + ฟาร์ม Artifacts โลก 8 ไมค์ Discord เป็นกันเอง',
    content: `ต้องการเพื่อนช่วยฟาร์มบอสรายสัปดาห์ และเทสทีมธาตุไฟ+ไฮเปอร์บลูมครับ เล่นสบายๆ ไม่ซีเรียส มี Discord คุยเฮฮา ใครว่างทัก DM หรือแอด UID มาได้เลย!

UID: 804921932 (Server Asia)
ช่วงเวลา: 20:00 - 23:00 น. วันนี้`,
    author: {
      id: 'u-2',
      name: 'MavuikaSimp',
      tag: '@natlan_fire',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
      badge: '🌸 AR 60 Explorer',
      level: 60,
      verified: false
    },
    gameId: 'genshin',
    gameName: 'Genshin Impact',
    category: 'lfg',
    tags: ['GenshinImpact', 'Coop', 'SpiralAbyss', 'Natlan'],
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80',
    mediaType: 'image',
    video: null,
    upvotes: 95,
    downvotes: 1,
    userVoted: 0,
    commentsCount: 16,
    views: 820,
    createdAt: '42 นาทีที่แล้ว',
    pinned: false,
    comments: [
      {
        id: 'c-3',
        author: {
          name: 'Furina_Fanclub',
          avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
          level: 56,
          badge: '💧 Hydro Archon'
        },
        content: 'แอดไปแล้วครับชื่อ Fontaine_Star เดี๋ยวทุ่มนึงทักไปในดิสคอร์ดนะ',
        likes: 6,
        createdAt: '20 นาทีที่แล้ว'
      }
    ]
  },
  {
    id: 'post-3',
    title: '🎬 [คลิปไฮไลท์] ช็อต 1v5 Ace Clutch พลิกเกมรอบตัดสิน Valorant Premier League TH!',
    content: `เมื่อคืนแมตช์พรีเมียร์รอบชิง ตกอยู่ในสถานการณ์ 1v5 Spike โดนแพลนต์ที่ C Site แต่เล่นมุมเสี้ยวแล้วดึงจังหวะ Phantom ทีละตัวจนเก็บหมด จังหวะสุดท้ายหัวใจจะวาย!`,
    author: {
      id: 'u-3',
      name: 'Khaosan_Clutcher',
      tag: '@khaosan_pro',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      badge: '🏆 Tournament MVP',
      level: 52,
      verified: true
    },
    gameId: 'valorant',
    gameName: 'Valorant',
    category: 'highlights',
    tags: ['Valorant', 'Ace', '1v5Clutch', 'Highlights'],
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80',
    mediaType: 'video',
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    upvotes: 512,
    downvotes: 4,
    userVoted: 0,
    commentsCount: 78,
    views: 4320,
    createdAt: '2 ชั่วโมงที่แล้ว',
    pinned: false,
    comments: []
  },
  {
    id: 'post-4',
    title: '📢 ข่าวดี! NEXUS TH ESPORTS CHAMPIONSHIP SS4 เปิดรับสมัครแล้ว ชิงเงินรางวัลรวม 150,000 บาท',
    content: `การแข่งขันอีสปอร์ตระดับคอมมูนิตี้ที่ยิ่งใหญ่ที่สุดประจำปี 2026 เปิดรับสมัครทั้งหมด 64 ทีม ทั้ง Valorant 5v5 และ ROV Tournament

📅 **กำหนดการสำคัญ:**
- รับสมัคร: 1 - 15 กันยายน 2026
- รอบคัดเลือกออนไลน์: 18 - 22 กันยายน 2026
- รอบชิงชนะเลิศ Grand Finals: ถ่ายทอดสดผ่าน Discord & YouTube Live

ทีมไหนพร้อมแล้ว กดสมัครผ่านแท็บ Tournaments ได้เลย มีสตรีมเมอร์ชื่อดังมาร่วมแคสต์ด้วย!`,
    author: {
      id: 'u-admin',
      name: 'NEXUS Official',
      tag: '@nexus_staff',
      avatar: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=150&q=80',
      badge: '🛡️ Community Admin',
      level: 99,
      verified: true
    },
    gameId: 'valorant',
    gameName: 'All Games',
    category: 'news',
    tags: ['Esports', 'Tournament', 'PrizePool', 'Official'],
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
    mediaType: 'image',
    video: null,
    upvotes: 890,
    downvotes: 2,
    userVoted: 1,
    commentsCount: 112,
    views: 9800,
    createdAt: '3 ชั่วโมงที่แล้ว',
    pinned: true,
    comments: []
  },
  {
    id: 'post-5',
    title: '🛒 แนะนำสเปกคอมสำหรับเล่น Black Myth: Wukong ให้ได้ 60+ FPS ปรับ High สบายกระเป๋า',
    content: `สำหรับใครที่งบจำกัด แต่อยากเล่นซุนหงอคงลื่นๆ ไม่กระตุก:
- **CPU**: Intel i5-12400F หรือ Ryzen 5 5600
- **GPU**: RTX 4060 8GB หรือ RX 6700 XT (เปิด DLSS / FSR Frame Gen ช่วยได้เยอะมาก)
- **RAM**: 32GB DDR4/DDR5 (แนะนำ 32GB เลย เพราะเกมกิน Shader หนัก)
- **SSD**: NVMe Gen4 สำคัญมาก โหลดแมพไว ไม่หน่วง

งบประกอบใหม่ประมาณ 22,000 - 26,000 บาท คุ้มค่าที่สุดในตอนนี้ครับ`,
    author: {
      id: 'u-4',
      name: 'Hardware_Guru_TH',
      tag: '@pc_builder_th',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
      badge: '💻 Hardware Specialist',
      level: 45,
      verified: true
    },
    gameId: 'wukong',
    gameName: 'Black Myth: Wukong',
    category: 'guides',
    tags: ['PCBuild', 'Hardware', 'Wukong', 'Benchmark'],
    image: null,
    mediaType: null,
    video: null,
    upvotes: 310,
    downvotes: 8,
    userVoted: 0,
    commentsCount: 45,
    views: 2900,
    createdAt: '5 ชั่วโมงที่แล้ว',
    pinned: false,
    comments: []
  },
  {
    id: 'post-6',
    title: '⚡ [คลิปคอมโบ] สอนเทคนิคสกิลรูดกระบองซุนหงอคง สยบเสือขาวพยัคฆ์ลายครามแบบ No Damage!',
    content: `ทริคสำคัญคือจังหวะแปลงร่างเป็นฝูงผึ้งหลบดาบพายุ แล้วสวนด้วย Thrust Stance คริติคอล 9,800 ดาเมจ ปิดฉากบอสในเวลาไม่ถึง 2 นาที ดูสเต็ปในคลิปได้เลยครับ!`,
    author: {
      id: 'current-user',
      name: 'NexusGamerTH',
      tag: '#7788',
      avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=200&q=80',
      badge: '🌟 Mythic Challenger',
      level: 38,
      verified: true
    },
    gameId: 'wukong',
    gameName: 'Black Myth: Wukong',
    category: 'highlights',
    tags: ['Wukong', 'BossFight', 'NoDamage', 'GamingClips'],
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    mediaType: 'video',
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    upvotes: 420,
    downvotes: 3,
    userVoted: 1,
    commentsCount: 29,
    views: 3100,
    createdAt: '6 ชั่วโมงที่แล้ว',
    pinned: false,
    comments: []
  }
];

export const INITIAL_SQUADS = [
  {
    id: 'sq-1',
    gameId: 'valorant',
    gameName: 'Valorant',
    title: 'ไต่แรงก์ Platinum สู่ Diamond ขอคนไมค์พร้อม สื่อสารดี ไม่ Toxic 🎧',
    mode: 'Competitive / Ranked',
    rankRequired: 'Platinum 1 - Diamond 2',
    server: 'Asia / Singapore',
    host: {
      name: 'Viper_Poison',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
      rank: 'Diamond 1',
      role: 'Controller'
    },
    membersMax: 5,
    members: [
      { name: 'Viper_Poison', role: 'Controller (Host)', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80' },
      { name: 'Reyna_Smurf', role: 'Duelist', avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80' },
      { name: 'Sova_Lineup', role: 'Initiator', avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=150&q=80' }
    ],
    rolesNeeded: ['Sentinel (Killjoy/Cypher)', 'Flex/Duelist'],
    micRequired: true,
    discordChannel: 'https://discord.gg/nexus-gaming-th',
    createdAt: '5 นาทีที่แล้ว',
    status: 'recruiting' // recruiting, full, in-game
  },
  {
    id: 'sq-2',
    gameId: 'rov',
    gameName: 'Arena of Valor (ROV)',
    title: 'ฟูลทีม 5v5 ไต่คอน (Conqueror) หาแครี่ และเมจเดินเกมเป็น ⚔️',
    mode: 'Ranked Match',
    rankRequired: 'Supreme / Conqueror',
    server: 'Thailand',
    host: {
      name: 'Florentino_God',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      rank: 'Conqueror 35★',
      role: 'Dark Slayer Lane'
    },
    membersMax: 5,
    members: [
      { name: 'Florentino_God', role: 'Dark Slayer (Host)', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80' },
      { name: 'Nakroth_Fast', role: 'Jungle', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80' },
      { name: 'Thane_Support', role: 'Roaming/Support', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80' },
      { name: 'Hayate_Crit', role: 'Abyssal Dragon (Carry)', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80' }
    ],
    rolesNeeded: ['Mid Lane (Mage)'],
    micRequired: true,
    discordChannel: 'https://discord.gg/nexus-gaming-th',
    createdAt: '12 นาทีที่แล้ว',
    status: 'recruiting'
  },
  {
    id: 'sq-3',
    gameId: 'gta5',
    gameName: 'GTA V FiveM',
    title: 'รับสมัครสมาชิกเข้าหน่วยสวาท (SWAT) เซิร์ฟเวอร์ Siam City RP ฝึกอบรมคืนนี้!',
    mode: 'Roleplay Serious',
    rankRequired: 'อายุ 18+ / มีไมค์ชัดเจน',
    server: 'Siam City RP (TH)',
    host: {
      name: 'Captain_Miller',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80',
      rank: 'Chief of Police',
      role: 'Squad Leader'
    },
    membersMax: 6,
    members: [
      { name: 'Captain_Miller', role: 'Commander (Host)', avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80' },
      { name: 'Officer_Dan', role: 'Breacher', avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80' }
    ],
    rolesNeeded: ['Sniper / Recon', 'Medic', 'Assault x2'],
    micRequired: true,
    discordChannel: 'https://discord.gg/siam-city-swat',
    createdAt: '25 นาทีที่แล้ว',
    status: 'recruiting'
  },
  {
    id: 'sq-4',
    gameId: 'apex',
    gameName: 'Apex Legends',
    title: 'ไต่ Master ตี 3 คนสุดท้าย หาคอนโทรลเลอร์หรือเมน Conduit ⚡',
    mode: 'Ranked Leagues',
    rankRequired: 'Diamond 3+',
    server: 'Tokyo / Singapore',
    host: {
      name: 'Wraith_Voidwalker',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
      rank: 'Diamond 1',
      role: 'Entry Fragger'
    },
    membersMax: 3,
    members: [
      { name: 'Wraith_Voidwalker', role: 'Entry (Host)', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80' },
      { name: 'Bangalore_Smokes', role: 'Support', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80' }
    ],
    rolesNeeded: ['Support / Controller Legend (Conduit / Catalyst)'],
    micRequired: true,
    discordChannel: 'https://discord.gg/nexus-apex',
    createdAt: '30 นาทีที่แล้ว',
    status: 'recruiting'
  }
];

export const INITIAL_TOURNAMENTS = [
  {
    id: 'tour-1',
    title: 'NEXUS VALORANT PREMIER CUP #4',
    game: 'Valorant',
    banner: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
    prizePool: '฿100,000 THB',
    format: '5v5 Single Elimination / Grand Finals BO5',
    teamsMax: 32,
    teamsRegistered: 28,
    registrationDeadline: '2026-09-10T23:59:59',
    startDate: '2026-09-15',
    status: 'open', // open, ongoing, completed
    badge: '🔥 HOT TOURNAMENT',
    brackets: [
      {
        round: 'Semi-Finals (BO3)',
        matches: [
          { teamA: 'Full Sense Academy', scoreA: 2, teamB: 'Made in Thailand (MiTH)', scoreB: 1, winner: 'Full Sense Academy' },
          { teamA: 'Talon Esports TH', scoreA: 2, teamB: 'Attack All Around (AAA)', scoreB: 0, winner: 'Talon Esports TH' }
        ]
      },
      {
        round: 'Grand Finals (BO5)',
        matches: [
          { teamA: 'Full Sense Academy', scoreA: 0, teamB: 'Talon Esports TH', scoreB: 0, winner: null, date: '15 ก.ย. 19:00 น.' }
        ]
      }
    ]
  },
  {
    id: 'tour-2',
    title: 'ROV COMMUNITY PRO LEAGUE 2026',
    game: 'Arena of Valor (ROV)',
    banner: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80',
    prizePool: '฿50,000 THB',
    format: '5v5 Tournament Mode (Global Ban-Pick)',
    teamsMax: 64,
    teamsRegistered: 64,
    registrationDeadline: '2026-08-30T23:59:59',
    startDate: '2026-09-02',
    status: 'ongoing',
    badge: '⚔️ ONGOING MATCH',
    brackets: [
      {
        round: 'Quarter-Finals',
        matches: [
          { teamA: 'Bacon Time NextGen', scoreA: 3, teamB: 'Buriram United Spark', scoreB: 2, winner: 'Bacon Time NextGen' },
          { teamA: 'eArena Youth', scoreA: 3, teamB: 'King of Gamers', scoreB: 1, winner: 'eArena Youth' }
        ]
      },
      {
        round: 'Semi-Finals',
        matches: [
          { teamA: 'Bacon Time NextGen', scoreA: 0, teamB: 'eArena Youth', scoreB: 0, winner: null, date: '2 ก.ย. 18:30 น.' }
        ]
      }
    ]
  }
];

export const INITIAL_CHAT_MESSAGES = [
  {
    id: 'msg-1',
    channel: 'general',
    user: {
      name: 'Cyber_Knight',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80',
      badge: '💎 VIP Member',
      roleColor: '#00e5ff'
    },
    text: 'สวัสดีชาวเกมเมอร์ทุกคนครับ วันนี้มีใครว่างลง Valorant ช่วง 2 ทุ่มมั้ย?',
    time: '11:20'
  },
  {
    id: 'msg-2',
    channel: 'general',
    user: {
      name: 'Sakura_Blade',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
      badge: '🌸 Moderator',
      roleColor: '#f43f5e'
    },
    text: 'อย่าลืมไปลงทะเบียนแข่ง Premier Cup นะคะ ปิดรับสมัครสัปดาห์หน้าแล้ว!',
    time: '11:22'
  },
  {
    id: 'msg-3',
    channel: 'valorant',
    user: {
      name: 'Phantom_Aimer',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80',
      badge: '⚡ Radiant',
      roleColor: '#ffaa00'
    },
    text: 'เซ็นซิทีฟเมาส์ 800 DPI 0.28 ปรับมา 2 สัปดาห์ ยิงแม่นขึ้นเยอะมาก แนะนำเลย',
    time: '11:28'
  },
  {
    id: 'msg-4',
    channel: 'general',
    user: {
      name: 'Gamer_TH_Bot',
      avatar: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=100&q=80',
      badge: '🤖 NEXUS Bot',
      roleColor: '#a855f7'
    },
    text: '🎉 สมาชิกออนไลน์ในระบบขณะนี้ทะลุ 1,250 คนแล้ว ยินดีต้อนรับทุกคนครับ!',
    time: '11:30'
  }
];

export const INITIAL_USER = {
  id: 'current-user',
  name: 'NexusGamerTH',
  gamerTag: '#7788',
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
};

export const INITIAL_REVIEWS = [
  {
    id: 'rev-1',
    gameId: 'wukong',
    gameName: 'Black Myth: Wukong',
    author: 'SunWukong_Fan',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80',
    overallRating: 5,
    scores: {
      gameplay: 9.8,
      graphics: 10.0,
      story: 9.5,
      soundtrack: 9.9
    },
    title: 'สุดยอดเกมแห่งปี 2024-2026 เนื้อเรื่องลึกซึ้ง บอสทุกตัวมีเอกลักษณ์!',
    content: 'การแปลงร่างและคอมโบกระบองทำออกมาได้มันส์สะใจมาก กราฟิกแสงเงาสมจริงสุดๆ ใครลังเลอยู่จัดได้เลย ไม่ผิดหวังแน่นอน',
    date: '3 วันที่แล้ว',
    likes: 86
  },
  {
    id: 'rev-2',
    gameId: 'valorant',
    gameName: 'Valorant',
    author: 'Tactical_Guy',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80',
    overallRating: 4.5,
    scores: {
      gameplay: 9.5,
      graphics: 8.5,
      story: 7.0,
      soundtrack: 9.0
    },
    title: 'เกมยิง FPS ที่สมดุลที่สุดในปัจจุบัน แต่ต้องมีตี้เล่นด้วยถึงจะสนุกสุด',
    content: 'ระบบกันโปร Vanguard ถือว่าทำได้ดีที่สุดเมื่อเทียบกับเกมอื่น การอัปเดต Agent และแผนที่ใหม่มีความหลากหลาย แนะนำให้หาตี้ใน NEXUS จะเล่นสบายใจกว่ากดโซโล่เยอะ',
    date: '1 สัปดาห์ที่แล้ว',
    likes: 124
  }
];

export const INITIAL_STORIES = [
  {
    id: 'story-user-1',
    userId: 'current-user',
    userName: 'NexusGamerTH',
    userTag: '#7788',
    userAvatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=200&q=80',
    userLevel: 38,
    type: 'video',
    mediaUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    caption: '🔥 วอร์มนิ้วก่อนลงแข่งทัวร์นาเมนต์รอบดึก คืนนี้ลุยเต็มที่!',
    tag: '#RankUp #ValorantTH #Challenger',
    badge: '🌟 Mythic Challenger',
    bgGradient: 'linear-gradient(135deg, #7928CA, #FF0080)',
    createdAt: '15 นาทีที่แล้ว',
    viewsCount: 142,
    reactions: { '🔥': 38, '👑': 14, '⚡': 22, '🎯': 9, '❤️': 27 }
  },
  {
    id: 'story-1',
    userId: 'u-1',
    userName: 'Agent_NeonX',
    userTag: '@neon_aimbot',
    userAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
    userLevel: 48,
    type: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1080&q=80',
    caption: '⚡ 1v4 Retake A Site สบายๆ ไต่ขึ้น Radiant 400 RR แล้ว!',
    tag: '#Radiant #ClutchGod #NeonMain',
    badge: '👑 Radiant Master',
    bgGradient: 'linear-gradient(135deg, #0070F3, #00DFD8)',
    createdAt: '45 นาทีที่แล้ว',
    viewsCount: 380,
    reactions: { '🔥': 89, '👑': 52, '⚡': 64, '🎯': 30, '❤️': 45 }
  },
  {
    id: 'story-2',
    userId: 'u-3',
    userName: 'Khaosan_Clutcher',
    userTag: '@khaosan_pro',
    userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    userLevel: 52,
    type: 'video',
    mediaUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    caption: '🎬 จังหวะดึง 1v5 Premier Finals ดูกี่ทีก็ยังขนลุก!',
    tag: '#Highlights #PremierCup #TournamentMVP',
    badge: '🏆 Tournament MVP',
    bgGradient: 'linear-gradient(135deg, #FF4D4D, #F9CB28)',
    createdAt: '1 ชั่วโมงที่แล้ว',
    viewsCount: 520,
    reactions: { '🔥': 142, '👑': 98, '⚡': 45, '🎯': 38, '❤️': 80 }
  },
  {
    id: 'story-3',
    userId: 'u-2',
    userName: 'MavuikaSimp',
    userTag: '@natlan_fire',
    userAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
    userLevel: 60,
    type: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1080&q=80',
    caption: '🌋 สำรวจ Natlan 100% ครบทุกเกาะแล้ว ได้เวลาฟาร์ม Artifacts ต่อ!',
    tag: '#GenshinImpact #Natlan #AR60',
    badge: '🌸 AR 60 Explorer',
    bgGradient: 'linear-gradient(135deg, #FF0080, #7928CA)',
    createdAt: '2 ชั่วโมงที่แล้ว',
    viewsCount: 290,
    reactions: { '🔥': 65, '👑': 22, '⚡': 31, '🎯': 12, '❤️': 95 }
  },
  {
    id: 'story-4',
    userId: 'u-admin',
    userName: 'NEXUS Official',
    userTag: '@nexus_staff',
    userAvatar: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=150&q=80',
    userLevel: 99,
    type: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1080&q=80',
    caption: '📢 เปิดตัวฟังก์ชันใหม่! โพสต์รูป/วิดีโอ & สตอรี่เกมเมอร์ ลองเล่นกันเลย!',
    tag: '#NexusUpdate #NewFeatures #GamerStories',
    badge: '🛡️ Community Admin',
    bgGradient: 'linear-gradient(135deg, #00DFD8, #0070F3)',
    createdAt: '3 ชั่วโมงที่แล้ว',
    viewsCount: 1200,
    reactions: { '🔥': 210, '👑': 150, '⚡': 95, '🎯': 40, '❤️': 180 }
  }
];

export const INITIAL_PLAYERS = [
  {
    id: 'p-1',
    name: 'Sakura_Blade',
    gamerTag: '#1337',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    banner: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
    level: 45,
    rank: '👑 Radiant #24',
    rankTitle: '🌸 Radiant Duelist',
    status: 'online',
    statusText: 'กำลังออนไลน์ • ว่างพร้อมลงแรงก์',
    primaryGame: 'Valorant',
    favoriteGames: ['Valorant', 'Genshin Impact'],
    bio: 'Main Jett & Reyna 🎯 ซ้อมทีมและไต่แรงก์ทุกวัน ไม่ Toxic เน้นสื่อสารทีมเวิร์ก',
    mutualFriends: 5,
    followersCount: 420
  },
  {
    id: 'p-2',
    name: 'Agent_NeonX',
    gamerTag: '#5544',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    banner: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80',
    level: 50,
    rank: '⚡ Immortal #110',
    rankTitle: '🌟 Immortal Legend',
    status: 'online',
    statusText: 'กำลังเล่น Valorant (Custom Scrim)',
    primaryGame: 'Valorant',
    favoriteGames: ['Valorant', 'Apex Legends'],
    bio: 'Speed & Electricity ⚡ Radiant Duelist พร้อมลุยทุกแมตช์ สตรีมเมอร์พาร์ทไทม์',
    mutualFriends: 3,
    followersCount: 680
  },
  {
    id: 'p-3',
    name: 'Sova_ArrowKing',
    gamerTag: '#9999',
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=200&q=80',
    banner: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80',
    level: 42,
    rank: '🏹 Radiant Lineup God',
    rankTitle: '👑 Master Initiator',
    status: 'ingame',
    statusText: 'กำลังแข่ง Premier Playoff (Map 3)',
    primaryGame: 'Valorant',
    favoriteGames: ['Valorant', 'Black Myth: Wukong'],
    bio: 'เซียนลูกศร Sova รู้ทุกมุม Shock Dart & Recon สแกนทั่วแมพ 🏹🎯',
    mutualFriends: 4,
    followersCount: 310
  },
  {
    id: 'p-4',
    name: 'MavuikaSimp',
    gamerTag: '#7712',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    banner: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80',
    level: 60,
    rank: '🌋 AR 60 Natlan Explorer',
    rankTitle: '🌸 Natlan Archon Champion',
    status: 'online',
    statusText: 'กำลังฟาร์มบอสโลก Coop โลก 9',
    primaryGame: 'Genshin Impact',
    favoriteGames: ['Genshin Impact', 'Black Myth: Wukong'],
    bio: 'ยินดีช่วยลงดันเจี้ยน ฟาร์มอาร์ติแฟกต์ และพาทัวร์เปิดแมพ Natlan 100% 🌋✨',
    mutualFriends: 6,
    followersCount: 540
  },
  {
    id: 'p-5',
    name: 'Khaosan_Clutcher',
    gamerTag: '#8800',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    banner: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80',
    level: 52,
    rank: '🏆 Supreme Legend 150★',
    rankTitle: '🔥 MOBA Carry Master',
    status: 'away',
    statusText: 'ไม่อยู่ที่หน้าจอ (พักเบรก)',
    primaryGame: 'Arena of Valor (ROV)',
    favoriteGames: ['Arena of Valor (ROV)', 'Valorant'],
    bio: 'สายแบกแครี่และป่า ROV สถิติ Winrate 78% หาตี้ประจำลงแรงก์ค่ำนี้',
    mutualFriends: 2,
    followersCount: 890
  },
  {
    id: 'p-6',
    name: 'SunWukong_Fan',
    gamerTag: '#3321',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
    banner: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    level: 48,
    rank: '⚔️ Destined One NG+3',
    rankTitle: '🐒 Monkey King Champion',
    status: 'ingame',
    statusText: 'กำลังท้าทาย Erlang Shen บอสลับ',
    primaryGame: 'Black Myth: Wukong',
    favoriteGames: ['Black Myth: Wukong', 'Elden Ring'],
    bio: 'ชอบเกมแนว Soulslike และ Action RPG กวาดความสำเร็จ 100% ครบทุกบอส',
    mutualFriends: 3,
    followersCount: 275
  },
  {
    id: 'p-7',
    name: 'LosSantos_Medic',
    gamerTag: '#4411',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=200&q=80',
    banner: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
    level: 36,
    rank: '🚑 Chief Paramedic',
    rankTitle: '🏥 FiveM Roleplay Elite',
    status: 'online',
    statusText: 'เข้าเวรเซิร์ฟเวอร์ FiveM TH (On Duty)',
    primaryGame: 'GTA V / FiveM Thailand',
    favoriteGames: ['GTA V / FiveM Thailand'],
    bio: 'แพทย์ใหญ่ประจำเมือง FiveM สวมบทบาทเต็มร้อย ไมค์ชัด ไม่หลุด Roleplay',
    mutualFriends: 1,
    followersCount: 190
  },
  {
    id: 'p-8',
    name: 'Striker_Haaland9',
    gamerTag: '#2024',
    avatar: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=200&q=80',
    banner: 'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?auto=format&fit=crop&w=1200&q=80',
    level: 39,
    rank: '⚽ Elite Division 1',
    rankTitle: '🏆 Weekend League Master',
    status: 'offline',
    statusText: 'ออฟไลน์ (ใช้งานล่าสุด 1 ชม. ที่แล้ว)',
    primaryGame: 'EA SPORTS FC 24 / 25',
    favoriteGames: ['EA SPORTS FC 24 / 25'],
    bio: 'สายต่อบอล Tiki-taka แข่ง Champions ทุกสัปดาห์ หาเพื่อนเล่น Co-op Clubs',
    mutualFriends: 2,
    followersCount: 140
  },
  {
    id: 'p-9',
    name: 'Wraith_PortalGod',
    gamerTag: '#6677',
    avatar: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=200&q=80',
    banner: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
    level: 55,
    rank: '👑 Apex Predator #45',
    rankTitle: '🌪️ Interdimensional Skirmisher',
    status: 'online',
    statusText: 'กำลังลง Ranked Predator Trio',
    primaryGame: 'Apex Legends',
    favoriteGames: ['Apex Legends', 'Valorant'],
    bio: 'Apex Movement God • Wingman & Flatline แชมป์ทัวร์ Apex TH 2025',
    mutualFriends: 4,
    followersCount: 760
  },
  {
    id: 'p-10',
    name: 'Viper_Poison',
    gamerTag: '#1001',
    avatar: 'https://images.unsplash.com/photo-1535713875000-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
    banner: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1200&q=80',
    level: 47,
    rank: '👑 Radiant Controller',
    rankTitle: '☣️ Toxic Screen Strategist',
    status: 'online',
    statusText: 'กำลังออนไลน์ • ซ้อมเซ็ตอัพกำแพงพิษ',
    primaryGame: 'Valorant',
    favoriteGames: ['Valorant'],
    bio: 'Controller Main บังคับไซต์ปิดมิดชิด Lineup Snake Bite คุมพื้นที่สมบูรณ์แบบ',
    mutualFriends: 5,
    followersCount: 390
  }
];

