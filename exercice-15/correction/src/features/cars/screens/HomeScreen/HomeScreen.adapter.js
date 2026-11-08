import { adaptCarCard } from "../../adapters/carAdapter";

// La page d'accueil n'affiche que les 6 premières voitures
export const HOME_CARS_LIMIT = 6;

const getCarsList = (response) => (Array.isArray(response?.Cars) ? response.Cars : []);

// Réponse de l'API { Cars: [...] } -> liste de cartes prêtes à afficher
export const adaptHomeCars = (response, favoriteIds = []) =>
  getCarsList(response)
    .slice(0, HOME_CARS_LIMIT)
    .map((dto) => adaptCarCard(dto, favoriteIds.includes(dto.id)));

// Retrouve l'objet API brut d'une voiture (c'est lui qu'on stocke dans les favoris)
export const findCarById = (response, id) => getCarsList(response).find((car) => car.id === id);
