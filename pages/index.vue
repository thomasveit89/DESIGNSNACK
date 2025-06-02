<template>
  <div class="relative min-h-screen">
    <!-- Custom cursor element -->
    <div class="cursor" ref="cursor"></div>
    
    <!-- Background elements/shapes would go here -->
    <!-- We can add these later -->

    <div class="container mx-auto px-4 py-8 grid grid-cols-12 gap-4">
      <!-- Header/Logo -->
      <div class="col-span-6 md:col-span-3 lg:col-span-2">
        <span class="text-2xl font-semibold"><span class="text-[#768B9B]">DESIGN</span>SNACK</span>
      </div>

      <!-- Circular element -->
      <div class="col-span-6 md:col-span-9 lg:col-span-10 relative">
        <img 
          src="/img/circle-type.svg" 
          alt="DESIGNSNACK EST 2025 CH" 
          class="fixed right-24 w-24 h-24 hidden md:block"
          ref="circleElement"
        >
      </div>

      <!-- Main Content Area -->
      <div class="col-span-12 grid grid-cols-12 gap-4 mt-32">
        <!-- Heading - full width (12 columns) -->
        <div class="col-span-12 mb-8">
          <h1 ref="headingElement" class="text-8xl font-medium leading-none overflow-hidden hoverable">
            <span class="heading-line text-gray-900">Leckerbissen für intuitive</span><br>
            <span class="heading-line text-[#768B9B]">User Experience</span>
          </h1>
        </div>

        <!-- Button and Description - 6 columns each -->
        <div class="col-span-12 md:col-span-6">
          <button class="bg-black text-white px-12 py-6 rounded-full text-xl font-medium flex items-center elastic-btn">
            Let's chat
            <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </button>
        </div>

        <div class="col-span-12 md:col-span-6 mt-8 md:mt-0">
          <p class="text-3xl text-gray-700">
            Wir konzipieren und entwickeln digitale Produkte, die nicht nur gut aussehen, sondern auch hervorragend funktionieren.
          </p>
        </div>
      </div>
    </div>

    <!-- Projects Section -->
    <div class="projects-section mt-32">
      <div class="container mx-auto px-4">
        <h2 class="text-[2rem] font-semibold text-black mb-12">
          Auswahl unserer Projekte
        </h2>
        
        <!-- Simple Grid Layout -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Row 1 -->
          <div class="project-card">
            <img 
              src="/img/dashboard-design.png" 
              alt="Dashboard Design" 
              class="w-full h-64 rounded-2xl object-cover"
            >
          </div>
          
          <div class="project-card">
            <img 
              src="/img/app-design.png" 
              alt="App Design" 
              class="w-full h-64 rounded-2xl object-cover"
            >
          </div>
          
          <div class="project-card">
            <img 
              src="/img/design-system.png" 
              alt="Design System" 
              class="w-full h-64 rounded-2xl object-cover"
            >
          </div>
          
          <div class="project-card">
            <img 
              src="/img/football-app-design.png" 
              alt="Football App Design" 
              class="w-full h-64 rounded-2xl object-cover"
            >
          </div>
          
          <!-- Row 2 -->
          <div class="project-card">
            <img 
              src="/img/landing-page-design.png" 
              alt="Landing Page Design" 
              class="w-full h-64 rounded-2xl object-cover"
            >
          </div>
          
          <div class="project-card">
            <img 
              src="/img/mobile-app-design.png" 
              alt="Mobile App Design" 
              class="w-full h-64 rounded-2xl object-cover"
            >
          </div>
          
          <div class="project-card">
            <img 
              src="/img/quiz-app-design.png" 
              alt="Quiz App Design" 
              class="w-full h-64 rounded-2xl object-cover"
            >
          </div>
          
          <div class="project-card">
            <img 
              src="/img/scouting-app-design.png" 
              alt="Scouting App Design" 
              class="w-full h-64 rounded-2xl object-cover"
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Spacer -->
    <div class="h-32"></div>

    <!-- Typography Section - Based on CodePen example -->
    <div ref="typographySection" class="w-full h-screen bg-[#768B9B] flex items-center justify-center relative z-10">
      <div class="flex items-center gap-8">
        <!-- Right side - Scrolling text -->
        <div ref="scrollingText" class="text-[#697C8B] text-5xl md:text-7xl font-medium text-center px-20">
          DESIGNSNACK bringt erfahrene UX/UI Designer in Ihr Produktteam - schnell. Keine Recruiter, kein Overhead, kein Unsinn. Nur eingebettete, kampferprobte UX-Expertise für Fintech-, Bank- und Versicherungsteams, die schneller vorankommen müssen.
        </div>
      </div>
    </div>
    
    <!-- Next Section Placeholder -->
    <div class="next-section">
      <div class="container mx-auto px-4 py-32">
        <h2 class="text-6xl font-semibold text-black text-center">
          Ready to work together?
        </h2>
        <p class="text-2xl text-gray-600 text-center mt-8">
          Let's create something amazing.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)

