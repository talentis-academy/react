import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites, toggleFavorite as toggleFavoriteAction } from "../favoritesSlice";

// Les écrans n'utilisent jamais useSelector / useDispatch directement : tout passe par ce hook
export const useFavorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const favoriteIds = useMemo(() => favorites.map((car) => car.id), [favorites]);

  const toggleFavorite = (car) => dispatch(toggleFavoriteAction(car));

  return { favorites, favoriteIds, toggleFavorite };
};
