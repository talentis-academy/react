# Démo 003-C · Liste de voitures : les changements entre les étapes

Pour chaque étape, ce qui change par rapport à l’étape précédente. En vert : les lignes ajoutées. En rouge : les lignes retirées. « utilisé » : un fichier qui existait déjà mais qui est branché (importé) à partir de cette étape, montré en entier.

## Étape 1 · `etape-1-depart` : point de départ

La correction de l’exercice 3 : 3 CarCard écrites à la main

Le code de départ, en entier : les fichiers écrits pour la démo et utilisés (atteints par les imports depuis src/main.*) ; les fichiers du gabarit Vite non modifiés sont seulement listés. Ordre de lecture : main → App → composants et pages → le reste.

*Fichiers générés par Vite, non modifiés (non affichés) : `index.html`, `vite.config.js`, `.gitignore`, `eslint.config.js`, `public/vite.svg`*

*package.json (gabarit Vite) : dépendances ajoutées : `react-slick ^0.31.0`*

### `src/main.jsx` (6 lignes)

```jsx
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <App />
);
```

### `src/App.jsx` (8 lignes)

```jsx
import "./App.css";
import Home from "./pages/Home.jsx";

function App() {
  return <Home />;
}

export default App;
```

### `src/App.css` (28 lignes)

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

### `src/pages/Home.jsx` (18 lignes)

```jsx
// Démo 003-C · étape 1 : le point de départ = la correction de l’exercice 3 (3 CarCard écrites à la main)
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

### `src/components/CarCard.jsx` (14 lignes)

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

### `src/components/CarBrand.jsx` (4 lignes)

```jsx
function CarBrand({ brand }) {
  return <div>{brand}</div>;
}
export default CarBrand;
```

### `src/components/CarColor.jsx` (5 lignes)

```jsx
function CarColor({ color }) {
  return <div>{color}</div>;
}

export default CarColor;
```

### `src/components/styles.css` (17 lignes)

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

## Étape 1 → 2 : `etape-1-depart` → `etape-2-json`

Le tableau cars (id, brand, color), sans .map() : cars[0], cars[1], cars[2] (pour les débutants)

### `src/pages/Home.jsx` (modifié, +10 −4)

```diff
@@ -1,5 +1,11 @@
-// Démo 003-C · étape 1 : le point de départ = la correction de l’exercice 3 (3 CarCard écrites à la main)
+// Démo 003-C · étape 2 : les voitures dans un tableau d'objets (JSON), sans .map() : une ligne par voiture
 import CarCard from "../components/CarCard";
