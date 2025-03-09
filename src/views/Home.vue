<script setup>
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const heroVisible = ref(false);

onMounted(() => {
  setTimeout(() => {
    heroVisible.value = true;
  }, 300);
});

const impactStats = ref([
  { number: "150+", key: "members", icon: "👥" },
  { number: "50+", key: "events_held", icon: "📅" },
  { number: "7", key: "departments", icon: "🏢" },
]);

const sponsors = ref([
  { name: "Korean Consulate", logo: "/src/assets/sponsors/korean_consulate.jpg" },
  { name: "Korea Corner", logo: "/src/assets/sponsors/university_a.png" },
]);

const latestEvents = ref([
  { title: "Korean Cultural Night", date: "March 15, 2025", img: "/src/assets/events/korean_culture.jpg" },
  { title: "Tech & Innovation Summit", date: "April 10, 2025", img: "/src/assets/events/tech_summit.jpg" },
  { title: "AI & Robotics Conference", date: "May 5, 2025", img: "/src/assets/events/ai_conference.jpg" },
]);
</script>

<template>
  <div class="w-full">
    <!-- 🌟 Hero Section (Glassmorphism & Overlay) -->
    <section class="hero relative min-h-screen flex items-center justify-center text-center">
      <video autoplay loop muted class="absolute inset-0 w-full h-full object-cover brightness-50">
        <source src="/src/assets/videos/kkyo-intro.mp4" type="video/mp4" />
      </video>

      <div class="relative z-10 bg-white bg-opacity-10 backdrop-blur-md p-12 rounded-xl shadow-lg">
        <h1 class="text-6xl font-extrabold text-white drop-shadow-lg">{{ t("home.hero_title") }}</h1>
        <p class="mt-4 text-lg text-white opacity-90">{{ t("home.hero_subtitle") }}</p>
        <a href="/about" class="mt-6 inline-block bg-yellow-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-yellow-600 transition-all duration-300">
          {{ t("home.learn_more") }}
        </a>
      </div>
    </section>

    <!-- 🎯 Mission & Vision Section -->
    <section class="mission py-24 bg-gray-100 text-center">
      <div class="container mx-auto px-6">
        <h2 class="text-5xl font-extrabold text-gray-900">{{ t("home.mission_vision_title") }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div class="p-8 bg-white shadow-xl rounded-lg border-t-4 border-yellow-500">
            <h3 class="text-3xl font-semibold text-red-600">{{ t("home.mission_title") }}</h3>
            <p class="mt-4 text-lg text-gray-700">{{ t("home.mission_description") }}</p>
          </div>
          <div class="p-8 bg-white shadow-xl rounded-lg border-t-4 border-blue-500">
            <h3 class="text-3xl font-semibold text-green-600">{{ t("home.vision_title") }}</h3>
            <p class="mt-4 text-lg text-gray-700">{{ t("home.vision_description") }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 📊 Our Impact (with Animated Stats) -->
    <section class="stats py-24 bg-gradient-to-r from-blue-900 to-red-700 text-white text-center">
      <div class="container mx-auto px-6">
        <h2 class="text-5xl font-extrabold">{{ t("home.impact") }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          <div v-for="stat in impactStats" :key="stat.key" class="p-6 bg-opacity-20 bg-white backdrop-blur-md rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
            <p class="text-6xl font-bold text-yellow-400">{{ stat.icon }}</p>
            <p class="text-4xl font-extrabold mt-2">{{ stat.number }}</p>
            <p class="text-lg mt-2">{{ t(`home.${stat.key}`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 📰 Latest Events -->
    <section class="events py-24 bg-white text-center">
      <div class="container mx-auto px-6">
        <h2 class="text-5xl font-extrabold text-gray-900">{{ t("home.latest_events") }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div v-for="event in latestEvents" :key="event.title" class="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
            <img :src="event.img" :alt="event.title" class="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500">
            <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
              <div class="text-center">
                <h3 class="text-2xl font-bold text-white">{{ event.title }}</h3>
                <p class="text-lg mt-2 text-gray-200">{{ event.date }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 🤝 Sponsors -->
    <section class="sponsors py-24 bg-gray-100 text-center">
      <div class="container mx-auto px-6">
        <h2 class="text-5xl font-extrabold text-gray-900">{{ t("home.sponsors_title") }}</h2>
        <div class="flex justify-center gap-8 mt-8">
          <img v-for="sponsor in sponsors" :key="sponsor.name" :src="sponsor.logo" :alt="sponsor.name"
               class="h-32 object-contain grayscale hover:grayscale-0 transition duration-300">
        </div>
      </div>
    </section>
  </div>
</template>



<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  width: 100%;
}

.hero h1 {
  font-family: "Noto Serif", serif;
  animation: fadeInUp 1s ease-in-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
