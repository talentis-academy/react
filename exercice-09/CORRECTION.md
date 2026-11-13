> **Exercice 9 · Correction**

# De la maquette au composant React

*La carte détail (Card Details), en React + CSS, en réutilisant les styles de la Card Car.*

| | |
|---|---|
| **Énoncé** | Exercice_09_Enonce.docx |
| **Template** | Dossier `template/` (la Card Car faite ensemble) |
| **Code** | Dossier `correction/` (projet Vite prêt à lancer) |
| **Source** | Code du formateur : Formation/Projets/CSS/Design System/cars-css (la carte détail), avec les valeurs de la maquette Figma. |

## Le composant

La carte détail. Elle réutilise les classes de la Card Car faite ensemble (`.card`, `.color`, `.circle`, `.badge`, `.price`, `.btn`).

**`src/components/Home.jsx`**

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

## Les styles

**`src/components/styles.css`**

```
/* La carte */
.card {
  width: 100%; /* responsive : la carte rétrécit avec la fenêtre… */
  max-width: 360px; /* …sans dépasser sa taille normale */
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

/* La carte détail : plus large */
.detail {
  max-width: 600px;
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

## La page (App.css)

**`src/App.css`**

```
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

## Points clés

- Les styles sont dans un fichier `styles.css` et appliqués avec `className`
- Chaque ligne est un `display: flex` avec `justify-content: space-between` : le libellé à gauche, la valeur à droite
- La pastille de couleur reçoit sa couleur en inline (`style={{ backgroundColor: ... }}`) : c’est une donnée, pas un style fixe
- Les noms de voitures et les valeurs sont en dur ici ; on les rendra dynamiques plus tard (API, navigation)

## Ressources utiles

- MDN, Flexbox : <https://developer.mozilla.org/fr/docs/Learn_web_development/Core/CSS_layout/Flexbox>
