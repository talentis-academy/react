import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { storage, USER_UPDATED_EVENT } from "../utils/storage";

// L'utilisateur connecté (ou null) et la déconnexion
export const useCurrentUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(storage.getUser);

  // On écoute les changements de l'utilisateur (login dans cet onglet ou dans un autre)
  useEffect(() => {
    const refreshUser = () => setUser(storage.getUser());
    window.addEventListener("storage", refreshUser);
    window.addEventListener(USER_UPDATED_EVENT, refreshUser);
    return () => {
      window.removeEventListener("storage", refreshUser);
      window.removeEventListener(USER_UPDATED_EVENT, refreshUser);
    };
  }, []);

  const logout = () => {
    storage.removeToken();
    storage.removeUser();
    setUser(null);
    navigate("/login");
  };

  return { user, logout };
};
