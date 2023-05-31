import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Main.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router