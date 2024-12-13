import ArticuloAgregarVue from '@/modulos/articulo/vistas/ArticuloAgregarVue.vue'
import ArticuloBorrarVue from '@/modulos/articulo/vistas/ArticuloBorrarVue.vue'
import ArticuloEditarVue from '@/modulos/articulo/vistas/ArticuloEditarVue.vue'
import ArticuloVue from '@/modulos/articulo/vistas/ArticuloVue.vue'
import SigninVue from '@/modulos/autentica/vistas/SigninVue.vue'
import SignupVue from '@/modulos/autentica/vistas/SignupVue.vue'
import ClientesAgregarVue from '@/modulos/clientes/vistas/ClientesAgregarVue.vue'
import ClientesBorrarVue from '@/modulos/clientes/vistas/ClientesBorrarVue.vue'
import ClientesEditarVue from '@/modulos/clientes/vistas/ClientesEditarVue.vue'
import ClientesVue from '@/modulos/clientes/vistas/ClientesVue.vue'
import CompraAgregarVue from '@/modulos/compra/vistas/CompraAgregarVue.vue'
import CompraBorrarVue from '@/modulos/compra/vistas/CompraBorrarVue.vue'
import CompraEditarVue from '@/modulos/compra/vistas/CompraEditarVue.vue'
import CompraVue from '@/modulos/compra/vistas/CompraVue.vue'
import PersonalAgregarVue from '@/modulos/personal/vistas/PersonalAgregarVue.vue'
import PersonalBorrarVue from '@/modulos/personal/vistas/PersonalBorrarVue.vue'
import PersonalEditarVue from '@/modulos/personal/vistas/PersonalEditarVue.vue'
import PersonalVue from '@/modulos/personal/vistas/PersonalVue.vue'
import BienvenidaVue from '@/modulos/principal/vistas/BienvenidaVue.vue'
import RegistroAgregarVue from '@/modulos/registro/vistas/RegistroAgregarVue.vue'
import RegistroBorrarVue from '@/modulos/registro/vistas/RegistroBorrarVue.vue'
import RegistroEditarVue from '@/modulos/registro/vistas/RegistroEditarVue.vue'
import RegistroVue from '@/modulos/registro/vistas/RegistroVue.vue'
import VentaAgregarVue from '@/modulos/venta/vistas/VentaAgregarVue.vue'
import VentaBorrarVue from '@/modulos/venta/vistas/VentaBorrarVue.vue'
import VentaEditarVue from '@/modulos/venta/vistas/VentaEditarVue.vue'
import VentaVue from '@/modulos/venta/vistas/VentaVue.vue'
import { getAuth } from 'firebase/auth'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //Ruta personal
   {
      path: '/personal',
      name: 'personal',
      component: PersonalVue,
      //Obligar el inicio de sesion para ingresar a este modulo
      beforeEnter: (to, from, next) => {
        const auth = getAuth();
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
    //Ruta Registrar
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
    //Cliente
    {
      path: '/clientes',
      name: 'clientes',
      component: ClientesVue,
      beforeEnter: (to, from, next) => {
        const auth = getAuth();
        const usuario = auth.currentUser;
        if (usuario) {
          next();
        } else {
          next('/validacion'); // Redirige al login si no hay usuario
        }
      }
    },
    // Ruta para agregar un nuevo cliente
    {
      path: '/clientes/agregar',
      name: 'clientesagregar',
      component: ClientesAgregarVue,
    },
    // Ruta para editar un cliente
    {
      path: '/clientes/:id/editar',
      name: 'clienteseditar',
      component: ClientesEditarVue,
    },
    // Ruta para eliminar un cliente
    {
      path: '/clientes/:id/borrar',
      name: 'clientesborrar',
      component: ClientesBorrarVue,
    },
    //Articulo
    {
      path: '/articulos',
      name: 'articulos',
      component: ArticuloVue,
      beforeEnter: (to, from, next) => {
        const auth = getAuth();
        const usuario = auth.currentUser;
        if (usuario) {
          next();
        } else {
          next('/validacion'); // Redirige al login si no hay usuario
        }
      }
    },
    // Ruta para agregar un nuevo cliente
    {
      path: '/articulos/agregar',
      name: 'articuloagregar',
      component: ArticuloAgregarVue,
    },
    // Ruta para editar un cliente
    {
      path: '/articulos/:id_articulo/editar',
      name: 'articuloeditar',
      component: ArticuloEditarVue,
    },
    // Ruta para eliminar un cliente
    {
      path: '/articulos/:id_articulo/borrar',
      name: 'articuloborrar',
      component: ArticuloBorrarVue,
    },



    //Registro
    {
      path: '/registro',
      name: 'registro',
      component: RegistroVue,
      beforeEnter: (to, from, next) => {
        const auth = getAuth();
        const usuario = auth.currentUser;
        if (usuario) {
          next();
        } else {
          next('/validacion'); // Redirige al login si no hay usuario
        }
      }
    },
    // Ruta para agregar un nuevo cliente
    {
      path: '/registro/agregar',
      name: 'registroagregar',
      component: RegistroAgregarVue,
    },
    // Ruta para editar un cliente
    {
      path: '/registro/:id_registro/editar',
      name: 'registroeditar',
      component: RegistroEditarVue,
    },
    // Ruta para eliminar un cliente
    {
      path: '/registro/:id_registro/borrar',
      name: 'registroborrar',
      component: RegistroBorrarVue,
    },


    //Ventas
    {
      path: '/venta',
      name: 'venta',
      component: VentaVue,
      beforeEnter: (to, from, next) => {
        const auth = getAuth();
        const usuario = auth.currentUser;
        if (usuario) {
          next();
        } else {
          next('/validacion'); // Redirige al login si no hay usuario
        }
      }
    },
    // Ruta para agregar un nuevo cliente
    {
      path: '/venta/agregar',
      name: 'ventaagregar',
      component: VentaAgregarVue,
    },
    // Ruta para editar un cliente
    {
      path: '/venta/:id_venta/editar',
      name: 'ventaeditar',
      component: VentaEditarVue,
    },
    // Ruta para eliminar un cliente
    {
      path: '/venta/:id_venta/borrar',
      name: 'ventaborrar',
      component: VentaBorrarVue,
    },




    //Compra
    {
      path: '/compra',
      name: 'compra',
      component: CompraVue,
      beforeEnter: (to, from, next) => {
        const auth = getAuth();
        const usuario = auth.currentUser;
        if (usuario) {
          next();
        } else {
          next('/validacion'); // Redirige al login si no hay usuario
        }
      }
    },
    // Ruta para agregar un nuevo cliente
    {
      path: '/compra/agregar',
      name: 'compraagregar',
      component: CompraAgregarVue,
    },
    // Ruta para editar un cliente
    {
      path: '/compra/:id_compra/editar',
      name: 'compraeditar',
      component: CompraEditarVue,
    },
    // Ruta para eliminar un cliente
    {
      path: '/compra/:id_compra/borrar',
      name: 'compraborrar',
      component: CompraBorrarVue,
    },
  ],
})

export default router
