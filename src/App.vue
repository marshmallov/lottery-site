<template>
  <div id="app" class="min-h-screen">
    <Navbar />
    <Hero />
    <Rewards />
    <Rules />
    <ApplicationForm />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Rewards from './components/Rewards.vue'
import Rules from './components/Rules.vue'
import ApplicationForm from './components/ApplicationForm.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'App',
  components: {
    Navbar,
    Hero,
    Rewards,
    Rules,
    ApplicationForm,
    Contact,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>