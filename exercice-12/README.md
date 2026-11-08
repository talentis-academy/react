> **Exercice 12 · Énoncé**

# Error Boundary avec react-error-boundary

*Gérer les erreurs UI avec une librairie prête à l’emploi, au lieu d’un composant class.*

| | |
|---|---|
| **Moment** | Jour 3 · Module 09 · Gestion des erreurs |
| **Durée** | 30 minutes |
| **Niveau** | Intermédiaire |
| **Prérequis** | Error Boundary en mode class, props children, événements |

## Objectif

Comprendre comment gérer les erreurs UI facilement, avec une solution moderne, rapide et réutilisable.

## Contexte

On a déjà fait un Error Boundary en mode class (`getDerivedStateFromError`, `componentDidCatch`). Pour cet exercice, on va refaire un Error Boundary, mais cette fois en utilisant une librairie prête à l’emploi : **react-error-boundary**.

## Installation

```bash
npm install react-error-boundary
```

## Étapes

1. Installer la librairie et l’intégrer dans l’application : entourer les composants avec `<ErrorBoundary>`
2. Créer un petit composant « test » qui provoque volontairement une erreur (ex. un bouton « Throw error »), pour vérifier que l’app ne crashe pas
3. Afficher une UI de fallback simple : un message et un bouton **Réessayer**
4. Ajouter un reset avec `resetErrorBoundary` pour revenir à l’état normal
5. Logger l’erreur avec `onError`
6. Utiliser `showBoundary` (hook `useErrorBoundary`) pour déclencher l’Error Boundary depuis un event ou un fetch

## Rappel

- Un Error Boundary capte les erreurs pendant le render des composants enfants
- Il ne capte pas tout seul les erreurs dans les events handlers ni les erreurs async (fetch, Promise) : c’est le rôle de `showBoundary`

## Ressources utiles

- Package react-error-boundary : <https://www.npmjs.com/package/react-error-boundary>
- Documentation et exemples : <https://github.com/bvaughn/react-error-boundary>
- React, Error Boundaries : <https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary>

## Erreurs fréquentes à éviter

- Oublier d’entourer les composants avec `<ErrorBoundary>` : l’erreur casse toute l’app
- Lancer une erreur dans un `onClick` et s’attendre à ce qu’elle soit captée sans `showBoundary`
- Oublier de passer `resetErrorBoundary` au bouton Réessayer

## Résultat attendu

- [ ] Un clic sur « Throw error » affiche le fallback au lieu d’un écran blanc
- [ ] L’erreur est loggée dans la console (onError)
- [ ] « Réessayer » remet l’application dans son état normal
- [ ] Une erreur dans un event ou un fetch affiche aussi le fallback grâce à showBoundary

Bon courage !
