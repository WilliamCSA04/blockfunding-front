import axios from "axios";

export function create(body){
    return axios.post('/', body)
}

export function read(body){
    return axios.post('/', body)
}