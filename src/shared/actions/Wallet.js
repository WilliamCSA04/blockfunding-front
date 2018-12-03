import axios from "axios";
import { getEnv } from "./Global";

export function create(body){
    return axios.post(`${getEnv("wallet")}/`, body)
}

export function read(id = ""){
    return axios.get(`${getEnv("wallet")}/${id}`)
}