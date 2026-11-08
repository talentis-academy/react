import CarBrand from "./CarBrand";
import CarColor from "./CarColor";
import "./styles.css";
function CarCard({ brand, color, onSelect }) {
  return (
    <div className="car-item" onClick={() => onSelect(brand)}>
      <CarBrand brand={brand} />
      <CarColor color={color} />
    </div>
  );
}

export default CarCard;
