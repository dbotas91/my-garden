// Put your computations here.

// Shuffle, chunk, grid position helpers (kept from your code)
function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

function sliceIntoChunks(arr, chunkSize) {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    res.push(arr.slice(i, i + chunkSize););
  }
  return res;
}

// Positions: square grid, padded with planes (0,"","")
function getPositions(items) {
  let minInRow = Math.floor(Math.sqrt(items.length));
  let maxInRow = Math.ceil(Math.sqrt(items.length));
  if (minInRow < maxInRow) {
    const fillCount = Math.pow(maxInRow, 2) - items.length;
    const blanks = Array(fillCount).fill(
      {
        icon: 0, 
        url: "", 
        title: "",
        factor: 0
      });
    items = items.concat(blanks);
  }
  items = shuffle(items.slice());
  let levels = sliceIntoChunks(items, maxInRow);
  return levels;
}

// Maturity order → controls icon size scaling (height = 5 + 10 * factor)
const maturityScale = {
  child: 1,
  teen: 2,
  adult: 3,
  legacy: 4,
  canon: 4,        // optional terminal; same scale as legacy
  // Non-growth types get a mid/constant size or custom:
  withered: 2,     // subdued but readable
  signpost: 2,     // navigational
  stone: 2,        // inert/extracted
  chest: 2         // tool/how-to
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
  const raw = n.data.noteIcon;
  
  if (raw !== undefined && raw !== null && raw !== "") {
    const vNum = parseInt(raw, 10);
    if (!Number.isNaN(vNum)) {
      return { icon: 'child', factor: vNum };
    }
    
    const slug = String(raw).toLowerCase().trim();
    return { icon: slug, factor: maturityScale[slug] ?? 2 };
  }

  const slug = String(n.data.maturity || n.data.type || "").toLowerCase().trim() || "signpost";
  return { icon: slug, factor: maturityScale[slug] ?? 2 };
}

function crowdData(data) {
  const counts = JSON.parse(JSON.stringify(noteLabels));
  const items = data.collections.note.map((n) => {
    const { icon, factor } = resolveIconSlug(n);
    // Contagem de legenda
    if (!counts[icon]) {
      counts[icon] = { label: icon.charAt(0).toUpperCase() + icon.slice(1), count: 0, icon };
    }
    counts[icon].count += 1;

    //Objeto por item (sem CSV)
    return {
      icon,                                        // ex: "child"
      url: n.url,                                  // ex: "/11-templates/message-note/"
      title: n.data.title || n.fileSlug || "",     // título limpo
      factor: Number.isFinite(factor) ? factor : 2 // garante número
    };
  });

  const legends = Objetc.values(counts).filter(c => c.count > 0)
    .sort((a, b) => b.count - a.count);

  return {
    people: getPositions(items),
    legends
  };
}

// Build crowd data from notes
// Each note: { url: "/path/", title: "Note Title", maturity: "child|teen|adult|legacy|canon", type: "withered|stone|signpost|chest" }
/*function buildCrowdData(notes) {
  const items = [];
  const legends = JSON.parse(JSON.stringify(noteLabels)); // deep copy counts

  for (const note of notes) {
    const key = String(note.maturity || note.type || "").toLowerCase();
    const icon = iconSlugFor(note);

    // Count legend if we recognize the key
    if (legends[icon]) {
      legends[icon].count += 1;
    } else if (key && legends[key]) {
      legends[key].count += 1;
    }

    // Size factor by maturity/type
    const factor = maturityScale[key] ?? 2;

    // Push an item conforming to NJK template: [iconSlug, href, title, sizeFactor]
    items.push([icon, note.url, note.title, factor]);
  }

  // Grid rows for NJK
  const rows = getPositions(items);

  // Legends array for NJK
  const legendsArr = Object.values(legends).filter(l => l.count > 0);

  return {
    crowd: rows,
    legends: legendsArr
  };
}

// Example usage:
// const userComputed = { crowd: buildCrowdData(allNotesArray) };
// Then the NJK you shared will render images from /img/{{tree[0]}}.svg and heights via {{5 + (10 * tree[3])}}.

// If your icons live at /assets/icons on the site, change the NJK img src to:
// <img src="/assets/icons/{{tree[0]}}.svg" ...>
// and similarly update legends: <img src="/assets/icons/{{count.icon}}.svg" ...>

// Assumes: noteLabels, getPositions, maturityScale, iconSlugFor defined as in the previous message

function crowdData(data) {
  // Deep copy legend counters
  const peopleCounts = JSON.parse(JSON.stringify(noteLabels));

  const canvasCrowd = data.collections.note.map((n) => {
    // Read icon preference: noteIcon (slug or number), else maturity/type
    let raw = n.data.noteIcon;
    let height = 2; // default size factor

    // If numeric (e.g., 1..3), convert to tree-#
    if (raw !== undefined && raw !== null && raw !== "") {
      const vNum = parseInt(raw, 10);
      if (!Number.isNaN(vNum)) {
        const v = `tree-${vNum}`;
        height = vNum; // keep your numeric mapping for size
        // Count legend if exists; else initialize minimal entry
        if (!peopleCounts[v]) {
          peopleCounts[v] = { label: `Tree ${vNum}`, count: 0, icon: v };
        }
        peopleCounts[v].count++;
        return [v, n.url, n.data.title || n.fileSlug, height];
      }
    }

    // Otherwise, use slug from noteIcon or fall back to maturity/type
    const slug = String(raw || n.data.maturity || n.data.type || "").toLowerCase().trim() || "signpost";

    // Size factor by maturity/type
    height = maturityScale[slug] ?? 2;

    // Count legend if known; otherwise add a generic entry
    if (!peopleCounts[slug]) {
      peopleCounts[slug] = { label: slug.charAt(0).toUpperCase() + slug.slice(1), count: 0, icon: slug };
    }
    peopleCounts[slug].count++;

    return [slug, n.url, n.data.title || n.fileSlug, height];
  });

  // Build legends array, sorted by count desc
  let legends = Object.values(peopleCounts).filter((c) => c.count > 0);
  legends.sort((a, b) => b.count - a.count);

  return {
    people: getPositions(canvasCrowd),
    legends,
  };
}*/


function userComputed(data) {
  return {
    crowd: crowdData(data)
  };
}

exports.userComputed = userComputed;
