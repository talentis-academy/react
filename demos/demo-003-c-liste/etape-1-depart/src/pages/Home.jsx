// Démo 003-C · étape 1 : le point de départ = la correction de l’exercice 3 (3 CarCard écrites à la main)
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
