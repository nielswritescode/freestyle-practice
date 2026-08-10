// German rhyme keys, derived from real IPA transcriptions (see
// data/words-data-de.js) via the shared cluster helpers in js/ipa-utils.js.
// German marks primary stress explicitly (ˈ) on almost every dictionary
// entry, so — like Dutch — we find that mark and take the vowel nucleus
// right after it (plus any non-syllabic offglide, e.g. the "ʊ̯" in "aʊ̯")
// as the rhyme's vowel, with everything after it as the coda.

const DE_VOWEL_BASES = new Set([
  "a", "e", "i", "o", "u", "y",
  "ə", "ɐ", "ɑ", "æ", "ɘ", "ɚ", "ɜ", "ɤ", "ø", "œ", "ɔ", "ʉ", "ʊ", "ʏ", "ʌ", "ɛ", "ɪ",
]);

function rhymeKeyDE(ipa) {
  const clusters = splitIpaClusters(ipa);
  const nucleus = findMarkedNucleus(clusters, DE_VOWEL_BASES) || findLastNucleus(clusters, DE_VOWEL_BASES);
  return rhymeKeyFromNucleus(clusters, nucleus);
}

function buildDecoderDE(wordsData) {
  const ipaByWord = new Map();
  for (const [w, , ipa] of wordsData) ipaByWord.set(w, ipa);

  return function getKeyDE(word) {
    const ipa = ipaByWord.get(word.toLowerCase());
    if (!ipa) return null;
    return rhymeKeyDE(ipa);
  };
}
