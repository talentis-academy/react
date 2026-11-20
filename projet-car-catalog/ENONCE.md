> **Projet · Énoncé**

# Projet Car Catalog Application

*Une application React comme en entreprise : catalogue de voitures depuis une API, favoris avec Zustand, authentification, routes protégées, Error Boundaries, architecture, tests, Storybook et IA.*

| | |
|---|---|
| **Moment** | Jour 5 · Modules 13, 14 et 15 · Le projet |
| **Durée** | La journée |
| **Niveau** | Intermédiaire à avancé |
| **Prérequis** | React Router v8, React Query, axios, Zustand (exercice 14), Error Boundaries |
| **Template de départ** | `Projet-Car-Catalog/etape-1-template` |

## Contexte

Dans ce projet, vous allez développer une application React moderne permettant de consulter un catalogue de voitures, avec authentification, gestion des favoris et protection des routes.

Ce projet reprend les standards utilisés en entreprise : routing avancé, appels API, React Query, Zustand, loaders, Error Boundaries et tests.

- API Base : <https://myfakeapi.com/>
- Documentation Postman : <https://documenter.getpostman.com/view/5596891/SW7eyRFV?version=latest#intro>

| Endpoint | Méthode | Rôle |
|---|---|---|
| `/api/login` | POST | Login |
| `/api/cars/year/2012` | GET | Home (liste des voitures) |
| `/api/cars/1` | GET | Détails d’une voiture |

## Objectifs pédagogiques

À la fin de ce projet, vous serez capable de :

- Structurer une application React proprement
- Mettre en place un routage avancé avec React Router
- Consommer une API avec Axios + React Query
- Gérer un état global avec Zustand
- Implémenter un système de favoris
- Gérer l’authentification et la protection des routes
- Gérer les erreurs avec les Error Boundaries
- Tester une application (unitaires + E2E)
- Organiser le code en architecture feature-based et travailler avec l’IA

## Architecture attendue

- React 19 (avec Vite)
- React Router v8 (Data Router + loaders)
- React Query pour les appels API
- Zustand pour les favoris
- Axios avec interceptors
- localStorage pour l’authentification
- Vitest / Playwright pour les tests
- Storybook pour le catalogue des composants

> **Remarque :** Le projet est en JavaScript : les fichiers sont en `.js` et `.jsx`.

## Le template et les corrections

Le projet est découpé **comme des commits** : chaque dossier de `Projet-Car-Catalog/` est un projet Vite complet, qui se lance, et qui ajoute une seule fonctionnalité à l’étape précédente.

- Le **template de départ** est le dossier `etape-1-template` : on part de lui.
- La **correction** de chaque étape est le dossier correspondant (`etape-2-api-liste`, `etape-3-details`…).

```bash
cd etape-1-template   # ou une autre étape
npm install
npm run dev
```

| Étape | Sujet | Correction |
|---|---|---|
| 1 | Template et routes | `etape-1-template` |
| 2 | Liste des voitures depuis l’API | `etape-2-api-liste` |
| 3 | Page de détails | `etape-3-details` |
| 4 | Favoris avec Zustand | `etape-4-favoris` |
| 5 | Authentification (login) | `etape-5-login` |
| 6 | Protection des routes (loaders) | `etape-6-routes-protegees` |
| 7 | Error Boundaries | `etape-7-error-boundary` |
| 8 | Outillage de test (Vitest + Playwright), vu après l’architecture | `etape-8-tests` |
| 9 | Architecture feature-based | `etape-9-architecture` |
| 10 | Storybook (démo du formateur) | `etape-10-storybook` |
| 11 | Travailler avec l’IA | `etape-11-ia` |

## Pendant la journée

Le formateur fait avancer le projet de l’étape 1 à l’étape 7. À cinq moments, il s’arrête : **c’est vous qui codez un morceau**, chacun sur son poste, avec un minuteur projeté. Puis il tape sa version, un volontaire montre la sienne, et tout le monde se resynchronise sur le dossier de l’étape.

