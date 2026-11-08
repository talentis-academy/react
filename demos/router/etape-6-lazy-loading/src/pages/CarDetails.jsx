import { useLoaderData } from "react-router-dom";

function CarDetails() {
  const data = useLoaderData();
  // Handle both direct car object or nested Car object
  const car = data?.Car;
  return (
    <div className="container">
      <h1>Détails de la voiture</h1>
    </div>
  );
}

export default CarDetails;
