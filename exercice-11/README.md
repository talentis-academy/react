> **Exercice 11 · Énoncé**

# Page Comments avec un custom hook

*Créer le custom hook useFetchApi et l’utiliser dans la page Comments.*

| | |
|---|---|
| **Moment** | Jour 3 · Module 07 · Custom hooks |
| **Durée** | 45 minutes |
| **Niveau** | Intermédiaire |
| **Prérequis** | useState, useEffect, fetch, async / await, custom hooks |

## Objectif pédagogique

Comprendre l’intérêt des custom hooks : réutiliser la même logique de fetch, propre et maintenable, sans copier-coller.

> **Remarque :** Le style est déjà prêt dans le template (App.css) : on se concentre sur le hook.

## Contexte

Le dossier `template/` contient une page `Comments` qui affiche de fausses données. Comme pour la page Users vue ensemble, on va charger les vrais commentaires depuis l’API, mais avec un custom hook : `useFetchApi(url)`.

## Étapes

1. Créer le custom hook `useFetchApi(url)` dans `src/hooks/useFetchApi.js` : il fait le fetch dans un `useEffect` et gère `isLoading`, `isError` et les données (`data`)
2. Le hook retourne `{ data, isLoading, isError }`
3. Dans `src/components/Comments.jsx`, remplacer les fausses données par l’appel au hook, avec l’API des commentaires
4. Afficher **Loading ...** pendant le chargement et un message si erreur (les classes CSS sont prêtes : `loading`, `error`)

**`API`**

```
https://jsonplaceholder.typicode.com/comments?postId=1
```

## Rappel : les règles des hooks

- Le nom d’un custom hook commence toujours par `use`
- On appelle les hooks au premier niveau du composant, jamais dans une condition ou une boucle
- Un custom hook ne remplace pas un composant : il retourne des valeurs et/ou des fonctions

## Ressources utiles

- React, réutiliser de la logique avec des hooks personnalisés : <https://react.dev/learn/reusing-logic-with-custom-hooks>
- Construire vos propres hooks (doc legacy) : <https://fr.legacy.reactjs.org/docs/hooks-custom.html>
- Les règles des hooks : <https://fr.legacy.reactjs.org/docs/hooks-rules.html>
- MDN, fetch : <https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch>
- API de test : <https://jsonplaceholder.typicode.com>

## Erreurs fréquentes à éviter

- Appeler le hook dans une condition : React perd l’ordre des hooks
- Oublier de retourner les valeurs du hook
- Oublier `setIsLoading(false)` dans le `finally`

## Résultat attendu

- [ ] Le hook `useFetchApi` existe dans `src/hooks/`
- [ ] La page Comments n’a pas de `useState` ni de `useEffect` pour le fetch
- [ ] Loading ... puis les vrais commentaires s’affichent

Bon courage !
