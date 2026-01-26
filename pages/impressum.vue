<template>
  <div class="min-h-screen bg-white py-16 px-4">
    <div class="max-w-3xl mx-auto">
      <!-- Back button -->
      <button
        @click="$router.back()"
        class="mb-8 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
        Zurück
      </button>

      <!-- Header -->
      <div class="mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Impressum</h1>
        <p class="text-xl text-gray-700 leading-relaxed">
          Hi, ich bin Tommy. DESIGNSNACK ist mein Solo-Design-Studio. Hier kommt das rechtliche Zeug, das du wahrscheinlich suchst:
        </p>
      </div>

      <!-- Legal Info -->
      <div class="space-y-12">
        <!-- Angaben gemäss UWG -->
        <section>
          <h2 class="text-2xl font-semibold text-gray-900 mb-6">Angaben gemäss Art. 8 UWG</h2>

          <div class="space-y-4 text-lg text-gray-700">
            <div>
              <p class="font-semibold text-gray-900">DESIGNSNACK GmbH</p>
              <p>Bankstrasse 2</p>
              <p>8590 Romanshorn</p>
              <p>Schweiz</p>
            </div>

            <div class="pt-4">
              <p><span class="font-semibold text-gray-900">Handelsregister-Nummer:</span> CHE-350.452.110</p>
              <p><span class="font-semibold text-gray-900">Handelsregister-Amt:</span> Kanton Thurgau</p>
            </div>

            <div class="pt-4">
              <p class="font-semibold text-gray-900">Vertreten durch:</p>
              <p>Thomas Veit, Geschäftsführer</p>
            </div>

            <div class="pt-4">
              <p class="font-semibold text-gray-900">Kontakt:</p>
              <p>E-Mail: <a href="mailto:tommy@designsnack.ch" class="text-black hover:underline">tommy@designsnack.ch</a></p>
              <p>Website: <a href="https://designsnack.ch" class="text-black hover:underline">designsnack.ch</a></p>
              <p>LinkedIn: <a href="https://www.linkedin.com/in/thomasveit/" target="_blank" class="text-black hover:underline">linkedin.com/in/thomasveit</a></p>
            </div>

            <div class="pt-4">
              <p><span class="font-semibold text-gray-900">Umsatzsteuer-Identifikationsnummer:</span></p>
              <p>CHE-350.452.110 MWST</p>
            </div>
          </div>
        </section>

        <!-- Divider -->
        <div class="border-t border-gray-200"></div>

        <!-- CTA Section -->
        <section>
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">Interesse an einer Zusammenarbeit?</h2>
          <p class="text-lg text-gray-700 mb-6">
            Ob du einen Designer brauchst, der in dein Produktteam eingebettet wird, oder die Flexibilität eines Design-Abos bevorzugst – lass uns reden.
          </p>
          <a
            href="mailto:tommy@designsnack.ch"
            class="inline-flex items-center bg-black text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors duration-200"
          >
            tommy@designsnack.ch
            <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
