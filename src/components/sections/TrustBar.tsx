'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const logos = [
  { name: 'Finnova', src: '/assets/clients/finnova.svg' },
  { name: '3AP', src: '/assets/clients/3ap.svg' },
  { name: 'AMBOSS', src: '/assets/clients/amboss.svg' },
  { name: 'Netlive', src: '/assets/clients/netlive.svg' },
  { name: 'AXA', src: '/assets/clients/axa.svg' },
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
  const [duration, setDuration] = useState(20)

  useEffect(() => {
    const update = () => setDuration(window.innerWidth < 768 ? 6 : 20)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return (
    <section className="py-16 overflow-hidden">
      <div className="relative flex">
        <motion.div
          key={duration}
          className="flex items-center"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration, ease: 'linear', repeat: Infinity }}
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
