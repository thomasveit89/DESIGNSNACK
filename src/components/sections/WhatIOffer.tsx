'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

export function WhatIOffer() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} id="about-offer" className="px-[84px] py-[120px]">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-[80px]">

        {/* Left: Heading */}
        <motion.div
          className="lg:w-[55%]"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            className="font-black text-white"
            style={{ fontSize: '64px', letterSpacing: '-1.92px', lineHeight: '72px' }}
          >
            You hire a designer.{' '}
            <br />
            You get a{' '}
            <span className="text-[#768B9B]">builder</span>
            {' '}too.
          </h2>
        </motion.div>

        {/* Right: Body */}
        <motion.div
          className="lg:w-[45%]"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <div className="font-medium text-[#e5e5e5] space-y-6" style={{ fontSize: '32px' }}>
            <p>
              I work embedded in product teams or on defined projects. Either way, you get someone
              who designs and builds — not an agency handoff.
            </p>
            <p>
              I have 17+ years of UX experience and a background in frontend development. I design
              with implementation in mind, and I build what I design. AI accelerates both sides —
              faster iteration, faster delivery, without cutting corners on craft.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
