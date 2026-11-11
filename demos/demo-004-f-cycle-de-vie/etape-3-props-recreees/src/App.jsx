import { useState } from "react";
import Cars from "./components/Cars";
import "./App.css";

export default function App() {
  const [showHome, setShowHome] = useState(true);

  return (
    <div>
      <button onClick={() => setShowHome((v) => !v)}>
        {showHome ? "Unmount Home" : "Mount Home"}
      </button>
      {showHome ? <Cars /> : <div>Home is hidden</div>}
    </div>
  );
}
