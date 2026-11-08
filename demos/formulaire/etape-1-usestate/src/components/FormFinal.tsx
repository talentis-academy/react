import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email("Email invalide"),
  password: z
    .string()
    .min(1, "Mot de passe obligatoire")
    .min(6, "Min 6 caractères"),
  // Champ supplémentaire "Experience"
  experience: z
    .number()
    .int("Nombre entier uniquement")
    .min(0, "Min = 0")
    .max(10, "Max = 10"),
  // Checkbox "Terms & Conditions"
  terms: z
    .boolean()
    .refine(
      (v) => v === true,
      "Vous devez accepter les Conditions d'utilisation"
    ),
});

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isValid },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { email: "", password: "", experience: 0, terms: false },
    mode: "onSubmit",
  });

  const onSubmit = (data: any) => {
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
              <input type="text" {...register("email")} />
              {errors.email && (
                <p className="error">{errors.email.message as string}</p>
              )}
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" {...register("password")} />
              {errors.password && (
                <p className="error">{errors.password.message as string}</p>
              )}
            </div>

            <div className="form-group">
              <label>Experience</label>
              <input
                type="number" // Changé de "text" à "number"
                {...register("experience", { valueAsNumber: true })} // Ajouté valueAsNumber
              />
              {errors.experience && (
                <p className="error">{errors.experience.message as string}</p>
              )}
            </div>

            {/* Terms & Conditions */}
            <div className="form-group">
              <label className="checkbox">
                <input type="checkbox" {...register("terms")} />
                <span>
                  J’accepte les{" "}
                  <a href="#" target="_blank" rel="noreferrer">
                    Conditions d’utilisation
                  </a>
                </span>
              </label>
              {errors.terms && (
                <p className="error">{errors.terms.message as string}</p>
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
