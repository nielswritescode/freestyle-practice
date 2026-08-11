// Italian rhyme keys, derived from real IPA transcriptions (see
// data/words-data-it.js) via the shared cluster helpers in js/ipa-utils.js.
//
// Unlike German/French/Spanish, there's no Italian file in the ipa-dict
// source those use, so this data comes from wikipron's Wiktionary scrape
// instead — and that source carries no stress marking at all (not even
// Spanish's partial marking of irregular cases). Italian stress isn't
// fully predictable from spelling either: most words are stressed on the
// second-to-last syllable ("piano", the regular default), a written
// accent always means final stress (città, perché — reliable), but a
// meaningful minority ("sdrucciole" — tavolo, musica...) are stressed on
// the third-to-last syllable with no spelling cue at all. We cover the
// common ones with a short built-in exception list; anything not in that
// list and not accented falls back to the regular default, which will be
// wrong for less-common antepenultimate-stress words. So Italian rhymes
// are noisier than German/French/Spanish's — treat mismatches as a known
// limitation of the source data rather than a bug in this file.

const IT_VOWELS = new Set(["a", "e", "ɛ", "i", "o", "ɔ", "u"]);
const IT_STRONG_VOWELS = new Set(["a", "e", "ɛ", "o", "ɔ"]);

// Common words stressed on the third-to-last syllable (sdrucciole) that
// the default penultimate-stress rule would get wrong. Not exhaustive —
// just the everyday ones likely to show up in a frequency-ranked list.
const IT_SDRUCCIOLE = new Set([
  "tavolo", "tavola", "musica", "matematica", "pubblico", "pubblica", "pubblici", "pubbliche",
  "unico", "unica", "unici", "uniche", "ultimo", "ultima", "ultimi", "ultime",
  "numero", "numeri", "popolo", "secolo", "secoli", "angolo", "angoli", "titolo", "titoli",
  "macchina", "macchine", "camera", "camere", "lettera", "lettere",
  "libero", "libera", "liberi", "libere", "difficile", "difficili", "facile", "facili",
  "semplice", "semplici", "possibile", "possibili", "impossibile", "impossibili",
  "telefono", "telefoni", "epoca", "epoche", "isola", "isole", "anima", "anime",
  "utile", "utili", "inutile", "inutili", "capitolo", "capitoli", "articolo", "articoli",
  "ordine", "ordini", "origine", "origini", "immagine", "immagini",
  "margine", "margini", "vergine", "vergini", "pagina", "pagine", "indagine", "indagini",
  "automobile", "automobili", "terribile", "terribili", "orribile", "orribili",
  "incredibile", "incredibili", "visibile", "visibili",
  "medico", "medici", "pratico", "pratica", "pratici", "pratiche",
  "logico", "logica", "logici", "logiche", "fisico", "fisica", "fisici", "fisiche",
  "specifico", "specifica", "specifici", "specifiche",
  "comodo", "comoda", "comodi", "comode", "rapido", "rapida", "rapidi", "rapide",
  "stupido", "stupida", "stupidi", "stupide", "timido", "timida", "timidi", "timide",
  "solido", "solida", "solidi", "solide", "valido", "valida", "validi", "valide",
  "rigido", "rigida", "rigidi", "rigide", "umido", "umida", "umidi", "umide",
  "povero", "povera", "poveri", "povere", "giovane", "giovani", "debole", "deboli",
  "nobile", "nobili", "ottimo", "ottima", "ottimi", "ottime",
  "massimo", "massima", "massimi", "massime", "minimo", "minima", "minimi", "minime",
  "prossimo", "prossima", "prossimi", "prossime", "intimo", "intima", "intimi", "intime",
]);

// Diphthong-aware nucleus enumeration, same principle as js/es-rhyme.js:
// a "strong" vowel (a/e/ɛ/o/ɔ) next to a "weak" one (i/u) is one syllable
// nucleus (piede, buono, mai, auto); two strong vowels are always hiatus,
// two separate nuclei (paese, aorta-style).
function itNuclei(clusters) {
  const nuclei = [];
  let i = 0;
  while (i < clusters.length) {
    if (!IT_VOWELS.has(clusters[i])) { i++; continue; }
    const next = clusters[i + 1];
    const bothStrong = IT_STRONG_VOWELS.has(clusters[i]) && next && IT_STRONG_VOWELS.has(next);
    if (next && IT_VOWELS.has(next) && !bothStrong) {
      nuclei.push({ start: i, end: i + 2 });
      i += 2;
    } else {
      nuclei.push({ start: i, end: i + 1 });
      i += 1;
    }
  }
  return nuclei;
}

const IT_FINAL_ACCENT_RE = /[àèéìîòóù]$/;

function stressedNucleusIT(word, nuclei) {
  const n = nuclei.length;
  if (n <= 1) return nuclei[0] || null;
  if (IT_FINAL_ACCENT_RE.test(word)) return nuclei[n - 1];
  if (n >= 3 && IT_SDRUCCIOLE.has(word)) return nuclei[n - 3];
  return nuclei[n - 2]; // regular default: penultimate syllable
}

function rhymeKeyIT(word, ipa) {
  const clusters = splitIpaClusters(ipa);
  const nucleus = stressedNucleusIT(word, itNuclei(clusters));
  return rhymeKeyFromNucleus(clusters, nucleus);
}

function buildDecoderIT(wordsData) {
  const ipaByWord = new Map();
  for (const [w, , ipa] of wordsData) ipaByWord.set(w, ipa);

  return function getKeyIT(word) {
    const w = word.toLowerCase();
    const ipa = ipaByWord.get(w);
    if (!ipa) return null;
    return rhymeKeyIT(w, ipa);
  };
}
