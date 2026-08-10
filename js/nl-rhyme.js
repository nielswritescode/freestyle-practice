// Dutch rhyme keys, derived directly from real IPA transcriptions (see
// data/words-data-nl.js) rather than an approximated spelling-to-sound
// guesser — Dutch orthography is regular enough that we didn't need to
// build a rule-based tokenizer, we just needed the pronunciations.
// Only "perfect" rhymes are supported for Dutch (matching this app's
// current English behavior too, see the hidden Rhyme-type row above).

const NL_VOWELS = new Set(["a", "e", "i", "o", "u", "y", "ə", "ɛ", "ɑ", "ɪ", "ɔ", "œ", "ø", "ʉ", "ɒ"]);
const NL_DIPHTHONGS = new Set(["ɛi", "œy", "ɑu"]);

function ipaTokensNL(raw) {
  const chars = Array.from(raw);
  const tokens = [];
  let i = 0;
  const n = chars.length;
  let stressNext = false; // true right after a ˈ, until the next vowel token
  while (i < n) {
    const c = chars[i];
    if (c === "ˈ") { stressNext = true; i++; continue; }
    if (c === "ˌ" || c === "." || c === "͡") { i++; continue; }
    if (NL_VOWELS.has(c)) {
      let tok = c;
      let j = i + 1;
      if (chars[j] === "ː") { tok += "ː"; j++; }
      if (chars[j] && NL_VOWELS.has(chars[j]) && NL_DIPHTHONGS.has(c + chars[j])) {
        tok = c + chars[j];
        j++;
      }
      tokens.push({ t: tok, vowel: true, stressed: stressNext });
      stressNext = false;
      i = j;
      continue;
    }
    tokens.push({ t: c, vowel: false, stressed: false });
    i++;
  }
  return tokens;
}

// A real perfect rhyme needs to match from the STRESSED vowel through the
// end of the word, not just the trailing vowel — otherwise any two words
// that happen to share an unstressed final syllable (Dutch has very
// productive unstressed suffixes like -en, -el, -er, -els) get flagged as
// "perfect" even though their stressed syllables — the part that actually
// carries the rhyme — are completely different (e.g. "hufter" / "erover"
// both trail off in an unstressed -er, but don't rhyme at all).
function rhymeKeyNL(ipa) {
  const tokens = ipaTokensNL(ipa);
  let stressedIdx = tokens.findIndex((t) => t.vowel && t.stressed);
  if (stressedIdx === -1) {
    // No stress mark found (shouldn't happen with this dictionary's data,
    // but fall back to the last vowel rather than failing outright).
    for (let i = tokens.length - 1; i >= 0; i--) {
      if (tokens[i].vowel) { stressedIdx = i; break; }
    }
  }
  if (stressedIdx === -1) return null;
  return {
    vowel: tokens[stressedIdx].t,
    coda: tokens.slice(stressedIdx + 1).map((t) => t.t),
  };
}

function buildDecoderNL(wordsData) {
  const ipaByWord = new Map();
  for (const [w, , ipa] of wordsData) ipaByWord.set(w, ipa);

  return function getKeyNL(word) {
    const w = word.toLowerCase();
    const ipa = ipaByWord.get(w);
    if (!ipa) return null; // no rule-based fallback for out-of-vocabulary Dutch words
    return rhymeKeyNL(ipa);
  };
}
