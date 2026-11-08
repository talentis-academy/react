# Formation React.js · Exercices

Énoncés et corrections des exercices et du projet de la formation React.js (5 jours · 35 h).

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
| 14 · Le panier d’achat avec Redux Toolkit | Jour 4 | [Énoncé](exercice-14/README.md) · [Template](exercice-14/template) | [Correction](exercice-14/CORRECTION.md) · [Code](exercice-14/correction) · [Changements](exercice-14/CHANGEMENTS.md) |
| 15 · Migrer un écran vers View / Scene / Adapter | Jour 5 | [Énoncé](exercice-15/README.md) · [Template](exercice-15/template) | [Correction](exercice-15/CORRECTION.md) · [Code](exercice-15/correction) · [Changements](exercice-15/CHANGEMENTS.md) |

## Projet · Car Catalog (Jour 5)

Le projet de fin de formation, découpé en 10 étapes comme des commits : chaque dossier est un projet complet qui ajoute une fonctionnalité. [Énoncé](projet-car-catalog/ENONCE.md) · [Les étapes](projet-car-catalog/README.md) · [Changements entre les étapes](projet-car-catalog/CHANGEMENTS.md)

| Étapes | Contenu |
|---|---|
| 1 à 8 | Template et routes → API (React Query) → détails → favoris (Redux Toolkit) → login → routes protégées (loaders) → Error Boundary → tests (Vitest, Playwright) |
| 9 | Architecture feature-based : atomic design, un écran = View / Scene / Adapter, tests des adapters (exercice 15 : migrer la page de détails) |
| 10 | L’IA : `CLAUDE.md`, MCP (Playwright, Chrome DevTools, Figma), notre skill de refacto `migrate-to-feature`, exemples de prompts |

## Démos pas à pas

Les démos du cours, numérotées dans l’ordre du cours (code du formateur). Pour les démos en plusieurs étapes, le fichier `CHANGEMENTS.md` montre ce qui est ajouté et retiré d’une étape à l’autre, façon GitHub, ainsi que les fichiers branchés pour la première fois (« utilisé »).

| Démo | Journée | Contenu |
|---|---|---|
| [01 · Counter](demos/demo-01-counter) | Jour 1 | `useState`, re-render, handlers |
| [02 · Babel](demos/demo-02-babel) | Jour 1 | JSX et `React.createElement` (page HTML) |
| [03 · Voitures](demos/demo-03-voitures) | Jour 2 | Le projet Voitures complet (props, map, événements) |
| [04 · Tableaux](demos/demo-04-tableaux) | Jour 2 | Tableaux et tableaux d’objets (console) |
| [05 · Destructuring](demos/demo-05-destructuring) | Jour 2 | Tableaux, rest, spread, objets + exercice bonus |
| [06 · Panier e-commerce](demos/demo-06-panier-e-commerce) | Jour 2 | Rendu conditionnel (`if / else`, `? :`, `&&`) |
| [07 · Formulaire](demos/demo-07-formulaire) | Jour 2 | 3 étapes : useState → Zod seul → React Hook Form + Zod |
| [08 · Styles](demos/demo-08-styles) | Jour 2 | Tailwind CSS, Chakra UI et les cartes Figma en CSS (3 projets) |
| [09 · Custom hooks](demos/demo-09-custom-hooks) | Jour 3 | 4 étapes : toggle → useToggle → useNetworkStatus → page Users |
| [10 · Cycle de vie](demos/demo-10-cycle-de-vie) | Jour 3 | 3 étapes : logs du cycle de vie → React.memo → useCallback / useMemo |
| [11 · Refs](demos/demo-11-refs) | Jour 3 | 3 étapes : useRef → ref en prop (forwardRef) → useImperativeHandle |
| [12 · HOC](demos/demo-12-hoc) | Jour 3 | Higher-Order Component `withAuth` |
| [13 · Error Boundary](demos/demo-13-error-boundary) | Jour 3 | Error Boundary en class component |
| [14 · React Router](demos/demo-14-router) | Jour 4 | 6 étapes : routes simples → 404 → route dynamique → routes imbriquées → errorElement → lazy loading |
| [15 · Redux](demos/demo-15-redux) | Jour 4 | 7 étapes : createStore → combineReducers → Provider → payload → middleware → template → Redux Toolkit |

## Lancer une correction

```bash
cd exercice-NN/correction   # numéro sur 2 chiffres : 02, 10, 15…
npm install
npm run dev
```

Les exercices 14 et 15 ont aussi un dossier `template/` : c’est le point de départ, à lancer de la même façon (`cd exercice-14/template`).

L’exercice 5 se fait dans le navigateur : ouvrir `exercice-05/correction/correction.html` et regarder la console.

Chaque dossier d’exercice contient aussi l’énoncé (et la correction) au format Word.
