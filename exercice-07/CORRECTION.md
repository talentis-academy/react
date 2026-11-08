> **Exercice 7 · Correction**

# La maman et l’enfant

*Correction complète, bonus compris. Le projet est dans le dossier « correction ».*

| | |
|---|---|
| **Énoncé** | Exercice_07_Enonce.docx |
| **Code** | Dossier `correction/` (projet Vite prêt à lancer) |

## Le parent

**`src/components/Parent.jsx`**

```jsx
import { useState } from "react";
import Child from "./Child";

function Parent() {
  const [parentMessage, setParentMessage] = useState("");
  const [orderStatus, setOrderStatus] = useState("");

  const getStatus = () => {
    if (orderStatus === "accepted") return "Accepté";
    if (orderStatus === "denied") return "Refusé";
    return "En attente";
  };

  return (
    <div>
      <h2>Maman</h2>
      <button onClick={() => setParentMessage("Range ta chambre !")}>
        Envoyer l’ordre
      </button>
      <h3>{`Statut de l’ordre : ${getStatus()}`}</h3>
      <hr />
      <Child
        name="Samir"
        message={parentMessage}
        setOrderStatus={setOrderStatus}
      />
    </div>
  );
}

export default Parent;
```

## L’enfant

**`src/components/Child.jsx`**

```jsx
function Child({ name, message, setOrderStatus }) {
  return (
    <div>
      <h3>{`Bonjour ${name}`}</h3>
      {message && <p>Maman dit : {message}</p>}
      <button disabled={!message} onClick={() => setOrderStatus("accepted")}>
        Accepter
      </button>
      <button disabled={!message} onClick={() => setOrderStatus("denied")}>
        Refuser
      </button>
    </div>
  );
}

export default Child;
```

## Points clés

- Le state vit dans le parent : c’est lui qui « possède » l’information
- Les données descendent en props (`name`, `message`)
- L’information remonte grâce à la fonction `setOrderStatus` passée en props
- `() => setOrderStatus("accepted")` : la fonction est appelée seulement au clic
- Bonus : `disabled={!message}` bloque les boutons tant qu’il n’y a pas d’ordre

## Ressources utiles

- React, partager le state entre composants : <https://react.dev/learn/sharing-state-between-components>
