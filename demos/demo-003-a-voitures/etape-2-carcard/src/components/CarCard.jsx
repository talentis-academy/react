import "./styles.css";
// Démo 003-A · étape 2 : CarCard sans props, il affiche toujours la même voiture
function CarCard() {
  return (
    <div className="car-item">
      <div>BMW</div>
      <div>blue</div>
    </div>
  );
}

export default CarCard;
