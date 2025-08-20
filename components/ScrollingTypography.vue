<template>
  <div ref="container" class="scrolling-typography-section">
    <div class="content-wrapper">
      <div class="typography-content">
        <span class="static-text">We do </span>
        <span class="rotator" ref="rotator">
          <span 
            v-for="(service, index) in services" 
            :key="index"
            :ref="el => setServiceRef(el, index)"
            class="service-word"
          >
            {{ service }}
          </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Mobile detection utility
const isMobile = () => window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

const container = ref(null)
const rotator = ref(null)
const serviceRefs = ref([])

const services = [
  'UX/UI Design',
  'Prototyping', 
  'Web Development',
  'Mobile Apps',
  'Design Systems',
  'AI Automation',
  'Brand Identity',
  'User Research',
  'Frontend Development',
  'Digital Strategy'
]

const setServiceRef = (el, index) => {
  if (el) {
    serviceRefs.value[index] = el
  }
}

onMounted(async () => {
  await nextTick()
  setTimeout(() => {
    initScrollingAnimation()
  }, 100)
})

const initScrollingAnimation = () => {
  console.log('🔧 initScrollingAnimation called')
  
  if (!container.value) {
    console.log('❌ container.value is null')
    return
  }
  
  if (!rotator.value) {
    console.log('❌ rotator.value is null')
    return
  }
  
  console.log('✅ Container and rotator found')
  console.log('📦 serviceRefs.value:', serviceRefs.value)
  
  const words = serviceRefs.value.filter(el => el !== null)
  console.log('📝 Filtered words:', words.length, 'words found')
  
  if (words.length === 0) {
    console.log('❌ No words found after filtering')
    return
  }
  
  // Skip complex scroll animations on mobile
  if (isMobile()) {
    console.log('📱 Mobile detected - using simplified animation')
    
    // Simple rotation animation for mobile
    let currentIndex = 0
    words.forEach((word, index) => {
      gsap.set(word, { 
        opacity: index === 0 ? 1 : 0,
        visibility: index === 0 ? 'visible' : 'hidden',
        display: 'block'
      })
    })
    
    // Simple timer-based word rotation for mobile
    setInterval(() => {
      gsap.to(words[currentIndex], { opacity: 0, visibility: 'hidden', duration: 0.3 })
      currentIndex = (currentIndex + 1) % words.length
      gsap.to(words[currentIndex], { opacity: 1, visibility: 'visible', duration: 0.3 })
    }, 2000)
    
    return
  }
  
  // Log each word element
  words.forEach((word, index) => {
    console.log(`Word ${index}:`, word, word.textContent)
  })
  
  // Set initial states - hide all words except first
  console.log('🎨 Setting initial states...')
  words.forEach((word, index) => {
    if (index === 0) {
      gsap.set(word, { 
        opacity: 1,
        visibility: 'visible',
        display: 'block'
      })
      console.log(`✅ Set word ${index} visible (${word.textContent})`)
    } else {
      gsap.set(word, { 
        opacity: 0,
        visibility: 'hidden',
        display: 'block'
      })
      console.log(`👻 Set word ${index} hidden (${word.textContent})`)
    }
  })
  
  // Create ScrollTrigger
  console.log('🎯 Creating ScrollTrigger...')
  const scrollTrigger = ScrollTrigger.create({
    trigger: container.value,
    start: "top top",
    end: `+=${window.innerHeight * 2}`, // Much shorter - just 2 screen heights
    pin: true,
    scrub: 0.5,
    markers: true, // Enable markers for debugging
    onUpdate: (self) => {
      const progress = self.progress
      const totalWords = words.length
      
      // Fix: Better calculation for word transitions
      const totalSteps = totalWords - 1
      const currentStep = progress * totalSteps
      const currentWordIndex = Math.floor(currentStep)
      const nextWordIndex = Math.min(currentWordIndex + 1, totalWords - 1)
      
      // Progress between current and next word (0 to 1)
      const stepProgress = currentStep - currentWordIndex
      
      console.log(`📊 Progress: ${progress.toFixed(3)}, Step: ${currentStep.toFixed(3)}, Current word: ${currentWordIndex}, Step progress: ${stepProgress.toFixed(3)}`)
      
      // Simple approach: just show one word at a time based on progress
      const activeWordIndex = Math.round(progress * (totalWords - 1))
      
      words.forEach((word, index) => {
        if (index === activeWordIndex) {
          gsap.set(word, {
            opacity: 1,
            visibility: 'visible'
          })
          console.log(`👀 Showing word ${index}: ${word.textContent}`)
        } else {
          gsap.set(word, {
            opacity: 0,
            visibility: 'hidden'
          })
        }
      })
    },
    onEnter: () => console.log('🚀 ScrollTrigger entered'),
    onLeave: () => console.log('🚪 ScrollTrigger left'),
    onEnterBack: () => console.log('🔄 ScrollTrigger entered back'),
    onLeaveBack: () => console.log('↩️ ScrollTrigger left back')
  })
  
  console.log('✅ ScrollTrigger created:', scrollTrigger)
}

onUnmounted(() => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})
</script>

<style scoped>
.scrolling-typography-section {
  height: 100vh;
  position: relative;
  background: white;
  overflow: hidden;
}

.content-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.typography-content {
  font-size: clamp(3rem, 8vw, 8rem);
  font-weight: 500;
  color: #000;
  line-height: 1;
  text-align: center;
}

.static-text {
  color: #000;
}

.rotator {
  position: relative;
  display: inline-block;
  vertical-align: baseline;
  margin-left: 1rem;
  min-width: 15ch; /* Prevent layout shifts */
}

.service-word {
  position: absolute;
  top: 0;
  left: 0;
  color: #768B9B;
  white-space: nowrap;
  will-change: opacity, visibility;
}

/* Mobile optimizations */
@media (max-width: 768px) {
  .scrolling-typography-section {
    height: auto;
    min-height: 50vh;
    padding: 2rem 0;
  }
  
  .content-wrapper {
    height: auto;
    min-height: 50vh;
  }
  
  .service-word {
    will-change: auto;
  }
}

@media (max-width: 768px) {
  .typography-content {
    font-size: clamp(2rem, 12vw, 4rem);
  }
  
  .rotator {
    margin-left: 0.5rem;
    min-width: 4ch;
  }
}
</style>