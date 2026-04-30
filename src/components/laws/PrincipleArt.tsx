import { getArtData, type ArtShape } from '@/lib/generative-art'

function renderShape(s: ArtShape, i: number) {
  if (s.t === 'circle') {
    return (
      <circle
        key={i}
        cx={s.cx}
        cy={s.cy}
        r={s.r}
        fill={s.fill}
        stroke={s.stroke}
        strokeWidth={s.strokeWidth}
        opacity={s.opacity}
      />
    )
  }
  if (s.t === 'rect') {
    const transform = s.rotate != null
      ? `rotate(${s.rotate} ${s.rcx} ${s.rcy})`
      : undefined
    return (
      <rect
        key={i}
        x={s.x}
        y={s.y}
        width={s.w}
        height={s.h}
        fill={s.fill}
        stroke={s.stroke}
        strokeWidth={s.strokeWidth}
        rx={s.rx}
        transform={transform}
        opacity={s.opacity}
      />
    )
  }
  if (s.t === 'poly') {
    const pts = s.pts.map(([x, y]) => `${x},${y}`).join(' ')
    return (
      <polyline
        key={i}
        points={pts}
        fill="none"
        stroke={s.stroke}
        strokeWidth={s.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={s.opacity}
      />
    )
  }
  if (s.t === 'path') {
    return (
      <path
        key={i}
        d={s.d}
        fill="none"
        stroke={s.stroke}
        strokeWidth={s.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={s.opacity}
      />
    )
  }
  return null
}

interface PrincipleArtProps {
  slug: string
  category: string
  className?: string
}

export function PrincipleArt({ slug, category, className }: PrincipleArtProps) {
  const data = getArtData(slug, category)
  return (
    <svg
      viewBox="0 0 960 600"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="960" height="600" fill="#06080E" />
      {data.map((s, i) => renderShape(s, i))}
    </svg>
  )
}
