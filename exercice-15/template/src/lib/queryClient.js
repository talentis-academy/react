import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // retry : si l'appel échoue, React Query réessaie 3 fois avant de passer en erreur
      retry: 3,
      // refetchOnWindowFocus : quand on revient sur l'onglet, les données sont rechargées
      // (sauf si elles sont encore « fraîches » : c'est le staleTime, 0 par défaut)
      refetchOnWindowFocus: true,
    },
  },
});
