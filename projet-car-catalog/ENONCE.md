> **Projet · Énoncé**

# Projet Car Catalog Application

*Une application React comme en entreprise : catalogue de voitures depuis une API, favoris, authentification, routes protégées, Error Boundaries, tests, architecture et IA.*

| | |
|---|---|
| **Moment** | Jour 5 · Modules 13, 14 et 15 · Le projet |
| **Durée** | La journée |
| **Niveau** | Intermédiaire à avancé |
| **Prérequis** | React Router v7, React Query, axios, Redux Toolkit, Error Boundaries |
| **Template de départ** | `Projet-Car-Catalog/etape-1-template` |

## Contexte

Dans ce projet, vous allez développer une application React moderne permettant de consulter un catalogue de voitures, avec authentification, gestion des favoris et protection des routes.

Ce projet reprend les standards utilisés en entreprise : routing avancé, appels API, React Query, Redux Toolkit, loaders, Error Boundaries et tests.

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
- Gérer un état global avec Redux Toolkit
- Implémenter un système de favoris
- Gérer l’authentification et la protection des routes
- Gérer les erreurs avec les Error Boundaries
- Tester une application (unitaires + E2E)
- Organiser le code en architecture feature-based et travailler avec l’IA

## Architecture attendue

- React 19 (avec Vite)
- React Router v7 (Data Router + loaders)
- React Query pour les appels API
- Redux Toolkit pour les favoris
- Axios avec interceptors
- localStorage pour l’authentification
- Vitest / Playwright pour les tests

> **Remarque :** Le projet est en JavaScript : les fichiers sont en `.js` et `.jsx`.

## Le template et les corrections

Le projet est découpé **comme des commits** : chaque dossier de `Projet-Car-Catalog/` est un projet Vite complet, qui se lance, et qui ajoute une seule fonctionnalité à l’étape précédente.

- Le **template de départ** est le dossier `etape-1-template` : on part de lui.
- La **correction** de chaque étape est le dossier correspondant (`etape-2-api-liste`, `etape-3-details`…).
- Le fichier `CHANGEMENTS.pdf` (ou `CHANGEMENTS.md`) montre ce qui est ajouté et retiré d’une étape à l’autre, comme un historique Git.

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
| 4 | Favoris avec Redux Toolkit | `etape-4-favoris` |
| 5 | Authentification (login) | `etape-5-login` |
| 6 | Protection des routes (loaders) | `etape-6-routes-protegees` |
| 7 | Error Boundaries | `etape-7-error-boundary` |
| 8 | Tests (Vitest + Playwright) | `etape-8-tests` |
| 9 | Architecture feature-based | `etape-9-architecture` |
| 10 | Travailler avec l’IA | `etape-10-ia` |

## Déroulement du projet

### Étape 1 – Mise en place du template et routage

Initialiser la structure globale de l’application, puis mettre en place la navigation entre les pages.

**Tâches**

- Créer le layout `MainLayout` (Header + Outlet + Footer) ; la page Login reste en dehors de ce layout
- Ajouter un Header avec navigation, et un Footer
- Configurer les styles globaux
- Installer `react-router-dom` et configurer les routes dans `App.jsx` (`createBrowserRouter`)
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

### Étape 4 – Favoris avec Redux Toolkit

Gérer les favoris globalement.

**Tâches**

- Créer `favoritesSlice`, avec l’action `toggleFavorite`
- Configurer le store Redux
- Envelopper l’application avec `<Provider>`
- Intégrer les favoris dans `HomePage` et `CarDetailPage`
- Créer `FavoritesPage`, et afficher un message s’il n’y a aucun favori

**Résultat attendu :** une gestion des favoris fonctionnelle.

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

### Étape 8 – Tests

**Tests unitaires (Vitest)**

- Le slice Redux
- Les cas d’ajout et de suppression des favoris

**Tests E2E (Playwright)**

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
- Mettre le démarrage dans `app/` (router, providers, store) et la technique dans `lib/` (axios, React Query)
- Ranger l’UI partagée dans `components/` en atomic design : atoms, molecules, organisms, templates
- Découper chaque écran en View (le conteneur), Adapter (une fonction pure) et Scene (l’affichage)
- Tester les adapters avec Vitest

> **Remarque :** En séance : le formateur migre la Home en démo, puis chacun migre la page de détails (exercice 15). Le détail de l’organisation est dans `etape-9-architecture/ARCHITECTURE.md`.

**Résultat attendu :** le même rendu, un code rangé par feature, et des adapters testés.

### Étape 10 – Travailler avec l’IA

Préparer le projet pour travailler efficacement avec Claude Code.

**Tâches**

- Écrire un `CLAUDE.md` à la racine : la stack, les commandes, l’architecture et les règles
- Brancher des MCP (Figma, Jira, Playwright…) avec `claude mcp add`
- Créer la skill de refacto `migrate-to-feature` (`.claude/skills/migrate-to-feature/SKILL.md`) : migrer une page vers View / Scene / Adapter, avec le test de l’adapter, puis l’utiliser sur les écrans restants
- Installer et utiliser une skill officielle (par exemple `frontend-design`), et partager la nôtre avec l’équipe (commit de `.claude/skills/`)
- Faire écrire les tests par l’IA : les tests de l’adapter, et un parcours e2e avec le MCP Playwright

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
- [ ] Tests passants

Bon courage ! Ce projet est très proche d’un cas réel en entreprise. Prenez le temps de bien structurer, de bien nommer vos fichiers et de commenter votre code.

Bon développement !
