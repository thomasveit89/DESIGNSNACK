<template>
  <div class="relative w-full max-w-[520px] mx-auto">
    <!-- Monster behind the card -->
    <SnackMonster />

    <div
      ref="cardScene"
      class="relative w-full"
      style="perspective: 1200px;"
    >
      <div
        ref="cardContainer"
        class="relative w-full h-[440px]"
        style="transform-style: preserve-3d; transform-origin: center;"
      >
        <!-- Front of Card -->
        <div
          class="absolute w-full h-full bg-[#FAFAF9] rounded-[28px] px-12 py-14 shadow-xl overflow-hidden"
          style="backface-visibility: hidden; transform: rotateY(0deg);"
        >
          <!-- Subtle paper texture overlay -->
          <div
            class="absolute inset-0 pointer-events-none opacity-50"
            style="background-image: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.01) 2px, rgba(0, 0, 0, 0.01) 4px), repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0, 0, 0, 0.01) 2px, rgba(0, 0, 0, 0.01) 4px);"
          ></div>

          <div class="relative z-10 flex flex-col items-start justify-center gap-7 h-full">
            <h2 class="text-[40px] font-semibold leading-tight m-0 flex flex-wrap gap-2">
              <span class="text-gray-900 font-semibold leading-[68px]">{{ greeting.title.split(' ')[0] }}</span>
              <span class="text-[50px] text-[#768B9B]" style="font-family: 'Delicious Handrawn', cursive; font-weight: 400; ">{{ greeting.firstName }}</span>
            </h2>

            <div class="flex flex-col gap-2">
              <p
                v-for="(line, index) in greeting.lines"
                :key="index"
                class="text-[22px] font-medium leading-relaxed text-gray-900 m-0"
              >
                {{ line }}
              </p>
            </div>

            <button
              @click="flipCard"
              class="bg-gray-900 text-white px-11 py-[18px] rounded-full text-lg font-medium border-none cursor-pointer transition-all duration-300 mt-2 hover:bg-black hover:scale-105 active:scale-95"
            >
              {{ greeting.ctaLabel }}
            </button>
          </div>
        </div>

        <!-- Back of Card (Gift) -->
        <div
          class="absolute w-full h-full bg-[#FAFAF9] rounded-[28px] px-12 py-14 shadow-xl overflow-hidden"
          style="backface-visibility: hidden; transform: rotateY(180deg);"
        >
          <!-- Subtle paper texture overlay -->
          <div
            class="absolute inset-0 pointer-events-none opacity-50"
            style="background-image: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.01) 2px, rgba(0, 0, 0, 0.01) 4px), repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0, 0, 0, 0.01) 2px, rgba(0, 0, 0, 0.01) 4px);"
          ></div>

          <div class="relative z-10 flex flex-col items-start justify-center gap-8 h-full">
            <h2 class="text-[36px] font-semibold text-gray-900 m-0 leading-tight">
              {{ greeting.offerHeadline }}
            </h2>

            <p class="text-[22px] font-medium leading-relaxed text-gray-900 m-0">
              {{ greeting.offerMessage }}
            </p>

            <button
              @click="flipCard"
              class="bg-gray-900 text-white px-11 py-[18px] rounded-full text-lg font-medium border-none cursor-pointer transition-all duration-300 mt-2 hover:bg-black hover:scale-105 active:scale-95"
            >
              {{ greeting.ctaBackLabel }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import type { Greeting } from '~/types/greeting'
import SnackMonster from './SnackMonster.vue'

const props = defineProps<{
  greeting: Greeting
}>()

const cardScene = ref<HTMLElement>()
const cardContainer = ref<HTMLElement>()
const isFlipped = ref(false)

// 3D flip animation
const flipCard = () => {
  if (!cardContainer.value) return

  isFlipped.value = !isFlipped.value

  gsap.to(cardContainer.value, {
    rotateY: isFlipped.value ? 180 : 0,
    duration: 0.8,
    ease: 'power2.inOut'
  })
}

// Initial card entrance animation
onMounted(() => {
  if (!cardScene.value) return

  // Card enters with depth and slight rotation
  gsap.fromTo(
    cardScene.value,
    {
      opacity: 1,
      y: 800,
      z: -100,
      scale: 0.9
    },
    {
      opacity: 1,
      y: 0,
      z: 0,
      scale: 1,
      duration: 1,
      ease: 'power2.out',
      delay: 0.2
    }
  )
})
</script>

<style scoped>
/* Import Delicious Handrawn font for the name */
@import url('https://fonts.googleapis.com/css2?family=Delicious+Handrawn&display=swap');

/* Mobile adjustments */
@media (max-width: 768px) {
  /* Adjust card container height */
  [class*="h-[440px]"] {
    height: 480px;
  }

  /* Adjust card padding */
  [class*="px-12"][class*="py-14"] {
    padding: 2.5rem 2rem;
  }

  /* Adjust front card title - "Hey" part */
  [class*="text-[40px]"] {
    font-size: 32px;
    line-height: 62px;
  }

  /* Adjust front card title - Name part */
  [class*="text-[50px]"] {
    font-size: 38px;
  }

  /* Adjust back card headline */
  [class*="text-[36px]"] {
    font-size: 28px;
  }

  /* Adjust message line size */
  [class*="text-[22px]"] {
    font-size: 19px;
  }

  /* Adjust button padding */
  button[class*="px-11"] {
    padding-left: 2.25rem;
    padding-right: 2.25rem;
    font-size: 17px;
  }

  /* Hide texture on mobile for performance */
  [class*="repeating-linear-gradient"] {
    display: none;
  }
}
</style>
