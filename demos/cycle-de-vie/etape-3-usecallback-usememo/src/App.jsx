import Home from "./components/Cars";
import CarsMemo from "./components/CarsMemo";
import CarsUseMemo from "./components/CarsUseMemo";

import { useState } from "react";
import "./App.css";

export default function App() {
  const [showHome, setShowHome] = useState(true);

  return (
    <div>
      <button onClick={() => setShowHome((v) => !v)}>
        {showHome ? "Unmount Home" : "Mount Home"}
      </button>
      {showHome ? <CarsUseMemo /> : <div>Home is hidden</div>}
    </div>
  );
}
