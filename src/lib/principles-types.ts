// Client-safe: no Supabase import. Import this in client components.

export type PrincipleType = 'ux_law' | 'cognitive_bias' | 'heuristic'

export interface Principle {
  id: string
  type: PrincipleType
  title: string
  oneLiner: string
  definition: string
  appliesWhen: string[]
  do: string[]
  dont: string[]
  tags: string[]
  category: string
  sources: string[]
}

export interface PrincipleWithSlug extends Principle {
  slug: string
}

export const CATEGORIES = {
  all: { label: 'All' },
  attention: { label: 'Attention' },
  memory: { label: 'Memory' },
  decisions: { label: 'Decision Making' },
  usability: { label: 'Usability' },
  persuasion: { label: 'Persuasion' },
  visual: { label: 'Visual Design' },
} as const

export type CategoryKey = keyof typeof CATEGORIES

export const TYPE_LABELS: Record<PrincipleType, string> = {
  ux_law: 'UX Law',
  cognitive_bias: 'Cognitive Bias',
  heuristic: 'Heuristic',
}
