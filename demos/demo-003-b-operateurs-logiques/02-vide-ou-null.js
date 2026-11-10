// Démo 003-B · ?? (nullish coalescing) ne remplace que null et undefined, pas une chaîne vide

const vide = "";
const rien = null;
const pasDefini = undefined;

console.log(vide ?? "Néant"); // ""
console.log(rien ?? "Néant"); // "Néant"
console.log(pasDefini ?? "Néant"); // "Néant"

// L'opérateur ternaire ( ? : ), lui, teste vrai / faux : "" compte comme faux
console.log(vide ? vide : "Néant"); // "Néant"
