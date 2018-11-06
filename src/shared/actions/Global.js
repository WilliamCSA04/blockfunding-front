const env = "http://18.224.212.231"
const portProject = ":8081"
const portAuth = ":8082"
const portWallet = ":8083"

export function getEnv(type){
    if(type === "project"){
        return authEnv();
    }
    if(type === "auth"){
        return projectEnv();
    }
    if(type === "wallet"){
        return walletEnv();
    }
}

function walletEnv(){
    return `${env}${portWallet}`
}

function projectEnv(){
    return `${env}${portProject}`
}

function authEnv(){
    return `${env}${portAuth}`
}