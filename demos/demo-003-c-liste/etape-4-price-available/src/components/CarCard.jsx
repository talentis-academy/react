import CarBrand from "./CarBrand";
import CarColor from "./CarColor";
import "./styles.css";
// Démo 003-C · étape 4 : CarCard affiche aussi le prix et la disponibilité (opérateur ternaire)
function CarCard({ brand, color, price, available }) {
  return (
    <div className="car-item">
      <CarBrand brand={brand} />
      <CarColor color={color} />
      <div>{price}</div>
      <div>{available ? "Disponible" : "Indisponible"}</div>
    </div>
  );
}

export default CarCard;
