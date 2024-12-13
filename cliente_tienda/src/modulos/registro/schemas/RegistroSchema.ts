import { toTypedSchema } from "@vee-validate/zod";
import { z } from 'zod';

// Esquema para la interfaz Registro
export const RegistroSchema = toTypedSchema(
    //Validaciones de zod
    z.object({
    id: z.number().int().positive(),         // id (id_personal) debe ser un entero positivo
    fecha: z.string()
        .refine(val => !isNaN(Date.parse(val)), { 
            message: "Fecha inválida" 
        })
        .transform(val => new Date(val)), // Convertir a Date automáticamente
    hora: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/, { 
        message: "Hora debe estar en formato HH:mm:ss" 
    }), // Validación de hora en formato HH:mm:ss
    movimiento: z.enum(['entrada', 'salida']), // movimiento puede ser solo 'entrada' o 'salida'
}));