import cars from "../data/cars";
import CarCard from "../components/CarCard";

// Pour l'instant, des favoris en dur (à l'étape 4 : Redux Toolkit)
const favorites = cars.filter((car) => [1, 3, 4].includes(car.id));

export default function FavoritesPage() {
  return (
    <div className="container">
      <h1 className="page-title">My Favorites</h1>
      <div className="car-grid">
        {favorites.map((car) => (
          <CarCard key={car.id} car={car} isFavorite />
        ))}
      </div>
    </div>
  );
}
