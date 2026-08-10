// Rule-based English grapheme-to-phoneme approximator for rhyme detection.
// Produces a token sequence of phoneme-ish codes; we then extract the last
// vowel nucleus + trailing consonant coda as the "rhyme key".

const EXCEPTIONS = {
  // word: [tokens...]  (irregular spelling-to-sound words worth special-casing)
  "of": ["AH", "V"],
  "have": ["AE", "V"],
  "give": ["IH", "V"],
  "live": ["IH", "V"],
  "done": ["AH", "N"],
  "some": ["AH", "M"],
  "come": ["AH", "M"],
  "gone": ["AO", "N"],
  "one": ["W", "AH", "N"],
  "two": ["UW"],
  "who": ["HH", "UW"],
  "do": ["D", "UW"],
  "to": ["T", "UW"],
  "said": ["EH", "D"],
  "again": ["EH", "N"],
  "great": ["EY", "T"],
  "break": ["EY", "K"],
  "steak": ["EY", "K"],
  "been": ["IH", "N"],
  "friend": ["EH", "N", "D"],
  "laugh": ["AE", "F"],
  "half": ["AE", "F"],
  "calf": ["AE", "F"],
  "aunt": ["AE", "N", "T"],
  "want": ["AA", "N", "T"],
  "wash": ["AA", "SH"],
  "watch": ["AA", "CH"],
  "water": ["AO", "T", "ER"],
  "walk": ["AO", "K"],
  "talk": ["AO", "K"],
  "chalk": ["AO", "K"],
  "could": ["UH", "D"],
  "should": ["UH", "D"],
  "would": ["UH", "D"],
  "put": ["UH", "T"],
  "full": ["UH", "L"],
  "pull": ["UH", "L"],
  "bull": ["UH", "L"],
  "wool": ["UH", "L"],
  "shoe": ["SH", "UW"],
  "move": ["UW", "V"],
  "prove": ["UW", "V"],
  "love": ["AH", "V"],
  "dove": ["AH", "V"],
  "glove": ["AH", "V"],
  "above": ["AH", "V"],
  "shove": ["AH", "V"],
  "does": ["AH", "Z"],
  "eye": ["AY"],
  "height": ["AY", "T"],
  "weight": ["EY", "T"],
  "eight": ["EY", "T"],
  "though": ["OW"],
  "although": ["OW"],
  "through": ["UW"],
  "enough": ["AH", "F"],
  "tough": ["AH", "F"],
  "rough": ["AH", "F"],
  "cough": ["AO", "F"],
  "bought": ["AO", "T"],
  "thought": ["AO", "T"],
  "brought": ["AO", "T"],
  "fought": ["AO", "T"],
  "ought": ["AO", "T"],
  "sword": ["AO", "R", "D"],
  "honest": ["AA", "N", "IH", "S", "T"],
  "hour": ["AW", "ER"],
  "honor": ["AA", "N", "ER"],
  "heard": ["HH", "ER", "D"],
  "earth": ["ER", "TH"],
  "learn": ["L", "ER", "N"],
  "search": ["S", "ER", "CH"],
  "pearl": ["P", "ER", "L"],
  "early": ["ER", "L", "IY"],
  "earn": ["ER", "N"],
  "yearn": ["Y", "ER", "N"],
  "rehearse": ["R", "IH", "HH", "ER", "S"],
  "dead": ["D", "EH", "D"],
  "bread": ["B", "R", "EH", "D"],
  "head": ["HH", "EH", "D"],
  "thread": ["TH", "R", "EH", "D"],
  "spread": ["S", "P", "R", "EH", "D"],
  "tread": ["T", "R", "EH", "D"],
  "instead": ["IH", "N", "S", "T", "EH", "D"],
  "heavy": ["HH", "EH", "V", "IY"],
  "heaven": ["HH", "EH", "V", "N"],
  "weather": ["W", "EH", "TH", "ER"],
  "feather": ["F", "EH", "TH", "ER"],
  "leather": ["L", "EH", "TH", "ER"],
  "breath": ["B", "R", "EH", "TH"],
  "death": ["D", "EH", "TH"],
  "health": ["HH", "EH", "LTH"],
  "wealth": ["W", "EH", "LTH"],
  "meant": ["M", "EH", "N", "T"],
  "steady": ["S", "T", "EH", "D", "IY"],
  "already": ["AO", "L", "R", "EH", "D", "IY"],
  "sweater": ["S", "W", "EH", "T", "ER"],
  "young": ["Y", "AH", "NG"],
  "touch": ["T", "AH", "CH"],
  "country": ["K", "AH", "N", "T", "R", "IY"],
  "cousin": ["K", "AH", "Z", "N"],
  "double": ["D", "AH", "B", "L"],
  "trouble": ["T", "R", "AH", "B", "L"],
  "couple": ["K", "AH", "P", "L"],
  "southern": ["S", "AH", "TH", "ER", "N"],
  "courage": ["K", "ER", "IH", "J"],
  "encourage": ["EH", "N", "K", "ER", "IH", "J"],
  "discourage": ["D", "IH", "S", "K", "ER", "IH", "J"],
  "nourish": ["N", "ER", "IH", "SH"],
  "flourish": ["F", "L", "ER", "IH", "SH"],
  // "oo" is ambiguous: book/wood/should share /ʊ/ (short), unlike moon/food (long /uː/)
  "book": ["B", "UH", "K"],
  "look": ["L", "UH", "K"],
  "took": ["T", "UH", "K"],
  "cook": ["K", "UH", "K"],
  "hook": ["HH", "UH", "K"],
  "shook": ["SH", "UH", "K"],
  "nook": ["N", "UH", "K"],
  "rook": ["R", "UH", "K"],
  "wood": ["W", "UH", "D"],
  "good": ["G", "UH", "D"],
  "hood": ["HH", "UH", "D"],
  "stood": ["S", "T", "UH", "D"],
  "understood": ["AH", "N", "D", "ER", "S", "T", "UH", "D"],
  "foot": ["F", "UH", "T"],
  "soot": ["S", "UH", "T"],
  // "or"-sound words that happen to start with w (unlike word/work/world)
  "worn": ["W", "AOR", "N"],
  "wore": ["W", "AOR"],
  "sworn": ["S", "W", "AOR", "N"],
  "swore": ["S", "W", "AOR"],
  // "ey" as /i:/ rather than /ei/
  "key": ["K", "IY"],
  "monkey": ["M", "AH", "NG", "K", "IY"],
  "donkey": ["D", "AA", "NG", "K", "IY"],
  "valley": ["V", "AE", "L", "IY"],
  "alley": ["AE", "L", "IY"],
  "chimney": ["CH", "IH", "M", "N", "IY"],
  "honey": ["HH", "AH", "N", "IY"],
  "money": ["M", "AH", "N", "IY"],
  "journey": ["J", "ER", "N", "IY"],
  "turkey": ["T", "ER", "K", "IY"],
  "jockey": ["J", "AA", "K", "IY"],
  "hockey": ["HH", "AA", "K", "IY"],
  "kidney": ["K", "IH", "D", "N", "IY"],
  "earl": ["ER", "L"],
  // "our" exceptions where it's AW+schwa, not the AOR default
  "hour": ["AW", "ER"],
  "sour": ["S", "AW", "ER"],
  "flour": ["F", "L", "AW", "ER"],
  "our": ["AW", "ER"],
  "flower": ["F", "L", "AW", "ER"],
  "shower": ["SH", "AW", "ER"],
  "tower": ["T", "AW", "ER"],
  "power": ["P", "AW", "ER"],
  "scour": ["S", "K", "AW", "ER"],
  "devour": ["D", "IH", "V", "AW", "ER"],
  "vague": ["V", "EY", "G"],
  "plague": ["P", "L", "EY", "G"],
  "vogue": ["V", "OW", "G"],
  "rogue": ["R", "OW", "G"],
  "fatigue": ["F", "AH", "T", "IY", "G"],
  "intrigue": ["IH", "N", "T", "R", "IY", "G"],
  "league": ["L", "IY", "G"],
  "tongue": ["T", "AH", "NG"],
  "catalogue": ["K", "AE", "T", "AH", "L", "AA", "G"],
  "dialogue": ["D", "AY", "AH", "L", "AA", "G"],
  "morgue": ["M", "AOR", "G"],
  "colleague": ["K", "AA", "L", "IY", "G"],
  "synagogue": ["S", "IH", "N", "AH", "G", "AA", "G"],
  "epilogue": ["EH", "P", "AH", "L", "AA", "G"],
  "prologue": ["P", "R", "OW", "L", "AA", "G"],
  "dough": ["D", "OW"],
  "furlough": ["F", "ER", "L", "OW"],
  "heart": ["HH", "AAR", "T"],
  "hearth": ["HH", "AAR", "TH"],
  "sign": ["S", "AY", "N"],
  "design": ["D", "IH", "Z", "AY", "N"],
  "resign": ["R", "IH", "Z", "AY", "N"],
  "assign": ["AH", "S", "AY", "N"],
  "align": ["AH", "L", "AY", "N"],
  "benign": ["B", "IH", "N", "AY", "N"],
  "malign": ["M", "AH", "L", "AY", "N"],
  "consign": ["K", "AH", "N", "S", "AY", "N"],
  "campaign": ["K", "AE", "M", "P", "EY", "N"],
  "reign": ["R", "EY", "N"],
  "deign": ["D", "EY", "N"],
  "feign": ["F", "EY", "N"],
  "dial": ["D", "AY", "L"],
  "trial": ["T", "R", "AY", "L"],
  "vial": ["V", "AY", "L"],
  "denial": ["D", "IH", "N", "AY", "L"],
  "giant": ["JH", "AY", "AH", "N", "T"],
  "client": ["K", "L", "AY", "AH", "N", "T"],
  "diet": ["D", "AY", "AH", "T"],
  "quiet": ["K", "W", "AY", "AH", "T"],
  "riot": ["R", "AY", "AH", "T"],
  "diamond": ["D", "AY", "M", "AH", "N", "D"],
  "science": ["S", "AY", "AH", "N", "S"],
  "appliance": ["AH", "P", "L", "AY", "AH", "N", "S"],
  "compliance": ["K", "AH", "M", "P", "L", "AY", "AH", "N", "S"],
  "reliant": ["R", "IH", "L", "AY", "AH", "N", "T"],
  "defiant": ["D", "IH", "F", "AY", "AH", "N", "T"],
  "iron": ["AY", "ER", "N"],
  "comb": ["OW", "M"],
  "tomb": ["UW", "M"],
  "womb": ["UW", "M"],
  "climb": ["AY", "M"],
  "numb": ["AH", "M"],
  "dumb": ["AH", "M"],
  "thumb": ["AH", "M"],
  "lamb": ["AE", "M"],
  "limb": ["IH", "M"],
  "bomb": ["AA", "M"],
  "crumb": ["AH", "M"],
  "paradigm": ["AY", "M"],
  "diaphragm": ["AE", "M"],
  "phlegm": ["EH", "M"],
  "enzyme": ["AY", "M"],
};

