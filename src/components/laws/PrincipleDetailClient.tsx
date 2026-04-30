'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  TYPE_LABELS,
  type PrincipleWithSlug,
  type PrincipleType,
} from '@/lib/principles-types'
import { PrincipleArt } from './PrincipleArt'
import { PrincipleCard } from './PrincipleCard'

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
      return 'bg-[#0d1e2e] text-[#7ab3d0] border-[#1a3a52]'
    case 'cognitive_bias':
      return 'bg-[#15102a] text-[#a890d0] border-[#2a1e50]'
    case 'heuristic':
      return 'bg-[#0d1e16] text-[#72b494] border-[#1a3a28]'
  }
}

export function PrincipleDetailClient({
  principle,
  nextPrinciple,
  similarPrinciples,
}: {
  principle: PrincipleWithSlug
  nextPrinciple: PrincipleWithSlug | null
  similarPrinciples: PrincipleWithSlug[]
}) {
  return (
    <div className="min-h-screen bg-[#06080E] text-white font-sans">
      {/* Back nav */}
      <div className="px-5 py-6 md:px-10 md:py-8 lg:px-[84px] lg:py-[52px]">
        <Link
          href="/laws-and-patterns"
          className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.12em] text-steel-mist hover:text-white transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M9 11L5 7L9 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Laws & Patterns
        </Link>
      </div>

      {/* Hero */}
      <section className="px-5 pt-4 pb-16 md:px-10 md:pt-6 md:pb-20 lg:px-[84px] lg:pt-8 lg:pb-24">
        {/* Badge */}
        <motion.div {...fadeUp(0)} className="flex flex-wrap gap-2 mb-6">
          <span
            className={`inline-block px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] rounded-full border ${typeBadgeClass(principle.type)}`}
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
        <motion.div {...fadeUp(0.22)} className="w-full rounded-[16px] overflow-hidden">
          <PrincipleArt
            slug={principle.slug}
            category={principle.category}
            className="w-full aspect-[16/7]"
          />
        </motion.div>
      </section>

      {/* Body */}
      <div className="px-5 pb-24 md:px-10 md:pb-32 lg:px-[84px] lg:pb-40">

        {/* Definition */}
        <motion.section {...fadeInView} className="mb-12 md:mb-16">
          <h2 className="text-[13px] font-semibold uppercase tracking-[0.12em] text-steel-mist mb-5">
            Definition
          </h2>
          <p className="text-white/70 leading-[1.65] max-w-[68ch]" style={{ fontSize: 'clamp(17px, 1.5vw, 22px)' }}>
            {principle.definition}
          </p>
        </motion.section>

        {/* Do / Don't */}
        {(principle.do.length > 0 || principle.dont.length > 0) && (
          <motion.section {...fadeInView} className="mb-12 md:mb-16">
            <div className="grid md:grid-cols-2 gap-10 md:gap-16">
              {principle.do.length > 0 && (
                <div>
                  <h2 className="text-[13px] font-semibold uppercase tracking-[0.12em] text-[#72b494] mb-5">
                    Do
                  </h2>
                  <ul className="space-y-4">
                    {principle.do.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[17px] text-white/70 leading-[1.6]">
                        <span className="text-[#72b494] mt-[3px] shrink-0">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                            <path d="M2.5 8.5L6 12L13.5 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {principle.dont.length > 0 && (
                <div className="md:border-l md:border-white/[0.06] md:pl-12">
                  <h2 className="text-[13px] font-semibold uppercase tracking-[0.12em] text-[#d47a7a] mb-5">
                    Avoid
                  </h2>
                  <ul className="space-y-4">
                    {principle.dont.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[17px] text-white/70 leading-[1.6]">
                        <span className="text-[#d47a7a] mt-[3px] shrink-0">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                            <path d="M4 4L12 12M12 4L4 12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.section>
        )}

        {/* When to apply */}
        {principle.appliesWhen.length > 0 && (
          <motion.section {...fadeInView} className="mb-12 md:mb-16">
            <h2 className="text-[13px] font-semibold uppercase tracking-[0.12em] text-steel-mist mb-5">
              When to apply
            </h2>
            <ul className="space-y-3">
              {principle.appliesWhen.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[17px] text-white/70 leading-[1.6]">
                  <span className="text-steel-mist mt-[4px] shrink-0">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M4 3L9 7L4 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span>{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                </li>
              ))}
            </ul>
          </motion.section>
        )}

        {/* Tags */}
        {principle.tags.length > 0 && (
          <motion.section {...fadeInView} className="mb-12 md:mb-16">
            <h2 className="text-[13px] font-semibold uppercase tracking-[0.12em] text-steel-mist mb-5">
              Related topics
            </h2>
            <div className="flex flex-wrap gap-2">
              {principle.tags.map((tag, i) => (
                <Link
                  key={i}
                  href={`/laws-and-patterns?tag=${encodeURIComponent(tag)}`}
                  className="px-3 py-1.5 rounded-full border border-white/8 bg-white/[0.03] text-white/40 text-[13px] font-medium tracking-[0.04em] hover:border-white/20 hover:text-white/70 transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </motion.section>
        )}

        {/* Similar principles */}
        {similarPrinciples.length > 0 && (
          <motion.section {...fadeInView} className="pt-8 border-t border-white/8">
            <h2 className="text-[13px] font-semibold uppercase tracking-[0.12em] text-steel-mist mb-8">
              Similar principles
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {similarPrinciples.map((p) => (
                <PrincipleCard key={p.slug} principle={p} />
              ))}
            </div>
          </motion.section>
        )}

        {/* iOS App CTA */}
        <motion.div {...fadeInView} className="pt-8 border-t border-white/8">
          <p className="text-white/40 text-[16px] mb-5">Have this and 100+ more in your pocket.</p>
          <a
            href="https://apps.apple.com/us/app/designsnack-laws-patterns/id6754067995"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full border border-white/15 text-white/70 text-[15px] font-semibold hover:border-white/30 hover:text-white transition-colors"
          >
            <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
            </svg>
            Download on the App Store
          </a>
        </motion.div>
      </div>

      {/* Next principle */}
      {nextPrinciple && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="border-t border-white/8"
        >
          <Link
            href={`/laws-and-patterns/${nextPrinciple.slug}`}
            className="group flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-5 py-12 md:px-10 md:py-16 lg:px-[84px] lg:py-20 hover:bg-white/[0.02] transition-colors"
          >
            <div>
              <span className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-steel-mist mb-2">
                Next principle
              </span>
              <span
                className="font-black text-white group-hover:text-steel-mist transition-colors leading-tight block"
                style={{ fontSize: 'clamp(28px, 5vw, 72px)', letterSpacing: '-0.03em' }}
              >
                {nextPrinciple.title}
              </span>
            </div>
            <span className="text-steel-mist text-[32px] md:text-[48px] group-hover:translate-x-2 transition-transform inline-block">
              →
            </span>
          </Link>
        </motion.div>
      )}
    </div>
  )
}
