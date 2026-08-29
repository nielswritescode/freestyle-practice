// Czech rhyme keys, derived from real IPA transcriptions (see
// data/words-data-cs.js) via the shared cluster helpers in js/ipa-utils.js.
// IPA sourced from wikipron's Wiktionary scrape (ces_latn_narrow, CC
// BY-SA/GFDL), which carries no stress marking at all — same situation as
// Italian's source. Unlike Italian, that's not a gap: Czech word stress is
// entirely fixed on the first syllable, so there'd be nothing useful to
// mark. But fixed initial stress is exactly why it's the wrong thing to
// build a rhyme key from — for rap/poetic rhyme, what matters is whether
// word ENDINGS sound alike, not where the (always-first-syllable, so
// rhyme-irrelevant) stress falls. So, like French, the rhyme key is just
// the last vowel nucleus through the end of the word.

const CS_VOWEL_BASES = new Set(["a", "ɛ", "i", "ɪ", "o", "u", "e", "y", "ɔ", "ʊ"]);

function rhymeKeyCS(ipa) {
  const clusters = splitIpaClusters(ipa);
  const nucleus = findLastNucleus(clusters, CS_VOWEL_BASES);
  return rhymeKeyFromNucleus(clusters, nucleus);
}

function buildDecoderCS(wordsData) {
  const ipaByWord = new Map();
  for (const [w, , ipa] of wordsData) ipaByWord.set(w, ipa);

  return function getKeyCS(word) {
    const ipa = ipaByWord.get(word.toLowerCase());
    if (!ipa) return null;
    return rhymeKeyCS(ipa);
  };
}
