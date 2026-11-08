import { Link } from "react-router-dom";
import { BackIcon, ColorDot, Price, StatusBadge } from "@/components/atoms";
import { DetailItem, FavoriteButton } from "@/components/molecules";

// Présentation pure de la fiche voiture
export function CarDetailsScreenScene({ car, onToggleFavorite }) {
  return (
    <div className="container">
      <Link to="/" className="back-link">
        <BackIcon />
        Back to Catalog
      </Link>

      <div className="card detail-card">
        <div className="detail-header">
          <h1 className="detail-title">{car.title}</h1>
          <FavoriteButton isActive={car.isFavorite} onToggle={onToggleFavorite} />
        </div>

        <div className="detail-grid">
          <DetailItem label="Brand">
            <span className="detail-value">{car.brand}</span>
          </DetailItem>
          <DetailItem label="Model">
            <span className="detail-value">{car.model}</span>
          </DetailItem>
          <DetailItem label="Color">
            <div className="color-detail">
              <ColorDot color={car.colorHex} />
              <span className="detail-value">{car.colorName}</span>
            </div>
          </DetailItem>
          <DetailItem label="Year">
            <span className="detail-value">{car.year}</span>
          </DetailItem>
          <DetailItem label="VIN">
            <span className="detail-value">{car.vin}</span>
          </DetailItem>
          <DetailItem label="Price">
            <Price value={car.priceLabel} className="detail-value" />
          </DetailItem>
          <DetailItem label="Availability">
            <StatusBadge isAvailable={car.isAvailable} label={car.statusLabel} className="detail-value" />
          </DetailItem>
        </div>
      </div>
    </div>
  );
}
