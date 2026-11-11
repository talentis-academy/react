> **Exercice 9 · Correction**

# De la maquette au composant React

*La carte détail (l’exercice), à côté de la carte catalogue faite ensemble, en React + CSS.*

| | |
|---|---|
| **Énoncé** | Exercice_09_Enonce.docx |
| **Template** | Dossier `template/` (la Card Car faite ensemble) |
| **Code** | Dossier `correction/` (projet Vite prêt à lancer) |
| **Source** | Code du formateur : Formation/Projets/CSS/Design System/cars-css, nettoyé : les styles inline répétés (titres des exemples, conteneur, largeur de la carte catalogue) sont passés en classes dans styles.css. Rendu identique. |

## Le composant

Les deux cartes de la maquette : la carte catalogue (faite ensemble pendant le module) et la carte détail (l’exercice).

**`src/components/Home.jsx`**

```jsx
import "./styles.css";

// Exercice 9 · correction : la Card Car (faite ensemble) et la carte détail (Card Details)
export default function Home() {
  return (
    <>
      {/* La Card Car */}
      <div className="card">
        <h3 className="car-name">Tesla Model S</h3>
        <div className="color">
          <span className="circle" style={{ backgroundColor: "#dc2626" }}></span>
          <span>Rouge</span>
        </div>
        <span className="badge">Available</span>
        <p className="price">$79,990</p>
        <button className="btn">View Details</button>
      </div>

      {/* La carte détail */}
      <div className="card detail">
        <h1 className="title">Ford Mustang Mach-E</h1>
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
        <button className="btn">Back to list</button>
      </div>
    </>
  );
}
```

## Les styles

**`src/components/styles.css`**

```
/* La carte */
.card {
  width: 360px;
  background-color: #1f2937;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* Le nom de la voiture */
.car-name {
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
}

/* La couleur : la pastille + le texte */
.color {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #9ca3af;
}

.circle {
  width: 16px;
  height: 16px;
  border-radius: 50%; /* un cercle */
  border: 2px solid #6b7280;
}

/* Le badge Available */
.badge {
  align-self: flex-start; /* le badge garde sa largeur */
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
  cursor: pointer;
}

.btn:hover {
  background-color: #2563eb; /* plus foncé au survol */
}

/* La carte détail (exercice 9) : plus large */
.detail {
  width: 480px;
}

/* Le nom de la voiture, centré */
.title {
  font-size: 28px;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
}

/* Une ligne : le libellé à gauche, la valeur à droite */
.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #374151;
  color: #9ca3af;
}
```

## App

**`src/App.jsx`**

```jsx
import "./App.css";
import Home from "./components/Home";

function App() {
  return <Home />;
}

export default App;
```

## Points clés

- Les styles sont dans un fichier `styles.css` et appliqués avec `className`
- Chaque ligne de la carte détail est un `display: flex` avec `justify-content: space-between`
- La pastille de couleur reçoit sa couleur en inline (`style={{ backgroundColor: ... }}`) : c’est une donnée, pas un style fixe
- Les noms de voitures et les valeurs sont en dur ici ; on les rendra dynamiques plus tard (API, navigation)

## Ressources utiles

- MDN, Flexbox : <https://developer.mozilla.org/fr/docs/Learn_web_development/Core/CSS_layout/Flexbox>
