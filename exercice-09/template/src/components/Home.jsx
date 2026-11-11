import "./styles.css";

// Exercice 9 · template : la Card Car faite ensemble. À vous : ajouter la carte détail (Card Details)
export default function Home() {
  return (
    <div className="card">
      <h3 className="car-name">Tesla Model S</h3>
      <div className="color">
        {/* style={{ }} : du style en ligne (un objet JS) ; ici la couleur de la voiture */}
        <span className="circle" style={{ backgroundColor: "#dc2626" }}></span>
        <span>Rouge</span>
      </div>
      <span className="badge">Available</span>
      <p className="price">$79,990</p>
      <button className="btn">View Details</button>
    </div>
  );
}
