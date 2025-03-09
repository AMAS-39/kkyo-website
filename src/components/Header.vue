<script setup>
import { ref, watch, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import LanguageSwitcher from "./LanguageSwitcher.vue";
import { useRoute } from "vue-router";

const { t, locale } = useI18n();
const route = useRoute();
const isMobileMenuOpen = ref(false);

// Define LTR/RTL directions
const langDirections = {
  en: "ltr",
  ku: "rtl",
  ko: "ltr",
};

// Update the page direction dynamically
const updateDirection = () => {
  const dir = langDirections[locale.value] || "ltr";
  document.documentElement.setAttribute("dir", dir);
  document.body.setAttribute("dir", dir);
};

// Watch for language changes & update layout dynamically
watch(locale, updateDirection);
onMounted(updateDirection);

// Menu items (Dynamic)
const menuItems = ref([
  { name: t("header.home"), path: "/" },
  { name: t("header.about"), path: "/about" },
  { name: t("header.departments"), path: "/departments" },
  { name: t("header.events"), path: "/events" },
  { name: t("header.contact"), path: "/contact" },
]);

// Update menu items when language changes
watch(locale, () => {
  menuItems.value = [
    { name: t("header.home"), path: "/" },
    { name: t("header.about"), path: "/about" },
    { name: t("header.departments"), path: "/departments" },
    { name: t("header.events"), path: "/events" },
    { name: t("header.contact"), path: "/contact" },
  ];
});

// Close mobile menu on selection
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};
</script>

<template>
  <!-- 🏆 Modern & Professional Header -->
  <nav class="fixed top-0 w-full bg-white/70 backdrop-blur-md shadow-md z-50 px-8 py-4 transition-all">
    <div class="container mx-auto flex justify-between items-center">
      
      <!-- Logo -->
      <div class="text-3xl font-bold text-gray-900 tracking-wide flex items-center">
        <img src="/logo.jpg" alt="Logo" class="h-10 mr-2" />
        KKYO
      </div>

      <!-- Desktop Navigation -->
      <ul class="hidden md:flex space-x-6 text-lg text-gray-900 font-semibold">
        <li v-for="item in menuItems" :key="item.path">
          <router-link
            :to="item.path"
            class="relative pb-1 transition-all duration-300 hover:text-blue-600"
            :class="{ 'text-blue-600 border-b-2 border-blue-600': route.path === item.path }"
          >
            {{ item.name }}
          </router-link>
        </li>
      </ul>

      <!-- Language Switcher -->
      <div class="relative">
        <LanguageSwitcher />
      </div>

      <!-- Mobile Menu Button -->
      <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="md:hidden text-gray-900 text-3xl focus:outline-none">
        ☰
      </button>
    </div>

    <!-- Mobile Dropdown Menu -->
    <transition name="slide">
      <div
        v-if="isMobileMenuOpen"
        class="absolute top-16 left-0 w-full bg-white shadow-md text-gray-900 py-4 flex flex-col items-center text-lg space-y-4"
      >
        <router-link
          v-for="item in menuItems"
          :key="item.path"
          :to="item.path"
          class="py-2 px-4 hover:bg-gray-100 rounded transition-all duration-300"
          @click="closeMobileMenu"
        >
          {{ item.name }}
        </router-link>
      </div>
    </transition>
  </nav>
</template>

<style scoped>
/* Mobile menu animation */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-in-out, opacity 0.3s;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

/* Glassmorphism Effect */
nav {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Smooth underline hover effect */
li a::after {
  content: "";
  display: block;
  width: 0;
  height: 2px;
  background: blue;
  transition: width 0.3s;
}
li a:hover::after {
  width: 100%;
}
</style>
