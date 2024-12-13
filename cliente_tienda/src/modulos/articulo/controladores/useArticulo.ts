import { ref } from "vue"
import type { Articulo, ArticuloAgregar } from "../interfaces/articulo-interfaces"
import articuloApi from "../api/articuloAPI"

export const useArticulo = () =>{
    //Se crea la estructura del arreglo: personal-interfaces.ts
    const articulos = ref<Articulo[]>([])
    //Se mostrara el mensaje cuandol este en 1 y no cuando este en 0
    let mensaje = ref(0);

    const traeArticulo = async () =>{
        const respuesta = await articuloApi.get<Articulo[]>('/')
        //Cuando si traiga datos
        articulos.value = respuesta.data
        //console.log(personal.value)
        //Cuando no traiga datos
        //personal.value = []
    }
    //Traer Personal para poder editar un registro
    const traeArticuloId = async (id_articulo:number) => {
        const respuesta = await articuloApi.get<Articulo[]>('/'+id_articulo)
        articulos.value = respuesta.data
    }

    //Agregar Personal
    const agregarArticulo = async (articulos:ArticuloAgregar) => {
    const respuesta = await articuloApi.post('/', articulos)
        if(respuesta.data.affectedRows >= 1) {
            mensaje.value = 1;
        }
    }

    //Modificar Personal
    const actualizarArticulo = async (articulos:Articulo) => {
        const respuesta = await articuloApi.put('/',articulos)
        if(respuesta.data.affectedRows >= 1) {
            mensaje.value = 1;
        }
    }

    //Eliminar Personal
    const borrarArticulo = async (articulos:Articulo) => {
        const respuesta = await articuloApi.delete('/',{data: {id_articulo: articulos.id_articulo}})
        if(respuesta.data.fieldCount >= 0) {
            mensaje.value = 1;
        }
    }

    return{
        articulos,
        mensaje,
        traeArticulo,
        traeArticuloId,
        agregarArticulo,
        actualizarArticulo,
        borrarArticulo
    }
}