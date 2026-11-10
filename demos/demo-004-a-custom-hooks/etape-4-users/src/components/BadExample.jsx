import { useState } from "react";

// Hook dans un if (condition)
export default function Profile({ logged }) {
  console.log(logged);
  if (logged) {
    const [name, setName] = useState("Hicham"); // INTERDIT !
  }

  return <div>Profile</div>;
}

/*
Pourquoi c'est interdit ?
React garde une liste ordonnée des hooks:
  - Premier render (logged=true): Hook #1 = useState("Hicham")
  - Deuxième render (logged=false): Hook #1 = ??? (absent!)
  
React panique ! L'ordre des hooks a changé → crash ou bugs bizarres
*/

// Hook dans une boucle (for, map)
function List({ items }) {
  items.map((x) => {
    const [selected, setSelected] = useState(false); // INTERDIT !
    return <div>{x}</div>;
  });

  return null;
}

/*
Pourquoi c'est interdit ?
  - Si items = [A, B, C] → 3 hooks créés
  - Si items = [A, B] → 2 hooks maintenant
  
React: "Mais où est passé le 3ème hook ??" → crash
Le nombre de hooks ne doit JAMAIS changer entre les renders
*/

// Hook dans une fonction JS classique
function doSomething() {
  const [x, setX] = useState(0); // INTERDIT !
}

/*
Pourquoi c'est interdit ?
doSomething n'est ni:
  - Un composant React (devrait être DoSomething avec majuscule)
  - Un custom hook (devrait être useDoSomething)
  
React ne sait pas gérer les hooks en dehors de son système
*/

/*
RÈGLE D'OR DES HOOKS:
"Only Call Hooks at the Top Level"
  - Pas dans des conditions
  - Pas dans des boucles  
  - Pas dans des fonctions imbriquées
  - Toujours dans le même ordre à chaque render
*/
