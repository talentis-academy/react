> **Exercice 7 · Correction**

# La maman et l’enfant

*La logique ajoutée dans le template (le CSS ne change pas).*

| | |
|---|---|
| **Énoncé** | Exercice_07_Enonce.docx |
| **Template** | Dossier `template/` (l’interface est prête, sans la logique) |
| **Code** | Dossier `correction/` (projet Vite prêt à lancer) |
| **Source** | Projet du formateur : Formation/Projets/parent-todo |

## Parent

**`src/components/Parent.jsx`**

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

## Child

**`src/components/Child.jsx`**

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

## Points clés

- Le state vit dans le parent : c’est lui qui garde l’information
- Les données descendent en props (`name`)
- L’information remonte grâce à la fonction `setOrderStatus` passée en props
- `() => setOrderStatus("accepted")` : la fonction est appelée seulement au clic
- Bonus : `status--${getStatus().toLowerCase()}` donne `status--pending`, `status--accepted` ou `status--denied` (classes déjà prêtes dans `App.css`)

## Ressources utiles

- React, partager le state entre composants : <https://react.dev/learn/sharing-state-between-components>
