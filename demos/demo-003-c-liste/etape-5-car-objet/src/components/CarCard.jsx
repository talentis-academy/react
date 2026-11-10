import CarBrand from "./CarBrand";
import CarColor from "./CarColor";
import "./styles.css";
// Démo 003-C · étape 5 : CarCard reçoit tout l'objet car, et le destructure
function CarCard({car}) {
  const {brand, color, price, available} = car;
  return (
    <div className="car-item">
      <CarBrand brand={brand} />
      <CarColor color={color} />
      <div>
        <h3 style={{padding: '2px'}}>{price}</h3>
        {available ? "disponible": "indisponible"}
      </div>
    </div>
  );
}

export default CarCard;
