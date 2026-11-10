import "./styles.css";

// La Card Car de la maquette Figma, en CSS (on la code en live, maquette ouverte)
export default function Home() {
  return (
    <main className="page">
      <div className="container">
        <header className="header">
          <h1 className="header-title">CSS Design System</h1>
          <h2 className="header-subtitle">La carte catalogue</h2>
        </header>

        {/* style={{ }} : du style en ligne, c'est un objet JS (propriétés en camelCase : fontSize) */}
        <h3
          style={{
            fontSize: "24px",
            fontWeight: "600",
            color: "#ffffff",
            marginBottom: "24px",
            textAlign: "center",
          }}
        >
          Carte Catalogue
        </h3>

        {/* className : les classes du fichier styles.css */}
        <div className="card" style={{ maxWidth: "400px", margin: "0 auto" }}>
          <h3 className="car-name">Tesla Model S</h3>
          <div className="color">
            <span className="circle" style={{ backgroundColor: "#dc2626" }}></span>
            <span>Rouge</span>
          </div>
          <span className="badge available">Available</span>
          <p className="price">$79,990</p>
          <button className="btn">View Details</button>
        </div>
      </div>
    </main>
  );
}
