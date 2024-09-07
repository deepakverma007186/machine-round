import axios from "axios";

export const BASE_URL = "https://dev3.xicomtechnologies.com/xttest"

export const API = axios.create({
    baseURL:BASE_URL,
    timeout:10000,
    headers:{
        'Content-Type': 'multipart/form-data'
    }
})
