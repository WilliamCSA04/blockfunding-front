import axios from "axios";
import { getEnv } from "./Global";

export function create(body){
    let token = JSON.parse(sessionStorage.token)
    const config = {
        headers: {
            Authorization: `bearer ${token.access_token}`
        }
      };
    return axios.post(`${getEnv("wallet")}/wallet/`, body, config)
}

export function read(id = ""){
    return axios.get(`${getEnv("wallet")}/${id}`)
}