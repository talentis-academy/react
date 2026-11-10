// Démo 003-C · étape 2 : les voitures dans un tableau d'objets (JSON), sans .map() : une ligne par voiture
import CarCard from "../components/CarCard";

const cars = [
  { id: 1, brand: "BMW", color: "blue" },
  { id: 2, brand: "Toyota", color: "Unknown" },
  { id: 3, brand: "Mercedes", color: "black" },
];

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <h2>Car List</h2>
      <div className="container">
        <CarCard brand={cars[0].brand} color={cars[0].color} />
        <CarCard brand={cars[1].brand} color={cars[1].color} />
        <CarCard brand={cars[2].brand} color={cars[2].color} />
      </div>
    </div>
  );
}

export default Home;