function isVowelLetter(c) {
  return "aeiouy".includes(c);
}

function tokenize(word) {
  let w = word.toLowerCase().replace(/[^a-z]/g, "");
  if (EXCEPTIONS[w]) return EXCEPTIONS[w].slice();
  if (!w) return [];

  // Past-tense "-ed": after most consonants the e is silent and the d/t
  // attaches directly (swirled, played, turned, jumped) — except after
  // t/d, where it's a real extra syllable (wanted, needed, painted, added).
  let pastTenseSuffix = null;
  if (
    w.length >= 4 &&
    w.endsWith("ed") &&
    !"tdaeiou".includes(w[w.length - 3])
  ) {
    pastTenseSuffix = "D";
    w = w.slice(0, -2);
  }

  let i = 0;
  const tokens = [];
  const n = w.length;

  // Word-final "e" is silent in the vast majority of English words — not
  // just the classic single-vowel+single-consonant "magic e" pattern
  // (make, site) but also after consonant clusters (force, dance, notice,
  // practice, office, once, change). A short list of words actually
  // pronounce their final e.
  const PRONOUNCED_FINAL_E = new Set(["the", "be", "he", "she", "we", "me", "recipe", "apostrophe", "karate", "cafe", "sesame", "acne", "epitome"]);
  const hasSilentE =
    n >= 3 &&
    w[n - 1] === "e" &&
    !"aeiouy".includes(w[n - 2]) &&
    !PRONOUNCED_FINAL_E.has(w);

  // The narrower "magic e" pattern (single vowel + single consonant + e)
  // additionally lengthens the preceding vowel (make -> long a) — but only
  // when that's the word's ONLY vowel. In longer words the same spelling
  // pattern is usually an unstressed suffix that stays short (message,
  // damage, package all keep a short vowel, unlike stage/cage/page).
  const isMagicEPattern =
    hasSilentE &&
    n >= 3 &&
    "aeiouy".includes(w[n - 3]) &&
    w[n - 2] !== "e" &&
    !/[aeiouy]/.test(w.slice(0, n - 3));

  const end = hasSilentE ? n - 1 : n; // drop trailing silent e from processing

  while (i < end) {
    const c3 = w.slice(i, i + 3);
    const c2 = w.slice(i, i + 2);
    const c1 = w[i];

    // --- "-tion/-sion" family suffixes: checked FIRST, before any digraph
    // or double-consonant rule can consume letters and break the pattern.
    if (w.slice(i, i + 5) === "tious") { tokens.push("SH", "AH", "S"); i += 5; continue; }
    if (w.slice(i, i + 5) === "cious") { tokens.push("SH", "AH", "S"); i += 5; continue; }
    if (w.slice(i, i + 5) === "gious") { tokens.push("J", "AH", "S"); i += 5; continue; }
    if (w.slice(i, i + 5) === "ssion") { tokens.push("SH", "AH", "N"); i += 5; continue; }
    if (w.slice(i, i + 5) === "shion") { tokens.push("SH", "AH", "N"); i += 5; continue; }
    if (w.slice(i, i + 4) === "cian") { tokens.push("SH", "AH", "N"); i += 4; continue; }
    if (w.slice(i, i + 4) === "tion") { tokens.push("SH", "AH", "N"); i += 4; continue; }
    if (w.slice(i, i + 4) === "sion") { tokens.push("ZH", "AH", "N"); i += 4; continue; }

    // --- multi-letter consonant/suffix patterns first ---
    if (c3 === "tch") { tokens.push("CH"); i += 3; continue; }
    if (c3 === "dge") { tokens.push("J"); i += 3; continue; }
    if (c3 === "igh") { tokens.push("AY"); i += 3; continue; }
    if (c2 === "gh" && w[i + 2] === "t") { i += 2; continue; } // silent gh before t (straight, bought-style)
    if (c3 === "que" && i + 3 === n) { tokens.push("K"); i += 3; continue; }
    if (c3 === "ure" && i + 3 === n) {
      // texture/nature/picture already consumed 't'/'ch' before; generic 'ure' -> "ER"
      tokens.push("ER"); i += 3; continue;
    }

    if (c3 === "wor" && (i + 3 === n || !"aeiou".includes(w[i + 3]))) {
      tokens.push("W", "ER"); i += 3; continue; // word, work, world, worm, worst
    }
    // --- soft c/g: "c" before e/i/y sounds like S (grace, dance, notice);
    // word-final "g" right before the (already-dropped) silent e sounds
    // like J (stage, message, courage) ---
    if (c1 === "c" && "eiy".includes(w[i + 1] || "z")) { tokens.push("S"); i += 1; continue; }
    if (c1 === "g" && i === end - 1 && hasSilentE) { tokens.push("J"); i += 1; continue; }

    if (c2 === "ph") { tokens.push("F"); i += 2; continue; }
    if (c2 === "wh") { tokens.push("W"); i += 2; continue; }
    if (c2 === "qu") { tokens.push("K", "W"); i += 2; continue; }
    if (c2 === "ck") { tokens.push("K"); i += 2; continue; }
    if (c2 === "ng") { tokens.push("NG"); i += 2; continue; }
    if (c2 === "nk") { tokens.push("NG", "K"); i += 2; continue; }
    if (c2 === "th") { tokens.push("TH"); i += 2; continue; }
    if (c2 === "sh") { tokens.push("SH"); i += 2; continue; }
    if (c2 === "ch") { tokens.push("CH"); i += 2; continue; }
    // double consonants collapse
    if (
      !isVowelLetter(c1) &&
      w[i + 1] === c1 &&
      c1 !== "y"
    ) {
      tokens.push(consonantCode(c1));
      i += 2;
      continue;
    }

    // --- vowel digraphs / diphthongs ---
    if (c3 === "eau") { tokens.push("OW"); i += 3; continue; }
    if (c2 === "ai" || c2 === "ay") { tokens.push("EY"); i += 2; continue; }
    if (c2 === "ee" || c2 === "ea") { tokens.push("IY"); i += 2; continue; }
    if (c2 === "oa" || c2 === "oe") { tokens.push("OW"); i += 2; continue; }
    if (c2 === "ow") {
      // heuristic: "ow" at end or before consonant+end often AW (cow, town) vs OW (know, snow, low)
      // Use a small lookup of common OW-as-long-o endings
      tokens.push("OWW"); // placeholder resolved after tokenizing whole word (rare); default AW
      i += 2; continue;
    }
    if (c3 === "iew") { tokens.push("UW"); i += 3; continue; } // view
    if (c2 === "ew") { tokens.push("UW"); i += 2; continue; } // new, few, chew, threw
    if (c2 === "ue") { tokens.push("UW"); i += 2; continue; } // blue, true, glue, clue, due
    if (c3 === "oor" && (i + 3 === n || !"aeiou".includes(w[i + 3]))) {
      tokens.push("AOR"); i += 3; continue; // door, floor, poor
    }
    if (c3 === "our" && (i + 3 === n || !"aeiou".includes(w[i + 3]))) {
      tokens.push("AOR"); i += 3; continue; // four, pour, course (hour/sour/flour are exceptions)
    }
    if (c2 === "oo") { tokens.push("UW"); i += 2; continue; }
    if (c2 === "oi" || c2 === "oy") { tokens.push("OY"); i += 2; continue; }
    if (c2 === "ou") { tokens.push("AW"); i += 2; continue; }
    if (c2 === "au" || c2 === "aw") { tokens.push("AO"); i += 2; continue; }
    if (c2 === "ie") {
      tokens.push(i + 2 === n ? "AY" : "IY");
      i += 2; continue;
    }
    if (c2 === "ei") { tokens.push("EY"); i += 2; continue; }
    if (c2 === "ey") { tokens.push("EY"); i += 2; continue; }

    // --- r-colored vowels (car, corn, her, bird, turn) ---
    // Only when r is in the coda (not followed by another vowel, which would
    // make r the onset of the next syllable, e.g. "spirit", "moral").
    const nextNext = (i + 2 < end) ? w[i + 2] : undefined;
    const blocksRColor = nextNext !== undefined && "aeiou".includes(nextNext);
    if ("aeiou".includes(c1) && w[i + 1] === "r" && !blocksRColor) {
      if (c1 === "a") { tokens.push("AAR"); i += 2; continue; } // car, farm, market
      if (c1 === "o") { tokens.push("AOR"); i += 2; continue; } // corn, door-ish, short
      tokens.push("ER"); i += 2; continue; // er/ir/ur -> bird, her, turn
    }

    // --- word-final "al"/"all" often sounds like "aw" (call, ball, small) —
    // but only when this is the word's only vowel nucleus so far (i.e. a
    // short, stressed monosyllable). Multi-syllable words ending in unstressed
    // "-al" (capital, cathedral, national) reduce to a schwa instead.
    if (
      c1 === "a" &&
      (w.slice(i + 1) === "l" || w.slice(i + 1) === "ll") &&
      !/[aeiou]/.test(w.slice(0, i))
    ) {
      tokens.push("AO"); i += 1; continue;
    }

    // --- "i" before nd/ld/gn often long (mind, kind, wild, child, sign) ---
    if (c1 === "i" && (w.slice(i + 1, i + 3) === "nd" || w.slice(i + 1, i + 3) === "ld") && (i + 3 === n || !"aeiou".includes(w[i + 3]))) {
      tokens.push("AY"); i += 1; continue;
    }

    // --- single letters ---
    if (c1 === "y") {
      if (i === 0) { tokens.push("Y"); i += 1; continue; } // consonant y at word start
      const isLast = i === n - 1;
      if (isLast) {
        // word-final y: if there's a vowel earlier in the word (happy, city,
        // baby), the y is an unstressed final IY; if not (cry, sky, my), AY.
        const before = w.slice(0, i);
        const hasEarlierVowel = /[aeiou]/.test(before);
        tokens.push(hasEarlierVowel ? "IY" : "AY");
      } else {
        tokens.push("IH");
      }
      i += 1; continue;
    }
    if (isVowelLetter(c1)) {
      if (c1 === "u" && i === n - 1) { tokens.push("UW"); i += 1; continue; } // flu, menu, guru
      const map = { a: "AE", e: "EH", i: "IH", o: "AA", u: "AH" };
      tokens.push(map[c1]);
      i += 1; continue;
    }

    tokens.push(consonantCode(c1));
    i += 1;
  }

  if (isMagicEPattern) {
    const v = w[n - 3];
    const map = { a: "EY", e: "IY", i: "AY", o: "OW", u: "UW", y: "AY" };
    // find the vowel token we just pushed for that letter and upgrade it to long form
    for (let k = tokens.length - 1; k >= 0; k--) {
      if (["AE", "EH", "IH", "AA", "AH"].includes(tokens[k])) {
        tokens[k] = map[v] || tokens[k];
        break;
      }
    }
  }

  // resolve OW placeholder (rare fallback): treat as AW unless whole word is a known OW-word
  const OW_WORDS = new Set(["know","snow","grow","throw","slow","blow","flow","glow","row","bow","low","mow","tow","crow","show","own","own","window","shadow","yellow","narrow","arrow","sparrow","below","elbow","follow","hollow","swallow","shallow","mellow","pillow","willow","borrow","tomorrow","sorrow"]);
  const resolved = tokens.map(t => t === "OWW" ? (OW_WORDS.has(w) ? "OW" : "AW") : t);

  if (pastTenseSuffix) resolved.push(pastTenseSuffix);
  return resolved;
}

function consonantCode(c) {
  const map = { c: "K", q: "K", x: "KS", j: "J", v: "V", z: "Z" };
  return (map[c] || c).toUpperCase();
}

const VOWELS = new Set(["AE","EH","IH","AA","AH","IY","UW","UH","OW","AO","EY","AY","AW","OY","ER","AAR","AOR"]);

function rhymeKey(word) {
  const tokens = tokenize(word);
  let lastVowelIdx = -1;
  for (let i = tokens.length - 1; i >= 0; i--) {
    if (VOWELS.has(tokens[i])) { lastVowelIdx = i; break; }
  }
  if (lastVowelIdx === -1) {
    return { vowel: "", coda: tokens, full: tokens.join(".") };
  }
  const vowel = tokens[lastVowelIdx];
  const coda = tokens.slice(lastVowelIdx + 1);
  return { vowel, coda, full: vowel + "-" + coda.join(".") };
}


