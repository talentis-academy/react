import { redirect } from "react-router-dom";

const isConnected = () => Boolean(localStorage.getItem("token"));

function requireAuthLoader({ request }) {
  if (isConnected()) return null;

  // optionnel : garder la page demandée pour revenir après login
  const url = new URL(request.url);
  const from = url.pathname + url.search;

  throw redirect(`/login?from=${encodeURIComponent(from)}`);
}

export default requireAuthLoader;
