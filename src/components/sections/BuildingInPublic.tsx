'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { feedItems, type FeedItem } from '@/data/feed'
import type { CommitData } from '@/app/api/github/commits/route'

// ─── Helpers ─────────────────────────────────────────────────────────────────

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime()
  const m = Math.floor(diff / 60000)
  if (m < 60) return `${m}m ago`
  const h = Math.floor(m / 60)
  if (h < 24) return `${h}h ago`
  const d = Math.floor(h / 24)
  return `${d}d ago`
}

// ─── Media card ──────────────────────────────────────────────────────────────

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

// ─── Commit card ─────────────────────────────────────────────────────────────

function CommitCardSkeleton({ index }: { index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: (index % 3) * 0.06 }}
      className="break-inside-avoid mb-4 rounded-[10px] bg-[#1a1f2e] p-5"
    >
      <div className="flex items-center gap-2 mb-5">
        <div className="w-2 h-2 rounded-full bg-white/10 animate-pulse" />
        <div className="h-3 w-32 rounded bg-white/10 animate-pulse" />
      </div>
      <div className="space-y-2 mb-6">
        <div className="h-4 w-full rounded bg-white/10 animate-pulse" />
        <div className="h-4 w-3/4 rounded bg-white/10 animate-pulse" />
      </div>
      <div className="flex items-center gap-3">
        <div className="h-3 w-14 rounded bg-white/10 animate-pulse" />
        <div className="h-3 w-12 rounded bg-white/10 animate-pulse" />
      </div>
    </motion.div>
  )
}

function CommitCardItem({ commit, index }: { commit: CommitData; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const repoShort = commit.repo.split('/')[1] ?? commit.repo

  return (
    <motion.a
      ref={ref}
      href={commit.repoUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: (index % 3) * 0.06 }}
      className="block break-inside-avoid mb-4 rounded-[10px] bg-[#1a1f2e] py-10 px-5 hover:bg-[#1f2638] transition-colors duration-200 group"
    >
      {/* repo row */}
      <div className="flex items-center gap-2 mb-4">
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3fb950] opacity-60" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3fb950]" />
        </span>
        <span className="font-mono text-[13px] text-white/40 tracking-wide truncate">
          {commit.repo}
        </span>
      </div>

      {/* commit message */}
      <p className="text-white/90 text-[16px] leading-snug font-medium mb-5 line-clamp-3">
        {commit.message}
      </p>

      {/* footer */}
      <div className="flex items-center gap-2 text-white/30 font-mono text-[12px]">
        <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
          <path d="M15.698 7.287 8.712.302a1.03 1.03 0 0 0-1.457 0l-1.45 1.45 1.84 1.84a1.223 1.223 0 0 1 1.55 1.56l1.773 1.774a1.224 1.224 0 0 1 1.267 2.025 1.226 1.226 0 0 1-2.002-1.317L8.58 5.888v4.261a1.226 1.226 0 1 1-1.006-.036V5.86a1.226 1.226 0 0 1-.647-1.611L5.093 2.413.302 7.203a1.03 1.03 0 0 0 0 1.457l6.986 6.986a1.03 1.03 0 0 0 1.456 0l6.953-6.953a1.031 1.031 0 0 0 0-1.406z" />
        </svg>
        <span>{repoShort}</span>
        <span className="text-white/15">·</span>
        <span className="font-mono text-[12px] text-white/30 bg-white/5 px-1.5 py-0.5 rounded">
          {commit.sha}
        </span>
        <span className="text-white/15">·</span>
        <span>{timeAgo(commit.date)}</span>
      </div>
    </motion.a>
  )
}

// ─── Section ─────────────────────────────────────────────────────────────────

// Positions in the interleaved list where commit cards appear (0-indexed)
const COMMIT_AT = [2, 4, 6] as const

type GridSlot =
  | { kind: 'feed'; item: FeedItem; feedIndex: number }
  | { kind: 'commit'; commitIndex: number }

function buildSlots(): GridSlot[] {
  const slots: GridSlot[] = []
  const commitSet = new Set<number>(COMMIT_AT)
  let feedCursor = 0
  let commitIndex = 0

  for (let i = 0; i < feedItems.length + COMMIT_AT.length; i++) {
    if (commitSet.has(i)) {
      slots.push({ kind: 'commit', commitIndex: commitIndex++ })
    } else if (feedCursor < feedItems.length) {
      slots.push({ kind: 'feed', item: feedItems[feedCursor], feedIndex: feedCursor })
      feedCursor++
    }
  }

  return slots
}

const SLOTS = buildSlots()

export function BuildingInPublic() {
  const headingRef = useRef(null)
  const inView = useInView(headingRef, { once: true, margin: '-80px' })

  const [commits, setCommits] = useState<CommitData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/github/commits')
      .then(r => r.json())
      .then(data => {
        setCommits(data.commits ?? [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  return (
    <section className="px-5 py-16 md:px-10 md:py-20 lg:px-[84px] lg:py-[120px]">
      {/* Heading */}
      <motion.div
        ref={headingRef}
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

      {/* Masonry grid */}
      <div
        className="columns-1 sm:columns-2 lg:columns-3"
        style={{ columnGap: '16px' }}
      >
        {SLOTS.map((slot, i) => {
          if (slot.kind === 'feed') {
            return <FeedCard key={slot.item.id} item={slot.item} index={slot.feedIndex} />
          }

          // commit slot
          const ci = slot.commitIndex
          if (loading) {
            return <CommitCardSkeleton key={`commit-skeleton-${ci}`} index={i} />
          }
          const commit = commits[ci]
          if (!commit) return null
          return <CommitCardItem key={commit.sha} commit={commit} index={i} />
        })}
      </div>
    </section>
  )
}
