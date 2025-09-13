<template>
  <section id="home" class="relative min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: `url(${heroImage})` }">

    <!-- Content -->
    <div
      class="relative z-10 flex flex-col justify-between flex-grow text-center text-gray-200 px-4 max-w-6xl mx-auto w-full">

      <!-- Top area (title, subtitle, etc.) -->
      <div class="mt-20">
        <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          {{ title }}
        </h1>
        <p class="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          {{ subtitle }}
        </p>
      </div>

      <!-- <div class="container m-auto grid grid-cols-3 gap-4 p-6">
        <div class="tile col-span-3  md:col-span-3 lg:col-span-3 flex items-center justify-center">
          <img :src="rewardImage1" alt="Reward 1" class="w-full h-48 object-contain" />
        </div>
        <div class="tile col-span-3 md:col-span-1 lg:col-span-1 flex items-center justify-center">
          <img :src="rewardImage1" alt="Reward 2" class="w-full h-40 object-contain" />
        </div>
        <div class="tile col-span-3 row-span-2 md:col-span-1 lg:col-span-1 flex items-center justify-center">
          <img :src="rewardImage3" alt="Reward 3 & 6" class="w-full h-80 object-contain" />
        </div>
        <div class="tile flex items-center justify-center">
          <img :src="rewardImage1" alt="Reward 4" class="w-full h-40 object-contain" />
        </div>
        <div class="tile flex items-center justify-center">
          <img :src="rewardImage1" alt="Reward 5" class="w-full h-40 object-contain" />
        </div>
        <div class="tile flex items-center justify-center">
          <img :src="rewardImage3" alt="Reward 7" class="w-full h-40 object-contain" />
        </div>
      </div> -->

      <!-- Rewards images -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 my-12 px-6">
        <div class="flex justify-center">
          <img :src="rewardImage1" alt="Reward 1"
            class="w-48 sm:w-40 md:w-56 lg:w-100 object-contain transform hover:scale-105 transition duration-300" />
        </div>
        <div class="flex justify-center">
          <img :src="rewardImage2" alt="Reward 2"
            class="w-48 sm:w-40 md:w-56 lg:w-100 object-contain transform hover:scale-105 transition duration-300" />
        </div>
        <div class="flex justify-center">
          <img :src="rewardImage3" alt="Reward 3"
            class="w-48 sm:w-40 md:w-56 lg:w-100 object-contain transform hover:scale-105 transition duration-300" />
        </div>
      </div>

      <!-- Button at the bottom -->
      <div class="mb-19">
        <button @click="scrollToApplication"
          class="text-lg py-5 px-10 sm:px-20 md:px-32 lg:px-48 transform hover:scale-105 transition-all duration-300 shadow-lg bg-gradient-to-r from-blue-800 to-cyan-500 text-white">
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
      title: 'Wygrywaj niesamowite nagrody',
      subtitle: 'Zagraj i zgarnij',
      buttonText: 'Weź Udział',
      heroImage: '/images/hero-bg2.png',
      rewardImage1: '/images/rw1.png',
      rewardImage2: '/images/rw2.png',
      rewardImage3: '/images/rw3.png'
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