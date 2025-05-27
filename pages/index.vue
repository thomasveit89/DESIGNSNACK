<template>
  <div class="relative min-h-screen">
    <!-- Custom cursor element -->
    <div class="cursor" ref="cursor"></div>
    
    <!-- Background elements/shapes would go here -->
    <!-- We can add these later -->

    <div class="container mx-auto px-4 py-8 grid grid-cols-12 gap-4">
      <!-- Header/Logo -->
      <div class="col-span-6 md:col-span-3 lg:col-span-2">
        <span class="text-lg font-semibold"><span class="text-[#768B9B]">DESIGN</span>SNACK</span>
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
        
        <!-- First row - Right to Left scrolling -->
        <div class="project-container" ref="projectContainer">
          <div class="project-row">
            <!-- Project 1 -->
            <div class="project-item">
              <div class="w-full h-full">
                <img 
                  src="/img/dashboard-design.png" 
                  alt="Dashboard Design" 
                  class="w-full h-full rounded-2xl object-cover project-image"
                >
              </div>
            </div>
            
            <!-- Project 2 -->
            <div class="project-item">
              <div class="w-full h-full">
                <img 
                  src="/img/app-design.png" 
                  alt="App Design" 
                  class="w-full h-full rounded-2xl object-cover project-image"
                >
              </div>
            </div>
            
            <!-- Project 3 -->
            <div class="project-item">
              <div class="w-full h-full">
                <img 
                  src="/img/design-system.png" 
                  alt="Design System" 
                  class="w-full h-full rounded-2xl object-cover project-image"
                >
              </div>
            </div>
            
            <!-- Project 4 -->
            <div class="project-item">
              <div class="w-full h-full">
                <img 
                  src="/img/football-app-design.png" 
                  alt="Football App Design" 
                  class="w-full h-full rounded-2xl object-cover project-image"
                >
              </div>
            </div>
          </div>
        </div>
        
        <!-- Second row - Left to Right scrolling -->
        <div class="project-container mt-16" ref="projectContainer2">
          <div class="project-row project-row-reverse">
            <!-- Project 1 -->
            <div class="project-item">
              <div class="w-full h-full">
                <img 
                  src="/img/landing-page-design.png" 
                  alt="Dashboard Design" 
                  class="w-full h-full rounded-2xl object-cover project-image"
                >
              </div>
            </div>
            
            <!-- Project 2 -->
            <div class="project-item">
              <div class="w-full h-full">
                <img 
                  src="/img/mobile-app-design.png" 
                  alt="App Design" 
                  class="w-full h-full rounded-2xl object-cover project-image"
                >
              </div>
            </div>
            
            <!-- Project 3 -->
            <div class="project-item">
              <div class="w-full h-full">
                <img 
                  src="/img/quiz-app-design.png" 
                  alt="Design System" 
                  class="w-full h-full rounded-2xl object-cover project-image"
                >
              </div>
            </div>
            
            <!-- Project 4 -->
            <div class="project-item">
              <div class="w-full h-full">
                <img 
                  src="/img/scouting-app-design.png" 
                  alt="Football App Design" 
                  class="w-full h-full rounded-2xl object-cover project-image"
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
// Power4 and Elastic easings are part of the GSAP core, so direct import might not be needed
// but if you encounter issues, you might need to import them specifically if using a modular GSAP setup
// import { Power4, Elastic } from 'gsap/all'; // Example if specific import is needed

import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)

const circleElement = ref(null)
const headingElement = ref(null)
// const cursor = ref(null) // Removed
let lastScrollTop = 0
let rotationValue = 0
let splitHeading = null;
let elasticButtonInstances = [];

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
    this.magneticPullY = 0.4; // Adjusted for a more uniform pull
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
    // Remove other listeners if any were added directly to the button by this instance
    // For example, the click listener for ripple if it was added.
    // This part needs careful management if you add more direct listeners.
  }
}

function initElasticButtons() {
  const buttons = document.querySelectorAll(".elastic-btn");
  buttons.forEach(button => {
    elasticButtonInstances.push(new ElasticButton(button));
  });
  // Initialize ripple effect for each button if you're keeping it
  elasticButtonInstances.forEach(instance => instance.createRipple());
}

