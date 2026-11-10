# Démo 003-G · Formulaire : les changements entre les étapes

Pour chaque étape, ce qui change par rapport à l’étape précédente. En vert : les lignes ajoutées. En rouge : les lignes retirées. « utilisé » : un fichier qui existait déjà mais qui est branché (importé) à partir de cette étape, montré en entier.

## Étape 1 · `etape-1-template` : point de départ

Le point de départ : le design de l’écran de login (HTML + CSS), sans logique

Le code de départ, en entier : les fichiers écrits pour la démo et utilisés (atteints par les imports depuis src/main.*) ; les fichiers du gabarit Vite non modifiés sont seulement listés. Ordre de lecture : main → App → composants et pages → le reste.

*Styles fournis (copiés tels quels, pas tapés en live) : `src/App.css` (222 lignes)*

*Fichiers générés par Vite, non modifiés (non affichés) : `index.html`, `vite.config.js`, `.gitignore`, `eslint.config.js`, `public/vite.svg`*

*package.json (gabarit Vite) : dépendances ajoutées : `@hookform/resolvers ^5.2.2`, `react-hook-form ^7.68.0`, `zod ^4.2.1`*

### `src/main.jsx` (6 lignes)

```jsx
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <App />
);
```

### `src/App.jsx` (9 lignes)

```jsx
import "./App.css";
import Form from "./components/Form";

function App() {
  // Le formulaire de login : seul le fichier components/Form.jsx change d'une étape à l'autre
  return <Form />;
}

export default App;
```

### `src/components/Form.jsx` (28 lignes)

```jsx
// Étape 1 (template) : l'écran de login, seulement l'interface (pas encore de state, ni de validation)
function Form() {
  return (
    <div className="container">
      <h1>Login Component</h1>
      <h2>Enter your login credentials</h2>
      <form name="login-form">
        <div className="form">
          <div className="form-group">
            <label>Email</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" />
          </div>

          <button className="btn" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
```

## Étape 1 → 2 : `etape-1-template` → `etape-2-usestate`

Un state par champ (useState), onChange, e.preventDefault() et un console.log

### `src/components/Form.jsx` (modifié, +60 −5)

```diff
@@ -1,21 +1,65 @@
-// Étape 1 (template) : l'écran de login, seulement l'interface (pas encore de state, ni de validation)
+// Étape 2 : formulaire géré avec useState (un state par champ, onChange)
+import { useState } from "react";
+
 function Form() {
+  const [email, setEmail] = useState("");
+  const [password, setPassword] = useState("");
+  const [isError, setIsError] = useState(false);
+
+  const emailChange = (event) => {
+    // event.target.value : ce que l'utilisateur vient de taper dans le champ
+    const { value } = event.target;
+    const isEmailValid = value.includes("@");
+    if (isEmailValid) {
+      setEmail(value);
+    }
+  };
+
+  const passwordChange = (event) => {
+    const { value } = event.target;
+    if (value.length > 0) {
+      setPassword(value);
+    }
+  };
+
+  const handleSubmit = (event) => {
+    // preventDefault : empêche le navigateur de recharger la page à l'envoi
+    event.preventDefault();
+    if (email && password) {
+      console.log("Connexion :", email, password);
+    } else {
+      setIsError(true);
+    }
+  };
+
   return (
     <div className="container">
       <h1>Login Component</h1>
       <h2>Enter your login credentials</h2>
-      <form name="login-form">
+      <form
+        name="login-form"
+        onSubmit={(e) => {
+          handleSubmit(e);
+        }}
+      >
         <div className="form">
           <div className="form-group">
             <label>Email</label>
-            <input type="text" />
+            <input type="text" onChange={(e) => emailChange(e)} />
           </div>
 
           <div className="form-group">
             <label>Password</label>
-            <input type="password" />
+            <input
+              type="password"
+              onChange={(e) => {
+                passwordChange(e);
+              }}
+            />
           </div>
-
+          {isError && (
+            <p className="error">Please enter valid email and password.</p>
+          )}
           <button className="btn" type="submit">
             Login
           </button>
@@ -26,3 +70,14 @@
 }
 
 export default Form;
+
+/*
+// Email (version correcte)
+const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
+
+// Password: au moins 6 caractères
+const passwordRegex = /^.{6,}$/;
+
+const isEmailValid = emailRegex.test(email);
+const isPasswordValid = passwordRegex.test(password);
+*/
```

## Étape 2 → 3 : `etape-2-usestate` → `etape-3-is-connected`

On ajoute le state isConnected : connecté → « Welcome to private page »

### `src/components/Form.jsx` (modifié, +36 −30)

