import { useEffect, useState } from "react";

function Car({ make, color, onSelect, style }) {
  console.log(`Car ${make} Rendered`);

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

// Car est un composant normal : c'est le React Compiler qui s'en occupe

const allCars = [
  { make: "BMW", color: "Blue" },
  { make: "Audi", color: "White" },
  { make: "Mercedes", color: "Black" },
];

function Cars() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line no-unused-vars -- seeMore sert au mauvais exemple
  const [seeMore, setSeeMore] = useState(false);

  console.log(`Home Rendered`, {
    loading,
    cars: cars.length,
  });

  // Une fonction normale, sans useCallback
  const onSelect = (make) => {
    console.log("Selected:", make);
  };

  // Un objet normal, sans useMemo
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
              <Car
                key={index}
                make={car.make}
                color={car.color}
                onSelect={onSelect}
                style={carStyle}
              />
            ))}
          </div>
          <button onClick={() => handleFilter("BMW")}>Set Make to BMW</button>
          {/* ❌ Mauvais exemple (à tester) : onClick={() => setSeeMore(!seeMore)}
              → dans notre démo, « Car BMW Rendered » revient au clic sur See More */}
          <button
            style={{ margin: "10px" }}
            onClick={() => setSeeMore((v) => !v)}
          >
            See More
          </button>
        </>
      )}
    </div>
  );
}

export default Cars;
