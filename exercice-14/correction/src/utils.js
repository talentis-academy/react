// Formate un prix en euros : 1199 => "1 199 €"
export const formatPrice = (price) =>
  price.toLocaleString("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
