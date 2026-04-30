// Deterministic generative art for Laws & Patterns principles.
// Same slug always produces the same composition. No external dependencies.
// Each category has 3 sub-patterns; slug hash determines which one renders.

const W = 960
const H = 600
const MIST = '#768B9B'

// ─── PRNG ─────────────────────────────────────────────────────────────────────

function hash(str: string): number {
  let h = 5381
  for (let i = 0; i < str.length; i++) {
    h = (Math.imul(h, 33) ^ str.charCodeAt(i)) >>> 0
  }
  return h >>> 0
}

function makeRng(seed: number) {
  let s = seed
  return (): number => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0
    return s / 4294967295
  }
}

type Rng = ReturnType<typeof makeRng>

function between(rng: Rng, a: number, b: number) { return a + rng() * (b - a) }
function pick(rng: Rng, a: number, b: number) { return Math.floor(between(rng, a, b + 0.999)) }

// ─── Shape types ──────────────────────────────────────────────────────────────

export type ArtShape =
  | { t: 'circle'; cx: number; cy: number; r: number; fill: string; stroke?: string; strokeWidth?: number; opacity: number }
  | { t: 'rect'; x: number; y: number; w: number; h: number; fill: string; stroke?: string; strokeWidth?: number; rx?: number; opacity: number; rotate?: number; rcx?: number; rcy?: number }
  | { t: 'poly'; pts: [number, number][]; stroke: string; strokeWidth: number; opacity: number }
  | { t: 'path'; d: string; stroke: string; strokeWidth: number; opacity: number }

export type ArtData = ArtShape[]

// ─── ATTENTION ────────────────────────────────────────────────────────────────

// A0: concentric rings from an off-center focal point
function attentionRings(rng: Rng): ArtData {
  const cx = between(rng, W * 0.38, W * 0.62)
  const cy = between(rng, H * 0.38, H * 0.62)
  const rings = pick(rng, 7, 11)
  const minR = between(rng, 22, 38)
  const spacing = between(rng, 50, 68)
  const sw = between(rng, 3, 5)
  const mistRing = pick(rng, 2, rings - 2)
  const out: ArtData = []

  for (let i = rings; i >= 1; i--) {
    const t = i / rings
    const mist = i === mistRing
    out.push({
      t: 'circle', cx, cy,
      r: minR + i * spacing,
      fill: 'none',
      stroke: mist ? MIST : 'white',
      strokeWidth: mist ? sw * 1.8 : sw,
      opacity: 0.04 + t * t * 0.52,
    })
  }
  out.push({ t: 'circle', cx, cy, r: between(rng, 12, 20), fill: 'white', opacity: 0.9 })
  return out
}

// A1: radial spokes bursting from a focal point
function attentionRadial(rng: Rng): ArtData {
  const cx = between(rng, W * 0.38, W * 0.62)
  const cy = between(rng, H * 0.38, H * 0.62)
  const count = pick(rng, 16, 26)
  const maxLen = between(rng, H * 0.38, H * 0.56)
  const sw = between(rng, 2, 4)
  const mistIdx = pick(rng, 0, count - 1)
  const out: ArtData = []

  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2 + between(rng, -0.06, 0.06)
    const len = maxLen * between(rng, 0.4, 1.0)
    const mist = i === mistIdx
    const t = len / maxLen
    out.push({
      t: 'path',
      d: `M ${cx.toFixed(1)},${cy.toFixed(1)} L ${(cx + Math.cos(angle) * len).toFixed(1)},${(cy + Math.sin(angle) * len).toFixed(1)}`,
      stroke: mist ? MIST : 'white',
      strokeWidth: mist ? sw * 2.2 : sw,
      opacity: mist ? 0.75 : 0.05 + t * 0.48,
    })
  }
  out.push({ t: 'circle', cx, cy, r: between(rng, 8, 14), fill: 'white', opacity: 0.9 })
  return out
}

