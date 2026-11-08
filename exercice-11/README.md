> **Exercice 11 · Énoncé**

# Page Comments avec un custom hook

*Factoriser le fetch avec un custom hook : useFetchApi.*

| | |
|---|---|
| **Moment** | Jour 3 · Module 07 · Custom hooks |
| **Durée** | 45 minutes |
| **Niveau** | Intermédiaire |
| **Prérequis** | useState, useEffect, fetch, async / await, custom hooks |

## Objectif pédagogique

Comprendre l’intérêt des custom hooks, éviter la duplication de code, et appliquer une logique de fetch réutilisable, propre et maintenable.

> **Remarque :** UI non obligatoire : l’accent est mis sur la logique et l’architecture, pas sur le design.

## Contexte

Dans le projet fait ensemble, le composant `Users` récupère ses données avec la logique de fetch : `isLoading`, `isError` et les données. On va réutiliser cette même logique pour créer une nouvelle page `Comments`, sans copier-coller.

## Étapes

1. Créer un custom hook `useFetchApi(url)` dans `src/hooks/useFetchApi` qui centralise la logique de fetch : gestion de `isLoading`, gestion de `isError`, récupération des données (`data`)
2. Le hook appelle l’API dans un `useEffect` et retourne `{ data, isLoading, isError }`
3. Créer une page `Comments` qui utilise ce hook pour consommer l’API des commentaires
4. Afficher **Loading ...** pendant le chargement, puis les commentaires (id, name, email)
5. Bonus : utiliser le même hook dans `Users`

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
- [ ] La page Comments n’a plus de `useState` ni de `useEffect` pour le fetch
- [ ] Loading ... puis la liste des commentaires s’affichent

Bon courage !
