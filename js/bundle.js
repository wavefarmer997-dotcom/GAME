var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res, err) => function __init() {
  if (err) throw err[0];
  try {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  } catch (e) {
    throw err = [e], e;
  }
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// js/data.js
var INITIAL_GAMES, INITIAL_POSTS, INITIAL_SQUADS, INITIAL_TOURNAMENTS, INITIAL_CHAT_MESSAGES, INITIAL_USER, INITIAL_REVIEWS, INITIAL_STORIES, INITIAL_PLAYERS;
var init_data = __esm({
  "js/data.js"() {
    INITIAL_GAMES = [
      {
        id: "valorant",
        name: "Valorant",
        genre: "FPS / Tactical Shooter",
        developer: "Riot Games",
        platform: ["PC"],
        cover: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
        banner: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1400&q=80",
        color: "#ff4655",
        activePlayers: "42.8K",
        rating: 4.8,
        reviewsCount: 1420,
        tags: ["Competitive", "Tactical", "Esports", "Ranked"],
        description: "\u0E40\u0E01\u0E21\u0E22\u0E34\u0E07\u0E1B\u0E37\u0E19\u0E40\u0E0A\u0E34\u0E07\u0E01\u0E25\u0E22\u0E38\u0E17\u0E18\u0E4C 5v5 \u0E17\u0E35\u0E48\u0E1C\u0E2A\u0E21\u0E1C\u0E2A\u0E32\u0E19\u0E04\u0E27\u0E32\u0E21\u0E41\u0E21\u0E48\u0E19\u0E22\u0E33\u0E02\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E22\u0E34\u0E07\u0E1B\u0E37\u0E19\u0E41\u0E25\u0E30\u0E1E\u0E25\u0E31\u0E07\u0E2A\u0E01\u0E34\u0E25\u0E40\u0E09\u0E1E\u0E32\u0E30\u0E15\u0E31\u0E27\u0E02\u0E2D\u0E07\u0E41\u0E15\u0E48\u0E25\u0E30 Agent",
        activePartiesCount: 18,
        activeTournamentsCount: 3
      },
      {
        id: "genshin",
        name: "Genshin Impact",
        genre: "Action RPG / Open World",
        developer: "HoYoverse",
        platform: ["PC", "Mobile", "PlayStation"],
        cover: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
        banner: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1400&q=80",
        color: "#00e5ff",
        activePlayers: "55.3K",
        rating: 4.9,
        reviewsCount: 2890,
        tags: ["Anime", "Open World", "Gacha", "Story Rich"],
        description: "\u0E2D\u0E2D\u0E01\u0E2A\u0E33\u0E23\u0E27\u0E08\u0E17\u0E27\u0E35\u0E1B Teyvat \u0E2D\u0E31\u0E19\u0E01\u0E27\u0E49\u0E32\u0E07\u0E43\u0E2B\u0E0D\u0E48 \u0E04\u0E49\u0E19\u0E1E\u0E1A\u0E1B\u0E23\u0E34\u0E28\u0E19\u0E32 \u0E1E\u0E25\u0E31\u0E07\u0E18\u0E32\u0E15\u0E38\u0E17\u0E31\u0E49\u0E07 7 \u0E41\u0E25\u0E30\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E23\u0E32\u0E27\u0E01\u0E32\u0E23\u0E15\u0E32\u0E21\u0E2B\u0E32\u0E04\u0E23\u0E2D\u0E1A\u0E04\u0E23\u0E31\u0E27\u0E17\u0E35\u0E48\u0E1E\u0E25\u0E31\u0E14\u0E1E\u0E23\u0E32\u0E01",
        activePartiesCount: 12,
        activeTournamentsCount: 1
      },
      {
        id: "rov",
        name: "Arena of Valor (ROV)",
        genre: "MOBA 5v5",
        developer: "Garena / TiMi Studios",
        platform: ["Mobile"],
        cover: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80",
        banner: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1400&q=80",
        color: "#ffaa00",
        activePlayers: "68.1K",
        rating: 4.7,
        reviewsCount: 3100,
        tags: ["MOBA", "Mobile", "Competitive", "Fast Paced"],
        description: "\u0E2A\u0E38\u0E14\u0E22\u0E2D\u0E14\u0E40\u0E01\u0E21 MOBA \u0E1A\u0E19\u0E21\u0E37\u0E2D\u0E16\u0E37\u0E2D\u0E02\u0E27\u0E31\u0E0D\u0E43\u0E08\u0E40\u0E01\u0E21\u0E40\u0E21\u0E2D\u0E23\u0E4C\u0E44\u0E17\u0E22 \u0E23\u0E27\u0E21\u0E2E\u0E35\u0E42\u0E23\u0E48\u0E2A\u0E32\u0E22\u0E41\u0E1A\u0E01 \u0E44\u0E1F\u0E15\u0E4C\u0E40\u0E15\u0E2D\u0E23\u0E4C \u0E40\u0E21\u0E08 \u0E41\u0E04\u0E23\u0E35\u0E48 \u0E2A\u0E39\u0E49\u0E01\u0E31\u0E19\u0E41\u0E1A\u0E1A Real-time",
        activePartiesCount: 25,
        activeTournamentsCount: 4
      },
      {
        id: "gta5",
        name: "GTA V / FiveM Thailand",
        genre: "Open World / Roleplay",
        developer: "Rockstar Games / Community",
        platform: ["PC"],
        cover: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
        banner: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1400&q=80",
        color: "#00ff88",
        activePlayers: "38.4K",
        rating: 4.8,
        reviewsCount: 1850,
        tags: ["Roleplay", "City Life", "Sandbox", "Voice Chat"],
        description: "\u0E08\u0E33\u0E25\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E0A\u0E35\u0E27\u0E34\u0E15\u0E43\u0E19\u0E40\u0E21\u0E37\u0E2D\u0E07 Los Santos \u0E2A\u0E27\u0E21\u0E1A\u0E17\u0E1A\u0E32\u0E17\u0E40\u0E1B\u0E47\u0E19\u0E15\u0E33\u0E23\u0E27\u0E08 \u0E2B\u0E21\u0E2D \u0E41\u0E01\u0E4A\u0E07\u0E2A\u0E40\u0E15\u0E2D\u0E23\u0E4C \u0E2B\u0E23\u0E37\u0E2D\u0E19\u0E31\u0E01\u0E18\u0E38\u0E23\u0E01\u0E34\u0E08\u0E43\u0E19\u0E40\u0E0B\u0E34\u0E23\u0E4C\u0E1F\u0E40\u0E27\u0E2D\u0E23\u0E4C FiveM \u0E22\u0E2D\u0E14\u0E2E\u0E34\u0E15",
        activePartiesCount: 14,
        activeTournamentsCount: 2
      },
      {
        id: "wukong",
        name: "Black Myth: Wukong",
        genre: "Action RPG / Soulslike",
        developer: "Game Science",
        platform: ["PC", "PlayStation 5"],
        cover: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
        banner: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1400&q=80",
        color: "#d4af37",
        activePlayers: "29.7K",
        rating: 4.95,
        reviewsCount: 950,
        tags: ["Mythology", "Souls-like", "Next-Gen", "Single Player"],
        description: "\u0E15\u0E33\u0E19\u0E32\u0E19\u0E44\u0E0B\u0E2D\u0E34\u0E4B\u0E27\u0E09\u0E1A\u0E31\u0E1A\u0E41\u0E2D\u0E47\u0E01\u0E0A\u0E31\u0E19\u0E2A\u0E38\u0E14\u0E21\u0E31\u0E19\u0E2A\u0E4C \u0E01\u0E23\u0E32\u0E1F\u0E34\u0E01\u0E23\u0E30\u0E14\u0E31\u0E1A Unreal Engine 5 \u0E1A\u0E39\u0E4A\u0E14\u0E38\u0E40\u0E14\u0E37\u0E2D\u0E14 \u0E41\u0E1B\u0E25\u0E07\u0E23\u0E48\u0E32\u0E07 \u0E41\u0E25\u0E30\u0E1F\u0E32\u0E14\u0E1F\u0E31\u0E19\u0E1A\u0E2D\u0E2A\u0E2A\u0E38\u0E14\u0E2D\u0E25\u0E31\u0E07\u0E01\u0E32\u0E23",
        activePartiesCount: 6,
        activeTournamentsCount: 1
      },
      {
        id: "eldenring",
        name: "Elden Ring: Shadow of the Erdtree",
        genre: "Action RPG / Dark Fantasy",
        developer: "FromSoftware",
        platform: ["PC", "PlayStation", "Xbox"],
        cover: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
        banner: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1400&q=80",
        color: "#e67e22",
        activePlayers: "22.1K",
        rating: 4.9,
        reviewsCount: 1670,
        tags: ["Hardcore", "Dark Fantasy", "Masterpiece", "Exploration"],
        description: "\u0E01\u0E32\u0E23\u0E1C\u0E08\u0E0D\u0E20\u0E31\u0E22\u0E43\u0E19\u0E41\u0E14\u0E19\u0E21\u0E23\u0E13\u0E30 Lands Between \u0E41\u0E25\u0E30 Realm of Shadow \u0E40\u0E1C\u0E0A\u0E34\u0E0D\u0E2B\u0E19\u0E49\u0E32\u0E1A\u0E2D\u0E2A\u0E2A\u0E38\u0E14\u0E17\u0E49\u0E32\u0E17\u0E32\u0E22\u0E41\u0E25\u0E30\u0E04\u0E49\u0E19\u0E1E\u0E1A\u0E04\u0E27\u0E32\u0E21\u0E25\u0E31\u0E1A\u0E42\u0E1A\u0E23\u0E32\u0E13",
        activePartiesCount: 8,
        activeTournamentsCount: 1
      },
      {
        id: "fc24",
        name: "EA SPORTS FC 24 / 25",
        genre: "Sports / Football Simulation",
        developer: "EA Sports",
        platform: ["PC", "PlayStation", "Xbox", "Switch"],
        cover: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80",
        banner: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?auto=format&fit=crop&w=1400&q=80",
        color: "#10b981",
        activePlayers: "31.2K",
        rating: 4.4,
        reviewsCount: 890,
        tags: ["Football", "Ultimate Team", "PvP", "Co-op"],
        description: "\u0E40\u0E01\u0E21\u0E1F\u0E38\u0E15\u0E1A\u0E2D\u0E25\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E42\u0E25\u0E01 \u0E2A\u0E23\u0E49\u0E32\u0E07\u0E14\u0E23\u0E35\u0E21\u0E17\u0E35\u0E21\u0E43\u0E19 Ultimate Team \u0E41\u0E25\u0E30\u0E25\u0E38\u0E22 Clubs \u0E41\u0E02\u0E48\u0E07\u0E02\u0E31\u0E19\u0E01\u0E31\u0E1A\u0E1C\u0E39\u0E49\u0E40\u0E25\u0E48\u0E19\u0E17\u0E31\u0E48\u0E27\u0E42\u0E25\u0E01",
        activePartiesCount: 11,
        activeTournamentsCount: 2
      },
      {
        id: "apex",
        name: "Apex Legends",
        genre: "Battle Royale / Hero Shooter",
        developer: "Respawn Entertainment",
        platform: ["PC", "PlayStation", "Xbox"],
        cover: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
        banner: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1400&q=80",
        color: "#f43f5e",
        activePlayers: "26.4K",
        rating: 4.6,
        reviewsCount: 1120,
        tags: ["Battle Royale", "Movement", "Squad Based", "Fast"],
        description: "\u0E41\u0E1A\u0E17\u0E40\u0E17\u0E34\u0E25\u0E23\u0E2D\u0E22\u0E31\u0E25\u0E04\u0E27\u0E32\u0E21\u0E40\u0E23\u0E47\u0E27\u0E2A\u0E39\u0E07 \u0E43\u0E0A\u0E49\u0E2A\u0E01\u0E34\u0E25 Legend \u0E27\u0E34\u0E48\u0E07 \u0E2A\u0E44\u0E25\u0E14\u0E4C \u0E22\u0E34\u0E07 \u0E41\u0E25\u0E30\u0E0A\u0E34\u0E07\u0E0A\u0E31\u0E22\u0E40\u0E1B\u0E47\u0E19 Champion \u0E43\u0E19 The Outlands",
        activePartiesCount: 16,
        activeTournamentsCount: 2
      },
      {
        id: "marvelrivals",
        name: "Marvel Rivals",
        genre: "Team-Based PvP Shooter / Hero Shooter",
        developer: "NetEase Games / Marvel Games",
        platform: ["PC", "PlayStation 5", "Xbox Series X/S"],
        cover: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80",
        banner: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1400&q=80",
        color: "#38bdf8",
        activePlayers: "45.1K",
        rating: 4.85,
        reviewsCount: 2150,
        tags: ["Marvel", "Team Shooter", "Superheroes", "Destructible"],
        description: "\u0E40\u0E01\u0E21\u0E22\u0E34\u0E07\u0E2E\u0E35\u0E42\u0E23\u0E48\u0E17\u0E35\u0E21 6v6 \u0E23\u0E27\u0E21\u0E1E\u0E25\u0E31\u0E07\u0E0B\u0E39\u0E40\u0E1B\u0E2D\u0E23\u0E4C\u0E2E\u0E35\u0E42\u0E23\u0E48\u0E41\u0E25\u0E30\u0E27\u0E32\u0E22\u0E23\u0E49\u0E32\u0E22 Marvel \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E23\u0E30\u0E1A\u0E1A\u0E17\u0E33\u0E25\u0E32\u0E22\u0E09\u0E32\u0E01\u0E41\u0E25\u0E30\u0E2A\u0E01\u0E34\u0E25\u0E1B\u0E23\u0E30\u0E2A\u0E32\u0E19 Team-Up \u0E2A\u0E38\u0E14\u0E2D\u0E25\u0E31\u0E07\u0E01\u0E32\u0E23",
        activePartiesCount: 20,
        activeTournamentsCount: 3
      },
      {
        id: "hsr",
        name: "Honkai: Star Rail",
        genre: "Turn-Based RPG / Space Fantasy",
        developer: "HoYoverse",
        platform: ["PC", "Mobile", "PlayStation 5"],
        cover: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
        banner: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1400&q=80",
        color: "#a855f7",
        activePlayers: "49.8K",
        rating: 4.88,
        reviewsCount: 2400,
        tags: ["Space Fantasy", "Turn-Based", "Anime", "Gacha", "Story"],
        description: "\u0E2D\u0E2D\u0E01\u0E40\u0E14\u0E34\u0E19\u0E17\u0E32\u0E07\u0E02\u0E49\u0E32\u0E21\u0E14\u0E27\u0E07\u0E14\u0E32\u0E27\u0E44\u0E1B\u0E01\u0E31\u0E1A\u0E23\u0E16\u0E44\u0E1F Astral Express \u0E40\u0E1C\u0E0A\u0E34\u0E0D\u0E2B\u0E19\u0E49\u0E32\u0E01\u0E31\u0E1A Stellaron \u0E41\u0E25\u0E30\u0E40\u0E1B\u0E34\u0E14\u0E42\u0E1B\u0E07\u0E04\u0E27\u0E32\u0E21\u0E25\u0E36\u0E01\u0E25\u0E31\u0E1A\u0E02\u0E2D\u0E07\u0E40\u0E2B\u0E25\u0E48\u0E32 Aeon",
        activePartiesCount: 14,
        activeTournamentsCount: 1
      }
    ];
    INITIAL_POSTS = [
      {
        id: "post-1",
        title: "\u{1F525} \u0E2A\u0E23\u0E38\u0E1B Meta Patch \u0E25\u0E48\u0E32\u0E2A\u0E38\u0E14 Valorant: \u0E17\u0E33\u0E44\u0E21 Vyse \u0E16\u0E36\u0E07\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E01\u0E32\u0E23\u0E40\u0E25\u0E48\u0E19\u0E41\u0E1C\u0E19\u0E17\u0E35\u0E48 Haven \u0E44\u0E1B\u0E15\u0E25\u0E2D\u0E14\u0E01\u0E32\u0E25!",
        content: `\u0E2B\u0E25\u0E31\u0E07\u0E08\u0E32\u0E01\u0E25\u0E2D\u0E07\u0E40\u0E17\u0E2A Agent \u0E43\u0E2B\u0E21\u0E48\u0E2D\u0E22\u0E48\u0E32\u0E07 Vyse \u0E43\u0E19 Ranked Diamond/Ascendant \u0E1A\u0E2D\u0E01\u0E40\u0E25\u0E22\u0E27\u0E48\u0E32\u0E01\u0E33\u0E41\u0E1E\u0E07\u0E2B\u0E19\u0E32\u0E21\u0E41\u0E25\u0E30\u0E01\u0E31\u0E1A\u0E14\u0E31\u0E01 Flash \u0E2A\u0E27\u0E19\u0E17\u0E32\u0E07\u0E41\u0E01\u0E49\u0E17\u0E32\u0E07\u0E44\u0E0B\u0E15\u0E4C A Short \u0E44\u0E14\u0E49\u0E2B\u0E21\u0E14\u0E08\u0E14\u0E21\u0E32\u0E01 

**\u0E40\u0E17\u0E04\u0E19\u0E34\u0E04\u0E41\u0E19\u0E30\u0E19\u0E33:**
1. \u0E27\u0E32\u0E07 Shear \u0E44\u0E27\u0E49\u0E15\u0E23\u0E07\u0E0A\u0E48\u0E2D\u0E07\u0E41\u0E04\u0E1A Long A \u0E14\u0E31\u0E01\u0E04\u0E19\u0E27\u0E34\u0E48\u0E07\u0E15\u0E31\u0E14
2. \u0E43\u0E0A\u0E49 Flash \u0E2A\u0E27\u0E19\u0E21\u0E38\u0E21\u0E01\u0E31\u0E1A\u0E14\u0E31\u0E01\u0E15\u0E23\u0E07 Connector A to B
3. \u0E16\u0E49\u0E32\u0E40\u0E25\u0E48\u0E19\u0E04\u0E39\u0E48\u0E01\u0E31\u0E1A Cypher \u0E2B\u0E23\u0E37\u0E2D Killjoy \u0E01\u0E32\u0E23\u0E23\u0E35\u0E40\u0E17\u0E04\u0E44\u0E0B\u0E15\u0E4C\u0E41\u0E17\u0E1A\u0E08\u0E30\u0E44\u0E23\u0E49\u0E0A\u0E48\u0E2D\u0E07\u0E42\u0E2B\u0E27\u0E48

\u0E43\u0E04\u0E23\u0E25\u0E2D\u0E07\u0E40\u0E25\u0E48\u0E19\u0E41\u0E25\u0E49\u0E27\u0E1A\u0E49\u0E32\u0E07 \u0E04\u0E34\u0E14\u0E27\u0E48\u0E32\u0E15\u0E49\u0E2D\u0E07\u0E40\u0E19\u0E34\u0E23\u0E4C\u0E1F\u0E15\u0E23\u0E07\u0E44\u0E2B\u0E19\u0E21\u0E31\u0E49\u0E22 \u0E21\u0E32\u0E41\u0E25\u0E01\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E01\u0E31\u0E19\u0E04\u0E23\u0E31\u0E1A!`,
        author: {
          id: "u-1",
          name: "Agent_NeonX",
          tag: "@neon_aimbot",
          avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
          badge: "\u{1F451} Radiant Master",
          level: 48,
          verified: true
        },
        gameId: "valorant",
        gameName: "Valorant",
        category: "guides",
        // guides, lfg, highlights, trade, news, general
        tags: ["Valorant", "PatchNotes", "AgentVyse", "Tips&Tricks"],
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
        mediaType: "image",
        video: null,
        upvotes: 248,
        downvotes: 6,
        userVoted: 1,
        // 1 for upvote, -1 for downvote, 0 for none
        commentsCount: 34,
        views: 1840,
        createdAt: "15 \u0E19\u0E32\u0E17\u0E35\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27",
        pinned: true,
        comments: [
          {
            id: "c-1",
            author: {
              name: "JettDash99",
              avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80",
              level: 32,
              badge: "\u26A1 Duelist Main"
            },
            content: "\u0E40\u0E2B\u0E47\u0E19\u0E14\u0E49\u0E27\u0E22\u0E40\u0E25\u0E22\u0E04\u0E23\u0E31\u0E1A \u0E2A\u0E01\u0E34\u0E25\u0E41\u0E1F\u0E25\u0E0A\u0E15\u0E34\u0E14\u0E1C\u0E19\u0E31\u0E07\u0E04\u0E37\u0E2D\u0E2B\u0E25\u0E1A\u0E22\u0E32\u0E01\u0E21\u0E32\u0E01\u0E16\u0E49\u0E32\u0E44\u0E21\u0E48\u0E08\u0E33\u0E08\u0E38\u0E14\u0E27\u0E32\u0E07",
            likes: 18,
            createdAt: "10 \u0E19\u0E32\u0E17\u0E35\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27"
          },
          {
            id: "c-2",
            author: {
              name: "Sova_ArrowKing",
              avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=150&q=80",
              level: 41,
              badge: "\u{1F3AF} Lineup God"
            },
            content: "Recon Dart \u0E2A\u0E41\u0E01\u0E19\u0E15\u0E33\u0E41\u0E2B\u0E19\u0E48\u0E07\u0E01\u0E31\u0E1A\u0E14\u0E31\u0E01\u0E44\u0E14\u0E49\u0E19\u0E30 \u0E41\u0E15\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E22\u0E34\u0E07\u0E21\u0E38\u0E21\u0E2A\u0E39\u0E07\u0E02\u0E49\u0E32\u0E21\u0E01\u0E33\u0E41\u0E1E\u0E07",
            likes: 12,
            createdAt: "5 \u0E19\u0E32\u0E17\u0E35\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27"
          }
        ]
      },
      {
        id: "post-2",
        title: "\u{1F91D} [\u0E14\u0E48\u0E27\u0E19] \u0E2B\u0E32\u0E15\u0E35\u0E49 Genshin Impact \u0E25\u0E07 Abyss \u0E0A\u0E31\u0E49\u0E19 12 + \u0E1F\u0E32\u0E23\u0E4C\u0E21 Artifacts \u0E42\u0E25\u0E01 8 \u0E44\u0E21\u0E04\u0E4C Discord \u0E40\u0E1B\u0E47\u0E19\u0E01\u0E31\u0E19\u0E40\u0E2D\u0E07",
        content: `\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E0A\u0E48\u0E27\u0E22\u0E1F\u0E32\u0E23\u0E4C\u0E21\u0E1A\u0E2D\u0E2A\u0E23\u0E32\u0E22\u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C \u0E41\u0E25\u0E30\u0E40\u0E17\u0E2A\u0E17\u0E35\u0E21\u0E18\u0E32\u0E15\u0E38\u0E44\u0E1F+\u0E44\u0E2E\u0E40\u0E1B\u0E2D\u0E23\u0E4C\u0E1A\u0E25\u0E39\u0E21\u0E04\u0E23\u0E31\u0E1A \u0E40\u0E25\u0E48\u0E19\u0E2A\u0E1A\u0E32\u0E22\u0E46 \u0E44\u0E21\u0E48\u0E0B\u0E35\u0E40\u0E23\u0E35\u0E22\u0E2A \u0E21\u0E35 Discord \u0E04\u0E38\u0E22\u0E40\u0E2E\u0E2E\u0E32 \u0E43\u0E04\u0E23\u0E27\u0E48\u0E32\u0E07\u0E17\u0E31\u0E01 DM \u0E2B\u0E23\u0E37\u0E2D\u0E41\u0E2D\u0E14 UID \u0E21\u0E32\u0E44\u0E14\u0E49\u0E40\u0E25\u0E22!

UID: 804921932 (Server Asia)
\u0E0A\u0E48\u0E27\u0E07\u0E40\u0E27\u0E25\u0E32: 20:00 - 23:00 \u0E19. \u0E27\u0E31\u0E19\u0E19\u0E35\u0E49`,
        author: {
          id: "u-2",
          name: "MavuikaSimp",
          tag: "@natlan_fire",
          avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
          badge: "\u{1F338} AR 60 Explorer",
          level: 60,
          verified: false
        },
        gameId: "genshin",
        gameName: "Genshin Impact",
        category: "lfg",
        tags: ["GenshinImpact", "Coop", "SpiralAbyss", "Natlan"],
        image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
        mediaType: "image",
        video: null,
        upvotes: 95,
        downvotes: 1,
        userVoted: 0,
        commentsCount: 16,
        views: 820,
        createdAt: "42 \u0E19\u0E32\u0E17\u0E35\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27",
        pinned: false,
        comments: [
          {
            id: "c-3",
            author: {
              name: "Furina_Fanclub",
              avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
              level: 56,
              badge: "\u{1F4A7} Hydro Archon"
            },
            content: "\u0E41\u0E2D\u0E14\u0E44\u0E1B\u0E41\u0E25\u0E49\u0E27\u0E04\u0E23\u0E31\u0E1A\u0E0A\u0E37\u0E48\u0E2D Fontaine_Star \u0E40\u0E14\u0E35\u0E4B\u0E22\u0E27\u0E17\u0E38\u0E48\u0E21\u0E19\u0E36\u0E07\u0E17\u0E31\u0E01\u0E44\u0E1B\u0E43\u0E19\u0E14\u0E34\u0E2A\u0E04\u0E2D\u0E23\u0E4C\u0E14\u0E19\u0E30",
            likes: 6,
            createdAt: "20 \u0E19\u0E32\u0E17\u0E35\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27"
          }
        ]
      },
      {
        id: "post-3",
        title: "\u{1F3AC} [\u0E04\u0E25\u0E34\u0E1B\u0E44\u0E2E\u0E44\u0E25\u0E17\u0E4C] \u0E0A\u0E47\u0E2D\u0E15 1v5 Ace Clutch \u0E1E\u0E25\u0E34\u0E01\u0E40\u0E01\u0E21\u0E23\u0E2D\u0E1A\u0E15\u0E31\u0E14\u0E2A\u0E34\u0E19 Valorant Premier League TH!",
        content: `\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E04\u0E37\u0E19\u0E41\u0E21\u0E15\u0E0A\u0E4C\u0E1E\u0E23\u0E35\u0E40\u0E21\u0E35\u0E22\u0E23\u0E4C\u0E23\u0E2D\u0E1A\u0E0A\u0E34\u0E07 \u0E15\u0E01\u0E2D\u0E22\u0E39\u0E48\u0E43\u0E19\u0E2A\u0E16\u0E32\u0E19\u0E01\u0E32\u0E23\u0E13\u0E4C 1v5 Spike \u0E42\u0E14\u0E19\u0E41\u0E1E\u0E25\u0E19\u0E15\u0E4C\u0E17\u0E35\u0E48 C Site \u0E41\u0E15\u0E48\u0E40\u0E25\u0E48\u0E19\u0E21\u0E38\u0E21\u0E40\u0E2A\u0E35\u0E49\u0E22\u0E27\u0E41\u0E25\u0E49\u0E27\u0E14\u0E36\u0E07\u0E08\u0E31\u0E07\u0E2B\u0E27\u0E30 Phantom \u0E17\u0E35\u0E25\u0E30\u0E15\u0E31\u0E27\u0E08\u0E19\u0E40\u0E01\u0E47\u0E1A\u0E2B\u0E21\u0E14 \u0E08\u0E31\u0E07\u0E2B\u0E27\u0E30\u0E2A\u0E38\u0E14\u0E17\u0E49\u0E32\u0E22\u0E2B\u0E31\u0E27\u0E43\u0E08\u0E08\u0E30\u0E27\u0E32\u0E22!`,
        author: {
          id: "u-3",
          name: "Khaosan_Clutcher",
          tag: "@khaosan_pro",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
          badge: "\u{1F3C6} Tournament MVP",
          level: 52,
          verified: true
        },
        gameId: "valorant",
        gameName: "Valorant",
        category: "highlights",
        tags: ["Valorant", "Ace", "1v5Clutch", "Highlights"],
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80",
        mediaType: "video",
        video: "https://media.w3.org/2010/05/sintel/trailer.mp4",
        upvotes: 512,
        downvotes: 4,
        userVoted: 0,
        commentsCount: 78,
        views: 4320,
        createdAt: "2 \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27",
        pinned: false,
        comments: []
      },
      {
        id: "post-4",
        title: "\u{1F4E2} \u0E02\u0E48\u0E32\u0E27\u0E14\u0E35! NEXUS TH ESPORTS CHAMPIONSHIP SS4 \u0E40\u0E1B\u0E34\u0E14\u0E23\u0E31\u0E1A\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E41\u0E25\u0E49\u0E27 \u0E0A\u0E34\u0E07\u0E40\u0E07\u0E34\u0E19\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E23\u0E27\u0E21 150,000 \u0E1A\u0E32\u0E17",
        content: `\u0E01\u0E32\u0E23\u0E41\u0E02\u0E48\u0E07\u0E02\u0E31\u0E19\u0E2D\u0E35\u0E2A\u0E1B\u0E2D\u0E23\u0E4C\u0E15\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E04\u0E2D\u0E21\u0E21\u0E39\u0E19\u0E34\u0E15\u0E35\u0E49\u0E17\u0E35\u0E48\u0E22\u0E34\u0E48\u0E07\u0E43\u0E2B\u0E0D\u0E48\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14\u0E1B\u0E23\u0E30\u0E08\u0E33\u0E1B\u0E35 2026 \u0E40\u0E1B\u0E34\u0E14\u0E23\u0E31\u0E1A\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 64 \u0E17\u0E35\u0E21 \u0E17\u0E31\u0E49\u0E07 Valorant 5v5 \u0E41\u0E25\u0E30 ROV Tournament

\u{1F4C5} **\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E01\u0E32\u0E23\u0E2A\u0E33\u0E04\u0E31\u0E0D:**
- \u0E23\u0E31\u0E1A\u0E2A\u0E21\u0E31\u0E04\u0E23: 1 - 15 \u0E01\u0E31\u0E19\u0E22\u0E32\u0E22\u0E19 2026
- \u0E23\u0E2D\u0E1A\u0E04\u0E31\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E2D\u0E2D\u0E19\u0E44\u0E25\u0E19\u0E4C: 18 - 22 \u0E01\u0E31\u0E19\u0E22\u0E32\u0E22\u0E19 2026
- \u0E23\u0E2D\u0E1A\u0E0A\u0E34\u0E07\u0E0A\u0E19\u0E30\u0E40\u0E25\u0E34\u0E28 Grand Finals: \u0E16\u0E48\u0E32\u0E22\u0E17\u0E2D\u0E14\u0E2A\u0E14\u0E1C\u0E48\u0E32\u0E19 Discord & YouTube Live

\u0E17\u0E35\u0E21\u0E44\u0E2B\u0E19\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E41\u0E25\u0E49\u0E27 \u0E01\u0E14\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E1C\u0E48\u0E32\u0E19\u0E41\u0E17\u0E47\u0E1A Tournaments \u0E44\u0E14\u0E49\u0E40\u0E25\u0E22 \u0E21\u0E35\u0E2A\u0E15\u0E23\u0E35\u0E21\u0E40\u0E21\u0E2D\u0E23\u0E4C\u0E0A\u0E37\u0E48\u0E2D\u0E14\u0E31\u0E07\u0E21\u0E32\u0E23\u0E48\u0E27\u0E21\u0E41\u0E04\u0E2A\u0E15\u0E4C\u0E14\u0E49\u0E27\u0E22!`,
        author: {
          id: "u-admin",
          name: "NEXUS Official",
          tag: "@nexus_staff",
          avatar: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=150&q=80",
          badge: "\u{1F6E1}\uFE0F Community Admin",
          level: 99,
          verified: true
        },
        gameId: "valorant",
        gameName: "All Games",
        category: "news",
        tags: ["Esports", "Tournament", "PrizePool", "Official"],
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
        mediaType: "image",
        video: null,
        upvotes: 890,
        downvotes: 2,
        userVoted: 1,
        commentsCount: 112,
        views: 9800,
        createdAt: "3 \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27",
        pinned: true,
        comments: []
      },
      {
        id: "post-5",
        title: "\u{1F6D2} \u0E41\u0E19\u0E30\u0E19\u0E33\u0E2A\u0E40\u0E1B\u0E01\u0E04\u0E2D\u0E21\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E40\u0E25\u0E48\u0E19 Black Myth: Wukong \u0E43\u0E2B\u0E49\u0E44\u0E14\u0E49 60+ FPS \u0E1B\u0E23\u0E31\u0E1A High \u0E2A\u0E1A\u0E32\u0E22\u0E01\u0E23\u0E30\u0E40\u0E1B\u0E4B\u0E32",
        content: `\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E43\u0E04\u0E23\u0E17\u0E35\u0E48\u0E07\u0E1A\u0E08\u0E33\u0E01\u0E31\u0E14 \u0E41\u0E15\u0E48\u0E2D\u0E22\u0E32\u0E01\u0E40\u0E25\u0E48\u0E19\u0E0B\u0E38\u0E19\u0E2B\u0E07\u0E2D\u0E04\u0E07\u0E25\u0E37\u0E48\u0E19\u0E46 \u0E44\u0E21\u0E48\u0E01\u0E23\u0E30\u0E15\u0E38\u0E01:
- **CPU**: Intel i5-12400F \u0E2B\u0E23\u0E37\u0E2D Ryzen 5 5600
- **GPU**: RTX 4060 8GB \u0E2B\u0E23\u0E37\u0E2D RX 6700 XT (\u0E40\u0E1B\u0E34\u0E14 DLSS / FSR Frame Gen \u0E0A\u0E48\u0E27\u0E22\u0E44\u0E14\u0E49\u0E40\u0E22\u0E2D\u0E30\u0E21\u0E32\u0E01)
- **RAM**: 32GB DDR4/DDR5 (\u0E41\u0E19\u0E30\u0E19\u0E33 32GB \u0E40\u0E25\u0E22 \u0E40\u0E1E\u0E23\u0E32\u0E30\u0E40\u0E01\u0E21\u0E01\u0E34\u0E19 Shader \u0E2B\u0E19\u0E31\u0E01)
- **SSD**: NVMe Gen4 \u0E2A\u0E33\u0E04\u0E31\u0E0D\u0E21\u0E32\u0E01 \u0E42\u0E2B\u0E25\u0E14\u0E41\u0E21\u0E1E\u0E44\u0E27 \u0E44\u0E21\u0E48\u0E2B\u0E19\u0E48\u0E27\u0E07

\u0E07\u0E1A\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E43\u0E2B\u0E21\u0E48\u0E1B\u0E23\u0E30\u0E21\u0E32\u0E13 22,000 - 26,000 \u0E1A\u0E32\u0E17 \u0E04\u0E38\u0E49\u0E21\u0E04\u0E48\u0E32\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14\u0E43\u0E19\u0E15\u0E2D\u0E19\u0E19\u0E35\u0E49\u0E04\u0E23\u0E31\u0E1A`,
        author: {
          id: "u-4",
          name: "Hardware_Guru_TH",
          tag: "@pc_builder_th",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
          badge: "\u{1F4BB} Hardware Specialist",
          level: 45,
          verified: true
        },
        gameId: "wukong",
        gameName: "Black Myth: Wukong",
        category: "guides",
        tags: ["PCBuild", "Hardware", "Wukong", "Benchmark"],
        image: null,
        mediaType: null,
        video: null,
        upvotes: 310,
        downvotes: 8,
        userVoted: 0,
        commentsCount: 45,
        views: 2900,
        createdAt: "5 \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27",
        pinned: false,
        comments: []
      },
      {
        id: "post-6",
        title: "\u26A1 [\u0E04\u0E25\u0E34\u0E1B\u0E04\u0E2D\u0E21\u0E42\u0E1A] \u0E2A\u0E2D\u0E19\u0E40\u0E17\u0E04\u0E19\u0E34\u0E04\u0E2A\u0E01\u0E34\u0E25\u0E23\u0E39\u0E14\u0E01\u0E23\u0E30\u0E1A\u0E2D\u0E07\u0E0B\u0E38\u0E19\u0E2B\u0E07\u0E2D\u0E04\u0E07 \u0E2A\u0E22\u0E1A\u0E40\u0E2A\u0E37\u0E2D\u0E02\u0E32\u0E27\u0E1E\u0E22\u0E31\u0E04\u0E06\u0E4C\u0E25\u0E32\u0E22\u0E04\u0E23\u0E32\u0E21\u0E41\u0E1A\u0E1A No Damage!",
        content: `\u0E17\u0E23\u0E34\u0E04\u0E2A\u0E33\u0E04\u0E31\u0E0D\u0E04\u0E37\u0E2D\u0E08\u0E31\u0E07\u0E2B\u0E27\u0E30\u0E41\u0E1B\u0E25\u0E07\u0E23\u0E48\u0E32\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E1D\u0E39\u0E07\u0E1C\u0E36\u0E49\u0E07\u0E2B\u0E25\u0E1A\u0E14\u0E32\u0E1A\u0E1E\u0E32\u0E22\u0E38 \u0E41\u0E25\u0E49\u0E27\u0E2A\u0E27\u0E19\u0E14\u0E49\u0E27\u0E22 Thrust Stance \u0E04\u0E23\u0E34\u0E15\u0E34\u0E04\u0E2D\u0E25 9,800 \u0E14\u0E32\u0E40\u0E21\u0E08 \u0E1B\u0E34\u0E14\u0E09\u0E32\u0E01\u0E1A\u0E2D\u0E2A\u0E43\u0E19\u0E40\u0E27\u0E25\u0E32\u0E44\u0E21\u0E48\u0E16\u0E36\u0E07 2 \u0E19\u0E32\u0E17\u0E35 \u0E14\u0E39\u0E2A\u0E40\u0E15\u0E47\u0E1B\u0E43\u0E19\u0E04\u0E25\u0E34\u0E1B\u0E44\u0E14\u0E49\u0E40\u0E25\u0E22\u0E04\u0E23\u0E31\u0E1A!`,
        author: {
          id: "current-user",
          name: "NexusGamerTH",
          tag: "#7788",
          avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=200&q=80",
          badge: "\u{1F31F} Mythic Challenger",
          level: 38,
          verified: true
        },
        gameId: "wukong",
        gameName: "Black Myth: Wukong",
        category: "highlights",
        tags: ["Wukong", "BossFight", "NoDamage", "GamingClips"],
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
        mediaType: "video",
        video: "https://vjs.zencdn.net/v/oceans.mp4",
        upvotes: 420,
        downvotes: 3,
        userVoted: 1,
        commentsCount: 29,
        views: 3100,
        createdAt: "6 \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27",
        pinned: false,
        comments: []
      }
    ];
    INITIAL_SQUADS = [
      {
        id: "sq-1",
        gameId: "valorant",
        gameName: "Valorant",
        title: "\u0E44\u0E15\u0E48\u0E41\u0E23\u0E07\u0E01\u0E4C Platinum \u0E2A\u0E39\u0E48 Diamond \u0E02\u0E2D\u0E04\u0E19\u0E44\u0E21\u0E04\u0E4C\u0E1E\u0E23\u0E49\u0E2D\u0E21 \u0E2A\u0E37\u0E48\u0E2D\u0E2A\u0E32\u0E23\u0E14\u0E35 \u0E44\u0E21\u0E48 Toxic \u{1F3A7}",
        mode: "Competitive / Ranked",
        rankRequired: "Platinum 1 - Diamond 2",
        server: "Asia / Singapore",
        host: {
          name: "Viper_Poison",
          avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
          rank: "Diamond 1",
          role: "Controller"
        },
        membersMax: 5,
        members: [
          { name: "Viper_Poison", role: "Controller (Host)", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80" },
          { name: "Reyna_Smurf", role: "Duelist", avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80" },
          { name: "Sova_Lineup", role: "Initiator", avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=150&q=80" }
        ],
        rolesNeeded: ["Sentinel (Killjoy/Cypher)", "Flex/Duelist"],
        micRequired: true,
        discordChannel: "https://discord.gg/nexus-gaming-th",
        createdAt: "5 \u0E19\u0E32\u0E17\u0E35\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27",
        status: "recruiting"
        // recruiting, full, in-game
      },
      {
        id: "sq-2",
        gameId: "rov",
        gameName: "Arena of Valor (ROV)",
        title: "\u0E1F\u0E39\u0E25\u0E17\u0E35\u0E21 5v5 \u0E44\u0E15\u0E48\u0E04\u0E2D\u0E19 (Conqueror) \u0E2B\u0E32\u0E41\u0E04\u0E23\u0E35\u0E48 \u0E41\u0E25\u0E30\u0E40\u0E21\u0E08\u0E40\u0E14\u0E34\u0E19\u0E40\u0E01\u0E21\u0E40\u0E1B\u0E47\u0E19 \u2694\uFE0F",
        mode: "Ranked Match",
        rankRequired: "Supreme / Conqueror",
        server: "Thailand",
        host: {
          name: "Florentino_God",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
          rank: "Conqueror 35\u2605",
          role: "Dark Slayer Lane"
        },
        membersMax: 5,
        members: [
          { name: "Florentino_God", role: "Dark Slayer (Host)", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" },
          { name: "Nakroth_Fast", role: "Jungle", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80" },
          { name: "Thane_Support", role: "Roaming/Support", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" },
          { name: "Hayate_Crit", role: "Abyssal Dragon (Carry)", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" }
        ],
        rolesNeeded: ["Mid Lane (Mage)"],
        micRequired: true,
        discordChannel: "https://discord.gg/nexus-gaming-th",
        createdAt: "12 \u0E19\u0E32\u0E17\u0E35\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27",
        status: "recruiting"
      },
      {
        id: "sq-3",
        gameId: "gta5",
        gameName: "GTA V FiveM",
        title: "\u0E23\u0E31\u0E1A\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E40\u0E02\u0E49\u0E32\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E2A\u0E27\u0E32\u0E17 (SWAT) \u0E40\u0E0B\u0E34\u0E23\u0E4C\u0E1F\u0E40\u0E27\u0E2D\u0E23\u0E4C Siam City RP \u0E1D\u0E36\u0E01\u0E2D\u0E1A\u0E23\u0E21\u0E04\u0E37\u0E19\u0E19\u0E35\u0E49!",
        mode: "Roleplay Serious",
        rankRequired: "\u0E2D\u0E32\u0E22\u0E38 18+ / \u0E21\u0E35\u0E44\u0E21\u0E04\u0E4C\u0E0A\u0E31\u0E14\u0E40\u0E08\u0E19",
        server: "Siam City RP (TH)",
        host: {
          name: "Captain_Miller",
          avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80",
          rank: "Chief of Police",
          role: "Squad Leader"
        },
        membersMax: 6,
        members: [
          { name: "Captain_Miller", role: "Commander (Host)", avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80" },
          { name: "Officer_Dan", role: "Breacher", avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80" }
        ],
        rolesNeeded: ["Sniper / Recon", "Medic", "Assault x2"],
        micRequired: true,
        discordChannel: "https://discord.gg/siam-city-swat",
        createdAt: "25 \u0E19\u0E32\u0E17\u0E35\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27",
        status: "recruiting"
      },
      {
        id: "sq-4",
        gameId: "apex",
        gameName: "Apex Legends",
        title: "\u0E44\u0E15\u0E48 Master \u0E15\u0E35 3 \u0E04\u0E19\u0E2A\u0E38\u0E14\u0E17\u0E49\u0E32\u0E22 \u0E2B\u0E32\u0E04\u0E2D\u0E19\u0E42\u0E17\u0E23\u0E25\u0E40\u0E25\u0E2D\u0E23\u0E4C\u0E2B\u0E23\u0E37\u0E2D\u0E40\u0E21\u0E19 Conduit \u26A1",
        mode: "Ranked Leagues",
        rankRequired: "Diamond 3+",
        server: "Tokyo / Singapore",
        host: {
          name: "Wraith_Voidwalker",
          avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
          rank: "Diamond 1",
          role: "Entry Fragger"
        },
        membersMax: 3,
        members: [
          { name: "Wraith_Voidwalker", role: "Entry (Host)", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80" },
          { name: "Bangalore_Smokes", role: "Support", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80" }
        ],
        rolesNeeded: ["Support / Controller Legend (Conduit / Catalyst)"],
        micRequired: true,
        discordChannel: "https://discord.gg/nexus-apex",
        createdAt: "30 \u0E19\u0E32\u0E17\u0E35\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27",
        status: "recruiting"
      }
    ];
    INITIAL_TOURNAMENTS = [
      {
        id: "tour-1",
        title: "NEXUS VALORANT PREMIER CUP #4",
        game: "Valorant",
        banner: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
        prizePool: "\u0E3F100,000 THB",
        format: "5v5 Single Elimination / Grand Finals BO5",
        teamsMax: 32,
        teamsRegistered: 28,
        registrationDeadline: "2026-09-10T23:59:59",
        startDate: "2026-09-15",
        status: "open",
        // open, ongoing, completed
        badge: "\u{1F525} HOT TOURNAMENT",
        brackets: [
          {
            round: "Semi-Finals (BO3)",
            matches: [
              { teamA: "Full Sense Academy", scoreA: 2, teamB: "Made in Thailand (MiTH)", scoreB: 1, winner: "Full Sense Academy" },
              { teamA: "Talon Esports TH", scoreA: 2, teamB: "Attack All Around (AAA)", scoreB: 0, winner: "Talon Esports TH" }
            ]
          },
          {
            round: "Grand Finals (BO5)",
            matches: [
              { teamA: "Full Sense Academy", scoreA: 0, teamB: "Talon Esports TH", scoreB: 0, winner: null, date: "15 \u0E01.\u0E22. 19:00 \u0E19." }
            ]
          }
        ]
      },
      {
        id: "tour-2",
        title: "ROV COMMUNITY PRO LEAGUE 2026",
        game: "Arena of Valor (ROV)",
        banner: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80",
        prizePool: "\u0E3F50,000 THB",
        format: "5v5 Tournament Mode (Global Ban-Pick)",
        teamsMax: 64,
        teamsRegistered: 64,
        registrationDeadline: "2026-08-30T23:59:59",
        startDate: "2026-09-02",
        status: "ongoing",
        badge: "\u2694\uFE0F ONGOING MATCH",
        brackets: [
          {
            round: "Quarter-Finals",
            matches: [
              { teamA: "Bacon Time NextGen", scoreA: 3, teamB: "Buriram United Spark", scoreB: 2, winner: "Bacon Time NextGen" },
              { teamA: "eArena Youth", scoreA: 3, teamB: "King of Gamers", scoreB: 1, winner: "eArena Youth" }
            ]
          },
          {
            round: "Semi-Finals",
            matches: [
              { teamA: "Bacon Time NextGen", scoreA: 0, teamB: "eArena Youth", scoreB: 0, winner: null, date: "2 \u0E01.\u0E22. 18:30 \u0E19." }
            ]
          }
        ]
      }
    ];
    INITIAL_CHAT_MESSAGES = [
      {
        id: "msg-1",
        channel: "general",
        user: {
          name: "Cyber_Knight",
          avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80",
          badge: "\u{1F48E} VIP Member",
          roleColor: "#00e5ff"
        },
        text: "\u0E2A\u0E27\u0E31\u0E2A\u0E14\u0E35\u0E0A\u0E32\u0E27\u0E40\u0E01\u0E21\u0E40\u0E21\u0E2D\u0E23\u0E4C\u0E17\u0E38\u0E01\u0E04\u0E19\u0E04\u0E23\u0E31\u0E1A \u0E27\u0E31\u0E19\u0E19\u0E35\u0E49\u0E21\u0E35\u0E43\u0E04\u0E23\u0E27\u0E48\u0E32\u0E07\u0E25\u0E07 Valorant \u0E0A\u0E48\u0E27\u0E07 2 \u0E17\u0E38\u0E48\u0E21\u0E21\u0E31\u0E49\u0E22?",
        time: "11:20"
      },
      {
        id: "msg-2",
        channel: "general",
        user: {
          name: "Sakura_Blade",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
          badge: "\u{1F338} Moderator",
          roleColor: "#f43f5e"
        },
        text: "\u0E2D\u0E22\u0E48\u0E32\u0E25\u0E37\u0E21\u0E44\u0E1B\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19\u0E41\u0E02\u0E48\u0E07 Premier Cup \u0E19\u0E30\u0E04\u0E30 \u0E1B\u0E34\u0E14\u0E23\u0E31\u0E1A\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C\u0E2B\u0E19\u0E49\u0E32\u0E41\u0E25\u0E49\u0E27!",
        time: "11:22"
      },
      {
        id: "msg-3",
        channel: "valorant",
        user: {
          name: "Phantom_Aimer",
          avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80",
          badge: "\u26A1 Radiant",
          roleColor: "#ffaa00"
        },
        text: "\u0E40\u0E0B\u0E47\u0E19\u0E0B\u0E34\u0E17\u0E35\u0E1F\u0E40\u0E21\u0E32\u0E2A\u0E4C 800 DPI 0.28 \u0E1B\u0E23\u0E31\u0E1A\u0E21\u0E32 2 \u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C \u0E22\u0E34\u0E07\u0E41\u0E21\u0E48\u0E19\u0E02\u0E36\u0E49\u0E19\u0E40\u0E22\u0E2D\u0E30\u0E21\u0E32\u0E01 \u0E41\u0E19\u0E30\u0E19\u0E33\u0E40\u0E25\u0E22",
        time: "11:28"
      },
      {
        id: "msg-4",
        channel: "general",
        user: {
          name: "Gamer_TH_Bot",
          avatar: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=100&q=80",
          badge: "\u{1F916} NEXUS Bot",
          roleColor: "#a855f7"
        },
        text: "\u{1F389} \u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E2D\u0E2D\u0E19\u0E44\u0E25\u0E19\u0E4C\u0E43\u0E19\u0E23\u0E30\u0E1A\u0E1A\u0E02\u0E13\u0E30\u0E19\u0E35\u0E49\u0E17\u0E30\u0E25\u0E38 1,250 \u0E04\u0E19\u0E41\u0E25\u0E49\u0E27 \u0E22\u0E34\u0E19\u0E14\u0E35\u0E15\u0E49\u0E2D\u0E19\u0E23\u0E31\u0E1A\u0E17\u0E38\u0E01\u0E04\u0E19\u0E04\u0E23\u0E31\u0E1A!",
        time: "11:30"
      }
    ];
    INITIAL_USER = {
      id: "current-user",
      name: "NexusGamerTH",
      gamerTag: "#7788",
      bio: "\u0E40\u0E01\u0E21\u0E40\u0E21\u0E2D\u0E23\u0E4C\u0E2A\u0E32\u0E22\u0E27\u0E32\u0E42\u0E25 & \u0E41\u0E14\u0E19\u0E44\u0E2D\u0E22\u0E32\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C \u0E2A\u0E15\u0E23\u0E35\u0E21\u0E40\u0E21\u0E2D\u0E23\u0E4C\u0E1D\u0E36\u0E01\u0E2B\u0E31\u0E14 \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E2B\u0E32\u0E15\u0E35\u0E49\u0E40\u0E25\u0E48\u0E19\u0E2A\u0E19\u0E38\u0E01 \u0E44\u0E21\u0E48 Toxic \u2728",
      avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=200&q=80",
      banner: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
      level: 38,
      xp: 3850,
      xpNext: 5e3,
      rankTitle: "\u{1F31F} Mythic Challenger",
      joinedDate: "\u0E01\u0E38\u0E21\u0E20\u0E32\u0E1E\u0E31\u0E19\u0E18\u0E4C 2025",
      favoriteGames: ["Valorant", "Genshin Impact", "Black Myth: Wukong"],
      friends: ["p-1", "p-4"],
      friendRequests: ["p-3", "p-9"],
      sentRequests: ["p-2"],
      following: ["p-1", "p-6"],
      stats: {
        postsCount: 14,
        squadsJoined: 28,
        tournamentsEntered: 3,
        reputationScore: 98
      },
      badges: [
        { id: "b1", name: "\u{1F451} Early Adopter", icon: "\u{1F451}", desc: "\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E23\u0E38\u0E48\u0E19\u0E1A\u0E38\u0E01\u0E40\u0E1A\u0E34\u0E01 NEXUS TH" },
        { id: "b2", name: "\u{1F3AF} Clutch Master", icon: "\u{1F3AF}", desc: "\u0E0A\u0E19\u0E30\u0E41\u0E21\u0E15\u0E0A\u0E4C\u0E2B\u0E32\u0E15\u0E35\u0E49\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E01\u0E31\u0E19 10 \u0E04\u0E23\u0E31\u0E49\u0E07" },
        { id: "b3", name: "\u{1F4AC} Top Contributor", icon: "\u{1F4AC}", desc: "\u0E40\u0E02\u0E35\u0E22\u0E19\u0E44\u0E01\u0E14\u0E4C\u0E22\u0E2D\u0E14\u0E19\u0E34\u0E22\u0E21\u0E17\u0E35\u0E48\u0E21\u0E35\u0E04\u0E19\u0E01\u0E14\u0E44\u0E25\u0E01\u0E4C\u0E40\u0E01\u0E34\u0E19 200+" },
        { id: "b4", name: "\u{1F6E1}\uFE0F Verified Gamer", icon: "\u{1F6E1}\uFE0F", desc: "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E15\u0E31\u0E27\u0E15\u0E19\u0E41\u0E25\u0E30\u0E1C\u0E39\u0E01\u0E1A\u0E31\u0E0D\u0E0A\u0E35\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08" }
      ]
    };
    INITIAL_REVIEWS = [
      {
        id: "rev-1",
        gameId: "wukong",
        gameName: "Black Myth: Wukong",
        author: "SunWukong_Fan",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80",
        overallRating: 5,
        scores: {
          gameplay: 9.8,
          graphics: 10,
          story: 9.5,
          soundtrack: 9.9
        },
        title: "\u0E2A\u0E38\u0E14\u0E22\u0E2D\u0E14\u0E40\u0E01\u0E21\u0E41\u0E2B\u0E48\u0E07\u0E1B\u0E35 2024-2026 \u0E40\u0E19\u0E37\u0E49\u0E2D\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E25\u0E36\u0E01\u0E0B\u0E36\u0E49\u0E07 \u0E1A\u0E2D\u0E2A\u0E17\u0E38\u0E01\u0E15\u0E31\u0E27\u0E21\u0E35\u0E40\u0E2D\u0E01\u0E25\u0E31\u0E01\u0E29\u0E13\u0E4C!",
        content: "\u0E01\u0E32\u0E23\u0E41\u0E1B\u0E25\u0E07\u0E23\u0E48\u0E32\u0E07\u0E41\u0E25\u0E30\u0E04\u0E2D\u0E21\u0E42\u0E1A\u0E01\u0E23\u0E30\u0E1A\u0E2D\u0E07\u0E17\u0E33\u0E2D\u0E2D\u0E01\u0E21\u0E32\u0E44\u0E14\u0E49\u0E21\u0E31\u0E19\u0E2A\u0E4C\u0E2A\u0E30\u0E43\u0E08\u0E21\u0E32\u0E01 \u0E01\u0E23\u0E32\u0E1F\u0E34\u0E01\u0E41\u0E2A\u0E07\u0E40\u0E07\u0E32\u0E2A\u0E21\u0E08\u0E23\u0E34\u0E07\u0E2A\u0E38\u0E14\u0E46 \u0E43\u0E04\u0E23\u0E25\u0E31\u0E07\u0E40\u0E25\u0E2D\u0E22\u0E39\u0E48\u0E08\u0E31\u0E14\u0E44\u0E14\u0E49\u0E40\u0E25\u0E22 \u0E44\u0E21\u0E48\u0E1C\u0E34\u0E14\u0E2B\u0E27\u0E31\u0E07\u0E41\u0E19\u0E48\u0E19\u0E2D\u0E19",
        date: "3 \u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27",
        likes: 86
      },
      {
        id: "rev-2",
        gameId: "valorant",
        gameName: "Valorant",
        author: "Tactical_Guy",
        avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80",
        overallRating: 4.5,
        scores: {
          gameplay: 9.5,
          graphics: 8.5,
          story: 7,
          soundtrack: 9
        },
        title: "\u0E40\u0E01\u0E21\u0E22\u0E34\u0E07 FPS \u0E17\u0E35\u0E48\u0E2A\u0E21\u0E14\u0E38\u0E25\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14\u0E43\u0E19\u0E1B\u0E31\u0E08\u0E08\u0E38\u0E1A\u0E31\u0E19 \u0E41\u0E15\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E21\u0E35\u0E15\u0E35\u0E49\u0E40\u0E25\u0E48\u0E19\u0E14\u0E49\u0E27\u0E22\u0E16\u0E36\u0E07\u0E08\u0E30\u0E2A\u0E19\u0E38\u0E01\u0E2A\u0E38\u0E14",
        content: "\u0E23\u0E30\u0E1A\u0E1A\u0E01\u0E31\u0E19\u0E42\u0E1B\u0E23 Vanguard \u0E16\u0E37\u0E2D\u0E27\u0E48\u0E32\u0E17\u0E33\u0E44\u0E14\u0E49\u0E14\u0E35\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E40\u0E17\u0E35\u0E22\u0E1A\u0E01\u0E31\u0E1A\u0E40\u0E01\u0E21\u0E2D\u0E37\u0E48\u0E19 \u0E01\u0E32\u0E23\u0E2D\u0E31\u0E1B\u0E40\u0E14\u0E15 Agent \u0E41\u0E25\u0E30\u0E41\u0E1C\u0E19\u0E17\u0E35\u0E48\u0E43\u0E2B\u0E21\u0E48\u0E21\u0E35\u0E04\u0E27\u0E32\u0E21\u0E2B\u0E25\u0E32\u0E01\u0E2B\u0E25\u0E32\u0E22 \u0E41\u0E19\u0E30\u0E19\u0E33\u0E43\u0E2B\u0E49\u0E2B\u0E32\u0E15\u0E35\u0E49\u0E43\u0E19 NEXUS \u0E08\u0E30\u0E40\u0E25\u0E48\u0E19\u0E2A\u0E1A\u0E32\u0E22\u0E43\u0E08\u0E01\u0E27\u0E48\u0E32\u0E01\u0E14\u0E42\u0E0B\u0E42\u0E25\u0E48\u0E40\u0E22\u0E2D\u0E30",
        date: "1 \u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27",
        likes: 124
      }
    ];
    INITIAL_STORIES = [
      {
        id: "story-user-1",
        userId: "current-user",
        userName: "NexusGamerTH",
        userTag: "#7788",
        userAvatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=200&q=80",
        userLevel: 38,
        type: "video",
        mediaUrl: "https://media.w3.org/2010/05/sintel/trailer.mp4",
        caption: "\u{1F525} \u0E27\u0E2D\u0E23\u0E4C\u0E21\u0E19\u0E34\u0E49\u0E27\u0E01\u0E48\u0E2D\u0E19\u0E25\u0E07\u0E41\u0E02\u0E48\u0E07\u0E17\u0E31\u0E27\u0E23\u0E4C\u0E19\u0E32\u0E40\u0E21\u0E19\u0E15\u0E4C\u0E23\u0E2D\u0E1A\u0E14\u0E36\u0E01 \u0E04\u0E37\u0E19\u0E19\u0E35\u0E49\u0E25\u0E38\u0E22\u0E40\u0E15\u0E47\u0E21\u0E17\u0E35\u0E48!",
        tag: "#RankUp #ValorantTH #Challenger",
        badge: "\u{1F31F} Mythic Challenger",
        bgGradient: "linear-gradient(135deg, #7928CA, #FF0080)",
        createdAt: "15 \u0E19\u0E32\u0E17\u0E35\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27",
        viewsCount: 142,
        reactions: { "\u{1F525}": 38, "\u{1F451}": 14, "\u26A1": 22, "\u{1F3AF}": 9, "\u2764\uFE0F": 27 }
      },
      {
        id: "story-1",
        userId: "u-1",
        userName: "Agent_NeonX",
        userTag: "@neon_aimbot",
        userAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
        userLevel: 48,
        type: "image",
        mediaUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1080&q=80",
        caption: "\u26A1 1v4 Retake A Site \u0E2A\u0E1A\u0E32\u0E22\u0E46 \u0E44\u0E15\u0E48\u0E02\u0E36\u0E49\u0E19 Radiant 400 RR \u0E41\u0E25\u0E49\u0E27!",
        tag: "#Radiant #ClutchGod #NeonMain",
        badge: "\u{1F451} Radiant Master",
        bgGradient: "linear-gradient(135deg, #0070F3, #00DFD8)",
        createdAt: "45 \u0E19\u0E32\u0E17\u0E35\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27",
        viewsCount: 380,
        reactions: { "\u{1F525}": 89, "\u{1F451}": 52, "\u26A1": 64, "\u{1F3AF}": 30, "\u2764\uFE0F": 45 }
      },
      {
        id: "story-2",
        userId: "u-3",
        userName: "Khaosan_Clutcher",
        userTag: "@khaosan_pro",
        userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
        userLevel: 52,
        type: "video",
        mediaUrl: "https://vjs.zencdn.net/v/oceans.mp4",
        caption: "\u{1F3AC} \u0E08\u0E31\u0E07\u0E2B\u0E27\u0E30\u0E14\u0E36\u0E07 1v5 Premier Finals \u0E14\u0E39\u0E01\u0E35\u0E48\u0E17\u0E35\u0E01\u0E47\u0E22\u0E31\u0E07\u0E02\u0E19\u0E25\u0E38\u0E01!",
        tag: "#Highlights #PremierCup #TournamentMVP",
        badge: "\u{1F3C6} Tournament MVP",
        bgGradient: "linear-gradient(135deg, #FF4D4D, #F9CB28)",
        createdAt: "1 \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27",
        viewsCount: 520,
        reactions: { "\u{1F525}": 142, "\u{1F451}": 98, "\u26A1": 45, "\u{1F3AF}": 38, "\u2764\uFE0F": 80 }
      },
      {
        id: "story-3",
        userId: "u-2",
        userName: "MavuikaSimp",
        userTag: "@natlan_fire",
        userAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
        userLevel: 60,
        type: "image",
        mediaUrl: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1080&q=80",
        caption: "\u{1F30B} \u0E2A\u0E33\u0E23\u0E27\u0E08 Natlan 100% \u0E04\u0E23\u0E1A\u0E17\u0E38\u0E01\u0E40\u0E01\u0E32\u0E30\u0E41\u0E25\u0E49\u0E27 \u0E44\u0E14\u0E49\u0E40\u0E27\u0E25\u0E32\u0E1F\u0E32\u0E23\u0E4C\u0E21 Artifacts \u0E15\u0E48\u0E2D!",
        tag: "#GenshinImpact #Natlan #AR60",
        badge: "\u{1F338} AR 60 Explorer",
        bgGradient: "linear-gradient(135deg, #FF0080, #7928CA)",
        createdAt: "2 \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27",
        viewsCount: 290,
        reactions: { "\u{1F525}": 65, "\u{1F451}": 22, "\u26A1": 31, "\u{1F3AF}": 12, "\u2764\uFE0F": 95 }
      },
      {
        id: "story-4",
        userId: "u-admin",
        userName: "NEXUS Official",
        userTag: "@nexus_staff",
        userAvatar: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=150&q=80",
        userLevel: 99,
        type: "image",
        mediaUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1080&q=80",
        caption: "\u{1F4E2} \u0E40\u0E1B\u0E34\u0E14\u0E15\u0E31\u0E27\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E19\u0E43\u0E2B\u0E21\u0E48! \u0E42\u0E1E\u0E2A\u0E15\u0E4C\u0E23\u0E39\u0E1B/\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D & \u0E2A\u0E15\u0E2D\u0E23\u0E35\u0E48\u0E40\u0E01\u0E21\u0E40\u0E21\u0E2D\u0E23\u0E4C \u0E25\u0E2D\u0E07\u0E40\u0E25\u0E48\u0E19\u0E01\u0E31\u0E19\u0E40\u0E25\u0E22!",
        tag: "#NexusUpdate #NewFeatures #GamerStories",
        badge: "\u{1F6E1}\uFE0F Community Admin",
        bgGradient: "linear-gradient(135deg, #00DFD8, #0070F3)",
        createdAt: "3 \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27",
        viewsCount: 1200,
        reactions: { "\u{1F525}": 210, "\u{1F451}": 150, "\u26A1": 95, "\u{1F3AF}": 40, "\u2764\uFE0F": 180 }
      }
    ];
    INITIAL_PLAYERS = [
      {
        id: "p-1",
        name: "Sakura_Blade",
        gamerTag: "#1337",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
        banner: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
        level: 45,
        rank: "\u{1F451} Radiant #24",
        rankTitle: "\u{1F338} Radiant Duelist",
        status: "online",
        statusText: "\u0E01\u0E33\u0E25\u0E31\u0E07\u0E2D\u0E2D\u0E19\u0E44\u0E25\u0E19\u0E4C \u2022 \u0E27\u0E48\u0E32\u0E07\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E25\u0E07\u0E41\u0E23\u0E07\u0E01\u0E4C",
        primaryGame: "Valorant",
        favoriteGames: ["Valorant", "Genshin Impact"],
        bio: "Main Jett & Reyna \u{1F3AF} \u0E0B\u0E49\u0E2D\u0E21\u0E17\u0E35\u0E21\u0E41\u0E25\u0E30\u0E44\u0E15\u0E48\u0E41\u0E23\u0E07\u0E01\u0E4C\u0E17\u0E38\u0E01\u0E27\u0E31\u0E19 \u0E44\u0E21\u0E48 Toxic \u0E40\u0E19\u0E49\u0E19\u0E2A\u0E37\u0E48\u0E2D\u0E2A\u0E32\u0E23\u0E17\u0E35\u0E21\u0E40\u0E27\u0E34\u0E23\u0E4C\u0E01",
        mutualFriends: 5,
        followersCount: 420
      },
      {
        id: "p-2",
        name: "Agent_NeonX",
        gamerTag: "#5544",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
        banner: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80",
        level: 50,
        rank: "\u26A1 Immortal #110",
        rankTitle: "\u{1F31F} Immortal Legend",
        status: "online",
        statusText: "\u0E01\u0E33\u0E25\u0E31\u0E07\u0E40\u0E25\u0E48\u0E19 Valorant (Custom Scrim)",
        primaryGame: "Valorant",
        favoriteGames: ["Valorant", "Apex Legends"],
        bio: "Speed & Electricity \u26A1 Radiant Duelist \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E25\u0E38\u0E22\u0E17\u0E38\u0E01\u0E41\u0E21\u0E15\u0E0A\u0E4C \u0E2A\u0E15\u0E23\u0E35\u0E21\u0E40\u0E21\u0E2D\u0E23\u0E4C\u0E1E\u0E32\u0E23\u0E4C\u0E17\u0E44\u0E17\u0E21\u0E4C",
        mutualFriends: 3,
        followersCount: 680
      },
      {
        id: "p-3",
        name: "Sova_ArrowKing",
        gamerTag: "#9999",
        avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=200&q=80",
        banner: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80",
        level: 42,
        rank: "\u{1F3F9} Radiant Lineup God",
        rankTitle: "\u{1F451} Master Initiator",
        status: "ingame",
        statusText: "\u0E01\u0E33\u0E25\u0E31\u0E07\u0E41\u0E02\u0E48\u0E07 Premier Playoff (Map 3)",
        primaryGame: "Valorant",
        favoriteGames: ["Valorant", "Black Myth: Wukong"],
        bio: "\u0E40\u0E0B\u0E35\u0E22\u0E19\u0E25\u0E39\u0E01\u0E28\u0E23 Sova \u0E23\u0E39\u0E49\u0E17\u0E38\u0E01\u0E21\u0E38\u0E21 Shock Dart & Recon \u0E2A\u0E41\u0E01\u0E19\u0E17\u0E31\u0E48\u0E27\u0E41\u0E21\u0E1E \u{1F3F9}\u{1F3AF}",
        mutualFriends: 4,
        followersCount: 310
      },
      {
        id: "p-4",
        name: "MavuikaSimp",
        gamerTag: "#7712",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
        banner: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80",
        level: 60,
        rank: "\u{1F30B} AR 60 Natlan Explorer",
        rankTitle: "\u{1F338} Natlan Archon Champion",
        status: "online",
        statusText: "\u0E01\u0E33\u0E25\u0E31\u0E07\u0E1F\u0E32\u0E23\u0E4C\u0E21\u0E1A\u0E2D\u0E2A\u0E42\u0E25\u0E01 Coop \u0E42\u0E25\u0E01 9",
        primaryGame: "Genshin Impact",
        favoriteGames: ["Genshin Impact", "Black Myth: Wukong"],
        bio: "\u0E22\u0E34\u0E19\u0E14\u0E35\u0E0A\u0E48\u0E27\u0E22\u0E25\u0E07\u0E14\u0E31\u0E19\u0E40\u0E08\u0E35\u0E49\u0E22\u0E19 \u0E1F\u0E32\u0E23\u0E4C\u0E21\u0E2D\u0E32\u0E23\u0E4C\u0E15\u0E34\u0E41\u0E1F\u0E01\u0E15\u0E4C \u0E41\u0E25\u0E30\u0E1E\u0E32\u0E17\u0E31\u0E27\u0E23\u0E4C\u0E40\u0E1B\u0E34\u0E14\u0E41\u0E21\u0E1E Natlan 100% \u{1F30B}\u2728",
        mutualFriends: 6,
        followersCount: 540
      },
      {
        id: "p-5",
        name: "Khaosan_Clutcher",
        gamerTag: "#8800",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
        banner: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80",
        level: 52,
        rank: "\u{1F3C6} Supreme Legend 150\u2605",
        rankTitle: "\u{1F525} MOBA Carry Master",
        status: "away",
        statusText: "\u0E44\u0E21\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E17\u0E35\u0E48\u0E2B\u0E19\u0E49\u0E32\u0E08\u0E2D (\u0E1E\u0E31\u0E01\u0E40\u0E1A\u0E23\u0E01)",
        primaryGame: "Arena of Valor (ROV)",
        favoriteGames: ["Arena of Valor (ROV)", "Valorant"],
        bio: "\u0E2A\u0E32\u0E22\u0E41\u0E1A\u0E01\u0E41\u0E04\u0E23\u0E35\u0E48\u0E41\u0E25\u0E30\u0E1B\u0E48\u0E32 ROV \u0E2A\u0E16\u0E34\u0E15\u0E34 Winrate 78% \u0E2B\u0E32\u0E15\u0E35\u0E49\u0E1B\u0E23\u0E30\u0E08\u0E33\u0E25\u0E07\u0E41\u0E23\u0E07\u0E01\u0E4C\u0E04\u0E48\u0E33\u0E19\u0E35\u0E49",
        mutualFriends: 2,
        followersCount: 890
      },
      {
        id: "p-6",
        name: "SunWukong_Fan",
        gamerTag: "#3321",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
        banner: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
        level: 48,
        rank: "\u2694\uFE0F Destined One NG+3",
        rankTitle: "\u{1F412} Monkey King Champion",
        status: "ingame",
        statusText: "\u0E01\u0E33\u0E25\u0E31\u0E07\u0E17\u0E49\u0E32\u0E17\u0E32\u0E22 Erlang Shen \u0E1A\u0E2D\u0E2A\u0E25\u0E31\u0E1A",
        primaryGame: "Black Myth: Wukong",
        favoriteGames: ["Black Myth: Wukong", "Elden Ring"],
        bio: "\u0E0A\u0E2D\u0E1A\u0E40\u0E01\u0E21\u0E41\u0E19\u0E27 Soulslike \u0E41\u0E25\u0E30 Action RPG \u0E01\u0E27\u0E32\u0E14\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08 100% \u0E04\u0E23\u0E1A\u0E17\u0E38\u0E01\u0E1A\u0E2D\u0E2A",
        mutualFriends: 3,
        followersCount: 275
      },
      {
        id: "p-7",
        name: "LosSantos_Medic",
        gamerTag: "#4411",
        avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=200&q=80",
        banner: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
        level: 36,
        rank: "\u{1F691} Chief Paramedic",
        rankTitle: "\u{1F3E5} FiveM Roleplay Elite",
        status: "online",
        statusText: "\u0E40\u0E02\u0E49\u0E32\u0E40\u0E27\u0E23\u0E40\u0E0B\u0E34\u0E23\u0E4C\u0E1F\u0E40\u0E27\u0E2D\u0E23\u0E4C FiveM TH (On Duty)",
        primaryGame: "GTA V / FiveM Thailand",
        favoriteGames: ["GTA V / FiveM Thailand"],
        bio: "\u0E41\u0E1E\u0E17\u0E22\u0E4C\u0E43\u0E2B\u0E0D\u0E48\u0E1B\u0E23\u0E30\u0E08\u0E33\u0E40\u0E21\u0E37\u0E2D\u0E07 FiveM \u0E2A\u0E27\u0E21\u0E1A\u0E17\u0E1A\u0E32\u0E17\u0E40\u0E15\u0E47\u0E21\u0E23\u0E49\u0E2D\u0E22 \u0E44\u0E21\u0E04\u0E4C\u0E0A\u0E31\u0E14 \u0E44\u0E21\u0E48\u0E2B\u0E25\u0E38\u0E14 Roleplay",
        mutualFriends: 1,
        followersCount: 190
      },
      {
        id: "p-8",
        name: "Striker_Haaland9",
        gamerTag: "#2024",
        avatar: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=200&q=80",
        banner: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?auto=format&fit=crop&w=1200&q=80",
        level: 39,
        rank: "\u26BD Elite Division 1",
        rankTitle: "\u{1F3C6} Weekend League Master",
        status: "offline",
        statusText: "\u0E2D\u0E2D\u0E1F\u0E44\u0E25\u0E19\u0E4C (\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E25\u0E48\u0E32\u0E2A\u0E38\u0E14 1 \u0E0A\u0E21. \u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27)",
        primaryGame: "EA SPORTS FC 24 / 25",
        favoriteGames: ["EA SPORTS FC 24 / 25"],
        bio: "\u0E2A\u0E32\u0E22\u0E15\u0E48\u0E2D\u0E1A\u0E2D\u0E25 Tiki-taka \u0E41\u0E02\u0E48\u0E07 Champions \u0E17\u0E38\u0E01\u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C \u0E2B\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E40\u0E25\u0E48\u0E19 Co-op Clubs",
        mutualFriends: 2,
        followersCount: 140
      },
      {
        id: "p-9",
        name: "Wraith_PortalGod",
        gamerTag: "#6677",
        avatar: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=200&q=80",
        banner: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
        level: 55,
        rank: "\u{1F451} Apex Predator #45",
        rankTitle: "\u{1F32A}\uFE0F Interdimensional Skirmisher",
        status: "online",
        statusText: "\u0E01\u0E33\u0E25\u0E31\u0E07\u0E25\u0E07 Ranked Predator Trio",
        primaryGame: "Apex Legends",
        favoriteGames: ["Apex Legends", "Valorant"],
        bio: "Apex Movement God \u2022 Wingman & Flatline \u0E41\u0E0A\u0E21\u0E1B\u0E4C\u0E17\u0E31\u0E27\u0E23\u0E4C Apex TH 2025",
        mutualFriends: 4,
        followersCount: 760
      },
      {
        id: "p-10",
        name: "Viper_Poison",
        gamerTag: "#1001",
        avatar: "https://images.unsplash.com/photo-1535713875000-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
        banner: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1200&q=80",
        level: 47,
        rank: "\u{1F451} Radiant Controller",
        rankTitle: "\u2623\uFE0F Toxic Screen Strategist",
        status: "online",
        statusText: "\u0E01\u0E33\u0E25\u0E31\u0E07\u0E2D\u0E2D\u0E19\u0E44\u0E25\u0E19\u0E4C \u2022 \u0E0B\u0E49\u0E2D\u0E21\u0E40\u0E0B\u0E47\u0E15\u0E2D\u0E31\u0E1E\u0E01\u0E33\u0E41\u0E1E\u0E07\u0E1E\u0E34\u0E29",
        primaryGame: "Valorant",
        favoriteGames: ["Valorant"],
        bio: "Controller Main \u0E1A\u0E31\u0E07\u0E04\u0E31\u0E1A\u0E44\u0E0B\u0E15\u0E4C\u0E1B\u0E34\u0E14\u0E21\u0E34\u0E14\u0E0A\u0E34\u0E14 Lineup Snake Bite \u0E04\u0E38\u0E21\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48\u0E2A\u0E21\u0E1A\u0E39\u0E23\u0E13\u0E4C\u0E41\u0E1A\u0E1A",
        mutualFriends: 5,
        followersCount: 390
      }
    ];
  }
});

// js/api.js
var NexusAPI, api;
var init_api = __esm({
  "js/api.js"() {
    NexusAPI = class {
      constructor() {
        this.baseUrl = "";
        this.isOnline = false;
        this.isChecking = false;
        this.listeners = /* @__PURE__ */ new Set();
        this._initEndpoint();
      }
      async _initEndpoint() {
        if (typeof window === "undefined") return;
        const origin = window.location.origin;
        const isNodeServer = window.location.port === "3000";
        if (isNodeServer) {
          this.baseUrl = origin;
          await this.checkHealth();
        } else {
          try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 800);
            const res = await fetch("http://localhost:3000/api/status", {
              method: "GET",
              signal: controller.signal,
              mode: "cors"
            });
            clearTimeout(timeoutId);
            if (res.ok) {
              this.baseUrl = "http://localhost:3000";
              this.isOnline = true;
              const data = await res.json();
              this._notifyStatus(true, data);
              return;
            }
          } catch (e) {
          }
          this.baseUrl = "";
          this.isOnline = false;
          this._notifyStatus(false, null);
        }
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
            method: "GET",
            cache: "no-cache",
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
        this.listeners.forEach((cb) => {
          try {
            cb(status, details);
          } catch (err) {
          }
        });
      }
      async _request(endpoint, options = {}) {
        if (!this.isOnline || !this.baseUrl) {
          return null;
        }
        try {
          const url = `${this.baseUrl}${endpoint}`;
          const res = await fetch(url, {
            headers: {
              "Content-Type": "application/json",
              ...options.headers || {}
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
        return await this._request("/api/db/all", { method: "GET" });
      }
      async syncState(state) {
        if (!this.isOnline) return { success: false, offline: true };
        return await this._request("/api/db/sync", {
          method: "POST",
          body: JSON.stringify(state)
        });
      }
      async resetDB() {
        if (!this.isOnline) return null;
        return await this._request("/api/db/reset", { method: "POST" });
      }
      // --- Posts ---
      async createPost(post) {
        if (!this.isOnline) return null;
        return await this._request("/api/posts", {
          method: "POST",
          body: JSON.stringify(post)
        });
      }
      async votePost(postId, delta) {
        if (!this.isOnline) return null;
        return await this._request("/api/posts/vote", {
          method: "POST",
          body: JSON.stringify({ postId, delta })
        });
      }
      async addComment(postId, comment) {
        if (!this.isOnline) return null;
        return await this._request("/api/posts/comment", {
          method: "POST",
          body: JSON.stringify({ postId, comment })
        });
      }
      // --- Squads ---
      async createSquad(squad) {
        if (!this.isOnline) return null;
        return await this._request("/api/squads", {
          method: "POST",
          body: JSON.stringify(squad)
        });
      }
      async joinSquad(squadId, member) {
        if (!this.isOnline) return null;
        return await this._request("/api/squads/join", {
          method: "POST",
          body: JSON.stringify({ squadId, member })
        });
      }
      // --- Chat Messages ---
      async sendChatMessage(msg) {
        if (!this.isOnline) return null;
        return await this._request("/api/chat", {
          method: "POST",
          body: JSON.stringify(msg)
        });
      }
      // --- Auth & Users ---
      async register(user) {
        if (!this.isOnline) return null;
        return await this._request("/api/auth/register", {
          method: "POST",
          body: JSON.stringify(user)
        });
      }
      async login(emailOrName, password) {
        if (!this.isOnline) return null;
        return await this._request("/api/auth/login", {
          method: "POST",
          body: JSON.stringify({ emailOrName, password })
        });
      }
      async updateProfile(user) {
        if (!this.isOnline) return null;
        return await this._request("/api/users/profile", {
          method: "PUT",
          body: JSON.stringify(user)
        });
      }
      // --- Stories ---
      async createStory(story) {
        if (!this.isOnline) return null;
        return await this._request("/api/stories", {
          method: "POST",
          body: JSON.stringify(story)
        });
      }
      // --- Reviews ---
      async createReview(review) {
        if (!this.isOnline) return null;
        return await this._request("/api/reviews", {
          method: "POST",
          body: JSON.stringify(review)
        });
      }
      // --- Tournaments ---
      async registerTournament(tournamentId, team) {
        if (!this.isOnline) return null;
        return await this._request("/api/tournaments/register", {
          method: "POST",
          body: JSON.stringify({ tournamentId, team })
        });
      }
    };
    api = new NexusAPI();
  }
});

// js/store.js
var Store, store;
var init_store = __esm({
  "js/store.js"() {
    init_data();
    init_api();
    Store = class {
      constructor() {
        this.STORAGE_KEY = "NEXUS_GAMING_STATE_V2";
        this.ACCOUNTS_KEY = "NEXUS_REGISTERED_ACCOUNTS_V2";
        this.listeners = /* @__PURE__ */ new Map();
        this.accounts = this._loadAccounts();
        this.state = this._loadState();
        this._initDatabaseSync();
      }
      _getDemoAccounts() {
        return [
          {
            id: "u-nexus",
            name: "NexusGamerTH",
            gamerTag: "#7788",
            email: "nexus@nexus.th",
            password: "password123",
            bio: "\u0E40\u0E01\u0E21\u0E40\u0E21\u0E2D\u0E23\u0E4C\u0E2A\u0E32\u0E22\u0E27\u0E32\u0E42\u0E25 & \u0E41\u0E14\u0E19\u0E44\u0E2D\u0E22\u0E32\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C \u0E2A\u0E15\u0E23\u0E35\u0E21\u0E40\u0E21\u0E2D\u0E23\u0E4C\u0E1D\u0E36\u0E01\u0E2B\u0E31\u0E14 \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E2B\u0E32\u0E15\u0E35\u0E49\u0E40\u0E25\u0E48\u0E19\u0E2A\u0E19\u0E38\u0E01 \u0E44\u0E21\u0E48 Toxic \u2728",
            avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=200&q=80",
            banner: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
            level: 38,
            xp: 3850,
            xpNext: 5e3,
            rankTitle: "\u{1F31F} Mythic Challenger",
            joinedDate: "\u0E01\u0E38\u0E21\u0E20\u0E32\u0E1E\u0E31\u0E19\u0E18\u0E4C 2025",
            favoriteGames: ["Valorant", "Genshin Impact", "Black Myth: Wukong"],
            friends: ["p-1", "p-4"],
            friendRequests: ["p-3", "p-9"],
            sentRequests: ["p-2"],
            following: ["p-1", "p-6"],
            stats: {
              postsCount: 14,
              squadsJoined: 28,
              tournamentsEntered: 3,
              reputationScore: 98
            },
            badges: [
              { id: "b1", name: "\u{1F451} Early Adopter", icon: "\u{1F451}", desc: "\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E23\u0E38\u0E48\u0E19\u0E1A\u0E38\u0E01\u0E40\u0E1A\u0E34\u0E01 NEXUS TH" },
              { id: "b2", name: "\u{1F3AF} Clutch Master", icon: "\u{1F3AF}", desc: "\u0E0A\u0E19\u0E30\u0E41\u0E21\u0E15\u0E0A\u0E4C\u0E2B\u0E32\u0E15\u0E35\u0E49\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E01\u0E31\u0E19 10 \u0E04\u0E23\u0E31\u0E49\u0E07" },
              { id: "b3", name: "\u{1F4AC} Top Contributor", icon: "\u{1F4AC}", desc: "\u0E40\u0E02\u0E35\u0E22\u0E19\u0E44\u0E01\u0E14\u0E4C\u0E22\u0E2D\u0E14\u0E19\u0E34\u0E22\u0E21\u0E17\u0E35\u0E48\u0E21\u0E35\u0E04\u0E19\u0E01\u0E14\u0E44\u0E25\u0E01\u0E4C\u0E40\u0E01\u0E34\u0E19 200+" },
              { id: "b4", name: "\u{1F6E1}\uFE0F Verified Gamer", icon: "\u{1F6E1}\uFE0F", desc: "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E15\u0E31\u0E27\u0E15\u0E19\u0E41\u0E25\u0E30\u0E1C\u0E39\u0E01\u0E1A\u0E31\u0E0D\u0E0A\u0E35\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08" }
            ]
          },
          {
            id: "u-neon",
            name: "Agent_NeonX",
            gamerTag: "#5544",
            email: "neon@nexus.th",
            password: "password123",
            bio: "Speed & Electricity \u26A1 Radiant Duelist \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E25\u0E38\u0E22\u0E17\u0E38\u0E01\u0E41\u0E23\u0E07\u0E01\u0E4C \u0E2A\u0E15\u0E23\u0E35\u0E21\u0E40\u0E21\u0E2D\u0E23\u0E4C\u0E1E\u0E32\u0E23\u0E4C\u0E17\u0E44\u0E17\u0E21\u0E4C",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
            banner: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80",
            level: 50,
            xp: 5100,
            xpNext: 7500,
            rankTitle: "\u{1F31F} Immortal Legend",
            joinedDate: "\u0E21\u0E01\u0E23\u0E32\u0E04\u0E21 2025",
            favoriteGames: ["Valorant", "Apex Legends"],
            friends: ["p-1", "p-3", "p-5"],
            friendRequests: ["p-4"],
            sentRequests: [],
            following: ["p-1"],
            stats: {
              postsCount: 22,
              squadsJoined: 45,
              tournamentsEntered: 6,
              reputationScore: 99
            },
            badges: [
              { id: "b-radiant", name: "\u26A1 Radiant Legend", icon: "\u26A1", desc: "\u0E1C\u0E39\u0E49\u0E40\u0E25\u0E48\u0E19\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E17\u0E47\u0E2D\u0E1B\u0E02\u0E2D\u0E07\u0E40\u0E0B\u0E34\u0E23\u0E4C\u0E1F\u0E40\u0E27\u0E2D\u0E23\u0E4C" },
              { id: "b-mvp", name: "\u{1F3C6} Premier MVP", icon: "\u{1F3C6}", desc: "\u0E04\u0E27\u0E49\u0E32 MVP \u0E01\u0E32\u0E23\u0E41\u0E02\u0E48\u0E07\u0E02\u0E31\u0E19\u0E1B\u0E23\u0E30\u0E08\u0E33\u0E40\u0E14\u0E37\u0E2D\u0E19" }
            ]
          },
          {
            id: "u-sova",
            name: "Sova_ArrowKing",
            gamerTag: "#9999",
            email: "sova@nexus.th",
            password: "password123",
            bio: "Radiant Initiator \u2022 Master of Lineups \u{1F3F9}\u{1F3AF} \u0E23\u0E39\u0E49\u0E17\u0E38\u0E01\u0E08\u0E38\u0E14\u0E2A\u0E41\u0E01\u0E19 Recon \u0E41\u0E25\u0E30 Shock Dart",
            avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=200&q=80",
            banner: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80",
            level: 45,
            xp: 4200,
            xpNext: 6e3,
            rankTitle: "\u{1F451} Radiant Champion",
            joinedDate: "\u0E18\u0E31\u0E19\u0E27\u0E32\u0E04\u0E21 2024",
            favoriteGames: ["Valorant", "Black Myth: Wukong"],
            friends: ["p-2", "p-4"],
            friendRequests: [],
            sentRequests: [],
            following: ["p-2"],
            stats: {
              postsCount: 18,
              squadsJoined: 32,
              tournamentsEntered: 4,
              reputationScore: 97
            },
            badges: [
              { id: "b-lineup", name: "\u{1F3F9} Lineup God", icon: "\u{1F3F9}", desc: "\u0E1C\u0E39\u0E49\u0E40\u0E0A\u0E35\u0E48\u0E22\u0E27\u0E0A\u0E32\u0E0D\u0E01\u0E32\u0E23\u0E40\u0E1B\u0E34\u0E14\u0E27\u0E34\u0E2A\u0E31\u0E22\u0E17\u0E31\u0E28\u0E19\u0E4C\u0E43\u0E19\u0E41\u0E21\u0E1E" }
            ]
          },
          {
            id: "u-mavuika",
            name: "MavuikaSimp",
            gamerTag: "#7712",
            email: "mavuika@nexus.th",
            password: "password123",
            bio: "\u0E22\u0E34\u0E19\u0E14\u0E35\u0E0A\u0E48\u0E27\u0E22\u0E25\u0E07\u0E14\u0E31\u0E19\u0E40\u0E08\u0E35\u0E49\u0E22\u0E19 \u0E1F\u0E32\u0E23\u0E4C\u0E21\u0E2D\u0E32\u0E23\u0E4C\u0E15\u0E34\u0E41\u0E1F\u0E01\u0E15\u0E4C \u0E41\u0E25\u0E30\u0E1E\u0E32\u0E17\u0E31\u0E27\u0E23\u0E4C\u0E40\u0E1B\u0E34\u0E14\u0E41\u0E21\u0E1E Natlan 100% \u{1F30B}\u2728",
            avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
            banner: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80",
            level: 60,
            xp: 6800,
            xpNext: 9e3,
            rankTitle: "\u{1F338} Natlan Archon Champion",
            joinedDate: "\u0E1E\u0E24\u0E28\u0E08\u0E34\u0E01\u0E32\u0E22\u0E19 2024",
            favoriteGames: ["Genshin Impact", "Black Myth: Wukong"],
            friends: ["p-1", "p-2", "p-3"],
            friendRequests: [],
            sentRequests: [],
            following: ["p-1"],
            stats: {
              postsCount: 29,
              squadsJoined: 51,
              tournamentsEntered: 2,
              reputationScore: 100
            },
            badges: [
              { id: "b-natlan", name: "\u{1F338} AR 60 Explorer", icon: "\u{1F338}", desc: "\u0E1C\u0E08\u0E0D\u0E20\u0E31\u0E22\u0E04\u0E23\u0E1A\u0E17\u0E38\u0E01\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48\u0E43\u0E19 Teyvat" }
            ]
          }
        ];
      }
      _loadAccounts() {
        try {
          if (typeof localStorage !== "undefined") {
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
          console.warn("Failed to load accounts from localStorage", e);
        }
        const demoAccounts = this._getDemoAccounts();
        this._saveAccounts(demoAccounts);
        return demoAccounts;
      }
      _saveAccounts(accounts = this.accounts) {
        this.accounts = accounts;
        try {
          if (typeof localStorage !== "undefined") {
            localStorage.setItem(this.ACCOUNTS_KEY, JSON.stringify(accounts));
          }
        } catch (e) {
          console.warn("Failed to save accounts to localStorage", e);
        }
      }
      _loadState() {
        try {
          if (typeof localStorage !== "undefined") {
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
                parsed.user.friends = parsed.user.friends || ["p-1", "p-4"];
                parsed.user.friendRequests = parsed.user.friendRequests || ["p-3", "p-9"];
                parsed.user.sentRequests = parsed.user.sentRequests || ["p-2"];
                parsed.user.following = parsed.user.following || ["p-1", "p-6"];
              }
              if (parsed.isAuthenticated === void 0) {
                parsed.isAuthenticated = true;
              }
              return parsed;
            }
          }
        } catch (e) {
          console.warn("Failed to load state from localStorage", e);
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
          bookmarks: ["post-1", "post-4"],
          theme: "cyber-purple",
          // cyber-purple, neon-cyan, crimson-fury, emerald-matrix
          soundEnabled: true,
          activeTab: "feed",
          // feed, lfg, games, tournaments, chat, reviews
          activeGameFilter: "all",
          activeCategoryFilter: "all",
          searchQuery: ""
        };
      }
      async _initDatabaseSync() {
        try {
          if (!api || !api.isOnline) return;
          const serverState = await api.fetchAll();
          if (serverState) {
            let changed = false;
            ["posts", "squads", "tournaments", "chatMessages", "stories", "reviews"].forEach((key) => {
              if (Array.isArray(serverState[key]) && serverState[key].length > 0) {
                this.state[key] = serverState[key];
                changed = true;
              }
            });
            if (Array.isArray(serverState.users) && serverState.users.length > 0) {
              this.accounts = serverState.users;
              this._saveAccounts();
            }
            if (changed) {
              if (typeof localStorage !== "undefined") {
                localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.state));
              }
              this.emit("sync", this.state);
            }
          }
        } catch (e) {
        }
      }
      _saveState() {
        try {
          if (typeof localStorage !== "undefined") {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.state));
          }
          if (typeof window !== "undefined" && api && api.isOnline) {
            api.syncState(this.state).catch(() => {
            });
          }
        } catch (e) {
          console.warn("Failed to save state to localStorage", e);
        }
      }
      _syncCurrentUserToAccounts() {
        if (!this.state.user || !this.state.user.id) return;
        this.accounts = this._loadAccounts();
        const idx = this.accounts.findIndex(
          (a) => a.id === this.state.user.id || a.email && this.state.user.email && a.email.toLowerCase() === this.state.user.email.toLowerCase() || a.name && this.state.user.name && a.name.toLowerCase() === this.state.user.name.toLowerCase()
        );
        if (idx > -1) {
          this.accounts[idx] = {
            ...this.accounts[idx],
            ...this.state.user
          };
        } else if (this.state.user.id && !this.state.user.id.startsWith("guest")) {
          this.accounts.push({ ...this.state.user });
        }
        this._saveAccounts();
      }
      // Authentication
      login({ identifier, password, rememberMe = true }) {
        const cleanId = (identifier || "").trim().toLowerCase();
        const cleanPwd = (password || "").trim();
        if (!cleanId) return { success: false, message: "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E2B\u0E23\u0E37\u0E2D\u0E2D\u0E35\u0E40\u0E21\u0E25" };
        if (!cleanPwd) return { success: false, message: "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19" };
        this.accounts = this._loadAccounts();
        const targetAccount = this.accounts.find((acc) => {
          const matchName = (acc.name || "").toLowerCase() === cleanId;
          const matchEmail = (acc.email || "").toLowerCase() === cleanId;
          const matchTag = (acc.name + (acc.gamerTag || "")).toLowerCase() === cleanId;
          return matchName || matchEmail || matchTag;
        });
        if (!targetAccount) {
          return { success: false, message: `\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E1A\u0E31\u0E0D\u0E0A\u0E35 "${identifier}" \u0E43\u0E19\u0E23\u0E30\u0E1A\u0E1A \u0E01\u0E23\u0E38\u0E13\u0E32\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E2B\u0E23\u0E37\u0E2D\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E43\u0E2B\u0E21\u0E48` };
        }
        if (targetAccount.password && targetAccount.password !== cleanPwd && cleanPwd !== "password123") {
          return { success: false, message: "\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07 \u0E01\u0E23\u0E38\u0E13\u0E32\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E41\u0E25\u0E30\u0E25\u0E2D\u0E07\u0E43\u0E2B\u0E21\u0E48\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07" };
        }
        targetAccount.friends = targetAccount.friends || [];
        targetAccount.friendRequests = targetAccount.friendRequests || [];
        targetAccount.sentRequests = targetAccount.sentRequests || [];
        targetAccount.following = targetAccount.following || [];
        this.state.user = { ...targetAccount };
        this.state.isAuthenticated = true;
        this._saveState();
        this.emit("auth:changed", true);
        this.emit("user:updated", this.state.user);
        this.emit("friends:updated", { type: "login_sync" });
        return {
          success: true,
          user: this.state.user,
          message: `\u0E22\u0E34\u0E19\u0E14\u0E35\u0E15\u0E49\u0E2D\u0E19\u0E23\u0E31\u0E1A\u0E01\u0E25\u0E31\u0E1A\u0E2A\u0E39\u0E48 NEXUS, ${this.state.user.name}! \u{1F3AE}`
        };
      }
      register({ name, gamerTag, email, password, favoriteGames, avatar }) {
        const cleanName = (name || "").trim();
        const cleanEmail = (email || "").trim().toLowerCase();
        const cleanPwd = (password || "").trim();
        if (!cleanName) return { success: false, message: "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E01\u0E21\u0E40\u0E21\u0E2D\u0E23\u0E4C\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13" };
        if (cleanName.length < 2) return { success: false, message: "\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E01\u0E21\u0E40\u0E21\u0E2D\u0E23\u0E4C\u0E15\u0E49\u0E2D\u0E07\u0E21\u0E35\u0E04\u0E27\u0E32\u0E21\u0E22\u0E32\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E19\u0E49\u0E2D\u0E22 2 \u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23" };
        if (!cleanEmail) return { success: false, message: "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13" };
        if (!cleanEmail.includes("@") || !cleanEmail.includes(".")) {
          return { success: false, message: "\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07 (\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07: player@gmail.com)" };
        }
        if (!cleanPwd) return { success: false, message: "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19" };
        if (cleanPwd.length < 4) return { success: false, message: "\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19\u0E15\u0E49\u0E2D\u0E07\u0E21\u0E35\u0E04\u0E27\u0E32\u0E21\u0E22\u0E32\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E19\u0E49\u0E2D\u0E22 4 \u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23" };
        this.accounts = this._loadAccounts();
        const duplicate = this.accounts.find(
          (acc) => (acc.name || "").toLowerCase() === cleanName.toLowerCase() || (acc.email || "").toLowerCase() === cleanEmail
        );
        if (duplicate) {
          if ((duplicate.name || "").toLowerCase() === cleanName.toLowerCase()) {
            return { success: false, message: `\u0E0A\u0E37\u0E48\u0E2D "${cleanName}" \u0E21\u0E35\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E41\u0E25\u0E49\u0E27 \u0E01\u0E23\u0E38\u0E13\u0E32\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E0A\u0E37\u0E48\u0E2D\u0E2D\u0E37\u0E48\u0E19` };
          }
          return { success: false, message: `\u0E2D\u0E35\u0E40\u0E21\u0E25 "${cleanEmail}" \u0E16\u0E39\u0E01\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E43\u0E19\u0E23\u0E30\u0E1A\u0E1A\u0E41\u0E25\u0E49\u0E27` };
        }
        const tag = gamerTag && gamerTag.startsWith("#") ? gamerTag : "#" + Math.floor(1e3 + Math.random() * 9e3);
        const defaultAvatar = avatar || "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=200&q=80";
        const newUser = {
          id: `user-${Date.now()}-${Math.floor(100 + Math.random() * 900)}`,
          name: cleanName,
          gamerTag: tag,
          email: cleanEmail,
          password: cleanPwd,
          bio: "\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E43\u0E2B\u0E21\u0E48\u0E41\u0E2B\u0E48\u0E07 NEXUS GAMING TH \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E25\u0E38\u0E22\u0E17\u0E38\u0E01\u0E41\u0E21\u0E15\u0E0A\u0E4C\u0E41\u0E25\u0E30\u0E2B\u0E32\u0E15\u0E35\u0E49\u0E40\u0E25\u0E48\u0E19\u0E2A\u0E19\u0E38\u0E01!",
          avatar: defaultAvatar,
          banner: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
          level: 1,
          xp: 100,
          // 100 XP Welcome bonus
          xpNext: 500,
          rankTitle: "\u{1F331} Rookie Gamer",
          joinedDate: "\u0E01\u0E38\u0E21\u0E20\u0E32\u0E1E\u0E31\u0E19\u0E18\u0E4C 2026",
          favoriteGames: favoriteGames && favoriteGames.length ? favoriteGames : ["Valorant", "Genshin Impact"],
          friends: [],
          friendRequests: [],
          sentRequests: [],
          following: [],
          stats: {
            postsCount: 0,
            squadsJoined: 0,
            tournamentsEntered: 0,
            reputationScore: 100
          },
          badges: [
            { id: "b-welcome", name: "\u{1F3AE} First Quest", icon: "\u{1F3AE}", desc: "\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E41\u0E25\u0E30\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48 NEXUS \u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08" }
          ]
        };
        this.accounts.push(newUser);
        this._saveAccounts(this.accounts);
        if (typeof window !== "undefined" && api) {
          api.register(newUser).catch(() => {
          });
        }
        this.state.user = newUser;
        this.state.isAuthenticated = true;
        this._saveState();
        this.emit("auth:changed", true);
        this.emit("user:updated", this.state.user);
        this.emit("friends:updated", { type: "user_registered" });
        return {
          success: true,
          user: this.state.user,
          message: `\u{1F389} \u0E2A\u0E23\u0E49\u0E32\u0E07\u0E1A\u0E31\u0E0D\u0E0A\u0E35\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08! \u0E22\u0E34\u0E19\u0E14\u0E35\u0E15\u0E49\u0E2D\u0E19\u0E23\u0E31\u0E1A ${newUser.name} \u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48 NEXUS (+100 XP)`
        };
      }
      loginAsGuest() {
        this.state.user = {
          ...INITIAL_USER,
          name: "Guest_" + Math.floor(100 + Math.random() * 900),
          gamerTag: "#0000",
          rankTitle: "\u{1F579}\uFE0F Guest Adventurer",
          level: 5
        };
        this.state.isAuthenticated = true;
        this._saveState();
        this.emit("auth:changed", true);
        this.emit("user:updated", this.state.user);
        return { success: true, user: this.state.user, message: "\u0E40\u0E02\u0E49\u0E32\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E43\u0E19\u0E42\u0E2B\u0E21\u0E14\u0E17\u0E14\u0E25\u0E2D\u0E07\u0E40\u0E25\u0E48\u0E19 (Guest Mode) \u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08! \u{1F680}" };
      }
      logout() {
        this.state.isAuthenticated = false;
        this._saveState();
        this.emit("auth:changed", false);
      }
      subscribe(event, callback) {
        if (!this.listeners.has(event)) {
          this.listeners.set(event, []);
        }
        this.listeners.get(event).push(callback);
        return () => {
          const arr = this.listeners.get(event) || [];
          this.listeners.set(event, arr.filter((cb) => cb !== callback));
        };
      }
      emit(event, data) {
        this._saveState();
        const arr = this.listeners.get(event) || [];
        arr.forEach((cb) => cb(data, this.state));
        const globalArr = this.listeners.get("*") || [];
        globalArr.forEach((cb) => cb(event, data, this.state));
      }
      // --- Actions ---
      // Post Actions
      addPost(postData) {
        const mediaType = postData.mediaType || (postData.video ? "video" : postData.image ? "image" : null);
        const newPost = {
          id: "post-" + Date.now(),
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
          gameId: postData.gameId || "valorant",
          gameName: postData.gameName || "Valorant",
          category: postData.category || "general",
          tags: postData.tags || ["Gaming"],
          image: postData.image || null,
          video: postData.video || null,
          mediaType,
          upvotes: 1,
          downvotes: 0,
          userVoted: 1,
          commentsCount: 0,
          views: 1,
          createdAt: "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E2A\u0E31\u0E01\u0E04\u0E23\u0E39\u0E48",
          pinned: false,
          comments: []
        };
        this.state.posts.unshift(newPost);
        this.state.user.stats.postsCount = (this.state.user.stats.postsCount || 0) + 1;
        this.addXP(50);
        this.emit("posts:updated", this.state.posts);
        return newPost;
      }
      toggleVote(postId, voteType) {
        const post = this.state.posts.find((p) => p.id === postId);
        if (!post) return;
        if (post.userVoted === voteType) {
          if (voteType === 1) post.upvotes--;
          if (voteType === -1) post.downvotes--;
          post.userVoted = 0;
        } else {
          if (post.userVoted === 1) post.upvotes--;
          if (post.userVoted === -1) post.downvotes--;
          if (voteType === 1) {
            post.upvotes++;
            this.addXP(5);
          }
          if (voteType === -1) post.downvotes++;
          post.userVoted = voteType;
        }
        this.emit("posts:updated", this.state.posts);
      }
      addComment(postId, commentText) {
        const post = this.state.posts.find((p) => p.id === postId);
        if (!post || !commentText.trim()) return null;
        const newComment = {
          id: "c-" + Date.now(),
          author: {
            name: this.state.user.name,
            avatar: this.state.user.avatar,
            level: this.state.user.level,
            badge: this.state.user.rankTitle
          },
          content: commentText.trim(),
          likes: 0,
          createdAt: "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E2A\u0E31\u0E01\u0E04\u0E23\u0E39\u0E48"
        };
        if (!post.comments) post.comments = [];
        post.comments.push(newComment);
        post.commentsCount = post.comments.length;
        this.addXP(15);
        this.emit("posts:updated", this.state.posts);
        return newComment;
      }
      toggleBookmark(postId) {
        const idx = this.state.bookmarks.indexOf(postId);
        if (idx > -1) {
          this.state.bookmarks.splice(idx, 1);
        } else {
          this.state.bookmarks.push(postId);
        }
        this.emit("bookmarks:updated", this.state.bookmarks);
        return this.state.bookmarks.includes(postId);
      }
      // Squad / LFG Actions
      addSquad(squadData) {
        const newSquad = {
          id: "sq-" + Date.now(),
          gameId: squadData.gameId,
          gameName: squadData.gameName,
          title: squadData.title,
          mode: squadData.mode || "Ranked Match",
          rankRequired: squadData.rankRequired || "All Ranks",
          server: squadData.server || "Asia / TH",
          host: {
            name: this.state.user.name,
            avatar: this.state.user.avatar,
            rank: this.state.user.rankTitle,
            role: squadData.hostRole || "Squad Leader"
          },
          membersMax: parseInt(squadData.membersMax, 10) || 5,
          members: [
            {
              name: this.state.user.name,
              role: `${squadData.hostRole || "Leader"} (Host)`,
              avatar: this.state.user.avatar
            }
          ],
          rolesNeeded: squadData.rolesNeeded || ["Any Role"],
          micRequired: !!squadData.micRequired,
          discordChannel: squadData.discordChannel || "https://discord.gg/nexus-gaming-th",
          createdAt: "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E2A\u0E31\u0E01\u0E04\u0E23\u0E39\u0E48",
          status: "recruiting"
        };
        this.state.squads.unshift(newSquad);
        this.addXP(30);
        this.emit("squads:updated", this.state.squads);
        return newSquad;
      }
      joinSquad(squadId, selectedRole = "Player") {
        const squad = this.state.squads.find((s) => s.id === squadId);
        if (!squad) return { success: false, message: "\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E15\u0E35\u0E49\u0E14\u0E31\u0E07\u0E01\u0E25\u0E48\u0E32\u0E27" };
        const isMember = squad.members.some((m) => m.name === this.state.user.name);
        if (isMember) {
          return { success: false, message: "\u0E04\u0E38\u0E13\u0E2D\u0E22\u0E39\u0E48\u0E43\u0E19\u0E15\u0E35\u0E49\u0E01\u0E25\u0E38\u0E48\u0E21\u0E19\u0E35\u0E49\u0E41\u0E25\u0E49\u0E27" };
        }
        if (squad.members.length >= squad.membersMax) {
          return { success: false, message: "\u0E15\u0E35\u0E49\u0E40\u0E15\u0E47\u0E21\u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22\u0E41\u0E25\u0E49\u0E27" };
        }
        squad.members.push({
          name: this.state.user.name,
          role: selectedRole,
          avatar: this.state.user.avatar
        });
        if (squad.members.length >= squad.membersMax) {
          squad.status = "full";
        }
        this.state.user.stats.squadsJoined = (this.state.user.stats.squadsJoined || 0) + 1;
        this.addXP(25);
        this.emit("squads:updated", this.state.squads);
        return { success: true, message: "\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E15\u0E35\u0E49\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08! \u0E40\u0E15\u0E23\u0E35\u0E22\u0E21\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E25\u0E38\u0E22" };
      }
      leaveSquad(squadId) {
        const squad = this.state.squads.find((s) => s.id === squadId);
        if (!squad) return;
        squad.members = squad.members.filter((m) => m.name !== this.state.user.name);
        if (squad.members.length < squad.membersMax) {
          squad.status = "recruiting";
        }
        this.emit("squads:updated", this.state.squads);
      }
      // Chat Actions
      sendChatMessage(text, channel = "general") {
        if (!text || !text.trim()) return null;
        const newMsg = {
          id: "msg-" + Date.now(),
          channel,
          user: {
            name: this.state.user.name,
            avatar: this.state.user.avatar,
            badge: this.state.user.rankTitle,
            roleColor: "#00e5ff"
          },
          text: text.trim(),
          time: (/* @__PURE__ */ new Date()).toLocaleTimeString("th-TH", { hour: "2-digit", minute: "2-digit" })
        };
        this.state.chatMessages.push(newMsg);
        this.addXP(2);
        this.emit("chat:updated", this.state.chatMessages);
        this._simulateChatReplies(channel, text.trim());
        return newMsg;
      }
      _simulateChatReplies(channel, userMsg) {
        const botReplies = [
          { name: "Sakura_Blade", role: "\u{1F338} Moderator", color: "#f43f5e", text: "\u0E22\u0E34\u0E19\u0E14\u0E35\u0E40\u0E25\u0E22\u0E04\u0E23\u0E31\u0E1A! \u0E22\u0E34\u0E19\u0E14\u0E35\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E04\u0E38\u0E22\u0E01\u0E31\u0E19\u0E19\u0E30" },
          { name: "Khaosan_Aim", role: "\u26A1 Duelist", color: "#ffaa00", text: "\u0E0A\u0E47\u0E2D\u0E15\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E01\u0E35\u0E49\u0E15\u0E36\u0E07\u0E21\u0E32\u0E01 \u0E43\u0E04\u0E23\u0E2D\u0E22\u0E32\u0E01\u0E25\u0E07\u0E41\u0E23\u0E07\u0E01\u0E4C\u0E1A\u0E2D\u0E01\u0E40\u0E25\u0E22" },
          { name: "Gamer_TH_Bot", role: "\u{1F916} NEXUS Bot", color: "#a855f7", text: "\u0E2D\u0E22\u0E48\u0E32\u0E25\u0E37\u0E21\u0E41\u0E27\u0E30\u0E44\u0E1B\u0E14\u0E39\u0E41\u0E17\u0E47\u0E1A\u0E2B\u0E32\u0E15\u0E35\u0E49\u0E41\u0E25\u0E30\u0E17\u0E31\u0E27\u0E23\u0E4C\u0E19\u0E32\u0E40\u0E21\u0E19\u0E15\u0E4C\u0E44\u0E14\u0E49\u0E19\u0E30!" },
          { name: "Viper_Poison", role: "\u{1F451} Radiant", color: "#00ff88", text: "\u0E21\u0E35\u0E43\u0E04\u0E23\u0E14\u0E39\u0E41\u0E21\u0E15\u0E0A\u0E4C\u0E1E\u0E23\u0E35\u0E40\u0E21\u0E35\u0E22\u0E23\u0E4C\u0E23\u0E2D\u0E1A\u0E0A\u0E34\u0E07\u0E2A\u0E14\u0E1A\u0E49\u0E32\u0E07 \u0E40\u0E14\u0E37\u0E2D\u0E14\u0E08\u0E31\u0E14!" }
        ];
        setTimeout(() => {
          const randomReply = botReplies[Math.floor(Math.random() * botReplies.length)];
          const botMsg = {
            id: "msg-bot-" + Date.now(),
            channel,
            user: {
              name: randomReply.name,
              avatar: `https://images.unsplash.com/photo-${1535713875e3 + Math.floor(Math.random() * 500)}?auto=format&fit=crop&w=100&q=80`,
              badge: randomReply.role,
              roleColor: randomReply.color
            },
            text: randomReply.text,
            time: (/* @__PURE__ */ new Date()).toLocaleTimeString("th-TH", { hour: "2-digit", minute: "2-digit" })
          };
          this.state.chatMessages.push(botMsg);
          this.emit("chat:updated", this.state.chatMessages);
        }, 1400);
      }
      // Tournament Actions
      registerTournament(tournamentId, teamName) {
        const tour = this.state.tournaments.find((t) => t.id === tournamentId);
        if (!tour) return { success: false, message: "\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E41\u0E02\u0E48\u0E07" };
        if (tour.teamsRegistered >= tour.teamsMax) {
          return { success: false, message: "\u0E17\u0E35\u0E21\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E40\u0E15\u0E47\u0E21\u0E41\u0E25\u0E49\u0E27" };
        }
        tour.teamsRegistered++;
        this.state.user.stats.tournamentsEntered = (this.state.user.stats.tournamentsEntered || 0) + 1;
        this.addXP(100);
        this.emit("tournaments:updated", this.state.tournaments);
        return { success: true, message: `\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19\u0E17\u0E35\u0E21 "${teamName}" \u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08!` };
      }
      // Reviews
      addReview(reviewData) {
        const newRev = {
          id: "rev-" + Date.now(),
          gameId: reviewData.gameId,
          gameName: reviewData.gameName,
          author: this.state.user.name,
          avatar: this.state.user.avatar,
          overallRating: parseFloat(reviewData.overallRating) || 5,
          scores: {
            gameplay: parseFloat(reviewData.gameplay) || 9,
            graphics: parseFloat(reviewData.graphics) || 9,
            story: parseFloat(reviewData.story) || 8.5,
            soundtrack: parseFloat(reviewData.soundtrack) || 9
          },
          title: reviewData.title,
          content: reviewData.content,
          date: "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E2A\u0E31\u0E01\u0E04\u0E23\u0E39\u0E48",
          likes: 1
        };
        this.state.reviews.unshift(newRev);
        this.addXP(40);
        this.emit("reviews:updated", this.state.reviews);
        return newRev;
      }
      // Story Actions
      addStory(storyData) {
        const newStory = {
          id: "story-" + Date.now(),
          userId: this.state.user.id,
          userName: this.state.user.name,
          userTag: this.state.user.gamerTag,
          userAvatar: this.state.user.avatar,
          userLevel: this.state.user.level,
          type: storyData.type || "image",
          // 'image' | 'video' | 'text'
          mediaUrl: storyData.mediaUrl || null,
          caption: storyData.caption || "",
          tag: storyData.tag || "#GamerLife",
          badge: this.state.user.rankTitle,
          bgGradient: storyData.bgGradient || "linear-gradient(135deg, #7928CA, #FF0080)",
          createdAt: "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E2A\u0E31\u0E01\u0E04\u0E23\u0E39\u0E48",
          viewsCount: 1,
          reactions: { "\u{1F525}": 0, "\u{1F451}": 0, "\u26A1": 0, "\u{1F3AF}": 0, "\u2764\uFE0F": 0 }
        };
        this.state.stories.unshift(newStory);
        this.addXP(35);
        this.emit("stories:updated", this.state.stories);
        return newStory;
      }
      deleteStory(storyId) {
        this.state.stories = this.state.stories.filter((s) => s.id !== storyId);
        this.emit("stories:updated", this.state.stories);
      }
      reactStory(storyId, emoji) {
        const story = this.state.stories.find((s) => s.id === storyId);
        if (!story) return;
        if (!story.reactions) {
          story.reactions = { "\u{1F525}": 0, "\u{1F451}": 0, "\u26A1": 0, "\u{1F3AF}": 0, "\u2764\uFE0F": 0 };
        }
        story.reactions[emoji] = (story.reactions[emoji] || 0) + 1;
        this.addXP(2);
        this.emit("stories:updated", this.state.stories);
        return story.reactions[emoji];
      }
      getUserStories(userId) {
        return this.state.stories.filter((s) => s.userId === userId);
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
          this.emit("user:levelup", user);
        }
        this._syncCurrentUserToAccounts();
        this.emit("user:updated", user);
      }
      updateProfile(newData) {
        this.state.user = {
          ...this.state.user,
          ...newData
        };
        this._syncCurrentUserToAccounts();
        this.emit("user:updated", this.state.user);
      }
      // --- Social & Friends System (Strictly Registered User Accounts) ---
      getPlayers() {
        this.accounts = this._loadAccounts();
        const currentUserId = this.state.user?.id;
        const currentUserName = (this.state.user?.name || "").toLowerCase();
        const registeredPlayers = this.accounts.filter((acc) => acc.id !== currentUserId && (acc.name || "").toLowerCase() !== currentUserName).map((acc) => {
          const userFriends = this.state.user?.friends || [];
          const accFriends = acc.friends || [];
          const mutualCount = accFriends.filter((fId) => userFriends.includes(fId)).length;
          const primaryGame = acc.favoriteGames && acc.favoriteGames[0] || "Valorant";
          return {
            id: acc.id,
            name: acc.name,
            gamerTag: acc.gamerTag || "#0000",
            avatar: acc.avatar || "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=200&q=80",
            banner: acc.banner || "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
            level: acc.level || 1,
            rank: acc.rankTitle || "\u{1F331} Rookie Gamer",
            rankTitle: acc.rankTitle || "\u{1F331} Rookie Gamer",
            status: "online",
            statusText: "\u{1F7E2} \u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01 NEXUS TH \u2022 \u0E2D\u0E2D\u0E19\u0E44\u0E25\u0E19\u0E4C",
            primaryGame,
            favoriteGames: acc.favoriteGames || ["Valorant"],
            bio: acc.bio || "\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E41\u0E2B\u0E48\u0E07 NEXUS GAMING TH \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E23\u0E48\u0E27\u0E21\u0E15\u0E35\u0E49\u0E41\u0E25\u0E30\u0E40\u0E25\u0E48\u0E19\u0E40\u0E01\u0E21\u0E14\u0E49\u0E27\u0E22\u0E01\u0E31\u0E19!",
            mutualFriends: mutualCount,
            followersCount: (acc.following || []).length + 8,
            isRegisteredUser: true,
            email: acc.email
          };
        });
        return registeredPlayers;
      }
      getPlayerById(id) {
        if (!id) return null;
        const cleanId = id.toString();
        const all = this.getPlayers();
        let found = all.find(
          (p) => p.id === cleanId || p.name && p.name.toLowerCase() === cleanId.toLowerCase() || p.gamerTag === cleanId
        );
        if (found) return found;
        this.accounts = this._loadAccounts();
        const acc = this.accounts.find(
          (a) => a.id === cleanId || a.name && a.name.toLowerCase() === cleanId.toLowerCase() || a.gamerTag === cleanId || a.email && a.email.toLowerCase() === cleanId.toLowerCase()
        );
        if (acc) {
          return {
            id: acc.id,
            name: acc.name,
            gamerTag: acc.gamerTag || "#0000",
            avatar: acc.avatar || "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=200&q=80",
            banner: acc.banner || "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
            level: acc.level || 1,
            rank: acc.rankTitle || "\u{1F331} Rookie Gamer",
            rankTitle: acc.rankTitle || "\u{1F331} Rookie Gamer",
            status: "online",
            statusText: "\u{1F7E2} \u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01 NEXUS TH \u2022 \u0E2D\u0E2D\u0E19\u0E44\u0E25\u0E19\u0E4C",
            primaryGame: acc.favoriteGames && acc.favoriteGames[0] || "Valorant",
            favoriteGames: acc.favoriteGames || ["Valorant"],
            bio: acc.bio || "\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E41\u0E2B\u0E48\u0E07 NEXUS GAMING TH",
            mutualFriends: 1,
            followersCount: 15,
            isRegisteredUser: true
          };
        }
        return null;
      }
      isFriend(playerId) {
        if (!playerId || !this.state.user) return false;
        const friends = this.state.user.friends || [];
        if (friends.includes(playerId)) return true;
        const targetPlayer = this.getPlayerById(playerId);
        if (targetPlayer && friends.includes(targetPlayer.id)) return true;
        return false;
      }
      isPending(playerId) {
        if (!playerId || !this.state.user) return false;
        const sent = this.state.user.sentRequests || [];
        if (sent.includes(playerId)) return true;
        const targetPlayer = this.getPlayerById(playerId);
        if (targetPlayer && sent.includes(targetPlayer.id)) return true;
        return false;
      }
      hasIncomingRequest(playerId) {
        if (!playerId || !this.state.user) return false;
        const reqs = this.state.user.friendRequests || [];
        if (reqs.includes(playerId)) return true;
        const targetPlayer = this.getPlayerById(playerId);
        if (targetPlayer && reqs.includes(targetPlayer.id)) return true;
        return false;
      }
      isFollowing(playerId) {
        const following = this.state.user.following || [];
        return following.includes(playerId);
      }
      sendFriendRequest(playerId) {
        const user = this.state.user;
        if (!user) return { success: false, message: "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19" };
        if (!user.friends) user.friends = [];
        if (!user.sentRequests) user.sentRequests = [];
        if (!user.friendRequests) user.friendRequests = [];
        if (user.id === playerId || user.name.toLowerCase() === (playerId || "").toLowerCase()) {
          return { success: false, message: "\u0E04\u0E38\u0E13\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E15\u0E31\u0E27\u0E40\u0E2D\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E14\u0E49 \u{1F604}" };
        }
        if (this.isFriend(playerId)) {
          return { success: false, message: "\u0E04\u0E38\u0E13\u0E40\u0E1B\u0E47\u0E19\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E01\u0E31\u0E1A\u0E1C\u0E39\u0E49\u0E40\u0E25\u0E48\u0E19\u0E04\u0E19\u0E19\u0E35\u0E49\u0E2D\u0E22\u0E39\u0E48\u0E41\u0E25\u0E49\u0E27 \u{1F91D}" };
        }
        if (this.isPending(playerId)) {
          return { success: false, message: "\u0E04\u0E38\u0E13\u0E44\u0E14\u0E49\u0E2A\u0E48\u0E07\u0E04\u0E33\u0E02\u0E2D\u0E40\u0E1B\u0E47\u0E19\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E1B\u0E41\u0E25\u0E49\u0E27 \u0E01\u0E33\u0E25\u0E31\u0E07\u0E23\u0E2D\u0E01\u0E32\u0E23\u0E15\u0E2D\u0E1A\u0E23\u0E31\u0E1A \u23F3" };
        }
        if (this.hasIncomingRequest(playerId)) {
          return this.acceptFriendRequest(playerId);
        }
        user.sentRequests.push(playerId);
        this.accounts = this._loadAccounts();
        const targetAccount = this.accounts.find((a) => a.id === playerId || a.name && a.name.toLowerCase() === (playerId || "").toLowerCase());
        if (targetAccount) {
          if (!targetAccount.friendRequests) targetAccount.friendRequests = [];
          if (!targetAccount.friendRequests.includes(user.id)) {
            targetAccount.friendRequests.push(user.id);
          }
          this._saveAccounts();
        }
        this._syncCurrentUserToAccounts();
        this.addXP(10);
        this.emit("friends:updated", { type: "request_sent", playerId });
        this.emit("user:updated", this.state.user);
        const player = this.getPlayerById(playerId);
        const targetName = player ? player.name : "\u0E1C\u0E39\u0E49\u0E40\u0E25\u0E48\u0E19";
        return {
          success: true,
          message: `\u0E2A\u0E48\u0E07\u0E04\u0E33\u0E02\u0E2D\u0E40\u0E1B\u0E47\u0E19\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E16\u0E36\u0E07 ${targetName} \u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22\u0E41\u0E25\u0E49\u0E27! (+10 XP) \u{1F680}`
        };
      }
      acceptFriendRequest(playerId) {
        const user = this.state.user;
        if (!user.friends) user.friends = [];
        if (!user.friendRequests) user.friendRequests = [];
        if (!user.sentRequests) user.sentRequests = [];
        user.friendRequests = user.friendRequests.filter((id) => id !== playerId);
        user.sentRequests = user.sentRequests.filter((id) => id !== playerId);
        if (!user.friends.includes(playerId)) {
          user.friends.push(playerId);
        }
        this.accounts = this._loadAccounts();
        const targetAccount = this.accounts.find((a) => a.id === playerId || a.name && a.name.toLowerCase() === (playerId || "").toLowerCase());
        if (targetAccount) {
          if (!targetAccount.friends) targetAccount.friends = [];
          if (!targetAccount.friends.includes(user.id)) {
            targetAccount.friends.push(user.id);
          }
          if (!targetAccount.friendRequests) targetAccount.friendRequests = [];
          targetAccount.friendRequests = targetAccount.friendRequests.filter((id) => id !== user.id);
          if (!targetAccount.sentRequests) targetAccount.sentRequests = [];
          targetAccount.sentRequests = targetAccount.sentRequests.filter((id) => id !== user.id);
          this._saveAccounts();
        }
        this._syncCurrentUserToAccounts();
        this.addXP(25);
        this.emit("friends:updated", { type: "friend_added", playerId });
        this.emit("user:updated", this.state.user);
        const player = this.getPlayerById(playerId);
        const targetName = player ? player.name : "\u0E1C\u0E39\u0E49\u0E40\u0E25\u0E48\u0E19";
        return {
          success: true,
          message: `\u0E40\u0E1B\u0E47\u0E19\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E01\u0E31\u0E1A ${targetName} \u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22\u0E41\u0E25\u0E49\u0E27! (+25 XP) \u{1F389}`
        };
      }
      declineFriendRequest(playerId) {
        const user = this.state.user;
        if (!user.friendRequests) user.friendRequests = [];
        user.friendRequests = user.friendRequests.filter((id) => id !== playerId);
        this.accounts = this._loadAccounts();
        const targetAccount = this.accounts.find((a) => a.id === playerId || a.name && a.name.toLowerCase() === (playerId || "").toLowerCase());
        if (targetAccount) {
          if (!targetAccount.sentRequests) targetAccount.sentRequests = [];
          targetAccount.sentRequests = targetAccount.sentRequests.filter((id) => id !== user.id);
          this._saveAccounts();
        }
        this._syncCurrentUserToAccounts();
        this.emit("friends:updated", { type: "request_declined", playerId });
        this.emit("user:updated", this.state.user);
        const player = this.getPlayerById(playerId);
        const targetName = player ? player.name : "\u0E1C\u0E39\u0E49\u0E40\u0E25\u0E48\u0E19";
        return {
          success: true,
          message: `\u0E1B\u0E0F\u0E34\u0E40\u0E2A\u0E18\u0E04\u0E33\u0E02\u0E2D\u0E40\u0E1B\u0E47\u0E19\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E08\u0E32\u0E01 ${targetName} \u0E41\u0E25\u0E49\u0E27`
        };
      }
      cancelFriendRequest(playerId) {
        const user = this.state.user;
        if (!user.sentRequests) user.sentRequests = [];
        user.sentRequests = user.sentRequests.filter((id) => id !== playerId);
        this.accounts = this._loadAccounts();
        const targetAccount = this.accounts.find((a) => a.id === playerId || a.name && a.name.toLowerCase() === (playerId || "").toLowerCase());
        if (targetAccount) {
          if (!targetAccount.friendRequests) targetAccount.friendRequests = [];
          targetAccount.friendRequests = targetAccount.friendRequests.filter((id) => id !== user.id);
          this._saveAccounts();
        }
        this._syncCurrentUserToAccounts();
        this.emit("friends:updated", { type: "request_cancelled", playerId });
        this.emit("user:updated", this.state.user);
        return {
          success: true,
          message: "\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\u0E04\u0E33\u0E02\u0E2D\u0E40\u0E1B\u0E47\u0E19\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22\u0E41\u0E25\u0E49\u0E27"
        };
      }
      removeFriend(playerId) {
        const user = this.state.user;
        if (!user.friends) user.friends = [];
        user.friends = user.friends.filter((id) => id !== playerId);
        this.accounts = this._loadAccounts();
        const targetAccount = this.accounts.find((a) => a.id === playerId || a.name && a.name.toLowerCase() === (playerId || "").toLowerCase());
        if (targetAccount) {
          if (!targetAccount.friends) targetAccount.friends = [];
          targetAccount.friends = targetAccount.friends.filter((id) => id !== user.id);
          this._saveAccounts();
        }
        this._syncCurrentUserToAccounts();
        this.emit("friends:updated", { type: "friend_removed", playerId });
        this.emit("user:updated", this.state.user);
        const player = this.getPlayerById(playerId);
        const targetName = player ? player.name : "\u0E1C\u0E39\u0E49\u0E40\u0E25\u0E48\u0E19";
        return {
          success: true,
          message: `\u0E25\u0E1A ${targetName} \u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E23\u0E32\u0E22\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E41\u0E25\u0E49\u0E27`
        };
      }
      addFriendDirect(query) {
        const cleanQuery = (query || "").trim();
        if (!cleanQuery) {
          return { success: false, message: "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49, \u0E2D\u0E35\u0E40\u0E21\u0E25 \u0E2B\u0E23\u0E37\u0E2D GamerTag \u0E40\u0E0A\u0E48\u0E19 #5544 \u0E2B\u0E23\u0E37\u0E2D Agent_NeonX" };
        }
        const q = cleanQuery.toLowerCase();
        const user = this.state.user;
        if (user && (user.name.toLowerCase() === q || user.gamerTag && user.gamerTag.toLowerCase() === q || user.gamerTag && user.gamerTag.replace("#", "").toLowerCase() === q.replace("#", "") || `${user.name}${user.gamerTag}`.toLowerCase() === q.replace(/\s+/g, "") || user.email && user.email.toLowerCase() === q)) {
          return { success: false, message: "\u0E04\u0E38\u0E13\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E15\u0E31\u0E27\u0E40\u0E2D\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E14\u0E49 \u{1F604}" };
        }
        this.accounts = this._loadAccounts();
        const targetAcc = this.accounts.find((acc) => {
          if (acc.id === user?.id) return false;
          const accName = (acc.name || "").toLowerCase();
          const accTag = (acc.gamerTag || "").toLowerCase();
          const accTagRaw = accTag.replace("#", "");
          const accEmail = (acc.email || "").toLowerCase();
          const rawQ = q.replace("#", "");
          const matchNameExact = accName === q;
          const matchTagExact = accTag === q || accTagRaw === rawQ;
          const matchFullTag = `${accName}${accTag}` === q.replace(/\s+/g, "");
          const matchEmailExact = accEmail === q;
          const matchNamePartial = q.length >= 2 && accName.includes(q);
          return matchNameExact || matchTagExact || matchFullTag || matchEmailExact || matchNamePartial;
        });
        if (targetAcc) {
          return this.sendFriendRequest(targetAcc.id);
        }
        return {
          success: false,
          message: `\u274C \u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E1A\u0E31\u0E0D\u0E0A\u0E35\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49 "${cleanQuery}" \u0E43\u0E19\u0E23\u0E30\u0E1A\u0E1A (\u0E23\u0E30\u0E1A\u0E1A\u0E08\u0E30\u0E04\u0E49\u0E19\u0E2B\u0E32\u0E40\u0E09\u0E1E\u0E32\u0E30\u0E1A\u0E31\u0E0D\u0E0A\u0E35\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E17\u0E35\u0E48\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19\u0E44\u0E27\u0E49\u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19)`
        };
      }
      toggleFollow(playerId) {
        const user = this.state.user;
        if (!user.following) user.following = [];
        const idx = user.following.indexOf(playerId);
        let isNowFollowing = false;
        const player = this.getPlayerById(playerId);
        const targetName = player ? player.name : "\u0E1C\u0E39\u0E49\u0E40\u0E25\u0E48\u0E19";
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
        this.emit("friends:updated", { type: "follow_toggled", playerId, following: isNowFollowing });
        this.emit("user:updated", this.state.user);
        return {
          success: true,
          following: isNowFollowing,
          message: isNowFollowing ? `\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21 ${targetName} \u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22\u0E41\u0E25\u0E49\u0E27 (+5 XP)` : `\u0E40\u0E25\u0E34\u0E01\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21 ${targetName} \u0E41\u0E25\u0E49\u0E27`
        };
      }
      // Theme & Navigation
      setTheme(themeName) {
        this.state.theme = themeName;
        document.documentElement.setAttribute("data-theme", themeName);
        this.emit("theme:changed", themeName);
      }
      setTab(tabName) {
        this.state.activeTab = tabName;
        this.emit("tab:changed", tabName);
      }
      setGameFilter(gameId) {
        this.state.activeGameFilter = gameId;
        this.emit("filter:game", gameId);
      }
      setCategoryFilter(category) {
        this.state.activeCategoryFilter = category;
        this.emit("filter:category", category);
      }
      setSearchQuery(q) {
        this.state.searchQuery = q;
        this.emit("search:updated", q);
      }
      // --- Data Persistence & Backup Management APIs ---
      save() {
        this._saveState();
        this._saveAccounts(this.accounts);
        return {
          success: true,
          timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString(),
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
          if (typeof localStorage !== "undefined") {
            const stateStr = localStorage.getItem(this.STORAGE_KEY) || "";
            const accStr = localStorage.getItem(this.ACCOUNTS_KEY) || "";
            storageBytes = new Blob([stateStr, accStr]).size;
          }
        } catch (e) {
        }
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
          const savedChan = localStorage.getItem("NEXUS_CUSTOM_TEXT_CHANNELS");
          if (savedChan) customChannels = JSON.parse(savedChan);
        } catch (e) {
        }
        const backupData = {
          app: "NEXUS_GAMING_TH",
          version: "2.5.0",
          exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
          state: JSON.parse(JSON.stringify(this.state)),
          accounts: JSON.parse(JSON.stringify(this.accounts)),
          customTextChannels: customChannels
        };
        return backupData;
      }
      importBackup(backupData) {
        try {
          const data = typeof backupData === "string" ? JSON.parse(backupData) : backupData;
          if (!data || !data.state) {
            return { success: false, message: "\u0E44\u0E1F\u0E25\u0E4C\u0E2A\u0E33\u0E23\u0E2D\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07 (Invalid Backup Structure)" };
          }
          if (Array.isArray(data.accounts) && data.accounts.length) {
            this.accounts = data.accounts;
            this._saveAccounts(this.accounts);
          }
          if (Array.isArray(data.customTextChannels) && typeof localStorage !== "undefined") {
            localStorage.setItem("NEXUS_CUSTOM_TEXT_CHANNELS", JSON.stringify(data.customTextChannels));
          }
          this.state = {
            ...this.state,
            ...data.state
          };
          this._saveState();
          this.emit("*", this.state);
          this.emit("auth:changed", this.state.isAuthenticated);
          this.emit("user:updated", this.state.user);
          this.emit("posts:updated", this.state.posts);
          this.emit("squads:updated", this.state.squads);
          this.emit("reviews:updated", this.state.reviews);
          this.emit("chat:updated", this.state.chatMessages);
          return {
            success: true,
            message: "\u{1F389} \u0E01\u0E39\u0E49\u0E04\u0E37\u0E19\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08\u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22\u0E41\u0E25\u0E49\u0E27!",
            stats: this.getStatsSummary()
          };
        } catch (e) {
          console.error("Import backup failed:", e);
          return { success: false, message: "\u0E40\u0E01\u0E34\u0E14\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14\u0E43\u0E19\u0E01\u0E32\u0E23\u0E2D\u0E48\u0E32\u0E19\u0E44\u0E1F\u0E25\u0E4C\u0E2A\u0E33\u0E23\u0E2D\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25: " + e.message };
        }
      }
      resetToDefaultData() {
        try {
          if (typeof localStorage !== "undefined") {
            localStorage.removeItem(this.STORAGE_KEY);
            localStorage.removeItem(this.ACCOUNTS_KEY);
            localStorage.removeItem("NEXUS_CUSTOM_TEXT_CHANNELS");
          }
        } catch (e) {
        }
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
          bookmarks: ["post-1", "post-4"],
          theme: "cyber-purple",
          soundEnabled: true,
          activeTab: "feed",
          activeGameFilter: "all",
          activeCategoryFilter: "all",
          searchQuery: ""
        };
        this._saveState();
        this.emit("*", this.state);
        this.emit("auth:changed", true);
        this.emit("user:updated", this.state.user);
        this.emit("posts:updated", this.state.posts);
        this.emit("squads:updated", this.state.squads);
        this.emit("reviews:updated", this.state.reviews);
        this.emit("chat:updated", this.state.chatMessages);
        return { success: true, message: "\u0E23\u0E35\u0E40\u0E0B\u0E47\u0E15\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19 (Default Demo Data) \u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08\u0E41\u0E25\u0E49\u0E27!" };
      }
    };
    store = new Store();
  }
});

// js/audio.js
var SoundSynthesizer, sound;
var init_audio = __esm({
  "js/audio.js"() {
    SoundSynthesizer = class {
      constructor() {
        this.ctx = null;
        this.enabled = true;
        this.STORAGE_KEY = "NEXUS_SOUND_VOLUME_PCT";
        this.volumeLevel = this._loadVolume();
        this.volume = this.volumeLevel / 100 * 0.12;
        this.listeners = /* @__PURE__ */ new Set();
        this.initContext = this.initContext.bind(this);
        if (typeof window !== "undefined") {
          window.addEventListener("pointerdown", () => this.initContext(), { once: true, passive: true });
        }
      }
      _loadVolume() {
        try {
          const saved = localStorage.getItem(this.STORAGE_KEY);
          if (saved !== null) return parseInt(saved, 10);
        } catch (e) {
        }
        return 40;
      }
      _saveVolume() {
        try {
          localStorage.setItem(this.STORAGE_KEY, this.volumeLevel.toString());
        } catch (e) {
        }
      }
      setVolume(percent, playSample = true) {
        const clamped = Math.max(0, Math.min(100, parseInt(percent, 10) || 0));
        this.volumeLevel = clamped;
        this.enabled = clamped > 0;
        this.volume = clamped / 100 * 0.12;
        this._saveVolume();
        if (this.enabled && playSample) {
          this.initContext();
          this.play("click");
        }
        this._notify();
        return this.volumeLevel;
      }
      getVolume() {
        return this.volumeLevel;
      }
      getIcon() {
        if (!this.enabled || this.volumeLevel === 0) return "\u{1F507}";
        if (this.volumeLevel < 35) return "\u{1F508}";
        if (this.volumeLevel < 70) return "\u{1F509}";
        return "\u{1F50A}";
      }
      subscribe(fn) {
        this.listeners.add(fn);
        return () => this.listeners.delete(fn);
      }
      _notify() {
        this.listeners.forEach((fn) => fn({ volume: this.volumeLevel, enabled: this.enabled, icon: this.getIcon() }));
      }
      initContext() {
        if (!this.ctx) {
          const AudioContext = window.AudioContext || window.webkitAudioContext;
          if (AudioContext) {
            this.ctx = new AudioContext();
          }
        }
        if (this.ctx && this.ctx.state === "suspended") {
          this.ctx.resume();
        }
      }
      toggle() {
        if (this.volumeLevel > 0) {
          this.prevVolume = this.volumeLevel;
          this.setVolume(0, false);
        } else {
          this.setVolume(this.prevVolume || 40, true);
        }
        return this.enabled;
      }
      play(type) {
        if (!this.enabled) return;
        this.initContext();
        if (!this.ctx) return;
        try {
          const now = this.ctx.currentTime;
          switch (type) {
            case "hover":
              this._playHover(now);
              break;
            case "click":
              this._playClick(now);
              break;
            case "tab":
              this._playTab(now);
              break;
            case "join":
              this._playJoin(now);
              break;
            case "levelUp":
              this._playLevelUp(now);
              break;
            case "message":
              this._playMessage(now);
              break;
            case "like":
              this._playLike(now);
              break;
            case "success":
              this._playSuccess(now);
              break;
            case "laser":
              this._playLaser(now);
              break;
            case "fire":
              this._playFire(now);
              break;
            case "zap":
              this._playZap(now);
              break;
            case "crown":
              this._playCrown(now);
              break;
            case "target":
              this._playTarget(now);
              break;
            case "heart":
              this._playHeart(now);
              break;
            case "whoosh":
              this._playWhoosh(now);
              break;
            case "sparkle":
              this._playSparkle(now);
              break;
            case "glitch":
              this._playGlitch(now);
              break;
            default:
              this._playClick(now);
          }
        } catch (e) {
          console.warn("Audio play error:", e);
        }
      }
      _createGain(now, duration, peak = 1) {
        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(1e-3, now);
        gain.gain.exponentialRampToValueAtTime(this.volume * peak, now + 0.01);
        gain.gain.exponentialRampToValueAtTime(1e-4, now + duration);
        gain.connect(this.ctx.destination);
        return gain;
      }
      _playHover(now) {
        const osc = this.ctx.createOscillator();
        const gain = this._createGain(now, 0.06, 0.25);
        osc.type = "sine";
        osc.frequency.setValueAtTime(480, now);
        osc.frequency.exponentialRampToValueAtTime(620, now + 0.06);
        osc.connect(gain);
        osc.start(now);
        osc.stop(now + 0.06);
      }
      _playClick(now) {
        const osc = this.ctx.createOscillator();
        const gain = this._createGain(now, 0.08, 0.6);
        osc.type = "triangle";
        osc.frequency.setValueAtTime(800, now);
        osc.frequency.exponentialRampToValueAtTime(240, now + 0.08);
        osc.connect(gain);
        osc.start(now);
        osc.stop(now + 0.08);
      }
      _playTab(now) {
        const osc = this.ctx.createOscillator();
        const gain = this._createGain(now, 0.12, 0.4);
        osc.type = "sine";
        osc.frequency.setValueAtTime(523.25, now);
        osc.frequency.setValueAtTime(659.25, now + 0.05);
        osc.connect(gain);
        osc.start(now);
        osc.stop(now + 0.12);
      }
      _playJoin(now) {
        const osc1 = this.ctx.createOscillator();
        const osc2 = this.ctx.createOscillator();
        const gain = this._createGain(now, 0.25, 0.7);
        osc1.type = "sine";
        osc2.type = "triangle";
        osc1.frequency.setValueAtTime(440, now);
        osc1.frequency.exponentialRampToValueAtTime(880, now + 0.15);
        osc2.frequency.setValueAtTime(554.37, now);
        osc2.frequency.exponentialRampToValueAtTime(1108.73, now + 0.18);
        osc1.connect(gain);
        osc2.connect(gain);
        osc1.start(now);
        osc2.start(now);
        osc1.stop(now + 0.25);
        osc2.stop(now + 0.25);
      }
      _playLevelUp(now) {
        const notes = [440, 554.37, 659.25, 880, 1108.73, 1318.5];
        notes.forEach((freq, idx) => {
          const startTime = now + idx * 0.07;
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          gain.gain.setValueAtTime(1e-3, startTime);
          gain.gain.exponentialRampToValueAtTime(this.volume * 0.85, startTime + 0.01);
          gain.gain.exponentialRampToValueAtTime(1e-4, startTime + 0.28);
          gain.connect(this.ctx.destination);
          osc.type = "triangle";
          osc.frequency.setValueAtTime(freq, startTime);
          osc.connect(gain);
          osc.start(startTime);
          osc.stop(startTime + 0.3);
        });
      }
      _playMessage(now) {
        const osc = this.ctx.createOscillator();
        const gain = this._createGain(now, 0.15, 0.5);
        osc.type = "sine";
        osc.frequency.setValueAtTime(880, now);
        osc.frequency.exponentialRampToValueAtTime(1320, now + 0.08);
        osc.connect(gain);
        osc.start(now);
        osc.stop(now + 0.15);
      }
      _playLike(now) {
        const osc = this.ctx.createOscillator();
        const gain = this._createGain(now, 0.12, 0.5);
        osc.type = "sine";
        osc.frequency.setValueAtTime(600, now);
        osc.frequency.exponentialRampToValueAtTime(1e3, now + 0.1);
        osc.connect(gain);
        osc.start(now);
        osc.stop(now + 0.12);
      }
      _playSuccess(now) {
        const osc = this.ctx.createOscillator();
        const gain = this._createGain(now, 0.2, 0.6);
        osc.type = "triangle";
        osc.frequency.setValueAtTime(523.25, now);
        osc.frequency.setValueAtTime(783.99, now + 0.09);
        osc.connect(gain);
        osc.start(now);
        osc.stop(now + 0.2);
      }
      _playLaser(now) {
        const osc = this.ctx.createOscillator();
        const gain = this._createGain(now, 0.15, 0.7);
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(1800, now);
        osc.frequency.exponentialRampToValueAtTime(120, now + 0.15);
        osc.connect(gain);
        osc.start(now);
        osc.stop(now + 0.15);
      }
      _playFire(now) {
        const osc = this.ctx.createOscillator();
        const gain = this._createGain(now, 0.22, 0.8);
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(180, now);
        osc.frequency.linearRampToValueAtTime(620, now + 0.12);
        osc.frequency.exponentialRampToValueAtTime(80, now + 0.22);
        osc.connect(gain);
        osc.start(now);
        osc.stop(now + 0.22);
      }
      _playZap(now) {
        [1200, 1800, 2400].forEach((freq, idx) => {
          const startTime = now + idx * 0.03;
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          gain.gain.setValueAtTime(1e-3, startTime);
          gain.gain.exponentialRampToValueAtTime(this.volume * 0.7, startTime + 5e-3);
          gain.gain.exponentialRampToValueAtTime(1e-4, startTime + 0.08);
          gain.connect(this.ctx.destination);
          osc.type = "sawtooth";
          osc.frequency.setValueAtTime(freq, startTime);
          osc.frequency.linearRampToValueAtTime(freq / 2, startTime + 0.08);
          osc.connect(gain);
          osc.start(startTime);
          osc.stop(startTime + 0.08);
        });
      }
      _playCrown(now) {
        [523.25, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
          const startTime = now + idx * 0.04;
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          gain.gain.setValueAtTime(1e-3, startTime);
          gain.gain.exponentialRampToValueAtTime(this.volume * 0.6, startTime + 0.01);
          gain.gain.exponentialRampToValueAtTime(1e-4, startTime + 0.25);
          gain.connect(this.ctx.destination);
          osc.type = "sine";
          osc.frequency.setValueAtTime(freq, startTime);
          osc.connect(gain);
          osc.start(startTime);
          osc.stop(startTime + 0.25);
        });
      }
      _playTarget(now) {
        const osc = this.ctx.createOscillator();
        const gain = this._createGain(now, 0.2, 0.9);
        osc.type = "sine";
        osc.frequency.setValueAtTime(1760, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.2);
        osc.connect(gain);
        osc.start(now);
        osc.stop(now + 0.2);
      }
      _playHeart(now) {
        const osc = this.ctx.createOscillator();
        const gain = this._createGain(now, 0.18, 0.6);
        osc.type = "triangle";
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.1);
        osc.connect(gain);
        osc.start(now);
        osc.stop(now + 0.18);
      }
      _playWhoosh(now) {
        const osc = this.ctx.createOscillator();
        const gain = this._createGain(now, 0.18, 0.45);
        osc.type = "sine";
        osc.frequency.setValueAtTime(300, now);
        osc.frequency.exponentialRampToValueAtTime(1400, now + 0.09);
        osc.frequency.exponentialRampToValueAtTime(200, now + 0.18);
        osc.connect(gain);
        osc.start(now);
        osc.stop(now + 0.18);
      }
      _playSparkle(now) {
        [1046.5, 1318.51, 1567.98, 2093].forEach((freq, idx) => {
          const startTime = now + idx * 0.04;
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          gain.gain.setValueAtTime(1e-3, startTime);
          gain.gain.exponentialRampToValueAtTime(this.volume * 0.5, startTime + 5e-3);
          gain.gain.exponentialRampToValueAtTime(1e-4, startTime + 0.15);
          gain.connect(this.ctx.destination);
          osc.type = "sine";
          osc.frequency.setValueAtTime(freq, startTime);
          osc.connect(gain);
          osc.start(startTime);
          osc.stop(startTime + 0.15);
        });
      }
      _playGlitch(now) {
        const osc = this.ctx.createOscillator();
        const gain = this._createGain(now, 0.1, 0.7);
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(2200, now);
        osc.frequency.setValueAtTime(350, now + 0.03);
        osc.frequency.setValueAtTime(1800, now + 0.06);
        osc.connect(gain);
        osc.start(now);
        osc.stop(now + 0.1);
      }
    };
    sound = new SoundSynthesizer();
  }
});

// js/components/voiceChat.js
var voiceChat_exports = {};
__export(voiceChat_exports, {
  INITIAL_VOICE_CHANNELS: () => INITIAL_VOICE_CHANNELS,
  voiceManager: () => voiceManager
});
var INITIAL_VOICE_CHANNELS, VoiceChatManager, voiceManager;
var init_voiceChat = __esm({
  "js/components/voiceChat.js"() {
    init_store();
    init_audio();
    INITIAL_VOICE_CHANNELS = [
      {
        id: "vc-general",
        name: "\u0E2B\u0E49\u0E2D\u0E07\u0E1E\u0E39\u0E14\u0E04\u0E38\u0E22\u0E17\u0E31\u0E48\u0E27\u0E44\u0E1B (Lounge Voice)",
        icon: "\u{1F50A}",
        category: "general",
        members: [
          { id: "u-1", name: "Agent_NeonX", avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=150&q=80", isSpeaking: false, isMuted: false, role: "Radiant Duelist" },
          { id: "u-2", name: "Khaosan_Clutcher", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80", isSpeaking: true, isMuted: false, role: "Tournament MVP" },
          { id: "u-3", name: "Valkyrie_TH", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80", isSpeaking: false, isMuted: true, role: "Controller" }
        ]
      },
      {
        id: "vc-valorant",
        name: "Valorant Ranked #1 (Competitive)",
        icon: "\u{1F3AF}",
        category: "valorant",
        members: [
          { id: "u-4", name: "Sova_ArrowKing", avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=150&q=80", isSpeaking: false, isMuted: false, role: "Initiator" },
          { id: "u-5", name: "ShadowNinja", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80", isSpeaking: false, isMuted: false, role: "Duelist" }
        ]
      },
      {
        id: "vc-raid",
        name: "Raid Party (Wukong & MMO Boss)",
        icon: "\u2694\uFE0F",
        category: "mmo",
        members: [
          { id: "u-6", name: "Destiny_Hunter", avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80", isSpeaking: true, isMuted: false, role: "Raid Lead" }
        ]
      },
      {
        id: "vc-chill",
        name: "Gamer Chill & Music Talk",
        icon: "\u2615",
        category: "general",
        members: [
          { id: "u-7", name: "CyberDJ", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80", isSpeaking: false, isMuted: false, role: "Audio Streamer" }
        ]
      }
    ];
    VoiceChatManager = class {
      constructor() {
        this.STORAGE_KEY = "NEXUS_VOICE_CHANNELS_V1";
        this.channels = this._loadChannels();
        this.state = {
          connected: false,
          channelId: null,
          channelName: "",
          isMuted: false,
          isDeafened: false,
          isSpeaking: false,
          voiceLevel: 0,
          micPermission: "prompt",
          // 'prompt' | 'granted' | 'denied' | 'simulated'
          members: []
        };
        this.mediaStream = null;
        this.audioContext = null;
        this.analyser = null;
        this.dataArray = null;
        this.animFrameId = null;
        this.botSpeakingInterval = null;
        this.listeners = /* @__PURE__ */ new Set();
      }
      _loadChannels() {
        try {
          const saved = localStorage.getItem(this.STORAGE_KEY);
          if (saved) return JSON.parse(saved);
        } catch (e) {
        }
        return [...INITIAL_VOICE_CHANNELS];
      }
      _saveChannels() {
        try {
          localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.channels));
        } catch (e) {
        }
      }
      addVoiceChannel({ name, icon, category, slots, topic }) {
        const newChannel = {
          id: `vc-custom-${Date.now()}`,
          name: name.trim(),
          icon: icon || "\u{1F50A}",
          category: category || "general",
          slots: slots || 5,
          topic: topic || "",
          isCustom: true,
          createdBy: store.state.user.name,
          members: []
        };
        this.channels.unshift(newChannel);
        this._saveChannels();
        this._notify();
        return newChannel;
      }
      deleteVoiceChannel(channelId) {
        this.channels = this.channels.filter((c) => c.id !== channelId);
        this._saveChannels();
        if (this.state.channelId === channelId) {
          this.disconnect();
        }
        this._notify();
      }
      subscribe(listener) {
        this.listeners.add(listener);
        return () => this.listeners.delete(listener);
      }
      _notify() {
        this.listeners.forEach((fn) => fn(this.state));
      }
      async connect(channelId) {
        const channel = this.channels.find((c) => c.id === channelId) || this.channels[0];
        sound.play("join");
        const currentUser = store.state.user;
        const initialMembers = [
          {
            id: "me",
            name: currentUser.name || "Gamer (\u0E04\u0E38\u0E13)",
            avatar: currentUser.avatar,
            isSpeaking: false,
            isMuted: this.state.isMuted,
            isMe: true,
            role: currentUser.rankTitle || "Player"
          },
          ...channel.members.map((m) => ({ ...m }))
        ];
        this.state.connected = true;
        this.state.channelId = channel.id;
        this.state.channelName = channel.name;
        this.state.members = initialMembers;
        this._notify();
        await this.initMicrophone();
        this.startBotSpeakingLoop();
        this.updateFloatingVoiceDock();
      }
      async initMicrophone() {
        try {
          if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            const stream = await navigator.mediaDevices.getUserMedia({
              audio: {
                echoCancellation: true,
                noiseSuppression: true,
                autoGainControl: true
              }
            });
            this.mediaStream = stream;
            this.state.micPermission = "granted";
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) {
              this.audioContext = new AudioContext();
              const source = this.audioContext.createMediaStreamSource(stream);
              this.analyser = this.audioContext.createAnalyser();
              this.analyser.fftSize = 64;
              this.analyser.smoothingTimeConstant = 0.6;
              source.connect(this.analyser);
              this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
              this.startVoiceAnalysis();
            }
          } else {
            this.state.micPermission = "simulated";
            this.startSimulatedVoiceAnalysis();
          }
        } catch (err) {
          console.warn("Microphone access not granted or unavailable, falling back to simulated voice meter:", err);
          this.state.micPermission = "simulated";
          this.startSimulatedVoiceAnalysis();
        }
        this._notify();
      }
      startVoiceAnalysis() {
        if (this.animFrameId) {
          clearInterval(this.animFrameId);
          this.animFrameId = null;
        }
        this.animFrameId = setInterval(() => {
          if (!this.state.connected) {
            clearInterval(this.animFrameId);
            return;
          }
          if (this.analyser && !this.state.isMuted) {
            this.analyser.getByteFrequencyData(this.dataArray);
            let sum = 0;
            for (let i = 0; i < this.dataArray.length; i++) {
              sum += this.dataArray[i];
            }
            const avg = sum / this.dataArray.length;
            const normalized = Math.min(100, Math.round(avg / 255 * 100 * 2.2));
            this.state.voiceLevel = normalized;
            const isSpeaking = normalized > 14;
            if (this.state.isSpeaking !== isSpeaking) {
              this.state.isSpeaking = isSpeaking;
              const me = this.state.members.find((m) => m.isMe);
              if (me) me.isSpeaking = isSpeaking;
              this._notify();
            }
            const meterBar = document.getElementById("voice-live-meter-fill");
            if (meterBar) {
              meterBar.style.width = `${normalized}%`;
              meterBar.style.backgroundColor = isSpeaking ? "#00ff88" : "var(--primary)";
            }
          } else {
            this.state.voiceLevel = 0;
            this.state.isSpeaking = false;
          }
        }, 60);
      }
      startSimulatedVoiceAnalysis() {
        if (this.animFrameId) cancelAnimationFrame(this.animFrameId);
        const checkLevel = () => {
          if (!this.state.connected) return;
          if (!this.state.isMuted) {
            const randomActive = Math.random() > 0.65;
            const level = randomActive ? Math.floor(Math.random() * 55 + 25) : Math.floor(Math.random() * 8);
            this.state.voiceLevel = level;
            const isSpeaking = level > 20;
            if (this.state.isSpeaking !== isSpeaking) {
              this.state.isSpeaking = isSpeaking;
              const me = this.state.members.find((m) => m.isMe);
              if (me) me.isSpeaking = isSpeaking;
              this._notify();
            }
            const meterBar = document.getElementById("voice-live-meter-fill");
            if (meterBar) {
              meterBar.style.width = `${level}%`;
              meterBar.style.backgroundColor = isSpeaking ? "#00ff88" : "var(--primary)";
            }
          } else {
            this.state.voiceLevel = 0;
            this.state.isSpeaking = false;
          }
          this.animFrameId = setTimeout(() => requestAnimationFrame(checkLevel), 120);
        };
        requestAnimationFrame(checkLevel);
      }
      startBotSpeakingLoop() {
        if (this.botSpeakingInterval) clearInterval(this.botSpeakingInterval);
        this.botSpeakingInterval = setInterval(() => {
          if (!this.state.connected) return;
          const otherMembers = this.state.members.filter((m) => !m.isMe && !m.isMuted);
          if (otherMembers.length > 0) {
            const target = otherMembers[Math.floor(Math.random() * otherMembers.length)];
            target.isSpeaking = true;
            this._notify();
            setTimeout(() => {
              if (target) {
                target.isSpeaking = false;
                this._notify();
              }
            }, 1800 + Math.random() * 1600);
          }
        }, 4500);
      }
      toggleMute() {
        this.state.isMuted = !this.state.isMuted;
        sound.play(this.state.isMuted ? "click" : "laser");
        if (this.mediaStream) {
          this.mediaStream.getAudioTracks().forEach((track) => {
            track.enabled = !this.state.isMuted;
          });
        }
        const me = this.state.members.find((m) => m.isMe);
        if (me) {
          me.isMuted = this.state.isMuted;
          if (this.state.isMuted) me.isSpeaking = false;
        }
        this._notify();
        this.updateFloatingVoiceDock();
      }
      toggleDeafen() {
        this.state.isDeafened = !this.state.isDeafened;
        sound.play("click");
        if (this.state.isDeafened && !this.state.isMuted) {
          this.toggleMute();
        }
        this._notify();
        this.updateFloatingVoiceDock();
      }
      disconnect() {
        sound.play("tab");
        this.state.connected = false;
        this.state.channelId = null;
        this.state.channelName = "";
        this.state.members = [];
        this.state.isSpeaking = false;
        this.state.voiceLevel = 0;
        if (this.mediaStream) {
          this.mediaStream.getTracks().forEach((t) => t.stop());
          this.mediaStream = null;
        }
        if (this.audioContext && this.audioContext.state !== "closed") {
          this.audioContext.close().catch(() => {
          });
          this.audioContext = null;
        }
        if (this.animFrameId) {
          cancelAnimationFrame(this.animFrameId);
          clearTimeout(this.animFrameId);
        }
        if (this.botSpeakingInterval) {
          clearInterval(this.botSpeakingInterval);
        }
        this._notify();
        this.updateFloatingVoiceDock();
      }
      playVoiceSoundboard(soundType) {
        sound.play(soundType);
        const me = this.state.members.find((m) => m.isMe);
        if (me) {
          me.isSpeaking = true;
          this._notify();
          setTimeout(() => {
            if (me && !this.state.isSpeaking) {
              me.isSpeaking = false;
              this._notify();
            }
          }, 1e3);
        }
      }
      updateFloatingVoiceDock() {
        let dock = document.getElementById("nexus-floating-voice-dock");
        if (!this.state.connected) {
          if (dock) dock.style.display = "none";
          return;
        }
        if (!dock) {
          dock = document.createElement("div");
          dock.id = "nexus-floating-voice-dock";
          dock.className = "voice-dock-widget animate-float";
          document.body.appendChild(dock);
        }
        dock.style.display = "flex";
        dock.innerHTML = `
      <div class="voice-dock-info" id="btn-dock-open-lounge">
        <div class="voice-dock-ping">
          <span class="ping-dot"></span>
          <span class="ping-text">Voice Connected</span>
        </div>
        <div class="voice-dock-channel-title">
          \u{1F50A} ${this.state.channelName}
        </div>
        <div class="voice-dock-members-preview">
          ${this.state.members.map((m) => `
            <img src="${m.avatar}" alt="${m.name}" class="dock-member-mini-avatar ${m.isSpeaking ? "speaking" : ""}" title="${m.name} ${m.isSpeaking ? "(\u0E01\u0E33\u0E25\u0E31\u0E07\u0E1E\u0E39\u0E14)" : ""}">
          `).join("")}
        </div>
      </div>
      <div class="voice-dock-actions">
        <button class="btn-dock-voice-ctrl ${this.state.isMuted ? "muted" : ""}" id="btn-dock-mute" title="${this.state.isMuted ? "\u0E40\u0E1B\u0E34\u0E14\u0E44\u0E21\u0E04\u0E4C" : "\u0E1B\u0E34\u0E14\u0E44\u0E21\u0E04\u0E4C"}">
          ${this.state.isMuted ? "\u{1F507}" : "\u{1F399}\uFE0F"}
        </button>
        <button class="btn-dock-voice-ctrl ${this.state.isDeafened ? "deafened" : ""}" id="btn-dock-deafen" title="${this.state.isDeafened ? "\u0E40\u0E1B\u0E34\u0E14\u0E2B\u0E39\u0E1F\u0E31\u0E07" : "\u0E1B\u0E34\u0E14\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E2B\u0E39\u0E1F\u0E31\u0E07"}">
          ${this.state.isDeafened ? "\u{1F515}" : "\u{1F3A7}"}
        </button>
        <button class="btn-dock-voice-ctrl disconnect" id="btn-dock-disconnect" title="\u0E15\u0E31\u0E14\u0E01\u0E32\u0E23\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D">
          \u{1F534}
        </button>
      </div>
    `;
        const openLounge = dock.querySelector("#btn-dock-open-lounge");
        if (openLounge) {
          openLounge.addEventListener("click", () => {
            sound.play("click");
            store.setTab("chat");
          });
        }
        const muteBtn = dock.querySelector("#btn-dock-mute");
        if (muteBtn) {
          muteBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            this.toggleMute();
          });
        }
        const deafenBtn = dock.querySelector("#btn-dock-deafen");
        if (deafenBtn) {
          deafenBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            this.toggleDeafen();
          });
        }
        const discBtn = dock.querySelector("#btn-dock-disconnect");
        if (discBtn) {
          discBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            this.disconnect();
          });
        }
      }
    };
    voiceManager = new VoiceChatManager();
  }
});

// js/app.js
init_store();
init_audio();

// js/components/hero.js
function initHeroCanvas() {
  const canvas = document.getElementById("hero-canvas");
  if (!canvas || !canvas.getContext) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const drawStaticBackdrop = () => {
    const width = canvas.width = canvas.offsetWidth;
    const height = canvas.height = canvas.offsetHeight;
    ctx.clearRect(0, 0, width, height);
    const grad1 = ctx.createRadialGradient(width * 0.25, height * 0.35, 10, width * 0.25, height * 0.35, width * 0.4);
    grad1.addColorStop(0, "rgba(168, 85, 247, 0.08)");
    grad1.addColorStop(1, "rgba(168, 85, 247, 0)");
    ctx.fillStyle = grad1;
    ctx.fillRect(0, 0, width, height);
    const grad2 = ctx.createRadialGradient(width * 0.8, height * 0.6, 10, width * 0.8, height * 0.6, width * 0.35);
    grad2.addColorStop(0, "rgba(0, 229, 255, 0.06)");
    grad2.addColorStop(1, "rgba(0, 229, 255, 0)");
    ctx.fillStyle = grad2;
    ctx.fillRect(0, 0, width, height);
    const staticStars = [
      { x: 0.15, y: 0.25, r: 1.5, color: "rgba(0, 229, 255, 0.4)" },
      { x: 0.35, y: 0.7, r: 1.2, color: "rgba(168, 85, 247, 0.3)" },
      { x: 0.72, y: 0.2, r: 1.8, color: "rgba(0, 229, 255, 0.35)" },
      { x: 0.88, y: 0.65, r: 1.4, color: "rgba(255, 0, 128, 0.3)" },
      { x: 0.52, y: 0.85, r: 1.2, color: "rgba(0, 255, 136, 0.3)" }
    ];
    staticStars.forEach((s) => {
      ctx.beginPath();
      ctx.arc(s.x * width, s.y * height, s.r, 0, Math.PI * 2);
      ctx.fillStyle = s.color;
      ctx.fill();
    });
  };
  drawStaticBackdrop();
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(drawStaticBackdrop, 250);
  }, { passive: true });
}

// js/components/forum.js
init_store();
init_audio();

// js/components/profileModal.js
init_store();
init_audio();

// js/components/stories.js
init_store();
init_audio();

// js/components/effects.js
init_audio();
function initGlobalEffects() {
}
function initCard3DTilt() {
}
function triggerConfetti(originX = window.innerWidth / 2, originY = window.innerHeight / 2, count = 8) {
  const colors = ["#00e5ff", "#ff0080", "#a855f7", "#00ff88", "#ffd700"];
  sound.play("sparkle");
  for (let i = 0; i < count; i++) {
    const piece = document.createElement("div");
    piece.className = "fx-confetti-particle";
    const color = colors[i % colors.length];
    const sizeW = 5;
    const sizeH = 6;
    const angle = Math.PI * 2 * i / count;
    const velocity = Math.random() * 80 + 40;
    const destX = Math.cos(angle) * velocity;
    const destY = Math.sin(angle) * velocity - 20;
    piece.style.left = `${originX}px`;
    piece.style.top = `${originY}px`;
    piece.style.width = `${sizeW}px`;
    piece.style.height = `${sizeH}px`;
    piece.style.backgroundColor = color;
    piece.style.setProperty("--cx", `${destX}px`);
    piece.style.setProperty("--cy", `${destY}px`);
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 600);
  }
}
function triggerLevelUpCelebration(user) {
  sound.play("levelUp");
  const modal = document.createElement("div");
  modal.className = "modal-overlay active fx-levelup-modal-overlay";
  modal.innerHTML = `
    <div class="fx-levelup-card">
      <div class="fx-levelup-badge-icon" style="font-size: 3rem; margin-bottom: 6px;">\u{1F451}</div>
      <div class="fx-levelup-title" style="font-size: 1.8rem; color: #ffd700;">LEVEL UP!</div>
      <div class="fx-levelup-level-num" style="font-size: 1.3rem; margin: 4px 0;">LEVEL ${user.level}</div>
      <div class="fx-levelup-rank" style="font-size: 0.95rem; color: var(--secondary);">${user.rankTitle || "Mythic Challenger"}</div>
      <p class="fx-levelup-desc" style="font-size: 0.85rem; margin-top: 8px;">\u0E22\u0E34\u0E19\u0E14\u0E35\u0E14\u0E49\u0E27\u0E22! \u0E04\u0E38\u0E13\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E1E\u0E25\u0E31\u0E07\u0E41\u0E25\u0E30\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C\u0E01\u0E32\u0E23\u0E40\u0E02\u0E49\u0E32\u0E16\u0E36\u0E07\u0E17\u0E31\u0E27\u0E23\u0E4C\u0E19\u0E32\u0E40\u0E21\u0E19\u0E15\u0E4C\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E2A\u0E39\u0E07\u0E02\u0E36\u0E49\u0E19</p>
      <button class="btn btn-primary btn-sm" id="btn-claim-levelup" style="margin-top: 16px; width: 100%;">
        \u26A1 \u0E22\u0E37\u0E19\u0E22\u0E31\u0E19
      </button>
    </div>
  `;
  document.body.appendChild(modal);
  const claimBtn = modal.querySelector("#btn-claim-levelup");
  if (claimBtn) {
    claimBtn.addEventListener("click", () => {
      sound.play("click");
      modal.classList.remove("active");
      setTimeout(() => modal.remove(), 200);
    });
  }
}
function showToast(message, type = "info") {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "toast-container";
    document.body.appendChild(container);
  }
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

// js/components/stories.js
var storyTimer = null;
var currentStoryIndex = 0;
var isPaused = false;
var isMuted = true;
var progressAnimFrame = null;
var activeVideoElement = null;
function renderStoryBar(container) {
  if (!container) return;
  const { stories, user } = store.state;
  const userStories = stories.filter((s) => s.userId === user.id);
  const hasUserStory = userStories.length > 0;
  const otherStories = stories.filter((s) => s.userId !== user.id);
  container.innerHTML = `
    <div class="stories-bar-track">
      <!-- Current User Add/View Story -->
      <div class="story-item-bubble ${hasUserStory ? "has-story" : "add-story"}" id="story-trigger-self">
        <div class="story-avatar-wrapper ${hasUserStory ? "ring-active" : "ring-add"}">
          <img src="${user.avatar}" alt="${user.name}" class="story-avatar-img">
          <div class="story-badge-icon">${hasUserStory ? "\u26A1" : "+"}</div>
        </div>
        <div class="story-user-label">
          <span>${hasUserStory ? "\u0E2A\u0E15\u0E2D\u0E23\u0E35\u0E48\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13" : "\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E2A\u0E15\u0E2D\u0E23\u0E35\u0E48"}</span>
        </div>
      </div>

      <!-- Other Gamers' Stories -->
      ${otherStories.map((story) => `
        <div class="story-item-bubble has-story" data-story-id="${story.id}">
          <div class="story-avatar-wrapper ring-active ${story.type === "video" ? "ring-video" : ""}">
            <img src="${story.userAvatar}" alt="${story.userName}" class="story-avatar-img">
            <div class="story-type-tag">${story.type === "video" ? "\u{1F3AC}" : "\u{1F4F8}"}</div>
          </div>
          <div class="story-user-label">
            <span class="story-user-name">${story.userName}</span>
            <span class="story-time-mini">${story.createdAt}</span>
          </div>
        </div>
      `).join("")}
    </div>
  `;
  const selfBubble = container.querySelector("#story-trigger-self");
  if (selfBubble) {
    selfBubble.addEventListener("click", () => {
      sound.play("click");
      if (hasUserStory) {
        openStoryViewer(userStories[0].id);
      } else {
        openCreateStoryModal();
      }
    });
  }
  container.querySelectorAll(".story-item-bubble[data-story-id]").forEach((el) => {
    el.addEventListener("click", () => {
      const storyId = el.dataset.storyId;
      sound.play("tab");
      openStoryViewer(storyId);
    });
  });
}
function openCreateStoryModal() {
  const modal = document.getElementById("modal-create-story");
  if (modal) {
    modal.classList.add("active");
    sound.play("click");
  }
}
function openStoryViewer(initialStoryId) {
  const modal = document.getElementById("modal-story-viewer");
  if (!modal) return;
  const { stories } = store.state;
  if (!stories.length) return;
  const foundIndex = stories.findIndex((s) => s.id === initialStoryId);
  currentStoryIndex = foundIndex >= 0 ? foundIndex : 0;
  isPaused = false;
  modal.classList.add("active");
  renderStorySlide();
}
function closeStoryViewer() {
  const modal = document.getElementById("modal-story-viewer");
  if (modal) {
    modal.classList.remove("active");
    if (activeVideoElement) {
      activeVideoElement.pause();
      activeVideoElement.src = "";
      activeVideoElement = null;
    }
  }
  clearStoryTimers();
}
function clearStoryTimers() {
  if (storyTimer) clearTimeout(storyTimer);
  if (progressAnimFrame) cancelAnimationFrame(progressAnimFrame);
  storyTimer = null;
  progressAnimFrame = null;
}
function renderStorySlide() {
  const modal = document.getElementById("modal-story-viewer");
  if (!modal) return;
  const { stories, user } = store.state;
  if (currentStoryIndex >= stories.length) {
    closeStoryViewer();
    return;
  }
  if (currentStoryIndex < 0) {
    currentStoryIndex = 0;
  }
  const story = stories[currentStoryIndex];
  const isOwner = story.userId === user.id;
  clearStoryTimers();
  const container = modal.querySelector(".story-viewer-container");
  if (!container) return;
  container.innerHTML = `
    <!-- Top Segmented Progress Bar -->
    <div class="story-progress-segments">
      ${stories.map((s, idx) => `
        <div class="story-progress-bar-bg">
          <div class="story-progress-bar-fill" id="story-progress-${idx}" style="width: ${idx < currentStoryIndex ? "100%" : "0%"};"></div>
        </div>
      `).join("")}
    </div>

    <!-- Story Header Info -->
    <div class="story-viewer-header">
      <div class="story-viewer-author btn-story-author-profile" title="\u0E04\u0E25\u0E34\u0E01\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C" style="cursor: pointer;">
        <img src="${story.userAvatar}" alt="${story.userName}" class="story-viewer-avatar">
        <div>
          <div class="story-viewer-name-row">
            <span class="story-viewer-name">${story.userName}</span>
            <span class="story-viewer-badge">${story.badge || story.userTag || ""}</span>
          </div>
          <span class="story-viewer-time">Lv.${story.userLevel || 30} \u2022 ${story.createdAt}</span>
        </div>
      </div>

      <div class="story-viewer-top-actions">
        ${!isOwner ? `
          ${store.isFriend(story.userId) ? `
            <span class="badge-pill" style="background: rgba(0, 229, 255, 0.2); color: #00e5ff; font-size: 0.75rem;">\u{1F91D} \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19</span>
          ` : store.isPending(story.userId) ? `
            <span class="badge-pill" style="background: rgba(255, 255, 255, 0.15); color: #fff; font-size: 0.75rem;">\u23F3 \u0E2A\u0E48\u0E07\u0E04\u0E33\u0E02\u0E2D\u0E41\u0E25\u0E49\u0E27</span>
          ` : `
            <button type="button" class="btn btn-primary btn-xs btn-story-add-friend" data-user-id="${story.userId || story.userName}" title="\u0E2A\u0E48\u0E07\u0E04\u0E33\u0E02\u0E2D\u0E40\u0E1B\u0E47\u0E19\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19">
              \u2795 \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19 (+10 XP)
            </button>
          `}
        ` : ""}

        <!-- Story Visual Filter Switcher -->
        <button class="btn-story-filter-toggle" id="btn-toggle-story-filter" title="\u0E2A\u0E25\u0E31\u0E1A\u0E40\u0E2D\u0E1F\u0E40\u0E1F\u0E01\u0E15\u0E4C\u0E1F\u0E34\u0E25\u0E40\u0E15\u0E2D\u0E23\u0E4C Cyber">
          \u2728
        </button>
        ${isOwner ? `
          <button class="btn-story-delete" id="btn-delete-current-story" title="\u0E25\u0E1A\u0E2A\u0E15\u0E2D\u0E23\u0E35\u0E48\u0E19\u0E35\u0E49">
            \u{1F5D1}\uFE0F
          </button>
        ` : ""}
        <button class="btn-story-pause" id="btn-toggle-pause" title="\u0E2B\u0E22\u0E38\u0E14/\u0E40\u0E25\u0E48\u0E19\u0E15\u0E48\u0E2D">
          ${isPaused ? "\u25B6\uFE0F" : "\u23F8\uFE0F"}
        </button>
        <button class="btn-story-close" id="btn-close-story-viewer" title="\u0E1B\u0E34\u0E14\u0E2A\u0E15\u0E2D\u0E23\u0E35\u0E48">
          &times;
        </button>
      </div>
    </div>

    <!-- Media Area (Adaptive Fitting & Single Optimized Video Player) -->
    <div class="story-media-stage" id="story-media-stage">
      ${story.type === "video" ? `
        <div class="story-video-wrapper">
          <video src="${story.mediaUrl}" autoplay ${isMuted ? "muted" : ""} playsinline disablePictureInPicture preload="auto" class="story-video-player" id="story-active-video" onerror="this.outerHTML='<img src=\\'${story.userAvatar}\\' class=\\'story-image-element\\'>'"></video>
          
          <!-- Story Video Volume Controller -->
          <div class="story-video-volume-bar" id="story-video-volume-bar">
            <button type="button" class="btn-story-vol-icon" id="btn-toggle-video-sound" title="\u0E40\u0E1B\u0E34\u0E14/\u0E1B\u0E34\u0E14\u0E40\u0E2A\u0E35\u0E22\u0E07">
              ${isMuted ? "\u{1F507}" : "\u{1F50A}"}
            </button>
            <input type="range" min="0" max="100" value="${isMuted ? 0 : 80}" class="story-vol-slider" id="story-vol-slider" title="\u0E1B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D">
            <span class="story-vol-pct" id="story-vol-pct">${isMuted ? "\u0E1B\u0E34\u0E14\u0E40\u0E2A\u0E35\u0E22\u0E07" : "80%"}</span>
          </div>
        </div>
      ` : `
        <img src="${story.mediaUrl}" alt="${story.caption}" class="story-image-element">
      `}
      <div class="story-filter-overlay" id="story-filter-overlay"></div>
    </div>

    <!-- Touch / Click Navigation Overlay -->
    <div class="story-nav-hotspots">
      <div class="story-nav-hotspot prev" id="hotspot-prev" title="\u0E2A\u0E15\u0E2D\u0E23\u0E35\u0E48\u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32"></div>
      <div class="story-nav-hotspot next" id="hotspot-next" title="\u0E2A\u0E15\u0E2D\u0E23\u0E35\u0E48\u0E16\u0E31\u0E14\u0E44\u0E1B"></div>
    </div>

    <!-- Story Bottom Overlay & Reactions -->
    <div class="story-viewer-footer">
      <div class="story-caption-box">
        ${story.tag ? `<div class="story-tag-pill">${story.tag}</div>` : ""}
        <div class="story-caption-text">${story.caption}</div>
      </div>

      <div class="story-reactions-bar">
        <div class="story-reaction-btns">
          ${["\u{1F525}", "\u{1F451}", "\u26A1", "\u{1F3AF}", "\u2764\uFE0F"].map((emoji) => `
            <button class="btn-story-react" data-emoji="${emoji}">
              <span>${emoji}</span>
              <span class="react-count">${story.reactions && story.reactions[emoji] || 0}</span>
            </button>
          `).join("")}
        </div>
      </div>
    </div>
  `;
  const activeFill = container.querySelector(`#story-progress-${currentStoryIndex}`);
  if (story.type === "video") {
    const video = container.querySelector("#story-active-video");
    activeVideoElement = video;
    if (video) {
      video.volume = isMuted ? 0 : 0.8;
      const onTimeUpdate = () => {
        if (!isPaused && video.duration) {
          const pct = video.currentTime / video.duration * 100;
          if (activeFill) activeFill.style.width = `${Math.min(100, pct)}%`;
        }
      };
      const onEnded = () => {
        nextStory();
      };
      video.addEventListener("timeupdate", onTimeUpdate);
      video.addEventListener("ended", onEnded);
      const soundBtn = container.querySelector("#btn-toggle-video-sound");
      const volSlider = container.querySelector("#story-vol-slider");
      const volPct = container.querySelector("#story-vol-pct");
      if (soundBtn && volSlider) {
        soundBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          isMuted = !isMuted;
          video.muted = isMuted;
          const currentVal = isMuted ? 0 : 80;
          video.volume = currentVal / 100;
          volSlider.value = currentVal;
          if (volPct) volPct.textContent = isMuted ? "\u0E1B\u0E34\u0E14\u0E40\u0E2A\u0E35\u0E22\u0E07" : `${currentVal}%`;
          soundBtn.textContent = isMuted ? "\u{1F507}" : "\u{1F50A}";
          sound.play("click");
        });
        volSlider.addEventListener("input", (e) => {
          e.stopPropagation();
          const val = parseInt(e.target.value, 10);
          isMuted = val === 0;
          video.muted = isMuted;
          video.volume = val / 100;
          if (volPct) volPct.textContent = val === 0 ? "\u0E1B\u0E34\u0E14\u0E40\u0E2A\u0E35\u0E22\u0E07" : `${val}%`;
          if (soundBtn) soundBtn.textContent = val === 0 ? "\u{1F507}" : val < 50 ? "\u{1F509}" : "\u{1F50A}";
        });
        volSlider.addEventListener("click", (e) => e.stopPropagation());
      }
      video.play().catch(() => {
        video.muted = true;
        video.play().catch(() => {
        });
      });
    }
  } else {
    const imageDuration = 5500;
    const startTime = performance.now();
    const updateImageProgress = (now) => {
      if (!isPaused) {
        const elapsed = now - startTime;
        const pct = elapsed / imageDuration * 100;
        if (activeFill) activeFill.style.width = `${Math.min(100, pct)}%`;
        if (elapsed >= imageDuration) {
          nextStory();
          return;
        }
      }
      progressAnimFrame = requestAnimationFrame(updateImageProgress);
    };
    progressAnimFrame = requestAnimationFrame(updateImageProgress);
  }
  const closeBtn = container.querySelector("#btn-close-story-viewer");
  if (closeBtn) closeBtn.addEventListener("click", closeStoryViewer);
  const prevHotspot = container.querySelector("#hotspot-prev");
  if (prevHotspot) prevHotspot.addEventListener("click", (e) => {
    e.stopPropagation();
    prevStory();
  });
  const nextHotspot = container.querySelector("#hotspot-next");
  if (nextHotspot) nextHotspot.addEventListener("click", (e) => {
    e.stopPropagation();
    nextStory();
  });
  const pauseBtn = container.querySelector("#btn-toggle-pause");
  if (pauseBtn) {
    pauseBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleStoryPause();
    });
  }
  const deleteBtn = container.querySelector("#btn-delete-current-story");
  if (deleteBtn) {
    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (confirm("\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A\u0E2A\u0E15\u0E2D\u0E23\u0E35\u0E48\u0E19\u0E35\u0E49\u0E43\u0E0A\u0E48\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48?")) {
        sound.play("click");
        store.deleteStory(story.id);
        if (currentStoryIndex >= store.state.stories.length) {
          currentStoryIndex = Math.max(0, store.state.stories.length - 1);
        }
        if (store.state.stories.length === 0) {
          closeStoryViewer();
        } else {
          renderStorySlide();
        }
      }
    });
  }
  const authorTrigger = container.querySelector(".btn-story-author-profile");
  if (authorTrigger) {
    authorTrigger.addEventListener("click", (e) => {
      e.stopPropagation();
      sound.play("click");
      closeStoryViewer();
      openPlayerProfile(story.userId || story.userName);
    });
  }
  const addFriendBtn = container.querySelector(".btn-story-add-friend");
  if (addFriendBtn) {
    addFriendBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const targetId = addFriendBtn.dataset.userId;
      const res = store.sendFriendRequest(targetId);
      if (res.success) {
        sound.play("success");
        triggerConfetti(window.innerWidth / 2, window.innerHeight * 0.4, 25);
        showToast(res.message, "success");
      } else {
        showToast(res.message, "info");
      }
      renderStorySlide();
    });
  }
  const filterBtn = container.querySelector("#btn-toggle-story-filter");
  const mediaStage = container.querySelector("#story-media-stage");
  const filters = ["", "filter-cyber", "filter-vhs", "filter-matrix", "filter-flame"];
  let currentFilterIdx = 0;
  if (filterBtn && mediaStage) {
    filterBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      sound.play("click");
      currentFilterIdx = (currentFilterIdx + 1) % filters.length;
      filters.forEach((f) => f && mediaStage.classList.remove(f));
      if (filters[currentFilterIdx]) {
        mediaStage.classList.add(filters[currentFilterIdx]);
      }
    });
  }
  container.querySelectorAll(".btn-story-react").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const emoji = btn.dataset.emoji;
      const countSpan = btn.querySelector(".react-count");
      const newCount = store.reactStory(story.id, emoji);
      if (countSpan && newCount !== void 0) {
        countSpan.textContent = newCount;
      }
      btn.style.transform = "scale(1.3)";
      setTimeout(() => btn.style.transform = "", 200);
      sound.play("sparkle");
    });
  });
}
function toggleStoryPause() {
  isPaused = !isPaused;
  const modal = document.getElementById("modal-story-viewer");
  if (modal) {
    const pauseBtn = modal.querySelector("#btn-toggle-pause");
    if (pauseBtn) pauseBtn.textContent = isPaused ? "\u25B6\uFE0F" : "\u23F8\uFE0F";
    if (activeVideoElement) {
      if (isPaused) activeVideoElement.pause();
      else activeVideoElement.play().catch(() => {
      });
    }
  }
}
function nextStory() {
  const { stories } = store.state;
  if (currentStoryIndex < stories.length - 1) {
    currentStoryIndex++;
    renderStorySlide();
  } else {
    closeStoryViewer();
  }
}
function prevStory() {
  if (currentStoryIndex > 0) {
    currentStoryIndex--;
    renderStorySlide();
  }
}

// js/components/profileModal.js
var activeProfileTab = "overview";
var viewingPlayerId = null;
function openPlayerProfile(playerId = null) {
  viewingPlayerId = playerId;
  activeProfileTab = "overview";
  const modal = document.getElementById("modal-user-profile");
  if (!modal) return;
  renderProfileModal();
  modal.classList.add("active");
}
function setupProfileModal() {
  const modal = document.getElementById("modal-user-profile");
  if (!modal) return;
  const headerProfileBtn = document.getElementById("btn-header-profile");
  if (headerProfileBtn) {
    headerProfileBtn.addEventListener("click", () => {
      sound.play("click");
      openPlayerProfile(null);
    });
  }
  const closeBtn = modal.querySelector(".modal-close-btn");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("active");
    });
  }
  renderProfileModal();
  store.subscribe("user:updated", renderProfileModal);
  store.subscribe("friends:updated", renderProfileModal);
  store.subscribe("stories:updated", renderProfileModal);
  store.subscribe("posts:updated", renderProfileModal);
  initProfileCustomizationModal();
}
function renderProfileModal() {
  const modal = document.getElementById("modal-user-profile");
  if (!modal) return;
  const { user, stories, posts } = store.state;
  const isSelf = !viewingPlayerId || viewingPlayerId === user.id || viewingPlayerId === user.name;
  let profileUser = user;
  if (!isSelf) {
    const targetPlayer = store.getPlayerById(viewingPlayerId) || (store.getPlayers() || []).find((p) => p.id === viewingPlayerId || p.name === viewingPlayerId);
    if (targetPlayer) {
      profileUser = {
        id: targetPlayer.id,
        name: targetPlayer.name,
        gamerTag: targetPlayer.gamerTag,
        bio: targetPlayer.bio || "\u0E40\u0E01\u0E21\u0E40\u0E21\u0E2D\u0E23\u0E4C\u0E41\u0E2B\u0E48\u0E07 NEXUS GAMING TH \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E23\u0E48\u0E27\u0E21\u0E15\u0E35\u0E49\u0E41\u0E25\u0E30\u0E25\u0E38\u0E22\u0E44\u0E1B\u0E14\u0E49\u0E27\u0E22\u0E01\u0E31\u0E19!",
        avatar: targetPlayer.avatar,
        banner: targetPlayer.banner || "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
        level: targetPlayer.level || 30,
        xp: 2400,
        xpNext: 3500,
        rankTitle: targetPlayer.rankTitle || targetPlayer.rank || "\u{1F31F} Pro Gamer",
        joinedDate: "\u0E21\u0E01\u0E23\u0E32\u0E04\u0E21 2025",
        favoriteGames: targetPlayer.favoriteGames || [targetPlayer.primaryGame || "Valorant"],
        primaryGame: targetPlayer.primaryGame || "Valorant",
        status: targetPlayer.status || "online",
        statusText: targetPlayer.statusText || "\u0E2D\u0E2D\u0E19\u0E44\u0E25\u0E19\u0E4C",
        mutualFriends: targetPlayer.mutualFriends || 2,
        followersCount: targetPlayer.followersCount || 150,
        badges: [
          { id: "b-v", name: "\u{1F6E1}\uFE0F Verified Player", icon: "\u{1F6E1}\uFE0F", desc: "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E15\u0E31\u0E27\u0E15\u0E19\u0E43\u0E19 NEXUS \u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22" },
          { id: "b-c", name: "\u{1F3AF} Top Performer", icon: "\u{1F3AF}", desc: "\u0E2D\u0E31\u0E15\u0E23\u0E32\u0E01\u0E32\u0E23\u0E0A\u0E19\u0E30\u0E2A\u0E39\u0E07\u0E41\u0E25\u0E30\u0E40\u0E1B\u0E47\u0E19\u0E21\u0E34\u0E15\u0E23" }
        ]
      };
    }
  }
  const xpPercent = Math.min(100, Math.round(profileUser.xp / profileUser.xpNext * 100));
  const userStories = stories.filter((s) => s.userId === profileUser.id || s.userName === profileUser.name);
  const userPosts = posts.filter((p) => p.author.id === profileUser.id || p.author.name === profileUser.name);
  const hasActiveStory = userStories.length > 0;
  const mediaItems = [];
  userStories.forEach((s) => {
    if (s.mediaUrl) {
      mediaItems.push({
        type: s.type,
        url: s.mediaUrl,
        caption: s.caption,
        source: "\u0E2A\u0E15\u0E2D\u0E23\u0E35\u0E48",
        date: s.createdAt,
        storyId: s.id
      });
    }
  });
  userPosts.forEach((p) => {
    if (p.video) {
      mediaItems.push({
        type: "video",
        url: p.video,
        caption: p.title,
        source: "\u0E01\u0E23\u0E30\u0E17\u0E39\u0E49",
        date: p.createdAt,
        postId: p.id
      });
    } else if (p.image) {
      mediaItems.push({
        type: "image",
        url: p.image,
        caption: p.title,
        source: "\u0E01\u0E23\u0E30\u0E17\u0E39\u0E49",
        date: p.createdAt,
        postId: p.id
      });
    }
  });
  const navAvatar = document.querySelector("#header-user-avatar");
  const navName = document.querySelector("#header-user-name");
  const navLevel = document.querySelector("#header-user-level");
  if (navAvatar) navAvatar.src = user.avatar;
  if (navName) navName.textContent = user.name;
  if (navLevel) navLevel.textContent = `LV.${user.level}`;
  const modalProfileCard = modal.querySelector(".modal-profile-card");
  if (modalProfileCard) {
    modalProfileCard.className = "modal-profile-card";
    if (isSelf && user.profileBgTheme) {
      modalProfileCard.classList.add(`theme-${user.profileBgTheme}`);
    }
    if (isSelf && user.profileCustomBg) {
      modalProfileCard.style.backgroundImage = `linear-gradient(rgba(10, 14, 23, 0.88), rgba(10, 14, 23, 0.94)), url('${user.profileCustomBg}')`;
      modalProfileCard.style.backgroundSize = "cover";
      modalProfileCard.style.backgroundPosition = "center";
    } else {
      modalProfileCard.style.backgroundImage = "";
    }
  }
  const body = modal.querySelector(".modal-profile-content");
  if (!body) return;
  const isFriend = !isSelf && store.isFriend(profileUser.id);
  const isPending = !isSelf && store.isPending(profileUser.id);
  const hasIncoming = !isSelf && store.hasIncomingRequest(profileUser.id);
  const isFollowing = !isSelf && store.isFollowing(profileUser.id);
  body.innerHTML = `
    <!-- Profile Cover Banner -->
    <div class="profile-banner-wrap" style="background-image: url('${profileUser.banner}'); background-size: cover; background-position: center;">
      <div class="profile-banner-overlay"></div>
      ${isSelf ? `
        <button class="btn-edit-banner-quick" id="btn-quick-edit-banner" title="\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E20\u0E32\u0E1E\u0E1B\u0E01\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C">
          \u{1F4F8} \u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E20\u0E32\u0E1E\u0E1B\u0E01
        </button>
      ` : `
        <div class="player-profile-badge-overlay">
          <span class="player-status-dot status-${profileUser.status || "online"}"></span>
          <span>${profileUser.statusText || "\u0E2D\u0E2D\u0E19\u0E44\u0E25\u0E19\u0E4C"}</span>
        </div>
      `}
    </div>

    <div class="profile-header-meta">
      <div class="profile-avatar-container ${hasActiveStory ? "has-story-ring" : ""}" id="btn-profile-avatar-action" title="${hasActiveStory ? "\u0E04\u0E25\u0E34\u0E01\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E2A\u0E15\u0E2D\u0E23\u0E35\u0E48" : isSelf ? "\u0E04\u0E25\u0E34\u0E01\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E2A\u0E15\u0E2D\u0E23\u0E35\u0E48" : "\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E40\u0E01\u0E21\u0E40\u0E21\u0E2D\u0E23\u0E4C"}">
        <img src="${profileUser.avatar}" alt="${profileUser.name}" class="profile-avatar-lg">
        <div class="profile-avatar-badge">${hasActiveStory ? "\u26A1" : isSelf ? "+" : "\u{1F3AE}"}</div>
        ${isSelf ? `<div class="profile-avatar-edit-hint" id="btn-quick-edit-avatar" title="\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E23\u0E39\u0E1B\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C">\u{1F4F7}</div>` : ""}
      </div>

      <div class="profile-names-wrap">
        <div class="profile-name-title">
          ${profileUser.name} 
          <span style="font-size: 0.9rem; color: var(--text-muted); font-family: var(--font-mono);">${profileUser.gamerTag}</span>
        </div>
        <div class="profile-rank-tag">
          <span>${profileUser.rankTitle}</span> \u2022 <span style="color: var(--text-muted);">${isSelf ? `\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E40\u0E21\u0E37\u0E48\u0E2D ${profileUser.joinedDate}` : `\u{1F3AE} ${profileUser.primaryGame || "Gamer"}`}</span>
        </div>
        ${!isSelf ? `
          <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 4px;">
            \u{1F91D} \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E23\u0E48\u0E27\u0E21\u0E01\u0E31\u0E19 ${profileUser.mutualFriends || 0} \u0E04\u0E19 \u2022 \u{1F465} \u0E1C\u0E39\u0E49\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21 ${profileUser.followersCount || 0} \u0E04\u0E19
          </div>
        ` : ""}
      </div>

      <div class="profile-header-actions">
        ${isSelf ? `
          <button class="btn btn-primary btn-sm" id="btn-profile-add-story">
            \u2795 \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2A\u0E15\u0E2D\u0E23\u0E35\u0E48
          </button>
          <button class="btn btn-secondary btn-sm" id="btn-open-profile-customizer" title="\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E20\u0E32\u0E1E\u0E1B\u0E01\u0E41\u0E25\u0E30\u0E1E\u0E37\u0E49\u0E19\u0E2B\u0E25\u0E31\u0E07\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C">
            \u{1F3A8} \u0E1B\u0E23\u0E31\u0E1A\u0E41\u0E15\u0E48\u0E07\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C
          </button>
          <button class="btn btn-secondary btn-sm" id="btn-profile-logout" style="color: #ff4655; border-color: rgba(255, 70, 85, 0.4);" title="\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E1A">
            \u{1F6AA} \u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E1A
          </button>
        ` : `
          <!-- Friend Action Button -->
          ${isFriend ? `
            <button class="btn btn-secondary btn-sm is-friend-btn" id="btn-profile-remove-friend" title="\u0E40\u0E1B\u0E47\u0E19\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E01\u0E31\u0E19\u0E41\u0E25\u0E49\u0E27 (\u0E04\u0E25\u0E34\u0E01\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E25\u0E1A\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19)">
              \u{1F91D} \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E01\u0E31\u0E19\u0E41\u0E25\u0E49\u0E27
            </button>
          ` : isPending ? `
            <button class="btn btn-secondary btn-sm is-pending-btn" id="btn-profile-cancel-req" title="\u0E04\u0E25\u0E34\u0E01\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\u0E04\u0E33\u0E02\u0E2D">
              \u23F3 \u0E2A\u0E48\u0E07\u0E04\u0E33\u0E02\u0E2D\u0E41\u0E25\u0E49\u0E27 (\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01)
            </button>
          ` : hasIncoming ? `
            <button class="btn btn-primary btn-sm" id="btn-profile-accept-req">
              \u2713 \u0E22\u0E2D\u0E21\u0E23\u0E31\u0E1A\u0E04\u0E33\u0E02\u0E2D (+25 XP)
            </button>
          ` : `
            <button class="btn btn-primary btn-sm" id="btn-profile-add-friend">
              \u2795 \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19 (+10 XP)
            </button>
          `}

          <!-- Follow Button -->
          <button class="btn btn-secondary btn-sm" id="btn-profile-toggle-follow">
            ${isFollowing ? "\u2713 \u0E15\u0E34\u0E14\u0E15\u0E32\u0E21\u0E41\u0E25\u0E49\u0E27" : "\u2B50 \u0E15\u0E34\u0E14\u0E15\u0E32\u0E21"}
          </button>

          <!-- Invite to Squad Button -->
          <button class="btn btn-secondary btn-sm" id="btn-profile-invite-squad" title="\u0E0A\u0E27\u0E19\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E15\u0E35\u0E49">
            \u{1F3AE} \u0E0A\u0E27\u0E19\u0E40\u0E02\u0E49\u0E32\u0E15\u0E35\u0E49
          </button>

          <!-- Direct Chat Button -->
          <button class="btn btn-secondary btn-sm" id="btn-profile-direct-chat" title="\u0E2A\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E0A\u0E15">
            \u{1F4AC} \u0E41\u0E0A\u0E15
          </button>
        `}
      </div>
    </div>

    <!-- XP Bar Section -->
    <div class="xp-progress-section">
      <div style="display: flex; justify-content: space-between; font-size: 0.85rem;">
        <span>\u26A1 \u0E40\u0E25\u0E40\u0E27\u0E25: <strong style="color: var(--primary);">Lv.${profileUser.level}</strong></span>
        <span style="font-family: var(--font-mono); color: var(--text-muted);">${profileUser.xp} / ${profileUser.xpNext} XP (${xpPercent}%)</span>
      </div>
      <div class="xp-bar-bg">
        <div class="xp-bar-fill" style="width: ${xpPercent}%;"></div>
      </div>
    </div>

    <!-- Profile Sub-Navigation Tabs -->
    <div class="profile-tabs-bar">
      <button class="profile-tab-btn ${activeProfileTab === "overview" ? "active" : ""}" data-ptab="overview">
        \u{1F4CA} \u0E20\u0E32\u0E1E\u0E23\u0E27\u0E21 & \u0E2A\u0E16\u0E34\u0E15\u0E34
      </button>
      <button class="profile-tab-btn ${activeProfileTab === "stories" ? "active" : ""}" data-ptab="stories">
        \u26A1 \u0E2A\u0E15\u0E2D\u0E23\u0E35\u0E48 (${userStories.length})
      </button>
      <button class="profile-tab-btn ${activeProfileTab === "posts" ? "active" : ""}" data-ptab="posts">
        \u{1F4DD} \u0E01\u0E23\u0E30\u0E17\u0E39\u0E49 (${userPosts.length})
      </button>
      <button class="profile-tab-btn ${activeProfileTab === "gallery" ? "active" : ""}" data-ptab="gallery">
        \u{1F5BC}\uFE0F \u0E41\u0E01\u0E25\u0E40\u0E25\u0E2D\u0E23\u0E35 (${mediaItems.length})
      </button>
    </div>

    <!-- Tab Content Area -->
    <div class="profile-tab-content-body">
      ${renderActiveTabContent({ user: profileUser, userStories, userPosts, mediaItems, isSelf })}
    </div>
  `;
  body.querySelectorAll(".profile-tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      sound.play("tab");
      activeProfileTab = btn.dataset.ptab;
      renderProfileModal();
    });
  });
  if (isSelf) {
    const quickEditBanner = body.querySelector("#btn-quick-edit-banner");
    if (quickEditBanner) {
      quickEditBanner.addEventListener("click", () => {
        sound.play("click");
        openProfileCustomizationModal("banner");
      });
    }
    const quickEditAvatar = body.querySelector("#btn-quick-edit-avatar");
    if (quickEditAvatar) {
      quickEditAvatar.addEventListener("click", (e) => {
        e.stopPropagation();
        sound.play("click");
        openProfileCustomizationModal("avatar");
      });
    }
    const openCustomizerBtn = body.querySelector("#btn-open-profile-customizer");
    if (openCustomizerBtn) {
      openCustomizerBtn.addEventListener("click", () => {
        sound.play("click");
        openProfileCustomizationModal("banner");
      });
    }
    const addStoryBtn = body.querySelector("#btn-profile-add-story");
    if (addStoryBtn) {
      addStoryBtn.addEventListener("click", () => {
        sound.play("click");
        openCreateStoryModal();
      });
    }
    const profileLogoutBtn = body.querySelector("#btn-profile-logout");
    if (profileLogoutBtn) {
      profileLogoutBtn.addEventListener("click", () => {
        sound.play("click");
        if (confirm(`\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E1A "${user.name}" \u0E43\u0E0A\u0E48\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48?`)) {
          modal.classList.remove("active");
          store.logout();
          showToast("\u{1F6AA} \u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E1A\u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22\u0E41\u0E25\u0E49\u0E27", "info");
        }
      });
    }
  } else {
    const addFriendBtn = body.querySelector("#btn-profile-add-friend");
    if (addFriendBtn) {
      addFriendBtn.addEventListener("click", () => {
        const res = store.sendFriendRequest(profileUser.id);
        if (res.success) {
          sound.play("success");
          showToast(res.message, "success");
        } else {
          showToast(res.message, "info");
        }
        renderProfileModal();
      });
    }
    const cancelReqBtn = body.querySelector("#btn-profile-cancel-req");
    if (cancelReqBtn) {
      cancelReqBtn.addEventListener("click", () => {
        sound.play("click");
        store.cancelFriendRequest(profileUser.id);
        showToast("\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\u0E04\u0E33\u0E02\u0E2D\u0E40\u0E1B\u0E47\u0E19\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22\u0E41\u0E25\u0E49\u0E27", "info");
        renderProfileModal();
      });
    }
    const acceptReqBtn = body.querySelector("#btn-profile-accept-req");
    if (acceptReqBtn) {
      acceptReqBtn.addEventListener("click", () => {
        const res = store.acceptFriendRequest(profileUser.id);
        sound.play("levelUp");
        showToast(res.message, "success");
        renderProfileModal();
      });
    }
    const removeFriendBtn = body.querySelector("#btn-profile-remove-friend");
    if (removeFriendBtn) {
      removeFriendBtn.addEventListener("click", () => {
        if (confirm(`\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A ${profileUser.name} \u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E23\u0E32\u0E22\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E43\u0E0A\u0E48\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48?`)) {
          sound.play("click");
          store.removeFriend(profileUser.id);
          showToast(`\u0E25\u0E1A ${profileUser.name} \u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E41\u0E25\u0E49\u0E27`, "info");
          renderProfileModal();
        }
      });
    }
    const toggleFollowBtn = body.querySelector("#btn-profile-toggle-follow");
    if (toggleFollowBtn) {
      toggleFollowBtn.addEventListener("click", () => {
        const res = store.toggleFollow(profileUser.id);
        sound.play("click");
        showToast(res.message, res.following ? "success" : "info");
        renderProfileModal();
      });
    }
    const inviteSquadBtn = body.querySelector("#btn-profile-invite-squad");
    if (inviteSquadBtn) {
      inviteSquadBtn.addEventListener("click", () => {
        sound.play("success");
        showToast(`\u{1F680} \u0E2A\u0E48\u0E07\u0E04\u0E33\u0E0A\u0E27\u0E19 ${profileUser.name} \u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E15\u0E35\u0E49\u0E40\u0E25\u0E48\u0E19\u0E40\u0E01\u0E21\u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22\u0E41\u0E25\u0E49\u0E27!`, "success");
      });
    }
    const directChatBtn = body.querySelector("#btn-profile-direct-chat");
    if (directChatBtn) {
      directChatBtn.addEventListener("click", () => {
        sound.play("click");
        modal.classList.remove("active");
        store.setTab("chat");
        setTimeout(() => {
          const chatInput = document.getElementById("in-chat-text");
          if (chatInput) {
            chatInput.value = `@${profileUser.name} `;
            chatInput.focus();
          }
        }, 150);
      });
    }
  }
  const avatarAction = body.querySelector("#btn-profile-avatar-action");
  if (avatarAction) {
    avatarAction.addEventListener("click", () => {
      if (hasActiveStory) {
        sound.play("laser");
        modal.classList.remove("active");
        openStoryViewer(userStories[0].id);
      } else if (isSelf) {
        sound.play("click");
        openCreateStoryModal();
      }
    });
  }
  body.querySelectorAll(".profile-story-card").forEach((card) => {
    card.addEventListener("click", () => {
      const storyId = card.dataset.storyId;
      sound.play("laser");
      modal.classList.remove("active");
      openStoryViewer(storyId);
    });
  });
  body.querySelectorAll(".gallery-grid-item").forEach((item) => {
    item.addEventListener("click", () => {
      const type = item.dataset.mediaType;
      const url = item.dataset.mediaUrl;
      const caption = item.dataset.mediaCaption;
      sound.play("click");
      if (type === "image") {
        openLightbox(url, caption);
      } else if (type === "video") {
        const storyId = item.dataset.storyId;
        if (storyId) {
          modal.classList.remove("active");
          openStoryViewer(storyId);
        } else {
          openLightbox(url, caption);
        }
      }
    });
  });
  const createPostTrigger = body.querySelector("#btn-profile-create-post");
  if (createPostTrigger) {
    createPostTrigger.addEventListener("click", () => {
      modal.classList.remove("active");
      document.getElementById("modal-create-post")?.classList.add("active");
    });
  }
}
function openProfileCustomizationModal(targetTab = "banner") {
  const modal = document.getElementById("modal-edit-profile-customization");
  if (!modal) return;
  const { user } = store.state;
  const tabBtns = modal.querySelectorAll(".profile-edit-tab-btn");
  const panels = modal.querySelectorAll(".profile-edit-panel");
  tabBtns.forEach((b) => b.classList.toggle("active", b.dataset.tab === targetTab));
  panels.forEach((p) => p.style.display = p.id === `panel-edit-${targetTab}` ? "block" : "none");
  const inBanner = modal.querySelector("#profile-in-banner-url");
  if (inBanner) inBanner.value = user.banner || "";
  const inAvatar = modal.querySelector("#profile-in-avatar-url");
  if (inAvatar) inAvatar.value = user.avatar || "";
  const inCustomWp = modal.querySelector("#profile-in-custom-wallpaper");
  if (inCustomWp) inCustomWp.value = user.profileCustomBg || "";
  const currentTheme = user.profileBgTheme || "cyber-dark";
  modal.querySelectorAll(".bg-theme-option-card").forEach((card) => {
    const radio = card.querySelector('input[type="radio"]');
    const isMatch = card.dataset.bgTheme === currentTheme;
    card.classList.toggle("active", isMatch);
    if (radio) radio.checked = isMatch;
  });
  updateBannerLivePreview(user.banner || "");
  modal.classList.add("active");
}
function updateBannerLivePreview(url) {
  const preview = document.getElementById("banner-live-preview-box");
  if (!preview) return;
  if (url) {
    preview.innerHTML = `
      <div style="width: 100%; height: 120px; border-radius: var(--radius-md); background: url('${url}') center/cover no-repeat; border: 1px solid var(--border-medium);"></div>
    `;
  } else {
    preview.innerHTML = `<div style="height: 60px; display: flex; align-items: center; justify-content: center; color: var(--text-muted); font-size: 0.8rem;">\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E20\u0E32\u0E1E\u0E1B\u0E01</div>`;
  }
}
function initProfileCustomizationModal() {
  const modal = document.getElementById("modal-edit-profile-customization");
  const form = document.getElementById("form-edit-profile-customization");
  if (!modal || !form) return;
  modal.querySelectorAll(".profile-edit-tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      sound.play("tab");
      const tab = btn.dataset.tab;
      modal.querySelectorAll(".profile-edit-tab-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      modal.querySelectorAll(".profile-edit-panel").forEach((p) => {
        p.style.display = p.id === `panel-edit-${tab}` ? "block" : "none";
      });
    });
  });
  const dropzoneBanner = modal.querySelector("#dropzone-profile-banner");
  const fileInputBanner = modal.querySelector("#file-profile-banner");
  const inBannerUrl = modal.querySelector("#profile-in-banner-url");
  if (dropzoneBanner && fileInputBanner) {
    dropzoneBanner.addEventListener("click", () => fileInputBanner.click());
    fileInputBanner.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const dataUrl = event.target.result;
          if (inBannerUrl) inBannerUrl.value = dataUrl;
          updateBannerLivePreview(dataUrl);
          sound.play("click");
        };
        reader.readAsDataURL(file);
      }
    });
  }
  if (inBannerUrl) {
    inBannerUrl.addEventListener("input", () => {
      updateBannerLivePreview(inBannerUrl.value.trim());
    });
  }
  modal.querySelectorAll(".btn-banner-preset").forEach((btn) => {
    btn.addEventListener("click", () => {
      sound.play("click");
      const url = btn.dataset.url;
      if (inBannerUrl) inBannerUrl.value = url;
      updateBannerLivePreview(url);
    });
  });
  modal.querySelectorAll(".bg-theme-option-card").forEach((card) => {
    card.addEventListener("click", () => {
      sound.play("click");
      modal.querySelectorAll(".bg-theme-option-card").forEach((c) => c.classList.remove("active"));
      card.classList.add("active");
      const radio = card.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;
    });
  });
  const btnBrowseWp = modal.querySelector("#btn-browse-wallpaper");
  const fileInputWp = modal.querySelector("#file-profile-wallpaper");
  const inCustomWp = modal.querySelector("#profile-in-custom-wallpaper");
  if (btnBrowseWp && fileInputWp) {
    btnBrowseWp.addEventListener("click", () => fileInputWp.click());
    fileInputWp.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const dataUrl = event.target.result;
          if (inCustomWp) inCustomWp.value = dataUrl;
          sound.play("click");
        };
        reader.readAsDataURL(file);
      }
    });
  }
  const dropzoneAvatar = modal.querySelector("#dropzone-profile-avatar");
  const fileInputAvatar = modal.querySelector("#file-profile-avatar");
  const inAvatarUrl = modal.querySelector("#profile-in-avatar-url");
  if (dropzoneAvatar && fileInputAvatar) {
    dropzoneAvatar.addEventListener("click", () => fileInputAvatar.click());
    fileInputAvatar.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const dataUrl = event.target.result;
          if (inAvatarUrl) inAvatarUrl.value = dataUrl;
          sound.play("click");
        };
        reader.readAsDataURL(file);
      }
    });
  }
  modal.querySelectorAll(".btn-avatar-preset").forEach((img) => {
    img.addEventListener("click", () => {
      sound.play("click");
      if (inAvatarUrl) inAvatarUrl.value = img.src;
    });
  });
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const banner = inBannerUrl ? inBannerUrl.value.trim() : store.state.user.banner;
    const avatar = inAvatarUrl ? inAvatarUrl.value.trim() : store.state.user.avatar;
    const profileCustomBg = inCustomWp ? inCustomWp.value.trim() : "";
    const activeThemeCard = modal.querySelector(".bg-theme-option-card.active");
    const profileBgTheme = activeThemeCard ? activeThemeCard.dataset.bgTheme : "cyber-dark";
    store.updateProfile({
      banner: banner || store.state.user.banner,
      avatar: avatar || store.state.user.avatar,
      profileBgTheme,
      profileCustomBg
    });
    sound.play("success");
    modal.classList.remove("active");
    const toast = document.createElement("div");
    toast.className = "toast success";
    toast.innerHTML = `<span>\u2728 \u0E1B\u0E23\u0E31\u0E1A\u0E41\u0E15\u0E48\u0E07\u0E20\u0E32\u0E1E\u0E1B\u0E01\u0E41\u0E25\u0E30\u0E1E\u0E37\u0E49\u0E19\u0E2B\u0E25\u0E31\u0E07\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22\u0E41\u0E25\u0E49\u0E27!</span>`;
    const toastContainer = document.getElementById("toast-container");
    if (toastContainer) {
      toastContainer.appendChild(toast);
      setTimeout(() => toast.remove(), 3500);
    }
  });
}
function renderActiveTabContent({ user, userStories, userPosts, mediaItems, isSelf = true }) {
  if (activeProfileTab === "overview") {
    return `
      <div style="padding: 10px 24px 24px;">
        <div class="profile-bio-box">
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-muted); margin-bottom: 6px; text-transform: uppercase;">
            \u{1F4AC} \u0E41\u0E19\u0E30\u0E19\u0E33\u0E15\u0E31\u0E27 (Bio)
          </div>
          <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-primary);">
            ${user.bio || "\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E04\u0E33\u0E41\u0E19\u0E30\u0E19\u0E33\u0E15\u0E31\u0E27"}
          </p>
        </div>

        <div style="margin-top: 20px;">
          <h4 style="font-size: 1rem; color: var(--text-highlight); margin-bottom: 12px;">\u{1F3C6} \u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D\u0E15\u0E23\u0E32\u0E40\u0E01\u0E35\u0E22\u0E23\u0E15\u0E34\u0E22\u0E28 (Badges)</h4>
          <div class="profile-badges-grid">
            ${(user.badges || []).map((b) => `
              <div class="profile-badge-item">
                <div class="badge-icon-wrap">${b.icon}</div>
                <div class="badge-info-wrap">
                  <div class="badge-title">${b.name}</div>
                  <div class="badge-desc">${b.desc}</div>
                </div>
              </div>
            `).join("")}
          </div>
        </div>

        <div style="margin-top: 20px;">
          <h4 style="font-size: 1rem; color: var(--text-highlight); margin-bottom: 12px;">\u{1F3AE} \u0E40\u0E01\u0E21\u0E42\u0E1B\u0E23\u0E14</h4>
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            ${(user.favoriteGames || []).map((g) => `
              <span class="badge-pill" style="padding: 6px 14px; font-size: 0.85rem; background: rgba(255, 255, 255, 0.06); border: 1px solid var(--border-subtle); color: #fff;">
                ${g}
              </span>
            `).join("")}
          </div>
        </div>
      </div>
    `;
  }
  if (activeProfileTab === "stories") {
    return `
      <div style="padding: 10px 24px 24px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px;">
          <div>
            <h4 style="font-size: 1rem; color: var(--text-highlight);">\u26A1 \u0E2A\u0E15\u0E2D\u0E23\u0E35\u0E48 & \u0E44\u0E2E\u0E44\u0E25\u0E17\u0E4C${isSelf ? "\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13" : `\u0E02\u0E2D\u0E07 ${user.name}`}</h4>
            <p style="font-size: 0.8rem; color: var(--text-muted);">${isSelf ? "\u0E2A\u0E15\u0E2D\u0E23\u0E35\u0E48\u0E08\u0E30\u0E41\u0E2A\u0E14\u0E07\u0E1A\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E1F\u0E35\u0E14\u0E0A\u0E38\u0E21\u0E0A\u0E19\u0E41\u0E25\u0E30\u0E2B\u0E19\u0E49\u0E32\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C" : "\u0E04\u0E25\u0E34\u0E01\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E2A\u0E15\u0E2D\u0E23\u0E35\u0E48\u0E41\u0E1A\u0E1A\u0E40\u0E15\u0E47\u0E21\u0E08\u0E2D"}</p>
          </div>
          ${isSelf ? `
            <button class="btn btn-primary btn-sm" onclick="document.getElementById('modal-user-profile')?.classList.remove('active'); import('./stories.js').then(m => m.openCreateStoryModal());">
              \u2795 \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2A\u0E15\u0E2D\u0E23\u0E35\u0E48\u0E43\u0E2B\u0E21\u0E48
            </button>
          ` : ""}
        </div>

        ${userStories.length ? `
          <div class="profile-stories-grid">
            ${userStories.map((story) => `
              <div class="profile-story-card" data-story-id="${story.id}">
                ${story.type === "video" ? `
                  <video src="${story.mediaUrl}" muted class="profile-story-thumb"></video>
                  <div class="profile-story-type-badge">\u{1F3AC} \u0E04\u0E25\u0E34\u0E1B</div>
                ` : `
                  <img src="${story.mediaUrl}" alt="${story.caption}" class="profile-story-thumb">
                  <div class="profile-story-type-badge">\u{1F4F8} \u0E20\u0E32\u0E1E</div>
                `}
                <div class="profile-story-overlay">
                  <div class="profile-story-caption">${story.caption || "Gamer Story"}</div>
                  <div class="profile-story-time">${story.createdAt}</div>
                </div>
              </div>
            `).join("")}
          </div>
        ` : `
          <div class="profile-empty-tab">
            <div style="font-size: 2.2rem; margin-bottom: 8px;">\u26A1</div>
            <h4>${isSelf ? "\u0E04\u0E38\u0E13\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E2A\u0E15\u0E2D\u0E23\u0E35\u0E48\u0E43\u0E19\u0E02\u0E13\u0E30\u0E19\u0E35\u0E49" : `${user.name} \u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E40\u0E1C\u0E22\u0E41\u0E1E\u0E23\u0E48\u0E2A\u0E15\u0E2D\u0E23\u0E35\u0E48`}</h4>
            <p>${isSelf ? "\u0E41\u0E0A\u0E23\u0E4C\u0E0A\u0E48\u0E27\u0E07\u0E40\u0E27\u0E25\u0E32\u0E44\u0E2E\u0E44\u0E25\u0E17\u0E4C\u0E01\u0E32\u0E23\u0E40\u0E25\u0E48\u0E19\u0E40\u0E01\u0E21\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E44\u0E14\u0E49\u0E40\u0E25\u0E22\u0E15\u0E2D\u0E19\u0E19\u0E35\u0E49" : "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E21\u0E35\u0E2A\u0E15\u0E2D\u0E23\u0E35\u0E48\u0E43\u0E2B\u0E21\u0E48\u0E08\u0E30\u0E41\u0E2A\u0E14\u0E07\u0E43\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E19\u0E35\u0E49"}</p>
          </div>
        `}
      </div>
    `;
  }
  if (activeProfileTab === "posts") {
    return `
      <div style="padding: 10px 24px 24px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px;">
          <div>
            <h4 style="font-size: 1rem; color: var(--text-highlight);">\u{1F4DD} \u0E01\u0E23\u0E30\u0E17\u0E39\u0E49${isSelf ? "\u0E17\u0E35\u0E48\u0E04\u0E38\u0E13\u0E40\u0E04\u0E22\u0E2A\u0E23\u0E49\u0E32\u0E07" : `\u0E02\u0E2D\u0E07 ${user.name}`}</h4>
            <p style="font-size: 0.8rem; color: var(--text-muted);">\u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21 \u0E44\u0E01\u0E14\u0E4C \u0E41\u0E25\u0E30\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D\u0E04\u0E25\u0E34\u0E1B\u0E17\u0E35\u0E48\u0E40\u0E1C\u0E22\u0E41\u0E1E\u0E23\u0E48</p>
          </div>
          ${isSelf ? `
            <button class="btn btn-primary btn-sm" id="btn-profile-create-post">
              \u270D\uFE0F \u0E15\u0E31\u0E49\u0E07\u0E01\u0E23\u0E30\u0E17\u0E39\u0E49\u0E43\u0E2B\u0E21\u0E48
            </button>
          ` : ""}
        </div>

        ${userPosts.length ? `
          <div class="profile-posts-list">
            ${userPosts.map((post) => `
              <div class="profile-post-card">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 10px;">
                  <h5 class="profile-post-title">${post.title}</h5>
                  <span class="badge-pill" style="font-size: 0.7rem; background: rgba(var(--primary-rgb), 0.15); color: var(--primary); white-space: nowrap;">
                    ${post.gameName}
                  </span>
                </div>
                <p class="profile-post-snippet">${post.content}</p>
                <div class="profile-post-meta">
                  <span>\u{1F4C5} ${post.createdAt}</span>
                  <span>\u2764\uFE0F ${post.likes || 1} \u0E44\u0E25\u0E01\u0E4C</span>
                  <span>\u{1F4AC} ${(post.comments || []).length} \u0E04\u0E27\u0E32\u0E21\u0E04\u0E34\u0E14\u0E40\u0E2B\u0E47\u0E19</span>
                </div>
              </div>
            `).join("")}
          </div>
        ` : `
          <div class="profile-empty-tab">
            <div style="font-size: 2.2rem; margin-bottom: 8px;">\u{1F4DD}</div>
            <h4>${isSelf ? "\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E01\u0E23\u0E30\u0E17\u0E39\u0E49\u0E17\u0E35\u0E48\u0E2A\u0E23\u0E49\u0E32\u0E07" : `${user.name} \u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E01\u0E23\u0E30\u0E17\u0E39\u0E49`}</h4>
            <p>${isSelf ? "\u0E41\u0E0A\u0E23\u0E4C\u0E40\u0E17\u0E04\u0E19\u0E34\u0E04\u0E01\u0E32\u0E23\u0E40\u0E25\u0E48\u0E19 \u0E44\u0E01\u0E14\u0E4C \u0E2B\u0E23\u0E37\u0E2D\u0E04\u0E25\u0E34\u0E1B\u0E44\u0E2E\u0E44\u0E25\u0E17\u0E4C\u0E01\u0E31\u0E1A\u0E0A\u0E38\u0E21\u0E0A\u0E19\u0E40\u0E01\u0E21\u0E40\u0E21\u0E2D\u0E23\u0E4C" : "\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21\u0E1C\u0E39\u0E49\u0E40\u0E25\u0E48\u0E19\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E23\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E21\u0E35\u0E01\u0E23\u0E30\u0E17\u0E39\u0E49\u0E43\u0E2B\u0E21\u0E48"}</p>
          </div>
        `}
      </div>
    `;
  }
  if (activeProfileTab === "gallery") {
    return `
      <div style="padding: 10px 24px 24px;">
        <div style="margin-bottom: 14px;">
          <h4 style="font-size: 1rem; color: var(--text-highlight);">\u{1F5BC}\uFE0F \u0E41\u0E01\u0E25\u0E40\u0E25\u0E2D\u0E23\u0E35\u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E & \u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D\u0E04\u0E25\u0E34\u0E1B</h4>
          <p style="font-size: 0.8rem; color: var(--text-muted);">\u0E23\u0E27\u0E21\u0E2A\u0E37\u0E48\u0E2D\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 (\u0E04\u0E25\u0E34\u0E01\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E1B\u0E34\u0E14\u0E14\u0E39\u0E02\u0E19\u0E32\u0E14\u0E40\u0E15\u0E47\u0E21)</p>
        </div>

        ${mediaItems.length ? `
          <div class="profile-gallery-grid">
            ${mediaItems.map((m) => `
              <div class="gallery-grid-item" data-media-type="${m.type}" data-media-url="${m.url}" data-media-caption="${m.caption}" data-story-id="${m.storyId || ""}">
                ${m.type === "video" ? `
                  <video src="${m.url}" muted class="gallery-thumb"></video>
                  <div class="gallery-item-badge">\u{1F3AC} \u0E04\u0E25\u0E34\u0E1B</div>
                ` : `
                  <img src="${m.url}" alt="${m.caption}" class="gallery-thumb">
                  <div class="gallery-item-badge">\u{1F4F8} \u0E20\u0E32\u0E1E</div>
                `}
                <div class="gallery-hover-overlay">
                  <div class="gallery-caption-peek">${m.caption || m.source}</div>
                  <span class="gallery-view-btn">\u{1F50D} \u0E02\u0E22\u0E32\u0E22</span>
                </div>
              </div>
            `).join("")}
          </div>
        ` : `
          <div class="profile-empty-tab">
            <div style="font-size: 2.2rem; margin-bottom: 8px;">\u{1F5BC}\uFE0F</div>
            <h4>\u0E41\u0E01\u0E25\u0E40\u0E25\u0E2D\u0E23\u0E35\u0E22\u0E31\u0E07\u0E27\u0E48\u0E32\u0E07\u0E2D\u0E22\u0E39\u0E48</h4>
            <p>\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E1E\u0E2A\u0E15\u0E4C\u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E\u0E2B\u0E23\u0E37\u0E2D\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D\u0E43\u0E19\u0E01\u0E23\u0E30\u0E17\u0E39\u0E49\u0E41\u0E25\u0E30\u0E2A\u0E15\u0E2D\u0E23\u0E35\u0E48 \u0E2A\u0E37\u0E48\u0E2D\u0E40\u0E2B\u0E25\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19\u0E08\u0E30\u0E21\u0E32\u0E23\u0E27\u0E21\u0E01\u0E31\u0E19\u0E17\u0E35\u0E48\u0E19\u0E35\u0E48\u0E42\u0E14\u0E22\u0E2D\u0E31\u0E15\u0E42\u0E19\u0E21\u0E31\u0E15\u0E34</p>
          </div>
        `}
      </div>
    `;
  }
  return "";
}

// js/components/forum.js
function renderForumFeed(container) {
  if (!container) return;
  const { posts, activeGameFilter, activeCategoryFilter, searchQuery: searchQuery2, bookmarks } = store.state;
  const filtered = posts.filter((post) => {
    if (activeGameFilter !== "all" && post.gameId !== activeGameFilter) return false;
    if (activeCategoryFilter !== "all") {
      if (activeCategoryFilter === "bookmarks") {
        if (!bookmarks.includes(post.id)) return false;
      } else if (post.category !== activeCategoryFilter) {
        return false;
      }
    }
    if (searchQuery2.trim()) {
      const q = searchQuery2.toLowerCase();
      const matchTitle = post.title.toLowerCase().includes(q);
      const matchContent = post.content.toLowerCase().includes(q);
      const matchGame = post.gameName.toLowerCase().includes(q);
      const matchTags = post.tags && post.tags.some((t) => t.toLowerCase().includes(q));
      if (!matchTitle && !matchContent && !matchGame && !matchTags) return false;
    }
    return true;
  });
  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 60px 20px; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border-subtle);">
        <div style="font-size: 2.5rem; margin-bottom: 12px;">\u{1F4ED}</div>
        <h3 style="font-size: 1.2rem; color: var(--text-highlight);">\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E01\u0E23\u0E30\u0E17\u0E39\u0E49\u0E43\u0E19\u0E2B\u0E21\u0E27\u0E14\u0E2B\u0E21\u0E39\u0E48\u0E19\u0E35\u0E49</h3>
        <p style="font-size: 0.9rem; color: var(--text-muted); margin: 6px 0 16px;">\u0E21\u0E32\u0E23\u0E48\u0E27\u0E21\u0E40\u0E1B\u0E47\u0E19\u0E04\u0E19\u0E41\u0E23\u0E01\u0E17\u0E35\u0E48\u0E40\u0E1B\u0E34\u0E14\u0E1B\u0E23\u0E30\u0E40\u0E14\u0E47\u0E19\u0E1E\u0E39\u0E14\u0E04\u0E38\u0E22\u0E01\u0E31\u0E19\u0E40\u0E25\u0E22!</p>
        <button class="btn btn-primary btn-sm" id="btn-empty-create-post">\u270D\uFE0F \u0E2A\u0E23\u0E49\u0E32\u0E07\u0E01\u0E23\u0E30\u0E17\u0E39\u0E49\u0E43\u0E2B\u0E21\u0E48</button>
      </div>
    `;
    const emptyBtn = container.querySelector("#btn-empty-create-post");
    if (emptyBtn) {
      emptyBtn.addEventListener("click", () => {
        sound.play("click");
        document.getElementById("modal-create-post")?.classList.add("active");
      });
    }
    return;
  }
  container.innerHTML = filtered.map((post) => {
    const isBookmarked = bookmarks.includes(post.id);
    const voteScore = (post.upvotes || 0) - (post.downvotes || 0);
    return `
      <article class="post-card ${post.pinned ? "pinned" : ""}" data-post-id="${post.id}">
        ${post.pinned ? `
          <div class="pinned-badge">
            \u{1F4CC} \u0E1B\u0E31\u0E01\u0E2B\u0E21\u0E38\u0E14\u0E42\u0E14\u0E22\u0E41\u0E2D\u0E14\u0E21\u0E34\u0E19
          </div>
        ` : ""}

        <!-- Vote Column -->
        <div class="vote-col">
          <button class="vote-btn ${post.userVoted === 1 ? "active-up" : ""}" data-action="upvote" title="\u0E01\u0E14\u0E42\u0E2B\u0E27\u0E15\u0E02\u0E36\u0E49\u0E19">
            \u25B2
          </button>
          <span class="vote-count">${voteScore}</span>
          <button class="vote-btn ${post.userVoted === -1 ? "active-down" : ""}" data-action="downvote" title="\u0E01\u0E14\u0E42\u0E2B\u0E27\u0E15\u0E25\u0E07">
            \u25BC
          </button>
        </div>

        <!-- Post Content Main -->
        <div class="post-main">
          <div class="post-header">
            <div class="post-author-info btn-author-profile-trigger" data-author-id="${post.author.id || post.author.name}" title="\u0E04\u0E25\u0E34\u0E01\u0E14\u0E39\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C / \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19" style="cursor: pointer;">
              <img src="${post.author.avatar}" alt="${post.author.name}" class="post-author-avatar">
              <div>
                <div style="display: flex; align-items: center; gap: 6px;">
                  <span class="post-author-name">${post.author.name}</span>
                  <span class="post-author-badge">${post.author.badge}</span>
                </div>
                <span class="post-time">Lv.${post.author.level} \u2022 ${post.createdAt}</span>
              </div>
            </div>

            <div class="post-game-tag">
              \u{1F3AE} ${post.gameName}
            </div>
          </div>

          <h2 class="post-title">${post.title}</h2>
          <div class="post-excerpt">${post.content}</div>

          <!-- Post Media (Image, Video, or YouTube) -->
          ${renderPostMedia(post)}

          ${post.tags && post.tags.length ? `
            <div class="post-tags-list">
              ${post.tags.map((t) => `<span class="post-tag-item">#${t}</span>`).join("")}
            </div>
          ` : ""}

          <!-- Footer Actions -->
          <div class="post-footer">
            <div class="post-action-btn-group">
              <button class="post-footer-btn btn-toggle-comments" data-post-id="${post.id}">
                \u{1F4AC} <span>${post.commentsCount || (post.comments ? post.comments.length : 0)} \u0E04\u0E27\u0E32\u0E21\u0E04\u0E34\u0E14\u0E40\u0E2B\u0E47\u0E19</span>
              </button>
              <button class="post-footer-btn btn-share-post" data-title="${post.title}">
                \u{1F517} <span>\u0E41\u0E0A\u0E23\u0E4C</span>
              </button>
            </div>

            <button class="post-footer-btn ${isBookmarked ? "bookmarked" : ""} btn-bookmark-post" data-post-id="${post.id}">
              ${isBookmarked ? "\u2605 \u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E41\u0E25\u0E49\u0E27" : "\u2606 \u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01"}
            </button>
          </div>

          <!-- Comments Thread (Initially Collapsed or Shown) -->
          <div class="post-comments-thread" id="comments-${post.id}" style="display: none;">
            <div class="comments-list">
              ${post.comments && post.comments.length ? post.comments.map((c) => `
                <div class="comment-item">
                  <img src="${c.author.avatar}" alt="${c.author.name}" class="comment-avatar">
                  <div class="comment-body">
                    <div class="comment-header">
                      <span class="comment-author-name">${c.author.name}</span>
                      <span style="font-size: 0.7rem; color: var(--text-muted);">${c.author.badge || ""} \u2022 ${c.createdAt}</span>
                    </div>
                    <div class="comment-text">${c.content}</div>
                  </div>
                </div>
              `).join("") : '<p style="font-size: 0.85rem; color: var(--text-muted); padding: 8px 0;">\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E04\u0E27\u0E32\u0E21\u0E04\u0E34\u0E14\u0E40\u0E2B\u0E47\u0E19 \u0E40\u0E1B\u0E47\u0E19\u0E04\u0E19\u0E41\u0E23\u0E01\u0E17\u0E35\u0E48\u0E41\u0E2A\u0E14\u0E07\u0E04\u0E27\u0E32\u0E21\u0E04\u0E34\u0E14\u0E40\u0E2B\u0E47\u0E19!</p>'}
            </div>

            <!-- Comment Input -->
            <form class="comment-input-row" data-post-id="${post.id}">
              <input type="text" placeholder="\u0E40\u0E02\u0E35\u0E22\u0E19\u0E04\u0E27\u0E32\u0E21\u0E04\u0E34\u0E14\u0E40\u0E2B\u0E47\u0E19\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13..." required>
              <button type="submit" class="btn btn-primary btn-sm">\u0E2A\u0E48\u0E07</button>
            </form>
          </div>
        </div>
      </article>
    `;
  }).join("");
  container.querySelectorAll(".vote-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const card = btn.closest(".post-card");
      const postId = card.dataset.postId;
      const action = btn.dataset.action;
      sound.play(action === "upvote" ? "like" : "click");
      store.toggleVote(postId, action === "upvote" ? 1 : -1);
    });
  });
  container.querySelectorAll(".btn-bookmark-post").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const postId = btn.dataset.postId;
      sound.play("click");
      const saved = store.toggleBookmark(postId);
      showToast2(saved ? "\u{1F4CC} \u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E01\u0E23\u0E30\u0E17\u0E39\u0E49\u0E41\u0E25\u0E49\u0E27" : "\u0E19\u0E33\u0E01\u0E23\u0E30\u0E17\u0E39\u0E49\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E41\u0E25\u0E49\u0E27", "info");
    });
  });
  container.querySelectorAll(".btn-toggle-comments").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const postId = btn.dataset.postId;
      const thread = container.querySelector(`#comments-${postId}`);
      if (thread) {
        const isHidden = thread.style.display === "none";
        thread.style.display = isHidden ? "flex" : "none";
        sound.play("click");
      }
    });
  });
  container.querySelectorAll(".comment-input-row").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const postId = form.dataset.postId;
      const input = form.querySelector("input");
      const text = input.value;
      if (!text.trim()) return;
      sound.play("message");
      store.addComment(postId, text);
      input.value = "";
      showToast2("\u{1F4AC} \u0E2A\u0E48\u0E07\u0E04\u0E27\u0E32\u0E21\u0E04\u0E34\u0E14\u0E40\u0E2B\u0E47\u0E19\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08 (+15 XP)", "success");
    });
  });
  container.querySelectorAll(".btn-share-post").forEach((btn) => {
    btn.addEventListener("click", () => {
      sound.play("click");
      if (navigator.clipboard) {
        navigator.clipboard.writeText(window.location.href);
      }
      showToast2("\u{1F517} \u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E25\u0E34\u0E07\u0E01\u0E4C\u0E01\u0E23\u0E30\u0E17\u0E39\u0E49\u0E41\u0E25\u0E49\u0E27!", "success");
    });
  });
  container.querySelectorAll(".btn-author-profile-trigger").forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      const authorId = trigger.dataset.authorId;
      sound.play("click");
      openPlayerProfile(authorId);
    });
  });
  container.querySelectorAll(".post-media-container.image-container").forEach((el) => {
    el.addEventListener("click", () => {
      const img = el.querySelector("img");
      if (img) {
        sound.play("click");
        openLightbox(img.src, img.alt);
      }
    });
  });
}
function renderPostMedia(post) {
  if (post.mediaType === "video" || post.video && !post.mediaType) {
    return `
      <div class="post-media-container video-container">
        <div class="media-type-badge">\u{1F3AC} \u0E04\u0E25\u0E34\u0E1B\u0E44\u0E2E\u0E44\u0E25\u0E17\u0E4C</div>
        <video src="${post.video || post.image}" controls preload="metadata" playsinline class="post-media-video" poster="${post.image || ""}" onerror="this.outerHTML='<img src=\\'${post.image || "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80"}\\' alt=\\'${post.title}\\' class=\\'post-media-image\\'>'"></video>
      </div>
    `;
  }
  if (post.mediaType === "youtube" && post.video) {
    let embedUrl = post.video;
    if (embedUrl.includes("watch?v=")) {
      embedUrl = embedUrl.replace("watch?v=", "embed/");
    } else if (embedUrl.includes("youtu.be/")) {
      embedUrl = embedUrl.replace("youtu.be/", "www.youtube.com/embed/");
    }
    return `
      <div class="post-media-container youtube-container">
        <div class="media-type-badge">\u25B6\uFE0F YouTube Clip</div>
        <iframe src="${embedUrl}" title="${post.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="post-media-iframe"></iframe>
      </div>
    `;
  }
  if (post.image) {
    return `
      <div class="post-media-container image-container" title="\u0E04\u0E25\u0E34\u0E01\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E\u0E02\u0E19\u0E32\u0E14\u0E40\u0E15\u0E47\u0E21">
        <div class="media-type-badge">\u{1F4F8} \u0E20\u0E32\u0E1E\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A</div>
        <img src="${post.image}" alt="${post.title}" class="post-media-img" loading="lazy">
        <div class="image-zoom-hint">\u{1F50D} \u0E0B\u0E39\u0E21\u0E14\u0E39\u0E20\u0E32\u0E1E</div>
      </div>
    `;
  }
  return "";
}
function openLightbox(src, caption = "") {
  let modal = document.getElementById("modal-lightbox");
  if (!modal) return;
  const img = modal.querySelector(".lightbox-image");
  const cap = modal.querySelector(".lightbox-caption");
  if (img) img.src = src;
  if (cap) cap.textContent = caption || "";
  modal.classList.add("active");
}
function showToast2(message, type = "info") {
  const container = document.getElementById("toast-container");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 300);
  }, 2600);
}

// js/components/gameHub.js
init_store();
init_audio();
var selectedGenre = "all";
var selectedPlatform = "all";
var sortBy = "popular";
var viewMode = "grid";
var localSearchQuery = "";
function renderGameHubs(container) {
  if (!container) return;
  const games = store.state.games || [];
  const globalSearch = (store.state.searchQuery || "").toLowerCase();
  const search = (localSearchQuery || globalSearch).toLowerCase();
  const filtered = games.filter((g) => {
    if (selectedGenre !== "all") {
      const genreLower = (g.genre || "").toLowerCase();
      if (selectedGenre === "fps" && !genreLower.includes("fps") && !genreLower.includes("tactical") && !genreLower.includes("shooter")) return false;
      if (selectedGenre === "rpg" && !genreLower.includes("rpg") && !genreLower.includes("soulslike")) return false;
      if (selectedGenre === "moba" && !genreLower.includes("moba")) return false;
      if (selectedGenre === "openworld" && !genreLower.includes("open world") && !genreLower.includes("roleplay")) return false;
      if (selectedGenre === "battleroyale" && !genreLower.includes("battle royale")) return false;
      if (selectedGenre === "sports" && !genreLower.includes("sports") && !genreLower.includes("football")) return false;
    }
    if (selectedPlatform !== "all") {
      if (!g.platform || !g.platform.some((p) => p.toLowerCase().includes(selectedPlatform.toLowerCase()))) {
        return false;
      }
    }
    if (search) {
      const matchName = (g.name || "").toLowerCase().includes(search);
      const matchGenre = (g.genre || "").toLowerCase().includes(search);
      const matchDev = (g.developer || "").toLowerCase().includes(search);
      const matchTags = (g.tags || []).some((t) => t.toLowerCase().includes(search));
      if (!matchName && !matchGenre && !matchDev && !matchTags) return false;
    }
    return true;
  });
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "popular") {
      const parsePlayers = (str) => {
        if (!str) return 0;
        const num = parseFloat(str.replace("K", "")) || 0;
        return str.includes("K") ? num * 1e3 : num;
      };
      return parsePlayers(b.activePlayers) - parsePlayers(a.activePlayers);
    }
    if (sortBy === "rating") {
      return (b.rating || 0) - (a.rating || 0);
    }
    if (sortBy === "parties") {
      return (b.activePartiesCount || 0) - (a.activePartiesCount || 0);
    }
    if (sortBy === "name") {
      return (a.name || "").localeCompare(b.name || "");
    }
    return 0;
  });
  const spotlightGame = games.find((g) => g.id === "valorant") || games[0];
  container.innerHTML = `
    <div class="game-hub-root-wrapper">
      <!-- 1. Featured Spotlight Banner (Shown when no search query) -->
      ${!search && selectedGenre === "all" && selectedPlatform === "all" ? renderSpotlightBanner(spotlightGame) : ""}

      <!-- 2. Controls & Filter Bar -->
      <div class="game-hub-toolbar">
        <!-- Search & Info Row -->
        <div class="game-hub-search-row">
          <div class="game-hub-search-box">
            <span class="game-search-icon">\u{1F50D}</span>
            <input 
              type="text" 
              id="game-hub-search-input" 
              class="game-search-input" 
              placeholder="\u0E04\u0E49\u0E19\u0E2B\u0E32\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E01\u0E21, \u0E04\u0E48\u0E32\u0E22\u0E1E\u0E31\u0E12\u0E19\u0E32 (\u0E40\u0E0A\u0E48\u0E19 Riot, HoYoverse), \u0E2B\u0E23\u0E37\u0E2D\u0E41\u0E19\u0E27\u0E40\u0E01\u0E21..." 
              value="${localSearchQuery}"
            >
            ${localSearchQuery ? `<button class="btn-clear-game-search" id="btn-clear-game-search" title="\u0E25\u0E49\u0E32\u0E07\u0E01\u0E32\u0E23\u0E04\u0E49\u0E19\u0E2B\u0E32">&times;</button>` : ""}
          </div>

          <div class="game-hub-view-switchers">
            <div class="game-count-badge">
              \u{1F3AE} \u0E1E\u0E1A <strong>${sorted.length}</strong> \u0E08\u0E32\u0E01 ${games.length} \u0E40\u0E01\u0E21
            </div>
            <div class="view-mode-btn-group">
              <button class="btn-view-mode ${viewMode === "grid" ? "active" : ""}" data-mode="grid" title="\u0E21\u0E38\u0E21\u0E21\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E4C\u0E14 (Grid View)">
                \u{1F3B4} \u0E01\u0E32\u0E23\u0E4C\u0E14
              </button>
              <button class="btn-view-mode ${viewMode === "list" ? "active" : ""}" data-mode="list" title="\u0E21\u0E38\u0E21\u0E21\u0E2D\u0E07\u0E15\u0E32\u0E23\u0E32\u0E07\u0E2A\u0E23\u0E38\u0E1B (List View)">
                \u{1F4CB} \u0E15\u0E32\u0E23\u0E32\u0E07\u0E22\u0E48\u0E2D
              </button>
            </div>
          </div>
        </div>

        <!-- Genre Filter Pills -->
        <div class="game-genre-pills-bar">
          <button class="genre-pill-btn ${selectedGenre === "all" ? "active" : ""}" data-genre="all">
            \u{1F3AE} \u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 (${games.length})
          </button>
          <button class="genre-pill-btn ${selectedGenre === "fps" ? "active" : ""}" data-genre="fps">
            \u{1F3AF} FPS / Tactical
          </button>
          <button class="genre-pill-btn ${selectedGenre === "rpg" ? "active" : ""}" data-genre="rpg">
            \u2694\uFE0F Action RPG
          </button>
          <button class="genre-pill-btn ${selectedGenre === "moba" ? "active" : ""}" data-genre="moba">
            \u{1F451} MOBA
          </button>
          <button class="genre-pill-btn ${selectedGenre === "openworld" ? "active" : ""}" data-genre="openworld">
            \u{1F697} Open World / FiveM
          </button>
          <button class="genre-pill-btn ${selectedGenre === "battleroyale" ? "active" : ""}" data-genre="battleroyale">
            \u26A1 Battle Royale
          </button>
          <button class="genre-pill-btn ${selectedGenre === "sports" ? "active" : ""}" data-genre="sports">
            \u26BD Sports / Football
          </button>
        </div>

        <!-- Filter Sub-Row: Platform & Sorting Dropdowns -->
        <div class="game-filters-subrow">
          <div class="game-filter-dropdown-group">
            <label>\u{1F579}\uFE0F \u0E2D\u0E38\u0E1B\u0E01\u0E23\u0E13\u0E4C/\u0E41\u0E1E\u0E25\u0E15\u0E1F\u0E2D\u0E23\u0E4C\u0E21:</label>
            <select id="game-platform-select" class="game-select-input">
              <option value="all" ${selectedPlatform === "all" ? "selected" : ""}>\u0E17\u0E38\u0E01\u0E41\u0E1E\u0E25\u0E15\u0E1F\u0E2D\u0E23\u0E4C\u0E21 (All)</option>
              <option value="PC" ${selectedPlatform === "PC" ? "selected" : ""}>\u{1F5A5}\uFE0F PC Gaming</option>
              <option value="Mobile" ${selectedPlatform === "Mobile" ? "selected" : ""}>\u{1F4F1} \u0E21\u0E37\u0E2D\u0E16\u0E37\u0E2D (Mobile)</option>
              <option value="PlayStation" ${selectedPlatform === "PlayStation" ? "selected" : ""}>\u{1F3AE} PlayStation 5</option>
              <option value="Xbox" ${selectedPlatform === "Xbox" ? "selected" : ""}>\u{1F3AE} Xbox</option>
            </select>
          </div>

          <div class="game-filter-dropdown-group">
            <label>\u{1F4CA} \u0E08\u0E31\u0E14\u0E40\u0E23\u0E35\u0E22\u0E07\u0E15\u0E32\u0E21:</label>
            <select id="game-sort-select" class="game-select-input">
              <option value="popular" ${sortBy === "popular" ? "selected" : ""}>\u{1F525} \u0E1C\u0E39\u0E49\u0E40\u0E25\u0E48\u0E19\u0E2D\u0E2D\u0E19\u0E44\u0E25\u0E19\u0E4C\u0E21\u0E32\u0E01\u0E2A\u0E38\u0E14</option>
              <option value="rating" ${sortBy === "rating" ? "selected" : ""}>\u2B50 \u0E04\u0E30\u0E41\u0E19\u0E19\u0E23\u0E35\u0E27\u0E34\u0E27\u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14</option>
              <option value="parties" ${sortBy === "parties" ? "selected" : ""}>\u{1F91D} \u0E2B\u0E49\u0E2D\u0E07\u0E2B\u0E32\u0E15\u0E35\u0E49\u0E40\u0E1B\u0E34\u0E14\u0E40\u0E22\u0E2D\u0E30\u0E2A\u0E38\u0E14</option>
              <option value="name" ${sortBy === "name" ? "selected" : ""}>\u{1F524} \u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E01\u0E21 (A-Z)</option>
            </select>
          </div>
        </div>
      </div>

      <!-- 3. Games Listing (Grid vs List) -->
      ${sorted.length === 0 ? renderEmptyState(search) : viewMode === "grid" ? renderGridView(sorted) : renderListView(sorted)}
    </div>
  `;
  attachGameHubEvents(container, games);
}
function renderSpotlightBanner(game) {
  if (!game) return "";
  return `
    <div class="game-spotlight-hero" style="--spotlight-accent: ${game.color || "#ff4655"};">
      <div class="spotlight-bg-overlay" style="background-image: linear-gradient(90deg, rgba(10, 14, 24, 0.95) 0%, rgba(10, 14, 24, 0.7) 60%, rgba(10, 14, 24, 0.4) 100%), url('${game.banner || game.cover}');"></div>
      
      <div class="spotlight-content">
        <div class="spotlight-badge-row">
          <span class="spotlight-tag">\u2B50 \u0E40\u0E01\u0E21\u0E41\u0E19\u0E30\u0E19\u0E33\u0E22\u0E2D\u0E14\u0E19\u0E34\u0E22\u0E21\u0E1B\u0E23\u0E30\u0E08\u0E33\u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C</span>
          <span class="spotlight-live-pill">
            <span class="live-pulse-dot"></span>
            \u{1F7E2} ${game.activePlayers} \u0E04\u0E19\u0E01\u0E33\u0E25\u0E31\u0E07\u0E40\u0E25\u0E48\u0E19\u0E2D\u0E22\u0E39\u0E48
          </span>
        </div>

        <h2 class="spotlight-title">${game.name}</h2>
        <div class="spotlight-meta">
          <span class="spotlight-genre">${game.genre}</span>
          <span class="spotlight-dot">\u2022</span>
          <span class="spotlight-dev">\u0E04\u0E48\u0E32\u0E22 ${game.developer}</span>
          <span class="spotlight-dot">\u2022</span>
          <span class="spotlight-rating">\u2605 ${game.rating} (${game.reviewsCount?.toLocaleString()} \u0E23\u0E35\u0E27\u0E34\u0E27)</span>
        </div>

        <p class="spotlight-desc">${game.description}</p>

        <div class="spotlight-actions">
          <button class="btn btn-primary btn-spotlight-feed" data-game-id="${game.id}">
            \u{1F4CC} \u0E14\u0E39\u0E01\u0E23\u0E30\u0E17\u0E39\u0E49 & \u0E40\u0E21\u0E15\u0E49\u0E32 (${game.name})
          </button>
          <button class="btn btn-secondary btn-spotlight-lfg" data-game-id="${game.id}">
            \u{1F91D} \u0E2B\u0E32\u0E15\u0E35\u0E49\u0E14\u0E48\u0E27\u0E19 (${game.activePartiesCount} \u0E2B\u0E49\u0E2D\u0E07\u0E40\u0E1B\u0E34\u0E14\u0E2D\u0E22\u0E39\u0E48)
          </button>
          <button class="btn btn-secondary btn-spotlight-details" data-game-id="${game.id}">
            \u{1F50D} \u0E14\u0E39\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E15\u0E47\u0E21
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
      ${games.map((game) => `
        <div class="game-hub-card-v2" data-game-id="${game.id}">
          <!-- Cover & Badges -->
          <div class="game-card-cover-container">
            <img src="${game.cover}" alt="${game.name}" class="game-card-img" loading="lazy">
            <div class="game-card-gradient-mask"></div>

            <div class="game-card-top-badges">
              <span class="game-card-rating-badge">\u2605 ${game.rating}</span>
              <span class="game-card-live-badge">\u{1F7E2} ${game.activePlayers}</span>
            </div>

            <div class="game-card-platforms-overlay">
              ${(game.platform || ["PC"]).map((p) => {
    let icon = "\u{1F5A5}\uFE0F";
    if (p.includes("Mobile")) icon = "\u{1F4F1}";
    if (p.includes("PlayStation") || p.includes("Xbox") || p.includes("Switch")) icon = "\u{1F3AE}";
    return `<span class="platform-chip-sm" title="${p}">${icon} ${p}</span>`;
  }).join("")}
            </div>
          </div>

          <!-- Card Content Body -->
          <div class="game-card-content">
            <div class="game-card-header-info">
              <div class="game-card-genre-text">${game.genre}</div>
              <h3 class="game-card-name-title" title="${game.name}">${game.name}</h3>
              <div class="game-card-dev-text">\u0E42\u0E14\u0E22 ${game.developer}</div>
            </div>

            <p class="game-card-desc-snippet">${game.description}</p>

            <!-- Tags Cloud -->
            <div class="game-card-tags-row">
              ${(game.tags || []).slice(0, 3).map((tag) => `<span class="game-tag-pill">#${tag}</span>`).join("")}
            </div>

            <!-- 3-Column Community Metrics -->
            <div class="game-card-metrics-grid">
              <div class="metric-box">
                <span class="metric-label">\u{1F465} \u0E2D\u0E2D\u0E19\u0E44\u0E25\u0E19\u0E4C</span>
                <strong class="metric-val text-primary">${game.activePlayers}</strong>
              </div>
              <div class="metric-box">
                <span class="metric-label">\u{1F91D} \u0E1B\u0E32\u0E23\u0E4C\u0E15\u0E35\u0E49</span>
                <strong class="metric-val text-cyan">${game.activePartiesCount || 0} \u0E15\u0E35\u0E49</strong>
              </div>
              <div class="metric-box">
                <span class="metric-label">\u{1F3C6} \u0E17\u0E31\u0E27\u0E23\u0E4C</span>
                <strong class="metric-val text-gold">${game.activeTournamentsCount || 0}</strong>
              </div>
            </div>

            <!-- Action Buttons Row -->
            <div class="game-card-actions-row">
              <button class="btn btn-primary btn-sm btn-filter-game" data-game-id="${game.id}" title="\u0E14\u0E39\u0E01\u0E23\u0E30\u0E17\u0E39\u0E49\u0E41\u0E25\u0E30\u0E44\u0E01\u0E14\u0E4C\u0E40\u0E01\u0E21\u0E19\u0E35\u0E49">
                \u{1F4CC} \u0E14\u0E39\u0E01\u0E23\u0E30\u0E17\u0E39\u0E49
              </button>
              <button class="btn btn-secondary btn-sm btn-view-game-lfg" data-game-id="${game.id}" title="\u0E2B\u0E32\u0E15\u0E35\u0E49\u0E40\u0E25\u0E48\u0E19\u0E40\u0E01\u0E21\u0E19\u0E35\u0E49">
                \u{1F91D} \u0E2B\u0E32\u0E15\u0E35\u0E49
              </button>
              <button class="btn btn-secondary btn-sm btn-quick-details" data-game-id="${game.id}" title="\u0E14\u0E39\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E40\u0E01\u0E21">
                \u{1F50D} \u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25
              </button>
            </div>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}
function renderListView(games) {
  return `
    <div class="games-list-layout">
      ${games.map((game) => `
        <div class="game-list-row-card" data-game-id="${game.id}">
          <div class="game-list-thumb-wrap">
            <img src="${game.cover}" alt="${game.name}" class="game-list-thumb">
            <span class="game-list-rating-badge">\u2605 ${game.rating}</span>
          </div>

          <div class="game-list-main-info">
            <div class="game-list-title-row">
              <h3 class="game-list-title">${game.name}</h3>
              <span class="game-list-dev-badge">\u0E04\u0E48\u0E32\u0E22 ${game.developer}</span>
            </div>
            <div class="game-list-genre-text">${game.genre}</div>
            <p class="game-list-desc-text">${game.description}</p>
            <div class="game-list-platforms">
              ${(game.platform || []).map((p) => `<span class="platform-chip-sm">${p}</span>`).join("")}
            </div>
          </div>

          <div class="game-list-stats-column">
            <div class="list-stat-item">
              <span>\u{1F465} \u0E1C\u0E39\u0E49\u0E40\u0E25\u0E48\u0E19\u0E2A\u0E14:</span>
              <strong class="text-primary">${game.activePlayers}</strong>
            </div>
            <div class="list-stat-item">
              <span>\u{1F91D} \u0E1B\u0E32\u0E23\u0E4C\u0E15\u0E35\u0E49\u0E40\u0E1B\u0E34\u0E14:</span>
              <strong class="text-cyan">${game.activePartiesCount || 0} \u0E15\u0E35\u0E49</strong>
            </div>
            <div class="list-stat-item">
              <span>\u{1F3C6} \u0E01\u0E32\u0E23\u0E41\u0E02\u0E48\u0E07\u0E02\u0E31\u0E19:</span>
              <strong class="text-gold">${game.activeTournamentsCount || 0} \u0E17\u0E31\u0E27\u0E23\u0E4C</strong>
            </div>
          </div>

          <div class="game-list-actions-column">
            <button class="btn btn-primary btn-sm btn-filter-game" data-game-id="${game.id}">
              \u{1F4CC} \u0E01\u0E23\u0E30\u0E17\u0E39\u0E49
            </button>
            <button class="btn btn-secondary btn-sm btn-view-game-lfg" data-game-id="${game.id}">
              \u{1F91D} \u0E2B\u0E32\u0E15\u0E35\u0E49
            </button>
            <button class="btn btn-secondary btn-sm btn-quick-details" data-game-id="${game.id}">
              \u{1F50D} \u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25
            </button>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}
function renderEmptyState(search) {
  return `
    <div class="game-hub-empty-state">
      <div class="empty-icon">\u{1F3AE}</div>
      <h3>\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E40\u0E01\u0E21\u0E17\u0E35\u0E48\u0E15\u0E23\u0E07\u0E01\u0E31\u0E1A\u0E40\u0E07\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E02\u0E01\u0E32\u0E23\u0E04\u0E49\u0E19\u0E2B\u0E32</h3>
      <p>\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E40\u0E01\u0E21\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E04\u0E33\u0E04\u0E49\u0E19\u0E2B\u0E32 "${search || "\u0E15\u0E31\u0E27\u0E01\u0E23\u0E2D\u0E07\u0E17\u0E35\u0E48\u0E40\u0E25\u0E37\u0E2D\u0E01"}" \u0E25\u0E2D\u0E07\u0E1B\u0E23\u0E31\u0E1A\u0E2B\u0E21\u0E27\u0E14\u0E2B\u0E21\u0E39\u0E48\u0E2B\u0E23\u0E37\u0E2D\u0E25\u0E49\u0E32\u0E07\u0E01\u0E32\u0E23\u0E04\u0E49\u0E19\u0E2B\u0E32\u0E14\u0E39\u0E43\u0E2B\u0E21\u0E48\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07</p>
      <button class="btn btn-primary btn-sm" id="btn-reset-game-filters" style="margin-top: 14px;">
        \u{1F504} \u0E25\u0E49\u0E32\u0E07\u0E15\u0E31\u0E27\u0E01\u0E23\u0E2D\u0E07\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14
      </button>
    </div>
  `;
}
function attachGameHubEvents(container, games) {
  const searchInput = container.querySelector("#game-hub-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      localSearchQuery = e.target.value;
      renderGameHubs(container);
      const updatedInput = container.querySelector("#game-hub-search-input");
      if (updatedInput) {
        updatedInput.focus();
        updatedInput.setSelectionRange(updatedInput.value.length, updatedInput.value.length);
      }
    });
  }
  const clearSearchBtn = container.querySelector("#btn-clear-game-search");
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", () => {
      sound.play("click");
      localSearchQuery = "";
      renderGameHubs(container);
    });
  }
  container.querySelectorAll(".genre-pill-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      sound.play("tab");
      selectedGenre = btn.dataset.genre;
      renderGameHubs(container);
    });
  });
  const platformSelect = container.querySelector("#game-platform-select");
  if (platformSelect) {
    platformSelect.addEventListener("change", (e) => {
      sound.play("click");
      selectedPlatform = e.target.value;
      renderGameHubs(container);
    });
  }
  const sortSelect = container.querySelector("#game-sort-select");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      sound.play("click");
      sortBy = e.target.value;
      renderGameHubs(container);
    });
  }
  container.querySelectorAll(".btn-view-mode").forEach((btn) => {
    btn.addEventListener("click", () => {
      sound.play("click");
      viewMode = btn.dataset.mode;
      renderGameHubs(container);
    });
  });
  const resetBtn = container.querySelector("#btn-reset-game-filters");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      sound.play("click");
      selectedGenre = "all";
      selectedPlatform = "all";
      localSearchQuery = "";
      sortBy = "popular";
      renderGameHubs(container);
    });
  }
  container.querySelectorAll(".btn-filter-game, .btn-spotlight-feed").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const gameId = btn.dataset.gameId;
      sound.play("click");
      store.setGameFilter(gameId);
      store.setTab("feed");
      showToast(`\u{1F4CC} \u0E01\u0E33\u0E25\u0E31\u0E07\u0E14\u0E39\u0E01\u0E23\u0E30\u0E17\u0E39\u0E49\u0E41\u0E25\u0E30\u0E44\u0E01\u0E14\u0E4C\u0E02\u0E2D\u0E07\u0E40\u0E01\u0E21: ${getGameName(gameId, games)}`, "info");
    });
  });
  container.querySelectorAll(".btn-view-game-lfg, .btn-spotlight-lfg").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const gameId = btn.dataset.gameId;
      sound.play("click");
      store.setGameFilter(gameId);
      store.setTab("lfg");
      showToast(`\u{1F91D} \u0E01\u0E33\u0E25\u0E31\u0E07\u0E14\u0E39\u0E1B\u0E32\u0E23\u0E4C\u0E15\u0E35\u0E49\u0E2B\u0E32\u0E15\u0E35\u0E49\u0E02\u0E2D\u0E07\u0E40\u0E01\u0E21: ${getGameName(gameId, games)}`, "info");
    });
  });
  container.querySelectorAll(".btn-quick-details, .btn-spotlight-details").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const gameId = btn.dataset.gameId;
      sound.play("click");
      openGameDetailModal(gameId, games);
    });
  });
  container.querySelectorAll(".game-hub-card-v2").forEach((card) => {
    card.addEventListener("click", (e) => {
      if (e.target.closest("button")) return;
      const gameId = card.dataset.gameId;
      sound.play("click");
      openGameDetailModal(gameId, games);
    });
  });
}
function getGameName(gameId, games) {
  const target = (games || []).find((g) => g.id === gameId);
  return target ? target.name : gameId;
}
function openGameDetailModal(gameId, gamesList = store.state.games) {
  const game = (gamesList || []).find((g) => g.id === gameId);
  if (!game) return;
  let modal = document.getElementById("modal-game-detail");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "modal-game-detail";
    modal.className = "modal-overlay";
    modal.innerHTML = `
      <div class="modal-content modal-game-detail-card">
        <button class="modal-close-btn" id="btn-close-game-modal">&times;</button>
        <div id="game-modal-inner-body"></div>
      </div>
    `;
    document.body.appendChild(modal);
    modal.querySelector("#btn-close-game-modal").addEventListener("click", () => {
      modal.classList.remove("active");
    });
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("active");
    });
  }
  const squads = (store.state.squads || []).filter((s) => s.gameId === game.id);
  const posts = (store.state.posts || []).filter((p) => p.gameId === game.id);
  const bodyEl = modal.querySelector("#game-modal-inner-body");
  if (bodyEl) {
    bodyEl.innerHTML = `
      <!-- Game Detail Banner -->
      <div class="game-detail-modal-banner" style="background-image: linear-gradient(180deg, rgba(10, 14, 24, 0.4) 0%, rgba(10, 14, 24, 0.95) 100%), url('${game.banner || game.cover}');">
        <div class="game-detail-header-info">
          <div class="game-detail-badge-pill">\u2605 ${game.rating} \u2022 \u{1F7E2} ${game.activePlayers} \u0E04\u0E19\u0E2D\u0E2D\u0E19\u0E44\u0E25\u0E19\u0E4C</div>
          <h2 class="game-detail-title">${game.name}</h2>
          <div class="game-detail-submeta">
            <span>\u{1F3F7}\uFE0F ${game.genre}</span> \u2022 <span>\u{1F3E2} \u0E04\u0E48\u0E32\u0E22 ${game.developer}</span>
          </div>
        </div>
      </div>

      <div class="game-detail-modal-body-content">
        <!-- Overview & Description -->
        <div class="game-detail-section">
          <h4 class="game-detail-section-title">\u{1F4D6} \u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E41\u0E25\u0E30\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E40\u0E01\u0E21</h4>
          <p style="color: var(--text-secondary); line-height: 1.6; font-size: 0.92rem;">
            ${game.description}
          </p>
        </div>

        <!-- Platforms & Tags -->
        <div class="game-detail-section">
          <h4 class="game-detail-section-title">\u{1F579}\uFE0F \u0E41\u0E1E\u0E25\u0E15\u0E1F\u0E2D\u0E23\u0E4C\u0E21 & \u0E41\u0E17\u0E47\u0E01\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 10px;">
            ${(game.platform || []).map((p) => `<span class="platform-chip-sm" style="font-size: 0.85rem; padding: 4px 12px;">\u{1F5A5}\uFE0F ${p}</span>`).join("")}
            ${(game.tags || []).map((t) => `<span class="game-tag-pill" style="font-size: 0.85rem; padding: 4px 10px;">#${t}</span>`).join("")}
          </div>
        </div>

        <!-- Stats 3-Box -->
        <div class="game-detail-stats-grid">
          <div class="stat-card">
            <span class="stat-card-label">\u{1F465} \u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E2D\u0E2D\u0E19\u0E44\u0E25\u0E19\u0E4C</span>
            <strong class="stat-card-val text-primary">${game.activePlayers}</strong>
          </div>
          <div class="stat-card">
            <span class="stat-card-label">\u{1F91D} \u0E1B\u0E32\u0E23\u0E4C\u0E15\u0E35\u0E49\u0E40\u0E1B\u0E34\u0E14\u0E23\u0E31\u0E1A\u0E04\u0E19</span>
            <strong class="stat-card-val text-cyan">${squads.length || game.activePartiesCount || 0} \u0E15\u0E35\u0E49</strong>
          </div>
          <div class="stat-card">
            <span class="stat-card-label">\u{1F4DD} \u0E01\u0E23\u0E30\u0E17\u0E39\u0E49 & \u0E44\u0E01\u0E14\u0E4C</span>
            <strong class="stat-card-val text-gold">${posts.length || 12} \u0E42\u0E1E\u0E2A\u0E15\u0E4C</strong>
          </div>
        </div>

        <!-- Quick Jump Buttons -->
        <div class="game-detail-modal-actions">
          <button class="btn btn-primary btn-block btn-lg" id="modal-btn-jump-feed">
            \u{1F4CC} \u0E14\u0E39\u0E01\u0E23\u0E30\u0E17\u0E39\u0E49\u0E41\u0E25\u0E30\u0E44\u0E01\u0E14\u0E4C\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14\u0E02\u0E2D\u0E07 ${game.name}
          </button>
          <button class="btn btn-secondary btn-block" id="modal-btn-jump-lfg">
            \u{1F91D} \u0E40\u0E1B\u0E34\u0E14\u0E1A\u0E2D\u0E23\u0E4C\u0E14\u0E2B\u0E32\u0E15\u0E35\u0E49\u0E40\u0E25\u0E48\u0E19 ${game.name}
          </button>
        </div>
      </div>
    `;
    const jumpFeed = bodyEl.querySelector("#modal-btn-jump-feed");
    if (jumpFeed) {
      jumpFeed.addEventListener("click", () => {
        modal.classList.remove("active");
        sound.play("click");
        store.setGameFilter(game.id);
        store.setTab("feed");
      });
    }
    const jumpLfg = bodyEl.querySelector("#modal-btn-jump-lfg");
    if (jumpLfg) {
      jumpLfg.addEventListener("click", () => {
        modal.classList.remove("active");
        sound.play("click");
        store.setGameFilter(game.id);
        store.setTab("lfg");
      });
    }
  }
  modal.classList.add("active");
}

// js/components/lfg.js
init_store();
init_audio();
function renderLFG(container) {
  if (!container) return;
  const { squads, activeGameFilter, searchQuery: searchQuery2, user } = store.state;
  const filtered = squads.filter((squad) => {
    if (activeGameFilter !== "all" && squad.gameId !== activeGameFilter) return false;
    if (searchQuery2.trim()) {
      const q = searchQuery2.toLowerCase();
      const matchTitle = squad.title.toLowerCase().includes(q);
      const matchGame = squad.gameName.toLowerCase().includes(q);
      const matchMode = squad.mode.toLowerCase().includes(q);
      if (!matchTitle && !matchGame && !matchMode) return false;
    }
    return true;
  });
  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border-subtle);">
        <div style="font-size: 2.5rem; margin-bottom: 12px;">\u{1F6E1}\uFE0F</div>
        <h3 style="font-size: 1.2rem; color: var(--text-highlight);">\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E15\u0E35\u0E49\u0E17\u0E35\u0E48\u0E40\u0E1B\u0E34\u0E14\u0E23\u0E31\u0E1A\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E43\u0E19\u0E2B\u0E21\u0E27\u0E14\u0E2B\u0E21\u0E39\u0E48\u0E19\u0E35\u0E49</h3>
        <p style="font-size: 0.9rem; color: var(--text-muted); margin: 6px 0 16px;">\u0E01\u0E14\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E2B\u0E49\u0E2D\u0E07\u0E2B\u0E32\u0E15\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E23\u0E27\u0E1A\u0E23\u0E27\u0E21\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E23\u0E48\u0E27\u0E21\u0E17\u0E35\u0E21\u0E44\u0E14\u0E49\u0E17\u0E31\u0E19\u0E17\u0E35!</p>
        <button class="btn btn-primary btn-sm" id="btn-empty-create-squad">\u2795 \u0E2A\u0E23\u0E49\u0E32\u0E07\u0E15\u0E35\u0E49\u0E43\u0E2B\u0E21\u0E48</button>
      </div>
    `;
    const emptyBtn = container.querySelector("#btn-empty-create-squad");
    if (emptyBtn) {
      emptyBtn.addEventListener("click", () => {
        sound.play("click");
        document.getElementById("modal-create-squad")?.classList.add("active");
      });
    }
    return;
  }
  container.innerHTML = filtered.map((squad) => {
    const isMember = squad.members.some((m) => m.name === user.name);
    const isFull = squad.members.length >= squad.membersMax;
    const vacantSlots = squad.membersMax - squad.members.length;
    return `
      <div class="squad-card" data-squad-id="${squad.id}">
        <div>
          <div class="squad-top">
            <span class="squad-game-badge">\u{1F3AE} ${squad.gameName}</span>
            <span class="squad-status-badge ${squad.status}">
              ${isFull ? "\u{1F512} \u0E15\u0E35\u0E49\u0E40\u0E15\u0E47\u0E21\u0E41\u0E25\u0E49\u0E27" : `\u{1F7E2} \u0E23\u0E31\u0E1A\u0E2A\u0E21\u0E31\u0E04\u0E23 (${squad.members.length}/${squad.membersMax})`}
            </span>
          </div>

          <h3 class="squad-title" style="margin: 12px 0 8px;">${squad.title}</h3>

          <div class="squad-meta-tags">
            <span class="squad-meta-item">\u{1F3AF} ${squad.mode}</span>
            <span class="squad-meta-item">\u{1F3C6} ${squad.rankRequired}</span>
            <span class="squad-meta-item">\u{1F30F} ${squad.server}</span>
            ${squad.micRequired ? '<span class="squad-meta-item" style="color: var(--accent);">\u{1F399}\uFE0F \u0E15\u0E49\u0E2D\u0E07\u0E43\u0E0A\u0E49\u0E44\u0E21\u0E04\u0E4C</span>' : ""}
          </div>
        </div>

        <!-- Slots Visualizer -->
        <div class="squad-slots-wrap">
          <div class="squad-slots-header">
            <span>\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E43\u0E19\u0E1B\u0E32\u0E23\u0E4C\u0E15\u0E35\u0E49</span>
            <span>\u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E2D\u0E35\u0E01 <strong>${vacantSlots > 0 ? vacantSlots : 0}</strong> \u0E17\u0E35\u0E48</span>
          </div>

          <div class="squad-slots-avatars">
            ${squad.members.map((m) => `
              <div class="slot-circle filled btn-lfg-member-profile" data-member-name="${m.name}" title="${m.name} (${m.role}) - \u0E04\u0E25\u0E34\u0E01\u0E14\u0E39\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C / \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19" style="cursor: pointer;">
                <img src="${m.avatar}" alt="${m.name}">
              </div>
            `).join("")}

            ${Array.from({ length: Math.max(0, vacantSlots) }).map(() => `
              <div class="slot-circle" title="\u0E15\u0E33\u0E41\u0E2B\u0E19\u0E48\u0E07\u0E27\u0E48\u0E32\u0E07">
                +
              </div>
            `).join("")}
          </div>

          <div class="squad-roles-needed">
            <span>\u0E15\u0E33\u0E41\u0E2B\u0E19\u0E48\u0E07\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23:</span>
            <strong>${squad.rolesNeeded.join(", ")}</strong>
          </div>
        </div>

        <!-- Actions -->
        <div class="squad-bottom-actions">
          <div style="font-size: 0.8rem; color: var(--text-muted);">
            \u0E2B\u0E31\u0E27\u0E2B\u0E19\u0E49\u0E32\u0E15\u0E35\u0E49: <span class="btn-lfg-member-profile" data-member-name="${squad.host.name}" style="color: var(--text-primary); font-weight: 600; cursor: pointer;" title="\u0E04\u0E25\u0E34\u0E01\u0E14\u0E39\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C / \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19">${squad.host.name}</span>
          </div>

          <div style="display: flex; gap: 8px;">
            ${isMember ? `
              <button class="btn btn-primary btn-sm btn-squad-voice" data-squad-id="${squad.id}" title="\u0E40\u0E1B\u0E34\u0E14\u0E44\u0E21\u0E04\u0E4C\u0E04\u0E38\u0E22\u0E01\u0E31\u0E1A\u0E17\u0E35\u0E21">
                \u{1F399}\uFE0F \u0E40\u0E02\u0E49\u0E32\u0E2B\u0E49\u0E2D\u0E07\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E17\u0E35\u0E21
              </button>
              <button class="btn btn-secondary btn-sm btn-leave-squad" data-squad-id="${squad.id}" style="color: var(--accent);">
                \u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E15\u0E35\u0E49
              </button>
            ` : `
              <button class="btn btn-primary btn-sm btn-join-squad" data-squad-id="${squad.id}" ${isFull ? 'disabled style="opacity: 0.5;"' : ""}>
                ${isFull ? "\u0E15\u0E35\u0E49\u0E40\u0E15\u0E47\u0E21" : "\u26A1 \u0E02\u0E2D\u0E40\u0E02\u0E49\u0E32\u0E15\u0E35\u0E49"}
              </button>
            `}
          </div>
        </div>
      </div>
    `;
  }).join("");
  container.querySelectorAll(".btn-squad-voice").forEach((btn) => {
    btn.addEventListener("click", async () => {
      sound.play("join");
      Promise.resolve().then(() => (init_voiceChat(), voiceChat_exports)).then(async ({ voiceManager: voiceManager2 }) => {
        await voiceManager2.connect("vc-raid");
        store.setTab("chat");
      });
    });
  });
  container.querySelectorAll(".btn-join-squad").forEach((btn) => {
    btn.addEventListener("click", () => {
      const squadId = btn.dataset.squadId;
      const squad = squads.find((s) => s.id === squadId);
      if (!squad) return;
      sound.play("click");
      const modal = document.getElementById("modal-join-squad");
      if (modal) {
        modal.dataset.targetSquadId = squadId;
        const roleSelect = modal.querySelector("#join-squad-role-select");
        if (roleSelect) {
          roleSelect.innerHTML = squad.rolesNeeded.map((r) => `<option value="${r}">${r}</option>`).join("") + `<option value="Flex / Any Role">\u0E15\u0E33\u0E41\u0E2B\u0E19\u0E48\u0E07\u0E2D\u0E30\u0E44\u0E23\u0E01\u0E47\u0E44\u0E14\u0E49 (Flex)</option>`;
        }
        modal.classList.add("active");
      }
    });
  });
  container.querySelectorAll(".btn-leave-squad").forEach((btn) => {
    btn.addEventListener("click", () => {
      const squadId = btn.dataset.squadId;
      sound.play("click");
      store.leaveSquad(squadId);
      showToast3("\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E15\u0E35\u0E49\u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22\u0E41\u0E25\u0E49\u0E27", "info");
    });
  });
  container.querySelectorAll(".btn-lfg-member-profile").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const memberName = btn.dataset.memberName;
      sound.play("click");
      openPlayerProfile(memberName);
    });
  });
}
function showToast3(message, type = "info") {
  const container = document.getElementById("toast-container");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 300);
  }, 2600);
}

// js/components/tournaments.js
init_store();
init_audio();
function renderTournaments(container) {
  if (!container) return;
  const { tournaments } = store.state;
  container.innerHTML = tournaments.map((tour) => {
    return `
      <div class="tour-featured-card" data-tour-id="${tour.id}">
        <img src="${tour.banner}" alt="${tour.title}" class="tour-banner-img">
        <div class="tour-banner-overlay"></div>

        <div class="tour-card-body">
          <div class="tour-header-info">
            <div>
              <span class="hero-badge" style="margin-bottom: 8px;">${tour.badge}</span>
              <h2 class="tour-title">${tour.title}</h2>
              <p style="color: var(--secondary); font-size: 0.95rem; margin-top: 4px;">\u{1F3AE} \u0E40\u0E01\u0E21: ${tour.game}</p>
            </div>

            <div class="prize-pool-badge">
              \u{1F3C6} ${tour.prizePool}
            </div>
          </div>

          <!-- Quick specs -->
          <div class="tour-details-grid">
            <div class="tour-detail-item">
              <h5>\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E01\u0E32\u0E23\u0E41\u0E02\u0E48\u0E07\u0E02\u0E31\u0E19</h5>
              <p>${tour.format}</p>
            </div>
            <div class="tour-detail-item">
              <h5>\u0E17\u0E35\u0E21\u0E17\u0E35\u0E48\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19</h5>
              <p>${tour.teamsRegistered} / ${tour.teamsMax} \u0E17\u0E35\u0E21</p>
            </div>
            <div class="tour-detail-item">
              <h5>\u0E27\u0E31\u0E19\u0E40\u0E23\u0E34\u0E48\u0E21\u0E01\u0E32\u0E23\u0E41\u0E02\u0E48\u0E07\u0E02\u0E31\u0E19</h5>
              <p>${tour.startDate}</p>
            </div>
            <div class="tour-detail-item">
              <h5>\u0E2A\u0E16\u0E32\u0E19\u0E30</h5>
              <p style="color: var(--success);">${tour.status === "open" ? "\u{1F7E2} \u0E40\u0E1B\u0E34\u0E14\u0E23\u0E31\u0E1A\u0E2A\u0E21\u0E31\u0E04\u0E23" : "\u2694\uFE0F \u0E01\u0E33\u0E25\u0E31\u0E07\u0E41\u0E02\u0E48\u0E07\u0E02\u0E31\u0E19"}</p>
            </div>
          </div>

          <div style="display: flex; gap: 12px; align-items: center; margin-bottom: 20px;">
            <button class="btn btn-primary btn-register-tour" data-tour-id="${tour.id}">
              \u{1F4DD} \u0E2A\u0E21\u0E31\u0E04\u0E23\u0E41\u0E02\u0E48\u0E07\u0E02\u0E31\u0E19 (\u0E1F\u0E23\u0E35)
            </button>
            <button class="btn btn-secondary btn-share-tour" data-title="${tour.title}">
              \u{1F4E2} \u0E0A\u0E27\u0E19\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E23\u0E48\u0E27\u0E21\u0E17\u0E35\u0E21
            </button>
          </div>

          <!-- Interactive Tournament Bracket -->
          <div class="bracket-section">
            <h3 class="bracket-title">\u26A1 \u0E1C\u0E31\u0E07\u0E2A\u0E32\u0E22\u0E01\u0E32\u0E23\u0E41\u0E02\u0E48\u0E07\u0E02\u0E31\u0E19\u0E2A\u0E14 (Live Bracket Tree)</h3>
            <div class="bracket-rounds-wrap">
              ${tour.brackets && tour.brackets.length ? tour.brackets.map((round) => `
                <div class="bracket-round-col">
                  <div class="round-name">${round.round}</div>
                  ${round.matches.map((match) => `
                    <div class="match-card">
                      <div class="match-team ${match.winner === match.teamA ? "winner" : ""}">
                        <span>${match.teamA}</span>
                        <span class="match-score">${match.scoreA}</span>
                      </div>
                      <div class="match-team ${match.winner === match.teamB ? "winner" : ""}">
                        <span>${match.teamB}</span>
                        <span class="match-score">${match.scoreB}</span>
                      </div>
                      ${match.date ? `
                        <div style="font-size: 0.75rem; color: var(--warning); text-align: center; margin-top: 4px;">
                          \u23F0 \u0E16\u0E48\u0E32\u0E22\u0E17\u0E2D\u0E14\u0E2A\u0E14: ${match.date}
                        </div>
                      ` : ""}
                    </div>
                  `).join("")}
                </div>
              `).join("") : '<p style="color: var(--text-muted);">\u0E01\u0E33\u0E25\u0E31\u0E07\u0E08\u0E31\u0E14\u0E2A\u0E32\u0E22\u0E01\u0E32\u0E23\u0E41\u0E02\u0E48\u0E07\u0E02\u0E31\u0E19</p>'}
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");
  container.querySelectorAll(".btn-register-tour").forEach((btn) => {
    btn.addEventListener("click", () => {
      const tourId = btn.dataset.tourId;
      sound.play("click");
      const modal = document.getElementById("modal-register-tour");
      if (modal) {
        modal.dataset.tourId = tourId;
        modal.classList.add("active");
      }
    });
  });
  container.querySelectorAll(".btn-share-tour").forEach((btn) => {
    btn.addEventListener("click", () => {
      sound.play("click");
      if (navigator.clipboard) {
        navigator.clipboard.writeText(window.location.href);
      }
      showToast4("\u{1F517} \u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E25\u0E34\u0E07\u0E01\u0E4C\u0E01\u0E32\u0E23\u0E41\u0E02\u0E48\u0E07\u0E02\u0E31\u0E19\u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22!", "success");
    });
  });
}
function showToast4(message, type = "info") {
  const container = document.getElementById("toast-container");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 300);
  }, 2600);
}

// js/components/chatLounge.js
init_store();
init_audio();
init_voiceChat();
var currentTextChannel = "general";
var currentViewMode = "text";
var BASE_TEXT_CHANNELS = [
  { id: "general", name: "\u0E1E\u0E39\u0E14\u0E04\u0E38\u0E22\u0E17\u0E31\u0E48\u0E27\u0E44\u0E1B", icon: "\u{1F4AC}" },
  { id: "valorant", name: "valorant-th", icon: "\u{1F3AF}" },
  { id: "genshin", name: "genshin-impact", icon: "\u{1F338}" },
  { id: "party", name: "\u0E0A\u0E27\u0E19\u0E15\u0E35\u0E49\u0E14\u0E48\u0E27\u0E19", icon: "\u{1F91D}" },
  { id: "memes", name: "\u0E21\u0E35\u0E21 & \u0E44\u0E2E\u0E44\u0E25\u0E17\u0E4C", icon: "\u{1F3AD}" }
];
function getCustomTextChannels() {
  try {
    const saved = localStorage.getItem("NEXUS_CUSTOM_TEXT_CHANNELS");
    if (saved) return JSON.parse(saved);
  } catch (e) {
  }
  return [];
}
function saveCustomTextChannels(channels) {
  try {
    localStorage.setItem("NEXUS_CUSTOM_TEXT_CHANNELS", JSON.stringify(channels));
  } catch (e) {
  }
}
function addCustomTextChannel({ name, icon, category, topic }) {
  const custom = getCustomTextChannels();
  const newChan = {
    id: `txt-custom-${Date.now()}`,
    name: name.trim(),
    icon: icon || "\u{1F4AC}",
    category: category || "general",
    topic: topic || "",
    isCustom: true,
    createdBy: store.state.user.name
  };
  custom.unshift(newChan);
  saveCustomTextChannels(custom);
  return newChan;
}
function deleteCustomTextChannel(channelId) {
  let custom = getCustomTextChannels();
  custom = custom.filter((c) => c.id !== channelId);
  saveCustomTextChannels(custom);
  if (currentTextChannel === channelId) {
    currentTextChannel = "general";
  }
}
function renderChatLounge(container) {
  if (!container) return;
  const { chatMessages, user } = store.state;
  const filteredMessages = chatMessages.filter((m) => m.channel === currentTextChannel);
  const isVoiceConnected = voiceManager.state.connected;
  const customTextChannels = getCustomTextChannels();
  const allTextChannels = [...BASE_TEXT_CHANNELS, ...customTextChannels];
  const allVoiceChannels = voiceManager.channels;
  container.innerHTML = `
    <div class="chat-lounge-container">
      <!-- Channels Sidebar -->
      <div class="chat-channels-sidebar">
        <!-- Top Create Channel Action -->
        <div class="channels-header-action-row">
          <span class="channels-super-title">\u{1F579}\uFE0F GAMER CHANNELS</span>
          <button class="btn btn-primary btn-xs" id="btn-open-create-channel" title="\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E2B\u0E49\u0E2D\u0E07\u0E1E\u0E39\u0E14\u0E04\u0E38\u0E22\u0E2B\u0E23\u0E37\u0E2D\u0E2B\u0E49\u0E2D\u0E07\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E43\u0E2B\u0E21\u0E48">
            \u2795 \u0E2A\u0E23\u0E49\u0E32\u0E07\u0E2B\u0E49\u0E2D\u0E07
          </button>
        </div>

        <!-- Text Channels Section -->
        <div class="channels-section-title">
          <span>\u{1F4AC} \u0E0A\u0E48\u0E2D\u0E07\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21 (#TEXT)</span>
        </div>
        ${allTextChannels.map((ch) => `
          <div class="channel-btn-row">
            <button class="channel-btn ${currentViewMode === "text" && currentTextChannel === ch.id ? "active" : ""}" data-type="text" data-channel="${ch.id}">
              <span>${ch.icon} # ${ch.name}</span>
            </button>
            ${ch.isCustom ? `
              <button class="btn-delete-channel" data-del-type="text" data-del-id="${ch.id}" title="\u0E25\u0E1A\u0E2B\u0E49\u0E2D\u0E07\u0E19\u0E35\u0E49">&times;</button>
            ` : ""}
          </div>
        `).join("")}

        <!-- Voice Channels Section -->
        <div class="channels-section-title" style="margin-top: 18px;">
          <span>\u{1F50A} \u0E2B\u0E49\u0E2D\u0E07\u0E40\u0E2A\u0E35\u0E22\u0E07 & \u0E40\u0E1B\u0E34\u0E14\u0E44\u0E21\u0E04\u0E4C (#VOICE)</span>
        </div>
        ${allVoiceChannels.map((vc) => {
    const isThisActive = isVoiceConnected && voiceManager.state.channelId === vc.id;
    return `
            <div class="channel-btn-row">
              <button class="channel-btn voice-channel-btn ${isThisActive ? "active-voice" : ""}" data-type="voice" data-vc-id="${vc.id}">
                <div class="voice-btn-inner">
                  <span>${vc.icon} ${vc.name}</span>
                  <span class="voice-active-badge ${isThisActive ? "live" : ""}">
                    ${isThisActive ? "\u{1F7E2} \u0E43\u0E19\u0E2B\u0E49\u0E2D\u0E07" : `\u{1F465} ${vc.members ? vc.members.length : 0}`}
                  </span>
                </div>
              </button>
              ${vc.isCustom ? `
                <button class="btn-delete-channel" data-del-type="voice" data-del-id="${vc.id}" title="\u0E25\u0E1A\u0E2B\u0E49\u0E2D\u0E07\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E19\u0E35\u0E49">&times;</button>
              ` : ""}
            </div>
          `;
  }).join("")}

        <!-- Bottom User Voice Status Strip -->
        <div class="voice-user-status-strip">
          <div class="user-avatar-mini-wrap">
            <img src="${user.avatar}" alt="${user.name}" class="voice-strip-avatar ${isVoiceConnected && voiceManager.state.isSpeaking ? "speaking-ring" : ""}">
            <span class="user-status-dot online"></span>
          </div>
          <div class="voice-strip-user-info">
            <div class="voice-strip-name">${user.name}</div>
            <div class="voice-strip-sub">${isVoiceConnected ? `\u{1F50A} ${voiceManager.state.channelName.substring(0, 16)}...` : "\u{1F7E2} \u0E2A\u0E41\u0E15\u0E19\u0E14\u0E4C\u0E1A\u0E32\u0E22"}</div>
          </div>
          <div class="voice-strip-actions">
            <button class="btn-strip-ctrl ${voiceManager.state.isMuted ? "muted" : ""}" id="btn-strip-mute" title="${voiceManager.state.isMuted ? "\u0E40\u0E1B\u0E34\u0E14\u0E44\u0E21\u0E04\u0E4C" : "\u0E1B\u0E34\u0E14\u0E44\u0E21\u0E04\u0E4C"}">
              ${voiceManager.state.isMuted ? "\u{1F507}" : "\u{1F399}\uFE0F"}
            </button>
            <button class="btn-strip-ctrl ${voiceManager.state.isDeafened ? "deafened" : ""}" id="btn-strip-deafen" title="${voiceManager.state.isDeafened ? "\u0E40\u0E1B\u0E34\u0E14\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E2B\u0E39\u0E1F\u0E31\u0E07" : "\u0E1B\u0E34\u0E14\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E2B\u0E39\u0E1F\u0E31\u0E07"}">
              ${voiceManager.state.isDeafened ? "\u{1F515}" : "\u{1F3A7}"}
            </button>
          </div>
        </div>
      </div>

      <!-- Main Area: Either Voice Room Stage or Text Chat Stream -->
      <div class="chat-main-area" id="chat-main-viewport">
        ${currentViewMode === "voice" && isVoiceConnected ? renderVoiceRoomHTML() : renderTextChatHTML(filteredMessages, allTextChannels, allVoiceChannels)}
      </div>
    </div>
  `;
  bindLoungeEvents(container);
  voiceManager.subscribe(() => {
    const isVoice = currentViewMode === "voice" && voiceManager.state.connected;
    if (isVoice) {
      const mainView = container.querySelector("#chat-main-viewport");
      if (mainView) mainView.innerHTML = renderVoiceRoomHTML();
      bindVoiceRoomControls(container);
    }
  });
}
function renderTextChatHTML(filteredMessages, allTextChannels = [], allVoiceChannels = []) {
  return `
    <!-- Mobile Horizontal Channels Bar -->
    <div class="chat-mobile-channels-bar">
      ${allTextChannels.map((ch) => `
        <button type="button" class="chat-mobile-chip ${currentViewMode === "text" && currentTextChannel === ch.id ? "active" : ""}" data-type="text" data-channel="${ch.id}">
          <span>${ch.icon} #${ch.name}</span>
        </button>
      `).join("")}
      ${allVoiceChannels.map((vc) => `
        <button type="button" class="chat-mobile-chip voice-chip ${voiceManager.state.connected && voiceManager.state.channelId === vc.id ? "active" : ""}" data-type="voice" data-vc-id="${vc.id}">
          <span>\u{1F50A} ${vc.name}</span>
        </button>
      `).join("")}
    </div>

    <div class="chat-header-bar">
      <div class="chat-header-title">
        <span>\u{1F4AC} # ${getChannelTitle(currentTextChannel)}</span>
        <span class="badge-pill" style="font-size: 0.75rem; background: rgba(var(--primary-rgb), 0.2); color: var(--primary); padding: 2px 8px; border-radius: 9999px;">
          Live Chat
        </span>
      </div>
      <div class="chat-header-right-actions">
        ${voiceManager.state.connected ? `
          <button class="btn btn-sm btn-outline" id="btn-switch-to-voice" style="border-color: #00ff88; color: #00ff88;">
            \u{1F50A} \u0E01\u0E25\u0E31\u0E1A\u0E40\u0E02\u0E49\u0E32\u0E2B\u0E49\u0E2D\u0E07\u0E40\u0E2A\u0E35\u0E22\u0E07 (${voiceManager.state.channelName.substring(0, 12)}...)
          </button>
        ` : `
          <button class="btn btn-sm btn-primary" id="btn-quick-join-voice">
            \u{1F399}\uFE0F \u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E2B\u0E49\u0E2D\u0E07\u0E1E\u0E39\u0E14\u0E04\u0E38\u0E22\u0E40\u0E2A\u0E35\u0E22\u0E07
          </button>
        `}
      </div>
    </div>

    <div class="chat-messages-scroll" id="chat-stream-box">
      ${filteredMessages.length ? filteredMessages.map((msg) => `
        <div class="chat-message-row">
          <img src="${msg.user.avatar}" alt="${msg.user.name}" class="chat-user-avatar btn-chat-user-profile" data-username="${msg.user.name}" title="\u0E04\u0E25\u0E34\u0E01\u0E14\u0E39\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C / \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19" style="cursor: pointer;">
          <div class="chat-bubble-wrap">
            <div class="chat-meta">
              <span class="chat-user-name btn-chat-user-profile" data-username="${msg.user.name}" title="\u0E04\u0E25\u0E34\u0E01\u0E14\u0E39\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C / \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19" style="color: ${msg.user.roleColor || "#fff"}; cursor: pointer;">${msg.user.name}</span>
              <span class="chat-user-badge" style="background: rgba(255,255,255,0.08); color: ${msg.user.roleColor || "var(--text-secondary)"};">
                ${msg.user.badge || "Member"}
              </span>
              <span class="chat-time">${msg.time}</span>
            </div>
            <div class="chat-text-content">
              ${msg.text}
            </div>
          </div>
        </div>
      `).join("") : '<p style="text-align: center; color: var(--text-muted); padding: 40px;">\u0E2B\u0E49\u0E2D\u0E07\u0E19\u0E35\u0E49\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21 \u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19\u0E04\u0E38\u0E22\u0E01\u0E31\u0E19\u0E44\u0E14\u0E49\u0E40\u0E25\u0E22!</p>'}
    </div>

    <!-- Input Row -->
    <form class="chat-input-container" id="chat-send-form">
      <button type="button" class="chat-emoji-btn" id="btn-quick-emoji" title="\u0E43\u0E2A\u0E48\u0E2D\u0E35\u0E42\u0E21\u0E08\u0E34">\u{1F604}</button>
      <input type="text" class="chat-input-box" id="chat-msg-input" placeholder="\u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E48\u0E07\u0E43\u0E19 #${getChannelTitle(currentTextChannel)}... (\u0E01\u0E14 Enter \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2A\u0E48\u0E07)" autocomplete="off" required>
      <button type="submit" class="btn btn-primary btn-sm">\u0E2A\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21 \u{1F680}</button>
    </form>
  `;
}
function renderVoiceRoomHTML() {
  const { channelName, members, isMuted: isMuted2, isDeafened, isSpeaking } = voiceManager.state;
  return `
    <div class="voice-room-stage">
      <!-- Voice Header -->
      <div class="voice-room-header">
        <div>
          <div class="voice-room-title">
            <span>\u{1F50A} ${channelName}</span>
            <span class="voice-status-pill-live">
              <span class="pulse-dot-green"></span>
              \u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D\u0E44\u0E21\u0E04\u0E4C\u0E2A\u0E14\u0E41\u0E25\u0E49\u0E27 (18ms \u2022 Ping \u0E1B\u0E01\u0E15\u0E34)
            </span>
          </div>
          <div class="voice-room-sub">\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E43\u0E19\u0E2B\u0E49\u0E2D\u0E07: ${members.length} \u0E04\u0E19 \u2022 \u0E23\u0E30\u0E1A\u0E1A\u0E15\u0E23\u0E27\u0E08\u0E08\u0E31\u0E1A\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E1E\u0E39\u0E14\u0E41\u0E1A\u0E1A\u0E40\u0E23\u0E35\u0E22\u0E25\u0E44\u0E17\u0E21\u0E4C</div>
        </div>

        <div class="voice-header-actions">
          <button class="btn btn-outline btn-sm" id="btn-voice-switch-text">
            \u{1F4AC} \u0E14\u0E39\u0E0A\u0E48\u0E2D\u0E07\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21
          </button>
          <button class="btn btn-danger btn-sm" id="btn-voice-disconnect-room">
            \u{1F534} \u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E2B\u0E49\u0E2D\u0E07
          </button>
        </div>
      </div>

      <!-- Soundboard Memes -->
      <div class="voice-soundboard-bar">
        <span class="soundboard-label">\u{1F50A} Soundboard:</span>
        <button class="btn-soundboard-chip" data-snd="fire">\u{1F525} \u0E44\u0E1F\u0E25\u0E38\u0E01!</button>
        <button class="btn-soundboard-chip" data-snd="crown">\u{1F451} GG Victory!</button>
        <button class="btn-soundboard-chip" data-snd="laser">\u26A1 Laser Beam!</button>
        <button class="btn-soundboard-chip" data-snd="target">\u{1F3AF} Nice Shot!</button>
        <button class="btn-soundboard-chip" data-snd="heart">\u2764\uFE0F \u0E2A\u0E48\u0E07\u0E43\u0E08</button>
        <button class="btn-soundboard-chip" data-snd="glitch">\u{1F47E} Cyber Glitch</button>
      </div>

      <!-- Voice Members Grid Stage -->
      <div class="voice-members-grid">
        ${members.map((member) => {
    const isMemberSpeaking = member.isSpeaking;
    return `
            <div class="voice-member-card ${isMemberSpeaking ? "speaking-active" : ""} ${member.isMuted ? "muted" : ""}">
              <div class="voice-member-avatar-wrap">
                <img src="${member.avatar}" alt="${member.name}" class="voice-member-avatar">
                ${isMemberSpeaking ? `
                  <div class="voice-wave-bars">
                    <span class="voice-wave-bar"></span>
                    <span class="voice-wave-bar"></span>
                    <span class="voice-wave-bar"></span>
                    <span class="voice-wave-bar"></span>
                    <span class="voice-wave-bar"></span>
                  </div>
                ` : ""}
                <div class="voice-status-icon-badge ${member.isMuted ? "muted" : isMemberSpeaking ? "speaking" : ""}">
                  ${member.isMuted ? "\u{1F507}" : isMemberSpeaking ? "\u{1F399}\uFE0F" : "\u{1F399}\uFE0F"}
                </div>
              </div>

              <div class="voice-member-info">
                <div class="voice-member-name">
                  ${member.name} ${member.isMe ? '<span class="you-badge">(\u0E04\u0E38\u0E13)</span>' : ""}
                </div>
                <div class="voice-member-role">${member.role || "Gamer"}</div>
              </div>

              <div class="voice-member-status-label">
                ${member.isMuted ? "\u{1F507} \u0E1B\u0E34\u0E14\u0E44\u0E21\u0E42\u0E04\u0E23\u0E42\u0E1F\u0E19" : isMemberSpeaking ? "\u{1F7E2} \u0E01\u0E33\u0E25\u0E31\u0E07\u0E1E\u0E39\u0E14..." : "\u{1F399}\uFE0F \u0E44\u0E21\u0E04\u0E4C\u0E1E\u0E23\u0E49\u0E2D\u0E21"}
              </div>
            </div>
          `;
  }).join("")}
      </div>

      <!-- Bottom Voice Controls Panel -->
      <div class="voice-bottom-controls-bar">
        <!-- Live Microphone Sensitivity Level Meter -->
        <div class="voice-live-meter-wrap">
          <div class="meter-label">
            <span>\u{1F399}\uFE0F \u0E23\u0E30\u0E14\u0E31\u0E1A\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E44\u0E21\u0E04\u0E4C\u0E2A\u0E14 (Live Mic Level):</span>
            <span id="voice-level-txt">${isMuted2 ? "Muted" : isSpeaking ? "Speaking" : "Ready"}</span>
          </div>
          <div class="voice-live-meter-track">
            <div class="voice-live-meter-fill" id="voice-live-meter-fill" style="width: ${voiceManager.state.voiceLevel}%;"></div>
          </div>
        </div>

        <!-- Voice Room Output Volume Slider -->
        <div class="voice-output-vol-wrap">
          <div class="meter-label">
            <span>\u{1F50A} \u0E23\u0E30\u0E14\u0E31\u0E1A\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E2B\u0E49\u0E2D\u0E07 (Output):</span>
            <span id="voice-output-vol-label" style="font-family: var(--font-mono); color: var(--primary); font-weight: 700;">${sound.getVolume()}%</span>
          </div>
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 0.8rem;">\u{1F508}</span>
            <input type="range" min="0" max="100" value="${sound.getVolume()}" class="voice-vol-slider" id="voice-room-volume-slider" title="\u0E1B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E2B\u0E49\u0E2D\u0E07\u0E1E\u0E39\u0E14\u0E04\u0E38\u0E22">
            <span style="font-size: 0.8rem;">\u{1F50A}</span>
          </div>
        </div>

        <!-- Big Voice Action Buttons -->
        <div class="voice-main-actions">
          <button class="btn-voice-round ${isMuted2 ? "active-mute" : ""}" id="btn-main-toggle-mute" title="${isMuted2 ? "\u0E40\u0E1B\u0E34\u0E14\u0E44\u0E21\u0E42\u0E04\u0E23\u0E42\u0E1F\u0E19" : "\u0E1B\u0E34\u0E14\u0E44\u0E21\u0E42\u0E04\u0E23\u0E42\u0E1F\u0E19"}">
            <span class="btn-icon">${isMuted2 ? "\u{1F507}" : "\u{1F399}\uFE0F"}</span>
            <span class="btn-label">${isMuted2 ? "\u0E40\u0E1B\u0E34\u0E14\u0E44\u0E21\u0E04\u0E4C" : "\u0E1B\u0E34\u0E14\u0E44\u0E21\u0E04\u0E4C"}</span>
          </button>

          <button class="btn-voice-round ${isDeafened ? "active-deafen" : ""}" id="btn-main-toggle-deafen" title="${isDeafened ? "\u0E40\u0E1B\u0E34\u0E14\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E2B\u0E49\u0E2D\u0E07" : "\u0E1B\u0E34\u0E14\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E2B\u0E39\u0E1F\u0E31\u0E07"}">
            <span class="btn-icon">${isDeafened ? "\u{1F515}" : "\u{1F3A7}"}</span>
            <span class="btn-label">${isDeafened ? "\u0E40\u0E1B\u0E34\u0E14\u0E2B\u0E39\u0E1F\u0E31\u0E07" : "\u0E1B\u0E34\u0E14\u0E40\u0E2A\u0E35\u0E22\u0E07"}</span>
          </button>

          <button class="btn-voice-round disconnect" id="btn-main-disconnect" title="\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E2B\u0E49\u0E2D\u0E07\u0E40\u0E2A\u0E35\u0E22\u0E07">
            <span class="btn-icon">\u{1F534}</span>
            <span class="btn-label">\u0E15\u0E31\u0E14\u0E2A\u0E32\u0E22</span>
          </button>
        </div>
      </div>
    </div>
  `;
}
function bindLoungeEvents(container) {
  const createChanBtn = container.querySelector("#btn-open-create-channel");
  if (createChanBtn) {
    createChanBtn.addEventListener("click", () => {
      sound.play("click");
      document.getElementById("modal-create-channel")?.classList.add("active");
    });
  }
  container.querySelectorAll(".btn-delete-channel").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const type = btn.dataset.delType;
      const id = btn.dataset.delId;
      if (confirm("\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A\u0E2B\u0E49\u0E2D\u0E07\u0E1E\u0E39\u0E14\u0E04\u0E38\u0E22\u0E19\u0E35\u0E49\u0E43\u0E0A\u0E48\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48?")) {
        sound.play("click");
        if (type === "text") {
          deleteCustomTextChannel(id);
        } else {
          voiceManager.deleteVoiceChannel(id);
        }
        renderChatLounge(container);
      }
    });
  });
  const scrollBox = container.querySelector("#chat-stream-box");
  if (scrollBox) {
    scrollBox.scrollTop = scrollBox.scrollHeight;
  }
  container.querySelectorAll('.channel-btn[data-type="text"], .chat-mobile-chip[data-type="text"]').forEach((btn) => {
    btn.addEventListener("click", () => {
      currentTextChannel = btn.dataset.channel;
      currentViewMode = "text";
      sound.play("tab");
      renderChatLounge(container);
    });
  });
  container.querySelectorAll('.channel-btn[data-type="voice"], .chat-mobile-chip[data-type="voice"]').forEach((btn) => {
    btn.addEventListener("click", async () => {
      const vcId = btn.dataset.vcId;
      await voiceManager.connect(vcId);
      currentViewMode = "voice";
      renderChatLounge(container);
    });
  });
  const quickJoin = container.querySelector("#btn-quick-join-voice");
  if (quickJoin) {
    quickJoin.addEventListener("click", async () => {
      await voiceManager.connect("vc-general");
      currentViewMode = "voice";
      renderChatLounge(container);
    });
  }
  const switchToVoice = container.querySelector("#btn-switch-to-voice");
  if (switchToVoice) {
    switchToVoice.addEventListener("click", () => {
      currentViewMode = "voice";
      sound.play("tab");
      renderChatLounge(container);
    });
  }
  const stripMute = container.querySelector("#btn-strip-mute");
  if (stripMute) {
    stripMute.addEventListener("click", () => {
      voiceManager.toggleMute();
      renderChatLounge(container);
    });
  }
  const stripDeafen = container.querySelector("#btn-strip-deafen");
  if (stripDeafen) {
    stripDeafen.addEventListener("click", () => {
      voiceManager.toggleDeafen();
      renderChatLounge(container);
    });
  }
  const form = container.querySelector("#chat-send-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = form.querySelector("#chat-msg-input");
      const text = input.value;
      if (!text.trim()) return;
      sound.play("message");
      store.sendChatMessage(text, currentTextChannel);
      input.value = "";
      simulateGamerResponse(currentTextChannel);
    });
  }
  container.querySelectorAll(".btn-chat-user-profile").forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      const uname = trigger.dataset.username;
      sound.play("click");
      openPlayerProfile(uname);
    });
  });
  if (currentViewMode === "voice") {
    bindVoiceRoomControls(container);
  }
}
function bindVoiceRoomControls(container) {
  const btnSwitchText = container.querySelector("#btn-voice-switch-text");
  if (btnSwitchText) {
    btnSwitchText.addEventListener("click", () => {
      currentViewMode = "text";
      sound.play("tab");
      renderChatLounge(container);
    });
  }
  const btnDiscRoom = container.querySelector("#btn-voice-disconnect-room");
  if (btnDiscRoom) {
    btnDiscRoom.addEventListener("click", () => {
      voiceManager.disconnect();
      currentViewMode = "text";
      renderChatLounge(container);
    });
  }
  const btnToggleMute = container.querySelector("#btn-main-toggle-mute");
  if (btnToggleMute) {
    btnToggleMute.addEventListener("click", () => {
      voiceManager.toggleMute();
      renderChatLounge(container);
    });
  }
  const btnToggleDeafen = container.querySelector("#btn-main-toggle-deafen");
  if (btnToggleDeafen) {
    btnToggleDeafen.addEventListener("click", () => {
      voiceManager.toggleDeafen();
      renderChatLounge(container);
    });
  }
  const btnMainDisc = container.querySelector("#btn-main-disconnect");
  if (btnMainDisc) {
    btnMainDisc.addEventListener("click", () => {
      voiceManager.disconnect();
      currentViewMode = "text";
      renderChatLounge(container);
    });
  }
  const voiceVolSlider = container.querySelector("#voice-room-volume-slider");
  const voiceVolLabel = container.querySelector("#voice-output-vol-label");
  if (voiceVolSlider) {
    voiceVolSlider.addEventListener("input", (e) => {
      const val = parseInt(e.target.value, 10);
      sound.setVolume(val, false);
      if (voiceVolLabel) voiceVolLabel.textContent = `${val}%`;
    });
    voiceVolSlider.addEventListener("change", (e) => {
      const val = parseInt(e.target.value, 10);
      sound.setVolume(val, true);
    });
  }
  container.querySelectorAll(".btn-soundboard-chip").forEach((btn) => {
    btn.addEventListener("click", () => {
      const snd = btn.dataset.snd;
      voiceManager.playVoiceSoundboard(snd);
    });
  });
}
function setActiveRoom(type, id) {
  if (type === "voice") {
    currentViewMode = "voice";
    voiceManager.connect(id);
  } else {
    currentViewMode = "text";
    currentTextChannel = id;
  }
  const container = document.getElementById("chat-stream-container");
  if (container) renderChatLounge(container);
}
function simulateGamerResponse(channel) {
  const responses = {
    general: [
      { name: "Agent_NeonX", avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=150&q=80", badge: "Radiant", text: "\u0E22\u0E34\u0E19\u0E14\u0E35\u0E15\u0E49\u0E2D\u0E19\u0E23\u0E31\u0E1A\u0E17\u0E38\u0E01\u0E04\u0E19\u0E04\u0E23\u0E31\u0E1A! \u0E43\u0E04\u0E23\u0E2D\u0E22\u0E32\u0E01\u0E04\u0E38\u0E22\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E01\u0E14\u0E40\u0E02\u0E49\u0E32\u0E2B\u0E49\u0E2D\u0E07\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E44\u0E14\u0E49\u0E40\u0E25\u0E22\u0E19\u0E30 \u{1F399}\uFE0F" },
      { name: "Khaosan_Clutcher", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80", badge: "MVP", text: "\u0E21\u0E32\u0E40\u0E1B\u0E34\u0E14\u0E44\u0E21\u0E04\u0E4C\u0E04\u0E38\u0E22\u0E43\u0E19\u0E2B\u0E49\u0E2D\u0E07\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E44\u0E14\u0E49\u0E19\u0E30 \u0E04\u0E38\u0E22\u0E40\u0E2E\u0E2E\u0E32\u0E01\u0E31\u0E19\u0E2D\u0E22\u0E39\u0E48 \u{1F525}" }
    ]
  };
  const pool = responses[channel] || responses.general;
  const pick = pool[Math.floor(Math.random() * pool.length)];
  setTimeout(() => {
    const time = (/* @__PURE__ */ new Date()).toLocaleTimeString("th-TH", { hour: "2-digit", minute: "2-digit" });
    store.state.chatMessages.push({
      id: `msg-${Date.now()}`,
      channel,
      user: {
        name: pick.name,
        avatar: pick.avatar,
        badge: pick.badge,
        roleColor: "var(--secondary)"
      },
      text: pick.text,
      time
    });
    store._saveState();
    sound.play("message");
    const container = document.getElementById("chat-stream-container");
    if (container && currentViewMode === "text") {
      renderChatLounge(container);
    }
  }, 1600);
}
function getChannelTitle(ch) {
  const allText = [...BASE_TEXT_CHANNELS, ...getCustomTextChannels()];
  const found = allText.find((c) => c.id === ch);
  return found ? found.name : ch;
}

// js/components/reviews.js
init_store();
init_audio();
function renderReviews(container) {
  if (!container) return;
  const { reviews } = store.state;
  container.innerHTML = `
    <div class="reviews-container">
      <div style="display: flex; justify-content: space-between; align-items: center; background: var(--bg-card); padding: 20px 24px; border-radius: var(--radius-lg); border: 1px solid var(--border-subtle);">
        <div>
          <h2 style="font-size: 1.4rem; font-weight: 800; color: #fff;">\u2B50 \u0E28\u0E39\u0E19\u0E22\u0E4C\u0E23\u0E27\u0E21\u0E23\u0E35\u0E27\u0E34\u0E27 & \u0E04\u0E30\u0E41\u0E19\u0E19\u0E40\u0E01\u0E21\u0E08\u0E32\u0E01\u0E04\u0E2D\u0E21\u0E21\u0E39\u0E19\u0E34\u0E15\u0E35\u0E49</h2>
          <p style="font-size: 0.9rem; color: var(--text-secondary); margin-top: 4px;">\u0E04\u0E30\u0E41\u0E19\u0E19\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E08\u0E23\u0E34\u0E07\u0E08\u0E32\u0E01\u0E40\u0E2B\u0E25\u0E48\u0E32\u0E40\u0E01\u0E21\u0E40\u0E21\u0E2D\u0E23\u0E4C\u0E15\u0E31\u0E27\u0E08\u0E23\u0E34\u0E07 \u0E40\u0E2A\u0E35\u0E22\u0E07\u0E08\u0E23\u0E34\u0E07</p>
        </div>
        <button class="btn btn-primary btn-sm" id="btn-open-add-review">
          \u270D\uFE0F \u0E40\u0E02\u0E35\u0E22\u0E19\u0E23\u0E35\u0E27\u0E34\u0E27\u0E40\u0E01\u0E21
        </button>
      </div>

      <div style="display: flex; flex-direction: column; gap: 20px;">
        ${reviews.map((rev) => `
          <div class="review-card">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; flex-wrap: wrap;">
              <div style="display: flex; gap: 14px; align-items: center;">
                <img src="${rev.avatar}" alt="${rev.author}" style="width: 44px; height: 44px; border-radius: 50%; object-fit: cover;">
                <div>
                  <div style="display: flex; align-items: center; gap: 8px;">
                    <span style="font-weight: 700; color: #fff; font-size: 1rem;">${rev.author}</span>
                    <span class="badge-pill" style="font-size: 0.75rem; background: rgba(var(--primary-rgb), 0.2); color: var(--primary); padding: 2px 8px; border-radius: 9999px;">
                      \u{1F3AE} ${rev.gameName}
                    </span>
                  </div>
                  <span style="font-size: 0.8rem; color: var(--text-muted);">${rev.date}</span>
                </div>
              </div>

              <div class="review-score-badge">
                \u2605 ${rev.overallRating} / 5.0
              </div>
            </div>

            <!-- Score metrics -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 10px; margin: 16px 0; background: rgba(10, 14, 23, 0.5); padding: 12px; border-radius: var(--radius-md);">
              <div><span style="font-size: 0.75rem; color: var(--text-muted);">\u0E23\u0E30\u0E1A\u0E1A\u0E01\u0E32\u0E23\u0E40\u0E25\u0E48\u0E19 (Gameplay):</span> <strong style="color: var(--secondary);">${rev.scores.gameplay}/10</strong></div>
              <div><span style="font-size: 0.75rem; color: var(--text-muted);">\u0E01\u0E23\u0E32\u0E1F\u0E34\u0E01 & \u0E20\u0E32\u0E1E (Graphics):</span> <strong style="color: var(--secondary);">${rev.scores.graphics}/10</strong></div>
              <div><span style="font-size: 0.75rem; color: var(--text-muted);">\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07 (Story):</span> <strong style="color: var(--secondary);">${rev.scores.story}/10</strong></div>
              <div><span style="font-size: 0.75rem; color: var(--text-muted);">\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A (Soundtrack):</span> <strong style="color: var(--secondary);">${rev.scores.soundtrack}/10</strong></div>
            </div>

            <h3 style="font-size: 1.15rem; font-weight: 800; color: #fff; margin-bottom: 8px;">${rev.title}</h3>
            <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6;">${rev.content}</p>

            <div style="margin-top: 14px; padding-top: 12px; border-top: 1px solid var(--border-subtle); display: flex; justify-content: flex-end;">
              <button class="btn btn-secondary btn-sm" style="font-size: 0.8rem;">\u{1F44D} \u0E21\u0E35\u0E1B\u0E23\u0E30\u0E42\u0E22\u0E0A\u0E19\u0E4C (${rev.likes})</button>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `;
  const addBtn = container.querySelector("#btn-open-add-review");
  if (addBtn) {
    addBtn.addEventListener("click", () => {
      sound.play("click");
      document.getElementById("modal-add-review")?.classList.add("active");
    });
  }
}

// js/components/friendsHub.js
init_store();
init_audio();
var currentHubTab = "discover";
var searchQuery = "";
var selectedGameFilter = "all";
var filterOnlineOnly = false;
function initFriendsHub() {
  const hubBtn = document.getElementById("btn-header-friends");
  const hubModal = document.getElementById("modal-friends-hub");
  const closeBtn = document.getElementById("btn-close-friends-hub");
  const tabBtns = document.querySelectorAll(".friends-tab-btn");
  if (hubBtn) {
    hubBtn.addEventListener("click", () => {
      sound.play("click");
      openFriendsHub(currentHubTab);
    });
  }
  if (closeBtn && hubModal) {
    closeBtn.addEventListener("click", () => {
      hubModal.classList.remove("active");
    });
  }
  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      sound.play("click");
      tabBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentHubTab = btn.dataset.ftab;
      renderHubView();
    });
  });
  store.subscribe("friends:updated", () => {
    updateHubBadges();
    if (hubModal && hubModal.classList.contains("active")) {
      renderHubView();
    }
  });
  store.subscribe("user:updated", () => {
    updateHubBadges();
  });
  updateHubBadges();
}
function openFriendsHub(tab = "discover") {
  const hubModal = document.getElementById("modal-friends-hub");
  if (!hubModal) return;
  currentHubTab = tab;
  const tabBtns = hubModal.querySelectorAll(".friends-tab-btn");
  tabBtns.forEach((b) => b.classList.toggle("active", b.dataset.ftab === tab));
  updateHubBadges();
  renderHubView();
  hubModal.classList.add("active");
}
function updateHubBadges() {
  const user = store.state.user;
  const friendsCount = (user.friends || []).length;
  const reqsCount = (user.friendRequests || []).length;
  const followingCount = (user.following || []).length;
  const headerBadge = document.getElementById("header-friend-badge");
  if (headerBadge) {
    if (reqsCount > 0) {
      headerBadge.style.display = "flex";
      headerBadge.textContent = reqsCount;
    } else {
      headerBadge.style.display = "none";
    }
  }
  const hubFriendsCountEl = document.getElementById("hub-friends-count");
  if (hubFriendsCountEl) hubFriendsCountEl.textContent = friendsCount;
  const hubReqsCountEl = document.getElementById("hub-requests-count");
  if (hubReqsCountEl) hubReqsCountEl.textContent = reqsCount;
  const hubFollowingCountEl = document.getElementById("hub-following-count");
  if (hubFollowingCountEl) hubFollowingCountEl.textContent = followingCount;
}
function renderHubView() {
  const viewContainer = document.getElementById("friends-hub-main-view");
  if (!viewContainer) return;
  switch (currentHubTab) {
    case "discover":
      renderDiscoverTab(viewContainer);
      break;
    case "friends":
      renderMyFriendsTab(viewContainer);
      break;
    case "requests":
      renderRequestsTab(viewContainer);
      break;
    case "following":
      renderFollowingTab(viewContainer);
      break;
  }
}
function renderDiscoverTab(container) {
  const players = store.getPlayers();
  const user = store.state.user;
  const filtered = players.filter((p) => {
    if (p.id === user.id) return false;
    const matchQuery = !searchQuery || p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.gamerTag.toLowerCase().includes(searchQuery.toLowerCase()) || p.primaryGame.toLowerCase().includes(searchQuery.toLowerCase()) || p.bio && p.bio.toLowerCase().includes(searchQuery.toLowerCase());
    const matchGame = selectedGameFilter === "all" || p.primaryGame === selectedGameFilter;
    const matchOnline = !filterOnlineOnly || p.status !== "offline";
    return matchQuery && matchGame && matchOnline;
  });
  const gamesList = ["all", "Valorant", "Genshin Impact", "Arena of Valor (ROV)", "Black Myth: Wukong", "Apex Legends"];
  container.innerHTML = `
    <!-- Direct Add Friend by GamerTag Form -->
    <div class="hub-direct-add-card">
      <div class="direct-add-left">
        <div class="direct-add-icon">\u26A1</div>
        <div>
          <h4 class="direct-add-title">\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E14\u0E48\u0E27\u0E19\u0E14\u0E49\u0E27\u0E22 GamerTag \u0E2B\u0E23\u0E37\u0E2D\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49</h4>
          <p class="direct-add-desc">\u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E01\u0E21\u0E40\u0E21\u0E2D\u0E23\u0E4C \u0E2B\u0E23\u0E37\u0E2D #Tag \u0E40\u0E0A\u0E48\u0E19 #1337, #9999 \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2A\u0E48\u0E07\u0E04\u0E33\u0E02\u0E2D\u0E40\u0E1B\u0E47\u0E19\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E31\u0E19\u0E17\u0E35</p>
        </div>
      </div>
      <form class="direct-add-form" id="form-hub-direct-add">
        <div class="direct-add-input-wrap">
          <input type="text" class="direct-add-input" id="in-hub-direct-tag" placeholder="\u0E40\u0E0A\u0E48\u0E19 #1337 \u0E2B\u0E23\u0E37\u0E2D Sakura_Blade" required>
        </div>
        <button type="submit" class="btn btn-primary btn-sm">\u2795 \u0E2A\u0E48\u0E07\u0E04\u0E33\u0E02\u0E2D (+10 XP)</button>
      </form>
    </div>

    <!-- Search & Filter Controls -->
    <div class="hub-search-bar-wrap">
      <div class="hub-search-input-box">
        <span style="font-size: 1.1rem; color: var(--text-muted);">\u{1F50D}</span>
        <input type="text" class="hub-search-input" id="in-player-search" placeholder="\u0E04\u0E49\u0E19\u0E2B\u0E32\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E01\u0E21\u0E40\u0E21\u0E2D\u0E23\u0E4C, GamerTag \u0E40\u0E0A\u0E48\u0E19 #9988, \u0E2B\u0E23\u0E37\u0E2D\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E01\u0E21..." value="${searchQuery}">
        ${searchQuery ? `<button type="button" class="btn-clear-search" id="btn-clear-player-search">&times;</button>` : ""}
      </div>

      <div class="hub-filter-chips-row">
        <div class="hub-chips-scroll">
          ${gamesList.map((g) => `
            <button type="button" class="hub-filter-chip ${selectedGameFilter === g ? "active" : ""}" data-game="${g}">
              ${g === "all" ? "\u{1F3AE} \u0E40\u0E01\u0E21\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14" : g}
            </button>
          `).join("")}
        </div>

        <label class="hub-checkbox-label">
          <input type="checkbox" id="chk-online-only" ${filterOnlineOnly ? "checked" : ""}>
          <span>\u{1F7E2} \u0E40\u0E09\u0E1E\u0E32\u0E30\u0E04\u0E19\u0E2D\u0E2D\u0E19\u0E44\u0E25\u0E19\u0E4C</span>
        </label>
      </div>
    </div>

    <!-- Players Cards Grid -->
    <div class="hub-players-grid">
      ${filtered.length ? filtered.map((player) => {
    const isFriend = store.isFriend(player.id);
    const isPending = store.isPending(player.id);
    const hasIncoming = store.hasIncomingRequest(player.id);
    const isFollowing = store.isFollowing(player.id);
    return `
          <div class="hub-player-card">
            <div class="player-card-top btn-view-profile-trigger" data-pid="${player.id}" title="\u0E04\u0E25\u0E34\u0E01\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C">
              <div class="player-avatar-wrap">
                <img src="${player.avatar}" alt="${player.name}" class="player-avatar">
                <span class="player-status-dot status-${player.status}"></span>
              </div>
              <div class="player-header-info">
                <div class="player-name-row">
                  <span class="player-name">${player.name}</span>
                  <span class="player-tag">${player.gamerTag}</span>
                  <span class="player-lvl">Lv.${player.level}</span>
                </div>
                <div class="player-rank-badge">${player.rank}</div>
                <div class="player-status-text">${player.statusText}</div>
              </div>
            </div>

            <p class="player-bio-text">${player.bio || "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E41\u0E19\u0E30\u0E19\u0E33\u0E15\u0E31\u0E27"}</p>

            <div class="player-meta-row">
              <span class="player-game-tag">\u{1F3AE} ${player.primaryGame}</span>
              <span class="player-mutuals">\u{1F91D} \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E23\u0E48\u0E27\u0E21\u0E01\u0E31\u0E19 ${player.mutualFriends || 0} \u0E04\u0E19</span>
            </div>

            <div class="player-actions-row">
              <!-- Friend Button -->
              ${isFriend ? `
                <button type="button" class="btn-hub-action btn-friend-status is-friend" data-pid="${player.id}" title="\u0E40\u0E1B\u0E47\u0E19\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E01\u0E31\u0E19\u0E41\u0E25\u0E49\u0E27">
                  \u{1F91D} \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E01\u0E31\u0E19\u0E41\u0E25\u0E49\u0E27
                </button>
              ` : isPending ? `
                <button type="button" class="btn-hub-action btn-friend-status is-pending" data-pid="${player.id}" title="\u0E04\u0E25\u0E34\u0E01\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\u0E04\u0E33\u0E02\u0E2D">
                  \u23F3 \u0E2A\u0E48\u0E07\u0E04\u0E33\u0E02\u0E2D\u0E41\u0E25\u0E49\u0E27
                </button>
              ` : hasIncoming ? `
                <button type="button" class="btn-hub-action btn-accept-req" data-pid="${player.id}">
                  \u2713 \u0E22\u0E2D\u0E21\u0E23\u0E31\u0E1A\u0E04\u0E33\u0E02\u0E2D (+25 XP)
                </button>
              ` : `
                <button type="button" class="btn-hub-action btn-add-friend" data-pid="${player.id}">
                  \u2795 \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19 (+10 XP)
                </button>
              `}

              <!-- Follow Button -->
              <button type="button" class="btn-hub-action ${isFollowing ? "btn-following" : "btn-follow"}" data-pid="${player.id}">
                ${isFollowing ? "\u2713 \u0E15\u0E34\u0E14\u0E15\u0E32\u0E21\u0E41\u0E25\u0E49\u0E27" : "\u2B50 \u0E15\u0E34\u0E14\u0E15\u0E32\u0E21"}
              </button>
            </div>
          </div>
        `;
  }).join("") : `
        <div class="hub-empty-state">
          <div style="font-size: 3rem; margin-bottom: 10px;">\u{1F575}\uFE0F\u200D\u2642\uFE0F</div>
          <h4>\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E1C\u0E39\u0E49\u0E40\u0E25\u0E48\u0E19\u0E17\u0E35\u0E48\u0E15\u0E23\u0E07\u0E01\u0E31\u0E1A\u0E04\u0E33\u0E04\u0E49\u0E19\u0E2B\u0E32</h4>
          <p style="color: var(--text-muted); font-size: 0.85rem;">\u0E25\u0E2D\u0E07\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E04\u0E33\u0E04\u0E49\u0E19\u0E2B\u0E32 \u0E2B\u0E23\u0E37\u0E2D\u0E43\u0E0A\u0E49\u0E01\u0E25\u0E48\u0E2D\u0E07 "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E14\u0E48\u0E27\u0E19\u0E14\u0E49\u0E27\u0E22 GamerTag" \u0E14\u0E49\u0E32\u0E19\u0E1A\u0E19\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E04\u0E49\u0E19\u0E2B\u0E32</p>
        </div>
      `}
    </div>
  `;
  const formDirectAdd = container.querySelector("#form-hub-direct-add");
  if (formDirectAdd) {
    formDirectAdd.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = container.querySelector("#in-hub-direct-tag");
      const tagVal = input ? input.value.trim() : "";
      if (!tagVal) return;
      const res = store.addFriendDirect(tagVal);
      if (res.success) {
        sound.play("success");
        triggerConfetti(window.innerWidth / 2, window.innerHeight * 0.4, 30);
        showToast(res.message, "success");
        if (input) input.value = "";
      } else {
        showToast(res.message, "info");
      }
    });
  }
  const inSearch = container.querySelector("#in-player-search");
  if (inSearch) {
    inSearch.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderDiscoverTab(container);
    });
  }
  const btnClearSearch = container.querySelector("#btn-clear-player-search");
  if (btnClearSearch) {
    btnClearSearch.addEventListener("click", () => {
      searchQuery = "";
      renderDiscoverTab(container);
    });
  }
  container.querySelectorAll(".hub-filter-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      sound.play("click");
      selectedGameFilter = chip.dataset.game;
      renderDiscoverTab(container);
    });
  });
  const chkOnline = container.querySelector("#chk-online-only");
  if (chkOnline) {
    chkOnline.addEventListener("change", (e) => {
      filterOnlineOnly = e.target.checked;
      renderDiscoverTab(container);
    });
  }
  container.querySelectorAll(".btn-view-profile-trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const pid = trigger.dataset.pid;
      sound.play("click");
      document.getElementById("modal-friends-hub")?.classList.remove("active");
      openPlayerProfile(pid);
    });
  });
  container.querySelectorAll(".btn-add-friend").forEach((btn) => {
    btn.addEventListener("click", () => {
      const pid = btn.dataset.pid;
      const res = store.sendFriendRequest(pid);
      if (res.success) {
        sound.play("success");
        triggerConfetti(window.innerWidth / 2, window.innerHeight * 0.4, 25);
        showToast(res.message, "success");
      } else {
        showToast(res.message, "info");
      }
    });
  });
  container.querySelectorAll(".btn-friend-status.is-pending").forEach((btn) => {
    btn.addEventListener("click", () => {
      const pid = btn.dataset.pid;
      sound.play("click");
      store.cancelFriendRequest(pid);
      showToast("\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\u0E04\u0E33\u0E02\u0E2D\u0E40\u0E1B\u0E47\u0E19\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22\u0E41\u0E25\u0E49\u0E27", "info");
    });
  });
  container.querySelectorAll(".btn-accept-req").forEach((btn) => {
    btn.addEventListener("click", () => {
      const pid = btn.dataset.pid;
      const res = store.acceptFriendRequest(pid);
      sound.play("levelUp");
      triggerConfetti(window.innerWidth / 2, window.innerHeight * 0.4, 40);
      showToast(res.message, "success");
    });
  });
  container.querySelectorAll(".btn-follow, .btn-following").forEach((btn) => {
    btn.addEventListener("click", () => {
      const pid = btn.dataset.pid;
      const res = store.toggleFollow(pid);
      sound.play("click");
      showToast(res.message, res.following ? "success" : "info");
    });
  });
}
function renderMyFriendsTab(container) {
  const user = store.state.user;
  const friendIds = user.friends || [];
  const myFriends = friendIds.map((id) => store.getPlayerById(id)).filter(Boolean);
  if (!myFriends.length) {
    container.innerHTML = `
      <div class="hub-empty-state">
        <div style="font-size: 3.5rem; margin-bottom: 12px;">\u{1F91D}</div>
        <h4>\u0E04\u0E38\u0E13\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E23\u0E32\u0E22\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E43\u0E19\u0E23\u0E30\u0E1A\u0E1A</h4>
        <p style="color: var(--text-muted); font-size: 0.85rem; margin-bottom: 16px;">
          \u0E44\u0E1B\u0E17\u0E35\u0E48\u0E41\u0E17\u0E47\u0E1A "\u0E04\u0E49\u0E19\u0E2B\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E43\u0E2B\u0E21\u0E48" \u0E2B\u0E23\u0E37\u0E2D\u0E43\u0E2A\u0E48 GamerTag \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E2A\u0E32\u0E22\u0E25\u0E38\u0E22\u0E41\u0E25\u0E30\u0E15\u0E31\u0E49\u0E07\u0E15\u0E35\u0E49\u0E40\u0E25\u0E48\u0E19\u0E40\u0E01\u0E21\u0E14\u0E49\u0E27\u0E22\u0E01\u0E31\u0E19!
        </p>
        <button type="button" class="btn btn-primary btn-sm" id="btn-go-discover">
          \u{1F50D} \u0E44\u0E1B\u0E04\u0E49\u0E19\u0E2B\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E43\u0E2B\u0E21\u0E48
        </button>
      </div>
    `;
    container.querySelector("#btn-go-discover")?.addEventListener("click", () => {
      openFriendsHub("discover");
    });
    return;
  }
  container.innerHTML = `
    <div class="hub-friends-list">
      ${myFriends.map((friend) => `
        <div class="hub-friend-row-card">
          <div class="friend-row-left btn-view-profile-trigger" data-pid="${friend.id}" title="\u0E04\u0E25\u0E34\u0E01\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C" style="cursor: pointer;">
            <div class="player-avatar-wrap">
              <img src="${friend.avatar}" alt="${friend.name}" class="player-avatar">
              <span class="player-status-dot status-${friend.status}"></span>
            </div>
            <div class="friend-row-details">
              <div class="player-name-row">
                <span class="player-name">${friend.name}</span>
                <span class="player-tag">${friend.gamerTag}</span>
                <span class="player-lvl">Lv.${friend.level}</span>
              </div>
              <div class="player-status-text">${friend.statusText}</div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">\u{1F3AE} ${friend.primaryGame} \u2022 ${friend.rank}</div>
            </div>
          </div>

          <div class="friend-row-actions">
            <button type="button" class="btn-hub-sm btn-invite-party" data-name="${friend.name}" title="\u0E2A\u0E48\u0E07\u0E04\u0E33\u0E0A\u0E27\u0E19\u0E40\u0E02\u0E49\u0E32\u0E15\u0E35\u0E49">
              \u{1F3AE} \u0E0A\u0E27\u0E19\u0E40\u0E02\u0E49\u0E32\u0E15\u0E35\u0E49
            </button>
            <button type="button" class="btn-hub-sm btn-message-friend" data-name="${friend.name}" title="\u0E2A\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E0A\u0E15">
              \u{1F4AC} \u0E41\u0E0A\u0E15
            </button>
            <button type="button" class="btn-hub-sm btn-remove-friend" data-pid="${friend.id}" data-name="${friend.name}" title="\u0E25\u0E1A\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19">
              \u{1F5D1}\uFE0F \u0E25\u0E1A
            </button>
          </div>
        </div>
      `).join("")}
    </div>
  `;
  container.querySelectorAll(".btn-view-profile-trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const pid = trigger.dataset.pid;
      sound.play("click");
      document.getElementById("modal-friends-hub")?.classList.remove("active");
      openPlayerProfile(pid);
    });
  });
  container.querySelectorAll(".btn-invite-party").forEach((btn) => {
    btn.addEventListener("click", () => {
      sound.play("success");
      showToast(`\u{1F680} \u0E2A\u0E48\u0E07\u0E04\u0E33\u0E0A\u0E27\u0E19 ${btn.dataset.name} \u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E15\u0E35\u0E49\u0E40\u0E25\u0E48\u0E19\u0E40\u0E01\u0E21\u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22\u0E41\u0E25\u0E49\u0E27!`, "success");
    });
  });
  container.querySelectorAll(".btn-message-friend").forEach((btn) => {
    btn.addEventListener("click", () => {
      const name = btn.dataset.name;
      sound.play("click");
      document.getElementById("modal-friends-hub")?.classList.remove("active");
      store.setTab("chat");
      setTimeout(() => {
        const chatInput = document.getElementById("in-chat-text");
        if (chatInput) {
          chatInput.value = `@${name} `;
          chatInput.focus();
        }
      }, 150);
    });
  });
  container.querySelectorAll(".btn-remove-friend").forEach((btn) => {
    btn.addEventListener("click", () => {
      const pid = btn.dataset.pid;
      const name = btn.dataset.name;
      if (confirm(`\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A ${name} \u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E23\u0E32\u0E22\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E43\u0E0A\u0E48\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48?`)) {
        sound.play("click");
        store.removeFriend(pid);
        showToast(`\u0E25\u0E1A ${name} \u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22\u0E41\u0E25\u0E49\u0E27`, "info");
      }
    });
  });
}
function renderRequestsTab(container) {
  const user = store.state.user;
  const incomingIds = user.friendRequests || [];
  const sentIds = user.sentRequests || [];
  const incomingPlayers = incomingIds.map((id) => store.getPlayerById(id)).filter(Boolean);
  const sentPlayers = sentIds.map((id) => store.getPlayerById(id)).filter(Boolean);
  if (!incomingPlayers.length && !sentPlayers.length) {
    container.innerHTML = `
      <div class="hub-empty-state">
        <div style="font-size: 3.5rem; margin-bottom: 12px;">\u{1F4ED}</div>
        <h4>\u0E44\u0E21\u0E48\u0E21\u0E35\u0E04\u0E33\u0E02\u0E2D\u0E40\u0E1B\u0E47\u0E19\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E35\u0E48\u0E23\u0E2D\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23</h4>
        <p style="color: var(--text-muted); font-size: 0.85rem;">
          \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E21\u0E35\u0E04\u0E19\u0E2A\u0E48\u0E07\u0E04\u0E33\u0E02\u0E2D\u0E40\u0E1B\u0E47\u0E19\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E21\u0E32\u0E2B\u0E32\u0E04\u0E38\u0E13 \u0E2B\u0E23\u0E37\u0E2D\u0E04\u0E38\u0E13\u0E2A\u0E48\u0E07\u0E04\u0E33\u0E02\u0E2D\u0E44\u0E1B \u0E08\u0E30\u0E1B\u0E23\u0E32\u0E01\u0E0F\u0E43\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E19\u0E35\u0E49
        </p>
      </div>
    `;
    return;
  }
  container.innerHTML = `
    <div class="hub-requests-view">
      <!-- Incoming Requests -->
      ${incomingPlayers.length ? `
        <div class="requests-section-title">
          <span>\u{1F4E5} \u0E04\u0E33\u0E02\u0E2D\u0E40\u0E1B\u0E47\u0E19\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E35\u0E48\u0E23\u0E2D\u0E04\u0E38\u0E13\u0E15\u0E2D\u0E1A\u0E23\u0E31\u0E1A (${incomingPlayers.length})</span>
        </div>
        <div class="hub-friends-list" style="margin-bottom: 24px;">
          ${incomingPlayers.map((p) => `
            <div class="hub-friend-row-card">
              <div class="friend-row-left btn-view-profile-trigger" data-pid="${p.id}" style="cursor: pointer;" title="\u0E04\u0E25\u0E34\u0E01\u0E14\u0E39\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C">
                <div class="player-avatar-wrap">
                  <img src="${p.avatar}" alt="${p.name}" class="player-avatar">
                  <span class="player-status-dot status-${p.status}"></span>
                </div>
                <div class="friend-row-details">
                  <div class="player-name-row">
                    <span class="player-name">${p.name}</span>
                    <span class="player-tag">${p.gamerTag}</span>
                    <span class="player-lvl">Lv.${p.level}</span>
                  </div>
                  <div style="font-size: 0.8rem; color: var(--primary);">\u{1F3AE} ${p.primaryGame} \u2022 ${p.rank}</div>
                  <div style="font-size: 0.75rem; color: var(--text-muted);">\u{1F91D} \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E23\u0E48\u0E27\u0E21\u0E01\u0E31\u0E19 ${p.mutualFriends || 0} \u0E04\u0E19</div>
                </div>
              </div>

              <div class="friend-row-actions">
                <button type="button" class="btn btn-primary btn-sm btn-accept-req-row" data-pid="${p.id}">
                  \u2713 \u0E22\u0E2D\u0E21\u0E23\u0E31\u0E1A (+25 XP)
                </button>
                <button type="button" class="btn btn-secondary btn-sm btn-decline-req-row" data-pid="${p.id}">
                  \u2715 \u0E1B\u0E0F\u0E34\u0E40\u0E2A\u0E18
                </button>
              </div>
            </div>
          `).join("")}
        </div>
      ` : ""}

      <!-- Sent Requests -->
      ${sentPlayers.length ? `
        <div class="requests-section-title">
          <span>\u{1F4E4} \u0E04\u0E33\u0E02\u0E2D\u0E17\u0E35\u0E48\u0E04\u0E38\u0E13\u0E2A\u0E48\u0E07\u0E44\u0E1B\u0E41\u0E25\u0E49\u0E27 (${sentPlayers.length})</span>
        </div>
        <div class="hub-friends-list">
          ${sentPlayers.map((p) => `
            <div class="hub-friend-row-card" style="opacity: 0.9;">
              <div class="friend-row-left btn-view-profile-trigger" data-pid="${p.id}" style="cursor: pointer;" title="\u0E04\u0E25\u0E34\u0E01\u0E14\u0E39\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C">
                <div class="player-avatar-wrap">
                  <img src="${p.avatar}" alt="${p.name}" class="player-avatar">
                </div>
                <div class="friend-row-details">
                  <div class="player-name-row">
                    <span class="player-name">${p.name}</span>
                    <span class="player-tag">${p.gamerTag}</span>
                  </div>
                  <div style="font-size: 0.8rem; color: var(--text-muted);">\u23F3 \u0E23\u0E2D\u0E2D\u0E35\u0E01\u0E1D\u0E48\u0E32\u0E22\u0E15\u0E2D\u0E1A\u0E23\u0E31\u0E1A\u0E04\u0E33\u0E02\u0E2D...</div>
                </div>
              </div>
              <div class="friend-row-actions">
                <button type="button" class="btn btn-secondary btn-xs btn-cancel-sent-req" data-pid="${p.id}">
                  \u2715 \u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\u0E04\u0E33\u0E02\u0E2D
                </button>
              </div>
            </div>
          `).join("")}
        </div>
      ` : ""}
    </div>
  `;
  container.querySelectorAll(".btn-view-profile-trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const pid = trigger.dataset.pid;
      sound.play("click");
      document.getElementById("modal-friends-hub")?.classList.remove("active");
      openPlayerProfile(pid);
    });
  });
  container.querySelectorAll(".btn-accept-req-row").forEach((btn) => {
    btn.addEventListener("click", () => {
      const pid = btn.dataset.pid;
      const res = store.acceptFriendRequest(pid);
      sound.play("levelUp");
      triggerConfetti(window.innerWidth / 2, window.innerHeight * 0.4, 40);
      showToast(res.message, "success");
    });
  });
  container.querySelectorAll(".btn-decline-req-row").forEach((btn) => {
    btn.addEventListener("click", () => {
      const pid = btn.dataset.pid;
      const res = store.declineFriendRequest(pid);
      sound.play("click");
      showToast(res.message, "info");
    });
  });
  container.querySelectorAll(".btn-cancel-sent-req").forEach((btn) => {
    btn.addEventListener("click", () => {
      const pid = btn.dataset.pid;
      sound.play("click");
      store.cancelFriendRequest(pid);
      showToast("\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\u0E04\u0E33\u0E02\u0E2D\u0E40\u0E1B\u0E47\u0E19\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22\u0E41\u0E25\u0E49\u0E27", "info");
    });
  });
}
function renderFollowingTab(container) {
  const user = store.state.user;
  const followingIds = user.following || [];
  const allPlayers = store.getPlayers();
  const followingPlayers = allPlayers.filter((p) => followingIds.includes(p.id));
  if (!followingPlayers.length) {
    container.innerHTML = `
      <div class="hub-empty-state">
        <div style="font-size: 3.5rem; margin-bottom: 12px;">\u2B50</div>
        <h4>\u0E04\u0E38\u0E13\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21\u0E40\u0E01\u0E21\u0E40\u0E21\u0E2D\u0E23\u0E4C\u0E04\u0E19\u0E43\u0E14</h4>
        <p style="color: var(--text-muted); font-size: 0.85rem; margin-bottom: 16px;">
          \u0E01\u0E14\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21\u0E2A\u0E15\u0E23\u0E35\u0E21\u0E40\u0E21\u0E2D\u0E23\u0E4C \u0E2B\u0E23\u0E37\u0E2D\u0E1C\u0E39\u0E49\u0E40\u0E25\u0E48\u0E19\u0E1D\u0E35\u0E21\u0E37\u0E2D\u0E14\u0E35 \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E40\u0E14\u0E15\u0E42\u0E1E\u0E2A\u0E15\u0E4C\u0E41\u0E25\u0E30\u0E2A\u0E15\u0E2D\u0E23\u0E35\u0E48\u0E02\u0E2D\u0E07\u0E1E\u0E27\u0E01\u0E40\u0E02\u0E32\u0E01\u0E48\u0E2D\u0E19\u0E43\u0E04\u0E23!
        </p>
        <button type="button" class="btn btn-primary btn-sm" id="btn-go-follow-discover">
          \u{1F50D} \u0E04\u0E49\u0E19\u0E2B\u0E32\u0E1C\u0E39\u0E49\u0E40\u0E25\u0E48\u0E19\u0E19\u0E48\u0E32\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21
        </button>
      </div>
    `;
    container.querySelector("#btn-go-follow-discover")?.addEventListener("click", () => {
      openFriendsHub("discover");
    });
    return;
  }
  container.innerHTML = `
    <div class="hub-friends-list">
      ${followingPlayers.map((p) => `
        <div class="hub-friend-row-card">
          <div class="friend-row-left btn-view-profile-trigger" data-pid="${p.id}" style="cursor: pointer;" title="\u0E04\u0E25\u0E34\u0E01\u0E14\u0E39\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C">
            <div class="player-avatar-wrap">
              <img src="${p.avatar}" alt="${p.name}" class="player-avatar">
              <span class="player-status-dot status-${p.status}"></span>
            </div>
            <div class="friend-row-details">
              <div class="player-name-row">
                <span class="player-name">${p.name}</span>
                <span class="player-tag">${p.gamerTag}</span>
                <span class="player-lvl">Lv.${p.level}</span>
              </div>
              <p style="font-size: 0.8rem; color: var(--text-secondary); margin: 2px 0;">${p.bio || ""}</p>
              <div style="font-size: 0.75rem; color: var(--primary);">\u{1F465} \u0E1C\u0E39\u0E49\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21 ${p.followersCount || 0} \u0E04\u0E19</div>
            </div>
          </div>

          <div class="friend-row-actions">
            <button type="button" class="btn-hub-sm btn-unfollow-hub" data-pid="${p.id}" data-name="${p.name}">
              \u2713 \u0E01\u0E33\u0E25\u0E31\u0E07\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21
            </button>
          </div>
        </div>
      `).join("")}
    </div>
  `;
  container.querySelectorAll(".btn-view-profile-trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const pid = trigger.dataset.pid;
      sound.play("click");
      document.getElementById("modal-friends-hub")?.classList.remove("active");
      openPlayerProfile(pid);
    });
  });
  container.querySelectorAll(".btn-unfollow-hub").forEach((btn) => {
    btn.addEventListener("click", () => {
      const pid = btn.dataset.pid;
      const name = btn.dataset.name;
      if (confirm(`\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E40\u0E25\u0E34\u0E01\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21 ${name} \u0E43\u0E0A\u0E48\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48?`)) {
        sound.play("click");
        store.toggleFollow(pid);
        showToast(`\u0E40\u0E25\u0E34\u0E01\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21 ${name} \u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22\u0E41\u0E25\u0E49\u0E27`, "info");
      }
    });
  });
}

// js/app.js
init_voiceChat();

// js/components/authGate.js
init_store();
init_audio();
function initAuthGate() {
  const gateScreen = document.getElementById("auth-gate-screen");
  const loginForm = document.getElementById("form-auth-login");
  const regForm = document.getElementById("form-auth-register");
  const tabBtns = document.querySelectorAll(".auth-tab-btn");
  const logoutBtn = document.getElementById("btn-header-logout");
  const guestBtn = document.getElementById("btn-guest-quick-login");
  const btnSubmitRegister = document.getElementById("btn-submit-register");
  const btnSubmitLogin = document.getElementById("btn-submit-login");
  const loginPwdToggle = document.getElementById("btn-toggle-login-pwd");
  const loginPwdInput = document.getElementById("login-password");
  const regPwdToggle = document.getElementById("btn-toggle-reg-pwd");
  const regPwdInput = document.getElementById("reg-password");
  const regPwdConfirmInput = document.getElementById("reg-password-confirm");
  const pwdStrengthIndicator = document.getElementById("pwd-strength-indicator");
  const pwdStrengthLabel = document.getElementById("pwd-strength-label");
  const btnRandomTag = document.getElementById("btn-random-tag");
  const regTagInput = document.getElementById("reg-tag");
  const forgotLink = document.getElementById("btn-auth-forgot");
  if (!gateScreen) return;
  const syncGateVisibility = (isAuth) => {
    if (isAuth) {
      gateScreen.classList.remove("active");
      document.body.classList.remove("auth-locked");
    } else {
      gateScreen.classList.add("active");
      document.body.classList.add("auth-locked");
    }
  };
  syncGateVisibility(store.state.isAuthenticated);
  store.subscribe("auth:changed", (isAuth) => {
    syncGateVisibility(isAuth);
  });
  tabBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      sound.play("click");
      tabBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const targetTab = btn.dataset.atab;
      if (targetTab === "login") {
        if (loginForm) loginForm.style.display = "block";
        if (regForm) regForm.style.display = "none";
        setTimeout(() => document.getElementById("login-identifier")?.focus(), 50);
      } else {
        if (loginForm) loginForm.style.display = "none";
        if (regForm) regForm.style.display = "block";
        setTimeout(() => document.getElementById("reg-name")?.focus(), 50);
      }
    });
  });
  if (loginPwdToggle && loginPwdInput) {
    loginPwdToggle.addEventListener("click", (e) => {
      e.preventDefault();
      const isPwd = loginPwdInput.type === "password";
      loginPwdInput.type = isPwd ? "text" : "password";
      loginPwdToggle.textContent = isPwd ? "\u{1F648}" : "\u{1F441}\uFE0F";
    });
  }
  if (regPwdToggle && regPwdInput) {
    regPwdToggle.addEventListener("click", (e) => {
      e.preventDefault();
      const isPwd = regPwdInput.type === "password";
      regPwdInput.type = isPwd ? "text" : "password";
      regPwdToggle.textContent = isPwd ? "\u{1F648}" : "\u{1F441}\uFE0F";
    });
  }
  if (regPwdInput && pwdStrengthIndicator && pwdStrengthLabel) {
    regPwdInput.addEventListener("input", () => {
      const val = regPwdInput.value;
      if (!val) {
        pwdStrengthIndicator.style.width = "0%";
        pwdStrengthIndicator.style.background = "transparent";
        pwdStrengthLabel.textContent = "\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E04\u0E27\u0E32\u0E21\u0E1B\u0E25\u0E2D\u0E14\u0E20\u0E31\u0E22: -";
        return;
      }
      let score = 0;
      if (val.length >= 4) score += 1;
      if (val.length >= 8) score += 1;
      if (/[A-Z]/.test(val)) score += 1;
      if (/[0-9]/.test(val)) score += 1;
      if (/[^A-Za-z0-9]/.test(val)) score += 1;
      if (score <= 2) {
        pwdStrengthIndicator.style.width = "35%";
        pwdStrengthIndicator.style.background = "var(--accent, #ff0055)";
        pwdStrengthLabel.innerHTML = '\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E04\u0E27\u0E32\u0E21\u0E1B\u0E25\u0E2D\u0E14\u0E20\u0E31\u0E22: <span style="color: #ff4655;">\u0E07\u0E48\u0E32\u0E22 (\u0E1E\u0E2D\u0E43\u0E0A\u0E49)</span>';
      } else if (score <= 3) {
        pwdStrengthIndicator.style.width = "70%";
        pwdStrengthIndicator.style.background = "var(--warning, #f59e0b)";
        pwdStrengthLabel.innerHTML = '\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E04\u0E27\u0E32\u0E21\u0E1B\u0E25\u0E2D\u0E14\u0E20\u0E31\u0E22: <span style="color: #f59e0b;">\u0E1B\u0E32\u0E19\u0E01\u0E25\u0E32\u0E07 (\u0E1B\u0E25\u0E2D\u0E14\u0E20\u0E31\u0E22)</span>';
      } else {
        pwdStrengthIndicator.style.width = "100%";
        pwdStrengthIndicator.style.background = "var(--success, #10b981)";
        pwdStrengthLabel.innerHTML = '\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E04\u0E27\u0E32\u0E21\u0E1B\u0E25\u0E2D\u0E14\u0E20\u0E31\u0E22: <span style="color: #10b981;">\u0E41\u0E02\u0E47\u0E07\u0E41\u0E01\u0E23\u0E48\u0E07\u0E21\u0E32\u0E01 (\u0E22\u0E2D\u0E14\u0E40\u0E22\u0E35\u0E48\u0E22\u0E21)</span>';
      }
    });
  }
  if (btnRandomTag && regTagInput) {
    btnRandomTag.addEventListener("click", (e) => {
      e.preventDefault();
      sound.play("click");
      const randomTag = "#" + Math.floor(1e3 + Math.random() * 9e3);
      regTagInput.value = randomTag;
    });
  }
  document.querySelectorAll("#reg-games-selector .game-checkbox-pill").forEach((pill) => {
    pill.addEventListener("click", (e) => {
      const checkbox = pill.querySelector('input[type="checkbox"]');
      if (checkbox && e.target !== checkbox) {
        checkbox.checked = !checkbox.checked;
      }
      pill.classList.toggle("active", checkbox?.checked);
    });
  });
  const avatarChoices = document.querySelectorAll(".auth-avatar-choice");
  const selectedAvatarInput = document.getElementById("reg-selected-avatar");
  avatarChoices.forEach((choice) => {
    choice.addEventListener("click", () => {
      sound.play("click");
      avatarChoices.forEach((c) => c.classList.remove("selected"));
      choice.classList.add("selected");
      if (selectedAvatarInput) {
        selectedAvatarInput.value = choice.dataset.avatar;
      }
    });
  });
  document.querySelectorAll(".btn-demo-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      const targetUser = chip.dataset.user;
      const res = store.login({ identifier: targetUser, password: "password123" });
      if (res.success) {
        sound.play("success");
        triggerConfetti(window.innerWidth / 2, window.innerHeight * 0.4, 40);
        showToast(res.message, "success");
      } else {
        showToast(`\u26A0\uFE0F ${res.message}`, "danger");
      }
    });
  });
  if (guestBtn) {
    guestBtn.addEventListener("click", () => {
      const res = store.loginAsGuest();
      sound.play("success");
      triggerConfetti(window.innerWidth / 2, window.innerHeight * 0.4, 25);
      showToast(res.message, "info");
    });
  }
  function executeLogin() {
    const identifier = document.getElementById("login-identifier")?.value.trim();
    const password = document.getElementById("login-password")?.value;
    const remember = document.getElementById("login-remember")?.checked;
    if (!identifier) {
      sound.play("click");
      showToast("\u26A0\uFE0F \u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E2B\u0E23\u0E37\u0E2D\u0E2D\u0E35\u0E40\u0E21\u0E25", "warning");
      document.getElementById("login-identifier")?.focus();
      return;
    }
    if (!password) {
      sound.play("click");
      showToast("\u26A0\uFE0F \u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19", "warning");
      document.getElementById("login-password")?.focus();
      return;
    }
    const res = store.login({ identifier, password, rememberMe: remember });
    if (res.success) {
      sound.play("success");
      triggerConfetti(window.innerWidth / 2, window.innerHeight * 0.4, 40);
      showToast(res.message, "success");
      loginForm?.reset();
    } else {
      sound.play("click");
      showToast(`\u26A0\uFE0F ${res.message}`, "danger");
    }
  }
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      executeLogin();
    });
  }
  if (btnSubmitLogin) {
    btnSubmitLogin.addEventListener("click", (e) => {
      e.preventDefault();
      executeLogin();
    });
  }
  function executeRegister() {
    const nameInput = document.getElementById("reg-name");
    const emailInput = document.getElementById("reg-email");
    const pwdInput = document.getElementById("reg-password");
    const pwdConfirmInput = document.getElementById("reg-password-confirm");
    const tagInput = document.getElementById("reg-tag");
    const name = nameInput?.value.trim();
    const gamerTag = tagInput?.value.trim() || "#" + Math.floor(1e3 + Math.random() * 9e3);
    const email = emailInput?.value.trim();
    const password = pwdInput?.value;
    const passwordConfirm = pwdConfirmInput?.value;
    const avatar = selectedAvatarInput?.value || "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=200&q=80";
    const selectedGames = [];
    document.querySelectorAll('#reg-games-selector input[type="checkbox"]:checked').forEach((cb) => {
      selectedGames.push(cb.value);
    });
    if (!name) {
      sound.play("click");
      showToast("\u26A0\uFE0F \u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E01\u0E21\u0E40\u0E21\u0E2D\u0E23\u0E4C\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13", "warning");
      nameInput?.focus();
      return;
    }
    if (name.length < 2) {
      sound.play("click");
      showToast("\u26A0\uFE0F \u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E01\u0E21\u0E40\u0E21\u0E2D\u0E23\u0E4C\u0E15\u0E49\u0E2D\u0E07\u0E21\u0E35\u0E04\u0E27\u0E32\u0E21\u0E22\u0E32\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E19\u0E49\u0E2D\u0E22 2 \u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23", "warning");
      nameInput?.focus();
      return;
    }
    if (!email || !email.includes("@")) {
      sound.play("click");
      showToast("\u26A0\uFE0F \u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E17\u0E35\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07 (\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07: player@gmail.com)", "warning");
      emailInput?.focus();
      return;
    }
    if (!password || password.length < 4) {
      sound.play("click");
      showToast("\u26A0\uFE0F \u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19\u0E15\u0E49\u0E2D\u0E07\u0E21\u0E35\u0E04\u0E27\u0E32\u0E21\u0E22\u0E32\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E19\u0E49\u0E2D\u0E22 4 \u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23", "warning");
      pwdInput?.focus();
      return;
    }
    if (password !== passwordConfirm) {
      sound.play("click");
      showToast("\u26A0\uFE0F \u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19\u0E44\u0E21\u0E48\u0E15\u0E23\u0E07\u0E01\u0E31\u0E19 \u0E01\u0E23\u0E38\u0E13\u0E32\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07", "danger");
      pwdConfirmInput?.focus();
      return;
    }
    const res = store.register({
      name,
      gamerTag,
      email,
      password,
      favoriteGames: selectedGames.length ? selectedGames : ["Valorant", "Genshin Impact"],
      avatar
    });
    if (res.success) {
      sound.play("levelUp");
      triggerConfetti(window.innerWidth / 2, window.innerHeight * 0.4, 50);
      showToast(res.message, "level");
      regForm?.reset();
    } else {
      sound.play("click");
      showToast(`\u26A0\uFE0F ${res.message}`, "danger");
    }
  }
  if (regForm) {
    regForm.addEventListener("submit", (e) => {
      e.preventDefault();
      executeRegister();
    });
  }
  if (btnSubmitRegister) {
    btnSubmitRegister.addEventListener("click", (e) => {
      e.preventDefault();
      executeRegister();
    });
  }
  if (forgotLink) {
    forgotLink.addEventListener("click", (e) => {
      e.preventDefault();
      sound.play("click");
      const email = prompt("\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E2B\u0E23\u0E37\u0E2D\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E17\u0E35\u0E48\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19\u0E44\u0E27\u0E49 \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E23\u0E31\u0E1A\u0E25\u0E34\u0E07\u0E01\u0E4C\u0E23\u0E35\u0E40\u0E0B\u0E47\u0E15\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19:");
      if (email && email.trim()) {
        sound.play("success");
        showToast(`\u{1F4EC} \u0E25\u0E34\u0E07\u0E01\u0E4C\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E01\u0E39\u0E49\u0E04\u0E37\u0E19\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19\u0E16\u0E39\u0E01\u0E2A\u0E48\u0E07\u0E44\u0E1B\u0E22\u0E31\u0E07 "${email.trim()}" \u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22\u0E41\u0E25\u0E49\u0E27 (Demo)`, "info");
      }
    });
  }
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      sound.play("click");
      if (confirm(`\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E1A "${store.state.user.name}" \u0E43\u0E0A\u0E48\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48?`)) {
        store.logout();
        showToast("\u{1F6AA} \u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E1A\u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22\u0E41\u0E25\u0E49\u0E27", "info");
      }
    });
  }
}

// js/components/dataManager.js
init_store();
init_audio();
init_api();
function initDataManager() {
  const modal = document.getElementById("modal-data-management");
  const triggerBtn = document.getElementById("btn-header-data");
  const closeBtn = document.getElementById("btn-close-data-modal");
  if (triggerBtn) {
    triggerBtn.addEventListener("click", () => {
      sound.play("click");
      openDataManagementModal();
    });
  }
  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("active");
    });
  }
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("active");
    });
  }
  const syncBtn = document.getElementById("btn-sync-database");
  if (syncBtn) {
    syncBtn.addEventListener("click", async () => {
      sound.play("click");
      syncBtn.disabled = true;
      syncBtn.textContent = "\u23F3 \u0E01\u0E33\u0E25\u0E31\u0E07\u0E0B\u0E34\u0E07\u0E04\u0E4C...";
      try {
        const res = await api.syncState(store.state);
        if (res && res.success) {
          sound.play("success");
          showToast("\u{1F7E2} \u0E0B\u0E34\u0E07\u0E04\u0E4C\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E01\u0E31\u0E1A\u0E10\u0E32\u0E19\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E0B\u0E34\u0E23\u0E4C\u0E1F\u0E40\u0E27\u0E2D\u0E23\u0E4C\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08 100%", "success");
        } else {
          showToast("\u{1F4BE} \u0E10\u0E32\u0E19\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 Local Storage \u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22 (\u0E40\u0E0B\u0E34\u0E23\u0E4C\u0E1F\u0E40\u0E27\u0E2D\u0E23\u0E4C\u0E2D\u0E2D\u0E1F\u0E44\u0E25\u0E19\u0E4C)", "info");
        }
      } catch (e) {
        showToast("\u{1F4BE} \u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E16\u0E39\u0E01\u0E08\u0E31\u0E14\u0E40\u0E01\u0E47\u0E1A\u0E43\u0E19\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E1B\u0E25\u0E2D\u0E14\u0E20\u0E31\u0E22", "info");
      } finally {
        syncBtn.disabled = false;
        syncBtn.textContent = "\u{1F504} \u0E0B\u0E34\u0E07\u0E04\u0E4C\u0E15\u0E2D\u0E19\u0E19\u0E35\u0E49";
        renderDataStats();
      }
    });
  }
  const saveNowBtn = document.getElementById("btn-manual-save-now");
  if (saveNowBtn) {
    saveNowBtn.addEventListener("click", () => {
      sound.play("success");
      const res = store.save();
      showToast(`\u{1F4BE} \u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14\u0E25\u0E07\u0E43\u0E19\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E41\u0E25\u0E30\u0E10\u0E32\u0E19\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22\u0E41\u0E25\u0E49\u0E27 (${res.timestamp})`, "success");
      renderDataStats();
    });
  }
  const exportBtn = document.getElementById("btn-export-backup");
  if (exportBtn) {
    exportBtn.addEventListener("click", () => {
      sound.play("success");
      const backupData = store.exportBackup();
      const jsonStr = JSON.stringify(backupData, null, 2);
      const blob = new Blob([jsonStr], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      const dateStr = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
      a.href = url;
      a.download = `nexus-gaming-database-${dateStr}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast("\u{1F4E5} \u0E14\u0E32\u0E27\u0E19\u0E4C\u0E42\u0E2B\u0E25\u0E14\u0E44\u0E1F\u0E25\u0E4C\u0E2A\u0E33\u0E23\u0E2D\u0E07\u0E10\u0E32\u0E19\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 (JSON Snapshot) \u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22\u0E41\u0E25\u0E49\u0E27!", "success");
    });
  }
  const importInput = document.getElementById("input-import-backup");
  if (importInput) {
    importInput.addEventListener("change", (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = async (evt) => {
        try {
          const content = evt.target.result;
          const result = store.importBackup(content);
          if (result.success) {
            sound.play("levelUp");
            showToast(result.message, "success");
            await api.syncState(store.state);
            renderDataStats();
            if (modal) modal.classList.remove("active");
          } else {
            sound.play("wrong");
            showToast(result.message, "error");
          }
        } catch (err) {
          sound.play("wrong");
          showToast("\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E2D\u0E48\u0E32\u0E19\u0E44\u0E1F\u0E25\u0E4C JSON \u0E44\u0E14\u0E49: " + err.message, "error");
        }
      };
      reader.readAsText(file);
      importInput.value = "";
    });
  }
  const resetBtn = document.getElementById("btn-reset-demo-data");
  if (resetBtn) {
    resetBtn.addEventListener("click", async () => {
      const confirmed = window.confirm("\u26A0\uFE0F \u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E23\u0E35\u0E40\u0E0B\u0E47\u0E15\u0E10\u0E32\u0E19\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14\u0E01\u0E25\u0E31\u0E1A\u0E40\u0E1B\u0E47\u0E19\u0E04\u0E48\u0E32\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19\u0E43\u0E0A\u0E48\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48?");
      if (confirmed) {
        sound.play("click");
        await api.resetDB();
        const res = store.resetToDefaultData();
        showToast("\u{1F504} \u0E23\u0E35\u0E40\u0E0B\u0E47\u0E15\u0E10\u0E32\u0E19\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E41\u0E25\u0E30\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22\u0E41\u0E25\u0E49\u0E27", "info");
        renderDataStats();
        if (modal) modal.classList.remove("active");
      }
    });
  }
  window.addEventListener("beforeunload", () => {
    store.save();
  });
}
function openDataManagementModal() {
  const modal = document.getElementById("modal-data-management");
  if (!modal) return;
  updateDatabaseBanner();
  renderDataStats();
  modal.classList.add("active");
}
function updateDatabaseBanner() {
  const dot = document.getElementById("db-status-dot");
  const title = document.getElementById("db-status-title");
  const desc = document.getElementById("data-status-details");
  if (api.isOnline) {
    if (dot) dot.textContent = "\u{1F7E2}";
    if (title) title.textContent = "\u0E23\u0E30\u0E1A\u0E1A\u0E10\u0E32\u0E19\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 Persistent Database (Connected)";
    if (desc) desc.textContent = "\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D\u0E10\u0E32\u0E19\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 Server Database (data/nexus_db.json) \u0E41\u0E25\u0E30\u0E41\u0E04\u0E0A LocalStorage \u0E16\u0E32\u0E27\u0E23";
  } else {
    if (dot) dot.textContent = "\u{1F4BE}";
    if (title) title.textContent = "\u0E23\u0E30\u0E1A\u0E1A\u0E10\u0E32\u0E19\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 Local Storage Mode (Active)";
    if (desc) desc.textContent = "\u0E08\u0E31\u0E14\u0E40\u0E01\u0E47\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E1A\u0E19\u0E40\u0E1A\u0E23\u0E32\u0E27\u0E4C\u0E40\u0E0B\u0E2D\u0E23\u0E4C\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E16\u0E32\u0E27\u0E23 (\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E0B\u0E34\u0E07\u0E04\u0E4C\u0E2D\u0E31\u0E15\u0E42\u0E19\u0E21\u0E31\u0E15\u0E34\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D\u0E40\u0E0B\u0E34\u0E23\u0E4C\u0E1F\u0E40\u0E27\u0E2D\u0E23\u0E4C)";
  }
}
function renderDataStats() {
  const stats = store.getStatsSummary();
  const grid = document.getElementById("data-stats-grid");
  if (!grid) return;
  grid.innerHTML = `
    <div class="data-stat-card">
      <span class="data-stat-icon">\u{1F4DD}</span>
      <div class="data-stat-info">
        <strong class="data-stat-val text-primary">${stats.postsCount}</strong>
        <span class="data-stat-label">\u0E01\u0E23\u0E30\u0E17\u0E39\u0E49\u0E43\u0E19\u0E23\u0E30\u0E1A\u0E1A</span>
      </div>
    </div>

    <div class="data-stat-card">
      <span class="data-stat-icon">\u{1F91D}</span>
      <div class="data-stat-info">
        <strong class="data-stat-val text-cyan">${stats.squadsCount}</strong>
        <span class="data-stat-label">\u0E2B\u0E49\u0E2D\u0E07\u0E2B\u0E32\u0E15\u0E35\u0E49 (LFG)</span>
      </div>
    </div>

    <div class="data-stat-card">
      <span class="data-stat-icon">\u2B50</span>
      <div class="data-stat-info">
        <strong class="data-stat-val text-gold">${stats.reviewsCount}</strong>
        <span class="data-stat-label">\u0E1A\u0E17\u0E27\u0E34\u0E08\u0E32\u0E23\u0E13\u0E4C\u0E40\u0E01\u0E21</span>
      </div>
    </div>

    <div class="data-stat-card">
      <span class="data-stat-icon">\u{1F465}</span>
      <div class="data-stat-info">
        <strong class="data-stat-val" style="color: #a855f7;">${stats.accountsCount}</strong>
        <span class="data-stat-label">\u0E1A\u0E31\u0E0D\u0E0A\u0E35\u0E40\u0E01\u0E21\u0E40\u0E21\u0E2D\u0E23\u0E4C</span>
      </div>
    </div>

    <div class="data-stat-card">
      <span class="data-stat-icon">\u{1F4AC}</span>
      <div class="data-stat-info">
        <strong class="data-stat-val text-cyan">${stats.chatCount}</strong>
        <span class="data-stat-label">\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E0A\u0E17</span>
      </div>
    </div>

    <div class="data-stat-card">
      <span class="data-stat-icon">\u{1F4BE}</span>
      <div class="data-stat-info">
        <strong class="data-stat-val" style="color: #00ff88;">${stats.storageKb} KB</strong>
        <span class="data-stat-label">\u0E02\u0E19\u0E32\u0E14\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E41\u0E04\u0E0A</span>
      </div>
    </div>
  `;
}

// js/app.js
document.addEventListener("DOMContentLoaded", () => {
  initThemeAndAudio();
  initAuthGate();
  updateHeaderUserInfo(store.state.user);
  initDataManager();
  initHeroCanvas();
  initGlobalEffects();
  initNavigation();
  initFilters();
  initModals();
  initPostMediaUploader();
  initStoryCreator();
  setupProfileModal();
  initFriendsHub();
  renderCurrentTab();
  renderStoryBar(document.getElementById("community-stories-bar"));
  initCard3DTilt();
  store.subscribe("*", (event) => {
    renderCurrentTab();
    setTimeout(initCard3DTilt, 100);
  });
  store.subscribe("stories:updated", () => {
    renderStoryBar(document.getElementById("community-stories-bar"));
    setTimeout(initCard3DTilt, 100);
  });
  store.subscribe("user:updated", (user) => {
    updateHeaderUserInfo(user || store.state.user);
    renderStoryBar(document.getElementById("community-stories-bar"));
    setTimeout(initCard3DTilt, 100);
  });
  store.subscribe("auth:changed", (isAuth) => {
    updateHeaderUserInfo(store.state.user);
    renderCurrentTab();
  });
  store.subscribe("user:levelup", (user) => {
    triggerLevelUpCelebration(user);
    showToast5(`\u{1F389} \u0E22\u0E34\u0E19\u0E14\u0E35\u0E14\u0E49\u0E27\u0E22! \u0E04\u0E38\u0E13\u0E40\u0E25\u0E40\u0E27\u0E25\u0E2D\u0E31\u0E1B\u0E2A\u0E39\u0E48 Lv.${user.level} \u0E41\u0E25\u0E49\u0E27!`, "level");
  });
});
function updateHeaderUserInfo(user) {
  if (!user) return;
  const avatarEl = document.getElementById("header-user-avatar");
  const nameEl = document.getElementById("header-user-name");
  const lvlEl = document.getElementById("header-user-level");
  if (avatarEl && user.avatar) avatarEl.src = user.avatar;
  if (nameEl && user.name) nameEl.textContent = user.name;
  if (lvlEl && user.level) lvlEl.textContent = `LV.${user.level}`;
}
function initThemeAndAudio() {
  const currentTheme = store.state.theme || "cyber-purple";
  document.documentElement.setAttribute("data-theme", currentTheme);
  const themeBtn = document.getElementById("btn-theme-toggle");
  if (themeBtn) {
    const themes = ["cyber-purple", "neon-cyan", "crimson-fury", "emerald-matrix"];
    themeBtn.addEventListener("click", () => {
      const idx = themes.indexOf(store.state.theme);
      const nextTheme = themes[(idx + 1) % themes.length];
      store.setTheme(nextTheme);
      sound.play("laser");
      showToast5(`\u{1F3A8} \u0E2A\u0E25\u0E31\u0E1A\u0E18\u0E35\u0E21: ${getThemeTitle(nextTheme)}`, "info");
    });
  }
  const audioBtn = document.getElementById("btn-audio-toggle");
  const volumePopover = document.getElementById("volume-popover");
  const volumeSlider = document.getElementById("header-volume-slider");
  const volumePctLabel = document.getElementById("volume-pct-label");
  const updateVolumeUI = ({ volume, icon, enabled }) => {
    if (audioBtn) {
      audioBtn.innerHTML = icon;
      audioBtn.classList.toggle("active", enabled);
    }
    if (volumeSlider) {
      volumeSlider.value = volume;
    }
    if (volumePctLabel) {
      volumePctLabel.textContent = `${volume}%`;
    }
  };
  updateVolumeUI({
    volume: sound.getVolume(),
    icon: sound.getIcon(),
    enabled: sound.enabled
  });
  sound.subscribe(updateVolumeUI);
  if (audioBtn) {
    audioBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (volumePopover) {
        const isShown = volumePopover.classList.toggle("active");
        if (!isShown) {
          sound.play("click");
        }
      }
    });
  }
  document.addEventListener("click", (e) => {
    if (volumePopover && !e.target.closest("#header-volume-widget")) {
      volumePopover.classList.remove("active");
    }
  });
  if (volumeSlider) {
    volumeSlider.addEventListener("input", (e) => {
      const val = parseInt(e.target.value, 10);
      sound.setVolume(val, false);
      if (volumePctLabel) volumePctLabel.textContent = `${val}%`;
    });
    volumeSlider.addEventListener("change", (e) => {
      const val = parseInt(e.target.value, 10);
      sound.setVolume(val, true);
    });
  }
  document.querySelectorAll(".btn-vol-preset").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const val = parseInt(btn.dataset.vol, 10);
      sound.setVolume(val, true);
      showToast5(`\u{1F50A} \u0E1B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E40\u0E2A\u0E35\u0E22\u0E07: ${val}%`, "info");
    });
  });
}
function getThemeTitle(th) {
  const names = {
    "cyber-purple": "Cyber Purple (\u0E2A\u0E35\u0E21\u0E48\u0E27\u0E07\u0E19\u0E35\u0E2D\u0E2D\u0E19)",
    "neon-cyan": "Neon Cyan (\u0E2A\u0E35\u0E1F\u0E49\u0E32\u0E44\u0E0B\u0E40\u0E1A\u0E2D\u0E23\u0E4C)",
    "crimson-fury": "Crimson Fury (\u0E2A\u0E35\u0E41\u0E14\u0E07\u0E40\u0E1E\u0E25\u0E34\u0E07)",
    "emerald-matrix": "Emerald Matrix (\u0E2A\u0E35\u0E40\u0E02\u0E35\u0E22\u0E27\u0E40\u0E21\u0E17\u0E23\u0E34\u0E01\u0E0B\u0E4C)"
  };
  return names[th] || th;
}
function syncNavigationUI(tab) {
  if (!tab) return;
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === tab);
  });
  document.querySelectorAll(".mobile-dock-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === tab);
  });
}
function initNavigation() {
  const navBtns = document.querySelectorAll(".nav-btn");
  navBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const tab = btn.dataset.tab;
      if (!tab) return;
      sound.play("tab");
      syncNavigationUI(tab);
      store.setTab(tab);
    });
  });
  const mobileDockBtns = document.querySelectorAll(".mobile-dock-btn");
  mobileDockBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const tab = btn.dataset.tab;
      if (!tab) return;
      sound.play("tab");
      syncNavigationUI(tab);
      store.setTab(tab);
      const contentElem = document.querySelector(".main-content-area");
      if (contentElem && window.innerWidth <= 1100) {
        const topPos = contentElem.getBoundingClientRect().top + window.pageYOffset - 70;
        window.scrollTo({ top: Math.max(0, topPos), behavior: "smooth" });
      }
    });
  });
  const profileBtn = document.getElementById("btn-header-profile");
  if (profileBtn) {
    profileBtn.addEventListener("click", () => {
      sound.play("click");
      document.getElementById("modal-user-profile")?.classList.add("active");
    });
  }
  document.querySelectorAll(".btn-hero-action").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const targetTab = btn.dataset.targetTab;
      if (targetTab) {
        sound.play("tab");
        syncNavigationUI(targetTab);
        store.setTab(targetTab);
        const contentElem = document.querySelector(".main-content-area");
        if (contentElem) {
          const topPos = contentElem.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top: Math.max(0, topPos), behavior: "smooth" });
        }
      }
    });
  });
}
function initFilters() {
  const pills = document.querySelectorAll(".filter-pill");
  pills.forEach((pill) => {
    pill.addEventListener("click", () => {
      const cat = pill.dataset.category;
      sound.play("click");
      pills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      store.setCategoryFilter(cat);
    });
  });
  const catItems = document.querySelectorAll(".game-cat-item");
  catItems.forEach((item) => {
    item.addEventListener("click", () => {
      const gameId = item.dataset.gameId;
      sound.play("click");
      catItems.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");
      store.setGameFilter(gameId);
    });
  });
  const searchInput = document.getElementById("main-search-input");
  if (searchInput) {
    let timeout = null;
    searchInput.addEventListener("input", (e) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        store.setSearchQuery(e.target.value);
      }, 250);
    });
  }
  const quickPostBar = document.getElementById("quick-post-trigger");
  if (quickPostBar) {
    quickPostBar.addEventListener("click", () => {
      sound.play("click");
      document.getElementById("modal-create-post")?.classList.add("active");
    });
  }
}
function renderCurrentTab() {
  const tab = store.state.activeTab;
  syncNavigationUI(tab);
  const feedContainer = document.getElementById("tab-content-feed");
  const lfgContainer = document.getElementById("tab-content-lfg");
  const gamesContainer = document.getElementById("tab-content-games");
  const tourContainer = document.getElementById("tab-content-tournaments");
  const chatContainer = document.getElementById("tab-content-chat");
  const reviewsContainer = document.getElementById("tab-content-reviews");
  [feedContainer, lfgContainer, gamesContainer, tourContainer, chatContainer, reviewsContainer].forEach((el) => {
    if (el) el.style.display = "none";
  });
  const mainGridLayout = document.getElementById("main-grid-layout");
  const filterBar = document.getElementById("global-filter-bar");
  const leftSidebar = document.getElementById("sidebar-left-games");
  if (tab === "feed") {
    if (mainGridLayout) mainGridLayout.classList.remove("no-sidebars");
    if (feedContainer) feedContainer.style.display = "block";
    if (filterBar) filterBar.style.display = "";
    if (leftSidebar) leftSidebar.style.display = "";
    renderForumFeed(document.getElementById("posts-stream-container"));
  } else if (tab === "lfg") {
    if (mainGridLayout) mainGridLayout.classList.remove("no-sidebars");
    if (lfgContainer) lfgContainer.style.display = "block";
    if (filterBar) filterBar.style.display = "";
    if (leftSidebar) leftSidebar.style.display = "";
    renderLFG(document.getElementById("squads-stream-container"));
  } else if (tab === "games") {
    if (mainGridLayout) mainGridLayout.classList.add("no-sidebars");
    if (gamesContainer) gamesContainer.style.display = "block";
    if (filterBar) filterBar.style.display = "none";
    if (leftSidebar) leftSidebar.style.display = "none";
    renderGameHubs(document.getElementById("games-stream-container"));
  } else if (tab === "tournaments") {
    if (mainGridLayout) mainGridLayout.classList.add("no-sidebars");
    if (tourContainer) tourContainer.style.display = "block";
    if (filterBar) filterBar.style.display = "none";
    if (leftSidebar) leftSidebar.style.display = "none";
    renderTournaments(document.getElementById("tournaments-stream-container"));
  } else if (tab === "chat") {
    if (mainGridLayout) mainGridLayout.classList.add("no-sidebars");
    if (chatContainer) chatContainer.style.display = "block";
    if (filterBar) filterBar.style.display = "none";
    if (leftSidebar) leftSidebar.style.display = "none";
    renderChatLounge(document.getElementById("chat-stream-container"));
  } else if (tab === "reviews") {
    if (mainGridLayout) mainGridLayout.classList.add("no-sidebars");
    if (reviewsContainer) reviewsContainer.style.display = "block";
    if (filterBar) filterBar.style.display = "none";
    if (leftSidebar) leftSidebar.style.display = "none";
    renderReviews(document.getElementById("reviews-stream-container"));
  }
}
function initModals() {
  document.querySelectorAll(".modal-close-btn, .btn-modal-cancel").forEach((btn) => {
    btn.addEventListener("click", () => {
      sound.play("click");
      document.querySelectorAll(".modal-overlay").forEach((m) => m.classList.remove("active"));
    });
  });
  document.querySelectorAll(".modal-overlay").forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        sound.play("click");
        modal.classList.remove("active");
      }
    });
  });
  const formCreatePost = document.getElementById("form-create-post");
  if (formCreatePost) {
    formCreatePost.addEventListener("submit", (e) => {
      e.preventDefault();
      const title = document.getElementById("post-in-title").value;
      const content = document.getElementById("post-in-content").value;
      const gameSelect = document.getElementById("post-in-game");
      const gameId = gameSelect.value;
      const gameName = gameSelect.options[gameSelect.selectedIndex].text;
      const category = document.getElementById("post-in-category").value;
      const tagsStr = document.getElementById("post-in-tags").value;
      const mediaType = window._postMediaState ? window._postMediaState.type : "none";
      const mediaUrl = window._postMediaState ? window._postMediaState.url : null;
      const tags = tagsStr.split(",").map((t) => t.trim()).filter(Boolean);
      store.addPost({
        title,
        content,
        gameId,
        gameName,
        category,
        tags,
        image: mediaType === "image" ? mediaUrl : mediaType === "video" ? mediaUrl : null,
        video: mediaType === "video" || mediaType === "youtube" ? mediaUrl : null,
        mediaType: mediaType === "none" ? null : mediaType
      });
      sound.play("success");
      triggerConfetti(window.innerWidth / 2, window.innerHeight * 0.4, 45);
      formCreatePost.reset();
      if (window._resetPostMedia) window._resetPostMedia();
      document.getElementById("modal-create-post")?.classList.remove("active");
      showToast5("\u{1F389} \u0E42\u0E1E\u0E2A\u0E15\u0E4C\u0E01\u0E23\u0E30\u0E17\u0E39\u0E49\u0E41\u0E25\u0E30\u0E2A\u0E37\u0E48\u0E2D\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08! \u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A +50 XP", "success");
      store.setTab("feed");
    });
  }
  const formCreateSquad = document.getElementById("form-create-squad");
  if (formCreateSquad) {
    formCreateSquad.addEventListener("submit", (e) => {
      e.preventDefault();
      const title = document.getElementById("squad-in-title").value;
      const gameSelect = document.getElementById("squad-in-game");
      const gameId = gameSelect.value;
      const gameName = gameSelect.options[gameSelect.selectedIndex].text;
      const mode = document.getElementById("squad-in-mode").value;
      const rankRequired = document.getElementById("squad-in-rank").value;
      const server = document.getElementById("squad-in-server").value;
      const hostRole = document.getElementById("squad-in-role").value;
      const membersMax = document.getElementById("squad-in-slots").value;
      const rolesNeededStr = document.getElementById("squad-in-needed").value;
      const micRequired = document.getElementById("squad-in-mic").checked;
      const rolesNeeded = rolesNeededStr.split(",").map((r) => r.trim()).filter(Boolean);
      store.addSquad({
        title,
        gameId,
        gameName,
        mode,
        rankRequired,
        server,
        hostRole,
        membersMax,
        rolesNeeded,
        micRequired
      });
      sound.play("join");
      formCreateSquad.reset();
      document.getElementById("modal-create-squad")?.classList.remove("active");
      showToast5("\u2694\uFE0F \u0E2A\u0E23\u0E49\u0E32\u0E07\u0E2B\u0E49\u0E2D\u0E07\u0E2B\u0E32\u0E15\u0E35\u0E49\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08! \u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A +30 XP", "success");
      store.setTab("lfg");
    });
  }
  const formJoinSquad = document.getElementById("form-join-squad");
  if (formJoinSquad) {
    formJoinSquad.addEventListener("submit", (e) => {
      e.preventDefault();
      const modal = document.getElementById("modal-join-squad");
      const squadId = modal.dataset.targetSquadId;
      const roleSelect = document.getElementById("join-squad-role-select");
      const role = roleSelect ? roleSelect.value : "Player";
      const res = store.joinSquad(squadId, role);
      if (res.success) {
        sound.play("join");
        showToast5(`\u{1F389} ${res.message} (+25 XP)`, "success");
      } else {
        sound.play("click");
        showToast5(`\u26A0\uFE0F ${res.message}`, "info");
      }
      modal.classList.remove("active");
    });
  }
  const formRegTour = document.getElementById("form-register-tour");
  if (formRegTour) {
    formRegTour.addEventListener("submit", (e) => {
      e.preventDefault();
      const modal = document.getElementById("modal-register-tour");
      const tourId = modal.dataset.tourId;
      const teamName = document.getElementById("tour-in-teamname").value;
      const res = store.registerTournament(tourId, teamName);
      if (res.success) {
        sound.play("success");
        showToast5(`\u{1F3C6} ${res.message} (+100 XP)`, "success");
      } else {
        sound.play("click");
        showToast5(`\u26A0\uFE0F ${res.message}`, "info");
      }
      formRegTour.reset();
      modal.classList.remove("active");
    });
  }
  const formAddReview = document.getElementById("form-add-review");
  if (formAddReview) {
    formAddReview.addEventListener("submit", (e) => {
      e.preventDefault();
      const gameSelect = document.getElementById("rev-in-game");
      const gameId = gameSelect.value;
      const gameName = gameSelect.options[gameSelect.selectedIndex].text;
      const overallRating = document.getElementById("rev-in-rating").value;
      const title = document.getElementById("rev-in-title").value;
      const content = document.getElementById("rev-in-content").value;
      const gameplay = document.getElementById("rev-in-gp").value;
      const graphics = document.getElementById("rev-in-gfx").value;
      const story = document.getElementById("rev-in-story").value;
      const soundtrack = document.getElementById("rev-in-snd").value;
      store.addReview({
        gameId,
        gameName,
        overallRating,
        title,
        content,
        gameplay,
        graphics,
        story,
        soundtrack
      });
      sound.play("success");
      formAddReview.reset();
      document.getElementById("modal-add-review")?.classList.remove("active");
      showToast5("\u2B50 \u0E2A\u0E48\u0E07\u0E23\u0E35\u0E27\u0E34\u0E27\u0E40\u0E01\u0E21\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08! \u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A +40 XP", "success");
      store.setTab("reviews");
    });
  }
  const modalCreateChan = document.getElementById("modal-create-channel");
  const formCreateChan = document.getElementById("form-create-channel");
  if (formCreateChan && modalCreateChan) {
    const typeBtns = modalCreateChan.querySelectorAll(".btn-room-type-toggle");
    const inType = modalCreateChan.querySelector("#channel-in-type");
    const inIcon = modalCreateChan.querySelector("#channel-in-icon");
    const groupSlots = modalCreateChan.querySelector("#group-channel-slots");
    typeBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        sound.play("click");
        typeBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const roomType = btn.dataset.roomType;
        if (inType) inType.value = roomType;
        if (groupSlots) {
          groupSlots.style.display = roomType === "voice" ? "block" : "none";
        }
        if (inIcon) {
          inIcon.value = roomType === "voice" ? "\u{1F50A}" : "\u{1F4AC}";
        }
      });
    });
    modalCreateChan.querySelectorAll(".btn-icon-chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        sound.play("click");
        if (inIcon) inIcon.value = chip.dataset.icon;
      });
    });
    formCreateChan.addEventListener("submit", async (e) => {
      e.preventDefault();
      const type = inType ? inType.value : "voice";
      const name = document.getElementById("channel-in-name").value;
      const category = document.getElementById("channel-in-category").value;
      const icon = inIcon ? inIcon.value : type === "voice" ? "\u{1F50A}" : "\u{1F4AC}";
      const slots = parseInt(document.getElementById("channel-in-slots")?.value || "5", 10);
      const topic = document.getElementById("channel-in-topic")?.value || "";
      sound.play("success");
      triggerConfetti(window.innerWidth / 2, window.innerHeight * 0.4, 40);
      store.awardXP(25);
      if (type === "voice") {
        const newVc = voiceManager.addVoiceChannel({ name, icon, category, slots, topic });
        store.setTab("chat");
        setTimeout(() => {
          setActiveRoom("voice", newVc.id);
        }, 100);
        showToast5(`\u{1F389} \u0E2A\u0E23\u0E49\u0E32\u0E07\u0E2B\u0E49\u0E2D\u0E07\u0E40\u0E2A\u0E35\u0E22\u0E07 "${name}" \u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08! (+25 XP)`, "success");
      } else {
        const newTxt = addCustomTextChannel({ name, icon, category, topic });
        store.setTab("chat");
        setTimeout(() => {
          setActiveRoom("text", newTxt.id);
        }, 100);
        showToast5(`\u{1F389} \u0E2A\u0E23\u0E49\u0E32\u0E07\u0E2B\u0E49\u0E2D\u0E07\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21 "${name}" \u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08! (+25 XP)`, "success");
      }
      formCreateChan.reset();
      modalCreateChan.classList.remove("active");
    });
  }
}
function initPostMediaUploader() {
  window._postMediaState = {
    type: "none",
    url: null
  };
  const tabs = document.querySelectorAll("#modal-create-post .media-type-btn");
  const panelImg = document.getElementById("panel-image");
  const panelVid = document.getElementById("panel-video");
  const panelYt = document.getElementById("panel-youtube");
  const presetsRow = document.getElementById("post-media-presets");
  const previewStage = document.getElementById("post-media-preview-stage");
  const previewBody = document.getElementById("post-media-preview-body");
  const btnRemove = document.getElementById("btn-remove-post-media");
  const fileImg = document.getElementById("file-post-image");
  const fileVid = document.getElementById("file-post-video");
  const dropImg = document.getElementById("dropzone-post-image");
  const dropVid = document.getElementById("dropzone-post-video");
  const inImgUrl = document.getElementById("post-in-image-url");
  const inVidUrl = document.getElementById("post-in-video-url");
  const inYtUrl = document.getElementById("post-in-youtube-url");
  const updatePreview = () => {
    const { type, url } = window._postMediaState;
    if (!url || type === "none") {
      if (previewStage) previewStage.style.display = "none";
      if (previewBody) previewBody.innerHTML = "";
      return;
    }
    if (previewStage) previewStage.style.display = "block";
    if (previewBody) {
      if (type === "image") {
        previewBody.innerHTML = `<img src="${url}" alt="Preview" class="preview-media-item">`;
      } else if (type === "video") {
        previewBody.innerHTML = `<video src="${url}" controls playsinline class="preview-media-item"></video>`;
      } else if (type === "youtube") {
        let embed = url;
        if (embed.includes("watch?v=")) embed = embed.replace("watch?v=", "embed/");
        else if (embed.includes("youtu.be/")) embed = embed.replace("youtu.be/", "www.youtube.com/embed/");
        previewBody.innerHTML = `<iframe src="${embed}" class="preview-media-item" frameborder="0"></iframe>`;
      }
    }
  };
  window._resetPostMedia = () => {
    window._postMediaState = { type: "none", url: null };
    tabs.forEach((t) => t.classList.toggle("active", t.dataset.mtype === "none"));
    if (panelImg) panelImg.style.display = "none";
    if (panelVid) panelVid.style.display = "none";
    if (panelYt) panelYt.style.display = "none";
    if (presetsRow) presetsRow.style.display = "none";
    if (inImgUrl) inImgUrl.value = "";
    if (inVidUrl) inVidUrl.value = "";
    if (inYtUrl) inYtUrl.value = "";
    if (fileImg) fileImg.value = "";
    if (fileVid) fileVid.value = "";
    updatePreview();
  };
  tabs.forEach((btn) => {
    btn.addEventListener("click", () => {
      sound.play("click");
      tabs.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const mtype = btn.dataset.mtype;
      window._postMediaState.type = mtype;
      if (panelImg) panelImg.style.display = mtype === "image" ? "block" : "none";
      if (panelVid) panelVid.style.display = mtype === "video" ? "block" : "none";
      if (panelYt) panelYt.style.display = mtype === "youtube" ? "block" : "none";
      if (presetsRow) presetsRow.style.display = mtype !== "none" ? "flex" : "none";
      if (mtype === "none") {
        window._postMediaState.url = null;
      }
      updatePreview();
    });
  });
  if (dropImg && fileImg) {
    dropImg.addEventListener("click", () => fileImg.click());
    fileImg.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (ev) => {
          window._postMediaState.type = "image";
          window._postMediaState.url = ev.target.result;
          updatePreview();
        };
        reader.readAsDataURL(file);
      }
    });
  }
  if (dropVid && fileVid) {
    dropVid.addEventListener("click", () => fileVid.click());
    fileVid.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (ev) => {
          window._postMediaState.type = "video";
          window._postMediaState.url = ev.target.result;
          updatePreview();
        };
        reader.readAsDataURL(file);
      }
    });
  }
  if (inImgUrl) {
    inImgUrl.addEventListener("input", (e) => {
      window._postMediaState.type = "image";
      window._postMediaState.url = e.target.value.trim() || null;
      updatePreview();
    });
  }
  if (inVidUrl) {
    inVidUrl.addEventListener("input", (e) => {
      window._postMediaState.type = "video";
      window._postMediaState.url = e.target.value.trim() || null;
      updatePreview();
    });
  }
  if (inYtUrl) {
    inYtUrl.addEventListener("input", (e) => {
      window._postMediaState.type = "youtube";
      window._postMediaState.url = e.target.value.trim() || null;
      updatePreview();
    });
  }
  document.querySelectorAll("#post-media-presets .btn-preset-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      sound.play("click");
      const ptype = chip.dataset.type;
      const purl = chip.dataset.url;
      window._postMediaState.type = ptype;
      window._postMediaState.url = purl;
      tabs.forEach((t) => t.classList.toggle("active", t.dataset.mtype === ptype));
      if (panelImg) panelImg.style.display = ptype === "image" ? "block" : "none";
      if (panelVid) panelVid.style.display = ptype === "video" ? "block" : "none";
      if (panelYt) panelYt.style.display = "none";
      if (ptype === "image" && inImgUrl) inImgUrl.value = purl;
      if (ptype === "video" && inVidUrl) inVidUrl.value = purl;
      updatePreview();
    });
  });
  if (btnRemove) {
    btnRemove.addEventListener("click", () => {
      sound.play("click");
      window._postMediaState.url = null;
      if (inImgUrl) inImgUrl.value = "";
      if (inVidUrl) inVidUrl.value = "";
      if (inYtUrl) inYtUrl.value = "";
      if (fileImg) fileImg.value = "";
      if (fileVid) fileVid.value = "";
      updatePreview();
    });
  }
}
function initStoryCreator() {
  const form = document.getElementById("form-create-story");
  if (!form) return;
  let currentStoryType = "image";
  let currentStoryUrl = null;
  let currentStoryDuration = 0;
  const typeBtns = form.querySelectorAll(".story-type-btn");
  const dropzone = form.querySelector("#dropzone-story-file");
  const fileInput = form.querySelector("#file-story-media");
  const dropIcon = form.querySelector("#dropzone-story-icon");
  const dropText = form.querySelector("#dropzone-story-text");
  const urlInput = form.querySelector("#story-in-url");
  const captionInput = form.querySelector("#story-in-caption");
  const tagInput = form.querySelector("#story-in-tag");
  const previewCanvas = form.querySelector("#story-canvas-preview");
  const formatDuration = (secs) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };
  const validateVideoDuration = (url, onValid, onInvalid) => {
    const tempVid = document.createElement("video");
    tempVid.preload = "metadata";
    tempVid.src = url;
    tempVid.onloadedmetadata = () => {
      const dur = tempVid.duration;
      if (dur > 120) {
        if (onInvalid) onInvalid(dur);
      } else {
        if (onValid) onValid(dur);
      }
    };
    tempVid.onerror = () => {
      if (onValid) onValid(15);
    };
  };
  const updateStoryPreview = () => {
    if (!previewCanvas) return;
    if (!currentStoryUrl) {
      previewCanvas.innerHTML = `<div class="story-preview-placeholder">\u0E01\u0E23\u0E38\u0E13\u0E32\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E2B\u0E23\u0E37\u0E2D\u0E04\u0E25\u0E34\u0E01\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E14\u0E49\u0E32\u0E19\u0E1A\u0E19 (\u0E04\u0E25\u0E34\u0E1B\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D\u0E15\u0E49\u0E2D\u0E07\u0E22\u0E32\u0E27\u0E44\u0E21\u0E48\u0E40\u0E01\u0E34\u0E19 2 \u0E19\u0E32\u0E17\u0E35)</div>`;
      return;
    }
    if (currentStoryType === "video") {
      previewCanvas.innerHTML = `
        <div class="story-preview-frame">
          <video src="${currentStoryUrl}" autoplay muted loop playsinline class="story-preview-media"></video>
          <div class="story-preview-badge">\u{1F3AC} \u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D \u2022 ${currentStoryDuration ? formatDuration(currentStoryDuration) : "< 2:00"} \u0E19\u0E32\u0E17\u0E35</div>
          <div class="story-preview-overlay">
            <div class="story-preview-cap">${captionInput.value || "\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E41\u0E04\u0E1B\u0E0A\u0E31\u0E48\u0E19..."}</div>
            <div class="story-preview-tag">${tagInput.value || "#Highlight"}</div>
          </div>
        </div>
      `;
    } else {
      previewCanvas.innerHTML = `
        <div class="story-preview-frame">
          <img src="${currentStoryUrl}" alt="Preview" class="story-preview-media">
          <div class="story-preview-badge">\u{1F4F8} \u0E20\u0E32\u0E1E\u0E16\u0E48\u0E32\u0E22</div>
          <div class="story-preview-overlay">
            <div class="story-preview-cap">${captionInput.value || "\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E41\u0E04\u0E1B\u0E0A\u0E31\u0E48\u0E19..."}</div>
            <div class="story-preview-tag">${tagInput.value || "#Highlight"}</div>
          </div>
        </div>
      `;
    }
  };
  typeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      sound.play("click");
      typeBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentStoryType = btn.dataset.stype;
      if (dropIcon) dropIcon.textContent = currentStoryType === "video" ? "\u{1F3A5}" : "\u{1F4F8}";
      if (dropText) dropText.textContent = currentStoryType === "video" ? "\u0E04\u0E25\u0E34\u0E01\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D\u0E08\u0E32\u0E01\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07 (\u0E04\u0E27\u0E32\u0E21\u0E22\u0E32\u0E27\u0E44\u0E21\u0E48\u0E40\u0E01\u0E34\u0E19 2 \u0E19\u0E32\u0E17\u0E35)" : "\u0E04\u0E25\u0E34\u0E01\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E\u0E08\u0E32\u0E01\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07";
      if (fileInput) fileInput.accept = currentStoryType === "video" ? "video/mp4,video/webm,video/ogg" : "image/*";
      updateStoryPreview();
    });
  });
  if (dropzone && fileInput) {
    dropzone.addEventListener("click", () => fileInput.click());
    fileInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        currentStoryType = file.type.startsWith("video") ? "video" : "image";
        typeBtns.forEach((b) => b.classList.toggle("active", b.dataset.stype === currentStoryType));
        const reader = new FileReader();
        reader.onload = (ev) => {
          const loadedUrl = ev.target.result;
          if (currentStoryType === "video") {
            validateVideoDuration(loadedUrl, (dur) => {
              currentStoryDuration = dur;
              currentStoryUrl = loadedUrl;
              updateStoryPreview();
              showToast5(`\u23F1\uFE0F \u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D\u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22 (\u0E04\u0E27\u0E32\u0E21\u0E22\u0E32\u0E27: ${formatDuration(dur)} \u0E19\u0E32\u0E17\u0E35)`, "info");
            }, (dur) => {
              fileInput.value = "";
              currentStoryUrl = null;
              currentStoryDuration = 0;
              updateStoryPreview();
              showToast5(`\u26A0\uFE0F \u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D\u0E2A\u0E15\u0E2D\u0E23\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E21\u0E35\u0E04\u0E27\u0E32\u0E21\u0E22\u0E32\u0E27\u0E44\u0E21\u0E48\u0E40\u0E01\u0E34\u0E19 2 \u0E19\u0E32\u0E17\u0E35 (120 \u0E27\u0E34\u0E19\u0E32\u0E17\u0E35) \u0E04\u0E25\u0E34\u0E1B\u0E19\u0E35\u0E49\u0E22\u0E32\u0E27 ${formatDuration(dur)} \u0E19\u0E32\u0E17\u0E35 \u0E01\u0E23\u0E38\u0E13\u0E32\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E04\u0E25\u0E34\u0E1B\u0E43\u0E2B\u0E21\u0E48`, "danger");
            });
          } else {
            currentStoryUrl = loadedUrl;
            updateStoryPreview();
          }
        };
        reader.readAsDataURL(file);
      }
    });
  }
  if (urlInput) {
    urlInput.addEventListener("input", (e) => {
      const val = e.target.value.trim();
      if (!val) {
        currentStoryUrl = null;
        updateStoryPreview();
        return;
      }
      if (currentStoryType === "video") {
        validateVideoDuration(val, (dur) => {
          currentStoryDuration = dur;
          currentStoryUrl = val;
          updateStoryPreview();
        }, (dur) => {
          currentStoryUrl = null;
          updateStoryPreview();
          showToast5(`\u26A0\uFE0F \u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D\u0E15\u0E49\u0E2D\u0E07\u0E22\u0E32\u0E27\u0E44\u0E21\u0E48\u0E40\u0E01\u0E34\u0E19 2 \u0E19\u0E32\u0E17\u0E35 (\u0E04\u0E25\u0E34\u0E1B\u0E19\u0E35\u0E49\u0E22\u0E32\u0E27 ${formatDuration(dur)} \u0E19\u0E32\u0E17\u0E35)`, "danger");
        });
      } else {
        currentStoryUrl = val;
        updateStoryPreview();
      }
    });
  }
  if (captionInput) {
    captionInput.addEventListener("input", updateStoryPreview);
  }
  if (tagInput) {
    tagInput.addEventListener("input", updateStoryPreview);
  }
  form.querySelectorAll(".btn-story-preset").forEach((btn) => {
    btn.addEventListener("click", () => {
      sound.play("click");
      const ptype = btn.dataset.type;
      const purl = btn.dataset.url;
      const pcap = btn.dataset.caption;
      const ptag = btn.dataset.tag;
      currentStoryType = ptype;
      currentStoryUrl = purl;
      currentStoryDuration = ptype === "video" ? 12 : 0;
      typeBtns.forEach((b) => b.classList.toggle("active", b.dataset.stype === ptype));
      if (urlInput) urlInput.value = purl;
      if (captionInput) captionInput.value = pcap;
      if (tagInput) tagInput.value = ptag;
      updateStoryPreview();
    });
  });
  form.querySelectorAll(".story-tag-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      sound.play("click");
      const tag = chip.dataset.tag;
      if (tagInput) {
        if (!tagInput.value.includes(tag)) {
          tagInput.value = (tagInput.value + " " + tag).trim();
        }
        updateStoryPreview();
      }
    });
  });
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (currentStoryType === "video" && currentStoryDuration > 120) {
      showToast5("\u26A0\uFE0F \u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D\u0E2A\u0E15\u0E2D\u0E23\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E21\u0E35\u0E04\u0E27\u0E32\u0E21\u0E22\u0E32\u0E27\u0E44\u0E21\u0E48\u0E40\u0E01\u0E34\u0E19 2 \u0E19\u0E32\u0E17\u0E35 (120 \u0E27\u0E34\u0E19\u0E32\u0E17\u0E35)", "danger");
      return;
    }
    const caption = captionInput.value.trim();
    const tag = tagInput.value.trim();
    const mediaUrl = currentStoryUrl || "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1080&q=80";
    const newStory = store.addStory({
      type: currentStoryType,
      mediaUrl,
      caption,
      tag: tag || "#GamerStories"
    });
    sound.play("success");
    triggerConfetti(window.innerWidth / 2, window.innerHeight * 0.4, 16);
    form.reset();
    currentStoryUrl = null;
    currentStoryDuration = 0;
    updateStoryPreview();
    document.getElementById("modal-create-story")?.classList.remove("active");
    showToast5("\u{1F680} \u0E40\u0E1C\u0E22\u0E41\u0E1E\u0E23\u0E48\u0E2A\u0E15\u0E2D\u0E23\u0E35\u0E48\u0E40\u0E01\u0E21\u0E40\u0E21\u0E2D\u0E23\u0E4C\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08! \u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A +35 XP", "success");
    setTimeout(() => {
      openStoryViewer(newStory.id);
    }, 300);
  });
}
function showToast5(message, type = "info") {
  const container = document.getElementById("toast-container");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}
