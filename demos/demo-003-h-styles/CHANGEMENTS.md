# Démo 003-H · La Card Car en CSS : le code complet

Tous les fichiers utilisés par la démo, en entier, pour la recoder sans imprimer le code. Fichiers utilisés : ceux atteints par les imports depuis src/main.* ; les fichiers du gabarit Vite non modifiés sont seulement listés. Ordre de lecture : main → App → composants et pages → le reste.

La Card Car de la maquette Figma, codée en live en CSS. Tailwind CSS et Chakra UI : on fait le tour des projets prêts avec GUIDE-tailwind.pdf et GUIDE-chakra.pdf.

## `carte-css`

La carte catalogue de la maquette Figma (Card Car), en React + CSS : on la code en live, maquette ouverte. La carte détail (Card Details), c’est l’exercice 9.

*Fichiers générés par Vite, non modifiés (non affichés) : `index.html`, `vite.config.js`, `.gitignore`, `eslint.config.js`, `public/vite.svg`, `package.json`*

### `carte-css/src/main.jsx` (6 lignes)

```jsx
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <App />
);
```

### `carte-css/src/App.jsx` (8 lignes)

```jsx
import "./App.css";
import Home from "./components/Home";

function App() {
  return <Home />;
}

export default App;
```

### `carte-css/src/App.css` (22 lignes)

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

### `carte-css/src/components/Home.jsx` (18 lignes)

```jsx
import "./styles.css";

// La Card Car de la maquette Figma, en CSS (on la code en live, maquette ouverte)
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

### `carte-css/src/components/styles.css` (82 lignes)

```css
/* La carte */
.card {
  width: 360px;
  margin: 0 auto; /* centrée en largeur */
  background-color: #1f2937;
  border-radius: 12px; /* coins arrondis */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* l'ombre */
  padding: 24px;
  display: flex; /* flexbox : on range les éléments de la carte */
  flex-direction: column; /* en colonne : les uns sous les autres (par défaut : en ligne) */
  gap: 16px; /* l'espace entre chaque élément */
  transition: box-shadow 0.3s ease;
}

.card:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); /* une ombre plus grande au survol */
}

/* Le nom de la voiture */
.car-name {
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
}

/* La couleur : la pastille + le texte, sur la même ligne */
.color {
  display: flex; /* en ligne (le sens par défaut de flexbox) */
  align-items: center; /* la pastille et le texte alignés au milieu */
  gap: 8px; /* l'espace entre la pastille et le texte */
  font-size: 14px;
  color: #9ca3af;
}

/* La pastille ronde */
.circle {
  width: 16px;
  height: 16px;
  border-radius: 50%; /* un cercle */
  border: 2px solid #6b7280;
}

/* Le badge Available */
.badge {
  align-self: flex-start; /* dans la colonne de la carte, il reste à gauche et garde sa largeur (sinon il s'étire) */
  padding: 4px 12px;
  border-radius: 9999px; /* forme de pilule */
  font-size: 12px;
  font-weight: 500;
  background-color: #d1fae5;
  color: #065f46;
}

/* Le prix */
.price {
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
}

/* Le bouton */
.btn {
  background-color: #3b82f6;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer; /* la main au survol */
  transition: background-color 0.2s ease;
}

.btn:hover {
  background-color: #2563eb; /* plus foncé au survol */
}

/* Responsive : quand on rétrécit la fenêtre du navigateur, la carte rétrécit aussi (sans dépasser sa taille normale) */
.card {
  width: 100%;
  max-width: 360px;
}
```