| Défi | Après l’étape | Ce que vous écrivez | Temps | Départ → correction | Bonus |
|---|---|---|---|---|---|
| 1 | 3 · Détails | `fetchCarById(id)` dans `api/actions.js`, puis `useQuery` dans `CarDetailPage.jsx` (l’id dans la queryKey), le loading et « Car not found ». Indice : la réponse est `{ Car: {...} }` | 12 min | `etape-2-api-liste` → `etape-3-details` | Retirer l’id de la queryKey et passer d’une voiture à l’autre : que voit-on ? |
| 2 | 4 · Favoris | Le store Zustand `src/store/favoritesStore.js` : `favorites`, `toggleFavorite(car)`, `selectFavorites` (comme la boutique de l’exercice 14). Le formateur branche ensuite les 3 pages | 12 min | `etape-3-details` + `npm install zustand` → `etape-4-favoris` | Brancher le cœur de la page de détails |
| 3 | 4 · Favoris | Des favoris qui survivent au F5 : dans `favoritesStore.js`, entourer la fonction de `create` avec `persist` (`import { persist } from "zustand/middleware"`) et lui donner un nom : `{ name: "favorites" }` | 5 min | votre copie de l’étape 4 → `etape-4-favoris` | Regarder la clé `favorites` dans DevTools › Application › Local Storage |
| 4 | 6 · Loaders | `src/utils/authLoader.js` : `requireAuth`, `redirectIfAuthenticated`, et les 2 `loader:` dans `App.jsx` | 8 min | `etape-5-login` → `etape-6-routes-protegees` | À l’oral : pourquoi un loader plutôt qu’un `useEffect` ? |
| 5 | 7 · Erreurs | `src/components/ErrorBoundary.jsx` (`useRouteError`, « Try again », « Go Home »), l’`errorElement`, et un bouton qui lève une erreur dans `ApiDemoPage` | 10 min | `etape-6-routes-protegees` → `etape-7-error-boundary` | Le styler (les classes `.error-*` arrivent à l’étape 7 : sans elles, l’écran est peu stylé, c’est normal) |

> **Astuce :** **En retard ? Pas de panique.** Ouvrez le dossier de l’étape (`etape-N-…`), `npm install`, `npm run dev`, et continuez avec tout le monde.

**Les installations à prévoir**

| Quand | Commande |
|---|---|
| Étape 2 (API) | `npm install axios @tanstack/react-query @tanstack/react-query-devtools` |
| Étape 4 (favoris) | `npm install zustand` |
| Avec l’architecture (outillage de l’étape 8) | `npm install -D vitest @playwright/test`, puis `npx playwright install chromium` |

> **Remarque :** Les étapes 2 et 5 sont faites par le formateur. À l’étape 5, une question pour vous : « je suis connecté, je fais F5 : que se passe-t-il ? » (et les favoris ? voir le défi 3). Les tests unitaires (sur un adapter) viennent après l’architecture, les tests e2e avec l’IA.

## Déroulement du projet

### Étape 1 – Mise en place du template et routage

Initialiser la structure globale de l’application, puis mettre en place la navigation entre les pages.

**Tâches**

- Créer le layout `MainLayout` (Header + Outlet + Footer) ; la page Login reste en dehors de ce layout
- Ajouter un Header avec navigation, et un Footer
- Configurer les styles globaux
- Installer `react-router` (v8 : un seul paquet) et configurer les routes dans `App.jsx` (`createBrowserRouter` ; `RouterProvider` s’importe depuis `react-router/dom`)
- Associer les layouts aux routes
- Vérifier que l’application démarre correctement et tester la navigation

**Routes à créer**

| Route | Page |
|---|---|
| `/` | `HomePage` |
| `/login` | `LoginPage` |
| `/favorites` | `FavoritesPage` |
| `/car/:id` | `CarDetailPage` |
| `*` | `NotFoundPage` |

> **Remarque :** Dans `etape-1-template`, cette étape est déjà en place, avec des données en dur dans `src/data/cars.js`, au même format que l’API : on vérifie ensemble que toutes les pages s’ouvrent. À l’étape 2, on remplace juste la source des données.

**Résultat attendu :** une application avec une structure de base fonctionnelle, et une navigation fluide entre toutes les pages.

### Étape 2 – Liste des voitures (Home)

Afficher la liste des voitures sur la page d’accueil.

**Tâches**

