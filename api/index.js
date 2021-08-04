import axios from 'axios';

let url = 'https://portal-das-disciplinas.herokuapp.com/public/api/v1'
const headers = {
    "Content-Type": "application/json",
    Accept: "application/json"
}

function getToken() {
    if (process.browser) {
        localStorage.getItem("authToken");
    }
}
const headers_post = {
        "Authorization": `Bearer ${getToken()}`,
        "Content-Type": "application/json",
        "Accept": "application/json",
    
}
const api =  {

    get(endpoint, body){
        return axios.get(url+endpoint,body,headers)
    },

    post(endpoint, body){
        return axios.post(url+endpoint,body,headers_post)
    }
}

export default api