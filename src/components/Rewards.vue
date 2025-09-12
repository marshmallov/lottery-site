<template>
  <section class="py-20 bg-sky-950 text-center" :style="{ backgroundImage: `url(${rewardsImage})` }">
    <h2 class="text-6xl text-white font-bold mb-10">Nagrody</h2>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <div class="bg-white shadow-lg p-8">
        <img :src="rewardImage1" alt="Reward 1" class="w-full h-84 object-contain mb-6">
        <p class="text-lg font-medium">Nagroda 1</p>
      </div>
      <div class="bg-white shadow-lg p-8">
        <img :src="rewardImage2" alt="Reward 2" class="w-full h-84 object-contain mb-6">
        <p class="text-lg font-medium">Nagroda 2</p>
      </div>
      <div class="bg-white shadow-lg p-8">
        <img :src="rewardImage3" alt="Reward 3" class="w-full h-84 object-contain mb-6">
        <p class="text-lg font-medium">Nagroda 3</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Rewards',
  data() {
    return {
      title: 'Join Our Amazing Contest',
      subtitle: 'Zagraj i wygraj',
      buttonText: 'Weź Udział',
      rewardImage1: '/images/reward1.png',
      rewardImage2: '/images/reward2.png',
      rewardImage3: '/images/reward3.png',
      rewardsImage: ''
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