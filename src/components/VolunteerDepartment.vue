<template>
  <details open class="rounded-2xl shadow-xl p-6 bg-white/90 backdrop-blur-md border border-gray-200 transition">
    <summary class="cursor-pointer text-xl font-bold mb-4 flex items-center gap-3 text-gray-800">
      <span class="text-2xl">{{ icon }}</span>
      {{ department }}
    </summary>

    <ul class="space-y-4">
      <li
  v-for="volunteer in volunteers"
  :key="volunteer.name"
  class="flex items-center justify-between bg-white rounded-lg shadow-sm border border-gray-100 p-4 hover:shadow-md transition"
>
  <div class="flex items-center gap-4">
    <!-- Decorative badge (no text) -->
    <div class="w-3 h-3 rounded-full bg-blue-500 shadow-sm"></div>

    <!-- Name -->
    <span class="text-gray-900 font-medium">{{ volunteer.name }}</span>
  </div>

  <!-- Points -->
  <span class="bg-blue-100 text-blue-700 font-semibold text-sm px-3 py-1 rounded-full shadow-sm">
    {{ volunteer.points }} pts
  </span>
</li>

    </ul>
  </details>
</template>

<script>
export default {
  name: "VolunteerDepartment",
  props: {
    department: String,
    volunteers: Array,
    icon: String,
    color: String
  },
  methods: {
    getInitials(name) {
      const parts = name.split(" ");
      return parts.map(p => p[0]).join("").toUpperCase();
    }
  }
};
</script>
