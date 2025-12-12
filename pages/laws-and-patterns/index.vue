<template>
  <div class="min-h-screen bg-white">
    <div class="container mx-auto px-4 py-12">
      <!-- Header -->
      <div class="mb-16">
        <div class="max-w-4xl">
          <h1 class="text-5xl md:text-7xl font-semibold text-black mb-6 leading-tight">
            Laws & Patterns
          </h1>
          <p class="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
            A comprehensive collection of UX laws, cognitive biases, and design heuristics to help you create better user experiences.
          </p>
        </div>
      </div>

      <!-- Filter Buttons -->
      <div class="mb-8 flex flex-wrap gap-3">
        <button
          v-for="(category, key) in CATEGORIES"
          :key="key"
          @click="selectedFilter = key"
          :class="[
            'px-5 py-2 rounded-full font-medium transition-colors',
            selectedFilter === key
              ? 'bg-gray-800 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          ]"
        >
          <span>{{ category.label }}</span>
          <span v-if="key === 'all'" class="opacity-70 ml-1">({{ principles.length }})</span>
          <span v-else class="opacity-70 ml-1">({{ principlesByCategory[key]?.length || 0 }})</span>
        </button>
      </div>

      <!-- Loading State -->
      <div v-if="pending" class="text-center py-12">
        <div class="inline-block w-8 h-8 border-4 border-gray-200 border-t-black rounded-full animate-spin"></div>
        <p class="mt-4 text-gray-600">Loading principles...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center py-12">
        <div class="inline-block w-16 h-16 mb-4">
          <svg class="w-full h-full text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-black mb-2">Failed to load principles</h3>
        <p class="text-gray-600 mb-4">{{ error }}</p>
        <button
          @click="refresh()"
          class="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          Try Again
        </button>
      </div>

      <!-- Principles Grid -->
      <div v-else-if="filteredPrinciples.length > 0" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <PrincipleCard
          v-for="principle in filteredPrinciples"
          :key="principle.id"
          :principle="principle"
        />
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-12">
        <p class="text-gray-600">No principles found.</p>
      </div>
    </div>

    <!-- Footer -->
    <LawsFooter />
  </div>
</template>

<script setup lang="ts">
import { CATEGORIES } from '~/types/principles';

// Meta tags
useHead({
  title: 'Laws & Patterns - DESIGNSNACK',
  meta: [
    { name: 'description', content: 'A comprehensive collection of UX laws, cognitive biases, and design heuristics to help you create better user experiences.' },
    { name: 'keywords', content: 'UX laws, design patterns, cognitive biases, heuristics, user experience, UI design' },
    { property: 'og:title', content: 'Laws & Patterns - DESIGNSNACK' },
    { property: 'og:description', content: 'A comprehensive collection of UX laws, cognitive biases, and design heuristics.' },
    { name: 'robots', content: 'index, follow' }
  ]
});

// Fetch principles
const { fetchPrinciples } = usePrinciples();
const { data: principlesData, pending, error, refresh } = await useAsyncData(
  'all-principles',
  () => fetchPrinciples()
);

const principles = computed(() => principlesData.value || []);

// Filter state
const selectedFilter = ref<keyof typeof CATEGORIES>('all');

// Group principles by category
const principlesByCategory = computed(() => {
  const grouped: Record<string, typeof principles.value> = {};

  Object.keys(CATEGORIES).forEach(key => {
    if (key === 'all') return;
    grouped[key] = principles.value.filter(p => p.category === key);
  });

  return grouped;
});

// Filtered principles based on selected filter
const filteredPrinciples = computed(() => {
  if (selectedFilter.value === 'all') {
    return principles.value;
  }
  return principles.value.filter(p => p.category === selectedFilter.value);
});
</script>
