// Démo 002-A · Counter : un state (useState) qui change au clic, et React ré-affiche
import { useState } from "react";
function Counter() {
  // useState : la petite mémoire du composant, ça commence à 0
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        {/* setCount change la valeur → React ré-affiche le composant avec le nouveau count */}
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default Counter;
