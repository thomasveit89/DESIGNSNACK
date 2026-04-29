'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

export function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="contact"
      ref={ref}
      className="px-5 py-16 md:px-10 md:py-24 lg:px-[84px] lg:py-[160px]"
      style={{ backgroundColor: '#06080E' }}
    >
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 lg:gap-20">

        {/* Left: headline */}
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="font-black text-white flex-none"
          style={{ fontSize: 'clamp(32px, 4.5vw, 64px)', letterSpacing: '-0.03em', lineHeight: 1.1 }}
        >
          Let&apos;s build<br />something.
        </motion.h2>

        {/* Right: email + meta */}
        <div className="flex flex-col items-start lg:items-end gap-5">
          <motion.a
            href="mailto:tommy@designsnack.ch"
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="font-black text-white lg:text-right transition-colors hover:text-steel-mist"
            style={{ fontSize: 'clamp(20px, 5.5vw, 80px)', letterSpacing: '-0.03em', lineHeight: 1.05 }}
          >
            tommy@designsnack.ch
          </motion.a>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.3 }}
            className="flex items-center gap-5"
          >
            {/* Availability */}
            <div className="flex items-center gap-2">
              <div className="relative flex-none w-[7px] h-[7px]">
                {/* Radiating ring 1 */}
                <motion.span
                  className="absolute inset-0 rounded-full"
                  animate={{ scale: [1, 2.5, 3], opacity: [0, 0.25, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeOut' }}
                  style={{ backgroundColor: '#4ade80' }}
                />
                {/* Radiating ring 2 — staggered */}
                <motion.span
                  className="absolute inset-0 rounded-full"
                  animate={{ scale: [1, 2.5, 3], opacity: [0, 0.45, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeOut', delay: 1.5 }}
                  style={{ backgroundColor: '#4ade80' }}
                />
                {/* Core dot */}
                <span className="absolute inset-0 rounded-full" style={{ backgroundColor: '#4ade80' }} />
              </div>
              <span className="font-medium text-muted" style={{ fontSize: '16px' }}>
                Available for new projects
              </span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
