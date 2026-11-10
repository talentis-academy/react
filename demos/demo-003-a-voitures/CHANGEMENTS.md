# Démo 003-A · Projet Voitures : les changements entre les étapes

Pour chaque étape, ce qui change par rapport à l’étape précédente. En vert : les lignes ajoutées. En rouge : les lignes retirées. « utilisé » : un fichier qui existait déjà mais qui est branché (importé) à partir de cette étape, montré en entier.

## Étape 1 · `etape-1-home` : point de départ

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

### `src/pages/Home.jsx` (27 lignes)

```jsx
// Démo 003-A · étape 1 : un seul composant Home, les voitures écrites en dur (pas de boucle, pas de props)
import "../components/styles.css";

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <h2>Car List</h2>
      <div className="container">
        <div className="car-item">
          <div>BMW</div>
          <div>blue</div>
        </div>
        <div className="car-item">
          <div>Toyota</div>
          <div>Unknown</div>
        </div>
        <div className="car-item">
          <div>Mercedes</div>
          <div>black</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
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

## Étape 1 → 2 : `etape-1-home` → `etape-2-carcard`

Le projet Voitures en étapes : Home seul, puis CarCard sans props (la même voiture 3 fois), puis les props, puis children, puis la version complète (map, key, onCopy).

### `src/components/CarCard.jsx` (ajouté, +12 −0)

```diff
@@ -1,0 +1,12 @@
+import "./styles.css";
+// Démo 003-A · étape 2 : CarCard sans props, il affiche toujours la même voiture
+function CarCard() {
+  return (
+    <div className="car-item">
+      <div>BMW</div>
+      <div>blue</div>
+    </div>
+  );
+}
+
+export default CarCard;
```

### `src/pages/Home.jsx` (modifié, +5 −14)

```diff
@@ -1,5 +1,5 @@
-// Démo 003-A · étape 1 : un seul composant Home, les voitures écrites en dur (pas de boucle, pas de props)
-import "../components/styles.css";
+// Démo 003-A · étape 2 : Home utilise 3 fois CarCard… et on voit 3 fois la même voiture : il faut des props
+import CarCard from "../components/CarCard";
 
 function Home() {
   return (
@@ -7,18 +7,9 @@
       <h1>Welcome to the Home Page</h1>
       <h2>Car List</h2>
       <div className="container">
-        <div className="car-item">
-          <div>BMW</div>
-          <div>blue</div>
-        </div>
-        <div className="car-item">
-          <div>Toyota</div>
-          <div>Unknown</div>
-        </div>
-        <div className="car-item">
-          <div>Mercedes</div>
-          <div>black</div>
-        </div>
+        <CarCard />
+        <CarCard />
+        <CarCard />
       </div>
     </div>
   );
```

## Étape 2 → 3 : `etape-2-carcard` → `etape-3-props`

Le projet Voitures en étapes : Home seul, puis CarCard sans props (la même voiture 3 fois), puis les props, puis children, puis la version complète (map, key, onCopy).

### `src/components/CarCard.jsx` (modifié, +4 −4)

```diff
@@ -1,10 +1,10 @@
 import "./styles.css";
-// Démo 003-A · étape 2 : CarCard sans props, il affiche toujours la même voiture
-function CarCard() {
+// Démo 003-A · étape 3 : CarCard reçoit la marque et la couleur en props (destructuring)
+function CarCard({ brand, color }) {
   return (
     <div className="car-item">
-      <div>BMW</div>
-      <div>blue</div>
+      <div>{brand}</div>
+      <div>{color}</div>
     </div>
   );
 }
```

### `src/pages/Home.jsx` (modifié, +4 −4)

```diff
@@ -1,4 +1,4 @@
-// Démo 003-A · étape 2 : Home utilise 3 fois CarCard… et on voit 3 fois la même voiture : il faut des props
+// Démo 003-A · étape 3 : Home passe les infos de chaque voiture à CarCard avec les props (toujours sans boucle)
 import CarCard from "../components/CarCard";
 
 function Home() {
@@ -7,9 +7,9 @@
       <h1>Welcome to the Home Page</h1>
       <h2>Car List</h2>
       <div className="container">
-        <CarCard />
-        <CarCard />
-        <CarCard />
+        <CarCard brand="BMW" color="blue" />
+        <CarCard brand="Toyota" color="Unknown" />
+        <CarCard brand="Mercedes" color="black" />
       </div>
     </div>
   );
```

## Étape 3 → 4 : `etape-3-props` → `etape-4-children`

Le projet Voitures en étapes : Home seul, puis CarCard sans props (la même voiture 3 fois), puis les props, puis children, puis la version complète (map, key, onCopy).

### `src/components/CarCard.jsx` (modifié, +3 −8)

```diff
@@ -1,12 +1,7 @@
 import "./styles.css";
-// Démo 003-A · étape 3 : CarCard reçoit la marque et la couleur en props (destructuring)
-function CarCard({ brand, color }) {
-  return (
-    <div className="car-item">
-      <div>{brand}</div>
-      <div>{color}</div>
-    </div>
-  );
+// Démo 003-A · étape 4 : la 2e approche, CarCard affiche ce qu'on met entre ses balises (children)
+function CarCard({ children }) {
+  return <div className="car-item">{children}</div>;
 }
 
 export default CarCard;
```

### `src/pages/Home.jsx` (modifié, +13 −4)

```diff
@@ -1,4 +1,4 @@
-// Démo 003-A · étape 3 : Home passe les infos de chaque voiture à CarCard avec les props (toujours sans boucle)
+// Démo 003-A · étape 4 : on passe le contenu entre les balises de CarCard (children)
 import CarCard from "../components/CarCard";
 
 function Home() {
@@ -7,9 +7,18 @@
       <h1>Welcome to the Home Page</h1>
       <h2>Car List</h2>
       <div className="container">
-        <CarCard brand="BMW" color="blue" />
-        <CarCard brand="Toyota" color="Unknown" />
-        <CarCard brand="Mercedes" color="black" />
+        <CarCard>
+          <div>BMW</div>
+          <div>blue</div>
+        </CarCard>
+        <CarCard>
+          <div>Toyota</div>
+          <div>Unknown</div>
+        </CarCard>
+        <CarCard>
+          <div>Mercedes</div>
+          <div>black</div>
+        </CarCard>
       </div>
     </div>
   );
```

## Étape 4 → 5 : `etape-4-children` → `etape-5-liste`

Le projet Voitures en étapes : Home seul, puis CarCard sans props (la même voiture 3 fois), puis les props, puis children, puis la version complète (map, key, onCopy).

### `src/components/CarBrand.jsx` (ajouté, +4 −0)

```diff
@@ -1,0 +1,4 @@
+function CarBrand({ brand }) {
+  return <div>{brand}</div>;
+}
+export default CarBrand;
```

### `src/components/CarCard.jsx` (modifié, +10 −3)

```diff
@@ -1,7 +1,14 @@
+import CarBrand from "./CarBrand";
+import CarColor from "./CarColor";
 import "./styles.css";
-// Démo 003-A · étape 4 : la 2e approche, CarCard affiche ce qu'on met entre ses balises (children)
-function CarCard({ children }) {
-  return <div className="car-item">{children}</div>;
+// Props destructurées : on récupère directement brand et color
+function CarCard({ brand, color }) {
+  return (
+    <div className="car-item">
+      <CarBrand brand={brand} />
+      <CarColor color={color} />
+    </div>
+  );
 }
 
 export default CarCard;
```

### `src/components/CarColor.jsx` (ajouté, +5 −0)

```diff
@@ -1,0 +1,5 @@
+function CarColor({ color }) {
+  return <div>{color}</div>;
+}
+
+export default CarColor;
```

### `src/components/styles.css` (modifié, +23 −0)

```diff
@@ -2,6 +2,18 @@
   padding: 20px;
 }
 
+.title {
+  padding: 20px;
+}
+
+.title--hover {
+  padding: 20px;
+  color: darkred;
+}
+.title--normal {
+  padding: 20px;
+  color: black;
+}
 .container {
   padding: 20px;
   place-items: center;
@@ -15,3 +27,14 @@
   margin: 12px;
   width: 300px;
 }
+
+.button {
+  background-color: #4caf50;
+  border: none;
+  color: white;
+  padding: 10px 20px;
+  text-align: center;
+  font-size: 16px;
+  cursor: pointer;
+  border-radius: 4px;
+}
```

### `src/pages/Home.jsx` (modifié, +15 −14)

```diff
@@ -1,24 +1,25 @@
-// Démo 003-A · étape 4 : on passe le contenu entre les balises de CarCard (children)
+// Démo 003-A · Home : la liste des voitures avec .map()
 import CarCard from "../components/CarCard";
+const cars = [
+  { id: 1, brand: "BMW", color: "Blue" },
+  { id: 2, brand: "Audi", color: "White" },
+  { id: 3, brand: "Toyota", color: "Red" },
+];
 
 function Home() {
   return (
     <div>
-      <h1>Welcome to the Home Page</h1>
+      <h1 onCopy={(event) => console.log(event)}>Welcome to the Home Page</h1>
       <h2>Car List</h2>
       <div className="container">
-        <CarCard>
-          <div>BMW</div>
-          <div>blue</div>
-        </CarCard>
-        <CarCard>
-          <div>Toyota</div>
-          <div>Unknown</div>
-        </CarCard>
-        <CarCard>
-          <div>Mercedes</div>
-          <div>black</div>
-        </CarCard>
+        {/* .map() : une CarCard par voiture. key={index} marche ici, mais car.id serait plus sûr */}
+        {cars.map((car, index) => (
+          <CarCard
+            key={index}
+            brand={car.brand}
+            color={car.color}
+          />
+        ))}
       </div>
     </div>
   );
```