const circleElement = ref(null)
const headingElement = ref(null)
const typographySection = ref(null)
const scrollingText = ref(null)

let lastScrollTop = 0
let rotationValue = 0
// let splitHeading = null; // This was for a different animation, can be kept or removed if not used elsewhere
let elasticButtonInstances = [];
let typographyTimeline = null; // To store the timeline for cleanup
let splitTextInstance = null; // To store the SplitText instance for cleanup

class ElasticButton {
  constructor(HTMLButtonElement) {
    this.button = HTMLButtonElement;
    this.width = 0;
    this.height = 0;
    this.left = 0;
    this.top = 0;
    this.x = 0;
    this.y = 0;
    this.cursorX = 0;
    this.cursorY = 0;
    this.magneticPullX = 0.4;
    this.magneticPullY = 0.4; 
    this.isHovering = false;

    // Bind methods to ensure 'this' context is correct
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.init();
  }

  init() {
    const rect = this.button.getBoundingClientRect();
    this.width = rect.width;
    this.height = rect.height;
    document.body.addEventListener("mousemove", this.handleMouseMove);
  }

  handleMouseMove(e) {
    this.cursorX = e.clientX;
    this.cursorY = e.clientY;

    // Get button's current position relative to the viewport
    const rect = this.button.getBoundingClientRect();

    // Calculate button's center in viewport coordinates
    const buttonCenterXInViewport = rect.left + this.width / 2;
    const buttonCenterYInViewport = rect.top + this.height / 2;

    // Calculate the vector from the button's center to the cursor (still in viewport coordinates)
    // This is the raw displacement GSAP needs to counteract or follow
    this.x = this.cursorX - buttonCenterXInViewport;
    this.y = this.cursorY - buttonCenterYInViewport;

    // Distance calculation for hover detection remains the same logic
    const distance = Math.sqrt(this.x * this.x + this.y * this.y);
    // The hoverArea is based on button dimensions, which is fine
    const hoverArea = this.isHovering ? this.width * 0.8 : this.width * 0.7;

    if (distance < hoverArea) {
      if (!this.isHovering) {
        this.isHovering = true;
        this.onEnter(); // onEnter will use this.x and this.y
      }
      this.updatePosition(); // updatePosition will use this.x and this.y
    } else {
      if (this.isHovering) {
        this.onLeave();
        this.isHovering = false;
      }
    }
  }

  updatePosition = () => {
    // this.x and this.y are now the direct displacement values (cursor relative to button center)
    // GSAP will apply these as transforms relative to the button's current layout position
    gsap.to(this.button, {
      x: this.x * this.magneticPullX,
      y: this.y * this.magneticPullY,
      duration: 0.4,
      ease: 'power2.out'
    });
  };

  onEnter = () => {
    gsap.to(this.button, {
      x: this.x * this.magneticPullX,
      y: this.y * this.magneticPullY,
      duration: 0.4,
      ease: 'power4.easeOut'
    });
  };

