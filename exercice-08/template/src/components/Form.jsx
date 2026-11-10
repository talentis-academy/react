// Exercice 8 · template : l'interface est prête, à vous d'ajouter la validation (les TODO)
// TODO 1 : installer les librairies : npm install react-hook-form zod @hookform/resolvers
//          puis importer useForm, z et zodResolver

// TODO 2 : créer le schéma Zod
//   - fullName : 3 à 50 caractères, lettres uniquement
//   - email : format valide
//   - experience : nombre entier entre 0 et 10
//   - terms (bonus) : la case doit être cochée

function Form() {
  // TODO 3 : appeler useForm avec zodResolver(schema), les defaultValues et mode: "onSubmit"
  // TODO 4 : créer la fonction onSubmit(data), qui affiche les données dans la console

  return (
    <div className="container">
      <h1>Register Component</h1>
      <h2>Enter your information</h2>

      {/* TODO 7 : si l'envoi a réussi (isSubmitSuccessful), afficher « Enregistrement OK » à la place du formulaire */}
      {/* TODO 5 : brancher le formulaire : onSubmit={handleSubmit(onSubmit)} */}
      <form name="login-form">
        <div className="form">
          <div className="form-group">
            <label>Full name</label>
            {/* TODO 5 : relier chaque champ avec register("...") */}
            <input type="text" />
            {/* TODO 6 : sous chaque champ, afficher le message d'erreur (errors.fullName.message) */}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>Experience</label>
            {/* Astuce : register("experience", { valueAsNumber: true }) pour avoir un nombre */}
            <input type="number" />
          </div>

          {/* Terms & Conditions (bonus) */}
          <div className="form-group">
            <label className="checkbox">
              <input type="checkbox" />
              <span>
                J’accepte les{" "}
                <a href="#" target="_blank" rel="noreferrer">
                  Conditions d’utilisation
                </a>
              </span>
            </label>
          </div>

          <button className="btn" type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
