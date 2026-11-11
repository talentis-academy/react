import "./styles.css";

// Exercice 9 · correction : la carte détail (Card Details), avec les styles de la Card Car (réutilisés)
export default function Home() {
  return (
    <div className="card detail">
      <h1 className="title">Ford Mustang Mach-E</h1>
      <div className="details">
        <div className="row">
          <span>Brand</span>
          <span>Ford</span>
        </div>
        <div className="row">
          <span>Color</span>
          <div className="color">
            <span className="circle" style={{ backgroundColor: "#2563eb" }}></span>
            <span>Bleu</span>
          </div>
        </div>
        <div className="row">
          <span>Year</span>
          <span>2023</span>
        </div>
        <div className="row">
          <span>Price</span>
          <span className="price">$42,895</span>
        </div>
        <div className="row">
          <span>Availability</span>
          <span className="badge">Available</span>
        </div>
      </div>
      <button className="btn">Back to list</button>
    </div>
  );
}
