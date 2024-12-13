import axios from "axios";

const compraApi = axios.create({
    baseURL: 'http://localhost:3001/api/compra'
});

export default compraApi