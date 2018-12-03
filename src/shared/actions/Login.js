import axios from "axios";
import { getEnv } from "./Global";

export function apikey(){
    if(sessionStorage.token === undefined){
        const config = {
            headers: {
              "Accept": "application/json",
              "Authorization": "Basic YXBpbWFzdGVyOmFwaXNlY3JldA==",
              "Content-Type": "application/x-www-form-urlencoded",
            }
          };
        return axios.post(`${getEnv("auth")}/oauth/token?grant_type=client_credentials`, {}, config).then(({ data }) => {
            sessionStorage.token = JSON.stringify(data)
        })
    }
}

export function login(body){
    apikey();
    return axios.post(`${getEnv("auth")}/oauth/token`, body)
}

export function create(body){
    apikey();
    let token = JSON.parse(sessionStorage.token)
    const config = {
        headers: {
            Authorization: `bearer ${token.access_token}`
        }
      };
      console.log(config)
    return axios.post(`${getEnv("auth")}/user`, body, config)
}
