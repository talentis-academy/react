# Exercice 09 · De la maquette au composant React : les changements entre les étapes

Pour chaque étape, ce qui change par rapport à l’étape précédente. En vert : les lignes ajoutées. En rouge : les lignes retirées. « utilisé » : un fichier qui existait déjà mais qui est branché (importé) à partir de cette étape, montré en entier.

## Point de départ : `template`

Le code de départ, en entier : les fichiers écrits pour la démo et utilisés (atteints par les imports depuis src/main.*) ; les fichiers du gabarit Vite non modifiés sont seulement listés. Ordre de lecture : main → App → composants et pages → le reste.

*Styles fournis (copiés tels quels, pas tapés en live) : `src/components/styles.css` (82 lignes)*

*Fichiers générés par Vite, non modifiés (non affichés) : `index.html`, `vite.config.js`, `.gitignore`, `eslint.config.js`, `public/vite.svg`, `package.json`*

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
import Home from "./components/Home";

function App() {
  return <Home />;
}

export default App;
```

### `src/App.css` (22 lignes)

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
}

/* Responsive : un peu d'espace autour de la carte quand la fenêtre est petite */
body {
  padding: 16px;
}
```

### `src/components/Home.jsx` (18 lignes)

```jsx
import "./styles.css";

// Exercice 9 · template : la Card Car faite ensemble. À vous : ajouter la carte détail (Card Details)
export default function Home() {
  return (
    <div className="card">
      <h3 className="car-name">Tesla Model S</h3>
      <div className="color">
        {/* style={{ }} : du style en ligne (un objet JS) ; ici la couleur de la voiture */}
        <span className="circle" style={{ backgroundColor: "#dc2626" }}></span>
        <span>Rouge</span>
      </div>
      <span className="badge">Available</span>
      <p className="price">$79,990</p>
      <button className="btn">View Details</button>
    </div>
  );
}
```

## Étape 1 → 2 : `template` → `correction`

La carte détail (Card Details) à la place de la Card Car, avec les styles de la Card Car réutilisés.

### `package.json` (modifié, +1 −1)

```diff
@@ -1,5 +1,5 @@
 {
-  "name": "exercice-09-carte-detail",
+  "name": "vite-project",
   "private": true,
   "version": "0.0.0",
   "type": "module",
```

### `src/components/Home.jsx` (modifié, +28 −10)

```diff
@@ -1,18 +1,36 @@
 import "./styles.css";
 
-// Exercice 9 · template : la Card Car faite ensemble. À vous : ajouter la carte détail (Card Details)
+// Exercice 9 · correction : la carte détail (Card Details), avec les styles de la Card Car (réutilisés)
 export default function Home() {
   return (
-    <div className="card">
-      <h3 className="car-name">Tesla Model S</h3>
-      <div className="color">
-        {/* style={{ }} : du style en ligne (un objet JS) ; ici la couleur de la voiture */}
-        <span className="circle" style={{ backgroundColor: "#dc2626" }}></span>
-        <span>Rouge</span>
+    <div className="card detail">
+      <h1 className="title">Ford Mustang Mach-E</h1>
+      <div className="details">
+        <div className="row">
+          <span>Brand</span>
+          <span>Ford</span>
+        </div>
+        <div className="row">
+          <span>Color</span>
+          <div className="color">
+            <span className="circle" style={{ backgroundColor: "#2563eb" }}></span>
+            <span>Bleu</span>
+          </div>
+        </div>
+        <div className="row">
+          <span>Year</span>
+          <span>2023</span>
+        </div>
+        <div className="row">
+          <span>Price</span>
+          <span className="price">$42,895</span>
+        </div>
+        <div className="row">
+          <span>Availability</span>
+          <span className="badge">Available</span>
+        </div>
       </div>
-      <span className="badge">Available</span>
-      <p className="price">$79,990</p>
-      <button className="btn">View Details</button>
+      <button className="btn">Back to list</button>
     </div>
   );
 }
```

### `src/components/styles.css` (modifié, +38 −0)

```diff
@@ -75,8 +75,46 @@
   background-color: #2563eb; /* plus foncé au survol */
 }
 
+/* La carte détail : plus large */
+.detail {
+  width: 600px;
+}
+
+/* Le nom de la voiture, centré */
+.title {
+  font-size: 36px;
+  font-weight: 700;
+  color: #ffffff;
+  text-align: center;
+  margin-bottom: 48px;
+}
+
+/* Les lignes, les unes sous les autres */
+.details {
+  display: flex; /* flexbox */
+  flex-direction: column; /* en colonne */
+  gap: 12px; /* l'espace entre les lignes */
+}
+
+/* Une ligne : le libellé à gauche, la valeur à droite */
+.row {
+  display: flex; /* en ligne : le libellé et la valeur */
+  justify-content: space-between; /* le premier à gauche, le dernier à droite, l'espace au milieu */
+  align-items: center; /* alignés au milieu en hauteur */
+  padding: 12px 0;
+  border-bottom: 1px solid #374151; /* le trait sous la ligne */
+}
+
+/* Pas de trait sous la dernière ligne */
+.row:last-child {
+  border-bottom: none;
+}
+
 /* Responsive : quand on rétrécit la fenêtre du navigateur, la carte rétrécit aussi (sans dépasser sa taille normale) */
 .card {
   width: 100%;
   max-width: 360px;
 }
+.detail {
+  max-width: 600px;
+}
```
