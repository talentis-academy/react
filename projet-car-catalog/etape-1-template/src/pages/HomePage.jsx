import cars from "../data/cars";
import CarCard from "../components/CarCard";

export default function HomePage() {
  return (
    <div className="container">
      <h1 className="page-title">Car Catalog</h1>
      <div className="car-grid">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}
