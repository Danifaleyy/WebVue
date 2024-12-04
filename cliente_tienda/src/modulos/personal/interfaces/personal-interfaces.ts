//Crear la estructura del arreglo para mostrarlo
export interface Personal{
    id:number,
    nombre:string,
    direccion:string,
    telefono:string,
    estatus:number
}
//Omitira el id porque ese no lo pone el usuario al agregar, se pone en automatico.
export type PersonalAgregar = Omit<Personal,'id'>