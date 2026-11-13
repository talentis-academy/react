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

## Lancer une correction

```bash
cd exercice-NN/correction   # numéro sur 2 chiffres : 02, 10, 15…
npm install
npm run dev
```

Les exercices 3, 7, 8, 9, 10, 11, 14 et 15 ont aussi un dossier `template/` : c’est le point de départ, à lancer de la même façon (`cd exercice-07/template`).

L’exercice 5 se fait dans le navigateur : ouvrir `exercice-05/correction/correction.html` et regarder la console.

Chaque dossier d’exercice contient aussi l’énoncé (et la correction) au format Word.