- Configurer Axios (`src/lib/axiosQuery.js`)
- Configurer React Query (`src/lib/queryClient.js`)
- Créer `src/api/config.js` et `src/api/actions.js` → `fetchCarsByYear()`
- Configurer le proxy Vite (CORS) : `/api/` → `https://myfakeapi.com`
- Utiliser `useQuery` dans `HomePage.jsx`
- Gérer les états : loading, error, success
- Limiter l’affichage à 6 voitures

**Résultat attendu :** la page Home affiche 6 voitures depuis l’API.

### Étape 3 – Page détails voiture

Afficher les informations complètes d’une voiture.

**Tâches**

- Créer `fetchCarById()`
- Créer `CarDetailPage.jsx`, sur la route `/car/:id`
- Afficher : marque, modèle, couleur, année ; VIN, prix, disponibilité
- Ajouter un bouton « Retour »
- Gérer : loading, error, not found

> **Attention :** L’id doit être dans la queryKey (`["car", id]`) : sinon, React Query peut afficher la voiture précédente depuis le cache.

**Résultat attendu :** une page de détails complète et fonctionnelle.

### Étape 4 – Favoris avec Zustand

Gérer les favoris globalement, avec Zustand (comme la boutique de l’exercice 14).

**Tâches**

- Installer `zustand` (`npm install zustand`)
- Créer le store `src/store/favoritesStore.js` avec `create` : `favorites` (un tableau vide) et l’action `toggleFavorite(car)`, qui ajoute ou retire la voiture
- Exporter le selector `selectFavorites`
- Pas de `<Provider>` : le store est un hook (`useFavoritesStore`), qu’on importe là où on en a besoin
- Intégrer les favoris dans `HomePage` et `CarDetailPage`
- Créer `FavoritesPage`, et afficher un message s’il n’y a aucun favori
- Défi 3 : entourer le store avec le middleware `persist` (`{ name: "favorites" }`) pour que les favoris survivent au F5 (ils sont enregistrés dans le localStorage)

**Résultat attendu :** une gestion des favoris fonctionnelle, qui survit au rechargement de la page.

### Étape 5 – Authentification (login)

Permettre la connexion de l’utilisateur.

**Tâches**

- Gérer le localStorage (token + user)
- Créer `login()` (API)
- Créer `LoginPage`, et utiliser `useMutation`
- Ajouter un interceptor Axios (le token est ajouté à chaque requête)
- Mettre à jour le Header (user + logout)
- Rediriger après le login

> **Astuce :** L’API de test accepte n’importe quel nom d’utilisateur et mot de passe.

**Résultat attendu :** un login fonctionnel, avec persistance.

### Étape 6 – Protection des routes (loaders)

Restreindre l’accès aux favoris.

**Tâches**

- Créer `requireAuth()` et `redirectIfAuthenticated()` (dans `src/utils/authLoader.js`)
- Protéger `/favorites`
- Bloquer `/login` si l’utilisateur est déjà connecté
- Tester les redirections

**Résultat attendu :** des routes protégées correctement.

### Étape 7 – Error Boundaries

Gérer proprement les erreurs React.

**Tâches**

- Créer `ErrorBoundary`
- L’utiliser avec `errorElement`
- Ajouter un bouton « Réessayer »
- Tester avec une erreur volontaire

**Résultat attendu :** une gestion des erreurs robuste.

### Étape 8 – L’outillage de test

Le dossier `etape-8-tests` est l’étape 7 avec l’outillage de test : Vitest et Playwright. Il n’est pas présenté le matin : on s’en sert après l’architecture.

**Tests unitaires (Vitest)** : le formateur teste en live l’adapter de la Home (étape 9). Dans `etape-8-tests`, un autre exemple : les tests du store Zustand des favoris (`src/store/favoritesStore.test.js`) : état initial, ajout, suppression, ajout multiple, suppression sélective.

**Tests E2E (Playwright)** : ils se font avec l’IA (étape 11, MCP Playwright). Ceux du projet sont dans `tests/e2e/favorites.spec.js` :

- Ajout et suppression des favoris
- Persistance pendant la navigation
- Parcours utilisateur complet

```bash
npm test              # Vitest
npx playwright install chromium
npm run test:e2e      # Playwright
```

### Étape 9 – Architecture feature-based

