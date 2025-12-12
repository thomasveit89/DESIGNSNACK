<template>
  <NuxtLink
    :to="`/laws-and-patterns/${principle.slug}`"
    class="block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
  >
    <!-- Emoji -->
    <div class="text-3xl mb-3">
      {{ emoji }}
    </div>

    <!-- Title -->
    <h3 class="text-xl font-semibold text-black leading-tight mb-3">
      {{ principle.title }}
    </h3>

    <!-- Description -->
    <p class="text-gray-600 leading-relaxed mb-4">
      {{ principle.oneLiner }}
    </p>

    <!-- Type and Category badges -->
    <div class="flex items-center gap-2 flex-wrap">
      <span :class="typeBadgeClass">
        {{ typeLabel }}
      </span>
      <span :class="categoryBadgeClass">
        {{ categoryLabel }}
      </span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { PrincipleWithSlug } from '~/types/principles';
import { TYPE_COLORS, TYPE_LABELS, getPrincipleEmoji, CATEGORIES } from '~/types/principles';

const props = defineProps<{
  principle: PrincipleWithSlug;
}>();

const typeLabel = computed(() => TYPE_LABELS[props.principle.type]);
const emoji = computed(() => getPrincipleEmoji(props.principle.title));
const categoryLabel = computed(() => CATEGORIES[props.principle.category as keyof typeof CATEGORIES]?.label || props.principle.category);

// Type badge class with static Tailwind classes
const typeBadgeClass = computed(() => {
  const baseClass = 'inline-block px-3 py-1 text-xs font-medium rounded-full';
  switch (props.principle.type) {
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
  const baseClass = 'inline-block px-3 py-1 text-xs font-medium rounded-full';
  switch (props.principle.category) {
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
</script>
