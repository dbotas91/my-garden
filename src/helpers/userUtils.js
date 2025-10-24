// userUtils.js — Top-arc fan layout with per-maturity icon sizes

const ORDER = ["child","teen","adult","legacy","canon","lackluster","signpost","stone","chest"];

// Desktop icon heights by maturity/type
const ICON_SIZE_DESKTOP = {
  child: 25,
  teen: 30,
  adult: 35,
  legacy: 35,
  canon: 35,
  lackluster: 35,
  signpost: 35,
  stone: 35,
  chest: 35
};

// Resolve slug from frontmatter
function resolveIconSlug(n) {
  const raw = (n?.data?.noteIcon ?? n?.data?.["dg-note-icon"] ?? "").toString().toLowerCase().trim();
  return raw || "signpost";
}

function crowdData(data) {
  // Choose a collection that contains your published notes
  const src =
    data.collections?.note ||
    data.collections?.pages ||
    data.collections?.posts ||
    data.collections?.all ||
    [];

  // Collect items
  const items = src.map((n) => {
    const icon = resolveIconSlug(n);
    const size = ICON_SIZE_DESKTOP[icon] ?? 35; // default to 35px on desktop
    return {
      icon,
      url: n.url || "#",
      title: (n.data && n.data.title) || n.fileSlug || icon,
      size
    };
  });

  // Group by maturity/type in fixed ORDER
  const groups = {};
  for (const key of ORDER) groups[key] = [];
  for (const it of items) {
    if (!groups[it.icon]) groups[it.icon] = [];
    groups[it.icon].push(it);
  }

  // Build arc fan geometry
  const width = 520;              // must match CSS crowd-body width
  const centerX = width / 2;
  const padding = 24;
  const R = 180;                  // arc radius
  const arcCenterY = R + padding; // center of the arc circle
  const ARC_START = -90;          // degrees (left/top)
  const ARC_END = 90;             // degrees (right/top)
  const ARC_SPAN = ARC_END - ARC_START;

  // Compute total notes to allocate segment spans proportionally
  const totalCount = ORDER.reduce((acc, k) => acc + (groups[k]?.length || 0), 0);
  let cursorAngle = ARC_START;

  const placed = [];
  ORDER.forEach((slug) => {
    const list = groups[slug];
    const C = list.length;
    if (C === 0) return;

    const segmentSpan = ARC_SPAN * (C / Math.max(totalCount, 1));
    // Distribute C icons evenly inside this segment
    for (let i = 0; i < C; i++) {
      const frac = (i + 0.5) / C; // center icons inside their segment
      const angleDeg = cursorAngle + frac * segmentSpan;
      const angleRad = angleDeg * Math.PI / 180;

      const x = centerX + R * Math.cos(angleRad);
      const y = arcCenterY - R * Math.sin(angleRad); // upper semicircle

      placed.push({
        icon: slug,
        url: list[i].url,
        title: list[i].title,
        size: list[i].size,
        x,
        y,
        centerX // provide for NJK offset
      });
    }

    cursorAngle += segmentSpan;
  });

  // One “row” containing all anchors (keeps NJK structure consistent)
  const singleRow = placed.map(p => [p.icon, p.url, p.title, p.size, p.x, p.y, centerX]);
  const legends = ORDER
    .map(k => ({ label: k.charAt(0).toUpperCase() + k.slice(1), count: (groups[k]?.length || 0), icon: k }))
    .filter(l => l.count > 0);

  return {
    people: [singleRow],  // array with one row: [icon, url, title, sizePx, x, y, centerX]
    legends
  };
}

function userComputed(data) {
  return { crowd: crowdData(data) };
}

exports.userComputed = userComputed;
