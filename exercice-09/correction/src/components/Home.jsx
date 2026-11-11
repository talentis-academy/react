import "./styles.css";

// Exercice 9 · correction : la Card Car (faite ensemble) et la carte détail (Card Details)
export default function Home() {
  return (
    <>
      {/* La Card Car */}
      <div className="card">
        <h3 className="car-name">Tesla Model S</h3>
        <div className="color">
          <span className="circle" style={{ backgroundColor: "#dc2626" }}></span>
          <span>Rouge</span>
        </div>
        <span className="badge">Available</span>
        <p className="price">$79,990</p>
        <button className="btn">View Details</button>
      </div>

      {/* La carte détail */}
      <div className="card detail">
        <h1 className="title">Ford Mustang Mach-E</h1>
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
        <button className="btn">Back to list</button>
      </div>
    </>
  );
}
