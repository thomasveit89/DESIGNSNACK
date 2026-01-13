<template>
  <div class="relative min-h-screen">
    <div class="container mx-auto px-4 py-8 grid grid-cols-12 gap-4">
      <!-- Header/Logo -->
      <div class="col-span-6 md:col-span-3 lg:col-span-2">
        <div 
          ref="logoElement"
          class="logo-container cursor-pointer select-none overflow-hidden"
          @mouseenter="animateLogo"
        >
          <span class="text-xl sm:text-2xl font-semibold logo-text">
            <span class="text-[#768B9B] design-part">DESIGN</span><span class="snack-part">SNACK</span>
          </span>
        </div>
      </div>

      <!-- Main Content Area -->
      <div class="col-span-12 grid grid-cols-12 gap-4 mt-32">
        <!-- Heading - full width (12 columns) -->
        <div class="col-span-12 mb-8">
          <h1 ref="headingElement" class="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium leading-none overflow-hidden hoverable">
            <span class="heading-line text-gray-900">Leckerbissen für intuitive</span><br>
            <span class="heading-line text-[#768B9B]">User Experience</span>
          </h1>
        </div>

        <!-- Button and Description - 6 columns each -->
        <div class="col-span-12 md:col-span-6">
          <button @click="openContactModal" class="bg-black text-white px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 rounded-full text-base sm:text-lg md:text-xl font-medium inline-flex items-center elastic-btn">
            Lass uns sprechen
            <svg class="ml-2 w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </button>
        </div>

        <div class="col-span-12 md:col-span-6 mt-8 md:mt-0">
          <p class="text-xl md:text-2xl lg:text-3xl text-gray-700 leading-relaxed">
            Ich helfe deinem Produktteam, intuitive Interfaces zu bauen – als eingebetteter UX/UI-Designer oder flexibel im Design-Abo.          </p>
        </div>
      </div>
    </div>

    <!-- Projects Section -->
    <div class="projects-section mt-32 overflow-hidden">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl sm:text-3xl md:text-[2rem] font-semibold text-black mb-8 sm:mb-12">
          Auswahl meiner Projekte
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

    <!-- Client Logos Section -->
    <div class="w-full py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap items-center justify-center gap-4 md:gap-8 lg:gap-8 max-w-5xl mx-auto text-center">
          <img src="/img/clients/finnova.svg" alt="Finnova" class="h-16 md:h-20 opacity-70 hover:opacity-100 transition-opacity duration-300">
          <img src="/img/clients/netlive.svg" alt="Netlive" class="h-16 md:h-20 opacity-70 hover:opacity-100 transition-opacity duration-300">
          <img src="/img/clients/axa.svg" alt="AXA" class="h-16 md:h-20 opacity-70 hover:opacity-100 transition-opacity duration-300">
          <img src="/img/clients/3ap.svg" alt="AXA" class="h-16 md:h-20 opacity-70 hover:opacity-100 transition-opacity duration-300">        
        </div>
      </div>
    </div>

    <!-- Combined Packages + Calculator Section -->
    <section class="py-32 bg-white relative">
      <div class="container mx-auto px-4">
        <!-- Section Title and Description -->
        <div class="text-center mb-16">
          <h2 class="text-5xl md:text-6xl font-medium text-gray-900 mb-6">
            Wie du mit mir arbeiten kannst
          </h2>
          <p class="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Zwei Wege, ein Ziel: Digitale Produkte, die funktionieren. Wähle zwischen intensiver Zusammenarbeit im Team oder flexiblem
  Design-Abo nach Bedarf.
          </p>
        </div>
        
        <!-- Package Selection Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          <!-- Team-Integration Package -->
          <div 
            @click="calculatorData.collaborationType = 'team-integration'"
            :class="calculatorData.collaborationType === 'team-integration' ? 'border-black border-4' : 'border-white border-4'"
            class="bg-gray-50 rounded-3xl p-8 flex flex-col h-full cursor-pointer transition-all duration-300 hover:border-gray-400"
          >
            <div class="flex flex-col gap-12">
              <div class="w-16 h-16">
                <img src="/img/french-fries.svg" alt="Team Integration" class="w-full h-full">
              </div>
              
              <div class="flex flex-col gap-6 w-full">
                <div class="flex flex-col gap-3 pb-6">
                  <h3 class="text-4xl font-semibold text-gray-900">Team-Integration</h3>
                  <div class="bg-[#d0e957] px-4 py-2 rounded-lg inline-block w-fit">
                    <span class="text-xl font-semibold text-gray-900">Als Teil deines Teams</span>
                  </div>
                </div>
                
                <div class="h-px w-full bg-gray-300"></div>
                
                <div class="flex flex-col gap-6 pt-6">
                  <div class="flex flex-row gap-3 items-center w-full">
                    <div class="w-6 h-6 flex-shrink-0">
                      <img src="/img/badge-check.svg" alt="Check" class="w-full h-full">
                    </div>
                    <span class="text-lg font-semibold text-gray-900">Langfristig, projekt- oder sprintbasiert</span>
                  </div>
                  
                  <div class="flex flex-row gap-3 items-center w-full">
                    <div class="w-6 h-6 flex-shrink-0">
                      <img src="/img/badge-check.svg" alt="Check" class="w-full h-full">
                    </div>
                    <span class="text-lg font-semibold text-gray-900">Regulärer Austausch, Meetings & Workshops</span>
                  </div>
                  
                  <div class="flex flex-row gap-3 items-center w-full">
                    <div class="w-6 h-6 flex-shrink-0">
                      <img src="/img/badge-check.svg" alt="Check" class="w-full h-full">
                    </div>
                    <span class="text-lg font-semibold text-gray-900">Fixe Tage pro Woche, planbar</span>
                  </div>
                  
                  <div class="flex flex-row gap-3 items-center w-full">
                    <div class="w-6 h-6 flex-shrink-0">
                      <img src="/img/badge-check.svg" alt="Check" class="w-full h-full">
                    </div>
                    <span class="text-lg font-semibold text-gray-900">Stundensatz</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Design-Abo Package -->
          <div 
            @click="calculatorData.collaborationType = 'design-abo'"
            :class="calculatorData.collaborationType === 'design-abo' ? 'border-black border-4' : 'border-white border-4'"
            class="bg-gray-50 rounded-3xl p-8 flex flex-col h-full cursor-pointer transition-all duration-300 hover:border-gray-400"
          >
            <div class="flex flex-col gap-12">
              <div class="w-16 h-16">
                <img src="/img/pasta-plate.svg" alt="Design Abo" class="w-full h-full">
              </div>
              
              <div class="flex flex-col gap-6 w-full">
                <div class="flex flex-col gap-3 pb-6">
                  <h3 class="text-4xl font-semibold text-gray-900">Design-Abo</h3>
                  <div class="bg-[#f2b2d7] px-4 py-2 rounded-lg inline-block w-fit">
                    <span class="text-xl font-semibold text-gray-900">Flexibel buchbares Design-Abo</span>
                  </div>
                </div>
                
                <div class="h-px w-full bg-gray-300"></div>
                
                <div class="flex flex-col gap-6 pt-6">
                  <div class="flex flex-row gap-3 items-center w-full">
                    <div class="w-6 h-6 flex-shrink-0">
                      <img src="/img/badge-check.svg" alt="Check" class="w-full h-full">
                    </div>
                    <span class="text-lg font-semibold text-gray-900">Monatlich kündbar, on-demand</span>
                  </div>
                  
                  <div class="flex flex-row gap-3 items-center w-full">
                    <div class="w-6 h-6 flex-shrink-0">
                      <img src="/img/badge-check.svg" alt="Check" class="w-full h-full">
                    </div>
                    <span class="text-lg font-semibold text-gray-900">Asynchrone Zusammenarbeit, Tools & Mails</span>
                  </div>
                  
                  <div class="flex flex-row gap-3 items-center w-full">
                    <div class="w-6 h-6 flex-shrink-0">
                      <img src="/img/badge-check.svg" alt="Check" class="w-full h-full">
                    </div>
                    <span class="text-lg font-semibold text-gray-900">Volle Flexibilität, du buchst je nach Bedarf</span>
                  </div>
                  
                  <div class="flex flex-row gap-3 items-center w-full">
                    <div class="w-6 h-6 flex-shrink-0">
                      <img src="/img/badge-check.svg" alt="Check" class="w-full h-full">
                    </div>
                    <span class="text-lg font-semibold text-gray-900">Monatliche Pauschale</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Interactive Sliders -->
        <div v-if="calculatorData.collaborationType" class="max-w-4xl mx-auto mb-16">
          <!-- Design-Abo Sliders -->
          <div v-if="calculatorData.collaborationType === 'design-abo'" class="space-y-12">
            <!-- Hours Slider -->
            <div class="space-y-4">
              <div class="flex justify-between items-center">
                <label class="text-2xl font-medium text-gray-900">Stundenpaket pro Monat</label>
                <span class="text-2xl font-semibold text-gray-900">{{ calculatorData.designAbo.hours }}h</span>
              </div>
              <div class="relative">
                <input 
                  type="range" 
                  v-model.number="calculatorData.designAbo.hours"
                  min="8" 
                  max="40" 
                  step="8"
                  class="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                >
              </div>
            </div>

            <!-- Duration Slider -->
            <div class="space-y-4">
              <div class="flex justify-between items-center">
                <label class="text-2xl font-medium text-gray-900">Laufzeit</label>
                <span class="text-2xl font-semibold text-gray-900">{{ calculatorData.designAbo.duration }} Monat{{ calculatorData.designAbo.duration > 1 ? 'e' : '' }}</span>
              </div>
              <div class="relative">
                <input 
                  type="range" 
                  v-model.number="calculatorData.designAbo.duration"
                  min="1" 
                  max="12" 
                  step="1"
                  class="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                >
                <!-- Discount markers -->
                <div class="relative mt-2 h-8">
                  <!-- 1 Mon at 0% -->
                  <div class="absolute text-xs text-gray-500" style="left: 0%; transform: translateX(0%);">1 Mon</div>
                  <!-- 3 Mon at ~18.2% -->
                  <div class="absolute text-xs text-center" :class="calculatorData.designAbo.duration >= 3 && calculatorData.designAbo.duration < 6 ? 'text-green-600 font-semibold' : 'text-gray-500'" style="left: 18.2%; transform: translateX(-50%);">3 Mon<br><span :class="calculatorData.designAbo.duration >= 3 && calculatorData.designAbo.duration < 6 ? 'text-green-600' : 'text-gray-500'">-5%</span></div>
                  <!-- 6 Mon at ~45.5% -->
                  <div class="absolute text-xs text-center" :class="calculatorData.designAbo.duration >= 6 && calculatorData.designAbo.duration < 9 ? 'text-green-600 font-semibold' : 'text-gray-500'" style="left: 45.5%; transform: translateX(-50%);">6 Mon<br><span :class="calculatorData.designAbo.duration >= 6 && calculatorData.designAbo.duration < 9 ? 'text-green-600' : 'text-gray-500'">-10%</span></div>
                  <!-- 9 Mon at ~72.7% -->
                  <div class="absolute text-xs text-center" :class="calculatorData.designAbo.duration >= 9 && calculatorData.designAbo.duration < 12 ? 'text-green-600 font-semibold' : 'text-gray-500'" style="left: 72.7%; transform: translateX(-50%);">9 Mon<br><span :class="calculatorData.designAbo.duration >= 9 && calculatorData.designAbo.duration < 12 ? 'text-green-600' : 'text-gray-500'">-12%</span></div>
                  <!-- 12 Mon at 100% -->
                  <div class="absolute text-xs text-center" :class="calculatorData.designAbo.duration >= 12 ? 'text-green-600 font-semibold' : 'text-gray-500'" style="left: 100%; transform: translateX(-100%);">12 Mon<br><span :class="calculatorData.designAbo.duration >= 12 ? 'text-green-600' : 'text-gray-500'">-15%</span></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Team-Integration Sliders -->
          <div v-if="calculatorData.collaborationType === 'team-integration'" class="space-y-12">
            <!-- Days per Week Slider -->
            <div class="space-y-4">
              <div class="flex justify-between items-center">
                <label class="text-2xl font-medium text-gray-900">Tage pro Woche</label>
                <span class="text-2xl font-semibold text-gray-900">{{ calculatorData.teamIntegration.daysPerWeek }} Tag{{ calculatorData.teamIntegration.daysPerWeek > 1 ? 'e' : '' }}</span>
              </div>
              <div class="relative">
                <input 
                  type="range" 
                  v-model.number="calculatorData.teamIntegration.daysPerWeek"
                  min="1" 
                  max="5" 
                  step="1"
                  class="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                >
              </div>
            </div>

            <!-- Duration Slider -->
            <div class="space-y-4">
              <div class="flex justify-between items-center">
                <label class="text-2xl font-medium text-gray-900">Laufzeit</label>
                <span class="text-2xl font-semibold text-gray-900">{{ calculatorData.teamIntegration.duration }} Monat{{ calculatorData.teamIntegration.duration > 1 ? 'e' : '' }}</span>
              </div>
              <div class="relative">
                <input 
                  type="range" 
                  v-model.number="calculatorData.teamIntegration.duration"
                  min="1" 
                  max="12" 
                  step="1"
                  class="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                >
                <!-- Discount markers -->
                <div class="relative mt-2 h-8">
                  <!-- 1 Mon at 0% -->
                  <div class="absolute text-xs text-gray-500" style="left: 0%; transform: translateX(0%);">1 Mon</div>
                  <!-- 3 Mon at ~18.2% -->
                  <div class="absolute text-xs text-center" :class="calculatorData.teamIntegration.duration >= 3 && calculatorData.teamIntegration.duration < 6 ? 'text-green-600 font-semibold' : 'text-gray-500'" style="left: 18.2%; transform: translateX(-50%);">3 Mon<br><span :class="calculatorData.teamIntegration.duration >= 3 && calculatorData.teamIntegration.duration < 6 ? 'text-green-600' : 'text-gray-500'">-5%</span></div>
                  <!-- 6 Mon at ~45.5% -->
                  <div class="absolute text-xs text-center" :class="calculatorData.teamIntegration.duration >= 6 && calculatorData.teamIntegration.duration < 9 ? 'text-green-600 font-semibold' : 'text-gray-500'" style="left: 45.5%; transform: translateX(-50%);">6 Mon<br><span :class="calculatorData.teamIntegration.duration >= 6 && calculatorData.teamIntegration.duration < 9 ? 'text-green-600' : 'text-gray-500'">-10%</span></div>
                  <!-- 9 Mon at ~72.7% -->
                  <div class="absolute text-xs text-center" :class="calculatorData.teamIntegration.duration >= 9 && calculatorData.teamIntegration.duration < 12 ? 'text-green-600 font-semibold' : 'text-gray-500'" style="left: 72.7%; transform: translateX(-50%);">9 Mon<br><span :class="calculatorData.teamIntegration.duration >= 9 && calculatorData.teamIntegration.duration < 12 ? 'text-green-600' : 'text-gray-500'">-12%</span></div>
                  <!-- 12 Mon at 100% -->
                  <div class="absolute text-xs text-center" :class="calculatorData.teamIntegration.duration >= 12 ? 'text-green-600 font-semibold' : 'text-gray-500'" style="left: 100%; transform: translateX(-100%);">12 Mon<br><span :class="calculatorData.teamIntegration.duration >= 12 ? 'text-green-600' : 'text-gray-500'">-15%</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Large Price Display -->
        <div v-if="calculatorData.collaborationType" class="text-center">
          <div class="text-lg sm:text-xl md:text-2xl font-medium text-gray-700 mb-4">Monatlicher Preis</div>
          <div class="flex items-end justify-center gap-2">
            <span class="text-2xl sm:text-3xl md:text-4xl font-light text-gray-300 mb-3">CHF</span>
            <span class="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-semibold text-gray-900">{{ formatPrice(calculatePrice()) }}</span>
          </div>
          <div v-if="getDurationDiscount() > 0" class="mt-6 text-base sm:text-lg md:text-xl text-gray-600">
            Preis inkl. {{ getDurationDiscount() }}% Rabatt für {{ calculatorData.collaborationType === 'team-integration' ? calculatorData.teamIntegration.duration : calculatorData.designAbo.duration }} Monate Laufzeit
            <span class="text-green-600 font-semibold ml-2">• Du sparst CHF {{ formatPrice(calculateSavings()) }} pro Monat</span>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Interactive Services Section -->
    <div ref="servicesSection" class="services-scroll-section bg-black text-white relative mx-auto rounded-2xl transition-all duration-1000" style="width: 85%;">
      <div class="container mx-auto px-4">
        <div class="services-container min-h-screen flex flex-col justify-center py-20">
          <div 
            v-for="(service, index) in services" 
            :key="index"
            :ref="el => serviceRefs[index] = el"
            class="service-item text-center py-16"
            :class="{ 'opacity-30': index !== 0, 'opacity-100': index === 0 }"
          >
            <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              {{ service }}
            </h2>
          </div>
        </div>
      </div>
    </div>

    <!-- Values & Principles Section -->
    <div class="w-full pt-40 pb-0 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <!-- Left Column: Werte -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <div class="space-y-12">
              <h2 class="text-4xl md:text-5xl font-medium text-gray-900 mb-12">Werte</h2>
              
              <!-- Freude -->
              <div class="border-b border-gray-300 pb-8">
                <h3 class="text-3xl md:text-4xl font-medium text-gray-900 mb-4">Freude</h3>
                <p class="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Zusammenarbeit soll Spass machen. Kreativität entsteht, wenn man gerne miteinander arbeitet.
                </p>
              </div>
              
              <!-- Einfachheit -->
              <div class="border-b border-gray-300 pb-8">
                <h3 class="text-3xl md:text-4xl font-medium text-gray-900 mb-4">Einfachheit</h3>
                <p class="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Komplexes runterbrechen und Lösungen schaffen, die klar und benutzerfreundlich sind.
                </p>
              </div>
              
              <!-- Neugier -->
              <div class="border-b border-gray-300 pb-8">
                <h3 class="text-3xl md:text-4xl font-medium text-gray-900 mb-4">Neugier</h3>
                <p class="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Offenheit für neue Tools, Ideen und Experimente, um ständig dazuzulernen.
                </p>
              </div>
              
              <!-- Verlässlichkeit -->
              <div class="border-b border-gray-300 pb-8">
                <h3 class="text-3xl md:text-4xl font-medium text-gray-900 mb-4">Verlässlichkeit</h3>
                <p class="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Auch wenn Spass im Vordergrund steht, kannst du darauf zählen, dass Resultate geliefert werden.
                </p>
              </div>
              
              <!-- Mut -->
              <div class="pb-8">
                <h3 class="text-3xl md:text-4xl font-medium text-gray-900 mb-4">Mut</h3>
                <p class="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Dinge ausprobieren, anders denken, neue Wege gehen – ohne Angst vor Fehlern.
                </p>
              </div>
            </div>

            <!-- Right Column: Prinzipien -->
            <div class="space-y-12">
              <h2 class="text-4xl md:text-5xl font-medium text-gray-900 mb-12">Prinzipien</h2>
              
              <!-- Mensch zuerst -->
              <div class="border-b border-gray-300 pb-8">
                <h3 class="text-3xl md:text-4xl font-medium text-gray-900 mb-4">Mensch zuerst</h3>
                <p class="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Nutzer und Kunden stehen immer im Mittelpunkt, nicht die Technologie.
                </p>
              </div>
              
              <!-- Teamgeist -->
              <div class="border-b border-gray-300 pb-8">
                <h3 class="text-3xl md:text-4xl font-medium text-gray-900 mb-4">Teamgeist</h3>
                <p class="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Projekte gelingen nur gemeinsam; ich bringe Energie und Leichtigkeit ins Team.
                </p>
              </div>
              
              <!-- Schnelligkeit & Pragmatismus -->
              <div class="border-b border-gray-300 pb-8">
                <h3 class="text-3xl md:text-4xl font-medium text-gray-900 mb-4">Schnelligkeit & Pragmatismus</h3>
                <p class="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Lieber iterativ und nah am Problem arbeiten als monatelang im Elfenbeinturm designen.
                </p>
              </div>
              
              <!-- Klarheit -->
              <div class="border-b border-gray-300 pb-8">
                <h3 class="text-3xl md:text-4xl font-medium text-gray-900 mb-4">Klarheit</h3>
                <p class="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Offene, ehrliche Kommunikation ohne Bullshit.
                </p>
              </div>
              
              <!-- Spielerischer Ernst -->
              <div class="pb-8">
                <h3 class="text-3xl md:text-4xl font-medium text-gray-900 mb-4">Spielerischer Ernst</h3>
                <p class="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Ernsthafte Resultate entstehen oft leichter, wenn man nicht zu verkrampft daran geht.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Creative Lab Section -->
    <div ref="creativeLab" class="w-full py-16 bg-white relative">
      <!-- Paper Plane Animation -->
      <img ref="paperPlane" src="/img/paperplane.svg" alt="Paper Plane" class="absolute opacity-0 pointer-events-none z-10" style="left: -100px; top: 40px;" width="60" height="60">
      
      <div class="container mb-20 mx-auto px-4">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-5xl md:text-6xl font-medium text-gray-900 mb-6">
            Creative Lab – Mein Spielplatz für neue Ideen
          </h2>
          <p class="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Neben Kundenprojekten entwickle ich eigene Tools und Experimente. So teste ich neue Technologien, Designmethoden und AI-Ansätze – und lasse diese Erfahrungen in unsere Zusammenarbeit einfliessen.
          </p>
        </div>
        
        <!-- Project Grid -->
        <div class="grid grid-cols-1 mb-20 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          <!-- CVsnack Project -->
          <a href="https://cvsnack.com" target="_blank" class="flex flex-col group cursor-pointer">
            <div class="bg-gray-100 rounded-2xl mb-8 relative overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <img src="/img/cvsnack.png" alt="CVsnack Online Resume Builder" class="w-full h-auto rounded-lg">
            </div>
            <div class="flex flex-col gap-4">
              <h3 class="text-3xl font-semibold text-gray-900 group-hover:text-black transition-colors duration-300">CVsnack – Online Resume Builder</h3>
              <p class="text-lg text-gray-700 leading-relaxed">
                Online CV-Builder mit AI-Unterstützung. Innerhalb von 2 Monaten als Prototyp entwickelt – jetzt von über 1000 Usern genutzt.
              </p>
            </div>
          </a>
          
          <!-- FC Romanshorn Project -->
          <a href="https://app.fcromanshorn.ch/" target="_blank" class="flex flex-col group cursor-pointer">
            <div class="bg-gray-900 rounded-2xl mb-8 relative overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <img src="/img/fcr-app.png" alt="FC Romanshorn Fussball App" class="w-full h-auto rounded-lg">
            </div>
            <div class="flex flex-col gap-4">
              <h3 class="text-3xl font-semibold text-gray-900 group-hover:text-black transition-colors duration-300">FC Romanshorn – Fussball App</h3>
              <p class="text-lg text-gray-700 leading-relaxed">
                Sämtliche Resultate, Spielpläne und Ranglisten in einer benutzerfreundlichen App. Von der Vereinsidee zum funktionsfähigen MVP in nur einem Monat.
              </p>
            </div>
          </a>
        </div>
        <div class="grid grid-cols-1 mb-20 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          <!-- Smart Lead Generator Project -->
          <a href="https://thomasveit89.github.io/designsnack-lead-generator/" target="_blank" class="flex flex-col group cursor-pointer">
            <div class="bg-gray-100 rounded-2xl mb-8 relative overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <img src="/img/designsnack-lead-generator.png" alt="Smart Lead Generator Hackaton" class="w-full h-auto rounded-lg">
            </div>
            <div class="flex flex-col gap-4">
              <h3 class="text-3xl font-semibold text-gray-900 group-hover:text-black transition-colors duration-300">Smart Lead Generator (Hackathon)</h3>
              <p class="text-lg text-gray-700 leading-relaxed">
                Erster Preis beim VibeCodeFest Hackathon 2025. Überwacht laufend neue Jobs, bewertet Chancen smart und erstellt automatisch eine personalisierte E-Mail.
              </p>
            </div>
          </a>
          
          <!-- Joyo -->
          <a href="https://joyo.ch" target="_blank" class="flex flex-col group cursor-pointer">
            <div class="bg-gray-900 rounded-2xl mb-8 relative overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <img src="/img/joyo.png" alt="Joyo – Emotional Digital Gift Experience" class="w-full h-auto rounded-lg">
            </div>
            <div class="flex flex-col gap-4">
              <h3 class="text-3xl font-semibold text-gray-900 group-hover:text-black transition-colors duration-300">Joyo – Emotional Digital Gift Experience</h3>
              <p class="text-lg text-gray-700 leading-relaxed">
                Verwandle deine besonderen Momente in interaktive Geschichten mit KI. Perfekt für Heiratsanträge, Ankündigungen, Überraschungen und Feiern.
              </p>
            </div>
          </a>
        </div>
        <div class="grid grid-cols-1 mb-20 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          <!-- Laws & Patterns Project -->
          <a href="/laws-and-patterns" target="_blank" class="flex flex-col group cursor-pointer">
            <div class="bg-gray-900 rounded-2xl mb-8 relative overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <img src="/img/designsnack-laws-and-patterns.png" alt="DESIGNSNACK Laws & Patterns" class="w-full h-auto rounded-lg">
            </div>
            <div class="flex flex-col gap-4">
              <h3 class="text-3xl font-semibold text-gray-900 group-hover:text-black transition-colors duration-300">UX Laws & Patterns Website & App</h3>
              <p class="text-lg text-gray-700 leading-relaxed">
                100+ UX laws, patterns und kognitive Verzerrungen in einer benutzerfreundlichen App. Lerne mit Flashcards und AI Quizes.
              </p>
            </div>
          </a>

          <!-- Next Project -->
          <a href="#" target="_blank" class="flex flex-col group cursor-pointer">
            <div class="bg-gray-900 rounded-2xl mb-8 relative overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <img src="/img/cooking.png" alt="Next thing" class="w-full h-auto rounded-lg">
            </div>
            <div class="flex flex-col gap-4">
              <h3 class="text-3xl font-semibold text-gray-900 group-hover:text-black transition-colors duration-300">Already cooking the next thing</h3>
              <p class="text-lg text-gray-700 leading-relaxed">
                Ich koche mit grosser Wahrscheinlichkeit schon an meinem nächsten Snack. Oder hast du eine Idee, die du mit mir zum Leben erwecken möchtest?
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>

    <!-- Creative Lab CTA Section -->
    <div class="w-full pt-0 pb-32 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="rounded-3xl px-6 sm:px-12 py-10 sm:py-16 text-center" style="background-color: #768B9B;">
            <h2 class="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-white mb-6 sm:mb-8 md:mb-12 leading-tight">
              Lust, dein Projekt in mein<br>Creative Lab zu bringen?
            </h2>
            <button @click="openContactModal" class="bg-black text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full text-base sm:text-lg md:text-xl font-medium inline-flex items-center mx-auto elastic-btn hover:bg-gray-900 transition-colors duration-300">
              Let's go
              <svg class="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Portrait Section with Blend Mode Effect -->
    <div ref="portraitSection" class="relative w-full h-screen overflow-hidden portrait-blend-container">
      <!-- Background -->
      <div class="absolute inset-0 bg-white"></div>
      
      <!-- Portrait Image -->
      <div class="absolute inset-0 flex items-center justify-center">
        <img 
          src="/img/thomas-veit-designsnack.png" 
          alt="Thomas Veit - DESIGNSNACK"
          class="h-full w-auto object-cover"
        />
      </div>
      
      <!-- Animated Text with Blend Mode -->
      <h2 
        ref="blendText"
        class="absolute inset-0 flex items-center justify-center text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] xl:text-[12rem] font-bold text-white select-none pointer-events-none portrait-blend-text px-4"
        style="transform: translateY(100%); word-break: keep-all; white-space: nowrap;"
      >
        DESIGNSNACK
      </h2>
    </div>

    <!-- Footer -->
    <footer class="bg-black text-white py-32">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">          
          <!-- Main Message -->
          <div class="mb-1">
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-medium text-white mb-1">
              Let's create something amazing.
            </h2>
          </div>

          <!-- Copyright -->
          <div class="pt-4 border-gray-700">
            <p class="text-gray-400 text-md">
              © 2025 DESIGNSNACK GmbH – Powered by coffee & curiosity
            </p>
          </div>
          
          <!-- Social Links -->
          <div>
            <div class="flex items-center justify-center gap-1">
              <a href="https://linkedin.com/company/designsnack" target="_blank" class="text-gray-300 hover:text-white transition-colors duration-300 p-3 rounded-full hover:bg-gray-800">
                <img src="/img/linkedin.svg" alt="LinkedIn" class="w-6 h-6">
              </a>
              <button @click="openContactModal" class="text-gray-300 hover:text-white transition-colors duration-300 p-3 rounded-full hover:bg-gray-800">
                <img src="/img/email.svg" alt="Email" class="w-6 h-6">
              </button>
            </div>
          </div>

        </div>
      </div>
    </footer>

    <!-- Contact Modal -->

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)

