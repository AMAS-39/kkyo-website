<template>
  <div class="relative py-32 px-4 bg-gradient-to-br from-blue-50 to-white min-h-screen">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-5xl font-extrabold text-center text-gray-800 mb-16">
        🌟 Top Volunteers by Department
      </h1>

      <transition-group name="fade" tag="div" class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <VolunteerDepartment
          v-for="dept in sortedDepartments"
          :key="dept.department"
          :department="dept.department"
          :volunteers="dept.volunteers"
          :icon="dept.icon"
          :color="dept.color"
        />
      </transition-group>
    </div>
  </div>
</template>

<script>
import VolunteerDepartment from "@/components/VolunteerDepartment.vue";

export default {
  name: "TopVolunteers",
  components: {
    VolunteerDepartment
  },
  data() {
    return {
      departments: [
        {
          department: "Technology",
          icon: "💻",
          color: "bg-blue-100",
          volunteers: [
            { name: "Mnira Muhammad Ali", points: 85 },
            { name: "Zilan Xalil Ahmad", points: 85 }
          ]
        },
        {
          department: "Education",
          icon: "📚",
          color: "bg-green-100",
          volunteers: [
            { name: "Mohammed Hussein Mahmood", points: 145 },
            { name: "Ashna Kamal Rashid", points: 120 },
            { name: "Avan Mohammed Ibrahim", points: 110}
          ]
        },
        {
          department: "Economy",
          icon: "💰",
          color: "bg-yellow-100",
          volunteers: [
            { name: "Khadija Muhammad Awla", points: 60 },
            { name: "Mulkiya Farhad İsmael", points: 50 },
            { name: "Cihan Omer Abdullah", points: 40 },
            { name: "Mustafa Shukr", points: 40 }
          ]
        },
        {
          department: "Culture",
          icon: "🎭",
          color: "bg-pink-100",
          volunteers: [
            { name: "Freshta Farhad Sharef", points: 100 },
            { name: "Abdulmalek Rundi Nuri", points: 90 },
            { name: "Hevi Arif Abdulrahman", points: 90 },

          ]
        },
        {
          department: "Media",
          icon: "",
          color: "bg-pink-100",
          volunteers: [
            { name: "Venda", points: 75 },
            { name: "Zhiman Abdulrahman ", points: 70},
            { name: "Glen Sardar", points: 65 },
            { name: "Hawzheen Abdullah ", points: 65 },
          ]
        }


      ]
    };
  },
  computed: {
    sortedDepartments() {
      return this.departments
        .map(dept => ({
          ...dept,
          volunteers: [...dept.volunteers].sort((a, b) => b.points - a.points)
        }))
        .sort((a, b) => b.volunteers.length - a.volunteers.length);
    }
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
