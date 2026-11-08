> **Exercice 8 · Correction**

# Formulaire d’enregistrement

*Correction complète, bonus compris. Le projet est dans le dossier « correction ».*

| | |
|---|---|
| **Énoncé** | Exercice_08_Enonce.docx |
| **Code** | Dossier `correction/` (projet Vite prêt à lancer) |

## Le schéma Zod

**`src/schema.js`**

```jsx
import { z } from "zod";

export const schema = z.object({
  fullName: z
    .string()
    .min(3, "Le nom doit contenir au moins 3 caractères")
    .max(50, "Le nom ne doit pas dépasser 50 caractères")
    .regex(/^[A-Za-zÀ-ÿ\s-]+$/, "Lettres uniquement"),
  email: z.string().email("Adresse email invalide"),
  experience: z
    .number({ message: "Indiquez un nombre" })
    .int("Nombre entier uniquement")
    .min(0, "Minimum 0")
    .max(10, "Maximum 10"),
  terms: z.boolean().refine((v) => v === true, "Vous devez accepter les conditions"),
});
```

## Le formulaire

**`src/RegisterForm.jsx`**

```jsx
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
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
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

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Envoi…" : "S’enregistrer"}
      </button>

      {isSubmitSuccessful && <p className="success">Enregistrement réussi !</p>}
    </form>
  );
}

export default RegisterForm;
```

## Points clés

- Toutes les règles sont dans un seul schéma Zod
- `zodResolver(schema)` relie Zod à React Hook Form
- `valueAsNumber: true` transforme la saisie en nombre avant la validation
- `isSubmitting` désactive le bouton et change son texte (bonus 2)
- `reset()` vide le formulaire après succès (bonus 3)
- `noValidate` désactive la validation native du navigateur : c’est Zod qui s’en charge

## Ressources utiles

- React Hook Form, useForm : <https://react-hook-form.com/docs/useform>
- Zod : <https://zod.dev>
