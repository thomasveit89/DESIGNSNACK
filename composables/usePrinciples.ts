import type { PrincipleWithSlug } from '~/types/principles';
import { addSlugs } from '~/utils/slugify';
import { useSupabase, dbPrincipleToApiPrinciple } from '~/composables/useSupabase';

export const usePrinciples = () => {
  const fetchPrinciples = async (): Promise<PrincipleWithSlug[]> => {
    const supabase = useSupabase();

    const { data, error } = await supabase
      .from('principles')
      .select('*')
      .order('title');

    if (error) {
      throw new Error(`Failed to fetch principles: ${error.message}`);
    }

    // Transform and add slugs
    const principles = data.map(dbPrincipleToApiPrinciple);
    return addSlugs(principles);
  };

  const fetchPrincipleBySlug = async (slug: string): Promise<PrincipleWithSlug | null> => {
    const supabase = useSupabase();

    // Fetch all principles to build slug map
    const { data, error } = await supabase
      .from('principles')
      .select('*');

    if (error) {
      throw new Error(`Failed to fetch principles: ${error.message}`);
    }

    // Transform to API format
    const principles = data.map(dbPrincipleToApiPrinciple);

    // Add slugs
    const principlesWithSlugs = addSlugs(principles);

    // Find principle by slug
    const principle = principlesWithSlugs.find(p => p.slug === slug);

    return principle || null;
  };

  return {
    fetchPrinciples,
    fetchPrincipleBySlug
  };
};
