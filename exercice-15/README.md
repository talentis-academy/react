> **Exercice 15 · Énoncé**

# Migrer un écran vers View / Scene / Adapter

*On vient de migrer la Home ensemble. À vous : la page de détails d’une voiture.*

| | |
|---|---|
| **Moment** | Jour 5 · Module 14 · Architecture |
| **Durée** | 45 minutes |
| **Niveau** | Intermédiaire |
| **Prérequis** | React Query (useQuery), Redux Toolkit, React Router (useParams), Vitest, la migration de la Home faite en live |

## Objectif

La page de détails (`/car/:id`) est encore écrite **« à l’ancienne »** : un seul composant qui récupère les données, lit Redux et affiche tout. Le but est de la découper en **View / Scene / Adapter**, comme la Home, **sans changer le rendu**, et de tester l’adapter.

## Rappel de la règle

| Fichier | Rôle |
|---|---|
| `.view.jsx` | Le **conteneur** : appelle les hooks (`useParams`, `useCarDetails`, `useFavorites`), gère le chargement, l’erreur et la voiture introuvable, appelle l’adapter, puis passe la main à la Scene. |
| `.adapter.js` | Une **fonction pure** : la réponse de l’API (DTO) devient un modèle prêt à afficher. Pas de React, pas de hook, pas d’appel réseau. |
| `.scene.jsx` | L’**affichage** : ne reçoit que des **props** et assemble les composants de `@/components` (atoms, molecules). |
| `index.js` | Réexporte l’écran. Le router importe toujours par ce fichier. |

> **Remarque :** Le modèle à suivre est `src/features/cars/screens/HomeScreen/`. Le fichier `ARCHITECTURE.md` du projet résume aussi la règle.

## Le template de départ

Le dossier `template/` est le projet Car Catalog de l’étape 9 (architecture). Tout est déjà migré, **sauf la page de détails**.

```bash
cd template
npm install
npm run dev
```

| Fichier | Ce qu’il contient |
|---|---|
| `src/pages/CarDetailPage.jsx` | La page « à l’ancienne » à migrer (marquée `// TODO (exercice 15)`) |
| `src/app/router.jsx` | La route `car/:id` pointe encore vers l’ancienne page |
| `src/features/cars/hooks/useCarDetails.js` | Le hook React Query déjà prêt : `useCarDetails(id)` |
| `src/features/favorites/hooks/useFavorites.js` | Le hook des favoris : `{ favoriteIds, toggleFavorite }` |
| `src/features/cars/adapters/carAdapter.js` | Les briques communes : `adaptCarBase(dto)`, `orMissing(value)`, `MISSING_VALUE` |
| `src/components/atoms` et `molecules` | `BackIcon`, `ColorDot`, `Price`, `StatusBadge`, `DetailItem`, `FavoriteButton`, `Loading`… |

## Les fichiers à créer

Dans `src/features/cars/screens/CarDetailsScreen/` :

- `CarDetailsScreen.view.jsx`
- `CarDetailsScreen.adapter.js`
- `CarDetailsScreen.adapter.test.js`
- `CarDetailsScreen.scene.jsx`
- `index.js`

## Étapes

1. **L’adapter.** Écrire `adaptCarDetails(response, favoriteIds = [])` : l’API renvoie `{ Car: {...} }`. Si la voiture est absente, renvoyer `null`. Sinon, renvoyer un objet avec `id`, `title`, `brand`, `model`, `colorHex`, `colorName`, `year`, `vin`, `priceLabel`, `isAvailable`, `statusLabel` et `isFavorite`. Astuce : `adaptCarBase(dto)` donne déjà la plupart des champs.
2. **Le test de l’adapter.** Dans `CarDetailsScreen.adapter.test.js`, tester au moins : un DTO complet donne le bon modèle (`toEqual`), `isFavorite` vaut `true` si l’id est dans `favoriteIds`, une réponse vide donne `null`. Lancer `npm test`.
3. **La Scene.** Copier le JSX de l’ancienne page dans `CarDetailsScreenScene({ car, onToggleFavorite })`. Remplacer les champs de l’API (`car.car_model`, `car.price`…) par ceux du modèle (`car.title`, `car.priceLabel`…) et le HTML répété par les composants existants (`DetailItem`, `FavoriteButton`, `ColorDot`, `Price`, `StatusBadge`).
4. **La View.** `CarDetailsScreenView` lit l’id avec `useParams`, appelle `useCarDetails(id)` et `useFavorites()`, affiche `<Loading text="Loading car details..." />` pendant le chargement, « Car not found » en cas d’erreur ou de voiture absente, sinon la Scene. Attention : dans Redux on stocke l’**objet brut de l’API** (`data.Car`), pas le modèle adapté.
5. **L’index.** `export { CarDetailsScreenView as CarDetailsScreen } from "./CarDetailsScreen.view";`
6. **Le router.** Dans `src/app/router.jsx`, importer `CarDetailsScreen` depuis `@/features/cars/screens/CarDetailsScreen` et l’utiliser pour la route `car/:id`. Supprimer `src/pages/CarDetailPage.jsx`.

## Conseils

- Commencer par l’adapter et son test : c’est du JavaScript pur, sans navigateur
- La Scene ne doit importer ni hook, ni `react-redux`, ni `@tanstack/react-query`, ni l’API
- Utiliser l’alias `@` et les `index.js` : `@/components/molecules`, `@/features/favorites/hooks`
- Garder les mêmes classes CSS et les mêmes textes : le rendu doit être identique

## Bonus (optionnel)

- Gérer les valeurs manquantes dans l’adapter : marque, modèle, VIN ou prix absents affichent « — » (`MISSING_VALUE`, via `orMissing`), une couleur inconnue donne du gris (`DEFAULT_COLOR`)
- Ajouter le test correspondant : `adaptCarDetails({ Car: { id: 8 } })` ne plante pas
- Écrire un test e2e Playwright qui ouvre `/car/1` et vérifie le titre et le bouton favori

## Ressources utiles

- Le fichier `ARCHITECTURE.md` du template
- L’écran migré en live : `src/features/cars/screens/HomeScreen/`
- Vitest, les matchers : <https://vitest.dev/api/expect.html>
- React Query, useQuery : <https://tanstack.com/query/latest/docs/framework/react/reference/useQuery>

## Erreurs fréquentes à éviter

- Appeler un hook dans la Scene ou dans l’adapter : seule la View appelle les hooks
- Passer le modèle adapté à `toggleFavorite` : la liste des favoris attend l’objet brut de l’API (`data.Car`)
- Appeler l’adapter avant le `if (isLoading)` et oublier le cas `null` : la Scene plante sur `car.title`
- Laisser le router importer l’ancienne page, ou importer `CarDetailsScreen.view` directement au lieu de l’`index.js`

## Résultat attendu

- [ ] La page `/car/:id` a exactement le même rendu qu’avant (titre, grille, cœur favori, lien retour)
- [ ] Le cœur ajoute et retire la voiture des favoris
- [ ] `npm test` est vert, avec les nouveaux tests de `adaptCarDetails`
- [ ] `npm run test:e2e` est vert
- [ ] `npm run build` passe
- [ ] `src/pages/CarDetailPage.jsx` a disparu ; le router importe `CarDetailsScreen` par son `index.js`

Bon courage !
