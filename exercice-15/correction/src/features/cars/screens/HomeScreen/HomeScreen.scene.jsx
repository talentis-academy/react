import { CarGrid } from "@/components/organisms";

// Présentation pure : reçoit les cartes déjà adaptées
export function HomeScreenScene({ cars, onToggleFavorite }) {
  return (
    <div className="container">
      <h1 className="page-title">Car Catalog</h1>
      <CarGrid cars={cars} onToggleFavorite={onToggleFavorite} />
    </div>
  );
}
