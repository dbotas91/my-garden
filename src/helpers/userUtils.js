// userUtils.js — Hemiciclo estilo assembleia (U invertido) com múltiplas fileiras

const ORDER = ["child","teen","adult","legacy","canon","lackluster","signpost","stone","chest"];

// Tamanhos desktop
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

// Resolve slug da nota (noteIcon/dg-note-icon)
function resolveIconSlug(n) {
  const raw = (n?.data?.noteIcon ?? n?.data?.["dg-note-icon"] ?? "").toString().toLowerCase().trim();
  return raw || "signpost";
}

// Util: clamp
function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }

// Main
function crowdData(data) {
  const src =
    data.collections?.note ||
    data.collections?.pages ||
    data.collections?.posts ||
    data.collections?.all ||
    [];

  // Notas com slug e tamanho desktop
  const items = src.map((n) => {
    const icon = resolveIconSlug(n);
    const size = ICON_SIZE_DESKTOP[icon] ?? 35;
    return {
      icon,
      url: n.url || "#",
      title: (n.data && n.data.title) || n.fileSlug || icon,
      size
    };
  });

  // Agrupar por maturidade/type na ordem fixa
  const groups = {};
  for (const key of ORDER) groups[key] = [];
  for (const it of items) {
    if (!groups[it.icon]) groups[it.icon] = [];
    groups[it.icon].push(it);
  }

  // Parâmetros do hemiciclo
  const width = 520;               // deve casar com o CSS
  const centerX = width / 2;
  const padding = 24;

  // Arco de assembleia: U invertido (mais fechado que semicirculo)
  const ARC_START = -150;          // graus (mais para a esquerda e acima)
  const ARC_END   = -30;           // graus (mais para a direita e acima)
  const ARC_SPAN  = ARC_END - ARC_START;

  // Raios das fileiras (outer, middle, inner)
  const R_OUTER  = 200;
  const R_MIDDLE = 165;
  const R_INNER  = 130;

  // Centro vertical dos círculos (mais abaixo, para reservar espaço acima)
  const arcCenterY = R_OUTER + padding + 20;

  // Capacidade aproximada por fila (controla densidade; ajuste fino conforme notas)
  // Baseado em circunferência parcial: capacidade ~ arco em radianos * raio / spacing
  const spacingPx = 20; // espaçamento alvo entre ícones no arco
  const spanRad = (ARC_SPAN * Math.PI) / 180;
  const capOuter  = Math.max(10, Math.floor(spanRad * R_OUTER  / spacingPx));
  const capMiddle = Math.max(8,  Math.floor(spanRad * R_MIDDLE / spacingPx));
  const capInner  = Math.max(6,  Math.floor(spanRad * R_INNER  / spacingPx));

  // Flatten itens numa lista mantendo grupos pela ORDER
  const orderedItems = ORDER.flatMap(slug => groups[slug]);

  // Alocação às filas por capacidade (balancing): preenche outer, depois middle, depois inner, ciclando
  const rowsAlloc = { outer: [], middle: [], inner: [] };
  let i = 0;
  for (const it of orderedItems) {
    // round-robin com respeito à capacidade
    if (rowsAlloc.outer.length < capOuter) {
      rowsAlloc.outer.push(it);
    } else if (rowsAlloc.middle.length < capMiddle) {
      rowsAlloc.middle.push(it);
    } else if (rowsAlloc.inner.length < capInner) {
      rowsAlloc.inner.push(it);
    } else {
      // já ultrapassou tudo; insere na fila com menor densidade no momento
      const sizes = [
        { key: "outer",  len: rowsAlloc.outer.length,  cap: capOuter  },
        { key: "middle", len: rowsAlloc.middle.length, cap: capMiddle },
        { key: "inner",  len: rowsAlloc.inner.length,  cap: capInner  }
      ].sort((a,b) => (a.len/a.cap) - (b.len/b.cap));
      rowsAlloc[sizes[0].key].push(it);
    }
    i++;
  }

  // Placing: cada fila é distribuída uniformemente no arco ARC_START..ARC_END
  function placeRow(list, R) {
    const placed = [];
    const N = list.length;
    if (N === 0) return placed;
    // Se poucos itens, aumenta “padding angular” para evitar colagem nas extremidades
    const padDeg = clamp(12 - N, 2, 12);      // padding maior quando N pequeno
    const start = ARC_START + padDeg;
    const end   = ARC_END   - padDeg;
    const span  = end - start;

    // Distribuição uniforme dentro do span
    for (let idx = 0; idx < N; idx++) {
      const frac = (idx + 0.5) / N;
      const angleDeg = start + frac * span;
      const angleRad = angleDeg * Math.PI / 180;

      const x = centerX + R * Math.cos(angleRad);
      const y = arcCenterY - R * Math.sin(angleRad);

      const it = list[idx];
      placed.push([it.icon, it.url, it.title, it.size, x, y, centerX]);
    }
    return placed;
  }

  const rowOuter  = placeRow(rowsAlloc.outer,  R_OUTER);
  const rowMiddle = placeRow(rowsAlloc.middle, R_MIDDLE);
  const rowInner  = placeRow(rowsAlloc.inner,  R_INNER);

  // Legends
  const legends = ORDER
    .map(k => ({ label: k.charAt(0).toUpperCase() + k.slice(1), count: (groups[k]?.length || 0), icon: k }))
    .filter(l => l.count > 0);

  return {
    // três “rows” (outer, middle, inner) — cada item: [icon, url, title, sizePx, xAbs, yAbs, centerX]
    people: [rowOuter, rowMiddle, rowInner].filter(r => r.length > 0),
    legends
  };
}

function userComputed(data) {
  return { crowd: crowdData(data) };
}

exports.userComputed = userComputed;
