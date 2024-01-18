import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddViewVue from '@/views/AddView.vue'
import FamilyViewVue from '@/views/FamilyView.vue'
import EditViewVue from '@/views/EditView.vue'
import FiltersPageViewVue from '@/views/FiltersPageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: HomeView
    },
     {
      path: '/Familias',
      name: 'Familias',
      component: FamilyViewVue
    }, 
    {
      path: '/animals',
      name: 'animals',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AnimalsView.vue')
    },
    {
      path: '/Add',
      name: 'Añadir',
      component: AddViewVue
    }, 
    {
      path: '/Edit',
      name: 'Editar',
      component: EditViewVue
    },
    {
      path: '/Buscar',
      name: 'Buscar',
      component: FiltersPageViewVue
    }, 

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
