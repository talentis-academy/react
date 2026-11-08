import { CarCard } from "./CarCard";

// La grille de cartes ; onToggleFavorite reçoit l'id de la voiture cliquée
export function CarGrid({ cars, onToggleFavorite }) {
  return (
    <div className="car-grid">
      {cars.map((car) => (
        <CarCard key={car.id} {...car} onToggleFavorite={() => onToggleFavorite(car.id)} />
      ))}
    </div>
  );
}
