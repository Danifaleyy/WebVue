import { toTypedSchema } from "@vee-validate/zod";
import { z } from 'zod';

// Esquema simplificado para la interfaz Venta
export const VentaSchema = toTypedSchema(
    //Validaciones de zod
    z.object({
    id_articulo: z.number().int().positive({ 
        message: "El ID del artículo debe ser un número entero positivo." 
    }), // ID del artículo debe ser un número entero positivo
    id: z.number().int().positive({
        message: "El ID del cliente debe ser un número entero positivo."
    }), // ID del cliente debe ser un número entero positivo
    cantidad: z.number().int().positive({ 
        message: "La cantidad debe ser un número entero positivo." 
    }), // Cantidad debe ser un número entero positivo
    precio: z.number().positive({ 
        message: "El precio debe ser un número positivo." 
    }), // Precio debe ser un número positivo
    iva: z.number().nonnegative({ 
        message: "El IVA no puede ser negativo." 
    }), // IVA debe ser un número no negativo
    subtotal: z.number().positive({ 
        message: "El subtotal debe ser un número positivo." 
    }), // Subtotal debe ser un número positivo
    total: z.number().positive({ 
        message: "El total debe ser un número positivo." 
    }), // Total debe ser un número positivo
    fecha_venta: z.string()
        .refine(val => !isNaN(Date.parse(val)), { 
            message: "Fecha inválida" 
        })
        .transform(val => new Date(val)), // Convertir a Date automáticamente
}));
