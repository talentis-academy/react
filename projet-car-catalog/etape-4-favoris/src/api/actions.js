import axiosQuery from "../lib/axiosQuery";

// Liste des voitures d'une année (la page Home)
export const fetchCarsByYear = (year) => axiosQuery("get", `/api/cars/year/${year}`);

// Détails d'une voiture (la page /car/:id)
export const fetchCarById = (id) => axiosQuery("get", `/api/cars/${id}`);
