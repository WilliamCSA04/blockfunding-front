import axios from "axios";
import { env } from "./Global";

export function create(body){
    return axios.post(`${env}/`, body)
}

export function read(body){
    return axios.get(`${env}/`, body)
}