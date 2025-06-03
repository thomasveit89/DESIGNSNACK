<template>
  <div class="app-container">
    <!-- Main Content -->
    <div
      ref="mainContent"
      class="main-content"
    >
      <NuxtRouteAnnouncer />
      <NuxtPage />
    </div>
    
    <!-- Loading Screen - fixed on top -->
    <div
      ref="loadingSection"
      class="loading-section"
    >
      <LoadingScreen @complete="onLoadingComplete" />
    </div>

     <!-- Moved Circular element -->
     <div class="fixed top-8 right-24 z-50">
      <img 
        src="/img/circle-type.svg" 
        alt="DESIGNSNACK EST 2025 CH" 
        class="w-24 h-24 hidden md:block"
        ref="circleElement"
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Add this line early, before other ScrollTrigger setups if possible
ScrollTrigger.normalizeScroll(true);

const loadingSection = ref<HTMLElement>()
const mainContent = ref<HTMLElement>()
const circleElement = ref<HTMLElement>()

let lastScrollTop = 0
let rotationValue = 0

const handleScroll = () => {
  const st = window.pageYOffset || document.documentElement.scrollTop;
  if (circleElement.value) {
    if (st > lastScrollTop) {
      // Downscroll
      rotationValue += 2; // Adjust rotation speed as needed
    } else {
      // Upscroll
      rotationValue -= 2; // Adjust rotation speed as needed
    }
    gsap.to(circleElement.value, {
      rotation: rotationValue,
      duration: 0.3,
      ease: 'power2.out'
    });
  }
  lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
};

onMounted(() => {
  // Start at top and disable scrolling during loading
  window.scrollTo(0, 0)
  document.body.style.overflow = 'hidden'
  
  // Initialize circle scroll animation
  window.addEventListener('scroll', handleScroll)
  
  // It might be beneficial to refresh ScrollTrigger here too, before loading animations
  // ScrollTrigger.refresh(); // Optional: refresh once before initial animations
})

const onLoadingComplete = () => {
  // Enable scrolling
  document.body.style.overflow = 'auto'
  
  // Create master timeline to coordinate all exit animations
  const masterTimeline = gsap.timeline()
  
  // Add curved bottom reference for the flattening animation
  const curvedBottom = loadingSection.value?.querySelector('.curved-bottom')
  
  masterTimeline
    // Loading screen slides up
    .to(loadingSection.value, {
      y: "-100vh",
      duration: 1.2,
      ease: "back.out(1.7)"
    }, "exit")
    
    // Curved bottom flattens simultaneously
    .to(curvedBottom, {
      scaleY: 0.1,
      duration: 1.2,
      ease: "power2.out"
    }, "exit")
    
    // Content slides up slightly overlapped for seamless transition
    .to(mainContent.value, {
      y: 0,
      duration: 0.9,
      ease: "power2.out"
    }, "exit+=0.2")
    
    // Hide loading screen and refresh ScrollTrigger when complete
    .call(() => {
      if (loadingSection.value) {
        loadingSection.value.style.display = 'none'
      }
      // This refresh is crucial and seems correctly placed
      ScrollTrigger.refresh()
    })
}

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
.app-container {
  position: relative;
  overflow-x: hidden;
}

.loading-section {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 9999;
}

.main-content {
  position: relative;
  min-height: 100vh;
  width: 100%;
  transform: translateY(100vh);
  /* Consider adding will-change during the animation phase if performance is an issue */
  /* will-change: transform; */ 
}

body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

html {
  margin: 0;
  padding: 0;
}
</style>
