
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

function generatePairs(words, count, allowedTypes, getKey) {
  const groups = buildIndex(words, getKey);
  const groupList = [...groups.values()];

  // Build candidate edges
  let edges = [];
  for (let i = 0; i < groupList.length; i++) {
    for (let j = i; j < groupList.length; j++) {
      const gi = groupList[i], gj = groupList[j];
      let type;
      if (i === j) {
        if (gi.words.length < 2) continue;
        type = "perfect";
      } else {
        type = classifyPair(gi.key, gj.key);
      }
      if (type && allowedTypes.includes(type)) {
        edges.push({ i, j, type });
      }
    }
  }
  edges = shuffle(edges);

  const usedWords = new Set();
  const remaining = new Map(); // key.full -> shuffled available words (mutable copies)
  for (const g of groupList) remaining.set(g.full, shuffle(g.words));

  const results = [];
  let idx = 0;
  // Cycle through edges repeatedly — a rhyme group (e.g. cat/hat/bat/mat) can
  // supply more than one pair as long as it still has unused words left, so
  // pairs don't stall out on a small handful of overused groups. An edge is
  // only permanently dropped once it truly can't produce another pair.
  while (results.length < count && edges.length > 0) {
    if (idx >= edges.length) {
      idx = 0;
      edges = shuffle(edges); // re-shuffle each full pass for variety
    }
    const edge = edges[idx];
    const gi = groupList[edge.i], gj = groupList[edge.j];

    if (edge.i === edge.j) {
      const pool = remaining.get(gi.full).filter(w => !usedWords.has(w));
      if (pool.length < 2) { edges.splice(idx, 1); continue; }
      let chosen = null;
      outerSame:
      for (let x = 0; x < pool.length; x++) {
        for (let y = x + 1; y < pool.length; y++) {
          if (!isTrivialContainment(pool[x], pool[y])) { chosen = [pool[x], pool[y]]; break outerSame; }
        }
      }
      if (!chosen) { edges.splice(idx, 1); continue; }
      const [a, b] = chosen;
      usedWords.add(a); usedWords.add(b);
      results.push({ a, b, type: edge.type, sound: gi.full });
    } else {
      const poolA = remaining.get(gi.full).filter(w => !usedWords.has(w));
      const poolB = remaining.get(gj.full).filter(w => !usedWords.has(w));
      if (poolA.length < 1 || poolB.length < 1) { edges.splice(idx, 1); continue; }
      let chosen = null;
      outerCross:
      for (const wa of poolA) {
        for (const wb of poolB) {
          if (!isTrivialContainment(wa, wb)) { chosen = [wa, wb]; break outerCross; }
        }
      }
      if (!chosen) { edges.splice(idx, 1); continue; }
      const [a, b] = chosen;
      usedWords.add(a); usedWords.add(b);
      results.push({ a, b, type: edge.type, sound: `${gi.full}/${gj.full}` });
    }
    idx++;
  }

  return results;
}


