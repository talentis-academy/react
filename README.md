# Formation React.js · Exercices

Énoncés et corrections des exercices et du projet de la formation React.js (5 jours · 35 h).

Planning et supports : **[react.talentis.io](https://react.talentis.io)**

## Exercices

| Exercice | Journée | Énoncé | Correction |
|---|---|---|---|
| 1 · Préparer l’environnement de travail | Jour 1 | [Énoncé](exercice-01/README.md) | Pas de correction (checklist dans l’énoncé) |
| 2 · Créer votre premier projet avec Vite | Jour 1 | [Énoncé](exercice-02/README.md) | [Correction (Word)](exercice-02/Exercice_02_Correction.docx) · [Code](exercice-02/correction) |
| 3 · Découper CarCard en composants | Jour 2 | [Énoncé](exercice-03/README.md) · [Template](exercice-03/template) | [Correction (Word)](exercice-03/Exercice_03_Correction.docx) · [Code](exercice-03/correction) |
| 4 · Annuaire d’équipe | Jour 2 | [Énoncé](exercice-04/README.md) · [Template](exercice-04/template) | [Correction (Word)](exercice-04/Exercice_04_Correction.docx) · [Code](exercice-04/correction) |
| 5 · Manipuler un tableau | Jour 2 | [Énoncé](exercice-05/README.md) | [Correction (Word)](exercice-05/Exercice_05_Correction.docx) · [Code](exercice-05/correction) |
| 6 · Force du mot de passe | Jour 2 | [Énoncé](exercice-06/README.md) · [Template](exercice-06/template) | [Correction (Word)](exercice-06/Exercice_06_Correction.docx) · [Code](exercice-06/correction) |
| 7 · La maman et l’enfant | Jour 2 | [Énoncé](exercice-07/README.md) · [Template](exercice-07/template) | [Correction (Word)](exercice-07/Exercice_07_Correction.docx) · [Code](exercice-07/correction) |
| 8 · Formulaire d’enregistrement | Jour 2 | [Énoncé](exercice-08/README.md) · [Template](exercice-08/template) | [Correction (Word)](exercice-08/Exercice_08_Correction.docx) · [Code](exercice-08/correction) |
| 9 · De la maquette au composant React | Jour 2 | [Énoncé](exercice-09/README.md) · [Template](exercice-09/template) | [Correction (Word)](exercice-09/Exercice_09_Correction.docx) · [Code](exercice-09/correction) |
| 10 · Todo App | Jour 3 | [Énoncé](exercice-10/README.md) · [Template](exercice-10/template) | [Correction (Word)](exercice-10/Exercice_10_Correction.docx) · [Code](exercice-10/correction) |
| 11 · Page Comments avec un custom hook | Jour 3 | [Énoncé](exercice-11/README.md) · [Template](exercice-11/template) | [Correction (Word)](exercice-11/Exercice_11_Correction.docx) · [Code](exercice-11/correction) |
| 12 · Error Boundary avec react-error-boundary | Jour 3 | [Énoncé](exercice-12/README.md) | [Correction (Word)](exercice-12/Exercice_12_Correction.docx) · [Code](exercice-12/correction) |
| 13 · Login et Home sécurisée (React Router) | Jour 4 | [Énoncé](exercice-13/README.md) | [Correction (Word)](exercice-13/Exercice_13_Correction.docx) · [Code](exercice-13/correction) |
| 14 · Le panier d’achat avec Redux Toolkit | Jour 4 | [Énoncé](exercice-14/README.md) · [Template](exercice-14/template) | [Correction (Word)](exercice-14/Exercice_14_Correction.docx) · [Code](exercice-14/correction) |
| 15 · Migrer un écran vers View / Scene / Adapter | Jour 5 | [Énoncé](exercice-15/README.md) · [Template](exercice-15/template) | [Correction (Word)](exercice-15/Exercice_15_Correction.docx) · [Code](exercice-15/correction) |

## Projet · Car Catalog (Jour 5)

Le projet de fin de formation, découpé en 10 étapes comme des commits : chaque dossier est un projet complet qui ajoute une fonctionnalité. [Énoncé](projet-car-catalog/ENONCE.md) · [Les étapes](projet-car-catalog/README.md)

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

Les exercices 3, 4, 6, 7, 8, 9, 10, 11, 14 et 15 ont aussi un dossier `template/` : c’est le point de départ, à lancer de la même façon (`cd exercice-07/template`).

L’exercice 5 se fait dans le navigateur : ouvrir `exercice-05/correction/correction.html` et regarder la console.

Chaque dossier d’exercice contient aussi l’énoncé (et la correction) au format Word.
