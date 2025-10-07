<template>
  <div class="min-h-screen bg-white">
    <div class="container mx-auto px-4 py-12">
      <!-- Header -->
      <div class="mb-16">
        <NuxtLink
          to="/"
          class="inline-flex items-center text-gray-600 hover:text-black transition-colors mb-8"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
          Back to DESIGNSNACK
        </NuxtLink>

        <div class="max-w-4xl">
          <h1 class="text-5xl md:text-7xl font-semibold text-black mb-6 leading-tight">
            Laws & Patterns
          </h1>
          <p class="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
            A comprehensive collection of UX laws, cognitive biases, and design heuristics to help you create better user experiences.
          </p>
        </div>
      </div>

      <!-- Coming Soon Section -->
      <div class="max-w-4xl">
        <div class="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-200">
          <h2 class="text-3xl font-semibold text-black mb-4">Coming Soon</h2>
          <p class="text-lg text-gray-700 leading-relaxed mb-6">
            We're building an interactive web experience where you can explore and learn about essential UX principles. In the meantime, download our mobile app to access:
          </p>
          <ul class="space-y-3 text-gray-700 mb-8">
            <li class="flex items-start">
              <svg class="w-6 h-6 mr-3 text-[#768B9B] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span>70+ UX laws, cognitive biases, and heuristics</span>
            </li>
            <li class="flex items-start">
              <svg class="w-6 h-6 mr-3 text-[#768B9B] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span>Interactive quizzes and flashcards</span>
            </li>
            <li class="flex items-start">
              <svg class="w-6 h-6 mr-3 text-[#768B9B] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span>Daily design principles to level up your skills</span>
            </li>
            <li class="flex items-start">
              <svg class="w-6 h-6 mr-3 text-[#768B9B] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span>Progress tracking and personalized recommendations</span>
            </li>
          </ul>

          <!-- App Store Buttons (Placeholder) -->
          <div class="flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              class="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download on the App Store
            </a>
            <a
              href="#"
              class="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              Get it on Google Play
            </a>
          </div>
        </div>

        <!-- Sample Principles Preview (Optional) -->
        <div class="mt-16">
          <h2 class="text-3xl font-semibold text-black mb-8">Sample Principles</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <span class="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full mb-3">UX Law</span>
              <h3 class="text-xl font-semibold text-black mb-2">Fitts's Law</h3>
              <p class="text-gray-600">
                The time to acquire a target is a function of the distance to and size of the target.
              </p>
            </div>
            <div class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <span class="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full mb-3">Cognitive Bias</span>
              <h3 class="text-xl font-semibold text-black mb-2">Confirmation Bias</h3>
              <p class="text-gray-600">
                The tendency to search for, interpret, and recall information in a way that confirms one's preexisting beliefs.
              </p>
            </div>
            <div class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <span class="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full mb-3">Heuristic</span>
              <h3 class="text-xl font-semibold text-black mb-2">Recognition over Recall</h3>
              <p class="text-gray-600">
                Minimize the user's memory load by making objects, actions, and options visible.
              </p>
            </div>
            <div class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <span class="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full mb-3">UX Law</span>
              <h3 class="text-xl font-semibold text-black mb-2">Miller's Law</h3>
              <p class="text-gray-600">
                The average person can only keep 7 (plus or minus 2) items in their working memory.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <LawsFooter />
  </div>
</template>

<script setup>
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
</script>
