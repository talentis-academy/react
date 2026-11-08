import axiosQuery from "@/lib/axiosQuery";

// Login : l'API renvoie { session (le token), userDetails }
export const login = (userName, password) =>
  axiosQuery("post", "/api/login", { userName, password, verified: true, blocked: false, delay: 0 });
