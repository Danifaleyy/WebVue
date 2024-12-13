import { ref } from "vue";
import type { Cliente, ClienteAgregar } from "../interfaces/clientes-interfaces";
import clienteApi from "../api/clientesAPI";

export const useClientes = () => {
  // Arreglo para almacenar los clientes
  const clientes = ref<Cliente[]>([]);
  // Mensaje para mostrar estado de las operaciones
  let mensaje = ref(0);
  
  const traeCliente = async () =>{
    const respuesta = await clienteApi.get<Cliente[]>('/')
    //Cuando si traiga datos
    clientes.value = respuesta.data
    //console.log(personal.value)
    //Cuando no traiga datos
    //personal.value = []
}
  //Traer Personal para poder editar un registro
  const traeClienteId = async (id:number) => {
    const respuesta = await clienteApi.get<Cliente[]>('/'+id)
    clientes.value = respuesta.data
  }
  //Agregar Personal
  const agregarCliente = async (clientes:ClienteAgregar) => {
    const respuesta = await clienteApi.post('/', clientes)
        if(respuesta.data.affectedRows >= 1) {
            mensaje.value = 1;
        }
    }
  //Modificar Personal
  const actualizarCliente = async (clientes:Cliente) => {
    const respuesta = await clienteApi.put('/',clientes)
    if(respuesta.data.affectedRows >= 1) {
        mensaje.value = 1;
    }
  }
  //Eliminar Personal
  const borrarCliente = async (clientes:Cliente) => {
    const respuesta = await clienteApi.delete('/',{data: {id: clientes.id}})
    if(respuesta.data.fieldCount >= 0) {
        mensaje.value = 1;
    }
  } 

  return {
    clientes,
    mensaje,
    traeCliente,
    traeClienteId,
    agregarCliente,
    actualizarCliente,
    borrarCliente
  };
};
