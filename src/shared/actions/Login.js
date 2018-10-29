import axios from "axios";
import { env } from "./Global";

export function login(body){
    return axios.post(`${env}/router/auth/oauth/token`, body)
}