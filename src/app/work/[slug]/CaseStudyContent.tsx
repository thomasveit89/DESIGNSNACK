'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import type { CaseStudy, Section } from '@/data/work'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
})

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' } as const,
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
})

export function CaseStudyContent({
  project,
  nextProject,
}: {
  project: CaseStudy
  nextProject: CaseStudy | null
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
          {[
            project.meta.role,
            project.meta.duration,
            project.meta.year,
            project.meta.type,
          ].map((tag) => (
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
          {project.title}
        </motion.h1>

        <motion.p
          {...fadeUp(0.16)}
          className="font-medium text-white/50 leading-relaxed max-w-2xl"
          style={{ fontSize: 'clamp(17px, 2vw, 26px)' }}
        >
          {project.oneLiner}
        </motion.p>

        {project.heroImage && (
          <motion.div
            {...fadeUp(0.28)}
            className="mt-12 md:mt-16 lg:mt-20 rounded-xl overflow-hidden w-full"
            style={{ height: 'clamp(260px, 50vw, 640px)' }}
          >
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
          </motion.div>
        )}
      </section>

      {/* Body */}
      <div className="px-5 md:px-10 lg:px-[84px] pb-24 md:pb-32 lg:pb-40">
        <div className="flex flex-col gap-16 md:gap-20 lg:gap-24">
          {project.sections.map((section, i) => (
            <SectionBlock key={i} section={section} index={i} />
          ))}
        </div>
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

function SectionBlock({ section, index }: { section: Section; index: number }) {
  if (section.type === 'intro') {
    return (
      <motion.p
        {...inView()}
        className="font-medium text-white/75 leading-relaxed max-w-[760px]"
        style={{ fontSize: 'clamp(17px, 1.8vw, 22px)' }}
      >
        {section.body}
      </motion.p>
    )
  }

  if (section.type === 'chapter') {
    return (
      <motion.div {...inView()} className="max-w-[860px]">
        <h2
          className="font-bold text-white leading-tight mb-4 md:mb-5"
          style={{ fontSize: 'clamp(20px, 2.4vw, 32px)', letterSpacing: '-0.02em' }}
        >
          {section.heading}
        </h2>
        <p
          className="font-medium text-white/65 leading-relaxed max-w-[720px]"
          style={{ fontSize: 'clamp(16px, 1.6vw, 20px)' }}
        >
          {section.body}
        </p>
        {section.image && (
          <div className="mt-8 md:mt-10 rounded-xl overflow-hidden">
            <img src={section.image} alt={section.heading} className="w-full" />
          </div>
        )}
      </motion.div>
    )
  }

  if (section.type === 'closing') {
    return (
      <motion.div {...inView()} className="border-t border-white/8 pt-10 md:pt-12">
        <p
          className="font-medium text-white/35 leading-relaxed max-w-[640px]"
          style={{ fontSize: 'clamp(14px, 1.4vw, 17px)' }}
        >
          {section.body}
        </p>
      </motion.div>
    )
  }

  return null
}
