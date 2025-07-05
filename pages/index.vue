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
        <p class="text-xl text-gray-600 leading-relaxed mb-16">
          Ich helfe Unternehmen, digitale Produkte klar und nutzerzentriert zu gestalten. Ob als eingebundenes Teammitglied oder flexibel per Design-Abo – du entscheidest, wie wir zusammenarbeiten.
        </p>
        
        <!-- Services Table -->
        <div class="overflow-x-auto">
          <table class="w-full border-collapse">
            <thead>
              <tr class="border-b border-gray-200">
                <th class="text-left py-4 px-6 bg-white"></th>
                <th class="text-left py-4 px-6 bg-white">
                  <h3 class="text-2xl font-semibold text-black">Team-Integration</h3>
                </th>
                <th class="text-left py-4 px-6 bg-white">
                  <h3 class="text-2xl font-semibold text-black">Design-Abo</h3>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-gray-100">
                <td class="py-4 px-6 font-medium text-gray-900 text-lg">Modell</td>
                <td class="py-4 px-6 text-gray-700 text-lg">Als Teil deines Teams</td>
                <td class="py-4 px-6 text-gray-700 text-lg">Flexibel buchbares Design-Abo</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-4 px-6 font-medium text-gray-900 text-lg">Zusammenarbeit</td>
                <td class="py-4 px-6 text-gray-700 text-lg">Langfristig, projekt- oder sprintbasiert</td>
                <td class="py-4 px-6 text-gray-700 text-lg">Monatlich kündbar, on-demand</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-4 px-6 font-medium text-gray-900 text-lg">Kommunikation</td>
                <td class="py-4 px-6 text-gray-700 text-lg">Regulärer Austausch, Meetings & Workshops</td>
                <td class="py-4 px-6 text-gray-700 text-lg">Asynchrone Zusammenarbeit, Tools & Mails</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-4 px-6 font-medium text-gray-900 text-lg">Flexibilität</td>
                <td class="py-4 px-6 text-gray-700 text-lg">Fixe Tage pro Woche, planbar</td>
                <td class="py-4 px-6 text-gray-700 text-lg">Volle Flexibilität, du buchst je nach Bedarf</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-4 px-6 font-medium text-gray-900 text-lg">Kostenmodell</td>
                <td class="py-4 px-6 text-gray-700 text-lg">Tagessatz</td>
                <td class="py-4 px-6 text-gray-700 text-lg">Monatliche Pauschale (Abo)</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <!-- Services List -->
        <div class="mt-16">
          <h3 class="text-xl font-semibold text-black mb-8">Leistungen</h3>
          <div class="flex flex-wrap gap-3">
            <span class="bg-black text-white px-6 py-3 rounded-full text-base font-medium">UX Research</span>
            <span class="bg-black text-white px-6 py-3 rounded-full text-base font-medium">Usability Testing</span>
            <span class="bg-black text-white px-6 py-3 rounded-full text-base font-medium">Prototyping</span>
            <span class="bg-black text-white px-6 py-3 rounded-full text-base font-medium">UI Design</span>
            <span class="bg-black text-white px-6 py-3 rounded-full text-base font-medium">Design Systems</span>
            <span class="bg-black text-white px-6 py-3 rounded-full text-base font-medium">Design Reviews & Sparring</span>
            <span class="bg-black text-white px-6 py-3 rounded-full text-base font-medium">Developer Handover & Support</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Price Calculator Section -->
    <div class="price-calculator-section py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl lg:text-4xl font-bold text-black mb-4 text-center">
          Preisrechner
        </h2>
        <p class="text-xl text-gray-600 leading-relaxed mb-12 text-center">
          Berechne den Preis für deine individuelle Zusammenarbeit
        </p>
        
        <!-- Calculator Form -->
        <div class="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
          <!-- Step 1: Choose collaboration type -->
          <div class="mb-8">
            <h3 class="text-xl font-semibold text-black mb-4">Art der Zusammenarbeit wählen</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label class="flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all" 
                     :class="calculatorData.collaborationType === 'design-abo' ? 'border-black bg-gray-50' : 'border-gray-200 hover:border-gray-300'">
                <input type="radio" v-model="calculatorData.collaborationType" value="design-abo" class="sr-only">
                <div>
                  <div class="font-medium text-black">Design-Abo</div>
                  <div class="text-sm text-gray-600">monatlich, flexibel</div>
                </div>
              </label>
              <label class="flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all"
                     :class="calculatorData.collaborationType === 'team-integration' ? 'border-black bg-gray-50' : 'border-gray-200 hover:border-gray-300'">
                <input type="radio" v-model="calculatorData.collaborationType" value="team-integration" class="sr-only">
                <div>
                  <div class="font-medium text-black">Team-Integration</div>
                  <div class="text-sm text-gray-600">tageweise, eingebunden im Team</div>
                </div>
              </label>
            </div>
          </div>

          <!-- Design-Abo Options -->
          <div v-if="calculatorData.collaborationType === 'design-abo'" class="mb-8">
            <h3 class="text-xl font-semibold text-black mb-4">Design-Abo Konfiguration</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Stundenpaket pro Monat</label>
                <div class="relative">
                  <select v-model.number="calculatorData.designAbo.hours" class="w-full p-3 border border-gray-300 rounded-lg appearance-none bg-white pr-10 focus:ring-2 focus:ring-black focus:border-black transition-all">
                    <option :value="8">8h / Monat</option>
                    <option :value="16">16h / Monat</option>
                    <option :value="24">24h / Monat</option>
                    <option :value="32">32h / Monat</option>
                    <option :value="40">40h / Monat</option>
                  </select>
                  <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Laufzeit</label>
                <div class="relative">
                  <select v-model.number="calculatorData.designAbo.duration" class="w-full p-3 border border-gray-300 rounded-lg appearance-none bg-white pr-10 focus:ring-2 focus:ring-black focus:border-black transition-all">
                    <option :value="1">1 Monat (flexibel, kein Rabatt)</option>
                    <option :value="3">3 Monate (-5%)</option>
                    <option :value="6">6 Monate (-10%)</option>
                    <option :value="12">12 Monate (-15%)</option>
                  </select>
                  <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Team-Integration Options -->
          <div v-if="calculatorData.collaborationType === 'team-integration'" class="mb-8">
            <h3 class="text-xl font-semibold text-black mb-4">Team-Integration Konfiguration</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Anzahl gewünschter Tage pro Woche</label>
                <div class="relative">
                  <select v-model.number="calculatorData.teamIntegration.daysPerWeek" class="w-full p-3 border border-gray-300 rounded-lg appearance-none bg-white pr-10 focus:ring-2 focus:ring-black focus:border-black transition-all">
                    <option :value="1">1 Tag / Woche</option>
                    <option :value="2">2 Tage / Woche</option>
                    <option :value="3">3 Tage / Woche</option>
                    <option :value="4">4 Tage / Woche</option>
                  </select>
                  <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Projektdauer</label>
                <div class="relative">
                  <select v-model.number="calculatorData.teamIntegration.duration" class="w-full p-3 border border-gray-300 rounded-lg appearance-none bg-white pr-10 focus:ring-2 focus:ring-black focus:border-black transition-all">
                    <option :value="1">1 Monat</option>
                    <option :value="3">3 Monate (-5%)</option>
                    <option :value="6">6 Monate (-10%)</option>
                    <option :value="12">12 Monate (-15%)</option>
                  </select>
                  <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <!-- Price Display -->
          <div v-if="calculatorData.collaborationType" class="bg-gray-50 rounded-lg p-6 mt-8">
            <div class="flex justify-between items-center mb-4">
              <span class="text-lg font-medium text-gray-700">Monatlicher Preis:</span>
              <span class="text-2xl font-bold text-black">{{ formatPrice(calculatePrice()) }} CHF</span>
            </div>
            <div v-if="getDurationDiscount() > 0" class="text-sm text-gray-600">
              Preis inkl. {{ getDurationDiscount() }}% Rabatt für 
              {{ calculatorData.collaborationType === 'team-integration' ? calculatorData.teamIntegration.duration : calculatorData.designAbo.duration }} 
              Monate Laufzeit
            </div>
            <div v-if="calculatorData.collaborationType === 'design-abo'" class="text-sm text-gray-600">
              Preis für {{ calculatorData.designAbo.hours }} Stunden pro Monat
            </div>
            <div v-if="calculatorData.collaborationType === 'team-integration'" class="text-sm text-gray-600">
              Preis für {{ calculatorData.teamIntegration.daysPerWeek }} Tag{{ calculatorData.teamIntegration.daysPerWeek > 1 ? 'e' : '' }} pro Woche
            </div>
          </div>

          <!-- Call to Action -->
          <div v-if="calculatorData.collaborationType" class="mt-8 text-center">
            <button class="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors">
              Angebot anfordern
            </button>
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

