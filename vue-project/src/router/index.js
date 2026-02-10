import { createRouter, createWebHistory } from 'vue-router'
import StoreApp from '@/views/StoreApp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
        {
      path: '/',
      name: 'home',
      component: StoreApp,
    },
  ],
})

export default router