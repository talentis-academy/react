# Exercice 07 · La maman et l’enfant : le code complet

Tous les fichiers de la correction (dossier correction/), en entier, pour suivre la correction. Fichiers utilisés : ceux atteints par les imports depuis src/main.* ; les fichiers du gabarit Vite non modifiés sont seulement listés. Ordre de lecture : main → App → composants et pages → le reste.

## `correction`

*Styles fournis (copiés tels quels, pas tapés en live) : `src/App.css` (137 lignes)*

*Fichiers générés par Vite, non modifiés (non affichés) : `vite.config.js`, `.gitignore`, `eslint.config.js`, `public/vite.svg`, `package.json`*

*Images utilisées (non affichées) : `public/avatars/enfant.svg`, `public/avatars/maman.svg`*

### `correction/src/main.jsx` (6 lignes)

```jsx
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <App />
);
```

### `correction/src/App.jsx` (16 lignes)

```jsx
import "./App.css";
import Parent from "./components/Parent";

function App() {
  return (
    <div>
      <div className="header">
        <h1>La maman et l’enfant</h1>
        <p>La maman donne un ordre, l’enfant répond.</p>
      </div>
      <Parent />
    </div>
  );
}

export default App;
```

### `correction/src/components/Parent.jsx` (41 lignes)

```jsx
import { useState } from "react";
import Child from "./Child";

// Exercice 7 · correction : le parent garde les states, l'enfant reçoit une fonction pour remonter sa réponse
function Parent() {
  const [parentMessage, setParentMessage] = useState("Hello from Parent");
  const [orderStatus, setOrderStatus] = useState("");

  const getStatus = () => {
    if (orderStatus === "accepted") return "Accepted";
    if (orderStatus === "denied") return "Denied";
    return "Pending";
  };

  return (
    <div className="family">
      <div className="card">
        <img className="avatar" src="/avatars/maman.svg" alt="La maman" />
        <h2>Maman</h2>
        <p className="bubble">{parentMessage}</p>
        <button
          className="button button--primary"
          onClick={() => setParentMessage("Go to your room !")}
        >
          Send Order
        </button>
        <div>
          {/* Bonus : la classe change avec le statut (status--pending, status--accepted, status--denied) */}
          <p className={`status status--${getStatus().toLowerCase()}`}>
            {`Order Status: ${getStatus()}`}
          </p>
        </div>
      </div>

      {/* On passe le prénom ET la fonction setOrderStatus : c'est l'enfant qui va l'appeler */}
      <Child name={"Samir"} setOrderStatus={setOrderStatus} />
    </div>
  );
}

export default Parent;
```

### `correction/src/components/Child.jsx` (21 lignes)

```jsx
// L'enfant reçoit son prénom et la fonction du parent dans les props
function Child({ name, setOrderStatus }) {
  return (
    <div className="card card--child">
      <img className="avatar" src="/avatars/enfant.svg" alt="L’enfant" />
      <h2>Enfant</h2>
      <p className="bubble">{`Hello ${name}, I am your Child`}</p>
      <div className="actions">
        {/* () => : la fonction est appelée au clic, pas tout de suite */}
        <button className="button button--accept" onClick={() => setOrderStatus("accepted")}>
          Accepter
        </button>
        <button className="button button--deny" onClick={() => setOrderStatus("denied")}>
          Deny
        </button>
      </div>
    </div>
  );
}

export default Child;
```

### `correction/index.html` (13 lignes)

```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>La maman et l’enfant</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```
