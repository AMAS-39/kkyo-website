<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen transition-all w-full">
    <!-- Header with Navigation -->
    <Header />

    <!-- Main Content Area -->
    <main class="flex-1 w-full">
      <router-view />
    </main>

    <!-- Footer Section -->
    <Footer />
  </div>
</template>

<style>
/* Ensure no extra margins, paddings, and force full width */
html, body, #app {
  margin: 0;
  padding: 0;
  width: 100%;
  min-width: 100vw;
  overflow-x: hidden;
  box-sizing: border-box;
}

/* Fix text alignment based on language */
html[dir="rtl"] body {
  text-align: right;
}

html[dir="ltr"] body {
  text-align: left;
}

/* Ensure all sections and containers stretch properly */
section, .container {
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
  box-sizing: border-box;
}
</style>
