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
    <section className="px-[84px] py-[120px]">
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
          style={{ fontSize: '64px', letterSpacing: '-1.92px', lineHeight: '72px' }}
        >
          Work in progress.
          <br />
          Always.
        </h2>
        <p
          className="font-medium text-[#e5e5e5] mt-8"
          style={{ fontSize: '32px' }}
        >
          A live feed of videos, shipped products, and things I&apos;m making.
        </p>
      </motion.div>

      {/* CSS masonry grid */}
      <div
        style={{
          columns: '3',
          columnGap: '16px',
        }}
      >
        {feedItems.map((item, i) => (
          <FeedCard key={item.id} item={item} index={i} />
        ))}
      </div>
    </section>
  )
}
