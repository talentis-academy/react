import CarBrand from "./CarBrand";
import CarColor from "./CarColor";
import "./styles.css";
// Props destructurées : on récupère directement brand et color
function CarCard({ brand, color }) {
  return (
    <div className="car-item">
      <CarBrand brand={brand} />
      <CarColor color={color} />
    </div>
  );
}

export default CarCard;
