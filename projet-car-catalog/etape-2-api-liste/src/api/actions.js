import axiosQuery from "../lib/axiosQuery";

// Liste des voitures d'une année (la page Home)
export const fetchCarsByYear = (year) => axiosQuery("get", `/api/cars/year/${year}`);
