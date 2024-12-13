export interface Registro {
    id_registro: number;         // Identificador único
    id: number;         // Relación con el ID de personal
    fecha: Date;                 // Fecha en formato Date
    hora: string;                // Hora en formato string (HH:mm:ss)
    movimiento: 'entrada' | 'salida'; // Movimiento puede ser 'entrada' o 'salida'
}

// Tipo para un nuevo registro, excluyendo id_registro
export type RegistroAgregar = Omit<Registro, 'id_registro'>;