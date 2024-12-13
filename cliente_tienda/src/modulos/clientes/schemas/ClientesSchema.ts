import { toTypedSchema } from "@vee-validate/zod";
import zod from 'zod';

// Validaciones para los campos de cliente
export const ClienteSchema = toTypedSchema(
    zod.object({
        id: zod.number().int().positive(),
        nombre: zod.string().min(2, { message: 'Minimo 2 caracteres' }).max(200, { message: 'Maximo 200 caracteres' }),
        direccion: zod.string().min(2, { message: 'Minimo 2 caracteres' }).max(300, { message: 'Maximo 300 caracteres' }),
        telefono: zod.string().min(10, { message: 'Minimo 10 numeros' }).max(15, { message: 'Maximo 15 numeros' }),
        correo_electronico: zod.string().email({ message: 'Correo electronico invalido' }),
        ciudad: zod.string().min(2, { message: 'Minimo 2 caracteres' }).max(100, { message: 'Maximo 100 caracteres' }),
    }).or(
        zod.object({
            nombre: zod.string().min(2).max(200),
            direccion: zod.string().min(2).max(300),
            telefono: zod.string().min(10).max(15),
            correo_electronico: zod.string().email(),
            ciudad: zod.string().min(2).max(100),
        })
    )
);
