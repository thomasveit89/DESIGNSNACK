<template>
  <div class="min-h-screen bg-white">
    <div class="container mx-auto px-4 py-12 max-w-4xl">
      <!-- Header -->
      <div class="mb-12">
        <NuxtLink
          to="/laws-and-patterns"
          class="inline-flex items-center text-gray-600 hover:text-black transition-colors mb-8"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
          Back to Laws & Patterns
        </NuxtLink>

        <h1 class="text-4xl md:text-5xl font-semibold text-black mb-4">Support</h1>
        <p class="text-gray-600">We're here to help</p>
      </div>

      <!-- Content -->
      <div class="prose prose-lg max-w-none">
        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-black mb-4">Get in Touch</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            If you have any questions, feedback, or need assistance with the DESIGNSNACK Laws & Patterns app, please don't hesitate to reach out to us.
          </p>
          <p class="text-gray-700 leading-relaxed mb-4">
            <strong>Email:</strong> <a href="mailto:hi@designsnack.ch" class="text-[#768B9B] hover:underline">hi@designsnack.ch</a>
          </p>
          <p class="text-gray-700 leading-relaxed">
            We typically respond within 24-48 hours.
          </p>
        </section>
      </div>
    </div>

    <!-- Footer -->
    <LawsFooter />
  </div>
</template>

<script setup>
// Meta tags
useHead({
  title: 'Support - DESIGNSNACK Laws & Patterns',
  meta: [
    { name: 'description', content: 'Get support for DESIGNSNACK Laws & Patterns app' },
    { name: 'robots', content: 'index, follow' }
  ]
});
</script>