Réorganiser le code comme en entreprise. Même application (mêmes routes, même rendu, mêmes tests e2e) : seule l’organisation de `src/` change.

**Tâches**

- Ranger le code par fonctionnalité métier dans `features/` (`cars`, `favorites`, `auth`, `errors`, `api-demo`) : chaque feature a son API, ses hooks, ses écrans
- Mettre le démarrage dans `app/` (router, providers) et la technique dans `lib/` (axios, React Query) ; le store des favoris va dans `features/favorites/`
- Ranger l’UI partagée dans `components/` en atomic design : atoms, molecules, organisms, templates
- Découper chaque écran en View (le conteneur), Adapter (une fonction pure) et Scene (l’affichage)
- Tester les adapters avec Vitest (le formateur teste l’adapter de la Home en live)

> **Remarque :** En séance : le formateur migre la Home en démo et teste son adapter, puis chacun migre la page de détails (exercice 15 ; en bonus, le test de son adapter). Le détail de l’organisation est dans `etape-9-architecture/ARCHITECTURE.md`.

**Résultat attendu :** le même rendu, un code rangé par feature, et des adapters testés.

### Étape 10 – Storybook (démo du formateur)

Le formateur montre Storybook : un atelier à côté de l’application, où chaque composant de `components/` s’affiche seul, dans tous ses états, sans API ni login. C’est le catalogue de notre atomic design. Rien à coder pour vous : c’est une démo.

**Ce qui est ajouté**

- Les dépendances de développement `storybook`, `@storybook/react-vite` et `@storybook/addon-docs`, et les scripts `storybook` et `build-storybook`
- `.storybook/main.js` : où sont les stories (`src/**/*.stories.@(js|jsx)`) et le framework (`@storybook/react-vite`)
- `.storybook/preview.jsx` : le CSS global du projet et un `MemoryRouter` (pour les composants qui utilisent `<Link>`)
- Une story par état, dans un fichier `X.stories.jsx` à côté du composant : `Button`, `StatusBadge`, `Price`, `ColorDot`, `FavoriteButton`, `StatusMessage` et `CarCard`

```bash
npm install
npm run storybook        # http://localhost:6006
npm run build-storybook  # version statique (storybook-static/)
```

Documentation : <https://storybook.js.org/docs/get-started/frameworks/react-vite> et, pour écrire une story : <https://storybook.js.org/docs/writing-stories>

**Résultat attendu :** les atoms, molecules et organisms visibles et documentés dans Storybook, avec le style de l’application.

### Étape 11 – Travailler avec l’IA

Préparer le projet pour travailler efficacement avec Claude Code.

**Tâches**

- Écrire un `CLAUDE.md` à la racine : la stack, les commandes, l’architecture et les règles (par exemple : tout nouveau composant d’atoms ou de molecules a sa story)
- Brancher des MCP (Playwright, Jira, Chrome DevTools…) avec `claude mcp add`
- Créer la skill de refacto `migrate-to-feature` (`.claude/skills/migrate-to-feature/SKILL.md`) : migrer une page vers View / Scene / Adapter, avec le test de l’adapter, puis l’utiliser sur les écrans restants
- Installer et utiliser une skill officielle (par exemple `frontend-design`), et partager la nôtre avec l’équipe (commit de `.claude/skills/`)
- Faire écrire les tests par l’IA : les tests de l’adapter, et un parcours e2e avec le MCP Playwright (ouvrir le catalogue, ajouter un favori, recharger, aller sur /favorites, puis écrire le test dans `tests/e2e` et le lancer avec `npx playwright test`)

**Résultat attendu :** un projet que l’IA comprend et sait faire évoluer en suivant vos règles.

## Checklist finale

Avant le rendu final :

- [ ] Structure OK
- [ ] Routage complet
- [ ] API fonctionnelle
- [ ] Favoris opérationnels
- [ ] Authentification OK
- [ ] Routes protégées
- [ ] Error Boundary en place
- [ ] Tests passants (les adapters avec Vitest, les e2e avec l’IA)

Bon courage ! Ce projet est très proche d’un cas réel en entreprise. Prenez le temps de bien structurer, de bien nommer vos fichiers et de commenter votre code.

Bon développement !
