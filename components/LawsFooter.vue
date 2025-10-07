<template>
  <footer class="mt-24 border-t border-gray-200">
    <div class="container mx-auto px-4 py-8">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <!-- Logo/Brand -->
        <div class="text-center md:text-left">
          <NuxtLink to="/" class="text-xl font-semibold hover:opacity-70 transition-opacity">
            <span class="text-[#768B9B]">DESIGN</span><span class="text-black">SNACK</span>
          </NuxtLink>
          <p class="text-sm text-gray-600 mt-1">Laws & Patterns</p>
        </div>

        <!-- Legal Links -->
        <div class="flex gap-6 text-sm">
          <NuxtLink
            to="/laws-and-patterns/privacy"
            class="text-gray-600 hover:text-black transition-colors"
          >
            Privacy Policy
          </NuxtLink>
          <NuxtLink
            to="/laws-and-patterns/terms"
            class="text-gray-600 hover:text-black transition-colors"
          >
            Terms of Service
          </NuxtLink>
        </div>

        <!-- Copyright -->
        <div class="text-sm text-gray-600 text-center md:text-right">
          © {{ currentYear }} DESIGNSNACK
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>
