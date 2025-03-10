<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { useI18n } from "vue-i18n";
import { computed } from "vue";

const { locale } = useI18n();

// Dynamically set font family based on the language
const fontFamily = computed(() => {
  return locale.value === "ku"
    ? "'Noto Sans Arabic', sans-serif"
    : "'Poppins', sans-serif"; // Change to your default English font
});
</script>

<template>
  <div :style="{ fontFamily }" class="flex flex-col min-h-screen transition-all w-full">
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
/* Load Kurdish font from Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400;700&family=Poppins:wght@400;700&display=swap');

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
