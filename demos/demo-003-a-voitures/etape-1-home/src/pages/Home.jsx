// Démo 003-A · étape 1 : un seul composant Home, les voitures écrites en dur (pas de boucle, pas de props)
import "../components/styles.css";

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <h2>Car List</h2>
      <div className="container">
        <div className="car-item">
          <div>BMW</div>
          <div>blue</div>
        </div>
        <div className="car-item">
          <div>Toyota</div>
          <div>Unknown</div>
        </div>
        <div className="car-item">
          <div>Mercedes</div>
          <div>black</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
