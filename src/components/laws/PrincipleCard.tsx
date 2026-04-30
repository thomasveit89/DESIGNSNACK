import Link from 'next/link'
import type { PrincipleWithSlug, PrincipleType } from '@/lib/principles-types'
import { TYPE_LABELS } from '@/lib/principles-types'
import { PrincipleArt } from './PrincipleArt'

function typeBadge(type: PrincipleType) {
  switch (type) {
    case 'ux_law':
      return 'bg-sky-950/60 text-sky-400 border-sky-800/40'
    case 'cognitive_bias':
      return 'bg-purple-950/60 text-purple-400 border-purple-800/40'
    case 'heuristic':
      return 'bg-emerald-950/60 text-emerald-400 border-emerald-800/40'
  }
}

export function PrincipleCard({ principle }: { principle: PrincipleWithSlug }) {
  return (
    <Link
      href={`/laws-and-patterns/${principle.slug}`}
      className="group flex flex-col rounded-xl border border-white/8 bg-white/[0.025] hover:bg-white/[0.05] hover:border-white/15 transition-all duration-200 overflow-hidden"
    >
      {/* Generative art thumbnail */}
      <div className="relative w-full aspect-[8/5] overflow-hidden">
        <PrincipleArt
          slug={principle.slug}
          category={principle.category}
          className="w-full h-full"
        />
      </div>

      <div className="flex flex-col gap-4 p-6">
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className={`inline-block px-2.5 py-1 text-[14px] font-semibold uppercase tracking-[0.12em] rounded-full border ${typeBadge(principle.type)}`}
          >
            {TYPE_LABELS[principle.type]}
          </span>
        </div>

        <div>
          <h3 className="font-extrabold text-[18px] text-white leading-snug mb-2 group-hover:text-steel-mist transition-colors">
            {principle.title}
          </h3>
          <p className="text-white/50 leading-[1.55] text-[18px]">
            {principle.oneLiner}
          </p>
        </div>
      </div>
    </Link>
  )
}
