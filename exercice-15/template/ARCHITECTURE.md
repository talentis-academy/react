# Étape 9 : architecture

Même application que l'étape 8 (mêmes routes, même rendu, mêmes tests e2e). Seule l'organisation de `src/` change.

## Les dossiers

| Dossier | Rôle |
|---|---|
| `app/` | Le démarrage de l'application : `router.jsx` (routes + loaders), `providers.jsx` (Redux + React Query + devtools), `store.js`, `RootLayout.jsx` (relie l'utilisateur connecté au template). |
| `lib/` | Les outils techniques partagés : `axiosQuery.js` (instance axios + token), `queryClient.js`, `config.js`. |
| `components/` | Les composants UI réutilisables, en **atomic design**. Ils ne reçoivent que des props simples (texte, nombre, booléen, fonction) et ne connaissent ni l'API, ni Redux, ni le localStorage. |
| `components/atoms` | Les plus petites briques : `Button`/`ButtonLink`, icônes, `ColorDot`, `StatusBadge`, `Price`, `Spinner`. |
| `components/molecules` | Quelques atoms assemblés : `FavoriteButton`, `InfoRow`, `DetailItem`, `FormField`, `Loading`, `ErrorMessage`, `StatusMessage`. |
| `components/organisms` | Des blocs complets : `CarCard`, `CarGrid`, `LoginForm`. |
| `components/templates` | La mise en page : `MainLayout`, `Header`, `Footer`. |
| `features/` | Le code **métier**, rangé par fonctionnalité : `cars`, `favorites`, `auth`, `errors`, `api-demo`. |

Dans une feature :

- `api/` : les appels HTTP (`carsApi.js`, `authApi.js`) ;
- `hooks/` : les hooks React Query / Redux (`useCars`, `useCarDetails`, `useFavorites`, `useCurrentUser`, `useLogin`) ; les clés React Query sont dans `queryKeys.js` ;
- `utils/`, `adapters/` : des fonctions pures (`colorUtils`, `carAdapter`, `authLoader`) ;
- `screens/<Ecran>/` : un écran = 4 fichiers.

## Un écran = View + adapter + Scene

| Fichier | Rôle |
|---|---|
| `<Ecran>.view.jsx` | Le **conteneur** : appelle les hooks, gère chargement / erreur / vide, appelle l'adapter. |
| `<Ecran>.adapter.js` | Une fonction **pure** : données de l'API (DTO) vers modèle prêt à afficher. |
| `<Ecran>.scene.jsx` | La **présentation** : ne reçoit que des props et assemble les composants de `components/`. |
| `index.js` | Réexporte l'écran. Le router importe toujours par ce fichier. |

Un écran sans données (la 404) n'a qu'une Scene : on n'ajoute pas de fichier vide.

### Exemple : la page d'accueil

```
HomeScreen.view   ->  useCars(2012)            (hook React Query)
                  ->  fetchCarsByYear(2012)    (api, via axiosQuery)
                  <-  { Cars: [{ id: 12, car: "Audi", car_model: "Q7", car_color: "Red", price: "$23,456.78", availability: true, ... }] }
                  ->  adaptHomeCars(data, favoriteIds)   (adapter : 6 voitures maximum)
                  <-  [{ id: 12, title: "Audi Q7", colorHex: "#e74c3c", priceLabel: "$23,456.78",
                         isAvailable: true, statusLabel: "Available", detailsUrl: "/car/12", isFavorite: false }]
                  ->  <HomeScreenScene cars={...} onToggleFavorite={...} />
                         -> <CarGrid> -> <CarCard title="Audi Q7" colorHex="#e74c3c" ... />
```

L'adapter gère aussi les valeurs manquantes : une couleur inconnue donne du gris, un prix absent affiche « — », une réponse vide donne une liste vide.

Les favoris stockés dans Redux restent les **objets bruts de l'API**. La View retrouve l'objet brut à partir de l'id cliqué (`findCarById`) avant d'appeler `toggleFavorite`.

## Règles d'import

- On utilise l'alias `@` (vers `src/`) pour aller d'un dossier à un autre : `@/components/molecules`, `@/features/favorites/hooks`.
- On passe toujours par les `index.js` qui existent (`components/atoms`, `.../hooks`, `.../screens/<Ecran>`).
- `components/` n'importe jamais `features/`. C'est `app/RootLayout.jsx` qui donne au `Header` le nom de l'utilisateur et la fonction de déconnexion.

## Les tests

| Type | Outil | Ce qu'on teste |
|---|---|---|
| Unitaire | Vitest (`npm test`, environnement node) | Les fonctions pures : les adapters (cas normaux, valeurs manquantes, limite de 6), `colorUtils`, `authLoader` (avec un stockage simulé), le slice des favoris. Ces tests sont rapides et n'ont besoin ni de navigateur ni de réseau. |
| End-to-end | Playwright (`npm run test:e2e`) | Le parcours réel dans le navigateur, avec la vraie API : ajouter, retirer et retrouver des favoris. |

Grâce à la séparation View / adapter / Scene, la logique de transformation se teste sans afficher de composant. Les tests e2e vérifient que tout fonctionne ensemble.
