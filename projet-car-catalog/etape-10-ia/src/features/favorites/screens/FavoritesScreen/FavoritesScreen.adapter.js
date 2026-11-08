import { adaptCarCard } from "@/features/cars/adapters/carAdapter";

// Les favoris (objets API bruts stockés dans Redux) -> cartes prêtes à afficher, toutes en favori
export const adaptFavoriteCars = (favorites = []) => favorites.map((dto) => adaptCarCard(dto, true));
