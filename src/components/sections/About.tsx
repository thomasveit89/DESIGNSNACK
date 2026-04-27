'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="px-5 pt-16 pb-0 md:px-10 md:pt-20 md:pb-0 lg:px-[84px] lg:pt-[120px]">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-[80px] items-start">

        {/* Left: Copy */}
        <motion.div
          className="lg:w-[55%]"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            className="font-black text-white mb-10"
            style={{ fontSize: 'clamp(32px, 4.5vw, 64px)', letterSpacing: '-0.03em', lineHeight: 1.1 }}
          >
            Hey, I&apos;m Tommy
          </h2>

          <div
            className="font-medium text-muted space-y-6 leading-snug"
            style={{ fontSize: 'clamp(17px, 2vw, 32px)' }}
          >
            <p>
              I started as a frontend developer. Then I crossed into UX and UI design – not the
              typical direction – and spent the next 17 years working on complex digital products
              for banks, insurance companies, and healthcare organisations. The kind of work where
              getting the details wrong actually matters.
            </p>
            <p>
              I never stopped writing code. Not as a job requirement – as something I couldn&apos;t
              let go of. I understand how architectures fit together, what&apos;s expensive before
              anyone builds it, where the edge cases live. AI has made that combination sharper: I
              design at full depth and build at full speed.
            </p>
            <p>
              At some point &ldquo;UX Designer&rdquo; stopped feeling like the right label. Design
              Engineer fits better.
            </p>
            <p>
              When I&apos;m not designing or building, I&apos;m travelling – 40 countries and
              counting – coaching football, or foil surfing.
            </p>
          </div>
        </motion.div>

        {/* Right: Photo — self-end so the bottom of the image sits flush on the footer */}
        <motion.div
          className="lg:w-[45%] lg:self-end"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
        >
          <div className="relative rounded-t-[16px] rounded-b-none overflow-hidden aspect-[4/5]">
            <img
              src="/assets/tommy.png"
              alt="Thomas Veit"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
