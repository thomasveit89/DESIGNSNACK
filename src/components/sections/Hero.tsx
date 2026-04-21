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
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden px-[84px] pt-[200px] pb-[120px]">

      {/* Decorative background lines — from Figma */}
      <div
        className="absolute pointer-events-none select-none"
        style={{ top: '-208px', left: 'calc(33.33% + 122px)', width: '885px', height: '1007px', transform: 'rotate(94.66deg)', opacity: 0.5 }}
        aria-hidden="true"
      >
        <img
          src="https://www.figma.com/api/mcp/asset/efcd963d-143f-49fa-b5f9-88145bd8666f"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
      <div
        className="absolute pointer-events-none select-none"
        style={{ top: '105px', left: '-221px', width: '1573px', height: '1206px', opacity: 0.35 }}
        aria-hidden="true"
      >
        <img
          src="https://www.figma.com/api/mcp/asset/75055c21-a858-4882-b5e8-f3265ce70aca"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      {/* Headline */}
      <div className="relative z-10">
        <motion.h1
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-black text-white leading-none"
          style={{ fontSize: '140px', letterSpacing: '-7px', lineHeight: '120px' }}
        >
          I design it.
        </motion.h1>
        <motion.p
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-black text-white"
          style={{ fontSize: '140px', letterSpacing: '-7px', lineHeight: '120px', marginTop: '16px' }}
        >
          I develop it.
        </motion.p>

        {/* Subline */}
        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-medium text-[#e5e5e5] mt-14 max-w-[864px]"
          style={{ fontSize: '32px' }}
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
          <Button href="mailto:tommy@designsnack.ch" className="text-[32px]">
            Let&apos;s chat →
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
