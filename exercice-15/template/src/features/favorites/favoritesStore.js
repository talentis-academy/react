import { create } from "zustand";
import { persist } from "zustand/middleware";

// Le store des favoris : le state et l'action au même endroit (pas de Provider, pas de dispatch)
// persist enregistre les favoris dans le localStorage (clé "favorites") : ils survivent au F5
export const useFavoritesStore = create(
  persist(
    // set : la fonction de Zustand pour modifier le state (on retourne seulement ce qui change)
    (set) => ({
      favorites: [],
      // Si la voiture est déjà en favori on la retire, sinon on l'ajoute
      toggleFavorite: (car) =>
        set((state) => ({
          favorites: state.favorites.some((fav) => fav.id === car.id)
            ? state.favorites.filter((fav) => fav.id !== car.id)
            : [...state.favorites, car],
        })),
    }),
    { name: "favorites" }
  )
);

// Selectors
export const selectFavorites = (state) => state.favorites;
