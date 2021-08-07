import axios from 'axios';

let url = 'https://portal-das-disciplinas.herokuapp.com/api/v1'
let headers = {
    "Content-Type": "application/json",
    Accept: "application/json"
}

function getToken() {
    if (process.browser) {
        return localStorage.getItem("authToken");
    }
    console.log(localStorage.getItem("authToken"))
    
}
const headers_post = {
        "Authorization": `Bearer ${getToken()}`,
        "Content-Type": "application/json",
        "Accept": "application/json",
    
}
const api =  {
    getToken: getToken(),
    get(endpoint){
        if(getToken()){
            headers = Object.assign(headers,{"Authorization": `Bearer ${getToken()}`})
            console.log(headers)
        }
        return axios.get(url+endpoint,{headers:headers})
    },

    post(endpoint, body){
        return axios.post(url+endpoint,body,headers_post)
    }
}
export default api