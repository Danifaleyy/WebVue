import { ref } from "vue"
import type { Registro, RegistroAgregar } from "../interfaces/registro-interfaces"
import registroApi from "../api/registroAPI";

export const useRegistro = () =>{
    //Se crea la estructura del arreglo: personal-interfaces.ts
    const registros = ref<Registro[]>([])
    //Se mostrara el mensaje cuandol este en 1 y no cuando este en 0
    let mensaje = ref(0);

    const traeRegistro = async () =>{
        const respuesta = await registroApi.get<Registro[]>('/')
        //Cuando si traiga datos
        registros.value = respuesta.data
        //console.log(personal.value)
        //Cuando no traiga datos
        //personal.value = []
    }
    //Traer Personal para poder editar un registro
    const traeRegistroId = async (id_registro:number) => {
        const respuesta = await registroApi.get<Registro[]>('/'+id_registro)
        registros.value = respuesta.data
    }

    //Agregar Personal
    const agregarRegistro = async (registros:RegistroAgregar) => {
    const respuesta = await registroApi.post('/', registros)
        if(respuesta.data.affectedRows >= 1) {
            mensaje.value = 1;
        }
    }

    //Modificar Personal
    const actualizarRegistro = async (registros:Registro) => {
        const respuesta = await registroApi.put('/',registros)
        if(respuesta.data.affectedRows >= 1) {
            mensaje.value = 1;
        }
    }

    //Eliminar Personal
    const borrarRegistro = async (registros:Registro) => {
        const respuesta = await registroApi.delete('/',{data: {id_registro: registros.id_registro}})
        if(respuesta.data.fieldCount >= 0) {
            mensaje.value = 1;
        }
    }

    return{
        registros,
        mensaje,
        traeRegistro,
        traeRegistroId,
        agregarRegistro,
        actualizarRegistro,
        borrarRegistro
    }
}