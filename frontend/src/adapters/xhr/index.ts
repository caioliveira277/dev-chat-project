import axios from 'axios';
import { Auth } from 'adapters/login';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  withCredentials: false,
  timeout: 20000,
});

api.interceptors.request.use((config) => {
  config.headers.authorization = `Bearer ${Auth.getToken()}`;
  return config;
})

export default api;