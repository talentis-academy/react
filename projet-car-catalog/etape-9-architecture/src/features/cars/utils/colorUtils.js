// L'API donne un nom de couleur : on le transforme en code couleur pour la pastille.
const colorMap = {
  Red: "#e74c3c",
  Blue: "#3498db",
  Green: "#2ecc71",
  Yellow: "#f1c40f",
  Orange: "#f39c12",
  Purple: "#9b59b6",
  Pink: "#e91e63",
  Violet: "#9b59b6",
  Turquoise: "#1abc9c",
  Crimson: "#dc143c",
  Indigo: "#4b0082",
  Mauv: "#e0b0ff",
  Fuscia: "#ff00ff",
  Khaki: "#f0e68c",
  Maroon: "#800000",
  Aquamarine: "#7fffd4",
  Puce: "#cc8899",
  Goldenrod: "#daa520",
};

// Couleur inconnue ou absente : gris
export const DEFAULT_COLOR = "#95a5a6";

export const getColorHex = (colorName) => colorMap[colorName] || DEFAULT_COLOR;
