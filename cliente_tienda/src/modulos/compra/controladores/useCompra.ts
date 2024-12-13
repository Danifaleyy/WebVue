import { ref } from "vue"
import type { Compra, CompraAgregar } from "../interfaces/compra-interfaces"
import compraApi from "../api/compraAPI";

export const useCompra = () =>{
    //Se crea la estructura del arreglo: personal-interfaces.ts
    const compras = ref<Compra[]>([])
    //Se mostrara el mensaje cuandol este en 1 y no cuando este en 0d
    let mensaje = ref(0);

    const traeCompra = async () =>{
        const respuesta = await compraApi.get<Compra[]>('/')
        //Cuando si traiga datos
        compras.value = respuesta.data
        //console.log(personal.value)
        //Cuando no traiga datos
        //personal.value = []
    }
    //Traer Personal para poder editar un registro
    const traeCompraId = async (id_compra:number) => {
        const respuesta = await compraApi.get<Compra[]>('/'+id_compra)
        compras.value = respuesta.data
    }

    //Agregar Personal
    const agregarCompra = async (compras:CompraAgregar) => {
    const respuesta = await compraApi.post('/', compras)
        if(respuesta.data.affectedRows >= 1) {
            mensaje.value = 1;
        }
    }

    //Modificar Personal
    const actualizarCompra = async (compras:Compra) => {
        const respuesta = await compraApi.put('/',compras)
        if(respuesta.data.affectedRows >= 1) {
            mensaje.value = 1;
        }
    }

    //Eliminar Personal
    const borrarCompra = async (compras:Compra) => {
        const respuesta = await compraApi.delete('/',{data: {id_compra: compras.id_compra}})
        if(respuesta.data.fieldCount >= 0) {
            mensaje.value = 1;
        }
    }
    
    return{
        compras,
        mensaje,
        traeCompra,
        traeCompraId,
        agregarCompra,
        actualizarCompra,
        borrarCompra
    }
}