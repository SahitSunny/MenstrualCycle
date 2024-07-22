// src/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // Adjust URL as per your backend API
});

export const login = (data) => API.post('/login', data);
export const register = (data) => API.post('/register', data);
export const logCycleData = (data) => API.post('/cycle-tracker', data);

export default API;
