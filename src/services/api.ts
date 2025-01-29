import axios from "axios";

const API_BASE_URL = "https://nestjs-production-f667.up.railway.app"; // 替换为你的后端 URL

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // 如果需要携带 Cookie
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;