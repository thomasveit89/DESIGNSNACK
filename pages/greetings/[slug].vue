<template>
  <div class="greetings-page">
    <!-- Loading State -->
    <div v-if="loading" class="loading-container">
      <div class="loading-spinner"></div>
    </div>

    <!-- Greeting Found -->
    <div v-else-if="greeting" class="greeting-container">
      <GreetingCard :greeting="greeting" />
    </div>

    <!-- 404 Not Found -->
    <div v-else class="not-found-container">
      <div class="not-found-content">
        <h1 class="not-found-title">404</h1>
        <p class="not-found-message">This greeting card could not be found.</p>
        <NuxtLink to="/" class="home-link">
          ← Back to DESIGNSNACK
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import type { Greeting } from '~/types/greeting'
import GreetingCard from '~/components/greetings/GreetingCard.vue'

const route = useRoute()
const { findGreeting } = useGreetings()

const greeting = ref<Greeting | null>(null)
const loading = ref(true)

// SEO: Prevent indexing
useHead({
  title: computed(() => greeting.value
    ? `${greeting.value.firstName}'s Greeting from DESIGNSNACK`
    : 'Greeting from DESIGNSNACK'),
  meta: [
    { name: 'robots', content: 'noindex, nofollow' },
    { name: 'description', content: 'A personalized greeting from DESIGNSNACK' }
  ]
})

onMounted(async () => {
  const slug = route.params.slug as string

  if (!slug) {
    loading.value = false
    return
  }

  // Load greeting from JSON
  const foundGreeting = await findGreeting(slug)

  if (foundGreeting) {
    greeting.value = foundGreeting
  }

  loading.value = false
})
</script>

<style scoped>
.greetings-page {
  min-height: 100vh;
  background: #7A8E9C;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  position: relative;
  overflow: hidden;
}

/* Loading State */
.loading-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading-spinner {
  width: 48px;
  height: 48px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* Greeting Container */
.greeting-container {
  width: 100%;
  max-width: 600px;
  position: relative;
  z-index: 1;
}

/* 404 Not Found */
.not-found-container {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.not-found-content {
  background: white;
  padding: 60px 40px;
  border-radius: 24px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.12);
}

.not-found-title {
  font-size: 96px;
  font-weight: 700;
  color: #768B9B;
  margin: 0 0 16px 0;
  line-height: 1;
}

.not-found-message {
  font-size: 20px;
  color: #4B5563;
  margin: 0 0 32px 0;
}

.home-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 16px 32px;
  background: #111827;
  color: white;
  text-decoration: none;
  border-radius: 999px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.home-link:hover {
  background: #000;
  transform: scale(1.02);
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .greetings-page {
    padding: 20px 16px;
  }

  .not-found-content {
    padding: 40px 28px;
  }

  .not-found-title {
    font-size: 64px;
  }

  .not-found-message {
    font-size: 18px;
  }
}
</style>
