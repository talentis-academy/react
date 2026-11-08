import axiosQuery from "../lib/axiosQuery";

// Login : l'API renvoie { session (le token), userDetails }
export const login = (userName, password) =>
  axiosQuery("post", "/api/login", { userName, password, verified: true, blocked: false, delay: 0 });

// Liste des voitures d'une année (la page Home)
export const fetchCarsByYear = (year) => axiosQuery("get", `/api/cars/year/${year}`);

// Détails d'une voiture (la page /car/:id)
export const fetchCarById = (id) => axiosQuery("get", `/api/cars/${id}`);
