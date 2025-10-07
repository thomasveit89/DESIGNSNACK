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

        <h1 class="text-4xl md:text-5xl font-semibold text-black mb-4">Privacy Policy</h1>
        <p class="text-gray-600">Last updated: {{ lastUpdated }}</p>
      </div>

      <!-- Content -->
      <div class="prose prose-lg max-w-none">
        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-black mb-4">1. Introduction</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            Welcome to DESIGNSNACK Laws & Patterns ("we," "our," or "us"). We are committed to protecting your privacy and personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and related services.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-black mb-4">2. Information We Collect</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            We collect information that you provide directly to us when using our app:
          </p>
          <ul class="list-disc pl-6 text-gray-700 space-y-2">
            <li>Device information (device type, operating system version)</li>
            <li>Usage data (features accessed, time spent, quiz performance)</li>
            <li>Favorites and saved content preferences</li>
            <li>Quiz progress and results</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-black mb-4">3. How We Use Your Information</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            We use the information we collect to:
          </p>
          <ul class="list-disc pl-6 text-gray-700 space-y-2">
            <li>Provide, maintain, and improve our services</li>
            <li>Personalize your experience and save your preferences</li>
            <li>Track your learning progress and quiz performance</li>
            <li>Analyze usage patterns to enhance app functionality</li>
            <li>Communicate with you about updates and new features</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-black mb-4">4. Data Storage</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            Your data is stored locally on your device using secure storage mechanisms. We use AsyncStorage for React Native to maintain your preferences, favorites, and progress. This data remains on your device and is not automatically transmitted to our servers unless you explicitly sync or back up your data.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-black mb-4">5. Third-Party Services</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            We use the following third-party services:
          </p>
          <ul class="list-disc pl-6 text-gray-700 space-y-2">
            <li><strong>Supabase:</strong> Database and backend services for content delivery</li>
            <li><strong>OpenAI:</strong> AI-powered quiz question generation</li>
            <li><strong>Expo:</strong> Development and deployment platform</li>
          </ul>
          <p class="text-gray-700 leading-relaxed mt-4">
            These services have their own privacy policies governing the use of your information.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-black mb-4">6. Data Security</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-black mb-4">7. Your Rights</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            You have the right to:
          </p>
          <ul class="list-disc pl-6 text-gray-700 space-y-2">
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to processing of your data</li>
            <li>Export your data</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-black mb-4">8. Children's Privacy</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            Our service is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-black mb-4">9. Changes to This Policy</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-black mb-4">10. Contact Us</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p class="text-gray-700">
            <strong>Email:</strong> <a href="mailto:hi@designsnack.ch" class="text-[#768B9B] hover:underline">hi@designsnack.ch</a>
          </p>
        </section>
      </div>
    </div>

    <!-- Footer -->
    <LawsFooter />
  </div>
</template>

<script setup>
const lastUpdated = new Date().toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});

// Meta tags
useHead({
  title: 'Privacy Policy - DESIGNSNACK Laws & Patterns',
  meta: [
    { name: 'description', content: 'Privacy Policy for DESIGNSNACK Laws & Patterns app' },
    { name: 'robots', content: 'index, follow' }
  ]
});
</script>
