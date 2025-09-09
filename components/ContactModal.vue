<template>
  <Teleport to="body">
    <div v-if="isOpen" class="modal-overlay" @click="closeModal">
      <!-- Modal -->
      <div 
        ref="modalContent"
        class="modal-content"
        @click.stop
      >
      <!-- Header -->
      <div class="flex items-center justify-between p-6 border-b border-gray-200" v-if="!isSubmitting && !showSuccessAnimation">
        <h2 class="text-2xl font-semibold text-gray-900">Lass uns sprechen</h2>
        <button 
          @click="closeModal"
          class="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
        >
          <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <!-- Loading State -->
      <div v-if="isSubmitting" class="flex flex-col items-center justify-center p-12 text-center">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mb-4"></div>
        <h3 class="text-xl font-semibold text-gray-900 mb-2">Nachricht wird gesendet...</h3>
        <p class="text-gray-600">Einen Moment bitte</p>
      </div>

      <!-- Success Animation State -->
      <div v-if="showSuccessAnimation" class="flex flex-col items-center justify-center p-8 text-center relative">
        <!-- Close button for success state -->
        <button 
          @click="closeModal"
          class="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
        >
          <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        
        <DotLottieVue 
          style="height: 200px; width: 200px" 
          autoplay
          :loop="true"
          src="https://lottie.host/383dab1b-fb5b-4d5a-9ec5-999575e762e8/gO0BxG6N0H.lottie"
        />
        <h3 class="text-2xl font-semibold text-gray-900 mb-2 mt-4">Nachricht gesendet!</h3>
        <p class="text-gray-600 mb-6">Ich melde mich so schnell wie möglich bei dir.</p>
        
        <!-- Close button -->
        <button 
          @click="closeModal"
          class="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
        >
          Schliessen
        </button>
      </div>
      
      <!-- Form -->
      <form v-if="!isSubmitting && !showSuccessAnimation" @submit.prevent="submitForm" class="p-6 space-y-5" novalidate>
        <!-- Name -->
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
            Name *
          </label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
            :class="{ 'border-red-500': errors.name }"
            placeholder="Dein Name"
          />
          <p v-if="errors.name" class="mt-1 text-sm text-red-600">{{ errors.name }}</p>
        </div>
        
        <!-- Email -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
            E-Mail *
          </label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
            :class="{ 'border-red-500': errors.email }"
            placeholder="deine@email.ch"
          />
          <p v-if="errors.email" class="mt-1 text-sm text-red-600">{{ errors.email }}</p>
        </div>
        
        
        <!-- Message -->
        <div>
          <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
            Nachricht *
          </label>
          <textarea
            id="message"
            v-model="form.message"
            required
            rows="4"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 resize-none"
            :class="{ 'border-red-500': errors.message }"
            placeholder="Erzähl mir von deinem Projekt..."
          ></textarea>
          <p v-if="errors.message" class="mt-1 text-sm text-red-600">{{ errors.message }}</p>
        </div>
        
        <!-- Submit Button -->
        <div>
          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full bg-black text-white px-6 py-4 rounded-lg font-medium transition-all duration-200 hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            <span v-if="!isSubmitting">Nachricht senden</span>
            <span v-else class="flex items-center">
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Wird gesendet...
            </span>
          </button>
        </div>
        
        <!-- Success Message -->
        <div v-if="showSuccess" class="p-4 bg-green-50 border border-green-200 rounded-lg">
          <div class="flex">
            <svg class="flex-shrink-0 h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-green-800">Nachricht gesendet!</h3>
              <p class="mt-1 text-sm text-green-700">Ich melde mich so schnell wie möglich bei dir.</p>
            </div>
          </div>
        </div>
        
        <!-- Error Message -->
        <div v-if="submitError" class="p-4 bg-red-50 border border-red-200 rounded-lg">
          <div class="flex">
            <svg class="flex-shrink-0 h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
            </svg>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-red-800">Fehler beim Senden</h3>
              <p class="mt-1 text-sm text-red-700">{{ submitError }}</p>
            </div>
          </div>
        </div>
      </form>
    </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, onUnmounted } from 'vue'
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})


const emit = defineEmits(['close'])

const modalContent = ref(null)
const isSubmitting = ref(false)
const showSuccess = ref(false)
const submitError = ref('')
const showSuccessAnimation = ref(false)

// Form data
const form = ref({
  name: '',
  email: '',
  company: '',
  projectType: '',
  message: ''
})

// Form errors
const errors = ref({})

const closeModal = () => {
  emit('close')
  resetForm()
}

const resetForm = () => {
  form.value = {
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: ''
  }
  errors.value = {}
  showSuccess.value = false
  showSuccessAnimation.value = false
  submitError.value = ''
  isSubmitting.value = false
}

const validateForm = () => {
  errors.value = {}
  
  if (!form.value.name.trim()) {
    errors.value.name = 'Bitte fülle dieses Feld aus'
  }
  
  if (!form.value.email.trim()) {
    errors.value.email = 'Bitte fülle dieses Feld aus'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
    errors.value.email = 'Bitte gib eine gültige E-Mail-Adresse ein'
  }
  
  if (!form.value.message.trim()) {
    errors.value.message = 'Bitte fülle dieses Feld aus'
  } else if (form.value.message.trim().length < 10) {
    errors.value.message = 'Nachricht sollte mindestens 10 Zeichen lang sein'
  }
  
  return Object.keys(errors.value).length === 0
}

const submitForm = async () => {
  if (!validateForm()) {
    return
  }
  
  isSubmitting.value = true
  submitError.value = ''
  
  try {
    const response = await $fetch('/api/send-email', {
      method: 'POST',
      body: form.value
    })
    
    // Show success animation instead of text
    showSuccessAnimation.value = true
    
  } catch (error) {
    submitError.value = 'Es gab einen Fehler beim Senden der Nachricht. Bitte versuche es erneut.'
  } finally {
    isSubmitting.value = false
  }
}

// Close modal on Escape key
if (process.client) {
  const handleEscape = (e) => {
    if (e.key === 'Escape' && props.isOpen) {
      closeModal()
    }
  }
  
  document.addEventListener('keydown', handleEscape)
  
  onUnmounted(() => {
    document.removeEventListener('keydown', handleEscape)
  })
}
</script>

<style scoped>
/* Modal overlay */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

/* Modal content */
.modal-content {
  background: white;
  border-radius: 1rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  width: 100%;
  max-width: 32rem;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
}

/* Custom scrollbar for modal */
.modal-content::-webkit-scrollbar {
  width: 6px;
}

.modal-content::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.modal-content::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

.modal-content::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
</style>