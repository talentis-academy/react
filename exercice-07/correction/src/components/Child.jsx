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
