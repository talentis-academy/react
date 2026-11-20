import { useMemo } from "react";
import { selectFavorites, useFavoritesStore } from "../favoritesStore";

// Les écrans n'utilisent jamais useFavoritesStore directement : tout passe par ce hook
export const useFavorites = () => {
  // Avec un selector, le composant se re-rend seulement quand les favoris changent
  const favorites = useFavoritesStore(selectFavorites);
  const favoriteIds = useMemo(() => favorites.map((car) => car.id), [favorites]);

  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);

  return { favorites, favoriteIds, toggleFavorite };
};
