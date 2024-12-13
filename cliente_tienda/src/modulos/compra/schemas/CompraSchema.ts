import { toTypedSchema } from "@vee-validate/zod";
import { z } from "zod";

// Esquema de validación para la tabla Compras
export const CompraSchema = toTypedSchema(
  z.object({
    id_compra: z
      .number()
      .int()
      .positive({ message: "El ID de la compra debe ser un número entero positivo" })
      .optional(), // Puede ser opcional si se genera automáticamente
    id_articulo: z
      .number()
      .int()
      .positive({ message: "El ID del artículo debe ser un número entero positivo" }),
    cantidad: z
      .number()
      .int()
      .positive({ message: "La cantidad debe ser un número entero positivo" }),
    precio: z
      .number()
      .positive({ message: "El precio debe ser un número positivo" }),
    iva: z
      .number()
      .positive({ message: "El IVA debe ser un número positivo" }),
    subtotal: z
      .number()
      .positive({ message: "El subtotal debe ser un número positivo" }),
    total: z
      .number()
      .positive({ message: "El total debe ser un número positivo" }),
    fecha_compra: z
      .string()
      .refine((val) => !isNaN(Date.parse(val)), { message: "La fecha debe ser válida" }),
  })
);

