import CarCard from "../components/CarCard";

const cars = [
  { id: 1, brand: "BMW", color: "Blue" },
  { id: 2, brand: "Audi", color: "White" },
  { id: 3, brand: "Toyota", color: "" },
];

function Home() {
  return (
    <div>
      <h1>Mes voitures</h1>
      <div className="container">
        {cars.map((car) => (
          <CarCard key={car.id} brand={car.brand} color={car.color} />
        ))}
      </div>
    </div>
  );
}

export default Home;
