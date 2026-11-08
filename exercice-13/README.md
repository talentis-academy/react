> **Exercice 13 · Énoncé**

# Login et Home sécurisée

*React Router (nouvelle syntaxe / Data Router) : navigation, layout et protection de route via un loader.*

| | |
|---|---|
| **Moment** | Jour 4 · Module 10 · React Router v7 |
| **Durée** | 45 minutes |
| **Niveau** | Intermédiaire |
| **Prérequis** | createBrowserRouter, RouterProvider, Link / NavLink, useNavigate, routes imbriquées (Outlet) |

## Objectif

Mettre en place une mini application React avec navigation, layout, et protection de route via un loader.

## Installation

```bash
npm install react-router-dom
```

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
