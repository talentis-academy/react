// Démo 003-C · étape 5 : on passe toute la voiture (car) à CarCard, au lieu de 4 props
import CarCard from "../components/CarCard";

const cars = [
  { id: 1, brand: "BMW", color: "blue", price: "42 000 €", available: true },
  { id: 2, brand: "Toyota", color: "Unknown", price: "22 000 €", available: false },
  { id: 3, brand: "Mercedes", color: "black", price: "79 990 €", available: true },
];

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <h2>Car List</h2>
      <div className="container">
        {cars.map((car) => (
          <CarCard car={car} key={car.id}/>
        ))}
      </div>
    </div>
  );
}

export default Home;
