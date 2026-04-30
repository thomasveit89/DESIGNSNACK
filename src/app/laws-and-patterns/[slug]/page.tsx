import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  fetchAllPrinciplesSafe,
  fetchPrincipleBySlug,
} from '@/lib/principles'
import { PrincipleDetailClient } from '@/components/laws/PrincipleDetailClient'

export const dynamicParams = true

export async function generateStaticParams() {
  const principles = await fetchAllPrinciplesSafe()
  return principles.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const principle = await fetchPrincipleBySlug(slug)
  if (!principle) return {}

  const title = `${principle.title} — Laws & Patterns — DESIGNSNACK`
  const description = principle.oneLiner

  return {
    title,
    description,
    keywords: [principle.title, ...principle.tags, 'UX', 'design', 'cognitive bias'].join(', '),
    openGraph: {
      title,
      description,
      url: `https://designsnack.ch/laws-and-patterns/${slug}`,
      images: [{ url: `/api/og/laws/${slug}`, width: 1200, height: 630 }],
    },
    alternates: {
      canonical: `https://designsnack.ch/laws-and-patterns/${slug}`,
    },
  }
}

export default async function PrincipleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const principle = await fetchPrincipleBySlug(slug)
  if (!principle) notFound()

  return <PrincipleDetailClient principle={principle} />
}
