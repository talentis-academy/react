# Démo 003-F · Destructuring : les étapes

Fichier : `destructuring.js`. On part de quelques lignes, puis on ajoute une partie à chaque étape. Sous chaque étape : le résultat attendu dans la console.

## Étape 1 · Tableau : sans destructuring (le départ)

```js
// 1) Tableau : sans destructuring
// Example of array destructuring
const users = ["Alice", "Bob", "Sara"];

// Without destructuring

const firstUser = users[0];
const secondUser = users[1];
const thirdUser = users[2];

console.log(firstUser, secondUser, thirdUser); // Output: Alice Bob Sara
```

**Résultat attendu (console)**

```
Alice Bob Sara
```

## Étape 2 · on ajoute : Tableau : avec destructuring

```js
// 2) Tableau : avec destructuring
// With destructuring
const [a, b, c] = users;

console.log(a, b, c); // Output: Alice Bob Sara
```

**Résultat attendu (console)**

```
Alice Bob Sara
```

## Étape 3 · on ajoute : Tableau : destructuring + rest

```js
// 3) Tableau : destructuring + rest
// With destructuring + rest operator
// ...rest : « le reste » du tableau, rangé dans un nouveau tableau
const [userA, ...rest] = users;

console.log(userA); // Alice
console.log(rest); // output: [ 'Bob', 'Sara' ]
```

**Résultat attendu (console)**

```
Alice
[ 'Bob', 'Sara' ]
```

## Étape 4 · on ajoute : Tableau : spread

```js
// 4) Tableau : spread
// With destructuring + spread operator
const newUsers = ["John", ...users, "Emma"];

console.log(newUsers); // Output: [ 'John', 'Alice', 'Bob', 'Sara', 'Emma' ]
```

**Résultat attendu (console)**

```
[ 'John', 'Alice', 'Bob', 'Sara', 'Emma' ]
```

## Étape 5 · on ajoute : Objet : sans destructuring

```js
// 5) Objet : sans destructuring
// Example of object destructuring
const person = { name: "Alice", age: 25, city: "London" };

// without destructuring
const personName = person.name;
const personAge = person.age;

console.log(personName, personAge); // Output: Alice 25
```

**Résultat attendu (console)**

```
Alice 25
```

## Étape 6 · on ajoute : Objet : avec destructuring

```js
// 6) Objet : avec destructuring
// With destructuring
const { name, age } = person;

console.log(name, age); // Output: Alice 25
```

**Résultat attendu (console)**

```
Alice 25
```

## Étape 7 · on ajoute : Objet : destructuring + rest

```js
// 7) Objet : destructuring + rest
// With destructuring + rest operator
// name: UserName : on renomme name en UserName ; ...restInfo garde les autres propriétés
const { name: UserName, ...restInfo } = person;

console.log(UserName); // Alice
console.log(restInfo); // output: { age: 25, city: 'London' }
```

**Résultat attendu (console)**

```
Alice
{ age: 25, city: 'London' }
```

## Étape 8 · on ajoute : Objet : spread

```js
// 8) Objet : spread
// With destructuring + spread operator
const newUser = { ...person, city: "New York", country: "USA" };

console.log(newUser); // Output: { name: 'Alice', age: 25, city: 'New York', country: 'USA' }
```

**Résultat attendu (console)**

```
{ name: 'Alice', age: 25, city: 'New York', country: 'USA' }
```