const projectContainer = ref(null)
const projectContainer2 = ref(null)

// Define the handleScroll function
const handleScroll = () => {
  if (!circleElement.value) return;

  const st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > lastScrollTop) {
    // Downscroll
    rotationValue += 2; // Increment rotation
  } else {
    // Upscroll
    rotationValue -= 2; // Decrement rotation
  }
  gsap.to(circleElement.value, {
    rotation: rotationValue,
    duration: 0.3,
    ease: 'power2.out'
  });
  lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
};

onMounted(() => {
  // Initialize circle rotation
  window.addEventListener('scroll', handleScroll)
  
  // Initialize heading text animation
  initHeadingAnimation()
  
  // Initialize project images animations
  initProjectAnimations()

  // Initialize elastic buttons
  initElasticButtons() 
})

const initHeadingAnimation = () => {
  // Create the SplitText instance
  splitHeading = new SplitText(headingElement.value, {
    type: "lines,chars",
    linesClass: "line-mask",
    charsClass: "char"
  })
  
  // Set initial state - hide all characters
  gsap.set(splitHeading.chars, {
    y: 120,
    skewY: 10,
    opacity: 0
  })
  
  // Create the animation
  gsap.to(splitHeading.chars, {
    y: 0,
    skewY: 0,
    opacity: 1,
    duration: 0.6,
    stagger: 0.01,
    ease: "power4.out",
    delay: 0.3
  })
}

const initProjectAnimations = () => {
  // First row - Right to Left scrolling
  const projectRow = document.querySelector('.project-row')
  
  // Set initial position
  gsap.set(projectRow, {
    x: '0%'
  })
  
  // Create scroll trigger for the first row
  ScrollTrigger.create({
    trigger: projectContainer.value,
    start: "top bottom",
    end: "bottom top",
    markers: false,
    scrub: 0.5,
    pin: false,
    onUpdate: (self) => {
      const progress = self.progress;
      const totalWidth = projectRow.scrollWidth - projectContainer.value.offsetWidth;
      const xPosition = -(progress * totalWidth);
      
      gsap.set(projectRow, {
        x: xPosition
      });
    }
  });
  
  // Second row - Left to Right scrolling
  const projectRowReverse = document.querySelector('.project-row-reverse')
  
  // Set initial position (off-screen to the left)
  gsap.set(projectRowReverse, {
    x: '-100%'
  })
  
  // Create scroll trigger for the second row
  ScrollTrigger.create({
    trigger: projectContainer2.value,
    start: "top bottom",
    end: "bottom top",
    markers: false,
    scrub: 0.5,
    pin: false,
    onUpdate: (self) => {
      const progress = self.progress;
      const totalWidth = projectRowReverse.scrollWidth - projectContainer2.value.offsetWidth;
      // For left to right, we start negative and move toward positive
      const xPosition = -totalWidth + (progress * totalWidth);
      
      gsap.set(projectRowReverse, {
        x: xPosition
      });
    }
  });
}

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());

  
  // Restore default cursor
  document.body.style.cursor = 'auto'; // Ensure this is present
  
  // Clean up SplitText
  if (splitHeading) {
    splitHeading.revert();
  }
})
</script>

<style scoped>
body, html {
  overflow-x: hidden;
  width: 100%;
  position: relative;
}

.container {
  overflow-x: visible; /* Allow content to flow outside for the horizontal scroll effect */
}

.projects-section {
  position: relative;
  overflow: hidden; /* This will hide the overflow from the project rows */
  width: 100%;
}

.project-container {
  position: relative;
  width: 100%;
  height: 60vh;
  overflow: visible; /* Allow the row to extend beyond the container */
  margin-bottom: 4rem;
}

.project-row {
  display: flex;
  flex-direction: row;
  position: relative;
  height: 100%;
  will-change: transform;
  gap: 2rem;
  width: max-content;
}


.project-item {
  flex: 0 0 40vw;
  height: 100%;
  padding: 0;
}

.project-image {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .project-item {
    flex: 0 0 80vw;
  }
  
  .project-container {
    height: 50vh;
  }
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