// A2: precision crosshair — sparse rings + perpendicular axis lines
function attentionCrosshair(rng: Rng): ArtData {
  const cx = between(rng, W * 0.42, W * 0.58)
  const cy = between(rng, H * 0.40, H * 0.60)
  const rings = pick(rng, 3, 5)
  const maxR = between(rng, H * 0.28, H * 0.42)
  const sw = between(rng, 2.5, 4)
  const out: ArtData = []

  for (let i = rings; i >= 1; i--) {
    const r = (i / rings) * maxR
    out.push({
      t: 'circle', cx, cy, r,
      fill: 'none',
      stroke: i === rings ? MIST : 'white',
      strokeWidth: i === rings ? sw * 1.6 : sw,
      opacity: (i / rings) * 0.38,
    })
  }

  const gap = maxR * 0.18
  const lineLen = maxR * between(rng, 0.72, 0.92)
  const dirs: [number, number][] = [[1, 0], [-1, 0], [0, 1], [0, -1]]
  for (const [dx, dy] of dirs) {
    out.push({
      t: 'path',
      d: `M ${(cx + dx * gap).toFixed(1)},${(cy + dy * gap).toFixed(1)} L ${(cx + dx * lineLen).toFixed(1)},${(cy + dy * lineLen).toFixed(1)}`,
      stroke: MIST, strokeWidth: sw * 1.4, opacity: 0.6,
    })
  }
  out.push({ t: 'circle', cx, cy, r: between(rng, 5, 9), fill: 'white', opacity: 0.9 })
  return out
}

// ─── MEMORY ───────────────────────────────────────────────────────────────────

// M0: dot grid with highlighted subset
function memoryGrid(rng: Rng): ArtData {
  const cols = pick(rng, 7, 10)
  const rows = pick(rng, 5, 7)
  const padX = between(rng, W * 0.1, W * 0.15)
  const padY = between(rng, H * 0.12, H * 0.18)
  const cw = (W - padX * 2) / (cols - 1)
  const ch = (H - padY * 2) / (rows - 1)
  const baseR = between(rng, 11, 16)
  const hiR = baseR * between(rng, 1.5, 2.0)
  const total = cols * rows
  const hiCount = pick(rng, 5, 10)

  const highlights = new Set<number>()
  while (highlights.size < hiCount) highlights.add(pick(rng, 0, total - 1))
  const hiArr = [...highlights]
  const mistIdx = hiArr[pick(rng, 0, hiArr.length - 1)]

  const out: ArtData = []
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const idx = row * cols + col
      const hi = highlights.has(idx)
      const mist = idx === mistIdx
      out.push({
        t: 'circle',
        cx: padX + col * cw,
        cy: padY + row * ch,
        r: hi ? hiR : baseR,
        fill: mist ? MIST : 'white',
        opacity: hi ? between(rng, 0.6, 0.85) : between(rng, 0.07, 0.16),
      })
    }
  }
  return out
}

// M1: chunked clusters — groups of dots with clear whitespace (chunking metaphor)
function memoryChunks(rng: Rng): ArtData {
  const groups = pick(rng, 3, 4)
  const perGroup = pick(rng, 5, 9)
  const gCols = Math.ceil(Math.sqrt(perGroup))
  const gRows = Math.ceil(perGroup / gCols)
  const dotR = between(rng, 9, 13)
  const dotSpacing = dotR * between(rng, 3.0, 4.2)
  const groupGap = dotSpacing * between(rng, 2.2, 3.2)
  const groupW = (gCols - 1) * dotSpacing
  const groupH = (gRows - 1) * dotSpacing
  const totalW = groups * groupW + (groups - 1) * groupGap
  const startX = (W - totalW) / 2
  const cy = H * 0.5
  const mistGroup = pick(rng, 0, groups - 1)
  const out: ArtData = []

  for (let g = 0; g < groups; g++) {
    const gx = startX + g * (groupW + groupGap)
    const mist = g === mistGroup
    for (let row = 0; row < gRows; row++) {
      for (let col = 0; col < gCols; col++) {
        if (row * gCols + col >= perGroup) break
        const x = gx + col * dotSpacing
        const y = cy - groupH / 2 + row * dotSpacing
        out.push({
          t: 'circle', cx: x, cy: y,
          r: mist ? dotR * 1.25 : dotR,
          fill: mist ? MIST : 'white',
          opacity: mist ? between(rng, 0.55, 0.72) : between(rng, 0.14, 0.26),
        })
      }
    }
  }
  return out
}

