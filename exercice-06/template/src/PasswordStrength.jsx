// Exercice 6 · template : l'interface et le CSS sont prêts (index.css), à vous d'ajouter la logique (les TODO)

// TODO 3 : écrire getStrength(password) : compter les règles respectées dans un score (let score = 0, +1 par règle)
//          une majuscule /[A-Z]/, un chiffre /[0-9]/, un caractère spécial /[^A-Za-z0-9]/ (.test() renvoie true ou false)
//          et renvoyer le message et la couleur : vide → « Saisissez un mot de passe » (gris),
//          0 ou 1 règle → « Faible » (rouge), 2 règles → « Moyen » (orange), 3 règles → « Fort » (vert)

function PasswordStrength() {
  // TODO 1 : un state password (au départ "")

  return (
    <div className="card">
      <h1>Force du mot de passe</h1>
      <label>
        Mot de passe
        {/* TODO 2 : relier l'input au state avec value et onChange (e.target.value) */}
        <input type="password" />
      </label>

      {/* TODO 4 : afficher « Force : … » avec la couleur renvoyée par getStrength */}
      <p>Force : </p>

      {/* Bonus : la barre de progression grandit avec la force (vide, 1/3, 2/3, pleine) : style width et background de .bar-fill */}
      <div className="bar">
        <div className="bar-fill" />
      </div>
    </div>
  );
}

export default PasswordStrength;
