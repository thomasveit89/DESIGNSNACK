import type { PrincipleWithSlug } from '~/types/principles';

export const usePrinciples = () => {
  const fetchPrinciples = () => {
    return $fetch<PrincipleWithSlug[]>('/api/principles');
  };

  const fetchPrincipleBySlug = (slug: string) => {
    return $fetch<PrincipleWithSlug>(`/api/principles/${slug}`);
  };

  return {
    fetchPrinciples,
    fetchPrincipleBySlug
  };
};
