<script setup>
import { useI18n } from 'vue-i18n';
import { ref } from 'vue';

const { t } = useI18n();
const currentYear = ref(new Date().getFullYear());

// Social Media Links with Professional Hover Effects
const socialLinks = [
  { name: 'Facebook', icon: '/icons/facebook.svg', url: 'https://www.facebook.com/share/166ddqFg6P/?mibextid=wwXIfr' },
  { name: 'LinkedIn', icon: '/icons/linkedin.svg', url: 'https://www.linkedin.com/company/kkya-oficial/' },
  { name: 'Instagram', icon: '/icons/instagram.svg', url: 'https://www.instagram.com/kkyoofficial?igsh=YXBzbGxwOXAxMzYx' }
];

// Scroll to Top Functionality
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<template>
  <!-- 🌍 Modern Footer -->
  <footer class="bg-gray-900 text-white py-10 px-6 backdrop-blur-lg shadow-lg">
    <div class="max-w-6xl mx-auto flex flex-wrap justify-center md:justify-between items-center space-y-4 md:space-y-0 gap-6">
      
      <!-- Organization Name & Copyright -->
      <p class="text-center md:text-left text-lg font-semibold tracking-wide w-full md:w-auto">
        &copy; {{ currentYear }} KKYO - {{ t('footer.organization') }}. {{ t('footer.rights') }}
      </p>

      <!-- 🌐 Social Media Links -->
      <div class="flex space-x-4 w-full md:w-auto justify-center">
        <a v-for="link in socialLinks" :key="link.name" :href="link.url" target="_blank"
           class="p-2 rounded-full bg-white bg-opacity-10 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center w-10 h-10">
          <img :src="link.icon" class="w-6 h-6 filter brightness-90 hover:brightness-110" :alt="link.name" />
        </a>
      </div>

      <!-- 🔼 Back to Top Button -->
      <button @click="scrollToTop"
              class="bg-blue-600 text-white hover:bg-blue-700 font-semibold px-5 py-2 rounded-lg shadow-md transition-all duration-300 w-full md:w-auto">
        ↑ {{ t('footer.backToTop') }}
      </button>

    </div>
  </footer>
</template>

<style scoped>
/* Smooth Fade-in Animation */
footer {
  animation: fadeInUp 0.8s ease-in-out;
}

/* Keyframes Animation */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Styling */
@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }
}
</style>
