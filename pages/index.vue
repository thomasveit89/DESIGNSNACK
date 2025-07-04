<template>
  <div class="relative min-h-screen">
    <div class="container mx-auto px-4 py-8 grid grid-cols-12 gap-4">
      <!-- Header/Logo -->
      <div class="col-span-6 md:col-span-3 lg:col-span-2">
        <span class="text-2xl font-semibold"><span class="text-[#768B9B]">DESIGN</span>SNACK</span>
      </div>

      <!-- Main Content Area -->
      <div class="col-span-12 grid grid-cols-12 gap-4 mt-32">
        <!-- Heading - full width (12 columns) -->
        <div class="col-span-12 mb-8">
          <h1 ref="headingElement" class="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium leading-none overflow-hidden hoverable">
            <span class="heading-line text-gray-900">Leckerbissen für intuitive</span><br>
            <span class="heading-line text-[#768B9B]">User Experience</span>
          </h1>
        </div>

        <!-- Button and Description - 6 columns each -->
        <div class="col-span-12 md:col-span-6">
          <button class="bg-black text-white px-8 md:px-12 py-4 md:py-6 rounded-full text-lg md:text-xl font-medium flex items-center elastic-btn">
            Lass uns sprechen
            <svg class="ml-2 w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </button>
        </div>

        <div class="col-span-12 md:col-span-6 mt-8 md:mt-0">
          <p class="text-lg md:text-2xl lg:text-3xl text-gray-700 leading-relaxed">
            Ich helfe deinem Produktteam, intuitive Interfaces zu bauen – als eingebetteter UX/UI-Designer oder flexibel im Design-Abo.          </p>
        </div>
      </div>
    </div>

    <!-- Projects Section -->
    <div class="projects-section mt-32 overflow-hidden">
      <div class="container mx-auto px-4">
        <h2 class="text-[2rem] font-semibold text-black mb-12">
          Auswahl unserer Projekte
        </h2>
      </div>
      
      <!-- Infinite Marquee -->
      <div class="marquee-container">
        <!-- First Row - Right to Left -->
        <div class="marquee-row">
          <div class="marquee-content marquee-rtl">
            <div
              v-for="item in firstRowData"
              :key="item.id"
              class="project-item"
              @mouseenter="onProjectHover"
              @mouseleave="onProjectLeave"
            >
              <div class="project-image-container">
                <img :src="item.image" :alt="item.title" class="project-image">
                <div class="project-overlay">
                  <div class="project-info">
                    <h3 class="project-title">{{ item.title }}</h3>
                    <p class="project-description">{{ item.description }}</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- Duplicate for seamless loop -->
            <div
              v-for="item in firstRowData"
              :key="`dup-${item.id}`"
              class="project-item"
              @mouseenter="onProjectHover"
              @mouseleave="onProjectLeave"
            >
              <div class="project-image-container">
                <img :src="item.image" :alt="item.title" class="project-image">
                <div class="project-overlay">
                  <div class="project-info">
                    <h3 class="project-title">{{ item.title }}</h3>
                    <p class="project-description">{{ item.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Second Row - Left to Right -->
        <div class="marquee-row">
          <div class="marquee-content marquee-ltr">
            <div
              v-for="item in secondRowData"
              :key="item.id"
              class="project-item"
              @mouseenter="onProjectHover"
              @mouseleave="onProjectLeave"
            >
              <div class="project-image-container">
                <img :src="item.image" :alt="item.title" class="project-image">
                <div class="project-overlay">
                  <div class="project-info">
                    <h3 class="project-title">{{ item.title }}</h3>
                    <p class="project-description">{{ item.description }}</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- Duplicate for seamless loop -->
            <div
              v-for="item in secondRowData"
              :key="`dup-${item.id}`"
              class="project-item"
              @mouseenter="onProjectHover"
              @mouseleave="onProjectLeave"
            >
              <div class="project-image-container">
                <img :src="item.image" :alt="item.title" class="project-image">
                <div class="project-overlay">
                  <div class="project-info">
                    <h3 class="project-title">{{ item.title }}</h3>
                    <p class="project-description">{{ item.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Packages Section -->
    <div class="packages-section py-20">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl lg:text-4xl font-bold text-black mb-4">
          Wie du mit mir arbeiten kannst
        </h2>
        <p class="text-lg text-gray-600 leading-relaxed mb-16">
          Ich biete zwei Modelle an – je nachdem, wie viel Integration du brauchst:
        </p>
      </div>

      <!-- Each Package = One Section -->
      <div
        v-for="(package_, index) in packagesData"
        :key="package_.id"
        class="single-package-section"
      >
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-12 gap-8">
            <!-- Left: Package Info (5 columns) -->
            <div class="col-span-12 lg:col-span-5">
              <div :ref="el => packageLeftRefs[index] = el" class="package-left-side">
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center text-3xl">
                    {{ package_.icon }}
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold text-black mb-3">
                      {{ package_.title }}
                    </h3>
                    <p class="text-gray-700 leading-relaxed">
                      {{ package_.subtitle }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right: Cards (7 columns) -->
            <div class="col-span-12 lg:col-span-7">
              <div :ref="el => packageRightRefs[index] = el" class="package-right-side py-8">
                <div
                  v-for="(card, cardIndex) in package_.cards"
                  :key="cardIndex"
                  class="package-card bg-gray-100 rounded-2xl p-8 mb-8"
                >
                  <h4 class="font-semibold text-black mb-4 text-xl">{{ card.title }}</h4>
                  
                  <!-- List items -->
                  <ul v-if="card.items" class="space-y-3">
                    <li
                      v-for="item in card.items"
                      :key="item"
                      class="flex items-start gap-3 text-gray-700 text-lg"
                    >
                      <span class="text-gray-500 mt-1">–</span>
                      <span>{{ item }}</span>
                    </li>
                  </ul>
                  
                  <!-- Simple content -->
                  <p v-if="card.content" class="text-gray-700 text-lg leading-relaxed">
                    {{ card.content }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Spacer -->
    <div class="h-32"></div>

    <!-- Typography Section - Based on CodePen example -->
    <div ref="typographySection" class="w-full h-screen flex items-center justify-center relative z-10">
      <div class="flex items-center gap-8">
        <div ref="scrollingText" class="text-gray-200 text-4xl md:text-5xl font-medium text-center px-4 sm:px-6 md:px-8 lg:max-w-4xl xl:max-w-5xl">
          DESIGNSNACK bringt erfahrene UX/UI Designer in Ihr Produktteam - schnell. Keine Recruiter, kein Overhead, kein Unsinn. Nur eingebettete, kampferprobte UX-Expertise für Fintech-, Bank- und Versicherungsteams, die schneller vorankommen müssen.
        </div>
      </div>
    </div>
    
    <!-- Service Pillars Section -->
    <div ref="servicePillarsSection" class="w-full py-32">
      <div class="w-full px-8 md:px-16 lg:px-32 xl:px-48">
        <!-- Services List -->
        <div class="flex flex-col w-full">
          <!-- Service 1 -->
          <div ref="service1" class="border-b border-gray-200 py-8 last:border-b-0 transition-all duration-300">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-16 items-start">
              <h3 class="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight m-0">UX/UI & Product Design</h3>
              <p class="text-lg md:text-xl text-gray-600 leading-relaxed m-0 md:col-span-2">
                Wir gestalten digitale Produkte, die intuitiv funktionieren und gut aussehen. Von der ersten Idee bis zum getesteten Prototyp – schnell und eingebettet in Ihr Team.
              </p>
            </div>
          </div>

          <!-- Service 2 -->
          <div ref="service2" class="border-b border-gray-200 py-8 last:border-b-0 transition-all duration-300">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-16 items-start">
              <h3 class="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight m-0">Design Systeme</h3>
              <p class="text-lg md:text-xl text-gray-600 leading-relaxed m-0 md:col-span-2">
                Einheitliche Komponenten, konsistente UI und saubere Dokumentation. Wir bauen Design-Systeme, die skalieren – für Startups oder Enterprise-Teams.
              </p>
            </div>
          </div>

          <!-- Service 3 -->
          <div ref="service3" class="border-b border-gray-200 py-8 last:border-b-0 transition-all duration-300">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-16 items-start">
              <h3 class="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight m-0">SaaS MVPs & Prototypen</h3>
              <p class="text-lg md:text-xl text-gray-600 leading-relaxed m-0 md:col-span-2">
                Sie haben eine Idee? Wir helfen, daraus in wenigen Wochen ein testbares Produkt zu bauen. Ideal für Startups, Side Projects und Indie Hacker.
              </p>
            </div>
          </div>

          <!-- Service 4 -->
          <div ref="service4" class="border-b border-gray-200 py-8 last:border-b-0 transition-all duration-300">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-16 items-start">
              <h3 class="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight m-0">Workshops & Crashkurse</h3>
              <p class="text-lg md:text-xl text-gray-600 leading-relaxed m-0 md:col-span-2">
                Ob Inhouse oder Remote: Wir zeigen Ihrem Team, wie UX funktioniert, wie man mit KI baut, oder wie man Prototyping & Testing effektiv einsetzt.
              </p>
            </div>
          </div>

          <!-- Service 5 -->
          <div ref="service5" class="border-b border-gray-200 py-8 last:border-b-0 transition-all duration-300">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-16 items-start">
              <h3 class="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight m-0">Embedded Design Support</h3>
              <p class="text-lg md:text-xl text-gray-600 leading-relaxed m-0 md:col-span-2">
                Temporäre UX-Verstärkung für Ihr Team – ohne lange Einarbeitung oder Overhead. Sofort einsatzbereit und auf Augenhöhe mit Produkt & Tech.
              </p>
            </div>
          </div>
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

const portfolioData = ref([
  {
    id: 1,
    image: '/img/cvsnack.png',
    title: 'CVSnack Dashboard',
    description: 'Modern dashboard design for CV creation platform'
  },
  {
    id: 2,
    image: '/img/app-design.png',
    title: 'Mobile App Design',
    description: 'Clean and intuitive mobile application interface'
  },
  {
    id: 3,
    image: '/img/design-system.png',
    title: 'Design System',
    description: 'Comprehensive design system and component library'
  },
  {
    id: 4,
    image: '/img/football-app-design.png',
    title: 'Football App',
    description: 'Sports application with real-time match tracking'
  },
  {
    id: 5,
    image: '/img/landing-page-design.png',
    title: 'Landing Page',
    description: 'High-converting landing page with modern design'
  },
  {
    id: 6,
    image: '/img/mobile-app-design.png',
    title: 'Mobile Experience',
    description: 'Cross-platform mobile application design'
  },
  {
    id: 7,
    image: '/img/quiz-app-design.png',
    title: 'Quiz Application',
    description: 'Interactive quiz platform with gamification'
  },
  {
    id: 8,
    image: '/img/scouting-app-design.png',
    title: 'Scouting Platform',
    description: 'Professional scouting and talent management system'
  }
])

const firstRowData = ref(portfolioData.value.slice(0, 4))
const secondRowData = ref(portfolioData.value.slice(4, 8))

const packagesData = ref([
  {
    id: 1,
    icon: '🧩',
    title: 'Integriert ins Team',
    subtitle: 'Du suchst UX/UI-Verstärkung direkt in deinem Produktteam? Ich arbeite embedded – als Teil deines Scrum- oder Projektteams, auf Augenhöhe mit Dev, PO & Stakeholdern',
    cards: [
      {
        title: 'Was du bekommst:',
        items: [
          'Schnelle Einarbeitung',
          'Direkte Kommunikation (Slack, Jira, Miro etc.)',
          'UX-Know-how ohne Agentur-Overhead',
          'Erfahrung mit komplexen Produkten im Corporate-Kontext (z.B. Finanzen, Versicherungen)'
        ]
      },
      {
        title: 'Typischer Einsatz:',
        items: [
          '2–5 Tage pro Woche',
          'Laufzeit: 3-12 Monate',
          'Remote oder hybrid möglich'
        ]
      },
      {
        title: 'Geeignet für:',
        items: [
          'Produktteams in grossen Unternehmen',
          'Scrum- oder Projekt-Setups',
          'Langfristige UX-Begleitung mit Fokus auf Effizienz & Klarheit'
        ]
      },
      {
        title: 'Beispielhafte Kunden:',
        content: 'AXA, Swica, OKK, Generali'
      }
    ]
  },
  {
    id: 2,
    icon: '🧩',
    title: 'Design-Abo (Integration light)',
    subtitle: 'Du brauchst UX/UI-Support – aber flexibel ohne langfristige Verpflichtung? Ich kümmere mich um deine Design-Aufgaben im Monatsabo.',
    cards: [
      {
        title: 'Was du bekommst:',
        items: [
          'Schnelle Einarbeitung',
          'Direkte Kommunikation (Slack, Jira, Miro etc.)',
          'UX-Know-how ohne Agentur-Overhead',
          'Erfahrung mit komplexen Produkten im Corporate-Kontext (z.B. Finanzen, Versicherungen)'
        ]
      },
      {
        title: 'Fixe Stunden pro Monat',
        content: 'Du buchst 10, 20 oder 40 Stunden pro Monat – ich bin in dieser Zeit für dich da.'
      },
      {
        title: 'Geeignet für:',
        items: [
          'Innovationsteams',
          'Interne Tools & Dashboards',
          'Start von neuen Produkten',
          'Kleine bis mittlere Unternehmen'
        ]
      },
      {
        title: 'Beispielhafte Kunden:',
        content: 'AXA, Swica, OKK, Generali'
      }
    ]
  }
])

const onProjectHover = (event) => {
  // GSAP animation for overlay fade-in
  const overlay = event.currentTarget.querySelector('.project-overlay')
  if (overlay) {
    gsap.to(overlay, {
      opacity: 1,
      duration: 0.1,
      ease: "power2.out"
    })
  }
}

const onProjectLeave = (event) => {
  // GSAP animation for overlay fade-out
  const overlay = event.currentTarget.querySelector('.project-overlay')
  if (overlay) {
    gsap.to(overlay, {
      opacity: 0,
      duration: 0.1,
      ease: "power2.out"
    })
  }
}

const headingElement = ref(null)
const typographySection = ref(null)
const scrollingText = ref(null)
const servicePillarsSection = ref(null)
const service1 = ref(null)
const service2 = ref(null)
const service3 = ref(null)
const service4 = ref(null)
const service5 = ref(null)
const packageLeftRefs = ref([])
const packageRightRefs = ref([])

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



onMounted(() => {
  initElasticButtons();

  // Super simple: pin left when right hits top, unpin when right ends
  console.log('🔍 Debugging packages:', {
    packagesDataLength: packagesData.value.length,
    packageLeftRefs: packageLeftRefs.value,
    packageRightRefs: packageRightRefs.value
  });


  // Create individual ScrollTriggers for each package section
  packagesData.value.forEach((_, index) => {
    const leftEl = packageLeftRefs.value[index]
    const rightEl = packageRightRefs.value[index]
    
    if (leftEl && rightEl) {
      ScrollTrigger.create({
        trigger: rightEl,
        start: "top+=100 center",
        end: "bottom-=150 center",
        pin: leftEl,
        pinSpacing: false,
        pinType: "transform"
      })
    }
  })
  


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
      color: "#000", 
      stagger: 0.1, 
      duration: 0.2, // This duration is relative to the timeline's progress through the scrub
    });
  }

  // Services section - Interactive hover animations
  if (servicePillarsSection.value) {
    const serviceItems = [service1.value, service2.value, service3.value, service4.value, service5.value]
    serviceItems.forEach(item => {
      if (item) {
        item.addEventListener('mouseenter', () => {
          gsap.to(item.querySelector('h3'), { x: 10, duration: 0.3, ease: "power2.out" })
          gsap.to(item.querySelector('p'), { x: -10, duration: 0.3, ease: "power2.out" })
        })
        
        item.addEventListener('mouseleave', () => {
          gsap.to(item.querySelector('h3'), { x: 0, duration: 0.3, ease: "power2.out" })
          gsap.to(item.querySelector('p'), { x: 0, duration: 0.3, ease: "power2.out" })
        })
      }
    })
  }
});

onUnmounted(() => {
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
}

/* Marquee Styles */
.marquee-container {
  width: 100%;
  margin: 0 auto;
}

.marquee-row {
  margin-bottom: 2rem;
  white-space: nowrap;
}

.marquee-content {
  display: inline-flex;
  gap: 2rem;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.marquee-rtl {
  animation: marquee-rtl 30s linear infinite;
}

.marquee-ltr {
  animation: marquee-ltr 35s linear infinite;
}

.marquee-content:hover {
  animation-play-state: paused;
}

.project-item {
  flex-shrink: 0;
  cursor: pointer;
}

.project-image-container {
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  transition: transform 0.3s ease;
}

.project-image-container:hover {
  transform: scale(1.05);
}

.project-image {
  max-width: none;
  width: auto;
  height: 400px;
  border-radius: 1rem;
  display: block;
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.4) 50%,
    rgba(0, 0, 0, 0) 100%
  );
  opacity: 0;
  display: flex;
  align-items: flex-end;
  padding: 2rem;
  border-radius: 1rem;
  transition: opacity 0.3s ease;
}

.project-info {
  color: white;
  transform: translateY(20px);
  transition: transform 0.3s ease;
}

.project-overlay:hover .project-info {
  transform: translateY(0);
}

.project-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  line-height: 1.2;
}

.project-description {
  font-size: 1rem;
  line-height: 1.4;
  opacity: 0.9;
}

@keyframes marquee-rtl {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes marquee-ltr {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

.single-package-section {
  margin-bottom: 4rem;
}

.package-left-side {
  padding: 2rem 0;
  align-self: flex-start;
}

.package-right-side {
  /* Normal scrolling */
}

.package-card {
  /* Content-based height with padding */
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