import axios from "axios";

const ventaApi = axios.create({
    baseURL: 'http://localhost:3001/api/venta'
});

export default ventaApi