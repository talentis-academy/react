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
