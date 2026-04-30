// Deterministic generative art for Laws & Patterns principles.
// Same slug always produces the same composition. No external dependencies.

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

export type ArtData = ArtShape[]

// ─── Patterns ─────────────────────────────────────────────────────────────────

// Attention: concentric rings from an off-center focal point
function attention(rng: Rng): ArtData {
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

// Memory: dot grid with highlighted subset
function memory(rng: Rng): ArtData {
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

// Decisions: branching polylines from a focal point
function decisions(rng: Rng): ArtData {
  const branches = pick(rng, 3, 6)
  const sx = W * between(rng, 0.15, 0.25)
  const sy = H * 0.5
  const ex = W * between(rng, 0.75, 0.85)
  const spread = H * between(rng, 0.65, 0.82)
  const sw = between(rng, 4, 7)
  const mistB = pick(rng, 0, branches - 1)
  const out: ArtData = []

  out.push({ t: 'circle', cx: sx, cy: sy, r: between(rng, 12, 18), fill: 'white', opacity: 0.75 })

  for (let i = 0; i < branches; i++) {
    const t = branches === 1 ? 0.5 : i / (branches - 1)
    const ey = sy - spread / 2 + spread * t
    const mx = sx + (ex - sx) * between(rng, 0.4, 0.6)
    const my = sy + (ey - sy) * between(rng, 0.3, 0.7)
    const mist = i === mistB
    const op = mist ? 0.72 : between(rng, 0.2, 0.5)
    out.push({ t: 'poly', pts: [[sx, sy], [mx, my], [ex, ey]], stroke: mist ? MIST : 'white', strokeWidth: sw, opacity: op })
    out.push({ t: 'circle', cx: ex, cy: ey, r: between(rng, 8, 13), fill: mist ? MIST : 'white', opacity: op * 0.9 })
  }
  return out
}

// Usability: wireframe rectangles suggesting a UI layout
function usability(rng: Rng): ArtData {
  const px = W * between(rng, 0.07, 0.12)
  const py = H * between(rng, 0.08, 0.12)
  const iw = W - px * 2
  const ih = H - py * 2
  const sw = between(rng, 3, 5)
  const out: ArtData = []

  // Header bar
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

// Persuasion: nested chevrons pointing right
function persuasion(rng: Rng): ArtData {
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

// Visual: overlapping geometric shapes (Bauhaus/constructivist)
function visual(rng: Rng): ArtData {
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

// ─── Public API ───────────────────────────────────────────────────────────────

export function getArtData(slug: string, category: string): ArtData {
  const rng = makeRng(hash(slug))
  switch (category) {
    case 'attention':  return attention(rng)
    case 'memory':     return memory(rng)
    case 'decisions':  return decisions(rng)
    case 'usability':  return usability(rng)
    case 'persuasion': return persuasion(rng)
    case 'visual':     return visual(rng)
    default:           return attention(makeRng(hash(slug)))
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
    return ''
  }).join('')

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}"><rect width="${W}" height="${H}" fill="#06080E"/>${inner}</svg>`
}
