<script setup>
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import axios from "axios"; // Import axios for API requests

const { t, locale } = useI18n();
const heroVisible = ref(false);
const latestEvents = ref([]);
const loading = ref(true);

onMounted(async () => {
  setTimeout(() => {
    heroVisible.value = true;
  }, 300);
  await fetchLatestEvents();
});

const fetchLatestEvents = async () => {
  try {
    const response = await axios.get("https://kkyo-flask-admin.onrender.com/events");
    let events = response.data;

    // Sort events by date (latest first) & Get only the latest 3 events
    latestEvents.value = events.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);
  } catch (error) {
    console.error("❌ Error fetching latest events:", error);
  } finally {
    loading.value = false;
  }
};

const impactStats = ref([
  { number: "150+", key: "members", icon: "👥" },
  { number: "10+", key: "events_held", icon: "📅" },
  { number: "5", key: "departments", icon: "🏢" },
]);

const sponsors = ref([
  { name: "Korean Consulate", logo: "/sponsors/korean_consulate.jpg" },
  { name: "Korea Corner", logo: "/sponsors/university_a.png" },
]);
</script>
<template>
  <div class="w-full">
    <!-- 🌟 Hero Section -->
    <section class="hero relative min-h-screen flex items-center justify-center text-center">
      <video autoplay loop muted class="absolute inset-0 w-full h-full object-cover brightness-50 hidden sm:block">
  <source src="/videos/kkyo-intro.mp4" type="video/mp4" />
</video>

<!-- Show an image instead of a video on mobile screens -->
<img src="/images/kkyo-hero.jpg" alt="KKYO Background" class="absolute inset-0 w-full h-full object-cover brightness-50 sm:hidden">


      <div class="relative z-10 bg-white bg-opacity-10 backdrop-blur-md p-12 rounded-xl shadow-lg">
        <h1 class="text-6xl font-extrabold text-white drop-shadow-lg">{{ t("home.hero_title") }}</h1>
        <p class="mt-4 text-lg text-white opacity-90">{{ t("home.hero_subtitle") }}</p>
        <a href="/about" class="mt-6 inline-block bg-yellow-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-yellow-600 transition-all duration-300">
          {{ t("home.learn_more") }}
        </a>
      </div>
    </section>
     <!-- ✦ Decorative Divider -->
     <div class="w-full h-12 bg-white flex items-center justify-center">
      <span class="text-gray-500 text-lg">── ✦ ──</span>
    </div>

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

     <!-- ✦ Decorative Divider -->
     <div class="w-full h-12 bg-white flex items-center justify-center">
      <span class="text-gray-500 text-lg">── ✦ ──</span>
    </div>

<!-- 📊 Our Impact (Redesigned Section) -->
<section class="stats py-24 bg-gray-100 text-gray-900 text-center">
  <div class="container mx-auto px-6">
    <h2 class="text-5xl font-extrabold text-gray-900">{{ t("home.impact") }}</h2>
    <p class="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
      {{ t("home.impact_description") }}
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
      <div v-for="stat in impactStats" :key="stat.key" 
           class="relative bg-white rounded-xl shadow-lg p-8 border-t-4 border-blue-600 flex flex-col items-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

        <!-- Icon -->
        <div class="w-20 h-20 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full shadow-md">
          <span class="text-4xl">{{ stat.icon }}</span>
        </div>

        <!-- Number & Label -->
        <p class="text-5xl font-bold mt-4 text-blue-600">{{ stat.number }}</p>
        <p class="text-lg mt-2 text-gray-700">{{ t(`home.${stat.key}`) }}</p>

      </div>
    </div>
  </div>
</section>

 <!-- ✦ Decorative Divider -->
 <div class="w-full h-12 bg-white flex items-center justify-center">
      <span class="text-gray-500 text-lg">── ✦ ──</span>
    </div>
    <!-- 📰 Latest Events Section -->
    <section class="events py-24 bg-white text-center">
      <div class="container mx-auto px-6">
        <h2 class="text-5xl font-extrabold text-gray-900">{{ t("home.latest_events") }}</h2>

        <!-- Loader while fetching data -->
        <div v-if="loading" class="text-center mt-8">
          <p class="text-lg text-gray-700 animate-pulse">Loading...</p>
        </div>

        <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div v-for="event in latestEvents" :key="event.id"
            class="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
            
            <!-- Event Image -->
            <img v-if="event.image" :src="event.image" alt="Event Image"
              class="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500">
            
            <!-- Event Overlay -->
            <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
              <div class="text-center">
                <h3 class="text-2xl font-bold text-white">{{ event.title[locale] }}</h3>
                <p class="text-lg mt-2 text-gray-200">{{ new Date(event.date).toLocaleDateString(locale) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


     <!-- ✦ Decorative Divider -->
    <div class="w-full h-12 bg-white flex items-center justify-center">
      <span class="text-gray-500 text-lg">── ✦ ──</span>
    </div>
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
