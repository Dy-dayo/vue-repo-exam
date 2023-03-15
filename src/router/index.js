import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Error from '../components/Error.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      name: "repo",
      path: "/repo/:repoId",
      component: About,
    },
    {
      name: "error",
      path: "/error",
      component: Error,
    },
  ]
})

export default router
