// Démo 003-A · étape 4 : on passe le contenu entre les balises de CarCard (children)
import CarCard from "../components/CarCard";

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <h2>Car List</h2>
      <div className="container">
        <CarCard>
          <div>BMW</div>
          <div>blue</div>
        </CarCard>
        <CarCard>
          <div>Toyota</div>
          <div>Unknown</div>
        </CarCard>
        <CarCard>
          <div>Mercedes</div>
          <div>black</div>
        </CarCard>
      </div>
    </div>
  );
}

export default Home;
