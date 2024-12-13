import { ref } from "vue"
import type { Venta, VentaAgregar } from "../interfaces/venta-interfaces"
import ventaApi from "../api/ventaAPI";

export const useVenta = () =>{
    //Se crea la estructura del arreglo: personal-interfaces.ts
    const ventas = ref<Venta[]>([])
    //Se mostrara el mensaje cuandol este en 1 y no cuando este en 0
    let mensaje = ref(0);

    const traeVenta = async () =>{
        const respuesta = await ventaApi.get<Venta[]>('/')
        ventas.value = respuesta.data
    }
    //Traer Personal para poder editar un registro
    const traeVentaId = async (id_venta:number) => {
        const respuesta = await ventaApi.get<Venta[]>('/'+id_venta)
        ventas.value = respuesta.data
    }

    //Agregar Personal
    const agregarVenta = async (ventas:VentaAgregar) => {
    const respuesta = await ventaApi.post('/', ventas)
        if(respuesta.data.affectedRows >= 1) {
            mensaje.value = 1;
        }
    }

    //Modificar Personal
    const actualizarVenta = async (ventas:Venta) => {
        const respuesta = await ventaApi.put('/',ventas)
        if(respuesta.data.affectedRows >= 1) {
            mensaje.value = 1;
        }
    }

    //Eliminar Personal
    const borrarVenta = async (ventas:Venta) => {
        const respuesta = await ventaApi.delete('/',{data: {id_venta: ventas.id_venta}})
        if(respuesta.data.fieldCount >= 0) {
            mensaje.value = 1;
        }
    }

    return{
        ventas,
        mensaje,
        traeVenta,
        traeVentaId,
        agregarVenta,
        actualizarVenta,
        borrarVenta
    }
}