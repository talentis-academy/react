# Formation React.js · Exercices

Énoncés et corrections des exercices et du projet de la formation React.js (5 jours · 35 h).

Planning et supports : **[react.talentis.io](https://react.talentis.io)**

## Exercices

| Exercice | Journée | Énoncé | Correction |
|---|---|---|---|
| 1 · Préparer l’environnement de travail | Jour 1 | [Énoncé](exercice-01/README.md) | Pas de correction (checklist dans l’énoncé) |
| 2 · Créer votre premier projet avec Vite | Jour 1 | [Énoncé](exercice-02/README.md) | [Correction](exercice-02/CORRECTION.md) · [Code](exercice-02/correction) |
| 3 · Découper CarCard en composants | Jour 2 | [Énoncé](exercice-03/README.md) · [Template](exercice-03/template) | [Correction](exercice-03/CORRECTION.md) · [Code](exercice-03/correction) · [Changements](exercice-03/CHANGEMENTS.md) |
| 4 · Annuaire d’équipe | Jour 2 | [Énoncé](exercice-04/README.md) | [Correction](exercice-04/CORRECTION.md) · [Code](exercice-04/correction) |
| 5 · Manipuler un tableau | Jour 2 | [Énoncé](exercice-05/README.md) | [Correction](exercice-05/CORRECTION.md) · [Code](exercice-05/correction) |
| 6 · Force du mot de passe | Jour 2 | [Énoncé](exercice-06/README.md) | [Correction](exercice-06/CORRECTION.md) · [Code](exercice-06/correction) |
| 7 · La maman et l’enfant | Jour 2 | [Énoncé](exercice-07/README.md) · [Template](exercice-07/template) | [Correction](exercice-07/CORRECTION.md) · [Code](exercice-07/correction) |
| 8 · Formulaire d’enregistrement | Jour 2 | [Énoncé](exercice-08/README.md) · [Template](exercice-08/template) | [Correction](exercice-08/CORRECTION.md) · [Code](exercice-08/correction) |
| 9 · De la maquette au composant React | Jour 2 | [Énoncé](exercice-09/README.md) · [Template](exercice-09/template) | [Correction](exercice-09/CORRECTION.md) · [Code](exercice-09/correction) |
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

Les démos du cours (code du formateur), nommées par journée : `demo-003-a` = formation 003 (Jour 2), démo A. Pour les démos en plusieurs étapes, le fichier `CHANGEMENTS.md` montre ce qui est ajouté et retiré d’une étape à l’autre, façon GitHub.

| Démo | Journée | Contenu |
|---|---|---|
| [002-A · Counter](demos/demo-002-a-counter) | Jour 1 | `useState`, re-render, handlers |
| [002-B · Babel](demos/demo-002-b-babel) | Jour 1 | JSX et `React.createElement` (page HTML) |
| [003-A · Voitures](demos/demo-003-a-voitures) | Jour 2 | 5 étapes : Home → CarCard → props → children → la liste |
| [003-B · Opérateurs logiques](demos/demo-003-b-operateurs-logiques) | Jour 2 | `!`, `!!`, `&&`, `? :`, `??` (fichiers JavaScript) |
| [003-C · Liste](demos/demo-003-c-liste) | Jour 2 | 5 étapes : JSON sans map → `.map()` → prix et disponibilité → `car={car}` |
| [003-D · Tableaux](demos/demo-003-d-tableaux) | Jour 2 | Tableaux et tableaux d’objets (fichiers JavaScript, étapes avec le résultat attendu) |
| [003-E · Événements](demos/demo-003-e-evenements) | Jour 2 | 5 étapes : `onCopy` → `event.target` → state `isHover` → `className` → `onChange` |
| [003-F · Destructuring](demos/demo-003-f-destructuring) | Jour 2 | Tableaux, rest, spread, objets (fichier JavaScript, 8 étapes) |
| [003-G · Formulaire](demos/demo-003-g-formulaire) | Jour 2 | 5 étapes : template → useState → isConnected → Zod seul → React Hook Form + Zod |
| [003-H · Styles](demos/demo-003-h-styles) | Jour 2 | La Card Car (Figma) en CSS, avec Tailwind CSS et avec Chakra UI, + 2 guides |
| [004-A · Todo App](demos/demo-004-a-todo-app) | Jour 3 | La Todo App (fetch dans un useEffect) : le template de l’exercice 10 |
| [004-B · Règles des hooks](demos/demo-004-b-regles-des-hooks) | Jour 3 | Les exemples interdits, ESLint et Husky |
| [004-C · Toggle](demos/demo-004-c-toggle) | Jour 3 | 3 étapes : Toggle Btn → Toggle checkbox (le même code) → le custom hook useToggle |
| [004-D · Network status](demos/demo-004-d-network-status) | Jour 3 | 2 étapes : les listeners dans le composant → le custom hook useNetworkStatus |
| [004-E · Users API](demos/demo-004-e-users-api) | Jour 3 | 2 étapes : fetch dans Users → le custom hook useFetchApi |
| [004-F · Cycle de vie](demos/demo-004-f-cycle-de-vie) | Jour 3 | 4 étapes : logs → React.memo → props recréées → useCallback / useMemo, + le React Compiler |
| [004-G · Refs](demos/demo-004-g-refs) | Jour 3 | 2 étapes : useRef → useImperativeHandle, + forwardRef (legacy) |
| [004-H · HOC](demos/demo-004-h-hoc) | Jour 3 | Higher-Order Component `withAuth` |
| [004-I · Error Boundary](demos/demo-004-i-error-boundary) | Jour 3 | 3 étapes : la page → le crash → l’Error Boundary |
| [005-A · React Router](demos/demo-005-a-router) | Jour 4 | 6 étapes : routes simples → 404 → route dynamique → routes imbriquées → errorElement → lazy loading |
| [005-B · Redux](demos/demo-005-b-redux) | Jour 4 | 7 étapes : createStore → combineReducers → Provider → payload → middleware → premier slice → Redux Toolkit |

## Lancer une correction

```bash
cd exercice-NN/correction   # numéro sur 2 chiffres : 02, 10, 15…
npm install
npm run dev
```

Les exercices 3, 7, 8, 9, 10, 11, 14 et 15 ont aussi un dossier `template/` : c’est le point de départ, à lancer de la même façon (`cd exercice-07/template`).

L’exercice 5 se fait dans le navigateur : ouvrir `exercice-05/correction/correction.html` et regarder la console.

Chaque dossier d’exercice contient aussi l’énoncé (et la correction) au format Word.
