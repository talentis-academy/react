import CarBrand from "./CarBrand";
import CarColor from "./CarColor";

function CarCard({ brand, color }) {
  return (
    <div className="car-item">
      <CarBrand brand={brand} />
      <CarColor color={color} />
    </div>
  );
}

export default CarCard;
