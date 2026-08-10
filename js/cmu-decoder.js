
// CMU_DATA shape: { codebook: {PHONEME: char}, keys: [encodedKeyString...], words: {word: keyIndex} }
function buildDecoder(cmuData) {
  const reverseCodebook = {};
  for (const [phoneme, ch] of Object.entries(cmuData.codebook)) reverseCodebook[ch] = phoneme;

  function decodeKey(encoded) {
    const tokens = [...encoded].map((ch) => reverseCodebook[ch]);
    return { vowel: tokens[0], coda: tokens.slice(1) };
  }

  const decodedCache = new Map();
  function keyForIndex(idx) {
    if (decodedCache.has(idx)) return decodedCache.get(idx);
    const decoded = decodeKey(cmuData.keys[idx]);
    decodedCache.set(idx, decoded);
    return decoded;
  }

  return function getKey(word) {
    const w = word.toLowerCase().replace(/[^a-z]/g, "");
    if (Object.prototype.hasOwnProperty.call(cmuData.words, w)) {
      return keyForIndex(cmuData.words[w]);
    }
    // Out-of-vocabulary (e.g. a made-up word in a user's CSV): fall back to
    // the rule-based spelling-to-sound guesser.
    const fb = rhymeKey(w);
    if (!fb.vowel) return null;
    return { vowel: fb.vowel, coda: fb.coda };
  };
}


