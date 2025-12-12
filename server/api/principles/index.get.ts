import { getSupabaseClient, dbPrincipleToApiPrinciple } from '~/server/utils/supabase';
import { addSlugs } from '~/server/utils/slugify';

export default defineEventHandler(async (event) => {
  try {
    const supabase = getSupabaseClient();

    const { data, error } = await supabase
      .from('principles')
      .select('*')
      .order('title');

    if (error) {
      throw createError({
        statusCode: 500,
        statusMessage: `Failed to fetch principles: ${error.message}`
      });
    }

    // Debug: Log first principle to see structure
    if (data && data.length > 0) {
      console.log('Sample principle from DB:', JSON.stringify(data[0], null, 2));
    }

    // Transform and add slugs
    const principles = data.map(dbPrincipleToApiPrinciple);
    const principlesWithSlugs = addSlugs(principles);

    return principlesWithSlugs;
  } catch (error) {
    console.error('Error fetching principles:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch principles'
    });
  }
});
