import { useParams } from "react-router-dom";
import { Loading } from "@/components/molecules";
import { useFavorites } from "@/features/favorites/hooks";
import { useCarDetails } from "../../hooks";
import { adaptCarDetails } from "./CarDetailsScreen.adapter";
import { CarDetailsScreenScene } from "./CarDetailsScreen.scene";

export function CarDetailsScreenView() {
  const { id } = useParams();
  const { data, isLoading, error } = useCarDetails(id);
  const { favoriteIds, toggleFavorite } = useFavorites();

  if (isLoading) return <Loading text="Loading car details..." />;

  const car = adaptCarDetails(data, favoriteIds);

  // Erreur réseau ou voiture absente : même message
  if (error || !car) {
    return (
      <div className="container">
        <p>Car not found</p>
      </div>
    );
  }

  // Dans Redux on stocke l'objet API brut, pas le modèle adapté
  return <CarDetailsScreenScene car={car} onToggleFavorite={() => toggleFavorite(data.Car)} />;
}
