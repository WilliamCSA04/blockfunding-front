const env = "http://localhost"
const portProject = ":8081"
const portAuth = ":8082"
const portWallet = ":8083/wallet"
const portFunds = ":8083/funds"
const portDiscussion = ":8084"

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
    if(type === "funds"){
        return fundsEnv();
    }
    if(type === "discussion"){
        return discussionEnv();
    }
}

function walletEnv(){
    return `${env}${portWallet}`
}

function fundsEnv(){
    return `${env}${portFunds}`
}

function projectEnv(){
    return `${env}${portProject}`
}

function authEnv(){
    return `${env}${portAuth}`
}

function discussionEnv(){
    return `${env}${portDiscussion}`
}