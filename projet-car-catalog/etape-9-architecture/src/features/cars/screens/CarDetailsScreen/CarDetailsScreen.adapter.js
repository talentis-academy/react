import { adaptCarBase, orMissing } from "../../adapters/carAdapter";

// Réponse de l'API { Car: {...} } -> modèle de la page détails (null si la voiture est absente)
export const adaptCarDetails = (response, favoriteIds = []) => {
  const dto = response?.Car;
  if (!dto) return null;

  return {
    ...adaptCarBase(dto),
    brand: orMissing(dto.car),
    model: orMissing(dto.car_model),
    isFavorite: favoriteIds.includes(dto.id),
  };
};
