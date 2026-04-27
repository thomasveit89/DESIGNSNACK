'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { feedItems, type FeedItem } from '@/data/feed'

function MediaContent({ item }: { item: FeedItem }) {
  if (item.type === 'video') {
    return (
      <video
        src={item.src}
        poster={item.poster}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-auto block"
      />
    )
  }

  if (item.type === 'youtube') {
    return (
      <div className="relative">
        <img
          src={`https://img.youtube.com/vi/${item.youtubeId}/maxresdefault.jpg`}
          alt={item.title}
          className="w-full h-auto block"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/30">
          <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="#111827">
              <path d="M5 3l11 6.5L5 16V3z" />
            </svg>
          </div>
        </div>
      </div>
    )
  }

  return (
    <img
      src={item.src}
      alt={item.title}
      className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.03]"
      loading="lazy"
    />
  )
}

function FeedCard({ item, index }: { item: FeedItem; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const card = (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: (index % 3) * 0.06 }}
      className="break-inside-avoid mb-4 rounded-[10px] overflow-hidden bg-[#1a1f2e] group cursor-pointer"
    >
      <div className="relative overflow-hidden">
        <MediaContent item={item} />
      </div>
    </motion.div>
  )

  const href = item.type === 'youtube'
    ? `https://www.youtube.com/watch?v=${item.youtubeId}`
    : item.href

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {card}
      </a>
    )
  }

  return card
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
          A feed of AI experiments, videos, shipped products, and things I&apos;m making.
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
