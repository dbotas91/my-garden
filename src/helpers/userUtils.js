// Put your computations here.

// Shuffle, chunk, grid position helpers (kept from your code)
function shuffle(a) {
  for (i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

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
    const blanks = Array(fillCount).fill(
      {
        icon: 0, 
        url: "", 
        title: "",
        factor: 0
      });
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
  withered: 3,     // subdued but readable
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
  const raw = n?.data?.noteIcon ?? n?.data?.["dg-note-icon"] ?? "";
  const slug = String(raw).toLowerCase().trim();
  const icon = slug || "child";
  const factor = Number.isFinite(maturityScale[icon]) ? maturityScale[icon] : 2;
  
  return { icon, factor };
}

function crowdData(data) {
  / Pick a collection that actually contains your published notes
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
    
      return {
        icon,                                        // ex: "child"
        url,                            // ex: "/11-templates/message-note/"
        title,     // título limpo
        factor: Number.isFinite(factor) ? factor : 2 // garante número
      };
    });

  const legends = Object.values(counts)
    .filter((c) => c.count > 0)
    .sort((a, b) => b.count - a.count);

  return {
    people: getPositions(items),
    legends
  };
}

function userComputed(data) {
  return {
    crowd: crowdData(data)
  };
}

exports.userComputed = userComputed;
