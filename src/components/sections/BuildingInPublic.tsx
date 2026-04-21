'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { feedItems } from '@/data/feed'

function FeedCard({ item, index }: { item: (typeof feedItems)[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: (index % 3) * 0.06 }}
      className="break-inside-avoid mb-4 rounded-[10px] overflow-hidden bg-[#1a1f2e] group cursor-pointer"
    >
      <div className="relative overflow-hidden">
        <img
          src={item.src}
          alt={item.title}
          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
    </motion.div>
  )
}

export function BuildingInPublic() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="px-5 py-16 md:px-10 md:py-20 lg:px-[84px] lg:py-[120px]">
      {/* Heading */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mb-16 max-w-[662px]"
      >
        <h2
          className="font-black text-white"
          style={{ fontSize: 'clamp(32px, 4.5vw, 64px)', letterSpacing: '-0.03em', lineHeight: 1.1 }}
        >
          Work in progress.
          <br />
          Always.
        </h2>
        <p
          className="font-medium text-muted mt-8"
          style={{ fontSize: 'clamp(17px, 2vw, 32px)' }}
        >
          A live feed of videos, shipped products, and things I&apos;m making.
        </p>
      </motion.div>

      {/* CSS masonry grid */}
      <div
        className="columns-1 sm:columns-2 lg:columns-3"
        style={{ columnGap: '16px' }}
      >
        {feedItems.map((item, i) => (
          <FeedCard key={item.id} item={item} index={i} />
        ))}
      </div>
    </section>
  )
}
