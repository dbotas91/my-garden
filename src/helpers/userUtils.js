// userUtils.js — Hemiciclo (U invertido) com 3 fileiras + fila central (últimos 5 ícones)

const ORDER = ["child","teen","adult","legacy","canon","lackluster","signpost","stone","chest"];

// Tamanhos desktop
const ICON_SIZE_DESKTOP = {
  child: 35,
  teen: 35,
  adult: 35,
  legacy: 35,
  canon: 35,
  lackluster: 35,
  signpost: 35,
  stone: 35,
  chest: 35
};

function resolveIconSlug(n) {
  const raw = (n?.data?.noteIcon ?? n?.data?.["dg-note-icon"] ?? "").toString().toLowerCase().trim();
  return raw || "signpost";
}

function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }

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
  const width = 520;               // casar com CSS
  const centerX = width / 2;
  const padding = 24;

  // Arco (U invertido)
  const ARC_START = -150;          // graus
  const ARC_END   = -30;           // graus
  const ARC_SPAN  = ARC_END - ARC_START;

  // Raios das fileiras (outer, middle, inner)
  const R_OUTER  = 200;
  const R_MIDDLE = 165;
  const R_INNER  = 130;

  // Centro vertical do círculo
  const arcCenterY = R_OUTER + padding - 10; // +40 para baixar um pouco o arco e evitar toque nas legends
    
  // Capacidades por fila (heurística)
  //const spacingPx = 22;
  const spacingPx = 30;
  const spanRad = (ARC_SPAN * Math.PI) / 180;
  const capOuter  = Math.max(10, Math.floor(spanRad * R_OUTER  / spacingPx));
  const capMiddle = Math.max(8,  Math.floor(spanRad * R_MIDDLE / spacingPx));
  const capInner  = Math.max(6,  Math.floor(spanRad * R_INNER  / spacingPx));

  // Flatten itens na ORDER
  const orderedItems = ORDER.flatMap(slug => groups[slug]);

  // Alocação às filas por capacidade
  const rowsAlloc = { outer: [], middle: [], inner: [] };
  for (const it of orderedItems) {
    if (rowsAlloc.outer.length < capOuter) {
      rowsAlloc.outer.push(it);
    } else if (rowsAlloc.middle.length < capMiddle) {
      rowsAlloc.middle.push(it);
    } else if (rowsAlloc.inner.length < capInner) {
      rowsAlloc.inner.push(it);
    } else {
      // fallback: insere na fila menos preenchida proporcionalmente
      const sizes = [
        { key: "outer",  len: rowsAlloc.outer.length,  cap: capOuter  },
        { key: "middle", len: rowsAlloc.middle.length, cap: capMiddle },
        { key: "inner",  len: rowsAlloc.inner.length,  cap: capInner  }
      ].sort((a,b) => (a.len/a.cap) - (b.len/b.cap));
      rowsAlloc[sizes[0].key].push(it);
    }
  }

  // Posicionar uma fila num arco
  function placeRow(list, R) {
    const placed = [];
    const N = list.length;
    if (N === 0) return placed;
    //const padDeg = clamp(12 - N, 2, 12);      // padding maior quando N é pequeno
    const padDeg = Math.max(2, Math.min(12, 12 - N));      // padding maior quando N é pequeno
    const start = ARC_START + padDeg;
    const end   = ARC_END   - padDeg;
    const span  = end - start;

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

  
  // CENTRAL 5: closer to the hemicycle (lower vertical gap) and tighter horizontal spread
  //const orderedItems = ORDER.flatMap(slug => groups[slug]); // keep original order
  // Fila central: últimos 5 ícones centrados dentro do hemiciclo, um pouco acima
  //const last5 = orderedItems.slice(-5);
  const last5 = ORDER.flatMap(slug => groups[slug]).slice(-5);
  let rowCenter = [];
  if (last5.length > 0) {
    // y alvo: ligeiramente acima do centro geométrico do hemiciclo
    //const yCenter = arcCenterY - (R_INNER - 20); // ex.: 20px acima da linha interna
    //Move closer: reduce the inner gap from 20 -> 8 (brings them down towards inner arc)
    const yCenter = arcCenterY - (R_INNER - 8);
    // offsets horizontais centrados (ajusta espaçamento conforme tamanhos; aqui ~32px)
    //const baseOffsets = [-64, -32, 0, 32, 64];
    // Tighter horizontal offsets: was [-64, -32, 0, 32, 64]
    const baseOffsets = [-56, -28, 0, 28, 56];
    // se menos de 5 ícones, recorta offsets ao comprimento atual
    const offsets = baseOffsets.slice(0, last5.length);
    rowCenter = last5.map((it, i) => {
      const x = centerX + offsets[i];
      const size = ICON_SIZE_DESKTOP[it.icon] ?? 35;
      return [it.icon, it.url, it.title, size, x, yCenter, centerX];
    });
  }

  // Legends
  const legends = ORDER
    .map(k => ({ label: k.charAt(0).toUpperCase() + k.slice(1), count: (groups[k]?.length || 0), icon: k }))
    .filter(l => l.count > 0);

  // people: outer, middle, inner + central (se houver)
  const allRows = [rowOuter, rowMiddle, rowInner];
  if (rowCenter.length) allRows.push(rowCenter);

  return {
    people: allRows.filter(r => r.length > 0),
    legends
  };
}

function userComputed(data) {
  return { crowd: crowdData(data) };
}

exports.userComputed = userComputed;
