import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Counter from '../views/Counter.vue'
import DeepMutate from '../views/DeepMutate.vue'
import Directive from '../views/Directive.vue'
import Event from '../views/Event.vue'
import Binding from '../views/Binding.vue'
import Hook from '../views/Hook.vue'
import Watch from '../views/Watch.vue'
import Parent from '../views/Parent.vue'

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
    },
    {
      path: '/event',
      name: 'event',
      component: Event
    },
    {
      path: '/binding',
      name: 'binding',
      component: Binding
    },
    {
      path: '/hook',
      name: 'hook',
      component: Hook
    },
    {
      path: '/watch',
      name: 'watch',
      component: Watch
    },
    {
      path: '/parent',
      name: 'parent',
      component: Parent
    }
  ]
})

export default router
