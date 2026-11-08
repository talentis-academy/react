// Une ligne "Label: valeur" de la carte voiture
export function InfoRow({ label, children }) {
  return (
    <div className="info-row">
      <span className="label">{`${label}:`}</span>
      {children}
    </div>
  );
}
