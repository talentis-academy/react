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
    <div className="cards">
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
    </div>
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

/* Les deux cartes côte à côte */
.cards {
  display: flex; /* en ligne : les cartes côte à côte */
  align-items: flex-start; /* chaque carte garde sa hauteur (sinon flex les étire à la même hauteur) */
  gap: 32px; /* l'espace entre les deux cartes */
}

/* La carte détail : plus large */
.detail {
  width: 600px;
}

/* Le nom de la voiture, centré */
.title {
  font-size: 36px;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  margin-bottom: 48px;
}

/* Les lignes, les unes sous les autres */
.details {
  display: flex; /* flexbox */
  flex-direction: column; /* en colonne */
  gap: 12px; /* l'espace entre les lignes */
}

/* Une ligne : le libellé à gauche, la valeur à droite */
.row {
  display: flex; /* en ligne : le libellé et la valeur */
  justify-content: space-between; /* le premier à gauche, le dernier à droite, l'espace au milieu */
  align-items: center; /* alignés au milieu en hauteur */
  padding: 12px 0;
  border-bottom: 1px solid #374151; /* le trait sous la ligne */
}

/* Pas de trait sous la dernière ligne */
.row:last-child {
  border-bottom: none;
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
