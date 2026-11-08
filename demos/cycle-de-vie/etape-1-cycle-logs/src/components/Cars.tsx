import { useEffect, useRef, useState } from "react";

function Car({ make, color }) {
  const renderCount = useRef(0);
  renderCount.current += 1;
  let colorInfo = color ? color : "Unknown";

  console.log(`Car ${make} Rendered ${renderCount.current} times`, {
    make,
  });

  useEffect(() => {
    console.log(`Car ${make} Mounted`);
    return () => {
      console.log(`Car ${make} UnMounted`);
    };
  }, [make]);

  return (
    <div className="car-item">
      <div>{make}</div>
      <div>{colorInfo}</div>
    </div>
  );
}

const allCars = [
  { make: "BMW", color: "Blue" },
  { make: "Audi", color: "White" },
  { make: "Mercedes", color: "Black" },
];

function Cars() {
  const renderCount = useRef(0);
  renderCount.current += 1;

  const [cars, setCars] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);

  console.log(`Home Rendered ${renderCount.current} times`, {
    loading,
    cars: cars.length,
  });

  useEffect(() => {
    console.log("Home Mounted");
    console.log("Fetching cars...");
    setLoading(true);

    // const timerId =
    setTimeout(() => {
      console.log("Cars fetched");
      setCars(allCars);
      setLoading(false);
    }, 1000);
    return () => {
      console.log("Home UnMounted");
    };
  }, []);

  const handleFilter = (selectedMake: string) => {
    console.log(`Filtering cars by make: ${selectedMake}`);
    if (selectedMake === "ALL") {
      setCars(allCars);
    } else {
      const filteredCars = allCars.filter((car) => car.make === selectedMake);
      setCars(filteredCars);
      console.log(`Home filtered by make ${selectedMake}`);
    }
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <h2>Car List</h2>

      {loading ? (
        <div className="loading">Loading cars...</div>
      ) : (
        <>
          <div className="container">
            {cars.map((car: any, index: number) => (
              <Car key={index} make={car.make} color={car.color} />
            ))}
          </div>
          <button onClick={() => handleFilter("BMW")}>Set Make to BMW</button>
        </>
      )}
    </div>
  );
}

export default Cars;
