//Crear la estructura del arreglo para mostrarlo
export interface Articulo{
    id_articulo: number;              
    descripcion: string;           
    precio: number;                 
    cantidad_almacen: number;   
    fecha_caducidad: Date;  
}
//Omitira el id porque ese no lo pone el usuario al agregar, se pone en automatico.
export type ArticuloAgregar = Omit<Articulo,'id_articulo'>