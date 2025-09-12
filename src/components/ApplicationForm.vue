<template>
  <section class="py-20 bg-gray-50" :style="{ backgroundImage: `url(${formImage})` }">
    <h2 class="text-6xl font-bold text-center mb-12">Formularz</h2>
    <form class="max-w-2xl mx-auto bg-white shadow-xl p-10 space-y-8" @submit.prevent="submitForm">
      <!-- DANE Section -->
      <div class="space-y-4">
        <h3 class="text-3xl font-bold text-gray-800 mb-4">Dane</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-gray-700 mb-1 font-bold">Imię</label>
            <input v-model="form.firstName" type="text" placeholder="Imię"
              class="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400" required />
          </div>
          <div>
            <label class="block text-gray-700 mb-1 font-bold">Nazwisko</label>
            <input v-model="form.lastName" type="text" placeholder="Nazwisko"
              class="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400" required />
          </div>
        </div>
        <div>
          <label class="block text-gray-700 mb-1 font-bold">Email</label>
          <input v-model="form.email" type="email" placeholder="Email"
            class="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400" required />
        </div>
        <div>
          <label class="block text-gray-700 mb-1 font-bold">Numer telefonu</label>
          <input v-model="form.phone" type="tel" placeholder="Numer telefonu"
            class="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400" />
        </div>
      </div>

      <!-- PARAGON Section -->
      <div class="space-y-4">
        <h3 class="text-3xl font-bold text-gray-800 mb-4">Paragon</h3>
        <div>
          <label class="block text-gray-700 mb-1 font-bold">Numer paragonu</label>
          <input v-model="form.receiptNumber" type="text" placeholder="Numer paragonu"
            class="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400" required />
        </div>
      </div>

      <!-- ZGODY Section -->
      <div class="space-y-4">
        <h3 class="text-3xl font-bold text-gray-800 mb-4">Zgody</h3>
        <div class="flex flex-col space-y-2">
          <label class="inline-flex items-center">
            <input type="checkbox" v-model="form.consent1" class="form-checkbox h-5 w-5 text-blue-600" />
            <span class="ml-2 text-gray-700">Zgoda 1 (required)</span>
          </label>
          <label class="inline-flex items-center">
            <input type="checkbox" v-model="form.consent2" class="form-checkbox h-5 w-5 text-blue-600" />
            <span class="ml-2 text-gray-700">Zgoda 2 (required)</span>
          </label>
        </div>
      </div>

      <!-- Submit Button -->
      <button type="submit"
        class="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 w-full text-lg font-bold hover:scale-105 transform transition-all duration-300 shadow-lg">
        Wyślij
      </button>
    </form>
  </section>
</template>

<script>
export default {
  name: "ApplicationForm",
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        receiptNumber: "",
        consent1: false,
        consent2: false,
      },
      formImage: 'images/bg2.png'
    };
  },
  methods: {
    submitForm() {
      // Require both checkboxes
      if (!this.form.consent1 || !this.form.consent2) {
        alert("Musisz zaakceptować wszystkie zgody, aby wysłać formularz.");
        return;
      }

      console.log("Form Submitted:", this.form);
      alert("Your application has been submitted!");

      // Reset form
      Object.keys(this.form).forEach(key => {
        this.form[key] = (typeof this.form[key] === "boolean") ? false : "";
      });
    },
  },
};
</script>