```diff
@@ -1,10 +1,11 @@
-// Étape 2 : formulaire géré avec useState (un state par champ, onChange)
+// Étape 3 : on ajoute isConnected : si l'email et le mot de passe sont remplis, on affiche la page privée
 import { useState } from "react";
 
 function Form() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [isError, setIsError] = useState(false);
+  const [isConnected, setIsConnected] = useState(false);
 
   const emailChange = (event) => {
     // event.target.value : ce que l'utilisateur vient de taper dans le champ
@@ -26,7 +27,7 @@
     // preventDefault : empêche le navigateur de recharger la page à l'envoi
     event.preventDefault();
     if (email && password) {
-      console.log("Connexion :", email, password);
+      setIsConnected(true);
     } else {
       setIsError(true);
     }
@@ -36,35 +37,40 @@
     <div className="container">
       <h1>Login Component</h1>
       <h2>Enter your login credentials</h2>
-      <form
-        name="login-form"
-        onSubmit={(e) => {
-          handleSubmit(e);
-        }}
-      >
-        <div className="form">
-          <div className="form-group">
-            <label>Email</label>
-            <input type="text" onChange={(e) => emailChange(e)} />
+      {isConnected ? (
+        <div className="success">Welcome to private page</div>
+      ) : (
+        <form
+          name="login-form"
+          onSubmit={(e) => {
+            handleSubmit(e);
+          }}
+        >
+          <div className="form">
+            <div className="form-group">
+              <label>Email</label>
+              <input type="text" onChange={(e) => emailChange(e)} />
+            </div>
+
+            <div className="form-group">
+              <label>Password</label>
+              <input
+                type="password"
+                onChange={(e) => {
+                  passwordChange(e);
+                }}
+              />
+            </div>
+            {isError && (
+              <p className="error">Please enter valid email and password.</p>
+            )}
+            {isConnected && <p className="success">Welcome to private page</p>}
+            <button className="btn" type="submit">
+              Login
+            </button>
           </div>
-
-          <div className="form-group">
-            <label>Password</label>
-            <input
-              type="password"
-              onChange={(e) => {
-                passwordChange(e);
-              }}
-            />
-          </div>
-          {isError && (
-            <p className="error">Please enter valid email and password.</p>
-          )}
-          <button className="btn" type="submit">
-            Login
-          </button>
-        </div>
-      </form>
+        </form>
+      )}
     </div>
   );
 }
```

## Étape 3 → 4 : `etape-3-is-connected` → `etape-4-zod`

Validation avec Zod seul (safeParse), sans librairie de formulaire

### `src/components/Form.jsx` (modifié, +35 −46)

```diff
@@ -1,32 +1,36 @@
-// Étape 3 : on ajoute isConnected : si l'email et le mot de passe sont remplis, on affiche la page privée
+// Étape 4 : validation avec Zod seul (safeParse), sans librairie de formulaire
 import { useState } from "react";
+import * as z from "zod";
+
+// Le schéma Zod : les règles que chaque champ doit respecter
+const formSchema = z.object({
+  email: z.string().email("Email invalide"),
+  // Deux règles sur le mot de passe, testées dans l'ordre :
+  // .min(1) : le champ ne doit pas être vide → message « Mot de passe obligatoire »
+  // .min(6) : au moins 6 caractères → message « Min 6 caractères »
+  password: z
+    .string()
+    .min(1, "Mot de passe obligatoire")
+    .min(6, "Min 6 caractères"),
+});
 
 function Form() {
-  const [email, setEmail] = useState("");
-  const [password, setPassword] = useState("");
   const [isError, setIsError] = useState(false);
   const [isConnected, setIsConnected] = useState(false);
-
-  const emailChange = (event) => {
-    // event.target.value : ce que l'utilisateur vient de taper dans le champ
-    const { value } = event.target;
-    const isEmailValid = value.includes("@");
-    if (isEmailValid) {
-      setEmail(value);
-    }
-  };
-
-  const passwordChange = (event) => {
-    const { value } = event.target;
-    if (value.length > 0) {
-      setPassword(value);
-    }
-  };
 
   const handleSubmit = (event) => {
     // preventDefault : empêche le navigateur de recharger la page à l'envoi
     event.preventDefault();
-    if (email && password) {
+
+    // récupérer les valeurs depuis le formulaire
+    const formData = new FormData(event.currentTarget);
+
+    const email = String(formData.get("email") ?? "");
+    const password = String(formData.get("password") ?? "");
+
+    // validation Zod sans try/catch
+    const result = formSchema.safeParse({ email, password });
+    if (result.success) {
       setIsConnected(true);
     } else {
       setIsError(true);
@@ -37,34 +41,30 @@
     <div className="container">
       <h1>Login Component</h1>
       <h2>Enter your login credentials</h2>
+
       {isConnected ? (
         <div className="success">Welcome to private page</div>
       ) : (
-        <form
-          name="login-form"
-          onSubmit={(e) => {
-            handleSubmit(e);
-          }}
-        >
+        <form name="login-form" onSubmit={handleSubmit}>
           <div className="form">
             <div className="form-group">
               <label>Email</label>
-              <input type="text" onChange={(e) => emailChange(e)} />
+              {/* name obligatoire pour FormData */}
+              <input name="email" type="text" />
             </div>
 
             <div className="form-group">
               <label>Password</label>
-              <input
-                type="password"
-                onChange={(e) => {
-                  passwordChange(e);
-                }}
-              />
+              {/* name obligatoire pour FormData */}
+              <input name="password" type="password" />
             </div>
+
             {isError && (
-              <p className="error">Please enter valid email and password.</p>
+              <p className="error">
+                {"Please enter valid email and password."}
+              </p>
             )}
-            {isConnected && <p className="success">Welcome to private page</p>}
+
             <button className="btn" type="submit">
               Login
             </button>
@@ -76,14 +76,3 @@
 }
 
 export default Form;
-
-/*
-// Email (version correcte)
-const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
-
-// Password: au moins 6 caractères
-const passwordRegex = /^.{6,}$/;
-
-const isEmailValid = emailRegex.test(email);
-const isPasswordValid = passwordRegex.test(password);
-*/
```

