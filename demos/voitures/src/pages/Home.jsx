import CarCard from "../components/CarCard";
const cars = [
  { id: 1, brand: "BMW", color: "Blue" },
  { id: 2, brand: "Audi", color: "White" },
  { id: 3, brand: "Toyota", color: "Red" },
];

function Home() {
  //console.log(/\d/.test(password));
  const onSelect = (brand) => {
    console.log(brand);
  };
  return (
    <div>
      <h1 onCopy={(event) => console.log(event)}>Welcome to the Home Page</h1>
      <h2>Car List</h2>
      <div className="container">
        {cars.map((car, index) => (
          <CarCard
            key={index}
            brand={car.brand}
            color={car.color}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
