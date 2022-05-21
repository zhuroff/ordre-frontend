import axios from 'axios'

const http = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_SERVER_HOST
})

http.interceptors.request.use((config) => {
  config.headers!.Authorization = `Bearer ${localStorage.getItem('token')}`
  return config
})

export default http
