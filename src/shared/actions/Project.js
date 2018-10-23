import axios from "axios";

export function create(body){
    return axios.post('/', body)
}