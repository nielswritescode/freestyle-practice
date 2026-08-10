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
  };

  // Per-language UI strings and built-in library size, keyed the same as
  // LANGS. English/Dutch ship a 12,000-word library; German/French/Spanish
  // ship a lighter 3,000-word one (frequency-ranked, real IPA rhymes, no
  // hand-curated rhyme-family balancing — see data/words-data-{de,fr,es}.js).
  const LANG_META = {
    en: { wordListLabel: "Word list — 12,000 built in, or add your own", builtInCount: "12,000" },
    nl: { wordListLabel: "Woordenlijst — 12.000 ingebouwd, of voeg je eigen woorden toe", builtInCount: "12,000" },
    de: { wordListLabel: "Wortliste — 3.000 integriert, oder füge eigene hinzu", builtInCount: "3,000" },
    fr: { wordListLabel: "Liste de mots — 3 000 intégrés, ou ajoutez les vôtres", builtInCount: "3,000" },
    es: { wordListLabel: "Lista de palabras — 3000 incorporadas, o añade las tuyas", builtInCount: "3,000" },
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
  let defStyle = "links"; // 'links' | 'simple' | 'full'
  let activeTypes = new Set(["perfect"]); // near/slant hidden for now, see template.html

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
      for (const lang of ["en", "nl", "de", "fr", "es"]) {
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
    if (stored.defStyle === "links" || stored.defStyle === "simple" || stored.defStyle === "full") {
      defStyle = stored.defStyle;
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
        defStyle,
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
  const singleWordsBtn = document.getElementById("singleWordsBtn");
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
      out = out.concat(sampleWithRepeats(wordsByTier[tier], Math.round(target * fractions[tier])));
    }
    return out;
  }

  function activeWordList() {
    if (libraryMode === "only") return csvWords;
    const weighted = ratioWeightedBuiltIn();
    if (libraryMode === "add") return weighted.concat(csvWords);
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
    let inner;
    if (defStyle === "links") {
      inner = `<a class="word" data-pair-part="${part}" href="${dictionaryUrl(word)}" target="_blank" rel="noopener noreferrer">${word}</a>`;
    } else if (defStyle === "full") {
      inner = `<span class="word word-full" data-pair-part="${part}" data-word="${word}">${word}</span>`;
    } else {
      inner = `<span class="word word-simple" data-pair-part="${part}" data-word="${word}">${word}</span>`;
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
    const words = activeWordList();
    const types = [...activeTypes];
    const getKey = LANGS[currentLanguage].getKey;
    const pairs = generatePairs(words, selectedCount, types, getKey);
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

  // Quiz/reveal mode: hide word B (and the tie arrow) in every pair card so
  // you can try to come up with the rhyme yourself first, then toggle back
  // to check. Not persisted — like Hide UI, you want a fresh reveal state
  // on a new visit. Applies to whatever's currently rendered AND to
  // anything generated afterwards, since the class lives on the container.
  let singleWordsMode = false;
  function updateSingleWordsUI() {
    pairsContainer.classList.toggle("single-words", singleWordsMode);
    singleWordsBtn.textContent = singleWordsMode ? "Show pairs" : "Single words";
  }
  singleWordsBtn.addEventListener("click", () => {
    singleWordsMode = !singleWordsMode;
    updateSingleWordsUI();
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
  updateSingleWordsUI();
  playlistToggle.checked = playlistVisible;
  playlistSourceSelect.value = playlistSource;
  updatePlaylistSource();
  if (customCountActive) customCountInput.value = selectedCount;
  setLangPillsUI();
  setCountPillsUI();
  setTypePillsUI();
  renderDiffUI();
  updatePlaylistVisibility();
  updateHideUiUI();
  generate();
})();

