'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'

const logos = [
  { name: 'Finnova', src: '/assets/finnova.svg', width: 215, height: 56 },
  { name: '3AP', src: '/assets/3ap.svg', width: 136, height: 60 },
  { name: 'AMBOSS', src: '/assets/amboss.svg', width: 200, height: 49 },
  { name: 'Netlive', src: '/assets/netlive.svg', width: 226, height: 76 },
  { name: 'AXA', src: '/assets/axa.svg', width: 102, height: 102 },
]

function LogoCard({ logo }: { logo: (typeof logos)[0] }) {
  return (
    <div className="flex-none flex items-center justify-center bg-black rounded-[18px] w-[278px] h-[144px] mx-[25px]">
      <img
        src={logo.src}
        alt={logo.name}
        style={{ width: logo.width, height: logo.height }}
        className="object-contain"
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
          transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
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
