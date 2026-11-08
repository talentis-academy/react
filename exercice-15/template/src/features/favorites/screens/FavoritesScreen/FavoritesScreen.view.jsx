import { useFavorites } from "../../hooks";
import { adaptFavoriteCars } from "./FavoritesScreen.adapter";
import { FavoritesScreenScene } from "./FavoritesScreen.scene";

// Pas d'appel API ici : les données viennent du store Redux
export function FavoritesScreenView() {
  const { favorites, toggleFavorite } = useFavorites();

  const handleToggleFavorite = (id) => {
    const car = favorites.find((favorite) => favorite.id === id);
    if (car) toggleFavorite(car);
  };

  return <FavoritesScreenScene cars={adaptFavoriteCars(favorites)} onToggleFavorite={handleToggleFavorite} />;
}
