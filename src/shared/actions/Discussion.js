import axios from "axios";
import { getEnv } from "./Global";

export function create(body){
    return axios.post(`${getEnv("discussion")}/`, body)
}

export function read(id = ""){
    return axios.get(`${getEnv("discussion")}/${id}`)
}