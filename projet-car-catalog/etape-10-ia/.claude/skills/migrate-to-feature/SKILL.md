---
name: migrate-to-feature
description: Migrer une page React « à l'ancienne » (un composant qui fait tout : appel API, logique, affichage) vers notre architecture feature-based (View / Scene / Adapter + test de l'adapter). À utiliser quand on demande de refactorer, migrer ou ranger une page existante.
argument-hint: "[chemin de la page à migrer]"
---

# Migrer une page vers View / Scene / Adapter

Page à migrer : $ARGUMENTS

Règle d'or : **même rendu, mêmes textes, même comportement**. On change l'organisation, pas l'application.

## 1. Lire avant de toucher

- Lire la page, `CLAUDE.md` et `ARCHITECTURE.md`.
- Lister ce que la page fait : appels API, états (loading, erreur, vide, not found), transformations de données, affichage, actions (clics, favoris…).
- Repérer l'exemple de référence : `src/features/cars/screens/HomeScreen/`.

## 2. Ranger la logique

- Les appels HTTP vont dans `features/<feature>/api/` (avec `axiosQuery` de `@/lib`).
- Les `useQuery` / `useMutation` / Redux vont dans un hook de `features/<feature>/hooks/` (clés dans `queryKeys.js`). Réutiliser un hook existant s'il y en a un.

## 3. Créer l'écran `features/<feature>/screens/<X>Screen/`

- `<X>Screen.adapter.js` : toutes les transformations (titre, couleur, prix, libellés…) dans des fonctions **pures**. Valeurs manquantes gérées (« — », liste vide, couleur par défaut, `null` si absent). Réutiliser `features/cars/adapters/carAdapter.js` pour les voitures.
- `<X>Screen.view.jsx` : appelle les hooks, gère loading (`Loading`), erreur (`ErrorMessage`), vide / not found, appelle l'adapter, passe le résultat à la Scene.
- `<X>Screen.scene.jsx` : uniquement des props, assemble les composants de `@/components/...`. Aucun hook de données.
- `<X>Screen.adapter.test.js` : tests Vitest (cas normal, valeurs manquantes, réponse vide ou mal formée).
- `index.js` : `export { <X>ScreenView as <X>Screen } from "./<X>Screen.view";`

Si un morceau d'UI est réutilisable, le sortir dans `src/components/` (atom, molecule ou organism), avec des props simples, et l'exporter dans son `index.js`. `components/` n'importe jamais `features/`.

## 4. Brancher et nettoyer

- Dans `src/app/router.jsx`, importer l'écran depuis son `index.js` (garder le `loader` s'il y en avait un).
- Supprimer l'ancienne page et les imports morts.

## 5. Vérifier (obligatoire avant de rendre la main)

1. `npm test` : vert.
2. `npm run build` : OK.
3. `npm run test:e2e` (ou le MCP Playwright) : le parcours de la page marche comme avant.
4. Faire un résumé : fichiers créés, déplacés, supprimés, et ce qui est testé.
