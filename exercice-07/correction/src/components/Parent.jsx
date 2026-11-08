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
    <div className="card">
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
