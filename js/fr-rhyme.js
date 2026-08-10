// French rhyme keys, derived from real IPA transcriptions (see
// data/words-data-fr.js) via the shared cluster helpers in js/ipa-utils.js.
// The ipa-dict source doesn't mark stress for French at all — French
// doesn't have fixed lexical stress the way German/Dutch/English do, a
// word's prominence falls on its last syllable by default. So the rhyme
// key is simply built from the last vowel nucleus through the end of the
// word (same idea as the English rule-based fallback in
// js/phonetics-en.js, just working from real pronunciations instead of a
// spelling guess).

const FR_VOWEL_BASES = new Set([
  "a", "e", "i", "o", "u", "y",
  "ɑ", "ə", "ɘ", "ɔ", "œ", "ø", "ʊ", "ɪ", "ɛ",
]);

function rhymeKeyFR(ipa) {
  const clusters = splitIpaClusters(ipa);
  const nucleus = findLastNucleus(clusters, FR_VOWEL_BASES);
  return rhymeKeyFromNucleus(clusters, nucleus);
}

function buildDecoderFR(wordsData) {
  const ipaByWord = new Map();
  for (const [w, , ipa] of wordsData) ipaByWord.set(w, ipa);

  return function getKeyFR(word) {
    const ipa = ipaByWord.get(word.toLowerCase());
    if (!ipa) return null;
    return rhymeKeyFR(ipa);
  };
}
