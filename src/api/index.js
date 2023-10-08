import axios from 'axios'
import {baseURL} from '../utils/constants'

const API = axios.create({
    baseURL,
    withCredentials: true
})

API.interceptors.request.use((req)=>{
    return req;
})

API.interceptors.response.use((res)=>{
    return res;
},
(error) => {
    console.log(error)
    return Promise.reject(error)
}
)

export default API