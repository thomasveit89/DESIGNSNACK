<template>
  <div class="app-container">
    <!-- Background Triangles -->
    <svg 
      ref="triangle1"
      class="bg-triangle triangle-1" 
      width="1000" 
      height="1000" 
      viewBox="0 0 1000 1000"
    >
      <polygon 
        ref="polygon1"
        points="500,125 875,750 125,750" 
        fill="transparent" 
        stroke="#F5F5F5" 
        stroke-width="2"
        opacity="0.7"
      />
    </svg>
    
    <svg 
      ref="triangle2"
      class="bg-triangle triangle-2" 
      width="800" 
      height="800" 
      viewBox="0 0 800 800"
    >
      <polygon 
        ref="polygon2"
        points="400,105 665,600 135,600" 
        fill="transparent" 
        stroke="#F5F5F5" 
        stroke-width="2"
        opacity="0.7"
      />
    </svg>

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
const triangle1 = ref<SVGElement>()
const triangle2 = ref<SVGElement>()
const polygon1 = ref<SVGPolygonElement>()
const polygon2 = ref<SVGPolygonElement>()

let lastScrollTop = 0
let rotationValue = 0

// Mobile detection utility
const isMobile = () => window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

const handleScroll = () => {
  // Skip expensive scroll animations on mobile
  if (isMobile()) return;
  
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

const initTriangleAnimations = () => {
  if (!triangle1.value || !triangle2.value || !polygon1.value || !polygon2.value) return
  
  // Skip heavy animations on mobile devices
  if (isMobile()) {
    // Simple, lightweight animations for mobile
    gsap.to(triangle1.value, {
      rotation: 360,
      duration: 60,
      ease: "none",
      repeat: -1
    })
    
    gsap.to(triangle2.value, {
      rotation: -360,
      duration: 80,
      ease: "none",
      repeat: -1
    })
    return
  }
  
  // Full animations for desktop
  // Triangle 1 - Floating animation
  gsap.to(triangle1.value, {
    x: () => gsap.utils.random(-150, 150),
    y: () => gsap.utils.random(-100, 100),
    rotation: () => gsap.utils.random(-30, 30),
    scale: () => gsap.utils.random(0.8, 1.2),
    duration: () => gsap.utils.random(15, 25),
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true
  })
  
  // Triangle 2 - Different timing for variety  
  gsap.to(triangle2.value, {
    x: () => gsap.utils.random(-180, 180),
    y: () => gsap.utils.random(-120, 120),
    rotation: () => gsap.utils.random(-35, 35),
    scale: () => gsap.utils.random(0.7, 1.3),
    duration: () => gsap.utils.random(18, 28),
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
    delay: 4
  })
  
  // Dynamic triangle shape morphing - Triangle 1 (1000px)
  gsap.to(polygon1.value, {
    attr: {
      points: () => {
        const centerX = 500
        const centerY = 437
        const p1X = centerX + gsap.utils.random(-125, 125)
        const p1Y = 125 + gsap.utils.random(-60, 60)
        const p2X = 875 + gsap.utils.random(-175, 175)
        const p2Y = centerY + gsap.utils.random(-125, 125)
        const p3X = 125 + gsap.utils.random(-60, 175)
        const p3Y = centerY + gsap.utils.random(-125, 125)
        return `${p1X},${p1Y} ${p2X},${p2Y} ${p3X},${p3Y}`
      }
    },
    duration: () => gsap.utils.random(20, 30),
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
    delay: 2
  })
  
  // Dynamic triangle shape morphing - Triangle 2 (800px)
  gsap.to(polygon2.value, {
    attr: {
      points: () => {
        const centerX = 400
        const centerY = 352
        const p1X = centerX + gsap.utils.random(-100, 100)
        const p1Y = 105 + gsap.utils.random(-50, 50)
        const p2X = 665 + gsap.utils.random(-150, 150)
        const p2Y = centerY + gsap.utils.random(-100, 100)
        const p3X = 135 + gsap.utils.random(-50, 150)
        const p3Y = centerY + gsap.utils.random(-100, 100)
        return `${p1X},${p1Y} ${p2X},${p2Y} ${p3X},${p3Y}`
      }
    },
    duration: () => gsap.utils.random(25, 35),
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
    delay: 7
  })
};

onMounted(() => {
  // Start at top and disable scrolling during loading
  window.scrollTo(0, 0)
  document.body.style.overflow = 'hidden'
  
  // Initialize circle scroll animation
  window.addEventListener('scroll', handleScroll)
  
  // Initialize triangle animations
  initTriangleAnimations()
  
  // It might be beneficial to refresh ScrollTrigger here too, before loading animations
  // ScrollTrigger.refresh(); // Optional: refresh once before initial animations
})

const onLoadingComplete = () => {
  // Enable scrolling
  document.body.style.overflow = 'auto'
  
  // Change theme color to white for main content
  const themeColorMeta = document.querySelector('meta[name="theme-color"]')
  if (themeColorMeta) {
    themeColorMeta.setAttribute('content', '#ffffff')
  }
  
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

/* Background Triangles */
.bg-triangle {
  position: absolute;
  pointer-events: none;
  z-index: -1;
  will-change: transform;
}

.triangle-1 {
  top: 20vh;
  left: 20vw;
  transform: translate(-50%, -50%);
}

.triangle-2 {
  top: 30vh;
  left: 60vw;
  transform: translate(-50%, -50%);
}

@media (max-width: 768px) {
  .bg-triangle {
    opacity: 0.4;
    scale: 0.6;
    will-change: transform;
  }
  
  /* Hide circle element on mobile for better performance */
  .fixed.top-8.right-24 {
    display: none;
  }
}
</style>
