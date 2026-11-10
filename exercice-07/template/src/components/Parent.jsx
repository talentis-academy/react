import Child from "./Child";

// Exercice 7 · template : l'interface est prête, à vous d'ajouter la logique (les TODO)
function Parent() {
  // TODO 1 : créer deux states
  //   - le message de l'ordre (au départ "Hello from Parent")
  //   - le statut de l'ordre (au départ "")

  // TODO 2 : créer une fonction getStatus() qui renvoie "Accepted", "Denied" ou "Pending"

  return (
    <div className="family">
      <div className="card">
        <img className="avatar" src="/avatars/maman.svg" alt="La maman" />
        <h2>Maman</h2>
        {/* TODO 3 : afficher le message du state à la place du texte en dur */}
        <p className="bubble">Hello from Parent</p>
        {/* TODO 4 : au clic, le message devient "Go to your room !" */}
        <button className="button button--primary">Send Order</button>
        <div>
          {/* TODO 7 : afficher le vrai statut avec getStatus() */}
          {/* Bonus : changer la classe status--pending selon le statut (status--accepted, status--denied) */}
          <p className="status status--pending">Order Status: Pending</p>
        </div>
      </div>

      {/* TODO 5 : passer à Child le prénom "Samir" et la fonction setOrderStatus */}
      <Child />
    </div>
  );
}

export default Parent;
