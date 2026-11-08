> **Exercice 5 · Énoncé**

# Manipuler un tableau

*Lire, ajouter, supprimer et transformer un tableau d’objets en JavaScript.*

| | |
|---|---|
| **Moment** | Jour 2 · Module 04 · Rappels ES6 et tableaux |
| **Durée** | 20 minutes |
| **Niveau** | Débutant |
| **Outils** | Un fichier HTML et la console du navigateur (un fichier `.html` à créer ; la correction est dans `correction.html`) |

## Objectifs de l’exercice

- Manipuler un tableau sans modèle direct
- Connaître les méthodes essentielles : `push`, `unshift`, `findIndex`, `splice`, `reverse`

## Données de départ

**`exercice.html`**

```
const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" },
  { id: 3, name: "Tablet" },
];
```

## Consignes

1. Afficher le tableau dans la console
2. Ajouter `{ id: 4, name: "Headphones" }` à la fin du tableau
3. Ajouter `{ id: 0, name: "Monitor" }` au début du tableau
4. Trouver l’index du produit dont `name === "Phone"`
5. Supprimer le produit « Phone » du tableau, à partir de son index
6. Inverser l’ordre du tableau
7. Afficher le tableau final

## Conseils techniques

- Ouvrir le fichier dans le navigateur, puis la console (F12 ou Cmd + Option + J)
- Afficher le tableau après chaque étape avec `console.log` pour voir l’évolution
- Attention : `indexOf` ne marche pas pour chercher un objet par une de ses propriétés

## Ressources utiles

- MDN, les tableaux (Array) : <https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array>
- MDN, findIndex : <https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex>
- MDN, splice : <https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/splice>

## Résultat attendu

- [ ] Les 7 étapes s’affichent dans la console
- [ ] « Phone » n’est plus dans le tableau
- [ ] Le tableau final commence par « Headphones » et finit par « Monitor »

Bon courage !
