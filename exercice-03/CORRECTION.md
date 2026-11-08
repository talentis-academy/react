> **Exercice 3 · Correction**

# Découper CarCard en composants

*Le projet Voitures du formateur (cars-basic), tel quel.*

| | |
|---|---|
| **Énoncé** | Exercice_03_Enonce.docx |
| **Code** | Dossier `correction/` (projet Vite prêt à lancer) |
| **Source** | Projet du formateur : Formation/Projets/cars-basic |

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
function CarCard({ brand, color, onSelect }) {
  return (
    <div className="car-item" onClick={() => onSelect(brand)}>
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
import CarCard from "../components/CarCard";
const cars = [
  { id: 1, brand: "BMW", color: "Blue" },
  { id: 2, brand: "Audi", color: "White" },
  { id: 3, brand: "Toyota", color: "Red" },
];

function Home() {
  //console.log(/\d/.test(password));
  const onSelect = (brand) => {
    console.log(brand);
  };
  return (
    <div>
      <h1 onCopy={(event) => console.log(event)}>Welcome to the Home Page</h1>
      <h2>Car List</h2>
      <div className="container">
        {cars.map((car, index) => (
          <CarCard
            key={index}
            brand={car.brand}
            color={car.color}
            onSelect={onSelect}
          />
        ))}
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
- Le projet contient aussi les étapes suivantes du cours : `onSelect` (fonction passée en props) et `onCopy` (événement)

## Ressources utiles

- React, passer des props : <https://react.dev/learn/passing-props-to-a-component>
- React, afficher des listes : <https://react.dev/learn/rendering-lists>
