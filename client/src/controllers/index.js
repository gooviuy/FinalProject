import axios from "axios"


const client = axios.create({
    baseURL: 'http://localhost:8000/',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
})


export default client