// M2: serial position — U-curve opacity (primacy + recency effect)
function memorySerial(rng: Rng): ArtData {
  const count = pick(rng, 9, 15)
  const baseR = between(rng, 9, 14)
  const padX = W * between(rng, 0.10, 0.14)
  const cy = H * between(rng, 0.44, 0.56)
  const spacing = (W - padX * 2) / (count - 1)
  const mistIdx = pick(rng, 1, count - 2)
  const out: ArtData = []

  for (let i = 0; i < count; i++) {
    const x = padX + i * spacing
    const t = i / (count - 1)
    const curve = 4 * (t - 0.5) * (t - 0.5) // parabola: 1 at edges, 0 at center
    const op = 0.08 + curve * 0.68
    const r = baseR * (0.65 + curve * 0.5)
    const mist = i === mistIdx
    out.push({
      t: 'circle', cx: x, cy,
      r: mist ? r * 1.4 : r,
      fill: mist ? MIST : 'white',
      opacity: mist ? 0.72 : op,
    })
  }
  return out
}

// ─── DECISIONS ────────────────────────────────────────────────────────────────

// D0: two-level bezier branching tree
function decisionsBranch(rng: Rng): ArtData {
  const rootX = W * between(rng, 0.14, 0.22)
  const rootY = H * 0.5
  const midX = W * between(rng, 0.44, 0.54)
  const endX = W * between(rng, 0.76, 0.86)
  const branches = pick(rng, 2, 4)
  const spread = H * between(rng, 0.58, 0.76)
  const swRoot = between(rng, 4, 6)
  const mistB = pick(rng, 0, branches - 1)
  const out: ArtData = []

  out.push({ t: 'circle', cx: rootX, cy: rootY, r: between(rng, 10, 15), fill: 'white', opacity: 0.8 })

  for (let i = 0; i < branches; i++) {
    const t = branches === 1 ? 0.5 : i / (branches - 1)
    const midY = rootY - spread / 2 + spread * t
    const mist = i === mistB
    const op = mist ? 0.78 : between(rng, 0.22, 0.52)
    const color = mist ? MIST : 'white'

    const cp1x = rootX + (midX - rootX) * 0.45
    const cp2x = midX - (midX - rootX) * 0.35
    out.push({
      t: 'path',
      d: `M ${rootX.toFixed(1)},${rootY.toFixed(1)} C ${cp1x.toFixed(1)},${rootY.toFixed(1)} ${cp2x.toFixed(1)},${midY.toFixed(1)} ${midX.toFixed(1)},${midY.toFixed(1)}`,
      stroke: color, strokeWidth: swRoot, opacity: op,
    })
    out.push({ t: 'circle', cx: midX, cy: midY, r: between(rng, 5, 8), fill: color, opacity: op * 0.85 })

    const subs = pick(rng, 1, 2)
    const subSpread = (spread / branches) * between(rng, 0.55, 0.85)
    for (let j = 0; j < subs; j++) {
      const st = subs === 1 ? 0.5 : j / (subs - 1)
      const endY = midY - subSpread / 2 + subSpread * st
      const scp1x = midX + (endX - midX) * 0.4
      const scp2x = endX - (endX - midX) * 0.3
      out.push({
        t: 'path',
        d: `M ${midX.toFixed(1)},${midY.toFixed(1)} C ${scp1x.toFixed(1)},${midY.toFixed(1)} ${scp2x.toFixed(1)},${endY.toFixed(1)} ${endX.toFixed(1)},${endY.toFixed(1)}`,
        stroke: color, strokeWidth: swRoot * 0.55, opacity: op * 0.65,
      })
      out.push({ t: 'circle', cx: endX, cy: endY, r: between(rng, 3.5, 6), fill: color, opacity: op * 0.6 })
    }
  }
  return out
}

