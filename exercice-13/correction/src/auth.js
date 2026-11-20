import { redirect } from "react-router";

// Mini auth « fake » avec le localStorage
export const TOKEN_KEY = "demo_token";
export const isConnected = () => Boolean(localStorage.getItem(TOKEN_KEY));

// Loader = garde : si on n'est pas connecté, on redirige vers /login
// Pourquoi redirect et pas useNavigate ? useNavigate est un hook : il ne marche que dans un composant.
// Le loader est une simple fonction qui tourne AVANT l'affichage : redirect change de page sans jamais afficher la Home.
export function requireAuthLoader() {
  if (!isConnected()) throw redirect("/login");
}