// Calculator data
const calculatorData = ref({
  collaborationType: null,
  designAbo: {
    hours: 16,
    duration: 3
  },
  teamIntegration: {
    daysPerWeek: 2,
    duration: 3
  },
  options: {
    workshops: false,
    onsite: false
  }
})

// Calculator methods
const calculatePrice = () => {
  if (!calculatorData.value.collaborationType) return 0
  
  const dailyRate = 1160 // CHF
  const weeksPerMonth = 4.33
  const teamIntegrationHourlyRate = 145 // CHF (1160 / 8 hours)
  const designAboHourlyRate = 165 // CHF (premium for flexibility)
  
  let basePrice = 0
  let durationDiscount = 0
  let additionalCosts = 0
  
  if (calculatorData.value.collaborationType === 'team-integration') {
    // Team integration calculation
    basePrice = dailyRate * calculatorData.value.teamIntegration.daysPerWeek * weeksPerMonth
    
    // Duration discount for team integration
    switch (calculatorData.value.teamIntegration.duration) {
      case 3: durationDiscount = 0.05; break
      case 6: durationDiscount = 0.10; break
      case 12: durationDiscount = 0.15; break
      default: durationDiscount = 0
    }
    
    // Team integration additional options
    if (calculatorData.value.options.workshops) additionalCosts += 500
    if (calculatorData.value.options.onsite) additionalCosts += 300
    
  } else if (calculatorData.value.collaborationType === 'design-abo') {
    // Design-Abo calculation
    const hours = calculatorData.value.designAbo.hours
    
    basePrice = designAboHourlyRate * hours
    
    // Duration discount for design-abo
    switch (calculatorData.value.designAbo.duration) {
      case 3: durationDiscount = 0.05; break
      case 6: durationDiscount = 0.10; break
      case 12: durationDiscount = 0.15; break
      default: durationDiscount = 0
    }
    
    // No additional options for Design-Abo
  }
  
  // Final calculation: (basePrice + additionalCosts) * (1 - durationDiscount)
  const finalPrice = (basePrice + additionalCosts) * (1 - durationDiscount)
  
  return Math.round(finalPrice)
}

const getDurationDiscount = () => {
  if (calculatorData.value.collaborationType === 'team-integration') {
    switch (calculatorData.value.teamIntegration.duration) {
      case 3: return 5
      case 6: return 10
      case 12: return 15
      default: return 0
    }
  } else if (calculatorData.value.collaborationType === 'design-abo') {
    switch (calculatorData.value.designAbo.duration) {
      case 3: return 5
      case 6: return 10
      case 12: return 15
      default: return 0
    }
  }
  return 0
}

const formatPrice = (price) => {
  return new Intl.NumberFormat('de-CH').format(price)
}

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