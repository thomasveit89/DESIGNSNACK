<template>
  <div
    ref="loadingContainer"
    class="loading-screen fixed inset-0 z-50 flex items-center justify-center"
  >
    <!-- Main background -->
    <div class="loading-bg absolute inset-0"></div>
    
    <!-- Curved bottom that extends beyond the main container -->
    <div 
      ref="curvedBottom"
      class="curved-bottom absolute left-0 right-0"
    ></div>
    <div class="text-container relative perspective-1000">
      <div
        v-for="(greeting, index) in greetings"
        :key="greeting.language"
        :ref="el => textRefs[index] = el"
        class="greeting-text absolute inset-0 flex items-center justify-center text-4xl sm:text-5xl md:text-6xl font-bold text-black"
        :style="{ opacity: index === 0 ? 1 : 0 }"
      >
        {{ greeting.text }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { gsap } from 'gsap'

interface Greeting {
  language: string
  text: string
}

const greetings: Greeting[] = [
  { language: 'english', text: 'Hello' },
  { language: 'japanese', text: 'こんにちは' },
  { language: 'spanish', text: 'Hola' },
  { language: 'serbian', text: 'Zdravo' },
  { language: 'thai', text: 'สวัสดี' },
  { language: 'italian', text: 'Ciao' },
  { language: 'swiss-german', text: 'Grüezi' },
]

const loadingContainer = ref<HTMLElement>()
const textRefs = ref<HTMLElement[]>([])
const curvedBottom = ref<HTMLElement>()

const emit = defineEmits<{
  complete: []
}>()

onMounted(async () => {
  await nextTick()
  startLoadingAnimation()
})

const startLoadingAnimation = () => {
  const timeline = gsap.timeline()
  
  // Animate through each greeting
  greetings.forEach((greeting, index) => {
    if (index === 0) {
      // First greeting is already visible, just animate it out
      timeline.to(textRefs.value[0], {
        duration: 0.15,
        rotationX: -90,
        y: -50,
        opacity: 0,
        ease: "power2.in",
        transformOrigin: "center bottom"
      }, 0.3)
    }
    
    if (index < greetings.length - 1) {
      const nextIndex = index + 1
      
      // Animate next greeting in
      timeline.fromTo(textRefs.value[nextIndex], {
        rotationX: 90,
        y: 50,
        opacity: 0,
        transformOrigin: "center top"
      }, {
        duration: 0.15,
        rotationX: 0,
        y: 0,
        opacity: 1,
        ease: "power2.out"
      }, index * 0.3 + 0.3)
      
      // If not the last greeting, animate it out
      if (nextIndex < greetings.length - 1) {
        timeline.to(textRefs.value[nextIndex], {
          duration: 0.15,
          rotationX: -90,
          y: -50,
          opacity: 0,
          ease: "power2.in",
          transformOrigin: "center bottom"
        }, (nextIndex) * 0.3 + 0.3)
      }
    }
  })
  
  // Emit complete when language animation finishes (no exit animation here)
  timeline.call(() => {
    emit('complete')
  }, null, greetings.length * 0.3 + 0.3)
}
</script>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
}

.greeting-text {
  backface-visibility: hidden;
  transform-style: preserve-3d;
}

.loading-screen {
  min-height: 100vh;
  min-height: 100dvh;
}

.loading-bg {
  background: #ffffff;
}

.curved-bottom {
  bottom: -150px;
  left: 50%;
  transform: translateX(-50%);
  width: 150vw;
  height: 300px;
  background: #ffffff;
  border-radius: 50%;
  transform-origin: center top;
  z-index: -1;
}
</style>