import { HeartIcon } from "../atoms";

// Le bouton cœur : plein et rouge quand la voiture est en favori
export function FavoriteButton({ isActive, onToggle }) {
  return (
    <button className={`favorite-btn ${isActive ? "favorite-active" : ""}`} onClick={onToggle}>
      <HeartIcon filled={isActive} />
    </button>
  );
}
