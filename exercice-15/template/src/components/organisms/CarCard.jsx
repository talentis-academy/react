import { ButtonLink, ColorDot, Price, StatusBadge } from "../atoms";
import { FavoriteButton, InfoRow } from "../molecules";

// La carte d'une voiture : ne reçoit que des valeurs déjà prêtes à afficher (préparées par l'adapter)
export function CarCard({ title, colorHex, isAvailable, statusLabel, priceLabel, year, detailsUrl, isFavorite = false, onToggleFavorite }) {
  return (
    <div className="card car-card">
      <div className="card-header">
        <h2 className="car-name">{title}</h2>
        <FavoriteButton isActive={isFavorite} onToggle={onToggleFavorite} />
      </div>
      <div className="car-info">
        <InfoRow label="Color">
          <ColorDot color={colorHex} />
        </InfoRow>
        <InfoRow label="Status">
          <StatusBadge isAvailable={isAvailable} label={statusLabel} />
        </InfoRow>
        <InfoRow label="Price">
          <Price value={priceLabel} />
        </InfoRow>
        <InfoRow label="Year">
          <span>{year}</span>
        </InfoRow>
      </div>
      <ButtonLink to={detailsUrl}>View Details</ButtonLink>
    </div>
  );
}
