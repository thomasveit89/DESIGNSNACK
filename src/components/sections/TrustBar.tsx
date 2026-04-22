'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'

const logos = [
  { name: 'Finnova', src: '/assets/finnova.svg' },
  { name: '3AP', src: '/assets/3ap.svg' },
  { name: 'AMBOSS', src: '/assets/amboss.svg' },
  { name: 'Netlive', src: '/assets/netlive.svg' },
  { name: 'AXA', src: '/assets/axa.svg' },
]

function LogoCard({ logo }: { logo: (typeof logos)[0] }) {
  return (
    <div className="flex-none mx-[25px]">
      <img
        src={logo.src}
        alt={logo.name}
        width={280}
        height={150}
      />
    </div>
  )
}

export function TrustBar() {
  return (
    <section className="py-16 overflow-hidden">
      <div className="relative flex">
        <motion.div
          className="flex items-center"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
        >
          {/* Two sets for seamless loop */}
          {[...logos, ...logos].map((logo, i) => (
            <LogoCard key={`${logo.name}-${i}`} logo={logo} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
