import { createClient } from '@supabase/supabase-js';
import type { DbPrinciple, Principle } from '~/types/principles';

let supabaseClient: ReturnType<typeof createClient> | null = null;

export const getSupabaseClient = () => {
  if (supabaseClient) return supabaseClient;

  const config = useRuntimeConfig();

  if (!config.supabaseUrl || !config.supabaseAnonKey) {
    throw new Error('Missing Supabase configuration');
  }

  supabaseClient = createClient(config.supabaseUrl, config.supabaseAnonKey);
  return supabaseClient;
};

// Transform database format to API format
export const dbPrincipleToApiPrinciple = (dbPrinciple: DbPrinciple): Principle => ({
  id: dbPrinciple.id,
  type: dbPrinciple.type,
  title: dbPrinciple.title,
  oneLiner: dbPrinciple.one_liner,
  definition: dbPrinciple.definition,
  appliesWhen: dbPrinciple.applies_when,
  do: dbPrinciple.do_items,
  dont: dbPrinciple.dont_items,
  tags: dbPrinciple.tags,
  category: dbPrinciple.category,
  sources: dbPrinciple.sources,
});
