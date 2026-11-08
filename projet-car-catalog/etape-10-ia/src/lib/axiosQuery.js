import axios from "axios";
import { BASE_URL } from "./config";
import { storage } from "@/features/auth/utils/storage";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 30000,
});

// Interceptor : on ajoute le token à chaque requête, s'il existe
axiosInstance.interceptors.request.use((config) => {
  const token = storage.getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Un seul point d'entrée pour tous les appels API : on récupère directement les données
const axiosQuery = async (method, url, data) => {
  const response = method === "post" ? await axiosInstance.post(url, data) : await axiosInstance.get(url);
  return response.data;
};

export default axiosQuery;
