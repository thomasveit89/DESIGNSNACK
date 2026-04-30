'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  TYPE_LABELS,
  type PrincipleWithSlug,
  type PrincipleType,
} from '@/lib/principles-types'
import { PrincipleArt } from './PrincipleArt'

const ease = [0.22, 1, 0.36, 1] as const

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease },
})

const fadeInView = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.5, ease },
}

function typeBadgeClass(type: PrincipleType) {
  switch (type) {
    case 'ux_law':
      return 'bg-sky-950/60 text-sky-400 border-sky-800/40'
    case 'cognitive_bias':
      return 'bg-purple-950/60 text-purple-400 border-purple-800/40'
    case 'heuristic':
      return 'bg-emerald-950/60 text-emerald-400 border-emerald-800/40'
  }
}

export function PrincipleDetailClient({ principle }: { principle: PrincipleWithSlug }) {
  return (
    <div className="min-h-screen bg-[#06080E] text-white font-sans">
      {/* Back nav */}
      <div className="px-5 py-6 md:px-10 lg:px-[84px]">
        <Link
          href="/laws-and-patterns"
          className="text-[16px] font-semibold uppercase tracking-[0.12em] text-steel-mist hover:text-white transition-colors"
        >
          ← Laws & Patterns
        </Link>
      </div>

      {/* Hero */}
      <section className="px-5 pt-8 pb-16 md:px-10 md:pt-12 md:pb-20 lg:px-[84px] lg:pt-16 lg:pb-24">
        {/* Badges */}
        <motion.div {...fadeUp(0)} className="flex flex-wrap gap-2 mb-8">
          <span
            className={`inline-block px-3 py-1.5 text-[14px] font-semibold uppercase tracking-[0.12em] rounded-full border ${typeBadgeClass(principle.type)}`}
          >
            {TYPE_LABELS[principle.type]}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          {...fadeUp(0.06)}
          className="font-black text-white leading-[0.86] mb-8"
          style={{ fontSize: 'clamp(44px, 8vw, 120px)', letterSpacing: '-0.05em' }}
        >
          {principle.title}
        </motion.h1>

        {/* One-liner */}
        <motion.p
          {...fadeUp(0.14)}
          className="font-medium text-white/60 leading-[1.55] max-w-2xl mb-12"
          style={{ fontSize: 'clamp(18px, 2vw, 26px)' }}
        >
          {principle.oneLiner}
        </motion.p>

        {/* Generative art */}
        <motion.div {...fadeUp(0.22)} className="w-full rounded-2xl overflow-hidden">
          <PrincipleArt
            slug={principle.slug}
            category={principle.category}
            className="w-full aspect-[8/5]"
          />
        </motion.div>
      </section>

      {/* Body */}
      <div className="px-5 pb-24 md:px-10 md:pb-32 lg:px-[84px] lg:pb-40 max-w-[900px]">
        {/* Definition */}
        <motion.section {...fadeInView} className="mb-12 md:mb-16">
          <h2 className="text-[14px] font-semibold uppercase tracking-[0.12em] text-steel-mist mb-4">
            What is it?
          </h2>
          <p className="text-white/70 leading-[1.65]" style={{ fontSize: 'clamp(18px, 1.5vw, 24px)' }}>
            {principle.definition}
          </p>
        </motion.section>

        {/* Do / Don't */}
        {(principle.do.length > 0 || principle.dont.length > 0) && (
          <motion.section {...fadeInView} className="mb-12 md:mb-16 grid md:grid-cols-2 gap-6">
            {principle.do.length > 0 && (
              <div className="p-6 rounded-xl bg-emerald-950/20 border border-emerald-800/20">
                <h2 className="text-[14px] font-semibold uppercase tracking-[0.12em] text-emerald-400 mb-4">
                  What to do
                </h2>
                <ul className="space-y-3">
                  {principle.do.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[18px] text-white/70 leading-[1.6]">
                      <span className="text-emerald-500 mt-1 shrink-0">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2.5 8.5L6 12L13.5 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {principle.dont.length > 0 && (
              <div className="p-6 rounded-xl bg-red-950/20 border border-red-800/20">
                <h2 className="text-[14px] font-semibold uppercase tracking-[0.12em] text-red-400 mb-4">
                  What to avoid
                </h2>
                <ul className="space-y-3">
                  {principle.dont.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[18px] text-white/70 leading-[1.6]">
                      <span className="text-red-500 mt-1 shrink-0">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 4L12 12M12 4L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.section>
        )}

        {/* When to apply */}
        {principle.appliesWhen.length > 0 && (
          <motion.section {...fadeInView} className="mb-12 md:mb-16">
            <h2 className="text-[14px] font-semibold uppercase tracking-[0.12em] text-steel-mist mb-4">
              When to apply
            </h2>
            <ul className="space-y-2 list-disc list-inside">
              {principle.appliesWhen.map((item, i) => (
                <li key={i} className="text-[18px] text-white/70 leading-[1.6] capitalize">
                  {item}
                </li>
              ))}
            </ul>
          </motion.section>
        )}

        {/* Tags */}
        {principle.tags.length > 0 && (
          <motion.section {...fadeInView} className="mb-12 md:mb-16">
            <h2 className="text-[14px] font-semibold uppercase tracking-[0.12em] text-steel-mist mb-4">
              Related topics
            </h2>
            <div className="flex flex-wrap gap-2">
              {principle.tags.map((tag, i) => (
                <Link
                  key={i}
                  href={`/laws-and-patterns?tag=${encodeURIComponent(tag)}`}
                  className="px-3 py-1.5 rounded-full border border-white/8 bg-white/[0.03] text-white/40 text-[16px] font-medium hover:border-white/20 hover:text-white/70 transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </motion.section>
        )}


        {/* iOS App CTA */}
        <motion.div {...fadeInView} className="pt-8 border-t border-white/8">
          <p className="text-white/40 text-[18px] mb-4">Have this and 100+ more in your pocket.</p>
          <a
            href="https://apps.apple.com/us/app/designsnack-laws-patterns/id6754067995"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white/[0.07] border border-white/10 text-white/80 text-[18px] font-semibold hover:bg-white/[0.12] hover:text-white transition-all"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
            </svg>
            Download iOS App
          </a>
        </motion.div>
      </div>
    </div>
  )
}
