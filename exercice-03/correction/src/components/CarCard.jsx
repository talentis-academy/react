import CarBrand from "./CarBrand";
import CarColor from "./CarColor";
import "./styles.css";
// Exercice 3 : CarCard transmet ses props aux deux petits composants réutilisables
function CarCard({ brand, color }) {
  return (
    <div className="car-item">
      <CarBrand brand={brand} />
      <CarColor color={color} />
    </div>
  );
}

export default CarCard;
