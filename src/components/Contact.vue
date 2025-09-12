<template>
  <section class="py-20 bg-sky-950 text-white">
    <div class="max-w-4xl mx-auto px-6">
      <h2 class="text-6xl font-bold text-center mb-12">Kontakt</h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <!-- Phone -->
        <div class="flex flex-col items-center space-y-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-cyan-400" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M2 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.16 3.48a1 1 0 01-.27 1.02l-2.2 2.2a16 16 0 006.36 6.36l2.2-2.2a1 1 0 011.02-.27l3.48 1.16a1 1 0 01.68.95V20a2 2 0 01-2 2h-1C9.82 22 2 14.18 2 5V5z" />
          </svg>
          <p class="text-lg font-semibold">Telefon</p>
          <p class="text-gray-300">+1 234 567 890</p>
        </div>

        <!-- Email -->
        <div class="flex flex-col items-center space-y-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-cyan-400" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <p class="text-lg font-semibold">Email</p>
          <p class="text-gray-300">info@example.com</p>
        </div>

        <!-- Address -->
        <div class="flex flex-col items-center space-y-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-cyan-400" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3zm0 0c-4.418 0-8 2.239-8 5v3h16v-3c0-2.761-3.582-5-8-5z" />
          </svg>
          <p class="text-lg font-semibold">Adres</p>
          <p class="text-gray-300">123 Event Street, City</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      contactImage: ''
    };
  },
  methods: {
  },
};
</script>