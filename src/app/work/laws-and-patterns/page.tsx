import type { Metadata } from 'next'
import { getCaseStudy } from '@/data/work'
import { CaseStudyLayout } from '@/components/work/CaseStudyLayout'
import { CaseStudyBody, Intro, Chapter, Closing } from '@/components/work/CaseStudyBody'

export const metadata: Metadata = {
  title: 'Laws & Patterns — DESIGNSNACK',
  description: 'A reference tool for 100+ UX laws, cognitive biases, and design heuristics – iOS app and web.',
  openGraph: {
    title: 'Laws & Patterns — DESIGNSNACK',
    description: 'A reference tool for 100+ UX laws, cognitive biases, and design heuristics – iOS app and web.',
    url: 'https://designsnack.ch/work/laws-and-patterns',
  },
}

export default function LawsAndPatternsPage() {
  const project = getCaseStudy('laws-and-patterns')!
  const nextProject = getCaseStudy(project.nextSlug) ?? null

  return (
    <CaseStudyLayout
      title={project.title}
      oneLiner={project.oneLiner}
      meta={project.meta}
      heroImage={project.heroImage}
      nextProject={nextProject}
    >
      <CaseStudyBody>
        <Intro>
          UX principles like Hick&apos;s Law and the Gestalt laws are well documented – but
          scattered across textbooks, Wikipedia, and blog posts of varying quality. No single,
          well-designed, mobile-first reference existed that a designer could pull up mid-meeting.
          I built one.
        </Intro>

        <Chapter heading="Content before features">
          The temptation with reference tools is to build filters, tags, and search first. I
          resisted. The first version had minimal navigation – browse by category, that&apos;s it.
          Getting the content quality genuinely useful was the only priority. Features followed once
          the foundation was solid.
        </Chapter>

        <Chapter heading="Do / Don't over definitions">
          Definitions of cognitive biases tend to be abstract. What designers need is application –
          what does Hick&apos;s Law mean for a navigation menu? What does Miller&apos;s Law mean for
          a form? Every principle in Laws &amp; Patterns has a Do / Don&apos;t section with concrete
          UI examples. That&apos;s the real value, and it&apos;s what makes it worth bookmarking.
        </Chapter>

        <Chapter heading="The web version was a strategic call">
          The iOS app was the original product. The web version was an afterthought – until I
          realised that UX laws are heavily searched terms. Building statically generated pages for
          each principle creates compounding organic traffic. The decision to add the web version
          was purely strategic, and it&apos;s already paying off.
        </Chapter>

        <Closing>
          The iOS app is live on the App Store. The web version is integrated into this site. 100+
          principles across UX laws, cognitive biases, and Gestalt. A reference I use myself.
        </Closing>
      </CaseStudyBody>
    </CaseStudyLayout>
  )
}
