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

        <h1 class="text-4xl md:text-5xl font-semibold text-black mb-4">Terms of Service</h1>
        <p class="text-gray-600">Last updated: {{ lastUpdated }}</p>
      </div>

      <!-- Content -->
      <div class="prose prose-lg max-w-none">
        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-black mb-4">1. Acceptance of Terms</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            By accessing and using DESIGNSNACK Laws & Patterns ("the App"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the App.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-black mb-4">2. Description of Service</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            DESIGNSNACK Laws & Patterns is an educational mobile application that provides:
          </p>
          <ul class="list-disc pl-6 text-gray-700 space-y-2">
            <li>Comprehensive library of UX laws, cognitive biases, and design heuristics</li>
            <li>Interactive quiz and flashcard features for learning</li>
            <li>Progress tracking and personalized content recommendations</li>
            <li>Educational resources and practical design examples</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-black mb-4">3. User Responsibilities</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            You agree to:
          </p>
          <ul class="list-disc pl-6 text-gray-700 space-y-2">
            <li>Use the App for lawful purposes only</li>
            <li>Not attempt to reverse engineer, decompile, or disassemble the App</li>
            <li>Not use the App in any way that could damage, disable, or impair our servers</li>
            <li>Not attempt to gain unauthorized access to any portion of the App</li>
            <li>Respect intellectual property rights of all content provided</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-black mb-4">4. Intellectual Property</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            All content, features, and functionality of the App, including but not limited to text, graphics, logos, icons, images, and software, are the exclusive property of DESIGNSNACK and are protected by international copyright, trademark, and other intellectual property laws.
          </p>
          <p class="text-gray-700 leading-relaxed mt-4">
            The principles, laws, and heuristics presented are based on publicly available research and documentation. All sources are properly attributed within the App.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-black mb-4">5. Educational Use Only</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            The content provided in the App is for educational and informational purposes only. While we strive for accuracy, we do not guarantee that the information is complete, accurate, or up-to-date. The App should not be used as the sole basis for professional design decisions.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-black mb-4">6. Free Service</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            The App is currently provided free of charge. We reserve the right to introduce paid features, subscriptions, or premium content in the future. Users will be notified of any changes to the pricing structure.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-black mb-4">7. Disclaimer of Warranties</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            The App is provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the App will be uninterrupted, error-free, or free of viruses or other harmful components.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-black mb-4">8. Limitation of Liability</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            To the fullest extent permitted by law, DESIGNSNACK shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of the App.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-black mb-4">9. Content Accuracy</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            We make every effort to ensure that the principles, laws, and heuristics presented in the App are accurate and properly sourced. However, UX and design principles are continuously evolving fields. We welcome feedback and corrections from the community.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-black mb-4">10. Third-Party Content</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            The App may contain links to third-party websites or resources. We are not responsible for the availability, accuracy, or content of these external sites. Links to third-party sites do not imply endorsement.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-black mb-4">11. Modifications to Service</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            We reserve the right to modify, suspend, or discontinue the App (or any part thereof) at any time, with or without notice. We will not be liable to you or any third party for any modification, suspension, or discontinuation of the App.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-black mb-4">12. Changes to Terms</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            We may update these Terms of Service from time to time. We will notify you of any material changes by posting the new Terms on this page and updating the "Last updated" date. Your continued use of the App after such changes constitutes acceptance of the new Terms.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-black mb-4">13. Governing Law</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            These Terms shall be governed by and construed in accordance with the laws of Switzerland, without regard to its conflict of law provisions.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-black mb-4">14. Contact Information</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <p class="text-gray-700">
            <strong>Email:</strong> <a href="mailto:hi@designsnack.ch" class="text-[#768B9B] hover:underline">hi@designsnack.ch</a>
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-black mb-4">15. Severability</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will continue to be valid and enforceable to the fullest extent permitted by law.
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
  title: 'Terms of Service - DESIGNSNACK Laws & Patterns',
  meta: [
    { name: 'description', content: 'Terms of Service for DESIGNSNACK Laws & Patterns app' },
    { name: 'robots', content: 'index, follow' }
  ]
});
</script>
