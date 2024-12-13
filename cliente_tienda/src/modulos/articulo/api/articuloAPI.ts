import axios from "axios";

const articuloApi = axios.create({
    baseURL: 'http://localhost:3001/api/articulos'
});

export default articuloApi