+
+const cars = [
+  { id: 1, brand: "BMW", color: "blue" },
+  { id: 2, brand: "Toyota", color: "Unknown" },
+  { id: 3, brand: "Mercedes", color: "black" },
+];
 
 function Home() {
   return (
@@ -7,9 +13,9 @@
       <h1>Welcome to the Home Page</h1>
       <h2>Car List</h2>
       <div className="container">
-        <CarCard brand="BMW" color="blue" />
-        <CarCard brand="Toyota" color="Unknown" />
-        <CarCard brand="Mercedes" color="black" />
+        <CarCard brand={cars[0].brand} color={cars[0].color} />
+        <CarCard brand={cars[1].brand} color={cars[1].color} />
+        <CarCard brand={cars[2].brand} color={cars[2].color} />
       </div>
     </div>
   );
```

## Étape 2 → 3 : `etape-2-json` → `etape-3-map`

Les 3 lignes remplacées par .map(), avec key={car.id}

### `src/pages/Home.jsx` (modifié, +5 −4)

```diff
@@ -1,4 +1,4 @@
-// Démo 003-C · étape 2 : les voitures dans un tableau d'objets (JSON), sans .map() : une ligne par voiture
+// Démo 003-C · étape 3 : on remplace les 3 lignes par .map() sur le tableau cars
 import CarCard from "../components/CarCard";
 
 const cars = [
@@ -13,9 +13,10 @@
       <h1>Welcome to the Home Page</h1>
       <h2>Car List</h2>
       <div className="container">
-        <CarCard brand={cars[0].brand} color={cars[0].color} />
-        <CarCard brand={cars[1].brand} color={cars[1].color} />
-        <CarCard brand={cars[2].brand} color={cars[2].color} />
+        {/* .map() : une CarCard par voiture ; key : un identifiant unique (car.id) */}
+        {cars.map((car) => (
+          <CarCard key={car.id} brand={car.brand} color={car.color} />
+        ))}
       </div>
     </div>
   );
```

## Étape 3 → 4 : `etape-3-map` → `etape-4-price-available`

price et available dans le JSON ; CarCard affiche le prix et « Disponible / Indisponible »

### `src/components/CarCard.jsx` (modifié, +4 −2)

```diff
@@ -1,12 +1,14 @@
 import CarBrand from "./CarBrand";
 import CarColor from "./CarColor";
 import "./styles.css";
-// Exercice 3 : CarCard transmet ses props aux deux petits composants réutilisables
-function CarCard({ brand, color }) {
+// Démo 003-C · étape 4 : CarCard affiche aussi le prix et la disponibilité (opérateur ternaire)
+function CarCard({ brand, color, price, available }) {
   return (
     <div className="car-item">
       <CarBrand brand={brand} />
       <CarColor color={color} />
+      <div>{price}</div>
+      <div>{available ? "Disponible" : "Indisponible"}</div>
     </div>
   );
 }
```

### `src/pages/Home.jsx` (modifié, +11 −6)

```diff
@@ -1,10 +1,10 @@
-// Démo 003-C · étape 3 : on remplace les 3 lignes par .map() sur le tableau cars
+// Démo 003-C · étape 4 : on ajoute price et available dans le JSON, et on les passe à CarCard
 import CarCard from "../components/CarCard";
 
 const cars = [
-  { id: 1, brand: "BMW", color: "blue" },
-  { id: 2, brand: "Toyota", color: "Unknown" },
-  { id: 3, brand: "Mercedes", color: "black" },
+  { id: 1, brand: "BMW", color: "blue", price: "42 000 €", available: true },
+  { id: 2, brand: "Toyota", color: "Unknown", price: "22 000 €", available: false },
+  { id: 3, brand: "Mercedes", color: "black", price: "79 990 €", available: true },
 ];
 
 function Home() {
@@ -13,9 +13,14 @@
       <h1>Welcome to the Home Page</h1>
       <h2>Car List</h2>
       <div className="container">
-        {/* .map() : une CarCard par voiture ; key : un identifiant unique (car.id) */}
         {cars.map((car) => (
-          <CarCard key={car.id} brand={car.brand} color={car.color} />
+          <CarCard
+            key={car.id}
+            brand={car.brand}
+            color={car.color}
+            price={car.price}
+            available={car.available}
+          />
         ))}
       </div>
     </div>
```

## Étape 4 → 5 : `etape-4-price-available` → `etape-5-car-objet`

Code plus propre : <CarCard car={car} />, une seule prop ; CarCard destructure l’objet car

### `src/components/CarCard.jsx` (modifié, +7 −4)

```diff
@@ -1,14 +1,17 @@
 import CarBrand from "./CarBrand";
 import CarColor from "./CarColor";
 import "./styles.css";
-// Démo 003-C · étape 4 : CarCard affiche aussi le prix et la disponibilité (opérateur ternaire)
-function CarCard({ brand, color, price, available }) {
+// Démo 003-C · étape 5 : CarCard reçoit tout l'objet car, et le destructure
+function CarCard({car}) {
+  const {brand, color, price, available} = car;
   return (
     <div className="car-item">
       <CarBrand brand={brand} />
       <CarColor color={color} />
-      <div>{price}</div>
-      <div>{available ? "Disponible" : "Indisponible"}</div>
+      <div>
+        <h3 style={{padding: '2px'}}>{price}</h3>
+        {available ? "disponible": "indisponible"}
+      </div>
     </div>
   );
 }
```

### `src/pages/Home.jsx` (modifié, +2 −8)

```diff
@@ -1,4 +1,4 @@
-// Démo 003-C · étape 4 : on ajoute price et available dans le JSON, et on les passe à CarCard
+// Démo 003-C · étape 5 : on passe toute la voiture (car) à CarCard, au lieu de 4 props
 import CarCard from "../components/CarCard";
 
 const cars = [
@@ -14,13 +14,7 @@
       <h2>Car List</h2>
       <div className="container">
         {cars.map((car) => (
-          <CarCard
-            key={car.id}
-            brand={car.brand}
-            color={car.color}
-            price={car.price}
-            available={car.available}
-          />
+          <CarCard car={car} key={car.id}/>
         ))}
       </div>
     </div>
```
