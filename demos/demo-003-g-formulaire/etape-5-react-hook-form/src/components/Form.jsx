// Étape 5 (version finale) : React Hook Form + Zod, reliés par zodResolver
// useForm : le hook qui gère le formulaire
import { useForm } from "react-hook-form";
import { z } from "zod";
// zodResolver : relie React Hook Form à Zod
import { zodResolver } from "@hookform/resolvers/zod";

// Le schéma Zod : les règles que chaque champ doit respecter
const schema = z.object({
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
  const {
    register, // relie un champ au formulaire
    handleSubmit, // valide, puis appelle onSubmit si tout est bon
    formState: { errors, isSubmitSuccessful, isValid }, // les erreurs, envoi réussi, formulaire valide
  } = useForm({
    // zodResolver : React Hook Form valide les champs avec le schéma Zod
    resolver: zodResolver(schema),
    defaultValues: { email: "", password: "" },
    mode: "onSubmit",
  });

  const onSubmit = (data) => {
    console.log("Send to server:", data); // ici tu fais ton appel API
  };

  return (
    <div className="container">
      <h1>Login Component</h1>
      <h2>Enter your login credentials</h2>

      {isSubmitSuccessful ? (
        <div className="success">Welcome to private page</div>
      ) : (
        <form name="login-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form">
            <div className="form-group">
              <label>Email</label>
              {/* register("email") : relie le champ à React Hook Form (valeur, onChange…) */}
              <input type="text" {...register("email")} />
              {errors.email && (
                <p className="error">{errors.email.message}</p>
              )}
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" {...register("password")} />
              {errors.password && (
                <p className="error">{errors.password.message}</p>
              )}
            </div>

            {Object.keys(errors).length > 0 && (
              <p className="error">Veuillez corriger les champs invalides.</p>
            )}

            {isValid && <p className="success">Form valid (ready to send)</p>}

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
