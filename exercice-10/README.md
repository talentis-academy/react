> **Exercice 10 · Énoncé**

# Todo App

*Filtre, loading et toggle Done : améliorer une Todo App qui charge ses données depuis une API.*

| | |
|---|---|
| **Moment** | Jour 3 · Module 07 · useState et useEffect |
| **Durée** | 45 minutes |
| **Niveau** | Débutant à intermédiaire |
| **Prérequis** | useState, useEffect, map(), affichage conditionnel |

## Objectif pédagogique

Manipuler `useState`, `useEffect`, `map()`, l’affichage conditionnel et la mise à jour d’une liste d’objets.

> **Remarque :** L’UI peut rester simple, ce n’est pas obligatoire.

## Point de départ

On part de la Todo App faite ensemble (le dossier `template/`) : elle charge 10 todos depuis l’API, sans loading et sans filtre.

**`API`**

```
https://jsonplaceholder.typicode.com/todos?_limit=10
```

Chaque todo a la structure : `id`, `userId`, `title`, `completed`.

## Étapes

1. Ajouter un filtre pour afficher les todos : **All / Todo / Done**, avec un compteur sur chaque bouton (ex. « Todo (6) »)
2. Ajouter un état `loading` pour afficher un message **Loading...** pendant le chargement des données
3. Permettre de marquer une todo comme **Done / Todo** via une checkbox (ou un clic)
4. Ajouter un changement visuel quand une todo est terminée : texte barré, opacité plus faible

## Conseils

- Le filtre n’a pas besoin d’un state séparé pour la liste filtrée : on la **calcule** à partir de `todos` et de `filter`
- Charger les données une seule fois au montage : `useEffect(() => { ... }, [])`
- Pour modifier une todo, créer un **nouveau tableau** avec `map` et le spread `{ ...t, completed: !t.completed }`
- Mettre `setLoading(false)` dans le `finally` du `try / catch`

## Bonus (optionnel)

- Mettre en gras le bouton du filtre actif
- Ajouter un `useEffect` qui fait un `console.log` à chaque changement de filtre (dépendance `[filter]`)

## Ressources utiles

- React, synchroniser avec des effets (useEffect) : <https://react.dev/learn/synchronizing-with-effects>
- React, mettre à jour un tableau dans le state : <https://react.dev/learn/updating-arrays-in-state>
- React, afficher des listes : <https://react.dev/learn/rendering-lists>
- MDN, fetch : <https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch>
- API de test : <https://jsonplaceholder.typicode.com>

## Erreurs fréquentes à éviter

- Oublier le tableau de dépendances `[]` : l’appel API se relance à chaque render (boucle infinie)
- Modifier directement la todo (`todo.completed = !todo.completed`) au lieu de créer un nouveau tableau
- Stocker la liste filtrée dans un deuxième state : elle se désynchronise de `todos`

## Résultat attendu

- [ ] Loading... s’affiche pendant le chargement
- [ ] Les boutons All / Todo / Done filtrent la liste et affichent leur compteur
- [ ] Cocher une todo la barre et la passe en Done
- [ ] Les compteurs se mettent à jour

Bon courage !
