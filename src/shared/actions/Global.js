const env = "http://localhost"
const portProject = ":8081"
const portAuth = ":8082"
const portWallet = ":8083"

export function getEnv(type){
    if(type === "project"){
        return projectEnv();
    }
    if(type === "auth"){
        return authEnv();
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