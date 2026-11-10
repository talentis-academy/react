// Démo 003-B · Première condition (slide 10)
// Si la voiture n'a pas de couleur, on affiche : Couleur : Néant

const car = { brand: "Toyota", color: "" };

// Avec let + if / else
let color;
if (car.color) {
  color = car.color;
} else {
  color = "Néant";
}
console.log("Couleur : " + color);

// Avec const + opérateur ternaire ( ? : ) (avant le JSX)
const label = car.color ? car.color : "Néant";
console.log("Couleur : " + label);

// Directement dans le JSX, avec l'opérateur ternaire : <p>Couleur : {car.color ? car.color : "Néant"}</p>
// (à faire dans le projet Voitures)
