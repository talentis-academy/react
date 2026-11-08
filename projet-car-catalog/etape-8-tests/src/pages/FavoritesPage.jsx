import { useDispatch, useSelector } from "react-redux";
import CarCard from "../components/CarCard";
import { selectFavorites, toggleFavorite } from "../store/favoritesSlice";

export default function FavoritesPage() {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  return (
    <div className="container">
      <h1 className="page-title">My Favorites</h1>
      {favorites.length === 0 ? (
        <p className="subtitle">No favorites yet. Add some cars from the home page!</p>
      ) : (
        <div className="car-grid">
          {favorites.map((car) => (
            <CarCard key={car.id} car={car} isFavorite onToggleFavorite={(c) => dispatch(toggleFavorite(c))} />
          ))}
        </div>
      )}
    </div>
  );
}
