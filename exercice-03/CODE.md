# Exercice 03 · Découper CarCard en composants : le code complet

Tous les fichiers de la correction (dossier correction/), en entier, pour suivre la correction. Fichiers utilisés : ceux atteints par les imports depuis src/main.* ; les fichiers du gabarit Vite non modifiés sont seulement listés. Ordre de lecture : main → App → composants et pages → le reste.

## `correction`

npm install

*Fichiers générés par Vite, non modifiés (non affichés) : `index.html`, `vite.config.js`, `.gitignore`, `eslint.config.js`, `public/vite.svg`*

*package.json (gabarit Vite) : dépendances ajoutées : `react-slick ^0.31.0`*

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
import Home from "./pages/Home.jsx";

function App() {
  return <Home />;
}

export default App;
```

### `correction/src/App.css` (28 lignes)

```css
/* VERSION RESPONSIVE - S'adapte à tous les écrans (mobile, tablette, desktop) */

/* Importation de la police Google Fonts Inter avec plusieurs graisses */
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");

/* Sélecteur universel qui cible tous les éléments HTML */
* {
  /* Force tous les éléments à inclure padding et border dans leur largeur/hauteur totale */
  box-sizing: border-box;
  /* Supprime les marges par défaut du navigateur pour avoir un contrôle total */
  margin: 0;
  /* Supprime les espacements internes par défaut du navigateur */
  padding: 0;
}

/* Style global du corps de la page */
body {
  /* Applique la police Inter importée, avec sans-serif comme police de secours */
  font-family: "Inter", sans-serif;
  /* Améliore le rendu des polices sur les navigateurs WebKit (Safari, Chrome) */
  -webkit-font-smoothing: antialiased;
  /* Améliore le rendu des polices sur Firefox pour Mac */
  -moz-osx-font-smoothing: grayscale;

  text-align: center;

  padding: 20px;
}
```

### `correction/src/pages/Home.jsx` (18 lignes)

```jsx
// Exercice 3 : Home passe brand et color à chaque CarCard, écrites à la main (sans boucle)
import CarCard from "../components/CarCard";

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <h2>Car List</h2>
      <div className="container">
        <CarCard brand="BMW" color="blue" />
        <CarCard brand="Toyota" color="Unknown" />
        <CarCard brand="Mercedes" color="black" />
      </div>
    </div>
  );
}

export default Home;
```

### `correction/src/components/CarCard.jsx` (14 lignes)

```jsx
import CarBrand from "./CarBrand";
import CarColor from "./CarColor";
import "./styles.css";
// Exercice 3 : CarCard transmet ses props aux deux petits composants réutilisables
function CarCard({ brand, color }) {
  return (
    <div className="car-item">
      <CarBrand brand={brand} />
      <CarColor color={color} />
    </div>
  );
}

export default CarCard;
```

### `correction/src/components/CarBrand.jsx` (4 lignes)

```jsx
function CarBrand({ brand }) {
  return <div>{brand}</div>;
}
export default CarBrand;
```

### `correction/src/components/CarColor.jsx` (5 lignes)

```jsx
function CarColor({ color }) {
  return <div>{color}</div>;
}

export default CarColor;
```

### `correction/src/components/styles.css` (17 lignes)

```css
h1 {
  padding: 20px;
}

.container {
  padding: 20px;
  place-items: center;
  text-align: center;
}

.car-item {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 12px;
  margin: 12px;
  width: 300px;
}
```
