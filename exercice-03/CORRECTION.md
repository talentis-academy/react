> **Exercice 3 · Correction**

# Découper CarCard en composants

*À partir du projet Voitures de la démo (étape 4) : sans boucle, sans JSON.*

| | |
|---|---|
| **Énoncé** | Exercice_03_Enonce.docx |
| **Code** | Dossier `correction/` (projet Vite prêt à lancer) |
| **Point de départ** | Dossier `template/` (= Demos/Demo_003_A_Voitures/etape-4-props) |

## CarBrand

**`src/components/CarBrand.jsx`**

```jsx
function CarBrand({ brand }) {
  return <div>{brand}</div>;
}
export default CarBrand;
```

## CarColor

**`src/components/CarColor.jsx`**

```jsx
function CarColor({ color }) {
  return <div>{color}</div>;
}

export default CarColor;
```

## CarCard

**`src/components/CarCard.jsx`**

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

## Home

**`src/pages/Home.jsx`**

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

## Points clés

- Un composant = une responsabilité : plus simple à lire et à réutiliser
- Les props descendent du parent vers l’enfant
- Le destructuring `({ brand })` évite d’écrire `props.brand`
- `Home` ne change pas : on a seulement découpé `CarCard`

## Ressources utiles

- React, passer des props : <https://react.dev/learn/passing-props-to-a-component>
