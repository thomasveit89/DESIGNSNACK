import type { Metadata } from 'next'
import { getCaseStudy } from '@/data/work'
import { CaseStudyLayout } from '@/components/work/CaseStudyLayout'
import { CaseStudyBody, Intro, Chapter, Closing } from '@/components/work/CaseStudyBody'

export const metadata: Metadata = {
  title: 'AMBOSS Immobilien — DESIGNSNACK',
  description: 'A premium website for a Swiss real estate firm – dark, gold-accented, fully CMS-driven, and built to convert.',
  openGraph: {
    title: 'AMBOSS Immobilien — DESIGNSNACK',
    description: 'A premium website for a Swiss real estate firm – dark, gold-accented, fully CMS-driven, and built to convert.',
    url: 'https://designsnack.ch/work/amboss',
  },
}

export default function AmbossPage() {
  const project = getCaseStudy('amboss')!
  const nextProject = getCaseStudy(project.nextSlug) ?? null

  return (
    <CaseStudyLayout
      title={project.title}
      oneLiner={project.oneLiner}
      meta={project.meta}
      heroImage={project.heroImage}
      tools={project.tools}
      url={project.url}
      urlLabel={project.urlLabel}
      nextProject={nextProject}
    >
      <CaseStudyBody>
        <Intro>
          AMBOSS Immobilien AG is a boutique Swiss real estate company operating in the Lake
          Constance region – new-build developments, on- and off-market brokerage, and cantonal
          mandates. They needed a website that matched the calibre of the properties they sell:
          premium, trustworthy, and personal. I designed and built the full site from scratch.
        </Intro>

        <Chapter heading="A brand identity built for trust">
          The design language centres on a dark, deep blue-grey palette with a warm gold accent –
          serious enough for high-value real estate, warm enough to feel approachable. Playfair
          Display handles all headings, with italic gold-gradient treatment for key phrases. Inter
          anchors the body. The result is a system that feels considered rather than templated.
        </Chapter>

        <Chapter heading="Motion that earns its place">
          Every interaction has a reason to exist. A frosted-glass pill nav hides on scroll-down
          and springs back on scroll-up. The hero image parallaxes at half speed. Stats count up
          from zero on first viewport entry. A full-screen modal gallery handles the reference
          projects. Framer Motion made these feel physical, not decorative.
        </Chapter>

        <Chapter heading="Handing it over cleanly">
          The client needed full control without a developer in the loop. I integrated Sanity CMS
          with an embedded Studio, covering every content type – projects, team members, services,
          references, and legal pages. A one-time migration script bootstrapped all initial content
          from the static data file into Sanity on launch day.
        </Chapter>

        <Closing>
          The site is live and fully managed by the AMBOSS team through Sanity Studio. A contact
          form, GA4 analytics behind a cookie consent banner, and ISR revalidation round out a
          production-ready delivery.
        </Closing>
      </CaseStudyBody>
    </CaseStudyLayout>
  )
}