const openContactModal = () => {
  navigateTo('/contact')
}

const portfolioData = ref([
  {
    id: 1,
    image: '/img/cvsnack.png',
    title: 'CVsnack Resume Builder',
    description: 'Moderner Lebenslauf-Builder mit AI-Unterstützung'
  },
  {
    id: 2,
    image: '/img/joyo.png',
    title: 'Joyo',
    description: 'Emotionale Geschenkreisen'
  },
  {
    id: 3,
    image: '/img/design-system.png',
    title: 'Design System',
    description: 'Modulares Design System für eine Agentur'
  },
  {
    id: 4,
    image: '/img/football-app-design.png',
    title: 'Fussball App',
    description: 'Konzept für eine Fussball-App'
  },
  {
    id: 5,
    image: '/img/landing-page-design.png',
    title: 'Landing Page Design',
    description: 'Website Design für eine Agentur'
  },
  {
    id: 6,
    image: '/img/mobile-app-design.png',
    title: 'Mobile Gesundheits-App',
    description: 'Cross-platform App für Gesundheitsdienste'
  },
  {
    id: 7,
    image: '/img/quiz-app-design.png',
    title: 'Quiz Application',
    description: 'Interaktive Quiz-App mit AI-generierten Fragen'
  },
  {
    id: 8,
    image: '/img/scouting-app-design.png',
    title: 'Scouting Platform',
    description: 'Professionale Scouting-App für Fussball-Clubs'
  }
])

