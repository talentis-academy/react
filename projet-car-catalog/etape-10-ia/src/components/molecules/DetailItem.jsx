// Une case de la grille de la page détails : petit label au-dessus, valeur en dessous
export function DetailItem({ label, children }) {
  return (
    <div className="detail-item">
      <span className="detail-label">{label}</span>
      {children}
    </div>
  );
}
