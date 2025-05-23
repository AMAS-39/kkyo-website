import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Departments from './views/Departments.vue'
import Events from './views/Events.vue'
import Contact from './views/Contact.vue'
import TopVolunteers from "./views/TopVolunteers.vue";



const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/departments', component: Departments },
  { path: '/events', component: Events },
  { path: '/contact', component: Contact },
  {
  path: "/top-volunteers",
  name: "TopVolunteers",
  component: TopVolunteers
},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
