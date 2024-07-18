import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Counter from '../views/Counter.vue'
import DeepMutate from '../views/DeepMutate.vue'
import Directive from '../views/Directive.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/counter',
      name: 'counter',
      component: Counter
    },
    {
      path: '/deepMutate',
      name: 'deepMutate',
      component: DeepMutate
    },
    {
      path: '/directive',
      name: 'directive',
      component: Directive
    }
  ]
})

export default router
