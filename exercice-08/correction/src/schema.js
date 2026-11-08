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
