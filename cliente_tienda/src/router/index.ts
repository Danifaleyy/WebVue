import PersonalAgregarVue from '@/modulos/personal/vistas/PersonalAgregarVue.vue'
import PersonalBorrarVue from '@/modulos/personal/vistas/PersonalBorrarVue.vue'
import PersonalEditarVue from '@/modulos/personal/vistas/PersonalEditarVue.vue'
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
    //Ruta para editar un registro en Personal
    {
      path: '/personal/:id/editar',
      name: 'personaleditar',
      component: PersonalEditarVue,
    },
    //Ruta para eliminar un registro en Personal
    {
      path: '/personal/:id/borrar',
      name: 'personalborrar',
      component: PersonalBorrarVue,
    },
  ],
})

export default router
