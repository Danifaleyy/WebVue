import { ref } from "vue"
import type { Personal, PersonalAgregar } from "../interfaces/personal-interfaces"
import personalApi from "../api/personalAPI"

export const usePersonal = () =>{
    //Se crea la estructura del arreglo: personal-interfaces.ts
    const personal = ref<Personal[]>([])
    //Se mostrara el mensaje cuandol este en 1 y no cuando este en 0
    let mensaje = ref(0);

    const traePersonal = async () =>{
        const respuesta = await personalApi.get<Personal[]>('/')
        //Cuando si traiga datos
        personal.value = respuesta.data
        //console.log(personal.value)
        //Cuando no traiga datos
        //personal.value = []
    }

    //Traer Personal para poder editar un registro
    const traePersonalId = async (id:number) => {
        const respuesta = await personalApi.get<Personal[]>('/'+id)
        personal.value = respuesta.data
    }

    //Agregar Personal
    const agregarPersonal = async (personal:PersonalAgregar) => {
    const respuesta = await personalApi.post('/', personal)
        if(respuesta.data.affectedRows >= 1) {
            mensaje.value = 1;
        }
    }

    //Modificar Personal
    const actualizarPersonal = async (personal:Personal) => {
        const respuesta = await personalApi.put('/',personal)
        if(respuesta.data.affectedRows >= 1) {
            mensaje.value = 1;
        }
    }

    //Eliminar Personal
    const borrarPersonal = async (personal:Personal) => {
        const respuesta = await personalApi.delete('/',{data: {id: personal.id}})
        if(respuesta.data.fieldCount >= 0) {
            mensaje.value = 1;
        }
    }

    return{
        personal,
        mensaje,
        traePersonal,
        traePersonalId,
        agregarPersonal,
        actualizarPersonal,
        borrarPersonal
    }
}