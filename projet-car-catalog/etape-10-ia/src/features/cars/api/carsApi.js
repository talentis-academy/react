import axiosQuery from "@/lib/axiosQuery";

// Liste des voitures d'une année : l'API renvoie { Cars: [...] }
export const fetchCarsByYear = (year) => axiosQuery("get", `/api/cars/year/${year}`);

// Détails d'une voiture : l'API renvoie { Car: {...} }
export const fetchCarById = (id) => axiosQuery("get", `/api/cars/${id}`);
