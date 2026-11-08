import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./schema";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function RegisterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { fullName: "", email: "", experience: 0, terms: false },
    mode: "onSubmit",
  });

  const onSubmit = async (data) => {
    await wait(800); // simule un appel API
    console.log("Envoyé :", data);
    reset(); // bonus 3
  };

  return (
    <form className="card" onSubmit={handleSubmit(onSubmit)} noValidate>
      <h1>Inscription</h1>

      <label>Nom complet</label>
      <input {...register("fullName")} />
      {errors.fullName && <p className="error">{errors.fullName.message}</p>}

      <label>Email</label>
      <input type="email" {...register("email")} />
      {errors.email && <p className="error">{errors.email.message}</p>}

      <label>Années d’expérience</label>
      <input type="number" {...register("experience", { valueAsNumber: true })} />
      {errors.experience && <p className="error">{errors.experience.message}</p>}

      <label className="checkbox">
        <input type="checkbox" {...register("terms")} /> J’accepte les conditions
      </label>
      {errors.terms && <p className="error">{errors.terms.message}</p>}

      <p>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Envoi…" : "S’enregistrer"}
        </button>
      </p>

      {isSubmitSuccessful && <p className="success">Enregistrement réussi !</p>}
    </form>
  );
}

export default RegisterForm;
