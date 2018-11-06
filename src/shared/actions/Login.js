import axios from "axios";
import { getEnv } from "./Global";

export function login(body){
    return axios.post(`${getEnv("auth")}/router/auth/oauth/token`, body)
}