'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

const ease = [0.22, 1, 0.36, 1] as const

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease, delay: i * 0.12 },
  }),
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden px-5 pt-[120px] pb-16 md:px-10 md:pt-[160px] md:pb-20 lg:pl-[280px] lg:pr-[84px] lg:pt-[200px] lg:pb-[120px]">

      {/* Headline */}
      <div className="relative z-10">
        <motion.h1
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-black text-white leading-none"
          style={{ fontSize: 'clamp(44px, 9.5vw, 140px)', letterSpacing: '-0.05em', lineHeight: 0.86 }}
        >
          I design it.
        </motion.h1>
        <motion.p
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-black text-white"
          style={{ fontSize: 'clamp(44px, 9.5vw, 140px)', letterSpacing: '-0.05em', lineHeight: 0.86, marginTop: '0.12em' }}
        >
          I develop it.
        </motion.p>

        {/* Subline */}
        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-medium text-muted mt-10 lg:mt-14 max-w-[864px]"
          style={{ fontSize: 'clamp(17px, 2vw, 32px)' }}
        >
          Senior Design Engineer based in Switzerland.
          <br />
          17+ years of UX depth, frontend roots, and AI in the workflow.
          <br />I embed in your team and ship what I design.
        </motion.p>

        {/* CTA */}
        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-12"
        >
          <Button href="mailto:tommy@designsnack.ch">
            Let&apos;s chat →
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
