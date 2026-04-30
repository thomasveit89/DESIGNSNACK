'use client'

import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { PrincipleCard } from './PrincipleCard'
import { TYPE_LABELS, type PrincipleType, type PrincipleWithSlug } from '@/lib/principles-types'

const ease = [0.22, 1, 0.36, 1] as const

const TYPE_FILTERS: Array<{ key: PrincipleType | 'all'; label: string }> = [
  { key: 'all', label: 'All' },
  { key: 'ux_law', label: TYPE_LABELS.ux_law },
  { key: 'cognitive_bias', label: TYPE_LABELS.cognitive_bias },
  { key: 'heuristic', label: TYPE_LABELS.heuristic },
]

export function PrinciplesGrid({ principles }: { principles: PrincipleWithSlug[] }) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const tagParam = searchParams.get('tag')

  const [active, setActive] = useState<PrincipleType | 'all'>('all')

  // Reset type filter when a tag filter is applied
  useEffect(() => {
    if (tagParam) setActive('all')
  }, [tagParam])

  const filtered = tagParam
    ? principles.filter((p) => p.tags.some((t) => t.toLowerCase() === tagParam.toLowerCase()))
    : active === 'all'
    ? principles
    : principles.filter((p) => p.type === active)

  return (
    <>
      {/* Tag filter active state */}
      {tagParam ? (
        <div className="flex items-center gap-3 mb-10 md:mb-12">
          <span className="text-[16px] text-white/50">Filtered by tag:</span>
          <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-[16px] font-semibold">
            {tagParam}
            <button
              onClick={() => router.push('/laws-and-patterns')}
              className="ml-1 text-black/50 hover:text-black transition-colors leading-none"
              aria-label="Clear filter"
            >
              ×
            </button>
          </span>
          <span className="text-[16px] text-white/30">{filtered.length} results</span>
        </div>
      ) : (
        /* Type filter chips */
        <div className="flex flex-wrap gap-2 mb-10 md:mb-12">
          {TYPE_FILTERS.map(({ key, label }) => {
            const count = key === 'all' ? principles.length : principles.filter((p) => p.type === key).length
            const isActive = active === key
            return (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`px-4 py-2 rounded-full text-[16px] font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-white text-black'
                    : 'bg-white/[0.06] text-white/50 hover:bg-white/10 hover:text-white/80 border border-white/8'
                }`}
              >
                {label}
                <span className={`ml-1.5 ${isActive ? 'text-black/50' : 'text-white/30'}`}>
                  {count}
                </span>
              </button>
            )
          })}
        </div>
      )}

      {/* Grid */}
      <motion.div
        key={tagParam ?? active}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {filtered.length > 0 ? (
          filtered.map((principle, i) => (
            <motion.div
              key={principle.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease, delay: Math.min(i * 0.03, 0.3) }}
            >
              <PrincipleCard principle={principle} />
            </motion.div>
          ))
        ) : (
          <p className="text-white/30 text-[18px] col-span-full py-12">No principles found for this tag.</p>
        )}
      </motion.div>
    </>
  )
}
