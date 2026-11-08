import { Loading, ErrorMessage } from "@/components/molecules";
import { useFavorites } from "@/features/favorites/hooks";
import { useCars } from "../../hooks";
import { adaptHomeCars, findCarById } from "./HomeScreen.adapter";
import { HomeScreenScene } from "./HomeScreen.scene";

const CATALOG_YEAR = 2012;

// Conteneur : récupère les données, gère chargement / erreur, adapte, puis passe la main à la Scene
export function HomeScreenView() {
  const { data, isLoading, error } = useCars(CATALOG_YEAR);
  const { favoriteIds, toggleFavorite } = useFavorites();

  if (isLoading) return <Loading text="Loading cars..." />;
  if (error) return <ErrorMessage message={`Error loading cars: ${error.message}`} />;

  const handleToggleFavorite = (id) => {
    const car = findCarById(data, id);
    if (car) toggleFavorite(car);
  };

  return <HomeScreenScene cars={adaptHomeCars(data, favoriteIds)} onToggleFavorite={handleToggleFavorite} />;
}
