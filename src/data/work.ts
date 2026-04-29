export type CaseStudy = {
  slug: string
  title: string
  oneLiner: string
  meta: {
    role: string
    duration: string
    year: string
    type: string
  }
  heroImage?: string | null
  nextSlug: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'joyo',
    title: 'Joyo',
    oneLiner:
      'Turn any invitation, announcement, or gift into an interactive experience. Because the reveal is part of the magic.',
    meta: {
      role: 'Design Engineer',
      duration: '6 months',
      year: '2025–26',
      type: 'Self-initiated',
    },
    heroImage: '/assets/work/joyo/joyo.png',
    nextSlug: 'finnova',
  },
  {
    slug: 'finnova',
    title: 'Core Banking Platform',
    oneLiner:
      "Brought in as a UX designer to work on a large-scale project for one of Switzerland's leading core banking platforms.",
    meta: {
      role: 'UX Designer',
      duration: '1 year & counting',
      year: '2025–present',
      type: 'Client work',
    },
    heroImage: '/assets/work/finnova/finnova.png',
    nextSlug: 'laws-and-patterns',
  },
  {
    slug: 'laws-and-patterns',
    title: 'Laws & Patterns',
    oneLiner:
      'A reference tool for 100+ UX laws, cognitive biases, and design heuristics – iOS app and web.',
    meta: {
      role: 'Designer + Developer',
      duration: '4 months',
      year: '2025',
      type: 'Self-initiated',
    },
    heroImage: '/assets/work/laws-and-patterns/laws-and-patterns.png',
    nextSlug: 'joyo',
  },
]

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug)
}
