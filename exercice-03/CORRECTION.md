> **Exercice 3 · Correction**

# Découper CarCard en composants

*Correction pas à pas. Le projet complet est dans le dossier « correction ».*

| | |
|---|---|
| **Énoncé** | Exercice_03_Enonce.docx |
| **Code** | Dossier `correction/` (projet Vite prêt à lancer) |

## CarBrand et CarColor

**`src/components/CarBrand.jsx`**

```jsx
function CarBrand({ brand }) {
  return <div className="car-brand">{brand}</div>;
}

export default CarBrand;
```

**`src/components/CarColor.jsx`**

```jsx
function CarColor({ color }) {
  return <div className="car-color">Couleur : {color ? color : "Néant"}</div>;
}

export default CarColor;
```

Le bonus est inclus : sans couleur, on affiche « Néant » grâce au ternaire.

## CarCard

**`src/components/CarCard.jsx`**

```jsx
import CarBrand from "./CarBrand";
import CarColor from "./CarColor";

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
import CarCard from "../components/CarCard";

const cars = [
  { id: 1, brand: "BMW", color: "Blue" },
  { id: 2, brand: "Audi", color: "White" },
  { id: 3, brand: "Toyota", color: "" },
];

function Home() {
  return (
    <div>
      <h1>Mes voitures</h1>
      <div className="container">
        {cars.map((car) => (
          <CarCard key={car.id} brand={car.brand} color={car.color} />
        ))}
      </div>
    </div>
  );
}

export default Home;
```

> **Remarque :** On utilise `car.id` comme `key` : c’est un identifiant unique et stable (mieux que l’index du tableau).

## À retenir

- Un composant = une responsabilité : plus simple à lire, à tester et à réutiliser
- Les props descendent du parent vers l’enfant
- Le destructuring `({ brand })` évite d’écrire `props.brand`

## Ressources utiles

- React, passer des props : <https://react.dev/learn/passing-props-to-a-component>
- React, afficher des listes : <https://react.dev/learn/rendering-lists>
