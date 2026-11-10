// Démo 003-F · Destructuring in JavaScript ES6 (à lancer avec Quokka, ou node destructuring.js)

// 1) Tableau : sans destructuring
// Example of array destructuring
const users = ["Alice", "Bob", "Sara"];

// Without destructuring

const firstUser = users[0];
const secondUser = users[1];
const thirdUser = users[2];

console.log(firstUser, secondUser, thirdUser); // Output: Alice Bob Sara

// 2) Tableau : avec destructuring
// With destructuring
const [a, b, c] = users;

console.log(a, b, c); // Output: Alice Bob Sara

// 3) Tableau : destructuring + rest
// With destructuring + rest operator
// ...rest : « le reste » du tableau, rangé dans un nouveau tableau
const [userA, ...rest] = users;

console.log(userA); // Alice
console.log(rest); // output: [ 'Bob', 'Sara' ]

// 4) Tableau : spread
// With destructuring + spread operator
const newUsers = ["John", ...users, "Emma"];

console.log(newUsers); // Output: [ 'John', 'Alice', 'Bob', 'Sara', 'Emma' ]

// 5) Objet : sans destructuring
// Example of object destructuring
const person = { name: "Alice", age: 25, city: "London" };

// without destructuring
const personName = person.name;
const personAge = person.age;

console.log(personName, personAge); // Output: Alice 25

// 6) Objet : avec destructuring
// With destructuring
const { name, age } = person;

console.log(name, age); // Output: Alice 25

// 7) Objet : destructuring + rest
// With destructuring + rest operator
// name: UserName : on renomme name en UserName ; ...restInfo garde les autres propriétés
const { name: UserName, ...restInfo } = person;

console.log(UserName); // Alice
console.log(restInfo); // output: { age: 25, city: 'London' }

// 8) Objet : spread
// With destructuring + spread operator
const newUser = { ...person, city: "New York", country: "USA" };

console.log(newUser); // Output: { name: 'Alice', age: 25, city: 'New York', country: 'USA' }
