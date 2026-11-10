// TODO 5 : récupérer name et setOrderStatus dans les props
function Child() {
  return (
    <div className="card card--child">
      <img className="avatar" src="/avatars/enfant.svg" alt="L’enfant" />
      <h2>Enfant</h2>
      {/* TODO 5 : afficher le prénom reçu en props à la place de "Samir" */}
      <p className="bubble">Hello Samir, I am your Child</p>
      <div className="actions">
        {/* TODO 6 : au clic, mettre le statut à "accepted" ou à "denied" */}
        <button className="button button--accept">Accepter</button>
        <button className="button button--deny">Deny</button>
      </div>
    </div>
  );
}

export default Child;
