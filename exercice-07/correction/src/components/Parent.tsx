import { useState } from "react";

function Parent() {
  const [parentMessage, setParentMessage] = useState("Hello from Parent");
  const [orderStatus, setOrderStatus] = useState("");

  const getStatus = () => {
    if (orderStatus === "accepted") return "Accepted";
    if (orderStatus === "denied") return "Denied";
    return "Pending";
  };
  return (
    <div>
      <div className="container">
        <h2>{parentMessage}</h2>
        <button
          className="button"
          onClick={() => setParentMessage("Go to your room !")}
        >
          Send Order
        </button>
      </div>
      <div>
        <h3>{`Order Status: ${getStatus()}`}</h3>
      </div>
      <hr />
      <Child name={"Samir"} setOrderStatus={setOrderStatus} />
    </div>
  );
}

function Child({ name, setOrderStatus }) {
  return (
    <div>
      <h3>{`Hello ${name}, I am your Child`}</h3>
      <button className="button" onClick={() => setOrderStatus("accepted")}>
        Accepter
      </button>
      <button className="button" onClick={() => setOrderStatus("denied")}>
        Deny
      </button>
    </div>
  );
}

export default Parent;
