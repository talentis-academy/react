import React from "react";
import { useEffect, useRef, useState } from "react";

function Car({ make, color, onSelect, style }) {
  // useRef garde le compteur d'un render à l'autre, sans provoquer de nouveau render
  const renderCount = useRef(0);
  renderCount.current += 1;

  console.log(`Car ${make} Rendered ${renderCount.current} times`);

  useEffect(() => {
    console.log(`Car ${make} Mounted`);
    // Fonction de nettoyage : appelée au démontage (bouton « Unmount Home »)
    return () => console.log(`Car ${make} UnMounted`);
  }, [make]);

  return (
    <div className="car-item" style={style} onClick={() => onSelect(make)}>
      <div>{make}</div>
      <div>{color ?? "Unknown"}</div>
    </div>
  );
}

// React.memo : Car ne se re-rend que si ses props changent
const MemoizedCar = React.memo(Car);

/*
const MemoizedCar = React.memo(Car, (prevProps, nextProps) => {
  return (
    prevProps.brand === nextProps.brand &&
    prevProps.color === nextProps.color
  );
});
*/

const allCars = [
  { make: "BMW", color: "Blue" },
  { make: "Audi", color: "White" },
  { make: "Mercedes", color: "Black" },
];

function Cars() {
  const renderCount = useRef(0);
  renderCount.current += 1;

  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [seeMore, setSeeMore] = useState(false);

  console.log(`Home Rendered ${renderCount.current} times`, {
    loading,
    cars: cars.length,
  });

  // Sans useCallback : une NOUVELLE fonction à chaque render de Home → React.memo ne sert plus à rien
  const onSelect = (make) => {
    console.log("Selected:", make);
  };

  // Sans useMemo : un NOUVEL objet à chaque render de Home → même problème
  const carStyle = {
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    cursor: "pointer",
  };

  // useEffect avec [] : ça tourne une seule fois, au montage
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

  const handleFilter = (selectedMake) => {
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
      <h1>{"Welcome to the Home Page"}</h1>
      <h2>Car List</h2>

      {loading ? (
        <div className="loading">Loading cars...</div>
      ) : (
        <>
          <div className="container">
            {cars.map((car, index) => (
              <MemoizedCar
                key={index}
                make={car.make}
                color={car.color}
                onSelect={onSelect}
                style={carStyle}
              />
            ))}
          </div>
          <button onClick={() => handleFilter("BMW")}>Set Make to BMW</button>
          <button
            style={{ margin: "10px" }}
            onClick={() => setSeeMore(!seeMore)}
          >
            See More
          </button>
        </>
      )}
    </div>
  );
}

export default Cars;
