// Démo 003-B · À vous : devinez le résultat de chaque ligne, puis vérifiez

const brand = "BMW";
const price = 0;
const year = null;

console.log(!brand); // ! : NOT
console.log(!!price); // !! : double NOT
console.log(price && "Prix : " + price); // && : AND
console.log(year ?? "Année inconnue"); // ?? : nullish coalescing
console.log(price ? price + " €" : "Prix non communiqué"); // ? : : ternaire
console.log(price ?? "Prix non communiqué"); // ?? : nullish coalescing
