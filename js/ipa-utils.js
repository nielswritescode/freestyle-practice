// Shared helpers for turning a raw IPA transcription into a sequence of
// "clusters" — one entry per speech sound, with any combining diacritics
// (nasalization, non-syllabic glide marks, length, etc.) glued onto the
// base character they modify rather than floating as their own array
// entry. German/French/Spanish rhyme decoders (js/de-rhyme.js,
// js/fr-rhyme.js, js/es-rhyme.js) all build on this instead of each
// re-deriving their own character-splitting logic.

const IPA_COMBINING_MARKS = new Set([
  "̃", // ̃  nasalization
  "̯", // ̯  non-syllabic (marks the glide half of a diphthong, e.g. aʊ̯)
  "̩", // ̩  syllabic consonant
  "̪", // ̪  dental
  "̺", // ̺  apical
  "̥", // ̥  voiceless
  "̊", // ̊  ring above
  "̍", // ̍  syllabic (alt.)
  "̑", // ̑  inverted breve above
  "̝", // ̝  raised
  "̞", // ̞  lowered
  "͡", // ͡  tie bar (affricates, e.g. t͡s)
  "ː", // ː  long
  "ˑ", // ˑ  half-long
  "ʰ", // ʰ  aspirated
  "ʲ", // ʲ  palatalized
  "ˠ", // ˠ  velarized
]);

// Prosodic/boundary marks that carry no segmental content for rhyme
// purposes — dropped outright rather than kept as stray tokens, so two
// otherwise-identical endings don't fail to match just because one
// happened to fall on a marked syllable or word boundary.
const IPA_IGNORED_CHARS = new Set([".", "|", "‖", "‿", "⁀", "↗", "↘", "ˌ"]);

function splitIpaClusters(raw) {
  const clusters = [];
  for (const c of Array.from(raw)) {
    if (IPA_IGNORED_CHARS.has(c)) continue;
    if (IPA_COMBINING_MARKS.has(c) && clusters.length > 0) {
      clusters[clusters.length - 1] += c;
    } else {
      clusters.push(c);
    }
  }
  return clusters;
}

function clusterIsVowel(cluster, vowelBases) {
  return vowelBases.has(Array.from(cluster)[0]) && !cluster.includes("̯");
}

// Finds the nucleus right after a primary-stress mark (ˈ): skip onset
// consonants until the first true vowel cluster, then absorb any
// immediately-following non-syllabic (̯) clusters as the diphthong tail
// (e.g. ˈ...a + ʊ̯ -> nucleus "aʊ̯"). Returns null if there's no ˈ at all.
function findMarkedNucleus(clusters, vowelBases) {
  const stressIdx = clusters.indexOf("ˈ");
  if (stressIdx === -1) return null;
  let i = stressIdx + 1;
  while (i < clusters.length && !clusterIsVowel(clusters[i], vowelBases)) i++;
  if (i >= clusters.length) return null;
  let end = i + 1;
  while (end < clusters.length && clusters[end].includes("̯")) end++;
  return { start: i, end };
}

// Fallback/French-style nucleus: just the last true vowel in the word.
function findLastNucleus(clusters, vowelBases) {
  for (let i = clusters.length - 1; i >= 0; i--) {
    if (clusterIsVowel(clusters[i], vowelBases)) return { start: i, end: i + 1 };
  }
  return null;
}

function rhymeKeyFromNucleus(clusters, nucleus) {
  if (!nucleus) return null;
  return {
    vowel: clusters.slice(nucleus.start, nucleus.end).join(""),
    coda: clusters.slice(nucleus.end),
  };
}