// D1: convergence — multiple paths meeting at a single outcome
function decisionsConverge(rng: Rng): ArtData {
  const startX = W * between(rng, 0.12, 0.20)
  const endX = W * between(rng, 0.78, 0.86)
  const endY = H * 0.5
  const paths = pick(rng, 3, 5)
  const spread = H * between(rng, 0.58, 0.76)
  const sw = between(rng, 4, 6)
  const mistP = pick(rng, 0, paths - 1)
  const out: ArtData = []

  out.push({ t: 'circle', cx: endX, cy: endY, r: between(rng, 12, 18), fill: 'white', opacity: 0.88 })

  for (let i = 0; i < paths; i++) {
    const t = paths === 1 ? 0.5 : i / (paths - 1)
    const startY = H / 2 - spread / 2 + spread * t
    const mist = i === mistP
    const op = mist ? 0.78 : between(rng, 0.20, 0.45)
    const color = mist ? MIST : 'white'

    const cp1x = startX + (endX - startX) * 0.35
    const cp2x = endX - (endX - startX) * 0.35
    out.push({
      t: 'path',
      d: `M ${startX.toFixed(1)},${startY.toFixed(1)} C ${cp1x.toFixed(1)},${startY.toFixed(1)} ${cp2x.toFixed(1)},${endY.toFixed(1)} ${endX.toFixed(1)},${endY.toFixed(1)}`,
      stroke: color, strokeWidth: sw, opacity: op,
    })
    out.push({ t: 'circle', cx: startX, cy: startY, r: between(rng, 5, 8), fill: color, opacity: op * 0.85 })
  }
  return out
}

// D2: comparison matrix — options vs criteria grid
function decisionsMatrix(rng: Rng): ArtData {
  const cols = pick(rng, 3, 4)
  const rows = pick(rng, 3, 5)
  const cellW = W * between(rng, 0.13, 0.18)
  const cellH = H * between(rng, 0.13, 0.18)
  const totalW = cols * cellW
  const totalH = rows * cellH
  const startX = (W - totalW) / 2
  const startY = (H - totalH) / 2 + cellH * 0.4
  const chosenCol = pick(rng, 0, cols - 1)
  const dotR = between(rng, 5, 9)
  const out: ArtData = []

  // Column header bars
  for (let c = 0; c < cols; c++) {
    const cx = startX + c * cellW + cellW / 2
    const chosen = c === chosenCol
    out.push({
      t: 'rect',
      x: cx - cellW * 0.32,
      y: startY - cellH * 0.7,
      w: cellW * 0.64,
      h: cellH * 0.3,
      fill: chosen ? MIST : 'white',
      opacity: chosen ? 0.52 : 0.12,
      rx: 3,
    })
  }

  // Dot matrix
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const cx = startX + c * cellW + cellW / 2
      const cy = startY + r * cellH + cellH / 2
      const chosen = c === chosenCol
      out.push({
        t: 'circle', cx, cy,
        r: chosen ? dotR * 1.5 : dotR,
        fill: chosen ? MIST : 'white',
        opacity: chosen ? between(rng, 0.52, 0.70) : between(rng, 0.10, 0.22),
      })
    }
  }
  return out
}

// ─── USABILITY ────────────────────────────────────────────────────────────────

