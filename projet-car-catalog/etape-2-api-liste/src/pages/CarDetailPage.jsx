import { useParams, Link } from "react-router-dom";
import cars from "../data/cars";
import { BackIcon, HeartIcon } from "../components/Icons";
import { getColorHex } from "../utils/colorUtils";

export default function CarDetailPage() {
  const { id } = useParams();
  const car = cars.find((c) => c.id === Number(id));

  if (!car) {
    return (
      <div className="container">
        <p>Car not found</p>
      </div>
    );
  }

  return (
    <div className="container">
      <Link to="/" className="back-link">
        <BackIcon />
        Back to Catalog
      </Link>

      <div className="card detail-card">
        <div className="detail-header">
          <h1 className="detail-title">
            {car.car} {car.car_model}
          </h1>
          <button className="favorite-btn">
            <HeartIcon />
          </button>
        </div>

        <div className="detail-grid">
          <div className="detail-item">
            <span className="detail-label">Brand</span>
            <span className="detail-value">{car.car}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Model</span>
            <span className="detail-value">{car.car_model}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Color</span>
            <div className="color-detail">
              <div className="color-indicator" style={{ backgroundColor: getColorHex(car.car_color) }}></div>
              <span className="detail-value">{car.car_color}</span>
            </div>
          </div>
          <div className="detail-item">
            <span className="detail-label">Year</span>
            <span className="detail-value">{car.car_model_year}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">VIN</span>
            <span className="detail-value">{car.car_vin}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Price</span>
            <span className="detail-value price">{car.price}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Availability</span>
            <span className={`detail-value ${car.availability ? "status-available" : "status-unavailable"}`}>
              {car.availability ? "Available" : "Unavailable"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
