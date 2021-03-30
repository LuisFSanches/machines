import axios from 'axios'
export const api = axios.create({
  baseURL: "http://157.245.87.189:3000",
})