# Démo 003-D · Le tableau : les étapes

Fichier : `01-tableau.js`. On part de quelques lignes, puis on ajoute une partie à chaque étape. Sous chaque étape : le résultat attendu dans la console.

## Étape 1 · Créer un tableau (le départ)

```js
// 1️ Créer un tableau
// Un tableau permet de stocker plusieurs valeurs dans une seule variable
const users = ["Alice", "Bob", "Sara"];

console.log("Initial:", users);
// users = ["Alice", "Bob", "Sara"]
```

**Résultat attendu (console)**

```
Initial: [ 'Alice', 'Bob', 'Sara' ]
```

## Étape 2 · on ajoute : Trouver l’index d’un élément

```js
// 2️ Trouver l’index d’un élément
// indexOf retourne la position (index) de l’élément
// Si l’élément n’existe pas, il retourne -1
const indexBob = users.indexOf("Bob");
console.log("Index de Bob:", indexBob); // 1

// Exemple si l’élément n’existe pas
console.log(users.indexOf("John")); // -1

// indexOf NE modifie PAS le tableau
```

**Résultat attendu (console)**

```
Index de Bob: 1
-1
```

## Étape 3 · on ajoute : Ajouter un élément à la fin du tableau

```js
// 3️ Ajouter un élément à la fin du tableau
// push ajoute un élément à la fin
// push MODIFIE le tableau original
// push retourne la nouvelle longueur du tableau
users.push("Emma");
console.log("Après push:", users);
// ["Alice", "Bob", "Sara", "Emma"]
```

**Résultat attendu (console)**

```
Après push: [ 'Alice', 'Bob', 'Sara', 'Emma' ]
```

## Étape 4 · on ajoute : Ajouter un élément au début du tableau

```js
// 4️ Ajouter un élément au début du tableau
// unshift ajoute un élément au début
// unshift MODIFIE le tableau
// unshift retourne la nouvelle longueur
users.unshift("John");
console.log("Après unshift:", users);
// ["John", "Alice", "Bob", "Sara", "Emma"]
```

**Résultat attendu (console)**

```
Après unshift: [ 'John', 'Alice', 'Bob', 'Sara', 'Emma' ]
```

## Étape 5 · on ajoute : Supprimer le dernier élément

```js
// 5️ Supprimer le dernier élément
// pop supprime le dernier élément
// pop MODIFIE le tableau
// pop retourne l’élément supprimé
users.pop();
console.log("Après pop:", users);
// ["John", "Alice", "Bob", "Sara"]
```

**Résultat attendu (console)**

```
Après pop: [ 'John', 'Alice', 'Bob', 'Sara' ]
```

## Étape 6 · on ajoute : Supprimer le premier élément

```js
// 6️ Supprimer le premier élément
// shift supprime le premier élément
// shift MODIFIE le tableau
// shift retourne l’élément supprimé
users.shift();
console.log("Après shift:", users);
// ["Alice", "Bob", "Sara"]
```

**Résultat attendu (console)**

```
Après shift: [ 'Alice', 'Bob', 'Sara' ]
```

## Étape 7 · on ajoute : Supprimer un élément par index

```js
// 7️ Supprimer un élément par index
// splice permet de supprimer ou ajouter des éléments
// splice(index, nombreASupprimer)
// splice MODIFIE le tableau
// splice retourne un tableau des éléments supprimés

//1 (premier param) = l’index de départ
//1 (deuxième param) = combien d’éléments supprimer

users.splice(1, 1);
console.log("Après suppression par index:", users);
// ["Alice", "Sara"]
```

**Résultat attendu (console)**

```
Après suppression par index: [ 'Alice', 'Sara' ]
```

## Étape 8 · on ajoute : Ajouter un élément à un index précis

```js
// 8️Ajouter un élément à un index précis
// splice(index, 0, element)
// 0 = on ne supprime rien, on ajoute seulement

// 1 = position où insérer
// 0 = nombre d’éléments à supprimer (ici aucun)
// "Lucas" = élément à ajouter

users.splice(1, 0, "Lucas");
console.log("Après insertion à un index:", users);
// ["Alice", "Lucas", "Sara"]
```

**Résultat attendu (console)**

```
Après insertion à un index: [ 'Alice', 'Lucas', 'Sara' ]
```

## Étape 9 · on ajoute : Inverser l’ordre du tableau

```js
// 9️ Inverser l’ordre du tableau
// reverse inverse l’ordre des éléments
// reverse MODIFIE le tableau original
users.reverse();
console.log("Après reverse:", users);
// ["Sara", "Lucas", "Alice"]
```

**Résultat attendu (console)**

```
Après reverse: [ 'Sara', 'Lucas', 'Alice' ]
```

## Étape 10 · on ajoute : Parcourir le tableau

```js
// Parcourir le tableau
// forEach permet de parcourir chaque élément
// forEach NE retourne rien (undefined)
// Il sert uniquement à exécuter une action
users.forEach((user, index) => {
  console.log(index, user);
});
```

**Résultat attendu (console)**

```
0 Sara
1 Lucas
2 Alice
```
