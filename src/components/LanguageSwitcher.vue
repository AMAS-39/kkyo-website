<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
const isDropdownOpen = ref(false);

const languages = [
  { code: "en", name: "English", flag: "/flags/uk.png" },
  { code: "ku", name: "Kurdish", flag: "/flags/Kurdistan.png" },
  { code: "ko", name: "Korean", flag: "/flags/Korea.png" },
];

// Function to change language
const changeLanguage = (lang) => {
  locale.value = lang;
  isDropdownOpen.value = false;
};
</script>

<template>
  <div class="relative inline-block text-left">
    <button
      @click="isDropdownOpen = !isDropdownOpen"
      class="flex items-center bg-transparent text-white font-semibold px-4 py-2 rounded-lg focus:outline-none hover:bg-gray-800 transition-all duration-300"
    >
      🌐 {{ locale.toUpperCase() }}
    </button>

    <transition name="fade">
      <div
        v-if="isDropdownOpen"
        class="absolute right-0 mt-2 w-44 bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden border border-gray-700"
      >
        <ul class="py-2">
          <li
            v-for="lang in languages"
            :key="lang.code"
            @click="changeLanguage(lang.code)"
            class="flex items-center px-4 py-2 hover:bg-gray-800 cursor-pointer transition-all duration-200"
          >
            <img :src="lang.flag" class="w-5 h-5 mr-2 rounded-full" />
            {{ lang.name }}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<style scoped>
/* Dropdown Fade Animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
