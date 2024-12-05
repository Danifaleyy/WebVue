import SigninVue from '@/modulos/autentica/vistas/SigninVue.vue'
import SignupVue from '@/modulos/autentica/vistas/SignupVue.vue'
import PersonalAgregarVue from '@/modulos/personal/vistas/PersonalAgregarVue.vue'
import PersonalBorrarVue from '@/modulos/personal/vistas/PersonalBorrarVue.vue'
import PersonalEditarVue from '@/modulos/personal/vistas/PersonalEditarVue.vue'
import PersonalVue from '@/modulos/personal/vistas/PersonalVue.vue'
import BienvenidaVue from '@/modulos/principal/vistas/BienvenidaVue.vue'
import { getAuth } from 'firebase/auth'
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
      beforeEnter: (to, from, next) => {
        const auth = getAuth()
        const usuario = auth.currentUser //¿Hay un usuario?
        if (usuario) {
          next();
        } else {
          next('/validacion');
        }
      }
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
    //Ruta para la bienvenida
    {
      path: '/bienvenida',
      name: 'bienvenida',
      component: BienvenidaVue,
    },
    //Ruta para registrarse
    {
      path: '/registrar',
      name: 'registrar',
      component: SignupVue,
    },
    //Ruta para iniciar sesión
    {
      path: '/validacion',
      name: 'validacion',
      component: SigninVue,
    },
  ],
})

export default router
