# Projet · Car Catalog (Jour 5)

Une application React comme en entreprise : un catalogue de voitures depuis une API, des favoris avec Zustand, une authentification, des routes protégées, des Error Boundaries et des tests.

- API : https://myfakeapi.com (documentation Postman : https://documenter.getpostman.com/view/5596891/SW7eyRFV?version=latest#intro)
- Endpoints : `/api/login`, `/api/cars/year/2012`, `/api/cars/1`

L’énoncé complet : [Enonce_Projet_Car_Catalog.md](Enonce_Projet_Car_Catalog.md) (ou `Enonce_Projet_Car_Catalog.docx`).

Le projet est découpé **comme des commits** : chaque dossier est un projet Vite complet, qui se lance, et qui ajoute une seule fonctionnalité à l’étape précédente.

Pendant la journée, on avance ensemble de l’étape 1 à l’étape 7, avec 5 défis « À vous », chacun sur son poste (étapes 3, 4 deux fois, 6 et 7). En retard ? Ouvrez le dossier de l’étape, `npm install`, et continuez.

| Étape | Dossier | Ce qui change | Fichier |
|---|---|---|---|
| 1 | `etape-1-template` | Le template : layouts, Header, Footer, styles, routes, données en dur (au format de l’API) | `src/App.jsx` |
| 2 | `etape-2-api-liste` | La liste vient de l’API : axios, React Query (`useQuery`), proxy Vite, états loading / error, 6 voitures | `src/pages/HomePage.jsx` |
| 3 | `etape-3-details` | La page de détails vient de l’API : `fetchCarById`, `useQuery` avec `["car", id]` | `src/pages/CarDetailPage.jsx` |
| 4 | `etape-4-favoris` | Les favoris avec Zustand : le store `favoritesStore` (`favorites`, `toggleFavorite`, `selectFavorites`), sans Provider, Home / Détail / Favoris ; `persist` les garde dans le localStorage (ils survivent au F5) | `src/store/favoritesStore.js` |
| 5 | `etape-5-login` | L’authentification : `storage` (token + user), `login()` avec `useMutation`, interceptor axios, Header (user + logout) | `src/pages/LoginPage.jsx` |
| 6 | `etape-6-routes-protegees` | Les loaders : `requireAuth` sur `/favorites`, `redirectIfAuthenticated` sur `/login` | `src/utils/authLoader.js` |
| 7 | `etape-7-error-boundary` | `errorElement` : un écran d’erreur avec « Try again », et un bouton pour provoquer une erreur | `src/components/ErrorBoundary.jsx` |
| 8 | `etape-8-tests` | L’outillage de test : Vitest (le store des favoris), Playwright (4 parcours e2e). Pas présentée le matin : le jour 5, on teste les adapters après l’architecture, et les e2e avec l’IA | `src/store/favoritesStore.test.js` |
| 9 | `etape-9-architecture` | L’architecture feature-based : atomic design (`components/`), un écran = View / Scene / Adapter, hooks par feature, tests des adapters (voir `ARCHITECTURE.md`) | `src/features/cars/screens/HomeScreen/HomeScreen.view.jsx` |
| 10 | `etape-10-storybook` | Storybook (démo du formateur) : le catalogue des composants, `.storybook/` (`main.js`, `preview.jsx`) et les stories des atoms, molecules et de `CarCard` (`npm run storybook`) | `src/components/atoms/Button.stories.jsx` |
| 11 | `etape-11-ia` | L’IA : `CLAUDE.md`, `.mcp.json` (Playwright, Chrome DevTools), notre skill de refacto `migrate-to-feature` (+ `react-feature`), des exemples de prompts (voir `IA.md`) | `.claude/skills/migrate-to-feature/SKILL.md` |

## Lancer une étape

```bash
cd etape-1-template   # ou une autre étape
npm install
npm run dev
```

Étapes 8 à 11 : `npm test` (Vitest), puis `npx playwright install chromium` et `npm run test:e2e` (Playwright).

Étapes 10 et 11 : `npm run storybook` (http://localhost:6006).

Étape 11 : lancer `claude` dans le dossier ; `/mcp` pour vérifier les serveurs MCP.

Pour se connecter : n’importe quel nom d’utilisateur et mot de passe (l’API de test accepte tout).
