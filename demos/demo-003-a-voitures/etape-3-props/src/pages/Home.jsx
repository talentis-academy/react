// Démo 003-A · étape 3 : Home passe les infos de chaque voiture à CarCard avec les props (toujours sans boucle)
import CarCard from "../components/CarCard";

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <h2>Car List</h2>
      <div className="container">
        <CarCard brand="BMW" color="blue" />
        <CarCard brand="Toyota" color="Unknown" />
        <CarCard brand="Mercedes" color="black" />
      </div>
    </div>
  );
}

export default Home;
