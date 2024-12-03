import PersonalAgregarVue from '@/modulos/personal/vistas/PersonalAgregarVue.vue'
import PersonalVue from '@/modulos/personal/vistas/PersonalVue.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   //{
     // path: '/',
     // name: 'home',
     // component: HomeView,
   // },
   //Ruta de personal
   //Luego en App.vue le tienes que indicar en que area aparezca esa ruta (En lo blanco)
   {
      path: '/personal',
      name: 'personal',
      component: PersonalVue,
    },
    //Ruta para agregar un nuevo registro en Personal
    {
      path: '/personal/agregar',
      name: 'personalagregar',
      component: PersonalAgregarVue,
    },
  ],
})

export default router
