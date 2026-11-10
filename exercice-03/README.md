> **Exercice 3 · Énoncé**

# Découper CarCard en composants

*Créer des composants réutilisables et leur passer des props.*

| | |
|---|---|
| **Moment** | Jour 2 · Module 04 · Props, state et rendu dynamique |
| **Durée** | 20 minutes |
| **Niveau** | Débutant |
| **Prérequis** | Projet Voitures de la démo, étape 3 (Home + CarCard avec les props brand et color) |

## Objectifs de l’exercice

- Créer des petits composants réutilisables
- Passer des données d’un parent à un enfant avec les props
- Utiliser le destructuring dans les paramètres d’un composant

## Contexte

Dans le projet Voitures, `CarCard` affiche la marque et la couleur d’une voiture. Pour pouvoir réutiliser ces affichages ailleurs (page détail…), on les sort dans deux composants dédiés.

On part du projet de la démo : `Home` affiche 3 `CarCard` écrites à la main, et leur passe `brand` et `color` en props. Pas de boucle et pas de tableau de données : on n’en a pas encore parlé.

## Structure à créer

**`Arborescence`**

```
src/
├── components/
│   ├── CarBrand.jsx   # affiche la marque
│   ├── CarColor.jsx   # affiche la couleur
│   └── CarCard.jsx    # utilise CarBrand et CarColor
└── pages/
    └── Home.jsx       # 3 CarCard écrites à la main (ne change pas)
```

## Étape 1 : Le point de départ

Ouvrir le dossier `template/` (ou votre projet Voitures). `Home` contient déjà :

**`src/pages/Home.jsx`**

```jsx
<CarCard brand="BMW" color="blue" />
<CarCard brand="Toyota" color="Unknown" />
<CarCard brand="Mercedes" color="black" />
```

On ne touche pas à `Home` : tout se passe dans `CarCard` et dans les deux nouveaux composants.

## Étape 2 : Le composant CarBrand

- Reçoit une prop `brand` (string)
- Affiche la marque

## Étape 3 : Le composant CarColor

- Reçoit une prop `color` (string)
- Affiche la couleur

## Étape 4 : Utiliser les deux dans CarCard

- `CarCard` reçoit toujours `brand` et `color`
- Il les transmet à `CarBrand` et `CarColor`
- `Home` ne change pas : ses 3 `CarCard` écrites à la main

## Bonus (optionnel)

- Ajouter une 4e voiture dans `Home` et vérifier que `CarBrand` et `CarColor` s’affichent bien

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
- [ ] La page affiche les 3 voitures avec leur marque et leur couleur, comme avant

Bon courage !
