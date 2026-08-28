// Curated per-category word tags, backing the "Word categories" filter in
// the Advanced panel. Like data/sensitive-words.js, this is a best-effort
// subset (not every word in data/words-data.js is tagged) checked against
// what actually exists in that file — any word not listed under one of these
// 9 categories falls under the catch-all "Other" bucket at generate time (see
// wordCategoriesOf in js/app.js). A word CAN appear in more than one category
// (e.g. "bread" is both Food and Money slang) — enabling either keeps it.
// English only for now; other languages fall back to all-Other until this is
// extended (see CATEGORY_LIST/WORD_CATEGORIES usage in js/app.js).
const WORD_CATEGORIES = {
  en: {
    spiritual: [
      "ancestor", "angel", "balance", "blessed", "breathe", "calm", "candle", "chant", "choir",
      "church", "circle", "confess", "confessed", "confession", "curse", "darkness", "demon",
      "destiny", "dove", "energy", "faith", "faithful", "fate", "forgive", "forgiveness",
      "ghost", "glow", "gods", "grace", "grateful", "gratitude", "guide", "harmony", "heaven",
      "holy", "hymn", "journey", "light", "magical", "medium", "mercy", "monastery", "nun",
      "nuns", "path", "peace", "pilgrimage", "pray", "prayed", "praying", "prophet",
      "redemption", "repent", "resurrection", "ritual", "saint", "scripture", "sermon",
      "shadow", "shadows", "shrine", "sin", "sinner", "soul", "spirit", "temple", "transcend",
      "transcendence", "truth", "universe", "void", "wheel", "wisdom", "wise", "witch",
      "wizard", "zen"
    ],
    food: [
      "appetite", "apple", "bacon", "bake", "bakery", "baking", "banana", "bean", "beer",
      "boil", "bread", "breakfast", "burger", "burrito", "butter", "cafe", "cake", "cakes",
      "cheese", "chef", "cherry", "chicken", "chocolate", "coffee", "cook", "cooked", "cookie",
      "cooking", "corn", "crab", "cream", "dairy", "delicious", "dessert", "diner", "dinner",
      "drink", "drinks", "egg", "eggs", "fish", "fruit", "fry", "garlic", "grape", "gravy",
      "grill", "herb", "honey", "juice", "kitchen", "lemon", "lobster", "mango", "market",
      "meat", "milk", "noodle", "nutrition", "onion", "orange", "oyster", "pasta", "peach",
      "pepper", "pie", "pizza", "potato", "recipe", "restaurant", "rice", "roast", "salad",
      "salt", "sandwich", "sauce", "sausage", "seed", "shrimp", "snack", "soda", "soup",
      "spice", "steak", "steaks", "stew", "sugar", "taco", "taste", "tea", "water", "wine",
      "yogurt"
    ],
    animals: [
      "ant", "bat", "bear", "beast", "bee", "beetle", "bird", "birds", "bison", "buffalo",
      "bull", "butterflies", "butterfly", "cat", "chicken", "cow", "crab", "crow", "crows",
      "deer", "dog", "dogs", "dolphin", "donkey", "duck", "eagle", "elephant", "elk", "falcon",
      "fish", "flock", "flocks", "fox", "frog", "geese", "giraffes", "goat", "gorilla", "hawk",
      "herd", "herds", "horse", "horses", "hound", "hounds", "hyena", "jaguar", "kangaroos",
      "kitten", "lion", "lizard", "lobster", "mice", "monkey", "moose", "moth", "mouse",
      "mule", "octopus", "owl", "peacocks", "penguin", "pet", "pets", "pig", "pony",
      "predator", "prey", "puppy", "rabbit", "raccoon", "rat", "raven", "robin", "shark",
      "sheep", "shrimp", "skunk", "snake", "snakes", "sparrow", "spider", "squirrel", "tiger",
      "turtle", "whale", "wolf", "zebra"
    ],
    work: [
      "ambition", "ambitious", "apprentice", "apprenticeship", "bonus", "budget", "build",
      "builder", "building", "business", "career", "careers", "carpenter", "cashier",
      "cashiers", "clerk", "clerks", "clients", "clock", "commute", "companies", "company",
      "contract", "customer", "customers", "deadline", "doctor", "doctors", "drill", "driver",
      "effort", "electrician", "email", "engineer", "engineers", "entrepreneur", "expertise",
      "factory", "farmer", "fire", "grind", "hammer", "hustle", "industry", "internship",
      "interview", "job", "lawyer", "layoff", "machine", "machines", "manager", "mentor",
      "negotiate", "nurse", "office", "officers", "overtime", "paychecks", "pension", "pilot",
      "plumber", "presentation", "profit", "project", "quit", "raise", "resume", "sale",
      "schedule", "shift", "skill", "skills", "soldier", "soldiers", "teacher", "team",
      "teams", "training", "waiter", "warehouse", "work", "workload", "workplace", "workshop",
      "wrench"
    ],
    love: [
      "ache", "aching", "adore", "adored", "always", "apart", "baby", "beloved", "betrayed",
      "blush", "bond", "boyfriend", "boyfriends", "bride", "brides", "caress", "cheat",
      "cheating", "chemistry", "cherish", "comfort", "connection", "crush", "cuddle", "date",
      "desire", "devoted", "distance", "embrace", "engaged", "faithful", "forever", "gaze",
      "gentle", "girlfriend", "girlfriends", "heal", "heart", "heartbreak", "hearts", "honey",
      "honeymoon", "hug", "jealous", "laugh", "laughter", "love", "loyal", "loyalty",
      "memories", "memory", "never", "partner", "passion", "promise", "romantic", "scar",
      "smile", "spark", "spouse", "stare", "trust", "unfaithful", "vow", "warm", "wedding",
      "whisper", "wink", "wound", "yearning"
    ],
    money: [
      "account", "bank", "banker", "bet", "bets", "bill", "bread", "broke", "buck", "budget",
      "buy", "capital", "cash", "check", "checks", "cheese", "coin", "cost", "credit",
      "currency", "debt", "debts", "diamond", "dime", "dollars", "dough", "economic",
      "economy", "expense", "fortune", "gamble", "gold", "income", "interest", "invest",
      "jackpot", "jewel", "mansion", "market", "money", "paper", "poor", "poverty", "price",
      "profit", "rent", "rich", "save", "saving", "sell", "silver", "sold", "spend",
      "spending", "spent", "stock", "trade", "transfer", "treasure", "wealth", "wealthy",
      "wire", "yacht"
    ],
    nature: [
      "autumn", "beach", "blossom", "branch", "cave", "cliff", "cloud", "comet", "creek",
      "dawn", "desert", "dirt", "drought", "dusk", "ecosystem", "field", "flower", "forest",
      "galaxy", "garden", "glacier", "grass", "ground", "harvest", "hill", "horizon", "ice",
      "island", "jungle", "lake", "leaf", "leaves", "lightning", "meadow", "meteor", "moon",
      "mountain", "mountains", "natural", "nature", "ocean", "petal", "planet", "pollen",
      "pond", "rain", "river", "rock", "root", "sand", "sea", "seas", "season", "skies", "sky",
      "snow", "soil", "spring", "star", "stone", "storm", "stream", "summer", "sun", "sunrise",
      "sunset", "thunder", "tree", "twilight", "universe", "valley", "volcano", "waterfall",
      "waterfalls", "wave", "wild", "wilderness", "wind", "winter"
    ],
    body: [
      "ankle", "artery", "bone", "brain", "breathing", "cell", "cheek", "chest", "chin",
      "collarbone", "complexion", "ear", "ears", "elbow", "elbows", "eye", "eyebrow",
      "eyelash", "face", "finger", "fingernail", "fingers", "foot", "forehead", "hair", "hand",
      "head", "heart", "heartbeat", "hip", "hormone", "jaw", "joint", "kidney", "knee", "legs",
      "lip", "liver", "lung", "marrow", "mouth", "muscle", "nail", "neck", "nerve", "nose",
      "organ", "physique", "posture", "shoulder", "skin", "spine", "spleen", "stomach", "tear",
      "tears", "teeth", "thumb", "thumbs", "tissue", "tissues", "toe", "toes", "tongue",
      "vein", "wrist"
    ],
    street: [
      "avenue", "avenues", "barricade", "billboard", "block", "boulevard", "bridge", "bus",
      "cab", "camera", "cameras", "city", "concrete", "cop", "cops", "corner", "crew",
      "crosswalk", "crosswalks", "curb", "downtown", "drain", "escape", "garbage", "gunshot",
      "highway", "highways", "hood", "horn", "intersection", "lamppost", "manhole", "meter",
      "mural", "neighborhood", "overpass", "parking", "parties", "party", "patrol",
      "patrolled", "pavement", "police", "pothole", "project", "protest", "protester",
      "rooftop", "shop", "sidewalk", "skyline", "skyscraper", "slum", "slums", "store",
      "storefront", "street", "subway", "taxi", "ticket", "tickets", "tow", "towed", "traffic",
      "train", "tunnel", "underpass", "uptown", "vendor"
    ]
  },
};
