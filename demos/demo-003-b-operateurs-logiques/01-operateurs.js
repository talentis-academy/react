// Démo 003-B · Opérateurs logiques essentiels (slide 09)
// Changer la valeur de carColor et regarder les résultats : "blue", "", null, undefined

const carColor = ""; // peut être "blue", "", null, undefined

// ! (NOT) : inverse
console.log(!carColor); // true si carColor est vide / null / undefined

// !! : convertir en vrai/faux (boolean)
const hasColor = !!carColor; // false si vide, true si "blue"
console.log(hasColor);

// && : afficher seulement si vrai (en JSX : {carColor && <p>Couleur : {carColor}</p>})
console.log(carColor && "Couleur : " + carColor);

// ?: (ternaire) : afficher l'un ou l'autre
console.log("Couleur : " + (carColor ? carColor : "Néant"));

// ?? (nullish coalescing) : fallback seulement si null ou undefined
const label = carColor ?? "Néant";
console.log(label);
