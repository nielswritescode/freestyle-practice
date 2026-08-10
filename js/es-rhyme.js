// Spanish rhyme keys, derived from real IPA transcriptions (see
// data/words-data-es.js) via the shared cluster helpers in js/ipa-utils.js.
//
// Unlike German, the ipa-dict source only marks stress (ˈ) on Spanish
// words whose stress is IRREGULAR — i.e. exactly the words that carry a
// written accent in Spanish spelling (país, actúa, también...). The
// majority of words follow Spanish's regular stress rule and are left
// unmarked, so for those we apply that rule ourselves: stress falls on
// the second-to-last syllable if the word ends in a vowel, "n", or "s",
// and on the last syllable otherwise.
//
// Applying that rule correctly requires knowing where syllable nuclei
// are, which means merging vowel-vowel sequences into diphthongs the way
// Spanish actually does: two "strong" vowels (a/e/o) next to each other
// are always two separate syllables (hiatus — aorta, poeta, idea), while
// a strong vowel next to a "weak" one (i/u) is one syllable (aire, auto).
// Rising diphthongs (bien, bueno) are already written with a glide (j/w)
// in this dictionary's transcriptions, so they don't need merging here —
// only the plain vowel-vowel sequences do.

const ES_VOWELS = new Set(["a", "e", "i", "o", "u"]);
const ES_STRONG_VOWELS = new Set(["a", "e", "o"]);

function esNuclei(clusters) {
  const nuclei = [];
  let i = 0;
  while (i < clusters.length) {
    if (!ES_VOWELS.has(clusters[i])) { i++; continue; }
    const next = clusters[i + 1];
    const bothStrong = ES_STRONG_VOWELS.has(clusters[i]) && next && ES_STRONG_VOWELS.has(next);
    if (next && ES_VOWELS.has(next) && !bothStrong) {
      nuclei.push({ start: i, end: i + 2 });
      i += 2;
    } else {
      nuclei.push({ start: i, end: i + 1 });
      i += 1;
    }
  }
  return nuclei;
}

function defaultStressNucleus(clusters) {
  const nuclei = esNuclei(clusters);
  if (nuclei.length === 0) return null;
  if (nuclei.length === 1) return nuclei[0];
  const last = clusters[clusters.length - 1];
  const regularPenultimate = ES_VOWELS.has(last) || last === "n" || last === "s";
  return regularPenultimate ? nuclei[nuclei.length - 2] : nuclei[nuclei.length - 1];
}

// Marked (irregular-stress) words: the ˈ always lands right before the
// stressed syllable, so unlike the default-rule path we don't need to
// merge diphthongs — we just take the single vowel right after the mark
// (skipping onset consonants/glides), which is exactly what the mark's
// position already tells us.
function markedStressNucleus(clusters) {
  const stressIdx = clusters.indexOf("ˈ");
  if (stressIdx === -1) return null;
  for (let i = stressIdx + 1; i < clusters.length; i++) {
    if (ES_VOWELS.has(clusters[i])) return { start: i, end: i + 1 };
  }
  return null;
}

function rhymeKeyES(ipa) {
  const clusters = splitIpaClusters(ipa);
  const nucleus = markedStressNucleus(clusters) || defaultStressNucleus(clusters);
  return rhymeKeyFromNucleus(clusters, nucleus);
}

function buildDecoderES(wordsData) {
  const ipaByWord = new Map();
  for (const [w, , ipa] of wordsData) ipaByWord.set(w, ipa);

  return function getKeyES(word) {
    const ipa = ipaByWord.get(word.toLowerCase());
    if (!ipa) return null;
    return rhymeKeyES(ipa);
  };
}