  onLeave = () => {
    gsap.to(this.button, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: 'elastic.easeOut(1.1, 0.5)' // GSAP 3 syntax for elastic ease
    });
  };

  // The ripple effect is optional as you mentioned.
  // I'm including it for completeness based on the example.
  // You can remove createRipple and its call if not needed.
  createRipple = () => {
    this.button.addEventListener("click", (e) => {
      // Calculate ripple position relative to the button itself, not the page.
      const rect = this.button.getBoundingClientRect();
      const circle = document.createElement("span");
      const diameter = Math.max(this.button.clientWidth, this.button.clientHeight);
      const radius = diameter / 2;

      circle.style.width = circle.style.height = `${diameter}px`;
      // Position ripple based on click relative to the button's current visual position
      circle.style.left = `${e.clientX - rect.left - radius}px`;
      circle.style.top = `${e.clientY - rect.top - radius}px`;
      circle.classList.add("ripple");

      // Style for ripple - add this to your <style scoped> or global CSS
      // .ripple { position: absolute; border-radius: 50%; transform: scale(0); animation: ripple 0.6s linear; background-color: rgba(255, 255, 255, 0.7); }
      // @keyframes ripple { to { transform: scale(4); opacity: 0; } }

      const existingRipple = this.button.querySelector(".ripple");
      if (existingRipple) {
        existingRipple.remove();
      }
      this.button.appendChild(circle);
    });
  };

  destroy() {
    document.body.removeEventListener("mousemove", this.handleMouseMove);
  }
}

const initElasticButtons = () => {
  const buttons = document.querySelectorAll('.elastic-btn');
  elasticButtonInstances = Array.from(buttons).map(btn => new ElasticButton(btn));
};

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
  window.addEventListener('scroll', handleScroll);
  initElasticButtons();

  // GSAP animation for typography section
  if (typographySection.value && scrollingText.value) {
    splitTextInstance = new SplitText(scrollingText.value, { type: "words" });

    typographyTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: typographySection.value,
        start: "top top",
        end: "bottom top", 
        pin: true,
        pinSpacing: true,
        pinType: "transform",
        scrub: 0.75, // Increased scrub value slightly for potentially smoother updates
      }
    })
    .to(splitTextInstance.words, {
      color: "#fff", 
      stagger: 0.1, 
      duration: 0.2, // This duration is relative to the timeline's progress through the scrub
    });
  }

  // Initialize heading animation if headingElement exists
  if (headingElement.value) {
    // Assuming splitHeading was intended for this, or create a new SplitText instance
    // For now, I'll comment out the splitHeading logic as it's not fully defined in the previous context
    /*
    splitHeading = new SplitText(headingElement.value, { type: "lines", linesClass: "heading-line-wrapper" });
    gsap.from(splitHeading.lines, {
      y: 100,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: headingElement.value,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
    */
  }
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  elasticButtonInstances.forEach(instance => instance.destroy());
  elasticButtonInstances = [];

  // Cleanup GSAP animations and SplitText
  if (typographyTimeline) {
    typographyTimeline.kill();
    typographyTimeline = null;
  }
  if (splitTextInstance) {
    splitTextInstance.revert(); // Reverts the DOM changes made by SplitText
    splitTextInstance = null;
  }
  // If splitHeading was used, clean it up too
  /*
  if (splitHeading) {
    splitHeading.revert();
  }
  */
  // It's also a good idea to kill all ScrollTriggers associated with the component
  ScrollTrigger.getAll().forEach(trigger => {
    // Check if the trigger is associated with elements in this component
    // This is a bit broad; ideally, you'd only kill triggers created by this component.
    // For now, this is a general cleanup. If you have global ScrollTriggers, be more specific.
    if (trigger.trigger === typographySection.value || (headingElement.value && trigger.trigger === headingElement.value)) {
        trigger.kill();
    }
  });
});

</script>

<style>
body, html {
  overflow-x: hidden;
  /* width: 100%; // Consider if this is strictly needed with overflow-x: hidden */
  /* position: relative; // This might interact with fixed pinning; test with and without if issues persist with pinType: 'transform' */
}

.project-card {
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-4px);
}

/* Make sure the cursor is visible on all elements */
*, *::before, *::after {
  box-sizing: border-box;
  /* cursor: none; */ /* Removed to restore default cursor */
}
/* Add this if you keep the ripple effect */
:deep(.elastic-btn .ripple) {
  position: absolute;
  border-radius: 50%;
  transform: scale(0);
  animation: ripple-animation 0.6s linear;
  background-color: rgba(255, 255, 255, 0.7);
  pointer-events: none; /* So it doesn't interfere with button clicks */
}

@keyframes ripple-animation {
  to {
    transform: scale(4);
    opacity: 0;
  }
}

.elastic-btn {
  /* Add some basic styling to make buttons visible */
  transition: transform 0.1s ease-out; /* For smoother visual feedback if needed */
}
</style>