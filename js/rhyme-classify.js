
// Small groups of genuinely close-sounding vowels (not a broad front/back
// split — that was loose enough to pair unrelated vowels).
const TIGHT_VOWEL_GROUPS = [
  ["IY", "IH"],        // see / sit
  ["EH", "AE"],        // bed / bad
  ["IH", "EH"],        // bit / bet
  ["AA", "AO", "AOR"], // cot / caught / corn-ish back-rounded
  ["UW", "UH"],        // boot / book
  ["AH", "AA"],        // cut / cot
  ["AY", "OY"],        // mind / join (both closing diphthongs)
  ["ER", "AOR", "AAR"],// bird / corn / car (r-colored family, still fairly close)
];
function tightVowelGroupOf(v) {
  return TIGHT_VOWEL_GROUPS.find((g) => g.includes(v)) || null;
}
function closeVowels(a, b) {
  if (a === b) return true;
  const g = tightVowelGroupOf(a);
  return !!g && g.includes(b);
}

// Consonant features: place of articulation + manner. Two consonants that
// share both place and manner (voicing pairs: P/B, T/D, K/G, F/V, S/Z,
// SH/ZH, CH/J) sound nearly identical — that's tight enough for "near".
// Sharing manner only (any two stops, any two nasals) is looser — that's
// "slant" territory, not "near".
const CONSONANT_FEATURES = {
  P: { place: "labial", manner: "stop" },
  B: { place: "labial", manner: "stop" },
  T: { place: "alveolar", manner: "stop" },
  D: { place: "alveolar", manner: "stop" },
  K: { place: "velar", manner: "stop" },
  G: { place: "velar", manner: "stop" },
  M: { place: "labial", manner: "nasal" },
  N: { place: "alveolar", manner: "nasal" },
  NG: { place: "velar", manner: "nasal" },
  F: { place: "labial", manner: "fric" },
  V: { place: "labial", manner: "fric" },
  S: { place: "alveolar", manner: "fric" },
  Z: { place: "alveolar", manner: "fric" },
  TH: { place: "dental", manner: "fric" },
  DH: { place: "dental", manner: "fric" },
  SH: { place: "postalveolar", manner: "fric" },
  ZH: { place: "postalveolar", manner: "fric" },
  H: { place: "glottal", manner: "fric" },
  HH: { place: "glottal", manner: "fric" },
  CH: { place: "postalveolar", manner: "affricate" },
  J: { place: "postalveolar", manner: "affricate" },
  JH: { place: "postalveolar", manner: "affricate" },
  L: { place: "alveolar", manner: "liquid" },
  R: { place: "alveolar", manner: "liquid" },
  W: { place: "labial", manner: "glide" },
  Y: { place: "palatal", manner: "glide" },
};

function lastConsonant(coda) {
  return coda.length ? coda[coda.length - 1] : null;
}

function featuresOf(c) {
  return CONSONANT_FEATURES[c] || null;
}

// "near" tightness: identical, or same place+manner (a pure voicing swap).
function consonantsNear(x, y) {
  if (x === y) return true;
  const fx = featuresOf(x), fy = featuresOf(y);
  if (!fx || !fy) return false;
  return fx.place === fy.place && fx.manner === fy.manner;
}

// "slant" looseness: same manner only (any two stops, any two nasals...).
function consonantsSlantClose(x, y) {
  if (x === y) return true;
  const fx = featuresOf(x), fy = featuresOf(y);
  if (!fx || !fy) return false;
  return fx.manner === fy.manner;
}

function codasEqual(a, b) {
  return a.length === b.length && a.every((t, i) => t === b[i]);
}

// "Near" coda: nearly identical, not just sharing a final consonant while
// ignoring everything before it (that was the "fragment"/"blast" bug — both
// end in T, but the codas are otherwise nothing alike).
function codaNearMatch(a, b) {
  if (codasEqual(a, b)) return false; // handled as perfect already
  if (Math.abs(a.length - b.length) > 1) return false;
  if (a.length === b.length) {
    const diffPositions = [];
    for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) diffPositions.push(i);
    if (diffPositions.length !== 1) return false;
    const i = diffPositions[0];
    return consonantsNear(a[i], b[i]);
  }
  // lengths differ by exactly 1: near if the shorter is an exact prefix of
  // the longer (e.g. "ban"[N] / "band"[N,D])
  const shorter = a.length < b.length ? a : b;
  const longer = a.length < b.length ? b : a;
  return shorter.every((t, i) => t === longer[i]);
}

function classifyPair(keyA, keyB) {
  const sameVowel = keyA.vowel === keyB.vowel;
  const sameCoda = codasEqual(keyA.coda, keyB.coda);
  if (sameVowel && sameCoda) return "perfect";

  // Near: identical vowel, and the coda is a near-exact match — differs by
  // one small edit (a voicing-style swap, or one trailing consonant added
  // or dropped), not just an incidentally-matching last sound.
  if (sameVowel && codaNearMatch(keyA.coda, keyB.coda)) return "near";

  // Slant: only ONE dimension is allowed to be approximate, the other must
  // be exact — otherwise two fuzzy matches stack and stop sounding like a
  // rhyme at all.
  // Consonance: exact same ending, vowel merely close (e.g. "cat"/"light").
  if (sameCoda && keyA.coda.length > 0 && closeVowels(keyA.vowel, keyB.vowel) && !sameVowel) return "slant";
  // Assonance: exact same vowel, coda differs beyond the "near" threshold —
  // this is the classic rap technique (time/mind/light/climb), honestly
  // bucketed as the loosest tier since the ending sounds are quite different.
  // Still capped: a 1-phoneme coda next to a 5-phoneme coda ("calm"/
  // "compound") shares a vowel but doesn't read as a rhyme at all.
  if (sameVowel && !sameCoda && !codaNearMatch(keyA.coda, keyB.coda) && Math.abs(keyA.coda.length - keyB.coda.length) <= 2) return "slant";

  return null; // not close enough to read as a rhyme
}


