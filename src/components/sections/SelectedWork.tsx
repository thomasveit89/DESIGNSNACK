'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { Button } from '@/components/ui/Button'

const projects = [
  {
    id: 'joyo',
    slug: '/work/joyo',
    title: 'Joyo',
    description:
      'Designed and built an AI-powered SaaS platform for personalised gift experiences — from concept to production.',
    tag: 'Self-initiated · 2024',
    bg: '#fafaf9',
    dark: false,
    image: 'https://www.figma.com/api/mcp/asset/bc0e1842-c65f-497e-b265-78d8756448e7',
  },
  {
    id: 'finnova',
    slug: '/work/finnova',
    title: 'Core Banking Platform',
    description:
      "One year embedded as senior design partner on one of Switzerland's leading core banking platforms.",
    tag: 'Embedded · 3 years',
    bg: '#0e0e10',
    dark: true,
    image: 'https://www.figma.com/api/mcp/asset/23305b17-50d2-4ba6-b3f4-5ae6ab759605',
  },
  {
    id: 'laws-and-patterns',
    slug: '/work/laws-and-patterns',
    title: 'Laws & Patterns',
    description:
      'Designed and built a reference tool for 100+ UX laws and cognitive biases — iOS app and web.',
    tag: 'Self-initiated · 2024',
    bg: '#0d0d14',
    dark: true,
    image: null,
  },
]

type Project = (typeof projects)[0]

function WorkCard({
  project,
  index,
  total,
  scrollYProgress,
}: {
  project: Project
  index: number
  total: number
  scrollYProgress: MotionValue<number>
}) {
  const seg = 1 / total

  // Slide in from below for cards after the first
  const yInputs = index === 0 ? [0, 1] : [(index - 1) * seg, index * seg]
  const yOutputs = index === 0 ? ['0%', '0%'] : ['100%', '0%']
  const y = useTransform(scrollYProgress, yInputs, yOutputs, { clamp: true })

  // Scale down when the next card arrives (not for the last card)
  const scaleInputs =
    index < total - 1 ? [index * seg, (index + 1) * seg] : [0, 1]
  const scaleOutputs =
    index < total - 1 ? [1, 0.93 - (total - 2 - index) * 0.015] : [1, 1]
  const scale = useTransform(scrollYProgress, scaleInputs, scaleOutputs, { clamp: true })

  const textColor = project.dark ? '#ffffff' : '#111827'
  const mutedColor = project.dark ? '#e5e5e5' : '#374151'
  const tagBg = project.dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'
  const footerBg = project.dark ? '#0a0a0f' : '#f0efee'
  const btnBg = project.dark ? '#ffffff' : '#111827'
  const btnText = project.dark ? '#111827' : '#ffffff'

  return (
    <motion.div
      style={{
        position: 'sticky',
        top: 0,
        zIndex: index + 1,
        y,
        scale,
        transformOrigin: 'top center',
      }}
      className="w-full h-screen flex items-start pt-[80px] pb-[40px] px-[84px]"
    >
      <div
        className="w-full rounded-[12px] overflow-hidden flex flex-col"
        style={{
          background: project.bg,
          height: 'calc(100vh - 120px)',
        }}
      >
        {/* Screenshot area */}
        <div className="flex-1 relative overflow-hidden">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          ) : (
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ background: project.bg }}
            >
              <span
                className="font-black opacity-10"
                style={{ fontSize: '64px', color: textColor }}
              >
                {project.title}
              </span>
            </div>
          )}
        </div>

        {/* Footer bar */}
        <div
          className="flex-none flex items-center justify-between px-14 py-10"
          style={{ background: footerBg, minHeight: '180px' }}
        >
          <div className="flex flex-col gap-3 max-w-[600px]">
            <span
              className="text-[13px] font-semibold uppercase tracking-[0.12em] px-3 py-1 rounded-full w-fit"
              style={{ background: tagBg, color: mutedColor }}
            >
              {project.tag}
            </span>
            <p
              className="font-medium leading-snug"
              style={{ fontSize: '28px', color: mutedColor }}
            >
              {project.description}
            </p>
          </div>

          <a
            href={project.slug}
            className="flex-none flex items-center gap-2 rounded-full font-bold px-8 py-5 transition-opacity hover:opacity-80 text-[24px]"
            style={{ background: btnBg, color: btnText }}
          >
            View project →
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export function SelectedWork() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section id="work">
      {/* Section heading */}
      <div className="px-[84px] py-[80px] flex justify-end">
        <h2
          className="font-black text-white text-right"
          style={{ fontSize: '64px', letterSpacing: '-1.92px' }}
        >
          Selected work
        </h2>
      </div>

      {/* Stacking cards container */}
      <div
        ref={containerRef}
        style={{ height: `${projects.length * 100}vh` }}
        className="relative"
      >
        {projects.map((project, i) => (
          <WorkCard
            key={project.id}
            project={project}
            index={i}
            total={projects.length}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  )
}
