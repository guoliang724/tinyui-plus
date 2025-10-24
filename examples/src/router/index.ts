import { createRouter, createWebHistory } from 'vue-router'

import ButtonView from '../views/ButtonView.vue'
import CardView from '../views/CardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'button',
      component: ButtonView,
    },
    {
      path: '/card',
      name: 'card',
      component: CardView,
    },
  ],
  linkActiveClass: 'active',
  
})

export default router
