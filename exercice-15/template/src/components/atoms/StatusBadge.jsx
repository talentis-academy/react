// Disponible (vert) ou indisponible (rouge) ; className permet d'ajouter une classe (ex. "detail-value")
export function StatusBadge({ isAvailable, label, className }) {
  const statusClass = isAvailable ? "status-available" : "status-unavailable";
  return <span className={className ? `${className} ${statusClass}` : statusClass}>{label}</span>;
}
