'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'

const logos = [
  {
    name: 'Finnova',
    src: 'https://www.figma.com/api/mcp/asset/71320a29-865a-4fcc-be15-aca73d4059af',
    width: 215,
    height: 56,
  },
  {
    name: '3AP',
    src: 'https://www.figma.com/api/mcp/asset/20349272-1fca-421f-ab86-39f5515df345',
    width: 136,
    height: 60,
  },
  {
    name: 'AMBOSS',
    src: 'https://www.figma.com/api/mcp/asset/ce57a08d-5674-4da1-b16a-a40d4793bb09',
    width: 200,
    height: 49,
  },
  {
    name: 'Netlive',
    src: 'https://www.figma.com/api/mcp/asset/933e97fa-a1e9-4081-bba2-551b8f85c0bf',
    width: 226,
    height: 76,
  },
  {
    name: 'AXA',
    src: 'https://www.figma.com/api/mcp/asset/fbd4840a-99db-48a7-9c23-eabf14f823ed',
    width: 102,
    height: 102,
  },
]

function LogoCard({ logo }: { logo: (typeof logos)[0] }) {
  return (
    <div className="flex-none flex items-center justify-center bg-[#111827] rounded-[18px] w-[278px] h-[144px] mx-[25px]">
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
