import type { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
import { fetchAllPrinciplesSafe } from '@/lib/principles'
import { PrinciplesGrid } from '@/components/laws/PrinciplesGrid'

export const metadata: Metadata = {
  title: 'Laws & Patterns — DESIGNSNACK',
  description:
    'A reference tool for UX designers, PMs, and developers. 100+ UX laws, cognitive biases, and design heuristics.',
  openGraph: {
    title: 'Laws & Patterns — DESIGNSNACK',
    description:
      'A reference tool for UX designers, PMs, and developers. 100+ UX laws, cognitive biases, and design heuristics.',
    url: 'https://designsnack.ch/laws-and-patterns',
  },
  alternates: {
    canonical: 'https://designsnack.ch/laws-and-patterns',
  },
}

export default async function LawsAndPatternsPage() {
  const principles = await fetchAllPrinciplesSafe()

  return (
    <div className="min-h-screen bg-[#06080E] text-white font-sans">
      {/* Back nav */}
      <div className="px-5 py-6 md:px-10 lg:px-[84px]">
        <Link
          href="/"
          className="text-[16px] font-semibold uppercase tracking-[0.12em] text-steel-mist hover:text-white transition-colors"
        >
          ← designsnack.ch
        </Link>
      </div>

      {/* Hero */}
      <section className="px-5 pt-8 pb-16 md:px-10 md:pt-12 md:pb-20 lg:px-[84px] lg:pt-16 lg:pb-24">
        <p className="text-[14px] font-semibold uppercase tracking-[0.12em] text-steel-mist mb-6">
          Reference tool
        </p>
        <h1
          className="font-black text-white leading-[0.86] mb-8"
          style={{ fontSize: 'clamp(52px, 9vw, 140px)', letterSpacing: '-0.05em' }}
        >
          Laws & Patterns
        </h1>
        <p
          className="font-medium text-white/60 leading-[1.55] max-w-2xl mb-8"
          style={{ fontSize: 'clamp(18px, 2vw, 26px)' }}
        >
          100+ UX laws, cognitive biases, and design heuristics — collected and explained for designers, PMs, and developers.
        </p>

        {/* iOS App CTA */}
        <a
          href="https://apps.apple.com/us/app/designsnack-laws-patterns/id6754067995"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white/[0.07] border border-white/10 text-white/80 text-[18px] font-semibold hover:bg-white/[0.12] hover:text-white transition-all"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
          </svg>
          Download iOS App
        </a>
      </section>

      {/* Principles grid */}
      <section className="px-5 pb-24 md:px-10 md:pb-32 lg:px-[84px] lg:pb-40">
        <Suspense>
          <PrinciplesGrid principles={principles} />
        </Suspense>
      </section>
    </div>
  )
}
