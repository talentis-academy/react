import { create } from "zustand";

// Un seul store pour les 3 produits : les stocks et les actions au même endroit
export const useShopStore = create((set) => ({
  phones: 5,
  tvs: 3,
  cameras: 8,

  // Les actions dans un objet à part : il ne change jamais, un seul selector suffit pour les lire
  actions: {
    // Pas d'Immer par défaut : set reçoit le state actuel et retourne les valeurs qui changent
    buyPhone: (quantity) => set((state) => ({ phones: state.phones - quantity })),

    // Promo : chaque TV achetée = un téléphone offert
    // Pas besoin d'extraReducers : la même action met à jour les deux valeurs
    buyTV: (quantity) =>
      set((state) => ({
        tvs: state.tvs - quantity,
        phones: state.phones - quantity,
      })),

    buyCamera: (quantity) => set((state) => ({ cameras: state.cameras - quantity })),
  },
}));
