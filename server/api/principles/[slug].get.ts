import { getSupabaseClient, dbPrincipleToApiPrinciple } from '~/server/utils/supabase';
import { buildSlugMap } from '~/server/utils/slugify';

export default defineEventHandler(async (event) => {
  try {
    const slug = getRouterParam(event, 'slug');

    if (!slug) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Slug parameter is required'
      });
    }

    const supabase = getSupabaseClient();

    // Fetch all principles to build slug map
    const { data, error } = await supabase
      .from('principles')
      .select('*');

    if (error) {
      throw createError({
        statusCode: 500,
        statusMessage: `Failed to fetch principles: ${error.message}`
      });
    }

    // Transform to API format
    const principles = data.map(dbPrincipleToApiPrinciple);

    // Build slug map and find principle by slug
    const slugMap = buildSlugMap(principles);
    const principleId = slugMap.get(slug);

    if (!principleId) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Principle not found'
      });
    }

    const principle = principles.find(p => p.id === principleId);

    if (!principle) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Principle not found'
      });
    }

    return {
      ...principle,
      slug
    };
  } catch (error) {
    console.error('Error fetching principle:', error);

    if (error.statusCode) {
      throw error;
    }

    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch principle'
    });
  }
});
