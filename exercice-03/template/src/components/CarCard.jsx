import "./styles.css";
// Démo 003-A · étape 2 : CarCard reçoit la marque et la couleur en props (destructuring)
function CarCard({ brand, color }) {
  return (
    <div className="car-item">
      <div>{brand}</div>
      <div>{color}</div>
    </div>
  );
}

export default CarCard;
