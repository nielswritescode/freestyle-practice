
function buildIndex(words, getKey) {
  // words: array of strings
  const groups = new Map(); // key.full -> {key, words: []}
  for (const w of words) {
    const key = getKey(w);
    if (!key || !key.vowel) continue; // skip words we couldn't parse a vowel for
    const full = key.vowel + "-" + key.coda.join(".");
    if (!groups.has(full)) groups.set(full, { key, full, words: [] });
    groups.get(full).words.push(w);
  }
  return groups;
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Reject pairs where one word is literally contained in the other
// ("manuscript"/"script", "battlefield"/"field") — technically the same
// ending, but it doesn't read as a real rhyme, just one word hiding inside
// the other.
function isTrivialContainment(a, b) {
  if (a === b) return true;
  return a.includes(b) || b.includes(a);
}

// Tries to turn one edge into a pair, consuming words from `remaining`/
// `usedWords` on success. Returns null (leaving state untouched) if the
// edge can no longer produce a pair, e.g. every word it could offer is
// already used — the caller is expected to drop such an edge from its pool.
function tryBuildPair(edge, groupList, remaining, usedWords) {
  if (edge.literal) {
    const [a, b] = edge.literal;
    if (usedWords.has(a) || usedWords.has(b)) return null;
    usedWords.add(a); usedWords.add(b);
    return { a, b, type: edge.type, sound: "datamuse" };
  }

  const gi = groupList[edge.i], gj = groupList[edge.j];

  if (edge.i === edge.j) {
    const pool = remaining.get(gi.full).filter(w => !usedWords.has(w));
    if (pool.length < 2) return null;
    let chosen = null;
    outerSame:
    for (let x = 0; x < pool.length; x++) {
      for (let y = x + 1; y < pool.length; y++) {
        if (!isTrivialContainment(pool[x], pool[y])) { chosen = [pool[x], pool[y]]; break outerSame; }
      }
    }
    if (!chosen) return null;
    const [a, b] = chosen;
    usedWords.add(a); usedWords.add(b);
    return { a, b, type: edge.type, sound: gi.full };
  }

  const poolA = remaining.get(gi.full).filter(w => !usedWords.has(w));
  const poolB = remaining.get(gj.full).filter(w => !usedWords.has(w));
  if (poolA.length < 1 || poolB.length < 1) return null;
  let chosen = null;
  outerCross:
  for (const wa of poolA) {
    for (const wb of poolB) {
      if (!isTrivialContainment(wa, wb)) { chosen = [wa, wb]; break outerCross; }
    }
  }
  if (!chosen) return null;
  const [a, b] = chosen;
  usedWords.add(a); usedWords.add(b);
  return { a, b, type: edge.type, sound: `${gi.full}/${gj.full}` };
}

// Wraps a shuffled edge list with the "cycle repeatedly, drop dead edges,
// reshuffle on wraparound" behavior every draw loop below needs — a rhyme
// group (e.g. cat/hat/bat/mat) can supply more than one pair as long as it
// still has unused words left, so pairs don't stall out on a small handful
// of overused groups. An edge is only permanently dropped once it truly
// can't produce another pair.
function makeCursor(edgeList) {
  let edges = shuffle(edgeList);
  let idx = 0;
  return {
    hasAny: () => edges.length > 0,
    peek() {
      if (edges.length === 0) return null;
      if (idx >= edges.length) { idx = 0; edges = shuffle(edges); }
      return edges[idx];
    },
    drop() { edges.splice(idx, 1); }, // next edge shifts into idx automatically
    advance() { idx++; },
  };
}

function generatePairs(words, count, allowedTypes, getKey, slantDb, slantRatio) {
  const groups = buildIndex(words, getKey);
  const groupList = [...groups.values()];

  // When a curated slant-rhyme database is available (currently English
  // only), it replaces the phonetic heuristic for "slant" — the heuristic
  // alone produced a lot of pairs that didn't actually read as rhymes,
  // which is why the toggle was held back pending exactly this data (see
  // git history: "Archive slant rhyme toggle... quality too poor for now").
  const useDbSlant = allowedTypes.includes("slant") && slantDb && slantDb.length > 0;
  // slantRatio (0-100, % of results that should be slant-typed) only means
  // anything once there's an actual DB pool to ratio against a non-slant one.
  const useRatio = useDbSlant && typeof slantRatio === "number";

  // Build candidate edges, kept in two pools so the ratio-driven loop below
  // can interleave draws between them instead of letting the natural edge
  // count of each type decide the mix.
  const slantEdges = [];
  const otherEdges = [];
  for (let i = 0; i < groupList.length; i++) {
    for (let j = i; j < groupList.length; j++) {
      const gi = groupList[i], gj = groupList[j];
      let type;
      if (i === j) {
        if (gi.words.length < 2) continue;
        type = "perfect";
      } else {
        type = classifyPair(gi.key, gj.key);
        if (type === "slant" && useDbSlant) continue;
      }
      if (type && allowedTypes.includes(type)) {
        otherEdges.push({ i, j, type });
      }
    }
  }

  if (useDbSlant) {
    const poolWords = new Set(words);
    for (const { a, b } of slantDb) {
      if (poolWords.has(a) && poolWords.has(b) && !isTrivialContainment(a, b)) {
        slantEdges.push({ literal: [a, b], type: "slant" });
      }
    }
  }

  const usedWords = new Set();
  const remaining = new Map(); // key.full -> shuffled available words (mutable copies)
  for (const g of groupList) remaining.set(g.full, shuffle(g.words));

  const results = [];

  if (!useRatio) {
    // No ratio to honor (slant inactive, or no DB pool) — original
    // behavior: one shuffled pool of every allowed edge, drawn round-robin.
    const cursor = makeCursor(slantEdges.concat(otherEdges));
    while (results.length < count && cursor.hasAny()) {
      const pair = tryBuildPair(cursor.peek(), groupList, remaining, usedWords);
      if (!pair) { cursor.drop(); continue; }
      cursor.advance();
      results.push(pair);
    }
    return results;
  }

  // Ratio-driven interleaving: at each draw, pull from whichever pool is
  // furthest behind its target share of the results so far (deficit round
  // robin), falling back to the other pool once one runs dry.
  const slantCursor = makeCursor(slantEdges);
  const otherCursor = makeCursor(otherEdges);
  let slantDrawn = 0, totalDrawn = 0;

  while (results.length < count) {
    const slantAvail = slantCursor.hasAny();
    const otherAvail = otherCursor.hasAny();
    if (!slantAvail && !otherAvail) break;
    const useSlant = !otherAvail || (slantAvail && slantDrawn < (totalDrawn + 1) * slantRatio / 100);
    const cursor = useSlant ? slantCursor : otherCursor;
    const pair = tryBuildPair(cursor.peek(), groupList, remaining, usedWords);
    if (!pair) { cursor.drop(); continue; }
    cursor.advance();
    results.push(pair);
    totalDrawn++;
    if (useSlant) slantDrawn++;
  }

  return results;
}