// U0: wireframe rectangles suggesting a UI layout
function usabilityWireframe(rng: Rng): ArtData {
  const px = W * between(rng, 0.07, 0.12)
  const py = H * between(rng, 0.08, 0.12)
  const iw = W - px * 2
  const ih = H - py * 2
  const sw = between(rng, 3, 5)
  const out: ArtData = []

  const hh = ih * between(rng, 0.12, 0.18)
  out.push({ t: 'rect', x: px, y: py, w: iw, h: hh, fill: 'white', opacity: between(rng, 0.35, 0.55), rx: 4 })

  const cols = pick(rng, 2, 3)
  const cy0 = py + hh + ih * 0.04
  const colH = ih - hh - ih * 0.04
  const gap = iw * between(rng, 0.02, 0.04)
  const cw = (iw - gap * (cols - 1)) / cols
  const mistCol = pick(rng, 0, cols - 1)

  for (let c = 0; c < cols; c++) {
    const cx = px + c * (cw + gap)
    const mist = c === mistCol
    const stroke = mist ? MIST : 'white'
    const op = mist ? between(rng, 0.3, 0.45) : between(rng, 0.12, 0.25)
    const rh = colH * between(rng, 0.6, 0.9)
    out.push({ t: 'rect', x: cx, y: cy0, w: cw, h: rh, fill: mist ? MIST : 'none', stroke, strokeWidth: sw, opacity: op, rx: 4 })
    const lc = pick(rng, 2, 4)
    for (let l = 0; l < lc; l++) {
      const ly = cy0 + rh * (0.2 + l * 0.65 / lc)
      const lw = cw * between(rng, 0.45, 0.8)
      out.push({ t: 'rect', x: cx + (cw - lw) / 2, y: ly, w: lw, h: between(rng, 3, 5), fill: stroke, opacity: op * 0.75, rx: 2 })
    }
  }
  return out
}

// U1: flow nodes — connected steps with directional arrows (user journey)
function usabilityFlow(rng: Rng): ArtData {
  const count = pick(rng, 4, 6)
  const padX = W * between(rng, 0.08, 0.12)
  const cy = H * between(rng, 0.44, 0.56)
  const spacing = (W - padX * 2) / (count - 1)
  const nodeR = between(rng, 16, 24)
  const sw = between(rng, 3, 5)
  const mistIdx = pick(rng, 1, count - 2)
  const out: ArtData = []

  for (let i = 0; i < count - 1; i++) {
    const x1 = padX + i * spacing + nodeR
    const x2 = padX + (i + 1) * spacing - nodeR
    const midX = (x1 + x2) / 2
    const mist = i === mistIdx || i + 1 === mistIdx
    const op = mist ? 0.55 : 0.18
    const color = mist ? MIST : 'white'
    out.push({
      t: 'path',
      d: `M ${x1.toFixed(1)},${cy.toFixed(1)} L ${x2.toFixed(1)},${cy.toFixed(1)}`,
      stroke: color, strokeWidth: sw, opacity: op,
    })
    const aSize = sw * 2.2
    out.push({
      t: 'poly',
      pts: [[midX - aSize, cy - aSize], [midX, cy], [midX - aSize, cy + aSize]],
      stroke: color, strokeWidth: sw * 0.7, opacity: op,
    })
  }

  for (let i = 0; i < count; i++) {
    const x = padX + i * spacing
    const mist = i === mistIdx
    out.push({
      t: 'circle', cx: x, cy,
      r: mist ? nodeR * 1.3 : nodeR,
      fill: mist ? MIST : 'none',
      stroke: mist ? undefined : 'white',
      strokeWidth: sw,
      opacity: mist ? 0.65 : between(rng, 0.15, 0.28),
    })
    if (!mist) {
      out.push({ t: 'circle', cx: x, cy, r: nodeR * 0.28, fill: 'white', opacity: between(rng, 0.20, 0.38) })
    }
  }
  return out
}

