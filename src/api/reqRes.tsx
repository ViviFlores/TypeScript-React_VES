import axios from "axios";

//constante que cree la comunicacion con el API
export const reqResApi = axios.create({
    baseURL:'https://reqres.in/api'
});