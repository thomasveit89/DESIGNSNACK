export type Section =
  | { type: 'intro'; body: string }
  | { type: 'chapter'; heading: string; body: string; image?: string | null }
  | { type: 'closing'; body: string }

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
  sections: Section[]
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
    heroImage: null,
    sections: [
      {
        type: 'intro',
        body: "We've all been on both sides of an underwhelming gift moment. You put real thought and care into something — then you hand over an envelope, or forward a link, and none of that comes through. The story behind the gift gets lost. I built Joyo to fix that. Anyone can create an interactive gift journey — a sequence of personal screens with photos, questions, messages, and a reveal — and share it as a URL. The moment of giving becomes part of the experience.",
      },
      {
        type: 'chapter',
        heading: 'Making creation feel effortless',
        body: "The hardest part wasn't the player — it was making the creator side feel easy enough that anyone would actually use it. My answer was AI-first: you describe your gift concept in a chat, and Claude generates a complete sequence of typed screens tailored to what you described. You land in the editor with something real to work with, not a blank canvas.",
        image: null,
      },
      {
        type: 'chapter',
        heading: 'What a gift journey is made of',
        body: 'A journey is a sequence of typed screens: a hero screen sets the story, choice screens let the recipient engage, a text input lets them write something back, and a reveal screen is the emotional peak — full-screen, confetti, the whole thing. Themes shift the entire mood of the experience. The editor needed to be powerful enough for someone who wants full control, and simple enough for someone who just wants to send something personal. Drag-drop reordering, inline editing, and a live preview running alongside made that balance possible.',
        image: null,
      },
      {
        type: 'chapter',
        heading: 'The moment it all has to land',
        body: "The player is where everything has to work. Full-screen, no chrome, immersive. The recipient moves through each screen one at a time — making choices, answering — until the reveal. These animation and timing decisions only make sense when you feel them in the browser, not sketch them in Figma. Doing both sides meant I could close that loop fast.",
        image: null,
      },
      {
        type: 'closing',
        body: 'Joyo is live — the full flow in production, in English and German. Designing and building a consumer SaaS solo, from concept through Claude API integration to deployed product, is what Design Engineer means in practice.',
      },
    ],
    nextSlug: 'finnova',
  },
  {
    slug: 'finnova',
    title: 'Core Banking Platform',
    oneLiner:
      "Senior design partner embedded in one of Switzerland's leading core banking platforms.",
    meta: {
      role: 'Senior Design Engineer',
      duration: '1 year & counting',
      year: '2025–present',
      type: 'Embedded',
    },
    heroImage: null,
    sections: [
      {
        type: 'intro',
        body: "Finnova is one of the most widely used core banking platforms in Switzerland. Their product organisation needed a senior design partner who could operate at the intersection of complex enterprise UX and frontend implementation — someone embedded in the team, not parachuted in for a sprint.",
      },
      {
        type: 'chapter',
        heading: 'Starting with what already exists',
        body: "The design system was fragmented — similar components with different interaction patterns across modules. Before taking on new feature work, I spent the first month auditing and documenting what existed. That foundation made every subsequent feature faster to design and faster to build, because the foundational decisions were already made.",
        image: null,
      },
      {
        type: 'chapter',
        heading: 'Designing in the medium, not in abstraction',
        body: 'Banking interfaces involve real complexity: conditional states, permission hierarchies, bulk operations, error recovery. I pushed for design work to happen in the browser — prototyping interactions in code where fidelity matters more than speed of production. For complex workflows, a running prototype is worth ten Figma screens.',
        image: null,
      },
      {
        type: 'closing',
        body: "NDA constraints limit what I can show. The engagement continues. The work spans some of the most complex interaction design challenges in the Swiss fintech space — and it's made me a sharper designer for systems where the cost of a bad decision is real.",
      },
    ],
    nextSlug: 'laws-and-patterns',
  },
  {
    slug: 'laws-and-patterns',
    title: 'Laws & Patterns',
    oneLiner:
      'A reference tool for 100+ UX laws, cognitive biases, and design heuristics — iOS app and web.',
    meta: {
      role: 'Designer + Developer',
      duration: '4 months',
      year: '2025',
      type: 'Self-initiated',
    },
    heroImage: null,
    sections: [
      {
        type: 'intro',
        body: "UX principles like Hick's Law and the Gestalt laws are well documented — but scattered across textbooks, Wikipedia, and blog posts of varying quality. No single, well-designed, mobile-first reference existed that a designer could pull up mid-meeting. I built one.",
      },
      {
        type: 'chapter',
        heading: 'Content before features',
        body: "The temptation with reference tools is to build filters, tags, and search first. I resisted. The first version had minimal navigation — browse by category, that's it. Getting the content quality genuinely useful was the only priority. Features followed once the foundation was solid.",
        image: null,
      },
      {
        type: 'chapter',
        heading: 'Do / Don\'t over definitions',
        body: "Definitions of cognitive biases tend to be abstract. What designers need is application — what does Hick's Law mean for a navigation menu? What does Miller's Law mean for a form? Every principle in Laws & Patterns has a Do / Don't section with concrete UI examples. That's the real value, and it's what makes it worth bookmarking.",
        image: null,
      },
      {
        type: 'chapter',
        heading: 'The web version was a strategic call',
        body: "The iOS app was the original product. The web version was an afterthought — until I realised that UX laws are heavily searched terms. Building statically generated pages for each principle creates compounding organic traffic. The decision to add the web version was purely strategic, and it's already paying off.",
        image: null,
      },
      {
        type: 'closing',
        body: "The iOS app is live on the App Store. The web version is integrated into this site. 100+ principles across UX laws, cognitive biases, and Gestalt. A reference I use myself.",
      },
    ],
    nextSlug: 'joyo',
  },
]

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug)
}
