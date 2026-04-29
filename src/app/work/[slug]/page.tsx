import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { caseStudies, getCaseStudy } from '@/data/work'
import { CaseStudyContent } from './CaseStudyContent'

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getCaseStudy(slug)
  if (!project) return {}

  return {
    title: `${project.title} — DESIGNSNACK`,
    description: project.oneLiner,
    openGraph: {
      title: `${project.title} — DESIGNSNACK`,
      description: project.oneLiner,
      url: `https://designsnack.ch/work/${slug}`,
    },
  }
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getCaseStudy(slug)
  if (!project) notFound()

  const nextProject = getCaseStudy(project.nextSlug)

  return <CaseStudyContent project={project} nextProject={nextProject ?? null} />
}
