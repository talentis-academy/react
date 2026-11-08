import "./styles.css";

export default function Home() {
  return (
    <main className="page">
      <div className="container">
        <header className="header">
          <h1 className="header-title">CSS Design System</h1>
          <h2 className="header-subtitle">Deux exemples de cartes</h2>
        </header>

        <div className="cards">
          {/* CARTE CATALOGUE */}
          <div>
            <h3 className="section-title">Carte Catalogue</h3>
            <div className="card catalogue">
              <h3 className="car-name">Tesla Model S</h3>
              <div className="color">
                <span
                  className="circle"
                  style={{ backgroundColor: "#dc2626" }}
                ></span>
                <span>Rouge</span>
              </div>
              <span className="badge available">Available</span>
              <p className="price">$79,990</p>
              <button className="btn">View Details</button>
            </div>
          </div>

          {/* CARTE DÉTAIL */}
          <div>
            <h3 className="section-title">Carte Détail</h3>
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
                    <span
                      className="circle"
                      style={{ backgroundColor: "#2563eb" }}
                    ></span>
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
                  <span className="badge available">Available</span>
                </div>
              </div>
              <button className="btn">Back to list</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
