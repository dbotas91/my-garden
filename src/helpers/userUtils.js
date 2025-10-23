// Put your computations here.

// Shuffle, chunk, grid position helpers (kept from your code)
function shuffle(a) {
  for (i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const RING_ORDER = ["child","teen","adult","legacy","canon","lackluster","signpost","stone","chest"];

function sliceIntoChunks(arr, chunkSize) {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    res.push(arr.slice(i, i + chunkSize));
  }
  return res;
}

// Positions: square grid, padded with planes (0,"","")
function getPositions(items) {
  let minInRow = Math.floor(Math.sqrt(items.length));
  let maxInRow = Math.ceil(Math.sqrt(items.length));
  if (minInRow < maxInRow) {
    const fillCount = Math.pow(maxInRow, 2) - items.length;
    const blanks = Array(fillCount).fill([0, "", "", 0]);
    items = items.concat(blanks);
  }
  return sliceIntoChunks(shuffle(items.slice()), maxInRow);
}

// Maturity order → controls icon size scaling (height = 5 + 10 * factor)
const maturityScale = {
  child: 2,
  teen: 3,
  adult: 4,
  legacy: 5,
  canon: 5,        // optional terminal; same scale as legacy
  // Non-growth types get a mid/constant size or custom:
  lackluster: 3,     // subdued but readable
  signpost: 3,     // navigational
  stone: 3,        // inert/extracted
  chest: 3         // tool/how-to
};

// Icon slug mapping (filenames under /img/*.svg, per your NJK)
/*function iconSlugFor(note) {
  // Prefer maturity, fall back to type
  const key = String(note.maturity || note.type || "").toLowerCase();
  // Sanity fallback
  if (!key) return "signpost";
  return key;
}*/

// Legend labels (people-centric set)
const noteLabels = {
  child:      { label: "Child",    count: 0, icon: "child" },
  teen:       { label: "Teen",     count: 0, icon: "teen" },
  adult:      { label: "Adult",    count: 0, icon: "adult" },
  legacy:     { label: "Legacy",   count: 0, icon: "legacy" },
  canon:      { label: "Canon",    count: 0, icon: "canon" },
  lackluster: { label: "Lackluster", count: 0, icon: "lackluster" },
  signpost:   { label: "Signpost", count: 0, icon: "signpost" },
  stone:      { label: "Stone",    count: 0, icon: "stone" },
  chest:      { label: "Chest",    count: 0, icon: "chest" }
};

function resolveIconSlug(n) {
  // Prefer noteIcon; fall back to dg-note-icon
  const raw = (n?.data?.noteIcon ?? n?.data?.["dg-note-icon"] ?? "").toString().toLowerCase().trim();
  const icon = raw || "child";
  const factor = maturityScale[icon] ?? 2;
  
  return { icon, factor };
}

function buildRings(items, circleDiameter = 520, padding = 24, innerGap = 36) {
  const groups = {};
  for (const slug of RING_ORDER) groups[slug] ? [];
  for (const it of items) {
    const slug = it.icon;
    if (!groups[slug]) groups[slug] = [];
    groups[slug].push(it);
  }

  // Radii: inner -> outer, evenly spaced
  const cx = circleDiameter / 2;
  const max Radius = cx - padding;
  const ringCount = RING_ORDER.length;
  const radii = RING_ORDER.map((_, idx) => {
    const t = ringCount > 1 ? idx / (ringCount - 1) : 1;
    return innerGap + t * (maxRadius - innerGap);
  });

  //For each ring: shuffle items, place evenly by angle, append angle/radius for template
  const rings = RING_ORDER.map((slug, idx) => {
    const R = radii[idx];
    const ringItems = shuffle(groups[slug].slice());
    const N = Math.max(ingItems.length, 1);
    const startAngle = -90 + (idx % 2 ? 8 : -8); // stagger starting angle per ring
    return ringItems.map((it, i) => {
      const angle = startAngle º (360 / N) * i;
      // Template item as array: [icon, url, title, factor, angle, radius]
      return [it.icon, it.url, it.title, it.factor, angle, R];
    });
  });

  return { rings, radii };
}

// Distribute items around a circle by assigning angle (deg) and radius (px) per item.
// rows: array of arrays (your people grid), centerRadius: max radius from center,
// ringStep: distance between rings.
/*function distributePolar(rows, centerRadius = 220, ringStep = 40, startAngle = -90) {
  return rows.map((row, ringIndex) => {
    const N = row.length;
    const R = centerRadius - ringIndex * ringStep;
    return row.map((item, i) => {
      // Keep blank planes untouched
      if (Array.isArray(item) && item[0] === 0) return item;
      const angle = startAngle + (360 / Math.max(N, 1)) * i;
      // Append angle and radius to the item without breaking your template shape:
      // [icon, url, title, factor, angle, radius]
      const icon = item[0], url = item[1], title = item[2], factor = item[3];
      return [icon, url, title, factor, angle, R];
    });
  });
}*/

// rows: array of rows (each row = array of [icon, url, title, factor])
// circleDiameter: container diameter in px
function distributePolar(rows, circleDiameter = 520, padding = 24, innerGap = 28) {
  const cx = circleDiameter / 2;
  const maxRadius = cx - padding;                 // keep inside circle border
  const minRadius = Math.max(innerGap, 0);        // keep away from exact center
  const ringCount = rows.length;
  const rowsSafe = rows.map(r => r.filter(item => !(Array.isArray(item) && item[0] === 0)));

  return rowsSafe.map((row, ringIndex) => {
    const N = Math.max(row.length, 1);
    // Linear mapping of ring index to radius across full range:
    const t = ringCount > 1 ? ringIndex / (ringCount - 1) : 1; // 0..1
    const R = minRadius + t * (maxRadius - minRadius);
    // Stagger starting angle per ring to reduce overlaps:
    const startAngle = -90 + (ringIndex % 2 ? 10 : -10); // degrees
    return row.map((item, i) => {
      const angle = startAngle + (360 / N) * i;          // degrees
      // Append angle/radius at indices 4/5 for NJK
      return [item[0], item[1], item[2], item[3], angle, R];
    });
  });
}

function redistributeByCapacity(rows, circleDiameter = 520, padding = 24, innerGap = 28, targetRings = 6, avgItemWidth = 28, angularPaddingDeg = 8) {
  // Flatten items
  const items = rows.flat().filter(item => !(Array.isArray(item) && item[0] === 0));
  const cx = circleDiameter / 2;
  const maxRadius = cx - padding;
  const minRadius = innerGap;

  // Build ring radii evenly
  const radii = Array.from({ length: targetRings }, (_, k) => {
    const t = targetRings > 1 ? k / (targetRings - 1) : 1;
    return minRadius + t * (maxRadius - minRadius);
  });

  // Capacity per ring ~ circumference / (avg item width + angular padding in radians)
  const ringCaps = radii.map(R => {
    const circumference = 2 * Math.PI * R;
    return Math.max(1, Math.floor(circumference / (avgItemWidth * 1.2)));
  });

  // Allocate items across rings
  const rings = radii.map(() => []);
  let idx = 0;
  for (let r = 0; r < radii.length; r++) {
    const cap = ringCaps[r];
    for (let c = 0; c < cap && idx < items.length; c++, idx++) {
      rings[r].push(items[idx]);
    }
  }

  // If leftovers remain, keep filling cyclically
  let ringPtr = 0;
  while (idx < items.length) {
    rings[ringPtr % rings.length].push(items[idx++]);
    ringPtr++;
  }

  // Place per ring with evenly spaced angles
  return rings.map((ringItems, ringIndex) => {
    const N = ringItems.length || 1;
    const R = radii[ringIndex];
    const startAngle = -90 + (ringIndex % 2 ? 10 : -10);
    return ringItems.map((item, i) => {
      const angle = startAngle + (360 / N) * i;
      return [item[0], item[1], item[2], item[3], angle, R];
    });
  });
}


function crowdData(data) {
  // Pick a collection that actually contains your published notes
  const itemsSrc =
    data.collections?.note ||
    data.collections?.pages ||
    data.collections?.posts ||
    data.collections?.all ||
    [];
  
  const counts = JSON.parse(JSON.stringify(noteLabels));
  
  const items = itemsSrc
    .map((n) => {
      const { icon, factor } = resolveIconSlug(n);
      
      // Count legend
      if (!counts[icon]) {
        counts[icon] = { label: icon[0].toUpperCase() + icon.slice(1), count: 0, icon }; //plane
      }
      counts[icon].count++;

      const url = n.url || "";
      const title = (n.data && n.data.title) || n.fileSlug || icon;
      const sizeFactor = Number.isFinite(factor) ? factor : 2;
      
      return [
        icon,                                        // ex: "child"
        url,                            // ex: "/11-templates/message-note/"
        title,     // título limpo
        sizeFactor // garante número
      ];
    });

  // Build polar rings
  const { rings, radii } = buildRings(items, 520, 24, 36);

  const legends = RING_ORDER
    .map(slug => counts[slug])
    .filter(Boolean);

  return {people: rings, legends, radii, order: RING_ORDER};
    
  /*const legends = Object.values(counts)
    .filter((c) => c.count > 0)
    .sort((a, b) => b.count - a.count);

  const result = {
    people: getPositions(items),
    legends
  };*/
  //result.people = distributePolar(result.people, /* centerRadius */520, /*ring Step*/24, /*starAngle*/ 28);
  /*result.people = redistributeByCapacity(result.people, 520, 24, 36, 6, 28, 8);
  return result;*/
}

function userComputed(data) {
  return {
    crowd: crowdData(data)
  };
}

exports.userComputed = userComputed;
