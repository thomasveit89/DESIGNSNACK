'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden py-16 md:py-24 lg:py-[160px]"
      style={{ background: '#0d1117' }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ opacity: 0.15 }}
      >
        <img
          src="https://www.figma.com/api/mcp/asset/9291dbd8-f567-47f8-885e-95d8f8670932"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Background decorative lines */}
      <div
        className="absolute pointer-events-none"
        aria-hidden="true"
        style={{
          left: '-448px',
          top: '-300px',
          width: '2568px',
          height: '2291px',
          transform: 'rotate(66.24deg)',
          opacity: 0.08,
        }}
      >
        <img
          src="https://www.figma.com/api/mcp/asset/519cb358-b2a5-4ac3-a850-1246f9ff4cad"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      <div className="relative z-10 px-5 md:px-10 lg:px-[84px] flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 lg:gap-20">

        {/* Left: headline */}
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-black text-white"
          style={{ fontSize: 'clamp(32px, 4.5vw, 64px)', letterSpacing: '-0.03em', lineHeight: 1.1 }}
        >
          Let&apos;s build<br />something.
        </motion.h2>

        {/* Right: email + subtext */}
        <div className="flex flex-col items-start lg:items-end gap-3">
          <motion.a
            href="mailto:tommy@designsnack.ch"
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="font-black text-white lg:text-right hover:text-steel-mist transition-colors block"
            style={{ fontSize: 'clamp(20px, 6.5vw, 104px)', letterSpacing: '-0.03em', lineHeight: 1.05 }}
          >
            tommy@designsnack.ch
          </motion.a>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
            className="font-medium text-muted"
            style={{ fontSize: 'clamp(14px, 1.2vw, 20px)' }}
          >
            Usually reply within a day.
          </motion.p>
        </div>

      </div>
    </section>
  )
}