const firstRowData = ref(portfolioData.value.slice(0, 4))
const secondRowData = ref(portfolioData.value.slice(4, 8))

// Services data for scroll section
const services = ref([
  'UX/UI Design',
  'Prototyping',
  'MVP Development',
  'Design Systems',  
  'User Research',
  'Usability Testing',   
  'Design Reviews & Sparring',
])

// Refs for services section
const servicesSection = ref()
const serviceRefs = ref([])

// Calculator data
const calculatorData = ref({
  collaborationType: 'design-abo',
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
  
  // Base hourly rates
  const teamIntegrationHourlyRate = 145 // CHF
  const designAboHourlyRate = 150 // CHF (premium for flexibility)
  
  // Constants
  const hoursPerDay = 8
  const weeksPerMonth = 4
  
  let basePrice = 0
  let durationDiscount = 0
  let additionalCosts = 0
  
  if (calculatorData.value.collaborationType === 'team-integration') {
    // Team integration calculation: hourly rate × hours per day × days per week × weeks per month
    const hoursPerMonth = calculatorData.value.teamIntegration.daysPerWeek * hoursPerDay * weeksPerMonth
    basePrice = teamIntegrationHourlyRate * hoursPerMonth
    
    // Duration discount for team integration (progressive)
    if (calculatorData.value.teamIntegration.duration >= 12) {
      durationDiscount = 0.15; // 15% for 12+ months
    } else if (calculatorData.value.teamIntegration.duration >= 9) {
      durationDiscount = 0.12; // 12% for 9+ months
    } else if (calculatorData.value.teamIntegration.duration >= 6) {
      durationDiscount = 0.10; // 10% for 6+ months
    } else if (calculatorData.value.teamIntegration.duration >= 3) {
      durationDiscount = 0.05; // 5% for 3+ months
    } else {
      durationDiscount = 0; // No discount for < 3 months
    }
    
    // Team integration additional options
    if (calculatorData.value.options.workshops) additionalCosts += 500
    if (calculatorData.value.options.onsite) additionalCosts += 300
    
  } else if (calculatorData.value.collaborationType === 'design-abo') {
    // Design-Abo calculation: hourly rate × hours per month
    const hoursPerMonth = calculatorData.value.designAbo.hours
    basePrice = designAboHourlyRate * hoursPerMonth
    
    // Duration discount for design-abo (progressive)
    if (calculatorData.value.designAbo.duration >= 12) {
      durationDiscount = 0.15; // 15% for 12+ months
    } else if (calculatorData.value.designAbo.duration >= 9) {
      durationDiscount = 0.12; // 12% for 9+ months
    } else if (calculatorData.value.designAbo.duration >= 6) {
      durationDiscount = 0.10; // 10% for 6+ months
    } else if (calculatorData.value.designAbo.duration >= 3) {
      durationDiscount = 0.05; // 5% for 3+ months
    } else {
      durationDiscount = 0; // No discount for < 3 months
    }
    
    // No additional options for Design-Abo
  }
  
  // Final calculation: (basePrice + additionalCosts) * (1 - durationDiscount)
  const finalPrice = (basePrice + additionalCosts) * (1 - durationDiscount)
  
  return Math.round(finalPrice)
}

const getDurationDiscount = () => {
  if (calculatorData.value.collaborationType === 'team-integration') {
    const duration = calculatorData.value.teamIntegration.duration
    if (duration >= 12) return 15
    if (duration >= 9) return 12
    if (duration >= 6) return 10
    if (duration >= 3) return 5
    return 0
  } else if (calculatorData.value.collaborationType === 'design-abo') {
    const duration = calculatorData.value.designAbo.duration
    if (duration >= 12) return 15
    if (duration >= 9) return 12
    if (duration >= 6) return 10
    if (duration >= 3) return 5
    return 0
  }
  return 0
}

const formatPrice = (price) => {
  return new Intl.NumberFormat('de-CH').format(price)
}

const calculateSavings = () => {
  if (!calculatorData.value.collaborationType) return 0
  
  // Base hourly rates
  const teamIntegrationHourlyRate = 145 // CHF
  const designAboHourlyRate = 150 // CHF (premium for flexibility)
  
  // Constants
  const hoursPerDay = 8
  const weeksPerMonth = 4
  
  let basePrice = 0
  let additionalCosts = 0
  
  if (calculatorData.value.collaborationType === 'team-integration') {
    const hoursPerMonth = calculatorData.value.teamIntegration.daysPerWeek * hoursPerDay * weeksPerMonth
    basePrice = teamIntegrationHourlyRate * hoursPerMonth
    
    if (calculatorData.value.options.workshops) additionalCosts += 500
    if (calculatorData.value.options.onsite) additionalCosts += 300
    
  } else if (calculatorData.value.collaborationType === 'design-abo') {
    const hoursPerMonth = calculatorData.value.designAbo.hours
    basePrice = designAboHourlyRate * hoursPerMonth
  }
  
  const fullPrice = basePrice + additionalCosts
  const discountedPrice = calculatePrice()
  const savings = fullPrice - discountedPrice
  
  return Math.round(savings)
}

// Logo animation function
const animateLogo = () => {
  if (!logoElement.value || isMobile()) return
  
  const snackPart = logoElement.value.querySelector('.snack-part')
  const designPart = logoElement.value.querySelector('.design-part')
  
  if (!snackPart || !designPart) return
  
  // Create timeline for the "bite" animation
  const tl = gsap.timeline()
  
  // Phase 1: Take a "bite" from the right side of SNACK
  tl.to(snackPart, {
    clipPath: 'polygon(0% 0%, 70% 0%, 85% 40%, 70% 80%, 0% 100%)',
    duration: 0.3,
    ease: "power2.out"
  })
  // Phase 2: Shake the logo slightly (like being "chewed")
  .to(logoElement.value, {
    x: -2,
    duration: 0.05,
    ease: "power2.inOut",
    repeat: 3,
    yoyo: true
  })
  // Phase 3: Restore the logo with a bounce
  .to(snackPart, {
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    duration: 0.4,
    ease: "bounce.out"
  })
  // Phase 4: Add a subtle glow effect to DESIGN part
  .to(designPart, {
    textShadow: '0 0 8px rgba(118, 139, 155, 0.6)',
    duration: 0.2,
    ease: "power2.out"
  })
  .to(designPart, {
    textShadow: '0 0 0px rgba(118, 139, 155, 0)',
    duration: 0.3,
    ease: "power2.out"
  })
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
const logoElement = ref(null)
const servicePillarsSection = ref(null)
const service1 = ref(null)
const service2 = ref(null)
const service3 = ref(null)
const service4 = ref(null)
const service5 = ref(null)
const creativeLab = ref(null)
const paperPlane = ref(null)
const portraitSection = ref(null)
const blendText = ref(null)

let elasticButtonInstances = [];
let typographyTimeline = null; // To store the timeline for cleanup
let splitTextInstance = null; // To store the SplitText instance for cleanup

// Mobile detection utility
const isMobile = () => window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

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
    this.isMobile = isMobile();

    // Bind methods to ensure 'this' context is correct
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.init();
  }

  init() {
    const rect = this.button.getBoundingClientRect();
    this.width = rect.width;
    this.height = rect.height;
    
    // Skip mouse tracking on mobile devices
    if (!this.isMobile) {
      document.body.addEventListener("mousemove", this.handleMouseMove);
    }
  }

  handleMouseMove(e) {
    // Skip on mobile
    if (this.isMobile) return;
    
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
    // Skip animations on mobile
    if (this.isMobile) return;
    
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
    // Skip animations on mobile
    if (this.isMobile) return;
    
    gsap.to(this.button, {
      x: this.x * this.magneticPullX,
      y: this.y * this.magneticPullY,
      duration: 0.4,
      ease: 'power4.easeOut'
    });
  };

  onLeave = () => {
    // Skip animations on mobile
    if (this.isMobile) return;
    
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
    if (!this.isMobile) {
      document.body.removeEventListener("mousemove", this.handleMouseMove);
    }
  }
}

