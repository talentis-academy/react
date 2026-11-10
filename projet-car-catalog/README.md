# Projet · Car Catalog (Jour 5)

Une application React comme en entreprise : un catalogue de voitures depuis une API, des favoris avec Redux Toolkit, une authentification, des routes protégées, des Error Boundaries et des tests.

- API : https://myfakeapi.com (documentation Postman : https://documenter.getpostman.com/view/5596891/SW7eyRFV?version=latest#intro)
- Endpoints : `/api/login`, `/api/cars/year/2012`, `/api/cars/1`

L’énoncé complet : [Enonce_Projet_Car_Catalog.md](Enonce_Projet_Car_Catalog.md) (ou `Enonce_Projet_Car_Catalog.docx`).

Le projet est découpé **comme des commits** : chaque dossier est un projet Vite complet, qui se lance, et qui ajoute une seule fonctionnalité à l’étape précédente.

| Étape | Dossier | Ce qui change | Fichier |
|---|---|---|---|
| 1 | `etape-1-template` | Le template : layouts, Header, Footer, styles, routes, données en dur (au format de l’API) | `src/App.jsx` |
| 2 | `etape-2-api-liste` | La liste vient de l’API : axios, React Query (`useQuery`), proxy Vite, états loading / error, 6 voitures | `src/pages/HomePage.jsx` |
| 3 | `etape-3-details` | La page de détails vient de l’API : `fetchCarById`, `useQuery` avec `["car", id]` | `src/pages/CarDetailPage.jsx` |
| 4 | `etape-4-favoris` | Les favoris avec Redux Toolkit : `favoritesSlice` (`toggleFavorite`), store, Provider, Home / Détail / Favoris | `src/store/favoritesSlice.js` |
| 5 | `etape-5-login` | L’authentification : `storage` (token + user), `login()` avec `useMutation`, interceptor axios, Header (user + logout) | `src/pages/LoginPage.jsx` |
| 6 | `etape-6-routes-protegees` | Les loaders : `requireAuth` sur `/favorites`, `redirectIfAuthenticated` sur `/login` | `src/utils/authLoader.js` |
| 7 | `etape-7-error-boundary` | `errorElement` : un écran d’erreur avec « Try again », et un bouton pour provoquer une erreur | `src/components/ErrorBoundary.jsx` |
| 8 | `etape-8-tests` | Les tests : Vitest (le slice des favoris), Playwright (4 parcours e2e) | `src/store/favoritesSlice.test.js` |
| 9 | `etape-9-architecture` | L’architecture feature-based : atomic design (`components/`), un écran = View / Scene / Adapter, hooks par feature, tests des adapters (voir `ARCHITECTURE.md`) | `src/features/cars/screens/HomeScreen/HomeScreen.view.jsx` |
| 10 | `etape-10-ia` | L’IA : `CLAUDE.md`, `.mcp.json` (Playwright, Chrome DevTools, Figma), notre skill de refacto `migrate-to-feature` (+ `react-feature`), des exemples de prompts (voir `IA.md`) | `.claude/skills/migrate-to-feature/SKILL.md` |

## Les changements entre les étapes

Comme un historique de commits : ce qui est ajouté (en vert) et retiré (en rouge) d’une étape à l’autre, dans [CHANGEMENTS.md](CHANGEMENTS.md) (ou `CHANGEMENTS.pdf` à imprimer).

> Attention : l’étape 9 (et la section « Étape 8 → 9 » des CHANGEMENTS) contient déjà `src/features/cars/screens/CarDetailsScreen/`, c’est-à-dire la correction de l’exercice 15. Ne pas la projeter avant l’exercice : montrer seulement `HomeScreen/` et `src/app/router.jsx`.

## Lancer une étape

```bash
cd etape-1-template   # ou une autre étape
npm install
npm run dev
```

Étapes 8 à 10 : `npm test` (Vitest), puis `npx playwright install chromium` et `npm run test:e2e` (Playwright).

Étape 10 : lancer `claude` dans le dossier ; `/mcp` pour vérifier les serveurs MCP.

Pour se connecter : n’importe quel nom d’utilisateur et mot de passe (l’API de test accepte tout).
