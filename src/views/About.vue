<script setup>
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const speechVisible = ref(false);

onMounted(() => {
  setTimeout(() => {
    speechVisible.value = true;
  }, 300);
});

// 🏛️ Departments (Dynamic)
const departments = ref([
  { key: "education", icon: "🎓" },
  { key: "culture", icon: "🎭" },
  { key: "technology", icon: "💡" },
  { key: "media", icon: "📢" },
  { key: "economy", icon: "📊" }
]);


// 👥 Our Team Members (Dynamic)
const teamMembers = ref([
  { key: "Ahmed Shwan", image: "/team/ahmad.png" },
  { key: "Bala Najat", image: "/team/bala.png" },
  { key: "Ashna Jawhar", image: "/team/ashna.png" },
  { key: "Sarezh Sardar", image: "/team/sarezh.png" },
  { key: "Alla Tahr", image: "/team/ala.png" },
]);


// 🏆 Testimonials (Dynamic)
const testimonials = ref([
  { key: "Ali Hassan" },
  { key: "amina omar" }
]);

</script>

<template>
  <div class="w-full">
<!-- 👩‍💼 Chairwoman’s Speech (Fully Responsive, Clean, & Elegant) -->
<section class="relative flex flex-col lg:flex-row items-center bg-white text-gray-900 py-16 px-6 mt-5">
  
  <!-- Chairwoman Image -->
  <div class="w-full lg:w-1/3 flex justify-center mb-8 lg:mb-0">
    <img src="/team/chairwoman.jpg" alt="Chairwoman"
      class="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 object-cover rounded-full shadow-lg border-4 border-gray-300 hover:scale-105 transition-transform duration-300">
  </div>

  <!-- Speech Box -->
  <div class="w-full lg:w-2/3 px-4" :class="{ 'text-right': $i18n.locale === 'ku', 'text-left': $i18n.locale !== 'ku' }">
    <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">{{ t("about.chairwoman_title") }}</h2>
    
    <div class="mt-6 bg-gradient-to-r from-gray-100 to-white text-gray-900 p-6 sm:p-8 rounded-xl shadow-md border border-gray-300 max-w-full lg:max-w-3xl mx-auto lg:mx-0">
      <p class="text-lg sm:text-xl font-medium leading-relaxed italic">
        "{{ t('about.chairwoman_speech') }}"
      </p>
      <p class="mt-4 font-bold text-lg sm:text-xl text-blue-600 text-right">- {{ t('about.chairwoman_name') }}</p>
    </div>
  </div>
</section>



 <!-- Decorative Divider -->
 <div class="w-full h-12 bg-white flex items-center justify-center">
      <span class="text-gray-500 text-lg">── ✦ ──</span>
    </div>


    <!-- 🏛️ Our Departments (3D Hover Effect) -->
    <section class="py-24   bg-gray-100 text-center">
      <div class="container mx-auto px-6">
        <h2 class="text-5xl font-extrabold text-gray-900">{{ t("about.departments_title") }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          <div v-for="department in departments" :key="department.name" class="p-6 bg-white shadow-lg rounded-lg transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
            <p class="text-6xl animate-bounce">{{ department.icon }}</p>
            <h3 class="text-2xl font-bold mt-4">{{ t(`about.departments.${department.key}.name`) }}</h3>
<p class="mt-2 text-lg text-gray-700">{{ t(`about.departments.${department.key}.description`) }}</p>

          </div>
        </div>
      </div>
    </section>


     <!-- Decorative Divider -->
     <div class="w-full h-12 bg-white flex items-center justify-center">
      <span class="text-gray-500 text-lg">── ✦ ──</span>
    </div>
<!-- 👥 Our Professional Team -->
<section class="py-24 bg-gray-100 text-center">
  <div class="container mx-auto px-6">
    <h2 class="text-5xl font-extrabold text-gray-900">{{ t("about.team_title") }}</h2>
    <p class="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{{ t("about.team_description") }}</p>

    <!-- Team Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mt-12">
      <div v-for="member in teamMembers" :key="member.name"
        class="relative bg-white rounded-lg shadow-lg p-6 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
        
        <!-- Member Image -->
        <div class="relative">
          <img :src="member.image" alt="Team Member" 
            class="w-40 h-40 rounded-full mx-auto border-4 border-gray-300 shadow-md transition-all duration-300 hover:scale-105">
        </div>

        <!-- Member Info -->
        <h3 class="text-2xl font-bold mt-4">{{ t(`about.team_members.${member.key}.name`) }}</h3>
        <p class="text-lg text-gray-500">{{ t(`about.team_members.${member.key}.role`) }}</p>

        <!-- Hover Effect (Details on Hover) -->
        <div class="absolute inset-0 bg-gray-900 bg-opacity-90 text-white flex flex-col justify-center items-center opacity-0 transition-all duration-300 hover:opacity-100 rounded-lg p-4">
          <p class="text-lg italic">{{ t(`about.team_members.${member.key}.bio`) }}</p>
        </div>
      </div>
    </div>
  </div>
</section>


 <!-- Decorative Divider -->
 <div class="w-full h-12 bg-white flex items-center justify-center">
      <span class="text-gray-500 text-lg">── ✦ ──</span>
    </div>

<!-- 🏆 Elegant Testimonials Section -->
<section class="py-24 bg-gray-100 text-gray-900 text-center">
  <div class="container mx-auto px-6">
    <h2 class="text-5xl font-extrabold text-gray-900">{{ t("about.testimonials_title") }}</h2>
    <p class="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{{ t("about.testimonials_description") }}</p>

    <!-- Testimonials Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
      <div v-for="testimonial in testimonials" :key="testimonial.name" 
        class="relative p-8 bg-white text-gray-900 shadow-xl rounded-xl border border-gray-300 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
        
        <h3 class="mt-4 font-bold text-lg text-blue-700">{{ t(`about.testimonials.${testimonial.key}.name`) }}</h3>
        <p class="text-xl italic font-medium">"{{ t(`about.testimonials.${testimonial.key}.feedback`) }}"</p>

        <!-- Decorative Quote Symbol -->
        <span class="absolute top-[-10px] left-6 text-6xl text-gray-300 font-serif opacity-50">“</span>
        <span class="absolute bottom-[-10px] right-6 text-6xl text-gray-300 font-serif opacity-50">”</span>
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

.team-card:hover {
  transform: translateY(-5px);
  transition: transform 0.3s ease-in-out;
}

/* Hide scrollbar for better design */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>