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
