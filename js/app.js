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

  // Word-deletion mode: clicking a word (in place of showing a definition)
  // permanently excludes it from future generate() calls for the language
  // it was clicked in — a word's spelling doesn't carry across languages,
  // so like diffSplitByLang this is kept per-language rather than global.
  const deletedWordSets = {
    en: new Set(), nl: new Set(), de: new Set(), fr: new Set(), es: new Set(), it: new Set(),
  };

  let selectedCount = 20;
  let customCountActive = false;
  let playlistVisible = true;
  let playlistSource = "youtube";
  let guidelinesOpen = true;
  let advancedOpen = false;
  let autoRefreshEnabled = false;
  let autoRefreshSeconds = 60;
  let defStyle = "links"; // 'links' | 'simple' | 'full' | 'delete'
  let activeTypes = new Set(["perfect"]); // near still hidden; slant toggled via #slantToggle below

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

  const TIMER_SOUNDS = ["chime", "bell", "beep"];
  let timerSound = "chime";
  let timerVolume = 0.7; // 0..1, unlike the rest of the timer state this IS persisted — it's a preference, not session state
  let timerMode = "simple"; // 'simple' | 'multi' — also persisted, unlike the live countdown itself (see the timer state block below)
  let timerLoop = false;
  let timerDurationMinutes = [5, 10, 15, 20, 25, 30]; // editable via the Advanced-panel inputs, also persisted
  const TIMER_DURATION_UNITS = ["minutes", "seconds"];
  let timerDurationUnit = "minutes"; // whether the 6 values above mean minutes or seconds; also persisted

  let metronomeBpm = 120; // persisted, like timerVolume — a preference, not session state
  let metronomeVolume = 0.7; // 0..1, persisted the same way as timerVolume

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
    if (["links", "simple", "full", "delete"].includes(stored.defStyle)) {
      defStyle = stored.defStyle;
    }
    if (stored.deletedWordsByLang && typeof stored.deletedWordsByLang === "object") {
      for (const lang of ["en", "nl", "de", "fr", "es", "it"]) {
        const arr = stored.deletedWordsByLang[lang];
        if (Array.isArray(arr)) deletedWordSets[lang] = new Set(arr.filter((w) => typeof w === "string"));
      }
    }
    if (typeof stored.maxSyllables === "number" && stored.maxSyllables >= 1 && stored.maxSyllables <= SYLLABLE_SLIDER_MAX) {
      maxSyllables = stored.maxSyllables;
    }
    if (typeof stored.minSyllables === "number" && stored.minSyllables >= 1 && stored.minSyllables <= maxSyllables) {
      minSyllables = stored.minSyllables;
    }
    if (stored.slantEnabled === true) activeTypes.add("slant");
    if (SENSITIVE_MODES.includes(stored.sensitiveWordMode)) sensitiveWordMode = stored.sensitiveWordMode;
    if (VALID_THEMES.includes(stored.theme)) currentTheme = stored.theme;
    if (TIMER_SOUNDS.includes(stored.timerSound)) timerSound = stored.timerSound;
    if (typeof stored.timerVolume === "number" && stored.timerVolume >= 0 && stored.timerVolume <= 1) {
      timerVolume = stored.timerVolume;
    }
    if (
      Array.isArray(stored.timerDurationMinutes) &&
      stored.timerDurationMinutes.length === 6 &&
      stored.timerDurationMinutes.every((m) => typeof m === "number" && m >= 1 && m <= 180)
    ) {
      timerDurationMinutes = stored.timerDurationMinutes;
    }
    if (TIMER_DURATION_UNITS.includes(stored.timerDurationUnit)) timerDurationUnit = stored.timerDurationUnit;
    if (stored.timerMode === "simple" || stored.timerMode === "multi") timerMode = stored.timerMode;
    if (typeof stored.timerLoop === "boolean") timerLoop = stored.timerLoop;
    if (typeof stored.metronomeBpm === "number" && stored.metronomeBpm >= 40 && stored.metronomeBpm <= 240) {
      metronomeBpm = stored.metronomeBpm;
    }
    if (typeof stored.metronomeVolume === "number" && stored.metronomeVolume >= 0 && stored.metronomeVolume <= 1) {
      metronomeVolume = stored.metronomeVolume;
    }
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
        slantEnabled: activeTypes.has("slant"),
        minSyllables,
        maxSyllables,
        sensitiveWordMode,
        theme: currentTheme,
        timerSound,
        timerVolume,
        timerDurationMinutes,
        timerDurationUnit,
        timerMode,
        timerLoop,
        metronomeBpm,
        metronomeVolume,
        deletedWordsByLang: Object.fromEntries(
          Object.entries(deletedWordSets).map(([lang, set]) => [lang, [...set]])
        ),
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
  const slantToggle = document.getElementById("slantToggle");
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
  const downloadDeletedBtn = document.getElementById("downloadDeletedBtn");
  const clearDeletedBtn = document.getElementById("clearDeletedBtn");
  const deletedStatus = document.getElementById("deletedStatus");
  const resetSettingsBtn = document.getElementById("resetSettingsBtn");
  const resetSettingsStatus = document.getElementById("resetSettingsStatus");
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
  const practicesPanel = document.getElementById("practicesPanel");
  const practicesButtonRow = document.getElementById("practicesButtonRow");
  const themeSwatches = document.querySelectorAll(".theme-swatch");
  const shareWhatsappBtn = document.getElementById("shareWhatsappBtn");
  const shareFacebookBtn = document.getElementById("shareFacebookBtn");
  const shareInstagramBtn = document.getElementById("shareInstagramBtn");
  const shareStatus = document.getElementById("shareStatus");
  const showTimerBtn = document.getElementById("showTimerBtn");
  const timerCloseBtn = document.getElementById("timerCloseBtn");
  const timerPanel = document.getElementById("timerPanel");
  const timerOptionsGroup = document.getElementById("timerOptionsGroup");
  const timerSetup = document.getElementById("timerSetup");
  const timerModePills = document.querySelectorAll(".timer-mode-pill");
  const timerSoundPills = document.querySelectorAll(".timer-sound-pill");
  const timerSoundPreviewBtn = document.getElementById("timerSoundPreviewBtn");
  const timerVolumeSlider = document.getElementById("timerVolumeSlider");
  const timerVolumeValue = document.getElementById("timerVolumeValue");
  const timerDurationBtns = document.querySelectorAll(".timer-duration-btn");
  const timerDurationInputs = document.querySelectorAll(".timer-duration-input");
  const timerDurationUnitPills = document.querySelectorAll(".timer-duration-unit-pill");
  const practiceFlashEl = document.getElementById("practiceFlash");
  const timerSequenceEl = document.getElementById("timerSequence");
  const timerMultiActions = document.getElementById("timerMultiActions");
  const timerReturnBtn = document.getElementById("timerReturnBtn");
  const timerLoopBtn = document.getElementById("timerLoopBtn");
  const timerConfirmBtn = document.getElementById("timerConfirmBtn");
  const timerRunningEl = document.getElementById("timerRunning");
  const timerRunningSequenceEl = document.getElementById("timerRunningSequence");
  const timerCountdownEl = document.getElementById("timerCountdown");
  const showMetronomeBtn = document.getElementById("showMetronomeBtn");
  const metronomeCloseBtn = document.getElementById("metronomeCloseBtn");
  const metronomePanel = document.getElementById("metronomePanel");
  const metronomeBpmSlider = document.getElementById("metronomeBpmSlider");
  const metronomeBpmValue = document.getElementById("metronomeBpmValue");
  const metronomeVolumeSlider = document.getElementById("metronomeVolumeSlider");
  const metronomeVolumeValue = document.getElementById("metronomeVolumeValue");
  const metronomeToggleBtn = document.getElementById("metronomeToggleBtn");
  const metronomeBeatEl = document.getElementById("metronomeBeat");

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

  // Applies the syllable range, word-deletion list, and (in "on" mode) the
  // sensitive-words exclusion to a raw word pool. Called on each tier/CSV
  // pool before sampling (rather than on the final generated pairs) so
  // proportions from the difficulty slider still hold, and so a pair never
  // gets built around a word that's about to be filtered out anyway.
  // "only" mode is deliberately NOT handled here — see generateSensitiveOnlyPairs.
  function filterPool(pool) {
    let out = pool;
    if (minSyllables > 1) {
      out = out.filter((w) => countSyllables(w) >= minSyllables);
    }
    if (maxSyllables < SYLLABLE_SLIDER_MAX) {
      out = out.filter((w) => countSyllables(w) <= maxSyllables);
    }
    const deleted = deletedWordSets[currentLanguage];
    if (deleted && deleted.size) out = out.filter((w) => !deleted.has(w));
    if (sensitiveWordMode === "on") {
      const blocked = sensitiveWordSets[currentLanguage];
      if (blocked && blocked.size) out = out.filter((w) => !blocked.has(w));
    }
    return out;
  }

  // The built-in sensitive words for the current language, in scope of the
  // syllable range and deletion list but NOT of the difficulty-mix sampling
  // (see generateSensitiveOnlyPairs) — they're rare enough that leaving
  // them to the weighted random sample could drop them from the pool
  // entirely on a given generate() call, defeating "only" mode.
  function sensitiveWordsInScope() {
    const blocked = sensitiveWordSets[currentLanguage];
    if (!blocked || !blocked.size) return [];
    let out = builtInWords.filter((w) => blocked.has(w));
    if (minSyllables > 1) out = out.filter((w) => countSyllables(w) >= minSyllables);
    if (maxSyllables < SYLLABLE_SLIDER_MAX) out = out.filter((w) => countSyllables(w) <= maxSyllables);
    const deleted = deletedWordSets[currentLanguage];
    if (deleted && deleted.size) out = out.filter((w) => !deleted.has(w));
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
      updateDeletedStatus();
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

  slantToggle.addEventListener("change", () => {
    if (slantToggle.checked) activeTypes.add("slant");
    else activeTypes.delete("slant");
    setTypePillsUI(); // keep the hidden type-pill row's state in sync too
    saveSettings();
    generate();
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

  // Practices: loaded from data/practices.md — fetched (not <script src>'d
  // like every other data file) specifically so it's a plain markdown file
  // editable by hand, see that file for the format. Each "# Heading" becomes
  // a button that reveals its own guidelines-style content block,
  // accordion-style, exactly like the old hardcoded "Simple Rhyme" did.
  function escapeHtml(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function inlineBold(s) {
    return s.replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");
  }
  function slugifyPracticeTitle(title) {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "practice";
  }

  // Numbered lines become top-level steps; an indented "- " line becomes a
  // sub-point nested under the step above it (mirrors the old hand-written
  // <ol><li>...<ul class="guidelines-levels">...</ul></li></ol> markup).
  function renderPracticeBodyHtml(bodyLines) {
    const items = [];
    for (const line of bodyLines) {
      if (!line.trim()) continue;
      const top = line.match(/^\d+\.\s+(.*)$/);
      if (top) {
        items.push({ text: top[1].trim(), subItems: [] });
        continue;
      }
      const sub = line.match(/^\s+-\s+(.*)$/);
      if (sub && items.length) items[items.length - 1].subItems.push(sub[1].trim());
    }
    const li = items.map((item) => {
      const subHtml = item.subItems.length
        ? `<ul class="guidelines-levels">${item.subItems.map((s) => `<li>${inlineBold(escapeHtml(s))}</li>`).join("")}</ul>`
        : "";
      return `<li>${inlineBold(escapeHtml(item.text))}${subHtml}</li>`;
    }).join("");
    return `<ol>${li}</ol>`;
  }

  // Everything before the first "# Heading" (the how-this-file-works notes
  // at the top of practices.md) is deliberately ignored here, not rendered.
  function parsePracticesMarkdown(text) {
    const practices = [];
    let current = null;
    for (const rawLine of text.split("\n")) {
      const heading = rawLine.match(/^#\s+(.+?)\s*$/);
      if (heading) {
        current = { title: heading[1].trim(), bodyLines: [] };
        practices.push(current);
        continue;
      }
      if (current) current.bodyLines.push(rawLine);
    }
    return practices.map((p) => ({
      id: slugifyPracticeTitle(p.title),
      title: p.title,
      html: renderPracticeBodyHtml(p.bodyLines),
    }));
  }

  function renderPractices(practices) {
    if (practices.length === 0) return;
    practices.forEach(({ id, title, html }) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "pill practice-pill";
      btn.dataset.practice = id;
      btn.setAttribute("aria-expanded", "false");
      btn.textContent = title;
      practicesButtonRow.appendChild(btn);

      const content = document.createElement("div");
      content.className = "collapsible-body guidelines-body practice-content";
      content.dataset.practice = id;
      content.hidden = true;
      content.innerHTML = html;
      practicesPanel.appendChild(content);

      btn.addEventListener("click", () => {
        const willOpen = content.hidden;
        content.hidden = !willOpen;
        btn.classList.toggle("active", willOpen);
        btn.setAttribute("aria-expanded", String(willOpen));
      });
    });
    practicesPanel.hidden = false;
  }

  // A snapshot of data/practices.md, used only if the fetch below fails —
  // chiefly when the page is opened straight from disk via file:// instead
  // of through a server, where a fetch of a local file is blocked by CORS
  // (every other data file in this app sidesteps that by loading via
  // <script src>, which isn't subject to the same restriction; Practices is
  // the one exception, specifically so the file stays plain, fetchable
  // markdown rather than JS, for editing — see data/practices.md). This
  // fallback won't reflect edits made to that file after being updated
  // here, but it's better than the whole panel silently vanishing.
  const DEFAULT_PRACTICES_MD = `
# Simple Rhyme

1. Say the word shown on count 4. On count 8, come up with your own rhyme.
   - **Level 2:** Think of 2 words and choose the second one.
2. If you can't think of any, say a nonsense rhyme and go back to it after the practice has ended.

# Single Word

1. Practice level 1, 2 or 3 with single words.
   - **Level 2:** Invert. Say your own rhyme first.
2. Investigate where you get stuck and focus on one specific area at a time.

# General Practice Tips

1. Actively make a choice on the level of privacy. Window open? Closed? At home or in the park? Would I like to rent a studio?
   - Others being able to hear us while we practice significantly affects our learning process. We can engage with this part of the process, but it's better when it's done as a conscious choice. Otherwise subconscious anxiety might be negatively influencing your practice and might even cause you to stop practicing entirely!
2. Are you judging yourself? Do you allow yourself to feel and accept these judgements? Once accepted, they become easier to deal with.
   - I found myself judging myself for using English words while freestyling in Dutch. I found the judgement, took a minute to feel it. And then decided I actually didn't mind the occasional English word showing up in my practice.
3. If you find yourself doing other things while practicing, see if you can still practice without doing those things.
   - Writing them on a to-do list might help.
`;
  fetch("data/practices.md")
    .then((res) => (res.ok ? res.text() : Promise.reject(new Error("practices.md not found"))))
    .then((text) => renderPractices(parsePracticesMarkdown(text)))
    .catch(() => renderPractices(parsePracticesMarkdown(DEFAULT_PRACTICES_MD)));

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

  // Share this link with friends. WhatsApp and Facebook both have simple
  // web share intents that just take the URL/text directly. Instagram has
  // no equivalent for arbitrary links, so instead we copy the link to the
  // clipboard and send the user to Instagram to paste it themselves
  // (bio, story, or DM) — window.open is called synchronously in the click
  // handler (before the async clipboard write resolves) so it isn't
  // treated as a popup and blocked.
  let shareStatusTimeout = null;
  function showShareStatus(msg) {
    shareStatus.textContent = msg;
    clearTimeout(shareStatusTimeout);
    shareStatusTimeout = setTimeout(() => { shareStatus.textContent = ""; }, 5000);
  }
  shareWhatsappBtn.addEventListener("click", () => {
    const text = `Check out RhymeFlow — rhyme pairs to freestyle to: ${location.href}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  });
  shareFacebookBtn.addEventListener("click", () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(location.href)}`, "_blank", "noopener,noreferrer");
  });
  shareInstagramBtn.addEventListener("click", () => {
    window.open("https://www.instagram.com/", "_blank", "noopener,noreferrer");
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(location.href)
        .then(() => showShareStatus("Link copied — Instagram doesn't support sharing links directly, so paste it into your bio, story, or a DM."))
        .catch(() => showShareStatus("Couldn't copy the link automatically — copy it from your address bar to share it on Instagram."));
    } else {
      showShareStatus("Copy the link from your address bar to share it on Instagram — direct link sharing isn't supported there.");
    }
  });

  // Practice timer — a fixed top-left overlay (see the CSS comment on
  // .timer-panel), on top of everything else including "Hide UI". timerMode,
  // timerLoop, timerDurationMinutes and timerDurationUnit are declared up
  // near timerSound/timerVolume and persisted the same way — they're
  // preferences. The rest here is deliberately NOT persisted: like Hide UI
  // and reveal mode, you want a clean slate on a fresh visit rather than
  // resuming mid-countdown or with a stale queue. Durations are in whatever
  // timerDurationUnit says (what the 6 buttons offer and what a built
  // sequence is made of); the countdown itself still ticks in seconds
  // internally so it can show MM:SS.
  let timerVisible = false;
  let timerQueuedMinutes = []; // being built in multi mode, pre-Confirm
  let timerRunningNow = false;
  let timerIntervalId = null;
  let timerActiveQueue = [];
  let timerQueueIndex = 0;
  let timerRemainingSeconds = 0;

  function updateShowTimerBtnUI() {
    timerPanel.hidden = !timerVisible;
    timerOptionsGroup.hidden = !timerVisible;
    showTimerBtn.textContent = timerVisible ? "Hide timer" : "Show timer";
    // On narrow screens the timer becomes a bottom sheet (see the mobile
    // media query in styles.css) — this reserves room below the pairs so it
    // doesn't sit on top of the last one.
    document.body.classList.toggle("timer-open", timerVisible);
  }
  showTimerBtn.addEventListener("click", () => {
    primeTimerAudio(); // first real click in the timer UI — best chance to unlock audio on mobile
    timerVisible = !timerVisible;
    updateShowTimerBtnUI();
  });
  // The panel's own ✕ only ever appears while the panel is visible, so
  // delegating to showTimerBtn's click (rather than duplicating its body)
  // always lands on the hide branch of its toggle.
  timerCloseBtn.addEventListener("click", () => showTimerBtn.click());

  function updateTimerModeUI() {
    timerModePills.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.timerMode === timerMode);
    });
    const isMulti = timerMode === "multi";
    timerSequenceEl.hidden = !isMulti;
    timerMultiActions.hidden = !isMulti;
    renderTimerSquares(timerSequenceEl, timerQueuedMinutes, -1);
  }
  timerModePills.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (timerRunningNow) return; // don't let a mode switch pull the rug out mid-countdown
      timerMode = btn.dataset.timerMode;
      timerQueuedMinutes = []; // switching modes starts the sequence builder over
      updateTimerModeUI();
      saveSettings();
    });
  });

  // "m" or "s" depending on timerDurationUnit — shared by the duration
  // buttons/inputs and the sequence squares so they always agree.
  function timerUnitSuffix() {
    return timerDurationUnit === "seconds" ? "s" : "m";
  }

  // Renders a row of duration squares — reused for both the multi-mode
  // sequence builder (activeIndex -1, nothing marked done) and the running
  // view (the in-progress item highlighted, earlier ones dimmed as done).
  function renderTimerSquares(container, minutes, activeIndex) {
    const suffix = timerUnitSuffix();
    container.innerHTML = minutes.map((m, i) => {
      const cls = i === activeIndex ? "active" : i < activeIndex ? "done" : "";
      return `<div class="timer-square ${cls}">${m}${suffix}</div>`;
    }).join("");
  }

  // Keeps the 6 duration buttons' labels/data-minutes and the matching
  // Advanced-panel number inputs in sync with timerDurationMinutes, whether
  // it just changed via an input or was restored from localStorage. The
  // buttons' values are always in timerDurationUnit — minutes or seconds —
  // and startCurrentTimerItem is what actually converts them to seconds.
  function applyTimerDurations() {
    const suffix = timerUnitSuffix();
    timerDurationBtns.forEach((btn, i) => {
      const m = timerDurationMinutes[i];
      btn.dataset.minutes = m;
      btn.textContent = `${m}${suffix}`;
    });
    timerDurationInputs.forEach((input, i) => {
      input.value = timerDurationMinutes[i];
    });
  }
  timerDurationInputs.forEach((input, i) => {
    input.addEventListener("change", () => {
      const parsed = parseInt(input.value, 10);
      const clamped = Number.isFinite(parsed) ? Math.min(180, Math.max(1, parsed)) : timerDurationMinutes[i];
      timerDurationMinutes[i] = clamped;
      applyTimerDurations();
      saveSettings();
    });
    input.addEventListener("focus", () => input.select());
  });

  function updateTimerDurationUnitUI() {
    timerDurationUnitPills.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.timerDurationUnit === timerDurationUnit);
    });
    applyTimerDurations();
    // Re-label any squares already on screen (a queued multi-mode sequence,
    // or the running view) so they stay in sync instead of showing a stale unit.
    renderTimerSquares(timerSequenceEl, timerQueuedMinutes, -1);
    if (timerMode === "multi" && timerRunningNow) {
      renderTimerSquares(timerRunningSequenceEl, timerActiveQueue, timerQueueIndex);
    }
  }
  timerDurationUnitPills.forEach((btn) => {
    btn.addEventListener("click", () => {
      timerDurationUnit = btn.dataset.timerDurationUnit;
      updateTimerDurationUnitUI();
      saveSettings();
    });
  });

  function formatMinSec(totalSeconds) {
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    return `${m}:${String(s).padStart(2, "0")}`;
  }

  // Three deliberately different-sounding endings via Web Audio rather than
  // audio files — keeps the timer fully self-contained/offline like the
  // rest of the app (see simpleDefinitionOf's WORDNET_DEFS comment for the
  // same reasoning). Each is built from plain oscillator+gain "notes"; peak
  // gain is scaled by timerVolume (0..1) so the volume slider actually
  // affects loudness rather than just clipping.
  // A single AudioContext, created (or resumed) lazily the first time any
  // timer control is touched — and reused for every sound after that,
  // including the one triggered from setInterval when a countdown hits
  // zero. Mobile browsers only allow *creating/resuming* an AudioContext
  // synchronously inside a real user-gesture handler (a click); a fresh
  // `new AudioContext()` made later from a timer callback — which is what
  // the old code did on every play — gets silently blocked on phones even
  // though desktop Chrome tolerates it once the page has seen any click.
  // Reusing an already-running context sidesteps that: only the context's
  // *creation* needs a gesture, not each sound scheduled on it afterwards.
  let sharedAudioCtx = null;
  function primeTimerAudio() {
    try {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return;
      if (!sharedAudioCtx) sharedAudioCtx = new Ctx();
      if (sharedAudioCtx.state === "suspended") sharedAudioCtx.resume().catch(() => {});
    } catch (e) {
      // Web Audio unavailable — playTimerSound's own try/catch covers playback
    }
  }

  function playTimerSound() {
    try {
      const ctx = sharedAudioCtx;
      if (!ctx) return; // never primed by a gesture (e.g. Web Audio blocked) — skip silently
      const now = ctx.currentTime;
      const note = (freq, start, attack, decay, peak, type) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = type || "sine";
        osc.frequency.value = freq;
        const t0 = now + start;
        gain.gain.setValueAtTime(0, t0);
        gain.gain.linearRampToValueAtTime(peak * timerVolume, t0 + attack);
        gain.gain.exponentialRampToValueAtTime(0.0001, t0 + attack + decay);
        osc.connect(gain).connect(ctx.destination);
        osc.start(t0);
        osc.stop(t0 + attack + decay + 0.05);
      };
      if (timerSound === "bell") {
        // A single resonant tone (fundamental + two quiet overtones) with a
        // long decay — sustained and warm, not bright/percussive.
        note(523, 0, 0.01, 1.8, 0.32);
        note(1046, 0, 0.01, 1.4, 0.14);
        note(1568, 0, 0.01, 1.0, 0.08);
      } else if (timerSound === "beep") {
        // Three flat, punchy square-wave beeps — digital/alarm-clock, the
        // most utilitarian and attention-grabbing of the three.
        note(660, 0, 0.005, 0.25, 0.22, "square");
        note(660, 0.45, 0.005, 0.25, 0.22, "square");
        note(660, 0.9, 0.005, 0.25, 0.22, "square");
      } else {
        // "chime" (default): two bright ascending sine notes.
        note(880, 0, 0.05, 0.9, 0.3);
        note(1320, 0.35, 0.05, 0.9, 0.3);
      }
    } catch (e) {
      // Web Audio unavailable/blocked — the visual countdown already shows completion
    }
  }

  function updateTimerSoundUI() {
    timerSoundPills.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.timerSound === timerSound);
    });
  }
  timerSoundPills.forEach((btn) => {
    btn.addEventListener("click", () => {
      primeTimerAudio();
      timerSound = btn.dataset.timerSound;
      updateTimerSoundUI();
      saveSettings();
      playTimerSound(); // instant feedback so picking between the 3 is actually usable
    });
  });
  timerSoundPreviewBtn.addEventListener("click", () => {
    primeTimerAudio();
    playTimerSound();
  });

  function updateTimerVolumeUI() {
    const pct = Math.round(timerVolume * 100);
    timerVolumeSlider.value = String(pct);
    timerVolumeValue.textContent = `${pct}%`;
  }
  timerVolumeSlider.addEventListener("input", () => {
    timerVolume = clamp(parseInt(timerVolumeSlider.value, 10), 0, 100) / 100;
    updateTimerVolumeUI();
  });
  timerVolumeSlider.addEventListener("change", () => {
    primeTimerAudio();
    saveSettings();
    playTimerSound(); // hear the level you landed on
  });

  function stopTimerInterval() {
    if (timerIntervalId) {
      clearInterval(timerIntervalId);
      timerIntervalId = null;
    }
  }

  // Returns to the setup UI (mode pills + the 6 duration buttons, and in
  // multi mode the sequence builder) without clearing timerQueuedMinutes, so
  // a manual stop or a finished non-looping run can just be re-Confirmed to
  // replay it.
  function returnToTimerPicker() {
    stopTimerInterval();
    timerRunningNow = false;
    timerRunningEl.hidden = true;
    timerSetup.hidden = false;
  }

  function tickTimer() {
    timerRemainingSeconds--;
    if (timerRemainingSeconds > 0) {
      timerCountdownEl.textContent = formatMinSec(timerRemainingSeconds);
      return;
    }
    stopTimerInterval();
    playTimerSound();
    timerQueueIndex++;
    if (timerQueueIndex >= timerActiveQueue.length) {
      if (timerLoop) {
        timerQueueIndex = 0;
      } else {
        returnToTimerPicker();
        return;
      }
    }
    startCurrentTimerItem();
  }

  function startCurrentTimerItem() {
    timerRemainingSeconds = timerActiveQueue[timerQueueIndex] * (timerDurationUnit === "seconds" ? 1 : 60);
    timerCountdownEl.textContent = formatMinSec(timerRemainingSeconds);
    // Simple mode is just one bare countdown — no sequence, so no point
    // showing a single square for it.
    if (timerMode === "multi") renderTimerSquares(timerRunningSequenceEl, timerActiveQueue, timerQueueIndex);
    timerIntervalId = setInterval(tickTimer, 1000);
  }

  // 7 alternate entrance/motion animations (see the matching flash-*
  // keyframes in styles.css), one picked at random per flash so the
  // wordart doesn't roll in the same way every time a timer starts.
  const PRACTICE_FLASH_ROLLINS = ["glow", "slide", "flicker", "wipe", "glitch", "zoom", "flip"];
  // 7 alternate visual looks (see the matching .style-* rules in
  // styles.css) — a second, independent axis from the rollin above, so the
  // two combine for up to 49 distinct flashes. These only ever touch CSS
  // properties the rollin keyframes don't animate (background, border,
  // font, text-stroke, decoration, ...), never opacity/transform/color/
  // text-shadow/filter/clip-path, so the two layers can't fight over the
  // same property mid-animation.
  const PRACTICE_FLASH_STYLES = ["outline", "mono", "card", "underline", "italic", "wide", "neon"];
  // Retriggerable via the classList remove/reflow/add dance since the CSS
  // animation's "forwards" fill would otherwise leave it stuck invisible
  // (not "not yet started") on a second call.
  function flashPracticeWordart() {
    practiceFlashEl.classList.remove(
      "show",
      ...PRACTICE_FLASH_ROLLINS.map((s) => `flash-${s}`),
      ...PRACTICE_FLASH_STYLES.map((s) => `style-${s}`)
    );
    void practiceFlashEl.offsetWidth;
    const rollin = PRACTICE_FLASH_ROLLINS[Math.floor(Math.random() * PRACTICE_FLASH_ROLLINS.length)];
    const style = PRACTICE_FLASH_STYLES[Math.floor(Math.random() * PRACTICE_FLASH_STYLES.length)];
    practiceFlashEl.classList.add("show", `flash-${rollin}`, `style-${style}`);
  }

  function startTimerQueue(queue) {
    if (queue.length === 0) return;
    flashPracticeWordart();
    timerActiveQueue = queue;
    timerQueueIndex = 0;
    timerRunningNow = true;
    timerSetup.hidden = true;
    timerRunningEl.hidden = false;
    timerRunningSequenceEl.hidden = timerMode !== "multi";
    if (timerMode !== "multi") timerRunningSequenceEl.innerHTML = ""; // clear any squares left from a prior multi-mode run
    startCurrentTimerItem();
  }

  timerDurationBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      primeTimerAudio();
      const minutes = Number(btn.dataset.minutes);
      if (timerMode === "simple") {
        startTimerQueue([minutes]);
      } else {
        timerQueuedMinutes.push(minutes);
        renderTimerSquares(timerSequenceEl, timerQueuedMinutes, -1);
      }
    });
  });

  timerReturnBtn.addEventListener("click", () => {
    timerQueuedMinutes.pop();
    renderTimerSquares(timerSequenceEl, timerQueuedMinutes, -1);
  });

  timerLoopBtn.addEventListener("click", () => {
    timerLoop = !timerLoop;
    timerLoopBtn.classList.toggle("active", timerLoop);
    saveSettings();
  });

  timerConfirmBtn.addEventListener("click", () => {
    primeTimerAudio();
    startTimerQueue([...timerQueuedMinutes]);
  });

  // The countdown number is itself the stop control — no separate button.
  timerCountdownEl.addEventListener("click", returnToTimerPicker);

  // Practice metronome — a fixed top-bar overlay (see the CSS comment on
  // .metronome-panel), independent of the timer so both can run together.
  // metronomeBpm is declared up near timerVolume and persisted the same
  // way; whether it's currently playing is deliberately NOT persisted, same
  // reasoning as timerRunningNow — a fresh visit shouldn't resume mid-tick.
  let metronomeVisible = false;
  let metronomeRunning = false;
  let metronomeIntervalId = null;

  function updateShowMetronomeBtnUI() {
    metronomePanel.hidden = !metronomeVisible;
    showMetronomeBtn.textContent = metronomeVisible ? "Hide metronome" : "Show metronome";
    document.body.classList.toggle("metronome-open", metronomeVisible);
  }
  showMetronomeBtn.addEventListener("click", () => {
    primeTimerAudio(); // shared with the timer — see primeTimerAudio's comment on why this needs a real click
    metronomeVisible = !metronomeVisible;
    if (!metronomeVisible && metronomeRunning) {
      stopMetronome();
    }
    updateShowMetronomeBtnUI();
  });
  // Same delegation reasoning as timerCloseBtn above.
  metronomeCloseBtn.addEventListener("click", () => showMetronomeBtn.click());

  function updateMetronomeBpmUI() {
    metronomeBpmSlider.value = String(metronomeBpm);
    metronomeBpmValue.textContent = `${metronomeBpm} BPM`;
  }

  function updateMetronomeVolumeUI() {
    const pct = Math.round(metronomeVolume * 100);
    metronomeVolumeSlider.value = String(pct);
    metronomeVolumeValue.textContent = `${pct}%`;
  }
  metronomeVolumeSlider.addEventListener("input", () => {
    metronomeVolume = clamp(parseInt(metronomeVolumeSlider.value, 10), 0, 100) / 100;
    updateMetronomeVolumeUI();
  });
  metronomeVolumeSlider.addEventListener("change", saveSettings);

  // A short, plain click — reuses sharedAudioCtx (see primeTimerAudio/
  // playTimerSound above) rather than spinning up a second AudioContext.
  function playMetronomeTick() {
    try {
      const ctx = sharedAudioCtx;
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "square";
      osc.frequency.value = 1000;
      const t0 = ctx.currentTime;
      const peak = 0.25 * metronomeVolume;
      gain.gain.setValueAtTime(0, t0);
      gain.gain.linearRampToValueAtTime(peak, t0 + 0.002);
      gain.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.05);
      osc.connect(gain).connect(ctx.destination);
      osc.start(t0);
      osc.stop(t0 + 0.06);
    } catch (e) {
      // Web Audio unavailable/blocked — the beat dot still pulses visually
    }
  }

  // Remove/reflow/add so the CSS transition actually retriggers on every
  // beat instead of only firing once (same dance as flashPracticeWordart).
  function pulseMetronomeBeat() {
    metronomeBeatEl.classList.remove("pulse");
    void metronomeBeatEl.offsetWidth;
    metronomeBeatEl.classList.add("pulse");
  }

  function tickMetronome() {
    playMetronomeTick();
    pulseMetronomeBeat();
  }

  function stopMetronome() {
    if (metronomeIntervalId) {
      clearInterval(metronomeIntervalId);
      metronomeIntervalId = null;
    }
    metronomeRunning = false;
    metronomeToggleBtn.textContent = "Start";
  }

  function startMetronome() {
    primeTimerAudio();
    metronomeRunning = true;
    metronomeToggleBtn.textContent = "Stop";
    tickMetronome();
    metronomeIntervalId = setInterval(tickMetronome, 60000 / metronomeBpm);
  }

  metronomeBpmSlider.addEventListener("input", () => {
    metronomeBpm = clamp(parseInt(metronomeBpmSlider.value, 10), 40, 240);
    updateMetronomeBpmUI();
    // Re-time the running interval immediately so dragging the slider while
    // playing is heard right away, not just on the next Start.
    if (metronomeRunning) {
      clearInterval(metronomeIntervalId);
      metronomeIntervalId = setInterval(tickMetronome, 60000 / metronomeBpm);
    }
  });
  metronomeBpmSlider.addEventListener("change", saveSettings);

  metronomeToggleBtn.addEventListener("click", () => {
    if (metronomeRunning) {
      stopMetronome();
    } else {
      startMetronome();
    }
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

  const DICTIONARY_URL_BUILDERS = {
    en: (q) => `https://www.oxfordlearnersdictionaries.com/definition/english/${q}?q=${q}`,
    nl: (q) => `https://www.woorden.org/woord/${q}`,
    de: (q) => `https://www.duden.de/rechtschreibung/${q}`,
    fr: (q) => `https://www.larousse.fr/dictionnaires/francais/${q}`,
    es: (q) => `https://dle.rae.es/${q}`,
    it: (q) => `https://www.treccani.it/vocabolario/${q}`,
  };
  function dictionaryUrl(word) {
    const q = encodeURIComponent(word.toLowerCase());
    const build = DICTIONARY_URL_BUILDERS[currentLanguage] || DICTIONARY_URL_BUILDERS.en;
    return build(q);
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
    } else if (defStyle === "delete") {
      inner = `<span class="word word-delete" data-pair-part="${part}" data-word="${word}">${display}</span>`;
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

  function langPillLabel(lang) {
    const btn = document.querySelector(`.lang-pill[data-lang="${lang}"]`);
    return btn ? btn.textContent : lang;
  }

  function updateDeletedStatus() {
    const n = deletedWordSets[currentLanguage].size;
    deletedStatus.textContent = n === 0
      ? "No words deleted yet."
      : `${n} word${n === 1 ? "" : "s"} deleted for ${langPillLabel(currentLanguage)}.`;
  }

  // Word-deletion mode: flags the clicked word so it never comes up again
  // (see filterPool/sensitiveWordsInScope), then removes just that pair
  // card from the page — deliberately NOT a generate() call, so the rest of
  // what's currently on screen stays exactly as it was.
  function handleWordDeletion(wordEl) {
    const word = wordEl.dataset.word;
    deletedWordSets[currentLanguage].add(word);
    saveSettings();
    updateDeletedStatus();
    currentPairs = currentPairs.filter((p) => p.a !== word && p.b !== word);
    const card = wordEl.closest(".pair-card");
    if (card) card.remove();
    if (pairsContainer.children.length === 0) {
      pairsContainer.innerHTML = `<div class="empty-state">No rhyme pairs could be made with the current word list and settings. Try enabling more rhyme types, or add more words.</div>`;
      countInfo.textContent = "";
    } else {
      updateCountInfo(pairsContainer.children.length, selectedCount);
    }
  }

  pairsContainer.addEventListener("click", (e) => {
    const deleteWord = e.target.closest(".word-delete");
    if (deleteWord) {
      handleWordDeletion(deleteWord);
      return;
    }
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

  downloadDeletedBtn.addEventListener("click", () => {
    const words = [...deletedWordSets[currentLanguage]];
    if (words.length === 0) return;
    const blob = new Blob([words.join(",\n") + "\n"], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `deleted-words-${currentLanguage}.csv`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  });

  clearDeletedBtn.addEventListener("click", () => {
    deletedWordSets[currentLanguage].clear();
    saveSettings();
    updateDeletedStatus();
  });

  // Wipes every persisted preference (theme, timer settings, deleted words,
  // syllable range, etc.) back to the app's built-in defaults and reloads,
  // which is simpler and less error-prone than resetting each in-memory
  // variable and its UI by hand. Armed by one click, fired by a second
  // within 4s, so a single misclick can't nuke all settings at once — this
  // app avoids native confirm() dialogs elsewhere, so the button itself
  // carries the confirmation instead.
  let resetSettingsArmed = false;
  let resetSettingsArmTimeout = null;
  resetSettingsBtn.addEventListener("click", () => {
    if (!resetSettingsArmed) {
      resetSettingsArmed = true;
      resetSettingsBtn.textContent = "Click again to confirm";
      resetSettingsStatus.textContent = "This will reset every setting (theme, timer, deleted words, and more) to its default.";
      resetSettingsArmTimeout = setTimeout(() => {
        resetSettingsArmed = false;
        resetSettingsBtn.textContent = "Reset default settings";
        resetSettingsStatus.textContent = "";
      }, 4000);
      return;
    }
    clearTimeout(resetSettingsArmTimeout);
    localStorage.removeItem(SETTINGS_KEY);
    location.reload();
  });

  function updateCountInfo(shown, requested) {
    if (shown < requested) {
      countInfo.textContent = `Showing ${shown} of the ${requested} requested — that's all the word list supports with these settings.`;
    } else {
      countInfo.textContent = `${shown} pairs`;
    }
  }

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
    updateCountInfo(pairs.length, requested);
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

  // Spotify's embed is cross-origin, so we can't reach into it — but when
  // its internal UI shifts focus to highlight a newly-playing track,
  // scrollIntoView() on a focused element inside a nested browsing context
  // is spec'd to propagate up through the frame's ancestors, which yanks
  // our whole page's scroll position to the player. We can't stop that
  // happening inside the iframe, so instead we snapshot our own scroll
  // position continuously and snap back to it if focus moves into the
  // Spotify iframe — a deliberate click into the player leaves the user
  // already scrolled there, so this only ever cancels the unwanted jump.
  let lastKnownScrollY = window.scrollY;
  window.addEventListener("scroll", () => {
    if (document.activeElement !== spotifyEmbed) lastKnownScrollY = window.scrollY;
  }, { passive: true });
  window.addEventListener("blur", () => {
    requestAnimationFrame(() => {
      if (document.activeElement === spotifyEmbed) {
        window.scrollTo({ top: lastKnownScrollY, behavior: "instant" });
      }
    });
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
  updateDeletedStatus();
  updateShowTimerBtnUI();
  updateTimerModeUI();
  timerLoopBtn.classList.toggle("active", timerLoop);
  updateTimerDurationUnitUI();
  updateTimerSoundUI();
  updateTimerVolumeUI();
  updateShowMetronomeBtnUI();
  updateMetronomeBpmUI();
  updateMetronomeVolumeUI();
  playlistToggle.checked = playlistVisible;
  playlistSourceSelect.value = playlistSource;
  updatePlaylistSource();
  if (customCountActive) customCountInput.value = selectedCount;
  autoRefreshToggle.checked = autoRefreshEnabled;
  autoRefreshSecondsInput.value = autoRefreshSeconds;
  setLangPillsUI();
  setCountPillsUI();
  slantToggle.checked = activeTypes.has("slant");
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

