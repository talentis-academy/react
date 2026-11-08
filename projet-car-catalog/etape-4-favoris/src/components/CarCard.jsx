import { Link } from "react-router-dom";
import { HeartIcon } from "./Icons";
import { getColorHex } from "../utils/colorUtils";

// La carte d'une voiture : utilisée par la page Home et la page Favoris
export default function CarCard({ car, isFavorite = false, onToggleFavorite }) {
  return (
    <div className="card car-card">
      <div className="card-header">
        <h2 className="car-name">
          {car.car} {car.car_model}
        </h2>
        <button className={`favorite-btn ${isFavorite ? "favorite-active" : ""}`} onClick={() => onToggleFavorite?.(car)}>
          <HeartIcon filled={isFavorite} />
        </button>
      </div>
      <div className="car-info">
        <div className="info-row">
          <span className="label">Color:</span>
          <div className="color-indicator" style={{ backgroundColor: getColorHex(car.car_color) }}></div>
        </div>
        <div className="info-row">
          <span className="label">Status:</span>
          <span className={car.availability ? "status-available" : "status-unavailable"}>
            {car.availability ? "Available" : "Unavailable"}
          </span>
        </div>
        <div className="info-row">
          <span className="label">Price:</span>
          <span className="price">{car.price}</span>
        </div>
        <div className="info-row">
          <span className="label">Year:</span>
          <span>{car.car_model_year}</span>
        </div>
      </div>
      <Link to={`/car/${car.id}`} className="btn">
        View Details
      </Link>
    </div>
  );
}
