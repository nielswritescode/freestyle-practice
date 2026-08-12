(function () {
  // ---- state ----
  function tieredWords(wordsData) {
    const words = wordsData.map(([w]) => w);
    const byTier = { easy: [], intermediate: [], complex: [] };
    for (const [w, tier] of wordsData) {
      if (byTier[tier]) byTier[tier].push(w);
    }
    return { words, byTier };
  }
  const LANGS = {
    en: { ...tieredWords(WORDS_DATA), getKey: buildDecoder(CMU_DATA) },
    nl: { ...tieredWords(WORDS_DATA_NL), getKey: buildDecoderNL(WORDS_DATA_NL) },
    de: { ...tieredWords(WORDS_DATA_DE), getKey: buildDecoderDE(WORDS_DATA_DE) },
    fr: { ...tieredWords(WORDS_DATA_FR), getKey: buildDecoderFR(WORDS_DATA_FR) },
    es: { ...tieredWords(WORDS_DATA_ES), getKey: buildDecoderES(WORDS_DATA_ES) },
    it: { ...tieredWords(WORDS_DATA_IT), getKey: buildDecoderIT(WORDS_DATA_IT) },
  };

  // Per-language UI strings and built-in library size, keyed the same as
  // LANGS. English ships an ~11,000-word library (12,000 curated words,
  // minus 908 with no data/wordnet-data.js entry — see words-data.js);
  // Dutch ships the full 12,000. German/French/Spanish ship a lighter
  // 3,000-word one (frequency-ranked, real IPA rhymes, no hand-curated
  // rhyme-family balancing — see data/words-data-{de,fr,es}.js).
  const LANG_META = {
    en: { wordListLabel: "Word list — 11,000 built in, or add your own", builtInCount: "11,000" },
    nl: { wordListLabel: "Woordenlijst — 12.000 ingebouwd, of voeg je eigen woorden toe", builtInCount: "12,000" },
    de: { wordListLabel: "Wortliste — 3.000 integriert, oder füge eigene hinzu", builtInCount: "3,000" },
    fr: { wordListLabel: "Liste de mots — 3 000 intégrés, ou ajoutez les vôtres", builtInCount: "3,000" },
    es: { wordListLabel: "Lista de palabras — 3000 incorporadas, o añade las tuyas", builtInCount: "3,000" },
    it: { wordListLabel: "Lista di parole — 3.000 integrate, o aggiungi le tue", builtInCount: "3,000" },
  };
  // Only English has a rule-based spelling-to-sound fallback (js/phonetics-en.js);
  // every other language depends entirely on its built-in pronunciation
  // dictionary, so a CSV word outside that dictionary can't get a rhyme key.
  function oovCsvWarning(lang) {
    return lang === "en" ? "" : " Words not already in the built-in dictionary won't have a known pronunciation, so they'll be skipped.";
  }

  let currentLanguage = "en";
  let csvWords = [];
  let libraryMode = "builtin"; // 'builtin' | 'add' | 'only'

  // Difficulty mix: two boundary percentages split the built-in library into
  // easy / intermediate / complex. Defaults to 80/10/10.
  const diffSplitByLang = {
    en: [80, 90],
    nl: [80, 90],
    de: [80, 90],
    fr: [80, 90],
    es: [80, 90],
    it: [80, 90],
  };
  // Kept as a live reference into diffSplitByLang[currentLanguage] — every
  // read/write site below just uses `diffSplit`, and mutating its elements
  // (diffSplit[0] = ...) mutates the per-language slot automatically since
  // arrays are references. Repointed on language switch, see below.
  let diffSplit = diffSplitByLang[currentLanguage];

  let selectedCount = 20;
  let customCountActive = false;
  let playlistVisible = true;
  let playlistSource = "youtube";
  let guidelinesOpen = true;
  let advancedOpen = false;
  let autoRefreshEnabled = false;
  let autoRefreshSeconds = 60;
  let defStyle = "links"; // 'links' | 'simple' | 'full'
  let activeTypes = new Set(["perfect"]); // near/slant hidden for now, see template.html

  // Upper handle maxes out at "Any" (no cap) rather than literally capping
  // at 6 — most words are well under that anyway, so it reads as "off" at
  // the top. The lower handle has no such escape hatch: 1 already is the
  // real minimum, so it's a no-op filter at the bottom.
  const SYLLABLE_SLIDER_MAX = 6;
  let minSyllables = 1;
  let maxSyllables = SYLLABLE_SLIDER_MAX;

  // 'off' = no filtering, 'on' = exclude sensitive words (default), 'only'
  // = the inverse — restrict the pool to just the sensitive-words list.
  const SENSITIVE_MODES = ["off", "on", "only"];
  let sensitiveWordMode = "on";

  const VALID_THEMES = ["dark", "light", "magenta", "neon-purple", "neon"];
  let currentTheme = "dark";

  // ---- persisted settings ----
  // Everything here is a user preference, not session data (a CSV upload
  // isn't remembered — file inputs can't be restored anyway, and Dutch/
  // English word lists aren't cross-compatible, see the language switch
  // handler below), so we only persist the small settings surface.
  const SETTINGS_KEY = "rhymeflow:settings";

  function loadSettings() {
    let stored;
    try {
      stored = JSON.parse(localStorage.getItem(SETTINGS_KEY));
    } catch (e) {
      return; // corrupted JSON — fall back to defaults
    }
    if (!stored || typeof stored !== "object") return;
    if (Object.prototype.hasOwnProperty.call(LANGS, stored.language)) currentLanguage = stored.language;
    const isValidSplit = (s) =>
      Array.isArray(s) && s.length === 2 &&
      s.every((v) => typeof v === "number" && v >= 0 && v <= 100) &&
      s[0] <= s[1];
    if (stored.diffSplitByLang && typeof stored.diffSplitByLang === "object") {
      for (const lang of ["en", "nl", "de", "fr", "es", "it"]) {
        const s = stored.diffSplitByLang[lang];
        if (isValidSplit(s)) diffSplitByLang[lang] = s;
      }
    }
    if (typeof stored.selectedCount === "number" && stored.selectedCount > 0) {
      selectedCount = stored.selectedCount;
    }
    if (typeof stored.customCountActive === "boolean") customCountActive = stored.customCountActive;
    if (typeof stored.playlistVisible === "boolean") playlistVisible = stored.playlistVisible;
    if (stored.playlistSource === "spotify" || stored.playlistSource === "youtube") playlistSource = stored.playlistSource;
    if (typeof stored.guidelinesOpen === "boolean") guidelinesOpen = stored.guidelinesOpen;
    if (typeof stored.advancedOpen === "boolean") advancedOpen = stored.advancedOpen;
    if (typeof stored.autoRefreshEnabled === "boolean") autoRefreshEnabled = stored.autoRefreshEnabled;
    if (typeof stored.autoRefreshSeconds === "number" && stored.autoRefreshSeconds >= 5) {
      autoRefreshSeconds = stored.autoRefreshSeconds;
    }
    if (stored.defStyle === "links" || stored.defStyle === "simple" || stored.defStyle === "full") {
      defStyle = stored.defStyle;
    }
    if (typeof stored.maxSyllables === "number" && stored.maxSyllables >= 1 && stored.maxSyllables <= SYLLABLE_SLIDER_MAX) {
      maxSyllables = stored.maxSyllables;
    }
    if (typeof stored.minSyllables === "number" && stored.minSyllables >= 1 && stored.minSyllables <= maxSyllables) {
      minSyllables = stored.minSyllables;
    }
    if (SENSITIVE_MODES.includes(stored.sensitiveWordMode)) sensitiveWordMode = stored.sensitiveWordMode;
    if (VALID_THEMES.includes(stored.theme)) currentTheme = stored.theme;
  }

  function saveSettings() {
    try {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify({
        language: currentLanguage,
        diffSplitByLang,
        selectedCount,
        customCountActive,
        playlistVisible: playlistToggle.checked,
        playlistSource: playlistSourceSelect.value,
        guidelinesOpen: guidelinesDetails.open,
        advancedOpen: advancedDetails.open,
        autoRefreshEnabled: autoRefreshToggle.checked,
        autoRefreshSeconds,
        defStyle,
        minSyllables,
        maxSyllables,
        sensitiveWordMode,
        theme: currentTheme,
      }));
    } catch (e) {
      // storage full or unavailable (e.g. private browsing) — settings
      // just won't persist, nothing else to do about it here
    }
  }

  loadSettings();
  diffSplit = diffSplitByLang[currentLanguage]; // re-point now that loadSettings may have changed currentLanguage

  let builtInWords = LANGS[currentLanguage].words;
  let wordsByTier = LANGS[currentLanguage].byTier;

  let currentPairs = [];

  // ---- DOM ----
  const langPills = document.querySelectorAll(".lang-pill");
  const wordListLabel = document.getElementById("wordListLabel");
  const countPills = document.querySelectorAll(".count-pill");
  const customCountInput = document.getElementById("customCount");
  const typePills = document.querySelectorAll(".type-pill");
  const csvInput = document.getElementById("csvInput");
  const csvAddBtn = document.getElementById("csvAddBtn");
  const csvOnlyBtn = document.getElementById("csvOnlyBtn");
  const csvResetBtn = document.getElementById("csvResetBtn");
  const csvExampleBtn = document.getElementById("csvExampleBtn");
  const csvStatus = document.getElementById("csvStatus");
  const refreshBtnTop = document.getElementById("refreshBtnTop");
  const refreshBtnBottom = document.getElementById("refreshBtnBottom");
  const playlistToggle = document.getElementById("playlistToggle");
  const playlistPanel = document.getElementById("playlistPanel");
  const playlistSourceSelect = document.getElementById("playlistSourceSelect");
  const spotifyEmbed = document.getElementById("spotifyEmbed");
  const youtubeEmbed = document.getElementById("youtubeEmbed");
  const guidelinesDetails = document.getElementById("guidelinesDetails");
  const advancedDetails = document.getElementById("advancedDetails");
  const revealModePills = document.querySelectorAll(".reveal-mode-pill");
  const autoRefreshToggle = document.getElementById("autoRefreshToggle");
  const autoRefreshSecondsInput = document.getElementById("autoRefreshSeconds");
  const defStylePills = document.querySelectorAll(".def-style-pill");
  const showAllDefsRow = document.getElementById("showAllDefsRow");
  const showAllDefsBtn = document.getElementById("showAllDefsBtn");
  const hideUiBtn = document.getElementById("hideUiBtn");
  const settingsCol = document.querySelector(".settings-col");
  const pairsContainer = document.getElementById("pairsContainer");
  const countInfo = document.getElementById("countInfo");
  const diffSlider = document.getElementById("diffSlider");
  const diffTrack = diffSlider.querySelector(".diff-slider-track");
  const diffSegEasy = document.getElementById("diffSegEasy");
  const diffSegMid = document.getElementById("diffSegMid");
  const diffSegHard = document.getElementById("diffSegHard");
  const diffHandle1 = document.getElementById("diffHandle1");
  const diffHandle2 = document.getElementById("diffHandle2");
  const diffPctEasy = document.getElementById("diffPctEasy");
  const diffPctMid = document.getElementById("diffPctMid");
  const diffPctHard = document.getElementById("diffPctHard");
  const sylSlider = document.getElementById("sylSlider");
  const sylTrack = sylSlider.querySelector(".diff-slider-track");
  const sylSliderFill = document.getElementById("sylSliderFill");
  const sylHandleMin = document.getElementById("sylHandleMin");
  const sylHandleMax = document.getElementById("sylHandleMax");
  const sylRangeValue = document.getElementById("sylRangeValue");
  const sensitiveModePills = document.querySelectorAll(".sensitive-mode-pill");
  const simpleRhymePracticeBtn = document.getElementById("simpleRhymePracticeBtn");
  const practiceContent = document.getElementById("practiceContent");
  const themeSwatches = document.querySelectorAll(".theme-swatch");

  // Heuristic syllable counter (vowel-group count, with a naive silent-e
  // correction). Not phonetically exact, but the built-in pronunciation data
  // (js/cmu-decoder.js and the per-language *-rhyme.js decoders) only encodes
  // each word's rhyming tail, not its full syllable structure, so this is
  // what backs the "max syllables" slider across all six languages.
  function countSyllables(word) {
    const w = word.toLowerCase().replace(/[^a-z]/g, "");
    if (!w) return 0;
    const groups = w.match(/[aeiouy]+/g) || [];
    let count = groups.length || 1;
    if (count > 1 && /[^aeiouy]e$/.test(w)) count--;
    return count;
  }

  // Rhyme-tail boundary, reusing the same vowel-group idea as
  // countSyllables: the start of the LAST vowel cluster in the word — the
  // same vowel+coda shape the CMU-based rhyme key uses (js/cmu-decoder.js),
  // just derived from spelling instead of a pronunciation dictionary so it
  // works the same way for every language.
  function lastVowelGroupStart(word) {
    const re = /[aeiouy]+/gi;
    let m, start = -1;
    while ((m = re.exec(word))) start = m.index;
    return start;
  }
  // Only word B (the "answer") ever gets masked — word A stays fully
  // visible as the prompt. Every mode here is "like Single words" (no real
  // content leaked) plus exactly one bare unit of hint — never a string of
  // placeholder dots padded out to the word's real length, which would
  // leak the length itself. 'pairs' and 'words' pass the word through
  // unchanged: 'words' hides the whole slot via CSS instead (see
  // updateRevealModeUI), so what's rendered underneath doesn't matter.
  function maskedDisplay(word, part) {
    if (part !== "b") return word;
    if (revealMode === "syllable") return "•"; // a single mark, no letters, no length hint
    if (revealMode === "letter") return word.slice(0, 1); // just the first letter, nothing else
    if (revealMode === "family") {
      const start = lastVowelGroupStart(word);
      return start >= 0 ? word.slice(start) : word; // just the rhyming tail, nothing else
    }
    return word;
  }

  const sensitiveWordSets = Object.fromEntries(
    Object.entries(typeof SENSITIVE_WORDS !== "undefined" ? SENSITIVE_WORDS : {})
      .map(([lang, words]) => [lang, new Set(words)])
  );

  // Applies the syllable range and (in "on" mode) the sensitive-words
  // exclusion to a raw word pool. Called on each tier/CSV pool before
  // sampling (rather than on the final generated pairs) so proportions from
  // the difficulty slider still hold, and so a pair never gets built around
  // a word that's about to be filtered out anyway.
  // "only" mode is deliberately NOT handled here — see generateSensitiveOnlyPairs.
  function filterPool(pool) {
    let out = pool;
    if (minSyllables > 1) {
      out = out.filter((w) => countSyllables(w) >= minSyllables);
    }
    if (maxSyllables < SYLLABLE_SLIDER_MAX) {
      out = out.filter((w) => countSyllables(w) <= maxSyllables);
    }
    if (sensitiveWordMode === "on") {
      const blocked = sensitiveWordSets[currentLanguage];
      if (blocked && blocked.size) out = out.filter((w) => !blocked.has(w));
    }
    return out;
  }

  // The built-in sensitive words for the current language, in scope of the
  // syllable range but NOT of the difficulty-mix sampling (see
  // generateSensitiveOnlyPairs) — they're rare enough that leaving them to
  // the weighted random sample could drop them from the pool entirely on a
  // given generate() call, defeating "only" mode.
  function sensitiveWordsInScope() {
    const blocked = sensitiveWordSets[currentLanguage];
    if (!blocked || !blocked.size) return [];
    let out = builtInWords.filter((w) => blocked.has(w));
    if (minSyllables > 1) out = out.filter((w) => countSyllables(w) >= minSyllables);
    if (maxSyllables < SYLLABLE_SLIDER_MAX) out = out.filter((w) => countSyllables(w) <= maxSyllables);
    return out;
  }

  // "Only" mode should mean "at least one side of the pair is sensitive,"
  // not "both sides are" — pairing against a pool restricted to sensitive
  // words only (the old behavior) forced both sides to be sensitive, since
  // pairs can only be built from words present in the pool. Instead this
  // pairs the sensitive words against the full normal pool, generates every
  // pair the combined pool can support (not just `selectedCount` of them —
  // sensitive words are rare, so a smaller ask could exhaust before finding
  // enough of them), then keeps only the pairs that touch a sensitive word.
  function generateSensitiveOnlyPairs(types, getKey) {
    const blocked = sensitiveWordSets[currentLanguage];
    const sensitiveWords = sensitiveWordsInScope();
    if (!blocked || sensitiveWords.length === 0) return [];
    const pool = activeWordList().concat(sensitiveWords);
    const abundant = generatePairs(pool, Number.MAX_SAFE_INTEGER, types, getKey);
    return abundant
      .filter((p) => blocked.has(p.a) || blocked.has(p.b))
      .slice(0, selectedCount)
      // The sensitive word always ends up in slot "a": every reveal mode
      // only ever masks or hides slot "b" (maskedDisplay, and the
      // .single-words CSS rule), so this is what makes "Single words" (and
      // every partial-reveal mode) show the profanity word rather than risk
      // masking it while showing the ordinary word in the clear.
      .map((p) => (blocked.has(p.a) ? p : { a: p.b, b: p.a, type: p.type, sound: p.sound }));
  }

  function sampleWithRepeats(pool, n) {
    if (n <= 0 || pool.length === 0) return [];
    if (n <= pool.length) return shuffle(pool).slice(0, n);
    const out = shuffle(pool);
    while (out.length < n) out.push(pool[Math.floor(Math.random() * pool.length)]);
    return out;
  }

  // Builds a pool sized like the full built-in library, but drawn from each
  // difficulty tier in proportion to the slider split. Feeding this into the
  // existing rhyme indexer (rather than filtering pairs after the fact) lets
  // easy/intermediate/complex words still rhyme-pair across tiers.
  function ratioWeightedBuiltIn() {
    const [p1, p2] = diffSplit;
    const fractions = { easy: p1 / 100, intermediate: (p2 - p1) / 100, complex: (100 - p2) / 100 };
    const target = builtInWords.length;
    let out = [];
    for (const tier of ["easy", "intermediate", "complex"]) {
      const pool = filterPool(wordsByTier[tier]);
      out = out.concat(sampleWithRepeats(pool, Math.round(target * fractions[tier])));
    }
    return out;
  }

  function activeWordList() {
    if (libraryMode === "only") return filterPool(csvWords);
    const weighted = ratioWeightedBuiltIn();
    if (libraryMode === "add") return weighted.concat(filterPool(csvWords));
    return weighted;
  }

  function setCountPillsUI() {
    countPills.forEach((btn) => {
      const isMatch = !customCountActive && Number(btn.dataset.count) === selectedCount;
      btn.classList.toggle("active", isMatch);
    });
  }

  countPills.forEach((btn) => {
    btn.addEventListener("click", () => {
      selectedCount = Number(btn.dataset.count);
      customCountActive = false;
      customCountInput.value = "";
      setCountPillsUI();
      saveSettings();
    });
  });

  customCountInput.addEventListener("input", () => {
    const v = parseInt(customCountInput.value, 10);
    if (v > 0) {
      selectedCount = v;
      customCountActive = true;
      setCountPillsUI();
      saveSettings();
    }
  });

  function setLangPillsUI() {
    langPills.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === currentLanguage);
    });
    wordListLabel.textContent = LANG_META[currentLanguage].wordListLabel;
  }

  langPills.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      if (lang === currentLanguage) return;
      currentLanguage = lang;
      builtInWords = LANGS[currentLanguage].words;
      wordsByTier = LANGS[currentLanguage].byTier;
      // Each language keeps its own difficulty-mix slider position — their
      // tier sizes aren't comparable (see naturalSplit above), so a mix
      // that's meaningful in one language isn't in the other.
      diffSplit = diffSplitByLang[currentLanguage];
      // A CSV uploaded for one language won't have rhyme keys in another
      // (only English has a rule-based fallback for out-of-vocabulary
      // words), so drop it rather than silently producing a thinned-out or
      // empty word list.
      libraryMode = "builtin";
      csvWords = [];
      csvInput.value = "";
      csvStatus.textContent = `Using the built-in ${LANG_META[currentLanguage].builtInCount}-word library.`;
      setLangPillsUI();
      renderDiffUI();
      saveSettings();
      generate();
    });
  });

  function setTypePillsUI() {
    typePills.forEach((btn) => {
      btn.classList.toggle("active", activeTypes.has(btn.dataset.type));
    });
  }

  typePills.forEach((btn) => {
    btn.addEventListener("click", () => {
      const t = btn.dataset.type;
      if (activeTypes.has(t)) {
        if (activeTypes.size > 1) activeTypes.delete(t); // keep at least one active
      } else {
        activeTypes.add(t);
      }
      setTypePillsUI();
    });
  });

  function clamp(v, lo, hi) { return Math.min(hi, Math.max(lo, v)); }

  function renderDiffUI() {
    const [p1, p2] = diffSplit;
    diffSegEasy.style.width = p1 + "%";
    diffSegMid.style.width = (p2 - p1) + "%";
    diffSegHard.style.width = (100 - p2) + "%";
    diffHandle1.style.left = p1 + "%";
    diffHandle2.style.left = p2 + "%";
    diffHandle1.setAttribute("aria-valuenow", String(p1));
    diffHandle2.setAttribute("aria-valuenow", String(p2));
    diffPctEasy.textContent = p1 + "%";
    diffPctMid.textContent = (p2 - p1) + "%";
    diffPctHard.textContent = (100 - p2) + "%";
  }

  function diffPercentFromEvent(evt) {
    const rect = diffTrack.getBoundingClientRect();
    const x = clamp(evt.clientX - rect.left, 0, rect.width);
    return Math.round((x / rect.width) * 100);
  }

  // Shared drag driver: captures the pointer on `captureEl` so pointermove/up
  // keep firing on it for the rest of the gesture no matter where the pointer
  // physically ends up, then applies `initialEvent` immediately as the first
  // move (so a press that starts mid-drag also jumps to that spot).
  function dragHandle(which, initialEvent, captureEl) {
    captureEl.setPointerCapture(initialEvent.pointerId);
    const onMove = (ev) => {
      // Belt-and-suspenders: if the browser ever fails to deliver the
      // matching pointerup/pointercancel (missed release, capture quirk),
      // a plain hover move still reports no button held — treat that as an
      // implicit release instead of dragging forever off a stale gesture.
      if (!(ev.buttons & 1)) { onUp(); return; }
      const v = diffPercentFromEvent(ev);
      if (which === 0) diffSplit[0] = clamp(v, 0, diffSplit[1]);
      else diffSplit[1] = clamp(v, diffSplit[0], 100);
      renderDiffUI();
    };
    const onUp = () => {
      captureEl.removeEventListener("pointermove", onMove);
      captureEl.removeEventListener("pointerup", onUp);
      captureEl.removeEventListener("pointercancel", onUp);
      // Release explicitly rather than relying on the implicit release on
      // pointerup — without this the element can keep intercepting every
      // later pointerdown on the slider (wherever it lands), making the bar
      // seem to drag itself on mere hover long after the mouse was released.
      if (captureEl.hasPointerCapture(initialEvent.pointerId)) {
        captureEl.releasePointerCapture(initialEvent.pointerId);
      }
      saveSettings();
      generate();
    };
    captureEl.addEventListener("pointermove", onMove);
    captureEl.addEventListener("pointerup", onUp);
    captureEl.addEventListener("pointercancel", onUp);
    onMove(initialEvent);
  }

  function bindDiffHandle(handle, which) {
    handle.addEventListener("pointerdown", (e) => {
      dragHandle(which, e, handle);
    });

    handle.addEventListener("keydown", (e) => {
      const step = e.shiftKey ? 10 : 1;
      let delta = 0;
      if (e.key === "ArrowLeft" || e.key === "ArrowDown") delta = -step;
      else if (e.key === "ArrowRight" || e.key === "ArrowUp") delta = step;
      else return;
      e.preventDefault();
      if (which === 0) diffSplit[0] = clamp(diffSplit[0] + delta, 0, diffSplit[1]);
      else diffSplit[1] = clamp(diffSplit[1] + delta, diffSplit[0], 100);
      renderDiffUI();
      saveSettings();
      generate();
    });
  }

  bindDiffHandle(diffHandle1, 0);
  bindDiffHandle(diffHandle2, 1);

  // Pressing/tapping the bare track grabs the nearer handle and drags it,
  // exactly like grabbing the handle directly — not just a one-time jump.
  diffTrack.addEventListener("pointerdown", (e) => {
    const v = diffPercentFromEvent(e);
    const [p1, p2] = diffSplit;
    // Pick by direction first, not just nearest-distance: when both handles
    // sit on the same value (e.g. both dragged to 0), a pure distance tie
    // always "wins" for handle 1, whose range is then clamped to that same
    // single point — freezing the slider. Pressing outside [p1, p2] instead
    // grabs whichever handle the press is actually asking to move.
    let which;
    if (v < p1) which = 0;
    else if (v > p2) which = 1;
    else which = (v - p1) <= (p2 - v) ? 0 : 1;
    dragHandle(which, e, diffTrack);
  });

  // Syllable range slider: same two-handle-on-a-bar interaction as the
  // difficulty-mix slider above (dragHandle/bindDiffHandle), just over 6
  // discrete syllable counts (1..SYLLABLE_SLIDER_MAX) instead of a
  // continuous 0-100 split, so it gets its own value/percent conversions
  // and its own drag driver rather than reusing those directly.
  function syllablePercent(v) {
    return ((v - 1) / (SYLLABLE_SLIDER_MAX - 1)) * 100;
  }
  function syllableValueFromEvent(evt) {
    const rect = sylTrack.getBoundingClientRect();
    const x = clamp(evt.clientX - rect.left, 0, rect.width);
    return clamp(Math.round(1 + (x / rect.width) * (SYLLABLE_SLIDER_MAX - 1)), 1, SYLLABLE_SLIDER_MAX);
  }
  function syllableLabel(v) {
    return v >= SYLLABLE_SLIDER_MAX ? "Any" : String(v);
  }
  function renderSyllableUI() {
    const p1 = syllablePercent(minSyllables);
    const p2 = syllablePercent(maxSyllables);
    sylSliderFill.style.left = p1 + "%";
    sylSliderFill.style.right = (100 - p2) + "%";
    sylHandleMin.style.left = p1 + "%";
    sylHandleMax.style.left = p2 + "%";
    sylHandleMin.setAttribute("aria-valuenow", String(minSyllables));
    sylHandleMax.setAttribute("aria-valuenow", String(maxSyllables));
    if (maxSyllables >= SYLLABLE_SLIDER_MAX) {
      sylRangeValue.textContent = minSyllables <= 1 ? "Any" : `${minSyllables}+`;
    } else if (minSyllables === maxSyllables) {
      sylRangeValue.textContent = String(minSyllables);
    } else {
      sylRangeValue.textContent = `${minSyllables}–${syllableLabel(maxSyllables)}`;
    }
  }

  function dragSylHandle(which, initialEvent, captureEl) {
    captureEl.setPointerCapture(initialEvent.pointerId);
    const onMove = (ev) => {
      if (!(ev.buttons & 1)) { onUp(); return; }
      const v = syllableValueFromEvent(ev);
      if (which === "min") minSyllables = clamp(v, 1, maxSyllables);
      else maxSyllables = clamp(v, minSyllables, SYLLABLE_SLIDER_MAX);
      renderSyllableUI();
    };
    const onUp = () => {
      captureEl.removeEventListener("pointermove", onMove);
      captureEl.removeEventListener("pointerup", onUp);
      captureEl.removeEventListener("pointercancel", onUp);
      if (captureEl.hasPointerCapture(initialEvent.pointerId)) {
        captureEl.releasePointerCapture(initialEvent.pointerId);
      }
      saveSettings();
      generate();
    };
    captureEl.addEventListener("pointermove", onMove);
    captureEl.addEventListener("pointerup", onUp);
    captureEl.addEventListener("pointercancel", onUp);
    onMove(initialEvent);
  }

  function bindSylHandle(handle, which) {
    handle.addEventListener("pointerdown", (e) => {
      dragSylHandle(which, e, handle);
    });
    handle.addEventListener("keydown", (e) => {
      let delta = 0;
      if (e.key === "ArrowLeft" || e.key === "ArrowDown") delta = -1;
      else if (e.key === "ArrowRight" || e.key === "ArrowUp") delta = 1;
      else return;
      e.preventDefault();
      if (which === "min") minSyllables = clamp(minSyllables + delta, 1, maxSyllables);
      else maxSyllables = clamp(maxSyllables + delta, minSyllables, SYLLABLE_SLIDER_MAX);
      renderSyllableUI();
      saveSettings();
      generate();
    });
  }

  bindSylHandle(sylHandleMin, "min");
  bindSylHandle(sylHandleMax, "max");

  sylTrack.addEventListener("pointerdown", (e) => {
    const v = syllableValueFromEvent(e);
    let which;
    if (v < minSyllables) which = "min";
    else if (v > maxSyllables) which = "max";
    else which = (v - minSyllables) <= (maxSyllables - v) ? "min" : "max";
    dragSylHandle(which, e, sylTrack);
  });

  function updateSensitiveModeUI() {
    sensitiveModePills.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.sensitiveMode === sensitiveWordMode);
    });
  }
  sensitiveModePills.forEach((btn) => {
    btn.addEventListener("click", () => {
      sensitiveWordMode = btn.dataset.sensitiveMode;
      updateSensitiveModeUI();
      saveSettings();
      generate();
    });
  });

  // Practices: each practice button reveals its own guidelines-style content
  // block below the button row, accordion-style. Only "Simple Rhyme" exists
  // today, but this stays button-per-practice so more can be added later
  // without restructuring.
  simpleRhymePracticeBtn.addEventListener("click", () => {
    const willOpen = practiceContent.hidden;
    practiceContent.hidden = !willOpen;
    simpleRhymePracticeBtn.classList.toggle("active", willOpen);
    simpleRhymePracticeBtn.setAttribute("aria-expanded", String(willOpen));
  });

  // Color scheme: swaps the CSS custom properties in data/styles.css by
  // setting data-theme on <html>. The inline snippet in <head> applies the
  // saved value before first paint to avoid a flash of the default theme;
  // this is what keeps it in sync afterwards and handles clicks.
  function applyTheme() {
    document.documentElement.setAttribute("data-theme", currentTheme);
    themeSwatches.forEach((btn) => {
      const active = btn.dataset.theme === currentTheme;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", String(active));
    });
  }
  themeSwatches.forEach((btn) => {
    btn.addEventListener("click", () => {
      currentTheme = btn.dataset.theme;
      applyTheme();
      saveSettings();
    });
  });

  function parseCsv(text) {
    return text
      .split(/[,\n\r]+/)
      .map((w) => w.trim().toLowerCase())
      .filter((w) => /^[a-z]+$/.test(w));
  }

  function readCsvFile() {
    return new Promise((resolve, reject) => {
      const file = csvInput.files && csvInput.files[0];
      if (!file) {
        reject(new Error("Choose a CSV file first."));
        return;
      }
      const reader = new FileReader();
      reader.onload = () => resolve(parseCsv(String(reader.result)));
      reader.onerror = () => reject(new Error("Could not read that file."));
      reader.readAsText(file);
    });
  }

  csvAddBtn.addEventListener("click", async () => {
    try {
      const words = await readCsvFile();
      if (words.length === 0) {
        csvStatus.textContent = "No valid words found in that CSV.";
        return;
      }
      csvWords = words;
      libraryMode = "add";
      csvStatus.textContent = `Added ${words.length} word(s) from your CSV to the ${LANG_META[currentLanguage].builtInCount}-word library.`
        + oovCsvWarning(currentLanguage);
      generate();
    } catch (e) {
      csvStatus.textContent = e.message;
    }
  });

  csvOnlyBtn.addEventListener("click", async () => {
    try {
      const words = await readCsvFile();
      if (words.length === 0) {
        csvStatus.textContent = "No valid words found in that CSV.";
        return;
      }
      csvWords = words;
      libraryMode = "only";
      csvStatus.textContent = `Using only your ${words.length} CSV word(s), built-in library disabled.`
        + oovCsvWarning(currentLanguage);
      generate();
    } catch (e) {
      csvStatus.textContent = e.message;
    }
  });

  csvResetBtn.addEventListener("click", () => {
    libraryMode = "builtin";
    csvWords = [];
    csvInput.value = "";
    csvStatus.textContent = `Using the built-in ${LANG_META[currentLanguage].builtInCount}-word library.`;
    generate();
  });

  // Matches parseCsv() above: plain lowercase words (a-z only, no header
  // row), separated by commas and/or line breaks — shown here as both, so
  // the format is obvious without needing separate instructions.
  const CSV_EXAMPLE_CONTENT = "cat,hat,bat,mat,sat,rat\nflow,glow,show,slow\nbright,light,night,sight\n";
  csvExampleBtn.addEventListener("click", () => {
    const blob = new Blob([CSV_EXAMPLE_CONTENT], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "example-word-list.csv";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  });

  function dictionaryUrl(word) {
    const q = encodeURIComponent(word.toLowerCase());
    return `https://www.oxfordlearnersdictionaries.com/definition/english/${q}?q=${q}`;
  }

  // WORDNET_DEFS (data/wordnet-data.js) is a synchronous, offline lookup —
  // no fetch involved, so "Simple Definition" never depends on a network
  // request or a third-party proxy.
  function simpleDefinitionOf(word) {
    return (typeof WORDNET_DEFS !== "undefined" && WORDNET_DEFS[word.toLowerCase()]) || null;
  }

  function renderWord(word, part) {
    const display = maskedDisplay(word, part);
    let inner;
    if (defStyle === "links") {
      inner = `<a class="word" data-pair-part="${part}" href="${dictionaryUrl(word)}" target="_blank" rel="noopener noreferrer">${display}</a>`;
    } else if (defStyle === "full") {
      inner = `<span class="word word-full" data-pair-part="${part}" data-word="${word}">${display}</span>`;
    } else {
      inner = `<span class="word word-simple" data-pair-part="${part}" data-word="${word}">${display}</span>`;
    }
    return `<div class="word-slot" data-pair-part="${part}">${inner}<div class="word-def" hidden></div></div>`;
  }

  function toggleSimpleDefinition(wordEl) {
    const slot = wordEl.closest(".word-slot");
    const defEl = slot.querySelector(".word-def");
    if (!defEl.hidden) {
      defEl.hidden = true;
      return;
    }
    revealSimpleDefinition(wordEl);
  }

  function revealSimpleDefinition(wordEl) {
    const slot = wordEl.closest(".word-slot");
    const defEl = slot.querySelector(".word-def");
    const def = simpleDefinitionOf(wordEl.dataset.word);
    defEl.textContent = def || "No definition found.";
    defEl.hidden = false;
  }

  // Full definition: opens the real Oxford page in an actual popup window
  // (not fetched/embedded — Oxford blocks both cross-origin reads and
  // framing), then closes it on the next keypress. That keypress has to
  // land on this page to be seen — if the popup window itself has focus,
  // its content is a separate origin we have no access to, so we can't
  // observe keystrokes typed there directly.
  let openDefPopup = null;
  function popupKeydownHandler() {
    if (openDefPopup && !openDefPopup.closed) openDefPopup.close();
    openDefPopup = null;
    document.removeEventListener("keydown", popupKeydownHandler);
  }
  function openFullDefinitionPopup(word) {
    if (openDefPopup && !openDefPopup.closed) {
      openDefPopup.close();
      document.removeEventListener("keydown", popupKeydownHandler);
    }
    openDefPopup = window.open(dictionaryUrl(word), "rhymeDefPopup", "width=480,height=640");
    if (!openDefPopup) return; // popup blocked by the browser
    document.addEventListener("keydown", popupKeydownHandler);
  }

  pairsContainer.addEventListener("click", (e) => {
    const simpleWord = e.target.closest(".word-simple");
    if (simpleWord) {
      toggleSimpleDefinition(simpleWord);
      return;
    }
    const fullWord = e.target.closest(".word-full");
    if (fullWord) {
      openFullDefinitionPopup(fullWord.dataset.word);
    }
  });

  function setDefStyleUI() {
    defStylePills.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.defStyle === defStyle);
    });
    showAllDefsRow.hidden = defStyle !== "simple";
  }

  defStylePills.forEach((btn) => {
    btn.addEventListener("click", () => {
      defStyle = btn.dataset.defStyle;
      setDefStyleUI();
      renderPairs(currentPairs, selectedCount);
      saveSettings();
    });
  });

  showAllDefsBtn.addEventListener("click", () => {
    pairsContainer.querySelectorAll(".word-simple").forEach(revealSimpleDefinition);
  });

  function renderPairs(pairs, requested) {
    pairsContainer.innerHTML = "";
    if (pairs.length === 0) {
      pairsContainer.innerHTML = `<div class="empty-state">No rhyme pairs could be made with the current word list and settings. Try enabling more rhyme types, or add more words.</div>`;
      countInfo.textContent = "";
      return;
    }
    pairs.forEach((p, idx) => {
      const card = document.createElement("div");
      card.className = "pair-card";
      card.innerHTML = `
        <div class="pair-idx">${String(idx + 1).padStart(2, "0")}</div>
        <div class="pair-words">
          ${renderWord(p.a, "a")}
          <span class="tie">&harr;</span>
          ${renderWord(p.b, "b")}
        </div>
        <div class="meta">
          <span class="type-chip ${p.type}">${p.type}</span>
        </div>
      `;
      pairsContainer.appendChild(card);
    });
    if (pairs.length < requested) {
      countInfo.textContent = `Showing ${pairs.length} of the ${requested} requested — that's all the word list supports with these settings.`;
    } else {
      countInfo.textContent = `${pairs.length} pairs`;
    }
  }

  function generate(scroll) {
    const types = [...activeTypes];
    const getKey = LANGS[currentLanguage].getKey;
    const pairs = sensitiveWordMode === "only"
      ? generateSensitiveOnlyPairs(types, getKey)
      : generatePairs(activeWordList(), selectedCount, types, getKey);
    currentPairs = pairs;
    renderPairs(pairs, selectedCount);
    if (scroll) scrollToResults();
  }

  function scrollToResults() {
    const target = pairsContainer.firstElementChild || pairsContainer;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  refreshBtnTop.addEventListener("click", () => generate(true));
  refreshBtnBottom.addEventListener("click", () => generate(true));

  // Auto-refresh: regenerates rhymes on a timer so this can run hands-free
  // (e.g. alongside "Hide UI") without needing to tap refresh every time.
  // Deliberately doesn't scroll — a periodic jump would be disruptive
  // exactly when this is most useful, mid-freestyle.
  let autoRefreshTimer = null;

  function clampAutoRefreshSeconds(v) {
    if (!Number.isFinite(v)) return 60;
    return Math.min(3600, Math.max(5, Math.round(v)));
  }

  function updateAutoRefresh() {
    if (autoRefreshTimer) {
      clearInterval(autoRefreshTimer);
      autoRefreshTimer = null;
    }
    if (autoRefreshToggle.checked) {
      autoRefreshTimer = setInterval(() => generate(), autoRefreshSeconds * 1000);
    }
  }

  autoRefreshToggle.addEventListener("change", () => {
    updateAutoRefresh();
    saveSettings();
  });

  autoRefreshSecondsInput.addEventListener("change", () => {
    autoRefreshSeconds = clampAutoRefreshSeconds(parseInt(autoRefreshSecondsInput.value, 10));
    autoRefreshSecondsInput.value = autoRefreshSeconds;
    updateAutoRefresh(); // restart on the new interval so a change takes effect immediately
    saveSettings();
  });

  function updatePlaylistVisibility() {
    playlistPanel.hidden = !playlistToggle.checked;
  }
  function updatePlaylistSource() {
    spotifyEmbed.hidden = playlistSourceSelect.value !== "spotify";
    youtubeEmbed.hidden = playlistSourceSelect.value !== "youtube";
  }
  playlistToggle.addEventListener("change", () => {
    updatePlaylistVisibility();
    saveSettings();
  });
  playlistSourceSelect.addEventListener("change", () => {
    updatePlaylistSource();
    saveSettings();
  });

  guidelinesDetails.addEventListener("toggle", saveSettings);
  advancedDetails.addEventListener("toggle", saveSettings);

  // Quiz/reveal mode: masks word B (the "answer") in every pair card at one
  // of a few hint strengths so you can try to come up with the rhyme
  // yourself first, then switch back to "Pairs" to check. Not persisted —
  // like Hide UI, you want a fresh reveal state on a new visit.
  //   words    — hide the whole slot (and the tie arrow) via CSS
  //   syllable — reveal word B's first syllable, mask the rest
  //   letter   — reveal just its first letter
  //   family   — reveal its rhyme tail (the vowel+coda it shares with word
  //              A — see maskedDisplay above), mask the leading consonants
  let revealMode = "pairs";
  function updateRevealModeUI() {
    revealModePills.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.revealMode === revealMode);
    });
    pairsContainer.classList.toggle("single-words", revealMode === "words");
  }
  revealModePills.forEach((btn) => {
    btn.addEventListener("click", () => {
      revealMode = btn.dataset.revealMode;
      updateRevealModeUI();
      renderPairs(currentPairs, selectedCount); // re-mask what's already on screen, no new pairs
    });
  });

  // Performance mode: hide every settings panel (and the top action row
  // that lives inside .settings-col) so only the pair cards, the bottom
  // refresh button, and the music player remain — not persisted, since you
  // always want your settings panel back on a fresh visit.
  let uiHidden = false;
  function updateHideUiUI() {
    settingsCol.hidden = uiHidden;
    hideUiBtn.textContent = uiHidden ? "Show UI" : "Hide UI";
  }
  hideUiBtn.addEventListener("click", () => {
    uiHidden = !uiHidden;
    updateHideUiUI();
  });

  // ---- init ----
  guidelinesDetails.open = guidelinesOpen;
  advancedDetails.open = advancedOpen;
  setDefStyleUI();
  updateRevealModeUI();
  playlistToggle.checked = playlistVisible;
  playlistSourceSelect.value = playlistSource;
  updatePlaylistSource();
  if (customCountActive) customCountInput.value = selectedCount;
  autoRefreshToggle.checked = autoRefreshEnabled;
  autoRefreshSecondsInput.value = autoRefreshSeconds;
  setLangPillsUI();
  setCountPillsUI();
  setTypePillsUI();
  renderDiffUI();
  renderSyllableUI();
  updateSensitiveModeUI();
  applyTheme();
  updatePlaylistVisibility();
  updateHideUiUI();
  updateAutoRefresh();
  generate();
})();

