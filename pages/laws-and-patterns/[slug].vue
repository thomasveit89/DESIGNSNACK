<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-12">
      <!-- Loading State -->
      <div v-if="pending" class="text-center py-12">
        <div class="inline-block w-8 h-8 border-4 border-gray-200 border-t-black rounded-full animate-spin"></div>
        <p class="mt-4 text-gray-600">Loading principle...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center py-12">
        <div class="inline-block w-16 h-16 mb-4">
          <svg class="w-full h-full text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-black mb-2">Principle not found</h3>
        <p class="text-gray-600 mb-4">The principle you're looking for doesn't exist.</p>
        <NuxtLink
          to="/laws-and-patterns"
          class="inline-block px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          Back to Laws & Patterns
        </NuxtLink>
      </div>

      <!-- Principle Content -->
      <div v-else-if="principle" class="max-w-4xl mx-auto">
        <!-- Breadcrumb -->
        <NuxtLink
          to="/laws-and-patterns"
          class="inline-flex items-center text-gray-600 hover:text-black transition-colors mb-8"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
          Back to Laws & Patterns
        </NuxtLink>

        <!-- Hero Section -->
        <div class="bg-white rounded-2xl p-8 md:p-12 mb-8 text-center shadow-sm border border-gray-100">
          <!-- Emoji -->
          <div class="text-7xl md:text-8xl mb-6">
            {{ emoji }}
          </div>

          <!-- Title -->
          <h1 class="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {{ principle.title }}
          </h1>

          <!-- One Liner -->
          <p class="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed max-w-2xl mx-auto">
            {{ principle.oneLiner }}
          </p>

          <!-- Type and Category Badges -->
          <div class="flex items-center justify-center gap-3 flex-wrap">
            <span :class="typeBadgeClass">
              {{ typeLabel }}
            </span>
            <span :class="categoryBadgeClass">
              {{ categoryLabel }}
            </span>
          </div>
        </div>

        <!-- Definition -->
        <section class="bg-white rounded-xl p-6 mb-6 shadow-sm border border-gray-100">
          <h2 class="text-lg font-semibold text-gray-900 mb-3">What is it?</h2>
          <p class="text-lg text-gray-700 leading-relaxed">
            {{ principle.definition }}
          </p>
        </section>

        <!-- Do's -->
        <section v-if="principle?.do && principle.do.length > 0" class="bg-white rounded-xl p-6 mb-6 shadow-sm border border-gray-100">
          <h2 class="text-lg font-semibold text-gray-900 mb-4">✅ What to do</h2>
          <ul class="space-y-3">
            <li
              v-for="(item, index) in principle.do"
              :key="index"
              class="flex items-start"
            >
              <span class="text-green-500 text-lg mr-3 mt-0.5">•</span>
              <span class="flex-1 text-lg text-gray-700 leading-relaxed">{{ item }}</span>
            </li>
          </ul>
        </section>

        <!-- Don'ts -->
        <section v-if="principle?.dont && principle.dont.length > 0" class="bg-white rounded-xl p-6 mb-6 shadow-sm border border-gray-100">
          <h2 class="text-lg font-semibold text-gray-900 mb-4">❌ What to avoid</h2>
          <ul class="space-y-3">
            <li
              v-for="(item, index) in principle.dont"
              :key="index"
              class="flex items-start"
            >
              <span class="text-red-500 text-lg mr-3 mt-0.5">•</span>
              <span class="flex-1 text-lg text-gray-700 leading-relaxed">{{ item }}</span>
            </li>
          </ul>
        </section>

        <!-- When to Apply -->
        <section v-if="principle?.appliesWhen && principle.appliesWhen.length > 0" class="bg-white rounded-xl p-6 mb-6 shadow-sm border border-gray-100">
          <h2 class="text-lg font-semibold text-gray-900 mb-4">🎯 When to apply</h2>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(item, index) in principle.appliesWhen"
              :key="index"
              class="bg-blue-50 px-3 py-2 rounded-lg text-sm text-blue-700 font-medium capitalize"
            >
              {{ item }}
            </span>
          </div>
        </section>

        <!-- Tags -->
        <section v-if="principle?.tags && principle.tags.length > 0" class="bg-white rounded-xl p-6 mb-6 shadow-sm border border-gray-100">
          <h2 class="text-lg font-semibold text-gray-900 mb-4">🏷️ Related topics</h2>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(tag, index) in principle.tags"
              :key="index"
              class="bg-gray-100 px-3 py-2 rounded-lg text-sm text-gray-600 font-medium"
            >
              {{ tag }}
            </span>
          </div>
        </section>

        <!-- Sources -->
        <section v-if="principle?.sources && principle.sources.length > 0" class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 class="text-lg font-semibold text-gray-900 mb-4">📚 Learn more</h2>
          <div class="space-y-3">
            <a
              v-for="(source, index) in principle.sources"
              :key="index"
              :href="source.startsWith('http') ? source : undefined"
              :target="source.startsWith('http') ? '_blank' : undefined"
              :rel="source.startsWith('http') ? 'noopener noreferrer' : undefined"
              :class="[
                'flex items-center p-4 bg-gray-50 rounded-lg transition-colors',
                source.startsWith('http') ? 'hover:bg-gray-100 cursor-pointer' : 'cursor-default'
              ]"
            >
              <span class="text-base mr-3">
                {{ source.startsWith('http') ? '🔗' : '📚' }}
              </span>
              <span
                :class="[
                  'flex-1 text-base',
                  source.startsWith('http') ? 'text-blue-600 hover:text-blue-700' : 'text-gray-700'
                ]"
              >
                {{ source }}
              </span>
            </a>
          </div>
        </section>

        <!-- Back to list -->
        <div class="text-center pt-8 border-t border-gray-200">
          <NuxtLink
            to="/laws-and-patterns"
            class="inline-block px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Explore more principles
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <LawsFooter />
  </div>