// U2: stacked cards — layered panels suggesting depth and hierarchy
function usabilityStack(rng: Rng): ArtData {
  const layers = pick(rng, 3, 5)
  const baseW = W * between(rng, 0.52, 0.66)
  const baseH = H * between(rng, 0.46, 0.62)
  const startX = (W - baseW) / 2
  const startY = (H - baseH) / 2
  const offsetX = between(rng, 10, 18)
  const offsetY = between(rng, 14, 22)
  const sw = between(rng, 3, 5)
  const out: ArtData = []

  for (let i = layers - 1; i >= 0; i--) {
    const dx = (layers - 1 - i) * offsetX * 0.6
    const dy = -(layers - 1 - i) * offsetY * 0.8
    const scale = 1 - i * 0.035
    const w = baseW * scale
    const h = baseH * scale
    const x = startX + (baseW - w) / 2 + dx
    const y = startY + (baseH - h) / 2 + dy
    const isTop = i === 0
    out.push({
      t: 'rect', x, y, w, h,
      fill: 'none',
      stroke: isTop ? MIST : 'white',
      strokeWidth: isTop ? sw * 1.5 : sw,
      opacity: isTop ? 0.62 : 0.06 + i * 0.08,
      rx: 6,
    })
    if (isTop) {
      const lc = pick(rng, 2, 3)
      for (let l = 0; l < lc; l++) {
        const lx = x + w * 0.12
        const ly = y + h * (0.22 + l * 0.5 / lc)
        const lw = w * between(rng, 0.42, 0.68)
        out.push({ t: 'rect', x: lx, y: ly, w: lw, h: between(rng, 3, 5), fill: MIST, opacity: 0.35, rx: 2 })
      }
    }
  }
  return out
}

// ─── PERSUASION ───────────────────────────────────────────────────────────────

// P0: nested chevrons pointing right
function persuasionChevrons(rng: Rng): ArtData {
  const count = pick(rng, 5, 9)
  const cx = W * between(rng, 0.42, 0.52)
  const cy = H * 0.5
  const maxH = H * between(rng, 0.55, 0.72)
  const depth = W * between(rng, 0.08, 0.14)
  const sw = between(rng, 3, 5)
  const mistIdx = pick(rng, 1, count - 2)
  const out: ArtData = []

  for (let i = count; i >= 0; i--) {
    const t = i / count
    const hw = (maxH / 2) * t
    if (hw < 5) continue
    const mist = i === mistIdx
    const op = 0.05 + t * t * 0.55
    out.push({
      t: 'poly',
      pts: [[cx - depth / 2, cy - hw], [cx + depth / 2, cy], [cx - depth / 2, cy + hw]],
      stroke: mist ? MIST : 'white',
      strokeWidth: mist ? sw * 1.8 : sw,
      opacity: op,
    })
  }
  return out
}

// P1: funnel — stages narrowing toward conversion
function persuasionFunnel(rng: Rng): ArtData {
  const stages = pick(rng, 4, 7)
  const maxW = W * between(rng, 0.62, 0.78)
  const minW = W * between(rng, 0.04, 0.10)
  const stageH = H * between(rng, 0.09, 0.13)
  const gap = H * 0.018
  const totalH = stages * (stageH + gap)
  const startY = (H - totalH) / 2
  const centerX = W / 2
  const mistStage = pick(rng, 1, stages - 2)
  const out: ArtData = []

  for (let i = 0; i < stages; i++) {
    const t = i / (stages - 1)
    const w = maxW - (maxW - minW) * t
    const y = startY + i * (stageH + gap)
    const mist = i === mistStage
    out.push({
      t: 'rect',
      x: centerX - w / 2,
      y, w, h: stageH,
      fill: mist ? MIST : 'white',
      opacity: mist ? 0.55 : 0.08 + (1 - t) * 0.33,
      rx: 3,
    })
  }
  return out
}

