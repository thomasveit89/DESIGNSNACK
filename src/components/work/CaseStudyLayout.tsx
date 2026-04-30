'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
})

type Meta = {
  role: string
  duration: string
  year: string
  type: string
}

type NextProject = {
  slug: string
  title: string
}

export function CaseStudyLayout({
  title,
  oneLiner,
  meta,
  heroImage,
  heroVideo,
  nextProject,
  children,
}: {
  title: string
  oneLiner: string
  meta: Meta
  heroImage?: string | null
  heroVideo?: string | null
  nextProject: NextProject | null
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#06080E] text-white font-sans">
      {/* Nav */}
      <div className="px-5 py-6 md:px-10 lg:px-[84px]">
        <Link
          href="/#work"
          className="text-[13px] font-semibold uppercase tracking-[0.1em] text-steel-mist hover:text-white transition-colors"
        >
          ← All work
        </Link>
      </div>

      {/* Hero */}
      <section className="px-5 pt-8 pb-16 md:px-10 md:pt-12 md:pb-24 lg:px-[84px] lg:pt-16 lg:pb-32">
        <motion.div {...fadeUp(0)} className="flex flex-wrap gap-2 mb-8 md:mb-12">
          {[meta.role, meta.duration, meta.year, meta.type].map((tag) => (
            <span
              key={tag}
              className="text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.12em] px-3 py-1.5 rounded-full border border-white/10 text-steel-mist"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.h1
          {...fadeUp(0.08)}
          className="font-black text-white leading-[0.95] mb-6 md:mb-8"
          style={{ fontSize: 'clamp(52px, 9vw, 140px)', letterSpacing: '-0.04em' }}
        >
          {title}
        </motion.h1>

        <motion.p
          {...fadeUp(0.16)}
          className="font-medium text-white/50 leading-relaxed max-w-2xl"
          style={{ fontSize: 'clamp(17px, 2vw, 26px)' }}
        >
          {oneLiner}
        </motion.p>

        {(heroVideo || heroImage) && (
          <motion.div
            {...fadeUp(0.28)}
            className="mt-12 md:mt-16 lg:mt-20 rounded-xl overflow-hidden w-full"
          >
            {heroVideo ? (
              <video
                src={heroVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full"
              />
            ) : (
              <img src={heroImage!} alt={title} className="w-full" />
            )}
          </motion.div>
        )}
      </section>

      {/* Body */}
      <div className="px-5 md:px-10 lg:px-[84px] pb-24 md:pb-32 lg:pb-40">
        {children}
      </div>

      {/* Next project */}
      {nextProject && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="border-t border-white/8"
        >
          <Link
            href={`/work/${nextProject.slug}`}
            className="group flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-5 py-12 md:px-10 md:py-16 lg:px-[84px] lg:py-20 hover:bg-white/[0.02] transition-colors"
          >
            <div>
              <span className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-steel-mist mb-2">
                Next project
              </span>
              <span
                className="font-black text-white group-hover:text-steel-mist transition-colors leading-tight block"
                style={{ fontSize: 'clamp(28px, 5vw, 72px)', letterSpacing: '-0.03em' }}
              >
                {nextProject.title}
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
