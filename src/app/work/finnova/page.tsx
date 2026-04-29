import type { Metadata } from 'next'
import { getCaseStudy } from '@/data/work'
import { CaseStudyLayout } from '@/components/work/CaseStudyLayout'
import { CaseStudyBody, Intro, Closing } from '@/components/work/CaseStudyBody'

export const metadata: Metadata = {
  title: 'Core Banking Platform — DESIGNSNACK',
  description: "Brought in as a UX designer to work on a large-scale project for one of Switzerland's leading core banking platforms.",
  openGraph: {
    title: 'Core Banking Platform — DESIGNSNACK',
    description: "Brought in as a UX designer to work on a large-scale project for one of Switzerland's leading core banking platforms.",
    url: 'https://designsnack.ch/work/finnova',
  },
}

export default function FinnovaPage() {
  const project = getCaseStudy('finnova')!
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
          I was hired as a UX designer to contribute to a large and complex product initiative at
          one of Switzerland&apos;s most established core banking platforms. The work involved deep
          collaboration with product and engineering teams across a sustained engagement – not a
          short sprint, but the kind of project where understanding the system takes weeks before
          you can meaningfully improve it. The contract has been extended twice.
        </Intro>

        <Closing>
          This project is covered by a non-disclosure agreement. I&apos;m not able to share details
          about the work, the client, or the outcomes. What I can say is that it&apos;s some of the
          most complex UX work I&apos;ve done – and it continues.
        </Closing>
      </CaseStudyBody>
    </CaseStudyLayout>
  )
}
