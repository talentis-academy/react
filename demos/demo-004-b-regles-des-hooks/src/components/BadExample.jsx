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
doSomething n'est ni :
  - un composant React (il faudrait DoSomething, avec une majuscule)
  - un custom hook (il faudrait useDoSomething)

Les hooks ne marchent que pendant le render d'un composant.
Si doSomething est appelée ailleurs (au clic, dans un setTimeout…) → erreur « Invalid hook call ».
Et avec ce nom, ESLint (npm run lint) signale l'erreur : il repère les hooks grâce à la majuscule et au « use ».
*/

// Hook dans une fonction imbriquée (handler, callback)
function Counter() {
  const handleClick = () => {
    const [count, setCount] = useState(0); // INTERDIT !
  };

  return <button onClick={handleClick}>+1</button>;
}

/*
Pourquoi c'est interdit ?
handleClick est appelée au clic, pas pendant le render du composant.
Au clic, React plante → erreur « Invalid hook call ».

Le hook doit être au début du composant, et le handler l'utilise :
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);
*/

/*
RÈGLE D'OR DES HOOKS:
"Only Call Hooks at the Top Level"
  - Pas dans des conditions
  - Pas dans des boucles  
  - Pas dans des fonctions imbriquées
  - Toujours dans le même ordre à chaque render
*/
