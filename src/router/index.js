import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/problematica',
      name: 'problematica',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProblematicaView.vue')
    },
    {
      path:'/estrategias',
      name: 'estrategias',
      component:()=>import('../views/EstrategiasView.vue')
    },
    {
      path:'/especies',
      name: 'especies',
      component:()=>import('../views/EspeciesView.vue')
    },
    {
      path:'/trips',
      name: 'trips',
      component:()=>import('../views/TripsView.vue')
    },
    {
      path:'/login',
      name: 'login',
      component:()=>import('../views/LoginView.vue')
    }
  ]
})

export default router
