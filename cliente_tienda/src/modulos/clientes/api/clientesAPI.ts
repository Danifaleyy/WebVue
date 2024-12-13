import axios from "axios";

// Creamos la instancia de Axios con la base URL de la API de clientes
const clienteApi = axios.create({
    baseURL: 'http://localhost:3001/api/clientes' // Asumiendo que esta es la URL de tu API de clientes
});

export default clienteApi;
