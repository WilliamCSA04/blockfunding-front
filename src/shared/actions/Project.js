import axios from "axios";
import { getEnv } from "./Global";

export function create(body){
    return axios.post(`${getEnv("project")}/`, body)
}

export function read(body){
    return axios.get(`${getEnv("project")}/`, body)
}