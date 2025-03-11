<script setup>
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import axios from "axios";

const { t, locale } = useI18n();
const events = ref([]);
const loading = ref(true);
const selectedEvent = ref(null);
const showModal = ref(false);

onMounted(async () => {
  try {
    const response = await axios.get("https://kkyo-flask-admin.onrender.com/events");
    let fetchedEvents = response.data;

    // Sort events by date (newest first)
    events.value = fetchedEvents.sort((a, b) => new Date(b.date) - new Date(a.date));
  } catch (error) {
    console.error("❌ Error fetching events:", error);
  } finally {
    loading.value = false;
  }
});


// Open Modal and Set Event Details
const openModal = (event) => {
  selectedEvent.value = event;
  showModal.value = true;
};

// Close Modal
const closeModal = () => {
  showModal.value = false;
  selectedEvent.value = null;
};
</script>

<template>
  <div class="w-full">
    <!-- 🌟 Hero Section (Modern Glassmorphism) -->
    <section class=" bg-gray-100 relative flex items-center justify-center text-black py-32 mt-5 text-center">
      <div class="absolute inset-0 bg-cover bg-center brightness-50" style="background-image: url('/src/assets/events/hero.jpg');"></div>
      <div class="relative z-10 bg-white bg-opacity-10 backdrop-blur-md p-12 rounded-xl shadow-lg">
        <h1 class="text-4xl text-black font-extrabold">{{ t("events.page_title") }}</h1>
        <p class=" text-black mt-4 text-lg  max-w-3xl mx-auto">{{ t("events.page_description") }}</p>
      </div>
    </section>

    <!-- ✦ Decorative Divider -->
    <div class="w-full h-12 bg-white flex items-center justify-center">
      <span class="text-gray-500 text-lg">── ✦ ──</span>
    </div>

    <!-- 📅 Events Listing -->
    <section class="py-24">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-extrabold text-gray-900 text-center">{{ t("events.past_events") }}</h2>
        <p class="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">{{ t("events.subtitle") }}</p>

        <!-- Loader -->
        <div v-if="loading" class="text-center mt-12">
          <p class="text-lg text-gray-700 animate-pulse">{{ t("events.loading") }}</p>
        </div>

        <!-- No Events Message -->
        <div v-else-if="events.length === 0" class="text-center mt-12">
          <p class="text-lg text-gray-700">{{ t("events.no_events") }}</p>
        </div>

        <!-- Events Grid -->
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
          <div v-for="event in events" :key="event.id"
            class="relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl group">
            
            <!-- Event Image with Overlay -->
            <div class="relative">
              <img v-if="event.image" :src="event.image" alt="Event Image" class="w-full h-64 object-cover transition-all duration-500 group-hover:scale-105">
              <div class="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all"></div>
            </div>

            <!-- Event Content -->
            <div class="p-6">
              <!-- Event Date -->
              <div class="text-sm text-blue-600 font-semibold uppercase tracking-wide">
                {{ new Date(event.date).toLocaleDateString(locale) }}
              </div>

              <!-- Event Title -->
              <h3 class="text-2xl font-bold mt-2 text-gray-900">{{ event.title[locale] }}</h3>

              <!-- Hidden Description (Only Visible in Modal) -->
              <!-- <p class="mt-2 text-gray-600">{{ event.description[locale] }}</p> -->

              <!-- Learn More Button -->
              <button @click="openModal(event)"
                class="inline-block mt-4 bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-all shadow-md">
                {{ t("events.learn_more") }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 🌟 Modal Component -->
    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div class="bg-white w-full max-w-3xl p-6 rounded-lg shadow-lg relative">
       

        <!-- Event Details -->
        <h2 class="text-3xl font-bold text-blue-600">{{ selectedEvent.title[locale] }}</h2>
        <p class="text-gray-500 mt-1">{{ new Date(selectedEvent.date).toLocaleDateString(locale) }}</p>

        <!-- Event Image -->
        <img v-if="selectedEvent.image" :src="selectedEvent.image" class="w-full h-64 object-cover rounded-md mt-4">

        <!-- Full Description -->
        <p class="mt-4 text-gray-700">{{ selectedEvent.description[locale] }}</p>

        <!-- Close Button -->
        <div class="mt-6 flex justify-end">
          <button @click="closeModal" class="bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-all">
            {{ t("events.close") }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Hero Section */
.bg-gray-900 {
  background: linear-gradient(to right, #1a1a2e, #16213e);
}

/* Event Cards */
.group:hover img {
  transform: scale(1.05);
}

/* Improve text readability */
.text-gray-200 {
  opacity: 0.9;
}
</style>