const initElasticButtons = () => {
  const buttons = document.querySelectorAll('.elastic-btn');
  elasticButtonInstances = Array.from(buttons).map(btn => new ElasticButton(btn));
};

// Initialize paper plane animation
const initPaperPlaneAnimation = () => {
  if (!paperPlane.value || !creativeLab.value) return;
  
  // Skip complex scroll animations on mobile
  if (isMobile()) {
    // Simple animation for mobile - just fade in and move slightly
    gsap.set(paperPlane.value, {
      x: 20,
      y: 0,
      scale: 0.6,
      opacity: 0.7
    });
    
    // Simple scroll trigger for mobile
    ScrollTrigger.create({
      trigger: creativeLab.value,
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        gsap.to(paperPlane.value, {
          x: window.innerWidth - 80,
          opacity: 1,
          duration: 2,
          ease: "power2.out"
        });
      },
      onLeave: () => {
        gsap.to(paperPlane.value, {
          opacity: 0.3,
          duration: 0.5
        });
      }
    });
    return;
  }
  
  // Set initial position (off-screen left)
  gsap.set(paperPlane.value, {
    x: -100,
    y: 0,
  });
  
  // Create the animation timeline with scroll trigger
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: creativeLab.value,
      start: "top bottom",
      end: "center center",
      scrub: 1.5, // Links animation progress to scroll (0.5 = faster movement)
      onLeave: () => {
        // Reset position after scrolling past
        gsap.set(paperPlane.value, { x: -100, y: 0, rotation: 0, opacity: 0 });
      },
      onEnterBack: () => {
        // Animate again when scrolling back up
        gsap.set(paperPlane.value, { x: -100, y: 0, rotation: 0, opacity: 0 });
      }
    }
  });
  
  // Create curved flight path with multiple keyframes
  tl.to(paperPlane.value, {
    duration: 0.1,
    opacity: 1,
    ease: "none"
  })
  .to(paperPlane.value, {
    duration: 0.3,
    x: 200,
    y: -20,
    rotation: 0,
    ease: "none"
  }, 0)
  .to(paperPlane.value, {
    duration: 0.2,
    x: 400,
    y: -80,
    rotation: 0,
    ease: "none"
  })
  .to(paperPlane.value, {
    duration: 0.2,
    x: 600,
    y: -20,
    rotation: 0,
    ease: "none"
  })
  .to(paperPlane.value, {
    duration: 0.3,
    x: window.innerWidth + 100,
    y: 50,
    rotation: 0,
    opacity: 0,
    ease: "none"
  });
};

