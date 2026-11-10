# Démo 002-A · Counter : le code complet

Tous les fichiers utilisés par la démo, en entier, pour la recoder sans imprimer le code. Fichiers utilisés : ceux atteints par les imports depuis src/main.* ; les fichiers du gabarit Vite non modifiés sont seulement listés. Ordre de lecture : main → App → composants et pages → le reste.

Le compteur du gabarit Vite, isolé dans un composant Counter : useState, le handler onClick (+1) et le re-render.

*Fichiers générés par Vite, non modifiés (non affichés) : `src/main.jsx`, `src/App.css`, `src/index.css`, `index.html`, `vite.config.js`, `.gitignore`, `eslint.config.js`, `public/vite.svg`*

*package.json (gabarit Vite) : dépendances ajoutées : `react-slick ^0.31.0`*

*Présents mais pas encore branchés (non affichés) : `src/components/Header.jsx`*

### `src/App.jsx` (8 lignes)

```jsx
import Counter from "./components/Counter";
import "./App.css";

function App() {
  return <Counter />;
}

export default App;
```

### `src/components/Counter.jsx` (25 lignes)

```jsx
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
```
