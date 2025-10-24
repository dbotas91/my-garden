// Put your computations here.

// Shuffle, chunk, grid position helpers (kept from your code)
/*function shuffle(a) {
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
/*const noteLabels = {
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
  // Group notes by slug
  const groups = {};
  for (const slug of RING_ORDER) groups[slug] = [];
  for (const it of items) {
    const slug = it.icon;
    if (!groups[slug]) groups[slug] = [];
    groups[slug].push(it);
  }

  // Radii: inner -> outer, evenly spaced
  // Radii per ring
  const cx = circleDiameter / 2;
  const maxRadius = cx - padding;
  const ringCount = RING_ORDER.length;
  const radii = RING_ORDER.map((_, idx) => {
    const t = ringCount > 1 ? idx / (ringCount - 1) : 1;
    return innerGap + t * (maxRadius - innerGap);
  });

  //For each ring: shuffle items, place evenly by angle, append angle/radius for template
  const rings = RING_ORDER.map((slug, idx) => {
    const R = radii[idx];
    //const ringItems = shuffle(groups[slug].slice());
    const ringItems = groups[slug].slice(); // already flat items
    const N = Math.max(ringItems.length, 1);
    const startAngle = -90 + (idx % 2 ? 8 : -8); // stagger starting angle per ring
    return ringItems.map((it, i) => {
      const angle = startAngle + (360 / N) * i;
      // Template item as array: [icon, url, title, factor, angle, radius]
      return [it.icon, it.url, it.title, it.factor, angle, R];
    });
  });

  const legends = RING_ORDER.map(slug => ({ label: noteLabels[slug].label, count: groups[slug].length, icon: slug }));

  return { rings, legends };
  // Build decorative ring icons for each ring (repeat the ring’s slug around the circumference)
  // Tune these for density and size of decorative icons:
  /*const decorIconSize = 18;         // px height for decorative ring icons
  const angularGapPx = 6;           // extra spacing per icon
  const ringDecor = RING_ORDER.map((slug, idx) => {
    const R = radii[idx];
    const circumference = 2 * Math.PI * R;
    const capacity = Math.max(6, Math.floor(circumference / (decorIconSize + angularGapPx)));
    const startAngle = -90 + (idx % 2 ? 6 : -6);
    const items = [];
    for (let i = 0; i < capacity; i++) {
      const angle = startAngle + (360 / capacity) * i;
      items.push({ slug, angle, radius: R, size: decorIconSize });
    }
    return items;
  });

  return { rings, radii, ringDecor };*/
//}

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
/*function distributePolar(rows, circleDiameter = 520, padding = 24, innerGap = 28) {
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
  const src =
    data.collections?.note ||
    data.collections?.pages ||
    data.collections?.posts ||
    data.collections?.all ||
    [];

  const items = src.map((n) => {
    const { icon, factor } = resolveIconSlug(n);
    return {
      icon,
      url: n.url || "#",
      title: (n.data && n.data.title) || n.fileSlug || icon,
      factor: Number.isFinite(factor) ? factor : 3
    };
  });

  // 2) Group by icon (ring key)
  const groups = {};
  for (const key of RING_ORDER) groups[key] = [];
  for (const it of items) {
    if (!groups[it.icon]) groups[it.icon] = [];
    groups[it.icon].push(it);
  }

  // 3) Sort rings by count DESC; tie-break by RING_ORDER index ASC
  const sortedRings = Object.keys(groups)
    .map(k => ({ key: k, count: groups[k].length, order: RING_ORDER.indexOf(k) }))
    .filter(r => r.count > 0) // ignore empty rings
    .sort((a, b) => {
      if (b.count !== a.count) return b.count - a.count;
      return a.order - b.order;
    });

  // 4) Layout: inverted pyramid (top row widest), descending rows
  // Container logical size (match CSS): 520x520
  const width = 520;
  const height = 520;
  const padding = 24;
  const usableWidth = width - padding * 2;
  const usableHeight = height - padding * 2;

  // Vertical spacing between rows
  const rowGap = 48; // px between rows; tune as needed
  const topY = padding + 40; // start a bit below top

   // Compute per-row max width taper:
  // Top row gets ~95% of usableWidth; bottom rows get smaller (to form pyramid).
  const maxRows = Math.max(sortedRings.length, 1);

  // 5) Build rows with x/y for each icon; even spacing horizontally within row width
  const rows = [];
  sortedRings.forEach((ring, idx) => {
    const itemsInRow = groups[ring.key];
    const N = itemsInRow.length;

    // Row Y position: top to bottom
    const y = topY + idx * rowGap;

    // Row width taper factor: from 0.95 down to, say, 0.55 linearly
    const t = maxRows > 1 ? idx / (maxRows - 1) : 0; // 0 at top, 1 at bottom
    const rowWidth = usableWidth * (0.95 - t * 0.40); // 95% → 55%
    const leftX = (width - rowWidth) / 2; // center row horizontally

    // Horizontal spacing: distribute N icons across rowWidth
    // Include small gutter between icons
    const gutter = 8;
    const segment = N > 1 ? (rowWidth - gutter * (N - 1)) / N : rowWidth;
    const iconCenters = [];
    for (let i = 0; i < N; i++) {
      const xStart = leftX + i * (segment + gutter);
      const xCenter = xStart + segment / 2;
      iconCenters.push(xCenter);
    }

    // Convert to template array [icon, url, title, factor, x, y]
    const row = itemsInRow.map((it, i) => {
      const x = iconCenters[i];
      const centerX = width / 2;
      return [it.icon, it.url, it.title, it.factor, x, y, centerX, rowWidth];
    });

    rows.push(row);
  });

  // 6) Legends preserving sorted order
  const legends = sortedRings.map(r => ({ label: r.key.charAt(0).toUpperCase() + r.key.slice(1), count: r.count, icon: r.key }));

  return {
    // people: array of rows; each row is array of [icon, url, title, factor, x, y]
    people: rows,
    legends
  };
}

/*function crowdData(data) {
  const src =
    data.collections?.note ||
    data.collections?.pages ||
    data.collections?.posts ||
    data.collections?.all ||
    [];

  const items = src.map((n) => {
    const { icon, factor } = resolveIconSlug(n);
    return {
      icon,
      url: n.url || "#",
      title: (n.data && n.data.title) || n.fileSlug || icon,
      factor: Number.isFinite(factor) ? factor : 3
    };
  });

  const { rings, legends } = buildRings(items, 520, 24, 36);

  return {
    people: rings,   // array of rings; each ring is an array of [icon, url, title, factor, angle, radius]
    legends
  };
}*/

