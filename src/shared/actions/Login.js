import axios from "axios";

export function login(body){
    return axios.post('/router/auth/oauth/token', body)
}