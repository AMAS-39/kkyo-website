<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

// Contact Form Data
const form = ref({
  name: "",
  email: "",
  message: "",
});

const isSubmitting = ref(false);
const successMessage = ref("");

// Handle Form Submission
const submitForm = () => {
  isSubmitting.value = true;
  setTimeout(() => {
    successMessage.value = t("contact.form_success");
    isSubmitting.value = false;
    form.value = { name: "", email: "", message: "" }; // Reset form
  }, 2000); // Simulate API call delay
};

// Social Media Links
const socialMedia = ref([
  { name: "Facebook", icon: "🔵", url: "https://facebook.com" },
  { name: "Instagram", icon: "📸", url: "https://instagram.com" },
  { name: "LinkedIn", icon: "💼", url: "https://linkedin.com" },
]);
</script>

<template>
  <div class="w-full">
    <!-- 📞 Hero Section -->
    <section class="relative flex flex-col items-center bg-gray-100 text-gray-900 py-20 px-6 mt-5 text-center">
      <h1 class="text-5xl font-extrabold">{{ t("contact.page_title") }}</h1>
      <p class="mt-4 text-lg text-gray-600 max-w-2xl">{{ t("contact.page_description") }}</p>
    </section>


    
    <!-- 📍 Contact Info -->
    <section class="py-16 bg-white text-center">
      <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        <!-- Email -->
        <div class="bg-gray-100 p-6 rounded-lg shadow-md">
          <p class="text-4xl">📧</p>
          <h3 class="text-2xl font-bold mt-4">{{ t("contact.email") }}</h3>
          <p class="mt-2 text-lg text-gray-600">
            <a href="mailto:info@kkyo.org" class="hover:text-blue-500 transition">{{ t("contact.email_value") }}</a>
          </p>
        </div>

        <!-- Phone -->
        <div class="bg-gray-100 p-6 rounded-lg shadow-md">
          <p class="text-4xl">📞</p>
          <h3 class="text-2xl font-bold mt-4">{{ t("contact.phone") }}</h3>
          <p class="mt-2 text-lg text-gray-600">
            <a href="tel:+9647700000000" class="hover:text-blue-500 transition">{{ t("contact.phone_value") }}</a>
          </p>
        </div>

        <!-- Address -->
        <div class="bg-gray-100 p-6 rounded-lg shadow-md">
          <p class="text-4xl">📍</p>
          <h3 class="text-2xl font-bold mt-4">{{ t("contact.address") }}</h3>
          <p class="mt-2 text-lg text-gray-600">{{ t("contact.address_value") }}</p>
        </div>

      </div>
    </section>

      <!-- 🔹 Decorative Divider -->
      <div class="w-full h-12 bg-white flex items-center justify-center">
      <span class="text-gray-500 text-lg">── ✦ ──</span>
    </div>

    <!-- ✉️ Contact Form -->
  <!-- ✉️ Contact Form (Modernized Design) -->
<section class="py-16 bg-gray-100 flex items-center justify-center">
  <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    
    <!-- Left Side (Image) -->
    <div class="hidden md:block">
      <img src="/src/assets/contact-image.jpg" alt="Contact Us" class="w-full max-w-md mx-auto">
    </div>

    <!-- Right Side (Form) -->
    <div class="bg-white p-10 rounded-xl shadow-xl w-full max-w-lg">
      <h2 class="text-3xl font-extrabold text-gray-900 text-center">{{ t("contact.form_title") }}</h2>
      <p class="mt-2 text-lg text-gray-600 text-center">{{ t("contact.form_description") }}</p>

      <!-- Form -->
      <form @submit.prevent="submitForm" class="mt-6 space-y-4">
        <input v-model="form.name" type="text" :placeholder="t('contact.form_name')" required
          class="w-full p-4 bg-gray-100 border rounded-lg focus:border-blue-500 outline-none transition duration-300 shadow-sm" />

        <input v-model="form.email" type="email" :placeholder="t('contact.form_email')" required
          class="w-full p-4 bg-gray-100 border rounded-lg focus:border-blue-500 outline-none transition duration-300 shadow-sm" />

        <textarea v-model="form.message" :placeholder="t('contact.form_message')" rows="4" required
          class="w-full p-4 bg-gray-100 border rounded-lg focus:border-blue-500 outline-none transition duration-300 shadow-sm"></textarea>

        <button type="submit" :disabled="isSubmitting"
          class="w-full bg-blue-500 text-white py-3 rounded-lg font-bold hover:bg-blue-600 transition-all duration-300 shadow-md">
          {{ isSubmitting ? t("contact.form_sending") : t("contact.form_submit") }}
        </button>
      </form>

      <p v-if="successMessage" class="mt-4 text-green-500 text-center">{{ successMessage }}</p>
    </div>
  </div>
</section>
  <!-- 🔹 Decorative Divider -->
  <div class="w-full h-12 bg-white flex items-center justify-center">
      <span class="text-gray-500 text-lg">── ✦ ──</span>
    </div>
<!-- 🌐 Social Media Section (Animated Buttons) -->
<section class="py-12 bg-white text-center">
  <div class="container mx-auto px-6">
    <h2 class="text-3xl font-extrabold text-gray-900">{{ t("contact.follow_us") }}</h2>
    
    <div class="mt-6 flex justify-center space-x-6">
      <a v-for="social in socialMedia" :key="social.name" :href="social.url" target="_blank"
        class="flex items-center space-x-2 bg-gray-100 px-5 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-gray-200 shadow-sm">
        <span class="text-xl">{{ social.icon }}</span>
        <span>{{ social.name }}</span>
      </a>
    </div>
  </div>
</section>

  </div>
</template>

<style scoped>
/* Styling to maintain design consistency */
input, textarea {
  transition: border 0.3s ease-in-out;
}

input:focus, textarea:focus {
  border-color: #3b82f6;
}
</style>
