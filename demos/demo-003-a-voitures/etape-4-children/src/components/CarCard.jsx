import "./styles.css";
// Démo 003-A · étape 4 : la 2e approche, CarCard affiche ce qu'on met entre ses balises (children)
function CarCard({ children }) {
  return <div className="car-item">{children}</div>;
}

export default CarCard;
