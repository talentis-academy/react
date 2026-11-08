import { redirect } from "react-router-dom";
import { storage } from "./storage";

// Loader de /favorites : pas de token => redirection vers /login (avant même d'afficher la page)
export const requireAuth = () => {
  const token = storage.getToken();
  if (!token) {
    throw redirect("/login");
  }
  return { token };
};

// Loader de /login : déjà connecté => retour à l'accueil
export const redirectIfAuthenticated = () => {
  if (storage.getToken()) {
    throw redirect("/");
  }
  return null;
};
