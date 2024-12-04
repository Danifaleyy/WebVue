//Validaciones al ingresar los datos de personal
//Validaciones en el fronted: Tambien debes de crear validaciones en el backend
//debes instalar en esta carpeta: 
/*
npm install @vee-validate/zod
npm install zod --save
*/

//Importar para crear los esquemas
import { toTypedSchema } from "@vee-validate/zod";
import zod from 'zod';

export const PersonalSchema = toTypedSchema(
    //Validaciones de zod
    zod.object({
        id: zod.number({message: 'Requerido'}).int().positive({message: 'Un entero positivo'}),
        nombre: zod.string().min(2,{message: 'Minimo 2 caracteres'}).max(200,{message: 'Maximo 200 caracteres'}),
        direccion: zod.string().min(2,{message: 'Minimo 2 caracteres'}).max(300,{message: 'Maximo 300 caracteres'}),
        telefono: zod.string().min(10,{message: 'Minimo 10 numeros'}).max(15,{message: 'Maximo 15 numeros'}),
        estatus: zod.string({message: 'Estatus requerido'})
    }).or(
        zod.object({
            nombre: zod.string().min(2,{message: 'Minimo 2 caracteres'}).max(200,{message: 'Maximo 200 caracteres'}),
            direccion: zod.string().min(2,{message: 'Minimo 2 caracteres'}).max(300,{message: 'Maximo 300 caracteres'}),
            telefono: zod.string().min(10,{message: 'Minimo 10 numeros'}).max(15,{message: 'Maximo 15 numeros'}),
            estatus: zod.string({message: 'Estatus requerido'})
            //Cuando le pases sin id tomara esta validacion
        })
    )
)