// P2: ascending steps — staircase toward a goal
function persuasionSteps(rng: Rng): ArtData {
  const count = pick(rng, 4, 7)
  const padX = W * between(rng, 0.08, 0.12)
  const maxH = H * between(rng, 0.58, 0.74)
  const availW = W - padX * 2
  const stepW = (availW / count) * between(rng, 0.62, 0.78)
  const gapX = availW / count - stepW
  const baseY = H * between(rng, 0.72, 0.80)
  const mistIdx = pick(rng, count - 2, count - 1)
  const out: ArtData = []

  for (let i = 0; i < count; i++) {
    const t = (i + 1) / count
    const h = maxH * t
    const x = padX + i * (stepW + gapX)
    const y = baseY - h
    const mist = i === mistIdx
    out.push({
      t: 'rect', x, y, w: stepW, h,
      fill: mist ? MIST : 'white',
      opacity: mist ? 0.60 : between(rng, 0.07, 0.20),
      rx: 3,
    })
  }
  return out
}

// ─── VISUAL ───────────────────────────────────────────────────────────────────

// V0: overlapping geometric shapes (Bauhaus/constructivist)
function visualBauhaus(rng: Rng): ArtData {
  const count = pick(rng, 4, 7)
  const cx = W * between(rng, 0.42, 0.58)
  const cy = H * between(rng, 0.42, 0.58)
  const maxR = Math.min(W, H) * between(rng, 0.32, 0.45)
  const mistIdx = pick(rng, 0, count - 1)
  const out: ArtData = []

  for (let i = 0; i < count; i++) {
    const t = i / (count - 1)
    const r = maxR * (1 - t * 0.55)
    const ox = (rng() - 0.5) * r * 0.9
    const oy = (rng() - 0.5) * r * 0.9
    const mist = i === mistIdx
    const fill = mist ? MIST : 'white'
    const op = 0.06 + t * 0.48
    if (rng() > 0.5) {
      out.push({ t: 'rect', x: cx + ox - r, y: cy + oy - r, w: r * 2, h: r * 2, fill, opacity: op, rx: 4, rotate: between(rng, -35, 35), rcx: cx + ox, rcy: cy + oy })
    } else {
      out.push({ t: 'circle', cx: cx + ox, cy: cy + oy, r, fill, opacity: op })
    }
  }
  return out
}

// V1: grid with outlier — uniform pattern broken by one contrasting element
function visualContrast(rng: Rng): ArtData {
  const cols = pick(rng, 5, 8)
  const rows = pick(rng, 3, 5)
  const padX = W * between(rng, 0.09, 0.14)
  const padY = H * between(rng, 0.12, 0.18)
  const cellW = (W - padX * 2) / cols
  const cellH = (H - padY * 2) / rows
  const total = cols * rows
  const mistIdx = pick(rng, 0, total - 1)
  const baseR = Math.min(cellW, cellH) * between(rng, 0.20, 0.30)
  const out: ArtData = []

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const idx = row * cols + col
      const cx = padX + col * cellW + cellW / 2
      const cy = padY + row * cellH + cellH / 2
      const mist = idx === mistIdx

      if (mist) {
        out.push({
          t: 'rect',
          x: cx - baseR * 1.5,
          y: cy - baseR * 1.5,
          w: baseR * 3,
          h: baseR * 3,
          fill: MIST,
          opacity: 0.68,
          rx: 4,
          rotate: between(rng, 20, 50),
          rcx: cx,
          rcy: cy,
        })
      } else {
        out.push({ t: 'circle', cx, cy, r: baseR, fill: 'white', opacity: between(rng, 0.08, 0.17) })
      }
    }
  }
  return out
}

// V2: wave composition — sine waves of varying frequency and phase
function visualWaves(rng: Rng): ArtData {
  const waveCount = pick(rng, 4, 7)
  const mistWave = pick(rng, 1, waveCount - 2)
  const sw = between(rng, 2.5, 4.5)
  const points = 64
  const out: ArtData = []

  for (let w = 0; w < waveCount; w++) {
    const t = w / (waveCount - 1)
    const baseY = H * (0.14 + t * 0.72)
    const amplitude = H * between(rng, 0.05, 0.12)
    const freq = between(rng, 1.5, 3.5)
    const phase = between(rng, 0, Math.PI * 2)
    const mist = w === mistWave
    const op = 0.08 + t * 0.48

    const pts: [number, number][] = []
    for (let p = 0; p <= points; p++) {
      const x = (p / points) * W
      const y = baseY + Math.sin((p / points) * Math.PI * 2 * freq + phase) * amplitude
      pts.push([x, y])
    }
    out.push({
      t: 'poly', pts,
      stroke: mist ? MIST : 'white',
      strokeWidth: mist ? sw * 1.9 : sw,
      opacity: mist ? 0.72 : op,
    })
  }
  return out
}

