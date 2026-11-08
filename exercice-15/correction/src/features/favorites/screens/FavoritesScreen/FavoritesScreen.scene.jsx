import { CarGrid } from "@/components/organisms";

export function FavoritesScreenScene({ cars, onToggleFavorite }) {
  return (
    <div className="container">
      <h1 className="page-title">My Favorites</h1>
      {cars.length === 0 ? (
        <p className="subtitle">No favorites yet. Add some cars from the home page!</p>
      ) : (
        <CarGrid cars={cars} onToggleFavorite={onToggleFavorite} />
      )}
    </div>
  );
}
