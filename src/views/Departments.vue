<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

// 🏛️ Departments Data (Dynamic)
const departments = ref([
  { key: "education", icon: "🎓", image: "/departments/education.jpg" },
  { key: "culture", icon: "🎭", image: "/departments/culture.jpg" },
  { key: "technology", icon: "💡", image: "/departments/technology.jpg" },
  { key: "media", icon: "📢", image: "/departments/media.jpg" },
  { key: "economy", icon: "📊", image: "/departments/economy.jpg" }
]);
</script>

<template>
  <div class="w-full">
    
    <!-- 🌟 Page Title -->
    <section class="py-16 mt-5 bg-white text-center">
      <h1 class="text-5xl font-extrabold text-gray-900">{{ t("departments.page_title") }}</h1>
      <p class="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{{ t("departments.page_description") }}</p>
    </section>

    <!-- 🔹 Decorative Divider -->
    <div class="w-full h-12 bg-white flex items-center justify-center">
      <span class="text-gray-500 text-lg">── ✦ ──</span>
    </div>

    <!-- 📌 Department Sections -->
    <section v-for="department in departments" :key="department.key" class="py-24 bg-gray-100 text-center">
      <div class="container mx-auto px-6 flex flex-col lg:flex-row items-center">
        
        <!-- Department Image -->
        <div class="w-full lg:w-1/3 flex justify-center mb-8 lg:mb-0">
          <img :src="department.image" :alt="t(`departments.${department.key}.name`)"
            class="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 object-cover rounded-xl shadow-lg border-4 border-gray-300 hover:scale-105 transition-transform duration-300">
        </div>

        <!-- Department Content -->
        <div class="w-full lg:w-2/3 px-4 text-center lg:text-left">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 flex items-center justify-center lg:justify-start">
            <span class="mr-3 text-5xl">{{ department.icon }}</span> 
            {{ t(`departments.${department.key}.name`) }}
          </h2>
          
          <div class="mt-6 bg-gradient-to-r from-gray-100 to-white text-gray-900 p-6 sm:p-8 rounded-xl shadow-md border border-gray-300 max-w-full lg:max-w-3xl mx-auto lg:mx-0">
            <p class="text-lg sm:text-xl font-medium leading-relaxed">
              "{{ t(`departments.${department.key}.description`) }}"
            </p>
          </div>
        </div>
        
      </div>
    </section>

  

  </div>
</template>

<style scoped>
.bg-gray-100 {
  background: linear-gradient(to bottom, #ffffff, #f8f9fa);
}
</style>
