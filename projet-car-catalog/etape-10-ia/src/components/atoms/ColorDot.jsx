// La pastille de couleur : reçoit directement un code couleur (#rrggbb)
export function ColorDot({ color }) {
  return <div className="color-indicator" style={{ backgroundColor: color }}></div>;
}
