import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  fetchAllPrinciplesSafe,
  fetchAllPrinciples,
} from '@/lib/principles'
import type { PrincipleWithSlug } from '@/lib/principles-types'
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
  const principles = await fetchAllPrinciplesSafe()
  const principle = principles.find((p) => p.slug === slug)
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
  const principles = await fetchAllPrinciples()
  const index = principles.findIndex((p) => p.slug === slug)
  if (index === -1) notFound()

  const principle = principles[index]
  const nextPrinciple: PrincipleWithSlug | null = principles[index + 1] ?? null
  const similarPrinciples: PrincipleWithSlug[] = principles
    .filter((p) => p.slug !== slug && p.category === principle.category)
    .slice(0, 3)

  return (
    <PrincipleDetailClient
      principle={principle}
      nextPrinciple={nextPrinciple}
      similarPrinciples={similarPrinciples}
    />
  )
}
