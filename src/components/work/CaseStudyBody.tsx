'use client'

import { motion } from 'framer-motion'

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' } as const,
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
})

export function CaseStudyBody({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-16 md:gap-20 lg:gap-24">
      {children}
    </div>
  )
}

export function Intro({ children }: { children: React.ReactNode }) {
  return (
    <motion.p
      {...inView()}
      className="font-medium text-white/75 leading-relaxed max-w-[760px]"
      style={{ fontSize: 'clamp(17px, 1.8vw, 22px)' }}
    >
      {children}
    </motion.p>
  )
}

export function Chapter({
  heading,
  children,
  image,
}: {
  heading: string
  children: React.ReactNode
  image?: string
}) {
  return (
    <motion.div {...inView()} className="max-w-[860px]">
      <h2
        className="font-bold text-white leading-tight mb-4 md:mb-5"
        style={{ fontSize: 'clamp(20px, 2.4vw, 32px)', letterSpacing: '-0.02em' }}
      >
        {heading}
      </h2>
      <p
        className="font-medium text-white/65 leading-relaxed max-w-[720px]"
        style={{ fontSize: 'clamp(16px, 1.6vw, 20px)' }}
      >
        {children}
      </p>
      {image && (
        <div className="mt-8 md:mt-10 rounded-xl overflow-hidden">
          <img src={image} alt={heading} className="w-full" />
        </div>
      )}
    </motion.div>
  )
}

export function Closing({ children }: { children: React.ReactNode }) {
  return (
    <motion.div {...inView()} className="border-t border-white/8 pt-10 md:pt-12">
      <p
        className="font-medium text-white/35 leading-relaxed max-w-[720px]"
        style={{ fontSize: 'clamp(16px, 1.6vw, 20px)' }}
      >
        {children}
      </p>
    </motion.div>
  )
}
