<template>
  <section id="rules" class="py-20 " :style="{ backgroundImage: `url(${rulesImage})` }">
    <!-- Content -->
    <div class="relative z-10 flex flex-col justify-between flex-grow  text-gray-200 px-4 max-w-4xl mx-auto w-full">
      <!-- Top area (title, subtitle, etc.) -->
      <div class="text-center mb-16">
        <h2 class="text-6xl md:text-6xl text-gray-800 mb-4">
          Zasady
        </h2>
      </div>

      <div class="p-8 md:p-12 ">
        <div class="space-y-8">
          <div v-for="(rule, index) in rules" :key="index" class="flex items-start space-x-6">
            <!-- BIG Creative Numbers -->
            <div>
              <span class="text-6xl text-sky-500 leading-none">
                {{ index + 1 }}.
              </span>
            </div>

            <!-- Rule Content -->
            <div class="flex-1">
              <h3 class="text-4xl lg:text-6xl text-gray-800 mb-3">
                {{ rule.title }}
              </h3>
              <p class="text-lg text-gray-600 leading-relaxed">
                {{ rule.description }}
              </p>
            </div>
          </div>
        </div>

        <!-- Terms Agreement -->
        <div class="mt-8 text-center">
          <p class="text-gray-600 mb-4">
            By participating in this contest, you agree to all the terms and conditions stated above.
          </p>
        </div>
      </div>
      <!-- Button at the bottom -->
      <div class="mb-19 text-center">
        <button @click="downloadTerms"
          class=" text-lg py-5 px-10 sm:px-20 md:px-32 lg:px-48 transform hover:scale-105 transition-all duration-300 shadow-lg bg-gradient-to-r from-blue-800 to-cyan-500 text-white">
          {{ buttonText }}
        </button>
      </div>
    </div>
    <div class="container mx-auto px-4 max-w-4xl">
    </div>
  </section>
</template>

<script>
export default {
  name: 'Rules',
  data() {
    return {
      rules: [
        {
          title: 'Rób zakupy',
          description: 'Im więcej kupujesz tym lepiej '
        },
        {
          title: 'Zarejestruj paragon',
          description: ''
        },
        {
          title: 'Wygrywaj',
          description: ''
        },

      ],
      notice: 'This contest is void where prohibited by law. Taxes on prizes are the responsibility of the winners. No purchase necessary to enter or win.',
      rulesImage: '/images/bg1.png',
      buttonText: 'Pobierz Regulamin'
    }
  },


  methods: {
    downloadTerms() {
      const fileUrl = 'terms.pdf'
      window.open(fileUrl, '_blank')
    }
  }
}
</script>

<style scoped>
.group:hover .w-8 {
  transform: scale(1.1);
  transition: transform 0.2s ease-in-out;
}
</style>