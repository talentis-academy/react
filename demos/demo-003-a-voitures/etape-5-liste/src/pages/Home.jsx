// Démo 003-A · Home : la liste des voitures avec .map()
import CarCard from "../components/CarCard";
const cars = [
  { id: 1, brand: "BMW", color: "Blue" },
  { id: 2, brand: "Audi", color: "White" },
  { id: 3, brand: "Toyota", color: "Red" },
];

function Home() {
  return (
    <div>
      <h1 onCopy={(event) => console.log(event)}>Welcome to the Home Page</h1>
      <h2>Car List</h2>
      <div className="container">
        {/* .map() : une CarCard par voiture. key={index} marche ici, mais car.id serait plus sûr */}
        {cars.map((car, index) => (
          <CarCard
            key={index}
            brand={car.brand}
            color={car.color}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
