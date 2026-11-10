// Étape 4 : validation avec Zod seul (safeParse), sans librairie de formulaire
import { useState } from "react";
import * as z from "zod";

// Le schéma Zod : les règles que chaque champ doit respecter
const formSchema = z.object({
  email: z.string().email("Email invalide"),
  // Deux règles sur le mot de passe, testées dans l'ordre :
  // .min(1) : le champ ne doit pas être vide → message « Mot de passe obligatoire »
  // .min(6) : au moins 6 caractères → message « Min 6 caractères »
  password: z
    .string()
    .min(1, "Mot de passe obligatoire")
    .min(6, "Min 6 caractères"),
});

function Form() {
  const [isError, setIsError] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const handleSubmit = (event) => {
    // preventDefault : empêche le navigateur de recharger la page à l'envoi
    event.preventDefault();

    // récupérer les valeurs depuis le formulaire
    const formData = new FormData(event.currentTarget);

    const email = String(formData.get("email") ?? "");
    const password = String(formData.get("password") ?? "");

    // validation Zod sans try/catch
    const result = formSchema.safeParse({ email, password });
    if (result.success) {
      setIsConnected(true);
    } else {
      setIsError(true);
    }
  };

  return (
    <div className="container">
      <h1>Login Component</h1>
      <h2>Enter your login credentials</h2>

      {isConnected ? (
        <div className="success">Welcome to private page</div>
      ) : (
        <form name="login-form" onSubmit={handleSubmit}>
          <div className="form">
            <div className="form-group">
              <label>Email</label>
              {/* name obligatoire pour FormData */}
              <input name="email" type="text" />
            </div>

            <div className="form-group">
              <label>Password</label>
              {/* name obligatoire pour FormData */}
              <input name="password" type="password" />
            </div>

            {isError && (
              <p className="error">
                {"Please enter valid email and password."}
              </p>
            )}

            <button className="btn" type="submit">
              Login
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Form;
