import { getColorHex } from "../utils/colorUtils";

// Texte affiché quand une valeur manque dans la réponse de l'API
export const MISSING_VALUE = "—";

const isMissing = (value) => value === undefined || value === null || value === "";
export const orMissing = (value) => (isMissing(value) ? MISSING_VALUE : value);

// Champs communs à la carte et à la page détails : DTO de l'API -> modèle pour l'UI
export const adaptCarBase = (dto = {}) => {
  const isAvailable = Boolean(dto.availability);
  return {
    id: dto.id,
    title: [dto.car, dto.car_model].filter((part) => !isMissing(part)).join(" ") || "Unknown car",
    colorHex: getColorHex(dto.car_color),
    colorName: orMissing(dto.car_color),
    year: orMissing(dto.car_model_year),
    vin: orMissing(dto.car_vin),
    priceLabel: orMissing(dto.price),
    isAvailable,
    statusLabel: isAvailable ? "Available" : "Unavailable",
  };
};

// Modèle d'une carte voiture (liste Home et Favoris)
export const adaptCarCard = (dto, isFavorite = false) => ({
  ...adaptCarBase(dto),
  detailsUrl: `/car/${dto?.id}`,
  isFavorite,
});
