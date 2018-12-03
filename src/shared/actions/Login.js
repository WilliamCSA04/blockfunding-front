import axios from "axios";
import { getEnv } from "./Global";

function apikey(){
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

export function loggedUser(){
    let token = JSON.parse(sessionStorage.token)
    const config = {
        headers: {
            Authorization: `bearer ${token.access_token}`
        }
      };
    axios.get(`${getEnv("auth")}/me`, config).then(({ data }) => {
        sessionStorage.userCredentials = JSON.stringify(data)
    })
}

export function login(body){
    const config = {
        headers: {
          "Accept": "application/json",
          "Authorization": "Basic YXBpbWFzdGVyOmFwaXNlY3JldA==",
          "Content-Type": "application/x-www-form-urlencoded",
        }
      };
    return axios.post(`${getEnv("auth")}/oauth/token?grant_type=password&username=${body.username}&password=${body.password}`, {}, config)
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

