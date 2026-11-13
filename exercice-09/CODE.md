# Exercice 09 · De la maquette au composant React : le code complet

Tous les fichiers de la correction (dossier correction/), en entier, pour suivre la correction. Fichiers utilisés : ceux atteints par les imports depuis src/main.* ; les fichiers du gabarit Vite non modifiés sont seulement listés. Ordre de lecture : main → App → composants et pages → le reste.

## `correction`

*Styles fournis (copiés tels quels, pas tapés en live) : `src/components/styles.css` (105 lignes)*

*Fichiers générés par Vite, non modifiés (non affichés) : `index.html`, `vite.config.js`, `.gitignore`, `eslint.config.js`, `public/vite.svg`, `package.json`*

### `correction/src/main.jsx` (6 lignes)

```jsx
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <App />
);
```

### `correction/src/App.jsx` (8 lignes)

```jsx
import "./App.css";
import Home from "./components/Home";

function App() {
  return <Home />;
}

export default App;
```

### `correction/src/App.css` (18 lignes)

```css
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"); /* la police de la maquette */

* {
  box-sizing: border-box; /* le padding est compris dans la largeur */
  margin: 0; /* on enlève les marges du navigateur */
}

/* La page : fond sombre, et la carte au centre */
body {
  font-family: "Inter", sans-serif;
  background-color: #111827;
  color: #f9fafb;
  min-height: 100vh; /* toute la hauteur de l'écran */
  display: flex; /* flexbox : on range ce qu'il y a dans le body */
  flex-direction: column; /* en colonne : l'axe principal devient vertical */
  justify-content: center; /* donc justify-content centre en hauteur */
  padding: 16px; /* responsive : un peu d'espace autour de la carte quand la fenêtre est petite */
}
```

### `correction/src/components/Home.jsx` (36 lignes)

```jsx
import "./styles.css";

// Exercice 9 · correction : la carte détail (Card Details), avec les styles de la Card Car (réutilisés)
export default function Home() {
  return (
    <div className="card detail">
      <h1 className="title">Ford Mustang Mach-E</h1>
      <div className="details">
        <div className="row">
          <span>Brand</span>
          <span>Ford</span>
        </div>
        <div className="row">
          <span>Color</span>
          <div className="color">
            <span className="circle" style={{ backgroundColor: "#2563eb" }}></span>
            <span>Bleu</span>
          </div>
        </div>
        <div className="row">
          <span>Year</span>
          <span>2023</span>
        </div>
        <div className="row">
          <span>Price</span>
          <span className="price">$42,895</span>
        </div>
        <div className="row">
          <span>Availability</span>
          <span className="badge">Available</span>
        </div>
      </div>
      <button className="btn">Back to list</button>
    </div>
  );
}
```