// ─── Public API ───────────────────────────────────────────────────────────────

export function getArtData(slug: string, category: string): ArtData {
  const rng = makeRng(hash(slug))
  const sub = pick(rng, 0, 2)

  switch (category) {
    case 'attention':
      return sub === 1 ? attentionRadial(rng)
           : sub === 2 ? attentionCrosshair(rng)
           : attentionRings(rng)

    case 'memory':
      return sub === 1 ? memoryChunks(rng)
           : sub === 2 ? memorySerial(rng)
           : memoryGrid(rng)

    case 'decisions':
      return sub === 1 ? decisionsConverge(rng)
           : sub === 2 ? decisionsMatrix(rng)
           : decisionsBranch(rng)

    case 'usability':
      return sub === 1 ? usabilityFlow(rng)
           : sub === 2 ? usabilityStack(rng)
           : usabilityWireframe(rng)

    case 'persuasion':
      return sub === 1 ? persuasionFunnel(rng)
           : sub === 2 ? persuasionSteps(rng)
           : persuasionChevrons(rng)

    case 'visual':
      return sub === 1 ? visualContrast(rng)
           : sub === 2 ? visualWaves(rng)
           : visualBauhaus(rng)

    default:
      return attentionRings(makeRng(hash(slug)))
  }
}

// Serialise to an SVG string (used for OG images)
export function artToSvgString(slug: string, category: string): string {
  const data = getArtData(slug, category)
  const inner = data.map(s => {
    if (s.t === 'circle') {
      const stroke = s.stroke ? ` stroke="${s.stroke}" stroke-width="${s.strokeWidth ?? 2}"` : ''
      return `<circle cx="${s.cx.toFixed(1)}" cy="${s.cy.toFixed(1)}" r="${s.r.toFixed(1)}" fill="${s.fill}"${stroke} opacity="${s.opacity.toFixed(3)}"/>`
    }
    if (s.t === 'rect') {
      const stroke = s.stroke ? ` stroke="${s.stroke}" stroke-width="${s.strokeWidth ?? 2}"` : ''
      const rx = s.rx ? ` rx="${s.rx}"` : ''
      const transform = s.rotate != null ? ` transform="rotate(${s.rotate.toFixed(1)} ${s.rcx!.toFixed(1)} ${s.rcy!.toFixed(1)})"` : ''
      return `<rect x="${s.x.toFixed(1)}" y="${s.y.toFixed(1)}" width="${s.w.toFixed(1)}" height="${s.h.toFixed(1)}" fill="${s.fill}"${stroke}${rx}${transform} opacity="${s.opacity.toFixed(3)}"/>`
    }
    if (s.t === 'poly') {
      const pts = s.pts.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(' ')
      return `<polyline points="${pts}" fill="none" stroke="${s.stroke}" stroke-width="${s.strokeWidth.toFixed(1)}" stroke-linecap="round" stroke-linejoin="round" opacity="${s.opacity.toFixed(3)}"/>`
    }
    if (s.t === 'path') {
      return `<path d="${s.d}" fill="none" stroke="${s.stroke}" stroke-width="${s.strokeWidth.toFixed(1)}" stroke-linecap="round" stroke-linejoin="round" opacity="${s.opacity.toFixed(3)}"/>`
    }
    return ''
  }).join('')

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}"><rect width="${W}" height="${H}" fill="#06080E"/>${inner}</svg>`
}
