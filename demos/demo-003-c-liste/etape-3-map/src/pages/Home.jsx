// Démo 003-C · étape 3 : on remplace les 3 lignes par .map() sur le tableau cars
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
        {/* .map() : une CarCard par voiture ; key : un identifiant unique (car.id) */}
        {cars.map((car) => (
          <CarCard key={car.id} brand={car.brand} color={car.color} />
        ))}
      </div>
    </div>
  );
}

export default Home;
