> **Exercice 13 · Énoncé**

# Login et Home sécurisée

*React Router (nouvelle syntaxe / Data Router) : navigation, layout et protection de route via un loader.*

| | |
|---|---|
| **Moment** | Jour 4 · Module 10 · React Router v8 |
| **Durée** | 45 minutes |
| **Niveau** | Intermédiaire |
| **Prérequis** | createBrowserRouter, RouterProvider, Link / NavLink, useNavigate, routes imbriquées (Outlet) |

## Objectif

Mettre en place une mini application React avec navigation, layout, et protection de route via un loader.

## Le template de départ

Le dossier `template/` contient seulement le **design** : les pages sont prêtes et bien découpées (la page Login reprend l’écran du formulaire), avec le CSS. React Router n’est pas encore installé : c’est vous qui créez toute la navigation.

```bash
cd template
npm install
npm run dev
```

| Fichier | Rôle |
|---|---|
| `src/components/Layout.jsx` | Le header (logo, liens Home et Login), la zone de la page, le footer. Le style du bouton « Se déconnecter » (`nav-btn`) est prêt |
| `src/pages/Login.jsx` | L’écran de login (email, mot de passe, bouton Login) |
| `src/pages/Home.jsx` | La page à protéger |
| `src/pages/NotFound.jsx` | La page 404 |
| `src/auth.js` | Vide : c’est ici qu’on écrit la mini auth et le loader |
| `src/App.jsx` | Affiche seulement la page Login pour l’instant |

Les endroits à compléter sont marqués `// TODO (exercice)`.

## Étapes

1. Installer React Router : `npm install react-router`. Tout s’importe depuis `react-router`, sauf `RouterProvider`, qui vient de `react-router/dom`
2. Dans `src/App.jsx` : créer le routeur avec `createBrowserRouter` : le Layout en parent, la Home en `index`, la page Login, la route 404 (`path: "*"`), puis l’afficher avec `RouterProvider`
3. Dans `src/components/Layout.jsx` : remplacer les liens par des `NavLink` et la zone de la page par `<Outlet />`. Dans `NotFound.jsx` : le lien de retour avec `Link`
4. Dans `src/auth.js` : une clé `TOKEN_KEY`, une fonction `isConnected()`, et le loader `requireAuthLoader` qui fait `throw redirect("/login")` si on n’est pas connecté. Le brancher sur la route Home
5. Dans `src/pages/Login.jsx` : à l’envoi du formulaire, `e.preventDefault()`, enregistrer un token dans le `localStorage`, puis `navigate("/")`. Email et mot de passe : n’importe lesquels
6. Dans `src/components/Layout.jsx` : si on est connecté, afficher un bouton « Se déconnecter » (classe `nav-btn`) à la place du lien Login ; au clic, supprimer le token puis `navigate("/login")`. Astuce : appelez `useLocation()` dans le Layout pour qu’il se redessine à chaque changement de page

> **Astuce :** Astuce : `NavLink` ajoute tout seul la classe `active` sur le lien de la page en cours : le CSS du template la met déjà en valeur.

## Fonctionnalités attendues

- Un **Header** + un **Footer** qui restent fixes (layout avec `<Outlet />`)
- Une page **Home** (protégée)
- Une page **Login**
- Un **guard** : si l’utilisateur n’est pas connecté ➜ redirection automatique vers `/login` ; s’il est connecté ➜ accès à `/`

## Règle d’authentification (simple)

On considère « connecté » si un **token** existe dans `localStorage`.

## Comportement des boutons

- Sur Login : bouton « Se connecter » ➜ set token + navigate vers `/`
- Sur Home : bouton « Se déconnecter » ➜ remove token + navigate vers `/login`

## Conseils

- Le guard est un **loader** sur la route Home : s’il n’y a pas de token, il fait `throw redirect("/login")`
- Les pages sont des **routes enfants** du Layout (`children`, `index: true` pour Home)
- Ajouter une route `*` pour la page 404

## Tests à faire

- [ ] Aller directement sur `/` sans token ➜ doit rediriger vers `/login`
- [ ] Se connecter ➜ accéder à `/`
- [ ] Se déconnecter ➜ retour `/login`

## Bonus (si vous finissez vite)

- Ajouter `/profile` protégé aussi (même loader)
- Dans le header : afficher « Connecté » / « Non connecté »
- Si connecté et on va sur `/login`, rediriger vers `/`

## Ressources utiles

- React Router, installation : <https://reactrouter.com/start/data/installation>
- React Router, routing (children, index, Outlet) : <https://reactrouter.com/start/data/routing>
- React Router, loaders (data loading) : <https://reactrouter.com/start/data/data-loading>
- React Router, redirect : <https://reactrouter.com/api/utils/redirect>
- MDN, localStorage : <https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage>

## Erreurs fréquentes à éviter

- Faire la vérification dans un `useEffect` de Home : la page s’affiche une fraction de seconde avant la redirection. Le loader s’exécute avant le rendu
- Utiliser `<a href>` au lieu de `Link` / `NavLink` : la page se recharge
- Oublier `<Outlet />` dans le Layout : les pages enfants ne s’affichent pas

Bon courage !
