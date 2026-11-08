import { useQuery } from "@tanstack/react-query";
import { fetchCarsByYear } from "../api/actions";
import CarCard from "../components/CarCard";
import Loading from "../components/Loading";

export default function HomePage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["cars", 2012],
    queryFn: () => fetchCarsByYear(2012),
  });

  if (isLoading) return <Loading text="Loading cars..." />;

  if (error) {
    return (
      <div className="center-page">
        <p className="error-text">Error loading cars: {error.message}</p>
      </div>
    );
  }

  // On limite l'affichage à 6 voitures
  const cars = (data?.Cars || []).slice(0, 6);

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