/*function crowdData(data) {
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

      const url = n.url || "#";
      const title = (n.data && n.data.title) || n.fileSlug || icon;
      const sizeFactor = Number.isFinite(factor) ? factor : 2;
      
      return [
        icon,                                        // ex: "child"
        url,                            // ex: "/11-templates/message-note/"
        title,     // título limpo
        sizeFactor // garante número
      ];
    });*/

  // Build polar rings
  /*const { rings, radii, ringDecor } = buildRings(items, 520, 24, 36);

  const legends = RING_ORDER
    .map(slug => counts[slug])
    .filter(Boolean);

  return {people: rings, ringDecor, legends };*/
    
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
//}

// userUtils.js — centered pyramid rows with centerX and rowWidth

// Shuffle helper
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Maturity/type order for tie-breaks (inner to outer preference, used only for ordering)
const RING_ORDER = ["child","teen","adult","legacy","canon","lackluster","signpost","stone","chest"];

// Height scaling factor (height = 5 + 10 * factor) — use as-is with your icons
const maturityScale = {
  child: 2,
  teen: 3,
  adult: 4,
  legacy: 5,
  canon: 5,
  lackluster: 3,
  signpost: 3,
  stone: 3,
  chest: 3
};

// Resolve slug from note frontmatter
function resolveIconSlug(n) {
  const raw = (n?.data?.noteIcon ?? n?.data?.["dg-note-icon"] ?? "").toString().toLowerCase().trim();
  const icon = raw || "signpost"; // default if missing
  const factor = maturityScale[icon] ?? 3;
  return { icon, factor };
}

function crowdData(data) {
  // Choose a collection that contains published notes
  const src =
    data.collections?.note ||
    data.collections?.pages ||
    data.collections?.posts ||
    data.collections?.all ||
    [];

  // Collect items
  const items = src.map((n) => {
    const { icon, factor } = resolveIconSlug(n);
    return {
      icon,
      url: n.url || "#",
      title: (n.data && n.data.title) || n.fileSlug || icon,
      factor: Number.isFinite(factor) ? factor : 3
    };
  });

  // Group by icon (ring key)
  const groups = {};
  for (const key of RING_ORDER) groups[key] = [];
  for (const it of items) {
    if (!groups[it.icon]) groups[it.icon] = [];
    groups[it.icon].push(it);
  }

  // Sort rings by count DESC; tie-break by RING_ORDER index ASC
  const sortedRings = Object.keys(groups)
    .map(k => ({ key: k, count: groups[k].length, order: RING_ORDER.indexOf(k) }))
    .filter(r => r.count > 0)
    .sort((a, b) => {
      if (b.count !== a.count) return b.count - a.count;
      return a.order - b.order;
    });

  // Layout: inverted pyramid (top row widest), centered rows
  const width = 520;     // must match CSS crowd-body width
  const height = 520;    // logical height for spacing (min-height in CSS)
  const padding = 24;
  const usableWidth = width - padding * 2;

  const rowGap = 48;     // vertical spacing between rows
  const topY = padding + 40; // starting Y offset
  const maxRows = Math.max(sortedRings.length, 1);
  const centerX = width / 2;

  const rows = [];
  sortedRings.forEach((ring, idx) => {
    const itemsInRow = groups[ring.key];
    const N = itemsInRow.length;

    // Row Y position (top to bottom)
    const y = topY + idx * rowGap;

    // Row width taper: 95% → 55% of usableWidth linearly
    const t = maxRows > 1 ? idx / (maxRows - 1) : 0; // 0..1
    const rowWidth = usableWidth * (0.95 - t * 0.40);
    const leftX = (width - rowWidth) / 2;

    // Horizontal spacing across rowWidth (with small gutters)
    const gutter = 8;
    const segment = N > 1 ? (rowWidth - gutter * (N - 1)) / N : rowWidth;
    const iconCenters = [];
    for (let i = 0; i < N; i++) {
      const xStart = leftX + i * (segment + gutter);
      const xCenter = xStart + segment / 2;
      iconCenters.push(xCenter);
    }

    // Build row items with centerX and rowWidth included
    const row = itemsInRow.map((it, i) => {
      const x = iconCenters[i];
      // Return [icon, url, title, factor, x, y, centerX, rowWidth]
      return [it.icon, it.url, it.title, it.factor, x, y, centerX, rowWidth];
    });

    rows.push(row);
  });

  // Legends in sorted order
  const legends = sortedRings.map(r => ({
    label: r.key.charAt(0).toUpperCase() + r.key.slice(1),
    count: r.count,
    icon: r.key
  }));

  return {
    people: rows,  // array of rows; each row is array of [icon, url, title, factor, x, y, centerX, rowWidth]
    legends
  };
}
function userComputed(data) {
  return {
    crowd: crowdData(data)
  };
}

exports.userComputed = userComputed;