// Initialize services scroll animation
const initServicesScrollAnimation = () => {
  if (!servicesSection.value || !serviceRefs.value.length) return;
  
  // Skip complex scroll animations on mobile
  if (isMobile()) {
    // Static styling for mobile
    gsap.set(servicesSection.value, {
      width: "95%",
      borderRadius: "12px",
      scale: 1
    });
    // Set all services visible on mobile
    serviceRefs.value.forEach((el) => {
      if (el) {
        gsap.set(el, { opacity: 1 });
      }
    });
    return;
  }
  
  // Animate background expansion with zoom-in effect on scroll into section
  ScrollTrigger.create({
    trigger: servicesSection.value,
    start: "top 20%",
    onEnter: () => {
      gsap.to(servicesSection.value, {
        width: "100%",
        borderRadius: "0px",
        scale: 1.1,
        y: -20,
        duration: 0.3,
        ease: "power2.out"
      });
    },
    onLeaveBack: () => {
      gsap.to(servicesSection.value, {
        width: "85%",
        borderRadius: "16px",
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  });
  
  // Create scroll trigger for each service
  serviceRefs.value.forEach((serviceEl, index) => {
    if (!serviceEl) return;
    
    ScrollTrigger.create({
      trigger: serviceEl,
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        // Set current service to full opacity, others to 30%
        serviceRefs.value.forEach((el, i) => {
          if (el) {
            gsap.to(el, {
              opacity: i === index ? 1 : 0.3,
              duration: 0.15,
              ease: "power2.out"
            });
          }
        });
      },
      onEnterBack: () => {
        // Same as onEnter for reverse scroll
        serviceRefs.value.forEach((el, i) => {
          if (el) {
            gsap.to(el, {
              opacity: i === index ? 1 : 0.3,
              duration: 0.15,
              ease: "power2.out"
            });
          }
        });
      }
    });
  });
  
};

// Initialize portrait blend text animation
const initPortraitBlendAnimation = () => {
  if (!portraitSection.value || !blendText.value) return;
  
  // Skip complex scroll animations on mobile
  if (isMobile()) {
    // Simpler animation for mobile - still moves but less complex
    ScrollTrigger.create({
      trigger: portraitSection.value,
      start: "top bottom",
      end: "bottom top", 
      scrub: 0.5, // Faster scrub for mobile
      onUpdate: (self) => {
        // Simpler movement range for mobile
        const progress = self.progress;
        const yValue = 60 - (progress * 80); // Goes from 60% to -20%
        gsap.set(blendText.value, {
          y: `${yValue}%`
        });
      }
    });
    return;
  }
  
  // Create scroll trigger for the blend text
  ScrollTrigger.create({
    trigger: portraitSection.value,
    start: "top bottom",
    end: "bottom top",
    scrub: 1,
    onUpdate: (self) => {
      // Move text from bottom (100%) to top (-20%) based on scroll progress
      const progress = self.progress;
      const yValue = 100 - (progress * 120); // Goes from 100% to -20%
      gsap.set(blendText.value, {
        y: `${yValue}%`
      });
    }
  });
};

onMounted(() => {
  initElasticButtons();
  
  // Initialize services scroll animation
  setTimeout(() => {
    initServicesScrollAnimation();
    initPaperPlaneAnimation();
    initPortraitBlendAnimation();
  }, 100);


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
    if (headingElement.value && trigger.trigger === headingElement.value) {
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

.project-item {
  flex-shrink: 0;
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
  height: 200px;
  border-radius: 1rem;
  display: block;
}

@media (min-width: 768px) {
  .project-image {
    height: 400px;
  }
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

/* Disable will-change on mobile for better performance */
@media (max-width: 768px) {
  .elastic-btn {
    will-change: auto;
  }
  
  /* Simplify marquee animations on mobile */
  .marquee-rtl {
    animation-duration: 60s;
  }
  
  .marquee-ltr {
    animation-duration: 70s;
  }
  
  /* Disable hover effects on mobile */
  .project-image-container:hover {
    transform: none;
  }
  
  /* Hide project overlay (title & description) on mobile */
  .project-overlay {
    display: none;
  }
  
  /* Reduce vertical spacing for package cards on mobile */
  .bg-gray-50.rounded-3xl.p-8 {
    padding: 1.5rem 2rem; /* py-6 px-8 equivalent - reduced from p-8 */
  }
  
  /* Reduce gaps within cards on mobile */
  .flex.flex-col.gap-12 {
    gap: 2rem; /* Reduced from gap-12 (3rem) to 2rem */
  }
  
  .flex.flex-col.gap-6 {
    gap: 1rem; /* Reduced from gap-6 (1.5rem) to 1rem */
  }
}
/* Custom Select Styling */
.custom-select select {
  font-family: 'Urbanist', sans-serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.custom-select select:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
}

.custom-select:hover svg {
  transform: translateY(-1px);
  color: #374151;
}

.custom-select select:focus + div svg {
  transform: rotate(180deg);
  color: #000;
}

/* Custom select options styling (limited browser support) */
.custom-select select option {
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 500;
}

.custom-select select option:hover {
  background-color: #f9fafb;
}

.custom-select select option:checked {
  background-color: #000;
  color: #fff;
}

/* Enhanced hover and active states */
.custom-select select:hover {
  border-color: #6b7280;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
}

.custom-select select:active {
  border-color: #000;
  transform: translateY(1px);
}

/* Modern Slider Styles */
.slider {
  background: #e5e7eb;
  outline: none;
  -webkit-appearance: none;
  appearance: none;
  border-radius: 6px;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #111827;
  cursor: pointer;
  border: 3px solid white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease;
}

.slider::-webkit-slider-thumb:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
}

.slider::-moz-range-thumb {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #111827;
  cursor: pointer;
  border: 3px solid white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease;
}

.slider::-moz-range-thumb:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
}

.slider:focus {
  outline: none;
}

.slider:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 3px rgba(17, 24, 39, 0.1);
}

/* Animated Gradient */
.animated-gradient {
  background: linear-gradient(-45deg, #6F9BA4, #334E80, #6F9BA4, #334E80);
  background-size: 400% 400%;
  animation: gradient-shift 30s ease infinite;
}

@keyframes gradient-shift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Logo Animation Styles */
.logo-container {
  display: inline-block;
  transition: transform 0.2s ease;
}

.logo-text {
  display: inline-block;
}

.snack-part {
  display: inline-block;
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  transition: clip-path 0.3s ease;
}

.design-part {
  display: inline-block;
  transition: text-shadow 0.3s ease;
}

.logo-container:hover {
  transform: scale(1.02);
}

/* Add subtle hover states for mobile */
@media (max-width: 768px) {
  .logo-container:active {
    transform: scale(0.98);
  }
}

/* Portrait Blend Mode Effect */
.portrait-blend-container {
  isolation: isolate;
}

.portrait-blend-text {
  mix-blend-mode: difference;
  color: white;
}

/* Mobile optimizations for portrait text */
@media (max-width: 768px) {
  .portrait-blend-text {
    font-size: clamp(2.5rem, 8vw, 4rem);
    line-height: 0.9;
  }
}

</style>