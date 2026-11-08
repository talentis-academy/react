---
name: react-feature
description: Créer ou migrer un écran React dans une feature du projet Car Catalog (view, scene, adapter + test de l'adapter). À utiliser quand on demande un nouvel écran, une nouvelle page, ou de ranger une page existante dans l'architecture.
---

# Créer un écran (View / Scene / Adapter)

1. Trouver la feature (`src/features/<feature>/`). Si elle n'existe pas, la créer avec `api/`, `hooks/` et `screens/`.
2. Créer le dossier `src/features/<feature>/screens/<X>Screen/` avec :
   - `<X>Screen.view.jsx` : appelle les hooks de la feature (`hooks/`), gère loading (`Loading`), erreur (`ErrorMessage`) et vide, appelle l'adapter, passe le résultat à la Scene.
   - `<X>Screen.adapter.js` : une ou plusieurs fonctions **pures** (pas de React, pas d'import d'API). Elles gèrent les valeurs manquantes (liste vide, « — », couleur par défaut). Réutiliser `features/cars/adapters/carAdapter.js` quand il s'agit de voitures.
   - `<X>Screen.scene.jsx` : uniquement des props, assemble les composants de `@/components/...`. Pas de hook de données.
   - `<X>Screen.adapter.test.js` : tests Vitest de l'adapter (cas normal, valeurs manquantes, réponse vide ou mal formée).
   - `index.js` : `export { <X>ScreenView as <X>Screen } from "./<X>Screen.view";`
3. Les appels HTTP vont dans `features/<feature>/api/` (avec `axiosQuery` de `@/lib`), les hooks React Query dans `features/<feature>/hooks/` (clés dans `queryKeys.js`).
4. Si un composant d'UI manque, le créer dans le bon niveau de `src/components/` (atom, molecule, organism) avec des props simples, et l'exporter dans son `index.js`.
5. Brancher l'écran dans `src/app/router.jsx` en important depuis `index.js` (ajouter un `loader` si la route est protégée : `requireAuth`).
6. Vérifier : `npm test` puis `npm run build`. Les deux doivent passer avant de rendre la main.

Exemple de référence : `src/features/cars/screens/HomeScreen/`.