## Étape 4 → 5 : `etape-4-zod` → `etape-5-react-hook-form`

Version finale : React Hook Form + Zod + zodResolver (register, handleSubmit, errors)

### `src/components/Form.jsx` (modifié, +34 −33)

```diff
@@ -1,9 +1,12 @@
-// Étape 4 : validation avec Zod seul (safeParse), sans librairie de formulaire
-import { useState } from "react";
-import * as z from "zod";
+// Étape 5 (version finale) : React Hook Form + Zod, reliés par zodResolver
+// useForm : le hook qui gère le formulaire
+import { useForm } from "react-hook-form";
+import { z } from "zod";
+// zodResolver : relie React Hook Form à Zod
+import { zodResolver } from "@hookform/resolvers/zod";
 
 // Le schéma Zod : les règles que chaque champ doit respecter
-const formSchema = z.object({
+const schema = z.object({
   email: z.string().email("Email invalide"),
   // Deux règles sur le mot de passe, testées dans l'ordre :
   // .min(1) : le champ ne doit pas être vide → message « Mot de passe obligatoire »
@@ -15,26 +18,19 @@
 });
 
 function Form() {
-  const [isError, setIsError] = useState(false);
-  const [isConnected, setIsConnected] = useState(false);
+  const {
+    register, // relie un champ au formulaire
+    handleSubmit, // valide, puis appelle onSubmit si tout est bon
+    formState: { errors, isSubmitSuccessful, isValid }, // les erreurs, envoi réussi, formulaire valide
+  } = useForm({
+    // zodResolver : React Hook Form valide les champs avec le schéma Zod
+    resolver: zodResolver(schema),
+    defaultValues: { email: "", password: "" },
+    mode: "onSubmit",
+  });
 
-  const handleSubmit = (event) => {
-    // preventDefault : empêche le navigateur de recharger la page à l'envoi
-    event.preventDefault();
-
-    // récupérer les valeurs depuis le formulaire
-    const formData = new FormData(event.currentTarget);
-
-    const email = String(formData.get("email") ?? "");
-    const password = String(formData.get("password") ?? "");
-
-    // validation Zod sans try/catch
-    const result = formSchema.safeParse({ email, password });
-    if (result.success) {
-      setIsConnected(true);
-    } else {
-      setIsError(true);
-    }
+  const onSubmit = (data) => {
+    console.log("Send to server:", data); // ici tu fais ton appel API
   };
 
   return (
@@ -42,28 +38,33 @@
       <h1>Login Component</h1>
       <h2>Enter your login credentials</h2>
 
-      {isConnected ? (
+      {isSubmitSuccessful ? (
         <div className="success">Welcome to private page</div>
       ) : (
-        <form name="login-form" onSubmit={handleSubmit}>
+        <form name="login-form" onSubmit={handleSubmit(onSubmit)}>
           <div className="form">
             <div className="form-group">
               <label>Email</label>
-              {/* name obligatoire pour FormData */}
-              <input name="email" type="text" />
+              {/* register("email") : relie le champ à React Hook Form (valeur, onChange…) */}
+              <input type="text" {...register("email")} />
+              {errors.email && (
+                <p className="error">{errors.email.message}</p>
+              )}
             </div>
 
             <div className="form-group">
               <label>Password</label>
-              {/* name obligatoire pour FormData */}
-              <input name="password" type="password" />
+              <input type="password" {...register("password")} />
+              {errors.password && (
+                <p className="error">{errors.password.message}</p>
+              )}
             </div>
 
-            {isError && (
-              <p className="error">
-                {"Please enter valid email and password."}
-              </p>
+            {Object.keys(errors).length > 0 && (
+              <p className="error">Veuillez corriger les champs invalides.</p>
             )}
+
+            {isValid && <p className="success">Form valid (ready to send)</p>}
 
             <button className="btn" type="submit">
               Login
```
