<template>
  <div
    ref="monsterContainer"
    class="absolute -top-10 -right-8 w-[220px] z-0 pointer-events-auto md:pointer-events-auto"
    @mouseenter="onHover"
    @mouseleave="onLeave"
  >
    <!-- Inline SVG so we can animate the eyes -->
    <svg
      ref="monsterSvg"
      class="w-full h-auto block"
      style="filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15));"
      viewBox="0 0 241 331"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M30.3509 325.627C19.8345 336.624 1.28469 329.221 1.22207 314.001L0.000150486 17.0044C-0.0491861 5.01256 12.0428 -3.22237 23.1761 1.22107L229.619 83.6158C240.753 88.0592 243.858 102.36 235.572 111.025L30.3509 325.627Z" fill="#FBC02A"/>
      <path d="M94.5001 165.499C87.9535 181.871 69.3857 178.533 66.9533 177.889C64.5163 177.245 46.2752 173.059 44.1676 151.829" stroke="black" stroke-width="4" stroke-linecap="round"/>
      <path d="M101.085 164.161C99.3829 166.372 96.2118 166.784 94.0017 165.082C91.7915 163.38 91.3794 160.209 93.0811 157.999" stroke="black" stroke-width="4" stroke-linecap="round"/>
      <path d="M47.6254 144.998C48.4713 147.656 47.0024 150.497 44.3444 151.343C41.6864 152.188 38.8459 150.719 38 148.062" stroke="black" stroke-width="4" stroke-linecap="round"/>

      <!-- Left eye -->
      <g ref="leftEye">
        <circle cx="56" cy="113" r="23" fill="white"/>
        <circle cx="56" cy="117" r="14" fill="#111827"/>
      </g>

      <!-- Right eye -->
      <g ref="rightEye">
        <circle cx="127" cy="140" r="23" fill="white"/>
        <circle cx="127.001" cy="143" r="14" fill="#111827"/>
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

const monsterContainer = ref<HTMLElement>()
const monsterSvg = ref<SVGElement>()
const leftEye = ref<SVGGElement>()
const rightEye = ref<SVGGElement>()

let blinkInterval: ReturnType<typeof setInterval> | null = null
let hideTimeout: ReturnType<typeof setTimeout> | null = null
let currentAnimation: gsap.core.Tween | null = null

// Animation states
enum MonsterState {
  HIDDEN = 'hidden',        // Invisible, y: 0
  PEEKING = 'peeking',      // Visible, y: -130
  RESTING = 'resting',      // Visible, y: -80
  ANIMATING = 'animating'   // Currently animating, don't interrupt
}

let currentState = ref<MonsterState>(MonsterState.HIDDEN)

// Mobile detection
const isMobile = () => {
  if (typeof window === 'undefined') return false
  return window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

// Peek animation (slide up and fade in)
const peek = (fromHover = false) => {
  if (!monsterContainer.value) return

  // If hovering, always respond - kill any existing animations and restart
  if (fromHover) {
    if (currentAnimation) currentAnimation.kill()
    if (hideTimeout) clearTimeout(hideTimeout)
  } else {
    // For automatic peek (on load), respect state guards
    if (currentState.value === MonsterState.ANIMATING) return
    if (currentState.value === MonsterState.PEEKING) return
  }

  currentState.value = MonsterState.ANIMATING

  // State 2: Slide up and fade in
  currentAnimation = gsap.to(monsterContainer.value, {
    opacity: 1,
    y: -130, // Slides up (adjust this value to control how far it peeks)
    duration: 1,
    ease: "elastic.out(1,0.3)",
    onComplete: () => {
      currentState.value = MonsterState.PEEKING
      currentAnimation = null

      // Schedule hide after 600ms
      hideTimeout = setTimeout(() => {
        hide()
      }, 600)
    }
  })
}

// Hide animation (slide back down, stay visible)
const hide = () => {
  if (!monsterContainer.value) return

  // Don't interrupt if already animating
  if (currentState.value === MonsterState.ANIMATING) return

  // Don't hide if already resting
  if (currentState.value === MonsterState.RESTING) return

  // Kill any existing animations
  if (currentAnimation) currentAnimation.kill()

  currentState.value = MonsterState.ANIMATING

  // State 3: Slide back down but keep opacity at 1
  currentAnimation = gsap.to(monsterContainer.value, {
    opacity: 1, // Stays visible
    y: -80, // Returns to original position (behind card)
    duration: 1,
    ease: "elastic.out(1,0.3)",
    onComplete: () => {
      currentState.value = MonsterState.RESTING
      currentAnimation = null
    }
  })
}

// Blink animation (works in any state except HIDDEN)
const blink = () => {
  if (!leftEye.value || !rightEye.value) return

  // Only skip blink when completely hidden
  if (currentState.value === MonsterState.HIDDEN) {
    return
  }

  // Animate both eyes by squashing them vertically
  const timeline = gsap.timeline()

  timeline.to([leftEye.value, rightEye.value], {
    scaleY: 0.1,
    transformOrigin: 'center center',
    duration: 0.08,
    ease: 'power2.in'
  })
  .to([leftEye.value, rightEye.value], {
    scaleY: 1,
    duration: 0.08,
    ease: 'power2.out'
  })
}

// Random blink interval (8-12 seconds)
const startBlinking = () => {
  const randomInterval = () => Math.random() * 1000 + 4000 // 8-12 seconds

  const scheduleBlink = () => {
    blinkInterval = setTimeout(() => {
      blink()
      scheduleBlink() // Schedule next blink
    }, randomInterval())
  }

  scheduleBlink()
}

// Stop blinking
const stopBlinking = () => {
  if (blinkInterval) {
    clearTimeout(blinkInterval)
    blinkInterval = null
  }
}

// Hover handlers (desktop only)
const onHover = () => {
  if (isMobile()) return

  // Trigger a blink on hover
  blink()

  // Then peek (pass true to indicate this is from hover)
  peek(true)
}

const onLeave = () => {
  if (isMobile()) return
  // Monster will hide automatically after peek duration
}

onMounted(() => {
  // State 1: Initial hidden state (invisible, positioned behind card)
  if (monsterContainer.value) {
    gsap.set(monsterContainer.value, { opacity: 0, y: 0 })
    currentState.value = MonsterState.HIDDEN
  }

  // Peek after card animation completes (card takes 1s + 0.2s delay = 1.2s total)
  setTimeout(() => {
    peek()
  }, 1400) // Card finishes at 1.2s, wait extra 200ms then peek

  // Start random blinking
  startBlinking()
})

onUnmounted(() => {
  stopBlinking()
  if (hideTimeout) clearTimeout(hideTimeout)
  if (currentAnimation) currentAnimation.kill()
})
</script>

<style scoped>
/* Mobile adjustments */
@media (max-width: 768px) {
  [class*="w-[220px]"] {
    width: 160px;
    right: -1.25rem;
    top: -0.8rem;
    pointer-events: none;
  }
}
</style>
