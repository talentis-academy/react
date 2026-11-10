// Démo 003-A · étape 2 : Home utilise 3 fois CarCard… et on voit 3 fois la même voiture : il faut des props
import CarCard from "../components/CarCard";

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <h2>Car List</h2>
      <div className="container">
        <CarCard />
        <CarCard />
        <CarCard />
      </div>
    </div>
  );
}

export default Home;
