> **Exercice 3 · Énoncé**

# Découper CarCard en composants

*Créer des composants réutilisables et leur passer des props.*

| | |
|---|---|
| **Moment** | Jour 2 · Module 04 · Props, state et rendu dynamique |
| **Durée** | 20 minutes |
| **Niveau** | Débutant |
| **Prérequis** | Projet Voitures (composants Home et CarCard) |

## Objectifs de l’exercice

- Créer des petits composants réutilisables
- Passer des données d’un parent à un enfant avec les props
- Utiliser le destructuring dans les paramètres d’un composant

## Contexte

Dans le projet Voitures, `CarCard` affiche la marque et la couleur d’une voiture. Pour pouvoir réutiliser ces affichages ailleurs (liste, page détail…), on les sort dans deux composants dédiés.

## Structure à créer

**`Arborescence`**

```
src/
├── components/
│   ├── CarBrand.jsx   # affiche la marque
│   ├── CarColor.jsx   # affiche la couleur
│   └── CarCard.jsx    # utilise CarBrand et CarColor
└── pages/
    └── Home.jsx       # données + liste des voitures
```

## Étape 1 : Les données (dans Home.jsx)

**`src/pages/Home.jsx`**

```jsx
const cars = [
  { id: 1, brand: "BMW", color: "Blue" },
  { id: 2, brand: "Audi", color: "White" },
  { id: 3, brand: "Toyota", color: "Red" },
];
```

## Étape 2 : Le composant CarBrand

- Reçoit une prop `brand` (string)
- Affiche la marque

## Étape 3 : Le composant CarColor

- Reçoit une prop `color` (string)
- Affiche la couleur

## Étape 4 : Utiliser les deux dans CarCard

- `CarCard` reçoit `brand` et `color`
- Il les transmet à `CarBrand` et `CarColor`
- `Home` affiche une `CarCard` par voiture

## Bonus (optionnel)

- Si la voiture n’a pas de couleur, `CarColor` affiche « Couleur : Néant »
- Afficher la liste avec `cars.map()` et une `key` unique

## Conseils techniques

**`Exemple`**

```
// Destructuring des props
function CarBrand({ brand }) {
  return <div>{brand}</div>;
}
```

## Ressources utiles

- React, passer des props à un composant : <https://react.dev/learn/passing-props-to-a-component>
- React, votre premier composant : <https://react.dev/learn/your-first-component>

## Erreurs fréquentes à éviter

- Oublier d’exporter le composant (`export default`)
- Oublier l’import dans le composant parent
- Écrire `props.brand` sans recevoir `props`, ou oublier les accolades du destructuring

## Résultat attendu

- [ ] `CarBrand` et `CarColor` existent et sont réutilisables
- [ ] `CarCard` les utilise
- [ ] La page affiche toutes les voitures avec leur marque et leur couleur

Bon courage !
