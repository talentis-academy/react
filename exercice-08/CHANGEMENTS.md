# Exercice 08 · Formulaire d’enregistrement : les changements entre les étapes

Pour chaque étape, ce qui change par rapport à l’étape précédente. En vert : les lignes ajoutées. En rouge : les lignes retirées. « utilisé » : un fichier qui existait déjà mais qui est branché (importé) à partir de cette étape, montré en entier.

## Point de départ : `template`

Le code de départ, en entier : les fichiers écrits pour la démo et utilisés (atteints par les imports depuis src/main.*) ; les fichiers du gabarit Vite non modifiés sont seulement listés. Ordre de lecture : main → App → composants et pages → le reste.

*Styles fournis (copiés tels quels, pas tapés en live) : `src/App.css` (195 lignes)*

*Fichiers générés par Vite, non modifiés (non affichés) : `index.html`, `vite.config.js`, `.gitignore`, `eslint.config.js`, `public/vite.svg`, `package.json`*

### `src/main.jsx` (6 lignes)

```jsx
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <App />
);
```

### `src/App.jsx` (8 lignes)

```jsx
import "./App.css";
import Form from "./components/Form";

function App() {
  return <Form />;
}

export default App;
```

### `src/components/Form.jsx` (64 lignes)

```jsx
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
```

## Étape 1 → 2 : `template` → `correction`

La validation avec React Hook Form et Zod : le schéma, useForm avec zodResolver, register et les messages d’erreur.

### `package.json` (modifié, +4 −1)

```diff
@@ -10,8 +10,11 @@
     "preview": "vite preview"
   },
   "dependencies": {
+    "@hookform/resolvers": "^5.2.2",
     "react": "^19.2.0",
-    "react-dom": "^19.2.0"
+    "react-dom": "^19.2.0",
+    "react-hook-form": "^7.68.0",
+    "zod": "^4.2.1"
   },
   "devDependencies": {
     "@eslint/js": "^9.39.1",
```

### `src/components/Form.jsx` (modifié, +98 −49)

```diff
@@ -1,62 +1,111 @@
-// Exercice 8 · template : l'interface est prête, à vous d'ajouter la validation (les TODO)
-// TODO 1 : installer les librairies : npm install react-hook-form zod @hookform/resolvers
-//          puis importer useForm, z et zodResolver
+// Exercice 8 · correction : le template + la validation avec React Hook Form et Zod
+import { useForm } from "react-hook-form";
+import { z } from "zod";
+import { zodResolver } from "@hookform/resolvers/zod";
 
-// TODO 2 : créer le schéma Zod
-//   - fullName : 3 à 50 caractères, lettres uniquement
-//   - email : format valide
-//   - experience : nombre entier entre 0 et 10
-//   - terms (bonus) : la case doit être cochée
+const schema = z.object({
+  // Champ "Nom complet"
+  fullName: z
+    .string()
+    .min(3, "Min 3 caractères")
+    .max(50, "Max 50 caractères")
+    .regex(/^[A-Za-zÀ-ÿ\s-]+$/, "Lettres uniquement"),
+  email: z.string().email("Email invalide"),
+  // Champ supplémentaire "Experience"
+  experience: z
+    .number()
+    .int("Nombre entier uniquement")
+    .min(0, "Min = 0")
+    .max(10, "Max = 10"),
+  // Checkbox "Terms & Conditions"
+  terms: z
+    .boolean()
+    .refine(
+      (v) => v === true,
+      "Vous devez accepter les Conditions d'utilisation"
+    ),
+});
 
 function Form() {
-  // TODO 3 : appeler useForm avec zodResolver(schema), les defaultValues et mode: "onSubmit"
-  // TODO 4 : créer la fonction onSubmit(data), qui affiche les données dans la console
+  const {
+    register,
+    handleSubmit,
+    formState: { errors, isSubmitSuccessful, isValid },
+  } = useForm({
+    resolver: zodResolver(schema),
+    defaultValues: { fullName: "", email: "", experience: 0, terms: false },
+    mode: "onSubmit",
+  });
+
+  const onSubmit = (data) => {
+    console.log("Send to server:", data); // ici tu fais ton appel API
+  };
 
   return (
     <div className="container">
       <h1>Register Component</h1>
       <h2>Enter your information</h2>
 
-      {/* TODO 7 : si l'envoi a réussi (isSubmitSuccessful), afficher « Enregistrement OK » à la place du formulaire */}
-      {/* TODO 5 : brancher le formulaire : onSubmit={handleSubmit(onSubmit)} */}
-      <form name="login-form">
-        <div className="form">
-          <div className="form-group">
-            <label>Full name</label>
-            {/* TODO 5 : relier chaque champ avec register("...") */}
-            <input type="text" />
-            {/* TODO 6 : sous chaque champ, afficher le message d'erreur (errors.fullName.message) */}
+      {isSubmitSuccessful ? (
+        <div className="success">Enregistrement OK</div>
+      ) : (
+        <form name="login-form" onSubmit={handleSubmit(onSubmit)}>
+          <div className="form">
+            <div className="form-group">
+              <label>Full name</label>
+              <input type="text" {...register("fullName")} />
+              {errors.fullName && (
+                <p className="error">{errors.fullName.message}</p>
+              )}
+            </div>
+
+            <div className="form-group">
+              <label>Email</label>
+              <input type="text" {...register("email")} />
+              {errors.email && (
+                <p className="error">{errors.email.message}</p>
+              )}
+            </div>
+
+            <div className="form-group">
+              <label>Experience</label>
+              <input
+                type="number" // Changé de "text" à "number"
+                {...register("experience", { valueAsNumber: true })} // Ajouté valueAsNumber
+              />
+              {errors.experience && (
+                <p className="error">{errors.experience.message}</p>
+              )}
+            </div>
+
+            {/* Terms & Conditions */}
+            <div className="form-group">
+              <label className="checkbox">
+                <input type="checkbox" {...register("terms")} />
+                <span>
+                  J’accepte les{" "}
+                  <a href="#" target="_blank" rel="noreferrer">
+                    Conditions d’utilisation
+                  </a>
+                </span>
+              </label>
+              {errors.terms && (
+                <p className="error">{errors.terms.message}</p>
+              )}
+            </div>
+
+            {Object.keys(errors).length > 0 && (
+              <p className="error">Veuillez corriger les champs invalides.</p>
+            )}
+
+            {isValid && <p className="success">Form valid (ready to send)</p>}
+
+            <button className="btn" type="submit">
+              Register
+            </button>
           </div>
-
-          <div className="form-group">
-            <label>Email</label>
-            <input type="text" />
-          </div>
-
-          <div className="form-group">
-            <label>Experience</label>
-            {/* Astuce : register("experience", { valueAsNumber: true }) pour avoir un nombre */}
-            <input type="number" />
-          </div>
-
-          {/* Terms & Conditions (bonus) */}
-          <div className="form-group">
-            <label className="checkbox">
-              <input type="checkbox" />
-              <span>
-                J’accepte les{" "}
-                <a href="#" target="_blank" rel="noreferrer">
-                  Conditions d’utilisation
-                </a>
-              </span>
-            </label>
-          </div>
-
-          <button className="btn" type="submit">
-            Register
-          </button>
-        </div>
-      </form>
+        </form>
+      )}
     </div>
   );
 }
```
