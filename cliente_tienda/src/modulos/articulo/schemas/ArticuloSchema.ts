import { toTypedSchema } from "@vee-validate/zod";
import zod from 'zod';

// Esquema de validación para un artículo
export const ArticuloSchema = toTypedSchema(
    //Validaciones de zod
    zod.object({
    descripcion: zod.string()
        .max(200, "La descripción no puede superar los 200 caracteres."), // Menos de 200 caracteres
    precio: zod.number()
        .positive("El precio debe ser un número positivo."), // Cualquier cantidad positiva
    cantidad_almacen: zod.number(), // Cualquier cantidad
    fecha_caducidad: zod.string()
        .refine((fecha) => !isNaN(Date.parse(fecha)), {
            message: "La fecha de caducidad debe ser una fecha válida.",
        })
        .transform((fecha) => new Date(fecha)), // Convertir a Date automáticamente
}));