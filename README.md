# Formation React.js · Exercices

Énoncés et corrections des exercices de la formation React.js (5 jours · 35 h).

Planning et supports : **[react.talentis.io](https://react.talentis.io)**

## Exercices

| Exercice | Journée | Énoncé | Correction |
|---|---|---|---|
| 1 · Préparer l’environnement de travail | Jour 1 | [Énoncé](exercice-01/README.md) | Pas de correction (checklist dans l’énoncé) |
| 2 · Créer votre premier projet avec Vite | Jour 1 | [Énoncé](exercice-02/README.md) | [Correction](exercice-02/CORRECTION.md) · [Code](exercice-02/correction) |
| 3 · Découper CarCard en composants | Jour 2 | [Énoncé](exercice-03/README.md) | [Correction](exercice-03/CORRECTION.md) · [Code](exercice-03/correction) |
| 4 · Annuaire d’équipe | Jour 2 | [Énoncé](exercice-04/README.md) | [Correction](exercice-04/CORRECTION.md) · [Code](exercice-04/correction) |
| 5 · Manipuler un tableau | Jour 2 | [Énoncé](exercice-05/README.md) | [Correction](exercice-05/CORRECTION.md) · [Code](exercice-05/correction) |
| 6 · Force du mot de passe | Jour 2 | [Énoncé](exercice-06/README.md) | [Correction](exercice-06/CORRECTION.md) · [Code](exercice-06/correction) |
| 7 · La maman et l’enfant | Jour 2 | [Énoncé](exercice-07/README.md) | [Correction](exercice-07/CORRECTION.md) · [Code](exercice-07/correction) |
| 8 · Formulaire d’enregistrement | Jour 2 | [Énoncé](exercice-08/README.md) | [Correction](exercice-08/CORRECTION.md) · [Code](exercice-08/correction) |
| 9 · De la maquette au composant React | Jour 2 | [Énoncé](exercice-09/README.md) | [Correction](exercice-09/CORRECTION.md) · [Code](exercice-09/correction) |
| 10 · Todo App | Jour 3 | [Énoncé](exercice-10/README.md) | [Correction](exercice-10/CORRECTION.md) · [Code](exercice-10/correction) |
| 11 · Page Comments avec un custom hook | Jour 3 | [Énoncé](exercice-11/README.md) | [Correction](exercice-11/CORRECTION.md) · [Code](exercice-11/correction) |
| 12 · Error Boundary avec react-error-boundary | Jour 3 | [Énoncé](exercice-12/README.md) | [Correction](exercice-12/CORRECTION.md) · [Code](exercice-12/correction) |
| 13 · Login et Home sécurisée (React Router) | Jour 4 | [Énoncé](exercice-13/README.md) | [Correction](exercice-13/CORRECTION.md) · [Code](exercice-13/correction) |

## Démos pas à pas

Les démos du cours, étape par étape (code du formateur). Pour les démos en plusieurs étapes, le fichier `CHANGEMENTS.md` montre ce qui est ajouté et retiré d’une étape à l’autre, façon GitHub.

| Démo | Journée | Contenu |
|---|---|---|
| [Babel](demos/babel) | Jour 1 | JSX et `React.createElement` (page HTML) |
| [Counter](demos/counter) | Jour 1 | `useState`, re-render, handlers |
| [Tableaux](demos/tableaux) | Jour 2 | Tableaux et tableaux d’objets (console) |
| [Destructuring](demos/destructuring) | Jour 2 | Tableaux, rest, spread, objets + exercice bonus |
| [Voitures](demos/voitures) | Jour 2 | Le projet Voitures complet (props, map, événements) |
| [Panier e-commerce](demos/panier-e-commerce) | Jour 2 | Rendu conditionnel (`if / else`, `? :`, `&&`) |
| [Formulaire](demos/formulaire) | Jour 2 | 3 étapes : useState → Zod seul → React Hook Form + Zod |
| [Styles](demos/styles) | Jour 2 | Tailwind CSS, Chakra UI et les cartes Figma en CSS (3 projets) |
| [Custom hooks](demos/custom-hooks) | Jour 3 | 4 étapes : toggle → useToggle → useNetworkStatus → page Users |
| [Cycle de vie](demos/cycle-de-vie) | Jour 3 | 3 étapes : logs du cycle de vie → React.memo → useCallback / useMemo |
| [Refs](demos/refs) | Jour 3 | 3 étapes : useRef → ref en prop (forwardRef) → useImperativeHandle |
| [HOC](demos/hoc) | Jour 3 | Higher-Order Component `withAuth` |
| [Error Boundary](demos/error-boundary) | Jour 3 | Error Boundary en class component |
| [React Router](demos/router) | Jour 4 | 2 étapes : routes simples → routes imbriquées (Layout, Outlet, errorElement) |
| [Redux](demos/redux) | Jour 4 | 7 étapes : createStore → combineReducers → Provider → payload → middleware → Redux Toolkit |

## Lancer une correction

```bash
cd exercice-0N/correction   # remplacer N par le numéro de l’exercice
npm install
npm run dev
```

L’exercice 5 se fait dans le navigateur : ouvrir `exercice-05/correction/correction.html` et regarder la console.

Chaque dossier d’exercice contient aussi l’énoncé (et la correction) au format Word.