</template>

<script setup lang="ts">
import { TYPE_COLORS, TYPE_LABELS, getPrincipleEmoji, CATEGORIES } from '~/types/principles';

const route = useRoute();
const slug = route.params.slug as string;

// Fetch principle
const { fetchPrincipleBySlug } = usePrinciples();
const { data: principleData, pending, error } = await useAsyncData(
  `principle-${slug}`,
  () => fetchPrincipleBySlug(slug)
);

const principle = computed(() => principleData.value);

// Type label and emoji
const typeLabel = computed(() => {
  if (!principle.value) return 'UX Law';
  return TYPE_LABELS[principle.value.type];
});

const categoryLabel = computed(() => {
  if (!principle.value) return 'All';
  return CATEGORIES[principle.value.category as keyof typeof CATEGORIES]?.label || principle.value.category;
});

const emoji = computed(() => {
  if (!principle.value) return '📚';
  return getPrincipleEmoji(principle.value.title);
});

// Type badge class with static Tailwind classes
const typeBadgeClass = computed(() => {
  const baseClass = 'inline-block px-3 py-1.5 text-sm font-medium rounded-full';
  if (!principle.value) return `${baseClass} bg-sky-50 text-sky-500`;

  switch (principle.value.type) {
    case 'ux_law':
      return `${baseClass} bg-sky-50 text-sky-500`;
    case 'cognitive_bias':
      return `${baseClass} bg-purple-50 text-purple-500`;
    case 'heuristic':
      return `${baseClass} bg-emerald-50 text-emerald-500`;
    default:
      return `${baseClass} bg-gray-100 text-gray-700`;
  }
});

// Category badge class with static Tailwind classes
const categoryBadgeClass = computed(() => {
  const baseClass = 'inline-block px-3 py-1.5 text-sm font-medium rounded-full';
  if (!principle.value) return `${baseClass} bg-gray-100 text-gray-800`;

  switch (principle.value.category) {
    case 'attention':
      return `${baseClass} bg-red-100 text-red-800`;
    case 'memory':
      return `${baseClass} bg-purple-100 text-purple-800`;
    case 'decisions':
      return `${baseClass} bg-green-100 text-green-800`;
    case 'usability':
      return `${baseClass} bg-orange-100 text-orange-800`;
    case 'persuasion':
      return `${baseClass} bg-pink-100 text-pink-800`;
    case 'visual':
      return `${baseClass} bg-indigo-100 text-indigo-800`;
    default:
      return `${baseClass} bg-gray-100 text-gray-800`;
  }
});

// Meta tags
useHead(() => ({
  title: principle.value ? `${principle.value.title} - Laws & Patterns - DESIGNSNACK` : 'Laws & Patterns - DESIGNSNACK',
  meta: [
    {
      name: 'description',
      content: principle.value?.oneLiner || 'A comprehensive collection of UX laws, cognitive biases, and design heuristics.'
    },
    {
      name: 'keywords',
      content: principle.value ? `${principle.value.title}, ${principle.value.tags.join(', ')}, UX, design` : 'UX laws, design patterns'
    },
    {
      property: 'og:title',
      content: principle.value ? `${principle.value.title} - Laws & Patterns - DESIGNSNACK` : 'Laws & Patterns - DESIGNSNACK'
    },
    {
      property: 'og:description',
      content: principle.value?.oneLiner || 'A comprehensive collection of UX laws, cognitive biases, and design heuristics.'
    },
    { name: 'robots', content: 'index, follow' }
  ]
}));
</script>
