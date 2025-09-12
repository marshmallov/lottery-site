<template>
  <div>
    <!-- Hamburger Button -->
    <nav class="fixed top-0 right-0 z-50 p-6">
      <button @click="toggleMenu"
        class="relative w-14 h-14 flex flex-col justify-center items-center focus:outline-none rounded-md group"
        aria-label="Menu">

        <span class="block w-8 h-1 bg-gray-600 transition-all duration-300 ease-in-out group-hover:bg-blue-500"
          :class="{ 'rotate-45 translate-y-2': isOpen, '-translate-y-1.5': !isOpen }"></span>

        <span class="block w-8 h-1 bg-gray-600 transition-all duration-300 ease-in-out mt-1 group-hover:bg-blue-500"
          :class="{ 'opacity-0': isOpen, 'opacity-100': !isOpen }"></span>

        <span class="block w-8 h-1 bg-gray-600 transition-all duration-300 ease-in-out mt-1 group-hover:bg-blue-500"
          :class="{ '-rotate-45 -translate-y-2': isOpen, 'translate-y-1.5': !isOpen }"></span>
      </button>
    </nav>

    <!-- Overlay -->
    <div v-if="isOpen" @click="closeMenu" class="fixed inset-0 bg-black/30 z-40 transition-opacity duration-300" :class="{
      'opacity-100': isOpen,
      'opacity-0': !isOpen
    }"></div>

    <!-- Slide Menu (auto height instead of full height) -->
    <div
      class="fixed top-20 right-0 w-72 bg-white shadow-lg z-50  transform transition-transform duration-300 ease-in-out"
      :class="{
        'translate-x-0': isOpen,
        'translate-x-full': !isOpen
      }">
      <nav class="p-6 space-y-4">
        <a href="#home" @click="handleMenuClick"
          class="block py-3 px-4 text-base text-gray-700  hover:bg-gray-50  transition-colors duration-200">
          Home
        </a>
        <a href="#rewards" @click="handleMenuClick"
          class="block py-3 px-4 text-base text-gray-700  hover:bg-gray-50  transition-colors duration-200">
          Nagrody
        </a>
        <a href="#rules" @click="handleMenuClick"
          class="block py-3 px-4 text-base text-gray-700  hover:bg-gray-50  transition-colors duration-200">
          Zasady
        </a>
        <a href="#form" @click="handleMenuClick"
          class="block py-3 px-4 text-base text-gray-700  hover:bg-gray-50  transition-colors duration-200">
          Weź udział
        </a>
        <a href="#contact" @click="handleMenuClick"
          class="block py-3 px-4 text-base text-gray-700  hover:bg-gray-50  transition-colors duration-200">
          Kontakt
        </a>
        <a href="#" @click="handleMenuClick"
          class="block py-3 px-4 text-base text-gray-700  hover:bg-gray-50  transition-colors duration-200">
          Polityka prywatności
        </a>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

// Track the open/closed state for animation
const isOpen = ref(false)

// Toggle menu function
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

// Close menu function
const closeMenu = () => {
  isOpen.value = false
}

// Handle menu item clicks
const handleMenuClick = () => {
  closeMenu()
}

// Prevent body scrolling when menu is open
watch(isOpen, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
}, { immediate: true })


// Cleanup on unmount
import { onUnmounted } from 'vue'
onUnmounted(() => {
  document.body.style.overflow = 'auto'
})
</script>

<style scoped>
/* Override any scroll-lock behavior */
:deep(.dropdown-content) {
  position: absolute !important;
}

/* Ensure body scrolling is always enabled */
:global(body) {
  overflow: auto !important;
  padding-right: 0px !important;
}
</style>