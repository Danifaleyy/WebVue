// Estructura para Cliente
export interface Cliente {
    id: number;
    nombre: string;
    direccion: string;
    telefono: string;
    correo_electronico: string;
    ciudad: string;
}

// Omitimos 'id' para la creación de un nuevo cliente
export type ClienteAgregar = Omit<Cliente, 'id'>;
