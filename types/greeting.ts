export interface Greeting {
  slug: string
  firstName: string
  variant: 'client' | 'lead'
  title: string
  lines: string[]
  ctaLabel: string
  offerHeadline: string
  offerMessage: string
}

export interface GreetingData {
  greetings: Greeting[]
}
