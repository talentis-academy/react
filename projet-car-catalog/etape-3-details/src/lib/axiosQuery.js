import axios from "axios";
import { BASE_URL } from "../api/config";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 30000,
});

// Un seul point d'entrée pour tous les appels API : on récupère directement les données
const axiosQuery = async (method, url, data) => {
  const response = method === "post" ? await axiosInstance.post(url, data) : await axiosInstance.get(url);
  return response.data;
};

export { axiosInstance };
export default axiosQuery;
