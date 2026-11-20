import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { login } from "../api/authApi";
import { storage, USER_UPDATED_EVENT } from "../utils/storage";

// La mutation de login : enregistre la session puis retourne à l'accueil
export const useLogin = () => {
  const navigate = useNavigate();

  // useMutation : pour une action qui envoie des données (le login) ; elle part avec mutate(), pas au chargement
  return useMutation({
    mutationFn: ({ userName, password }) => login(userName, password),
    onSuccess: (response) => {
      if (response.session) storage.setToken(response.session);
      if (response.userDetails) {
        storage.setUser(response.userDetails);
        // On prévient le Header que l'utilisateur a changé
        window.dispatchEvent(new CustomEvent(USER_UPDATED_EVENT));
      }
      navigate("/");
    },
  });
};
