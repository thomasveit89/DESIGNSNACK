// Server-only: imports Supabase. Do not import this in client components.
import { supabase } from './supabase'
import type { Principle, PrincipleWithSlug, PrincipleType } from './principles-types'

export type { Principle, PrincipleWithSlug, PrincipleType }
export { CATEGORIES, TYPE_LABELS } from './principles-types'
export type { CategoryKey } from './principles-types'

// ─── DB type ─────────────────────────────────────────────────────────────────

interface DbPrinciple {
  id: string
  type: PrincipleType
  title: string
  one_liner: string
  definition: string
  applies_when: string[]
  do_items: string[]
  dont_items: string[]
  tags: string[]
  category: string
  sources: string[]
}

// ─── Slug utils ───────────────────────────────────────────────────────────────

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/['']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function addSlugs(principles: Principle[]): PrincipleWithSlug[] {
  const slugCounts = new Map<string, number>()
  const idToSlug = new Map<string, string>()

  for (const p of principles) {
    let slug = generateSlug(p.title)
    const base = slug
    if (slugCounts.has(base)) {
      const n = slugCounts.get(base)! + 1
      slugCounts.set(base, n)
      slug = `${base}-${n}`
    } else {
      slugCounts.set(base, 1)
    }
    idToSlug.set(p.id, slug)
  }

  return principles.map((p) => ({ ...p, slug: idToSlug.get(p.id)! }))
}

// ─── DB → API transform ───────────────────────────────────────────────────────

function fromDb(db: DbPrinciple): Principle {
  return {
    id: db.id,
    type: db.type,
    title: db.title,
    oneLiner: db.one_liner,
    definition: db.definition,
    appliesWhen: db.applies_when ?? [],
    do: db.do_items ?? [],
    dont: db.dont_items ?? [],
    tags: db.tags ?? [],
    category: db.category,
    sources: db.sources ?? [],
  }
}

// ─── Fetch functions ──────────────────────────────────────────────────────────

export async function fetchAllPrinciples(): Promise<PrincipleWithSlug[]> {
  const { data, error } = await supabase
    .from('principles')
    .select('*')
    .order('title')

  if (error) throw new Error(`Failed to fetch principles: ${error.message}`)

  return addSlugs((data as DbPrinciple[]).map(fromDb))
}

export async function fetchAllPrinciplesSafe(): Promise<PrincipleWithSlug[]> {
  try {
    return await fetchAllPrinciples()
  } catch {
    return []
  }
}

export async function fetchPrincipleBySlug(
  slug: string
): Promise<PrincipleWithSlug | null> {
  const all = await fetchAllPrinciples()
  return all.find((p) => p.slug === slug) ?? null
}
