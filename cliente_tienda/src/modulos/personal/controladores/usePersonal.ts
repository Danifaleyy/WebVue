import { ref } from "vue"
import type { Personal } from "../interfaces/personal-interfaces"
import personalApi from "../api/personalAPI"

export const usePersonal = () =>{
    //Se crea la estructura del arreglo: personal-interfaces.ts
    const personal = ref<Personal[]>([])

    const traePersonal = async () =>{
        const respuesta = await personalApi.get<Personal[]>('/')
        //Cuando si traiga datos
        personal.value = respuesta.data
        //console.log(personal.value)
        //Cuando no traiga datos
        //personal.value = []
    }

    return{
        personal,
        traePersonal
    }
}