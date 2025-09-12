<template>
  <section id="home" class="relative min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: `url(${heroImage})` }">

    <!-- Content -->
    <div
      class="relative z-10 flex flex-col justify-between flex-grow text-center text-gray-200 px-4 max-w-4xl mx-auto w-full">
      <!-- Top area (title, subtitle, etc.) -->
      <div class="mt-20">
        <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <!-- {{ title }} -->
        </h1>
        <p class="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          <!-- {{ subtitle }} -->
        </p>
      </div>

      <!-- Button at the bottom -->
      <div class="mb-19">
        <button @click="scrollToApplication"
          class=" text-lg py-5 px-48 py-4 transform hover:scale-105 transition-all duration-300 shadow-lg bg-gradient-to-r from-blue-800 to-cyan-500 text-white">
          {{ buttonText }}
        </button>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-5 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
      <div class="w-6 h-10 border-2 border-white rounded-full flex justify-center">
        <div class="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  data() {
    return {
      title: 'Join Our Amazing Contest',
      subtitle: 'Zagraj i wygraj',
      buttonText: 'Weź Udział',
      heroImage: '/images/hero-bg.png'
    }
  },
  methods: {
    scrollToApplication() {
      const applicationSection = document.querySelector('#application-form')
      if (applicationSection) {
        applicationSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}
</script>

<style scoped>
/* Additional custom styles if needed */
.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.btn-primary:hover {
  background: linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%);
}
</style>