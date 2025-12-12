import type { Principle, PrincipleWithSlug } from '~/types/principles';

// Generate URL-safe slug from title
export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/['']/g, '') // Remove apostrophes
    .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric with dashes
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing dashes
};

// Build slug-to-ID mapping with conflict resolution
export const buildSlugMap = (principles: Principle[]): Map<string, string> => {
  const slugMap = new Map<string, string>();
  const slugCounts = new Map<string, number>();

  principles.forEach(principle => {
    let slug = generateSlug(principle.title);
    const baseSlug = slug;

    // Handle duplicates by appending number
    if (slugCounts.has(baseSlug)) {
      const count = slugCounts.get(baseSlug)! + 1;
      slugCounts.set(baseSlug, count);
      slug = `${baseSlug}-${count}`;
    } else {
      slugCounts.set(baseSlug, 1);
    }

    slugMap.set(slug, principle.id);
  });

  return slugMap;
};

// Add slugs to principles
export const addSlugs = (principles: Principle[]): PrincipleWithSlug[] => {
  const slugMap = buildSlugMap(principles);
  const reversedMap = new Map(
    Array.from(slugMap.entries()).map(([slug, id]) => [id, slug])
  );

  return principles.map(principle => ({
    ...principle,
    slug: reversedMap.get(principle.id) || generateSlug(principle.title)
  }));
};
