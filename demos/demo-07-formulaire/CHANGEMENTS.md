# Démo 07 · Formulaire : les changements entre les étapes

Pour chaque étape, ce qui change par rapport à l’étape précédente. En vert : les lignes ajoutées. En rouge : les lignes retirées. « utilisé » : un fichier qui existait déjà mais qui est branché (importé) à partir de cette étape, montré en entier.

## Étape 1 → 2 : `etape-1-usestate` → `etape-2-zod`

Validation avec Zod seul (safeParse), sans librairie de formulaire

### `src/components/Form.tsx → src/components/FormOnlyZod.tsx` (comparé, +31 −45)

```diff
@@ -1,29 +1,30 @@
 import { useState } from "react";
+import * as z from "zod";
+
+const formSchema = z.object({
+  email: z.string().email("Email invalide"),
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
 
-  const emailChange = (event) => {
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
-
   const handleSubmit = (event) => {
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
@@ -34,34 +35,30 @@
     <div className="container">
       <h1>Login Component</h1>
       <h2>Enter your login credentials</h2>
+
       {isConnected ? (
-        <div className="success">Welecome to private page</div>
+        <div className="success">Welcome to private page</div>
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
@@ -73,14 +70,3 @@
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

### `src/App.jsx` (modifié, +2 −1)

```diff
@@ -1,9 +1,10 @@
 import "./App.css";
 import Form from "./components/Form";
 import FormFinal from "./components/FormFinal";
+import FormOnlyZod from "./components/FormOnlyZod";
 
 function App() {
-  return <Form />;
+  return <FormOnlyZod />;
 }
 
 export default App;
```

### `src/components/FormOnlyZod.tsx` (utilisé, +72 −0)

```diff
@@ -1,0 +1,72 @@
+import { useState } from "react";
+import * as z from "zod";
+
+const formSchema = z.object({
+  email: z.string().email("Email invalide"),
+  password: z
+    .string()
+    .min(1, "Mot de passe obligatoire")
+    .min(6, "Min 6 caractères"),
+});
+
+function Form() {
+  const [isError, setIsError] = useState(false);
+  const [isConnected, setIsConnected] = useState(false);
+
+  const handleSubmit = (event) => {
+    event.preventDefault();
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
+      setIsConnected(true);
+    } else {
+      setIsError(true);
+    }
+  };
+
+  return (
+    <div className="container">
+      <h1>Login Component</h1>
+      <h2>Enter your login credentials</h2>
+
+      {isConnected ? (
+        <div className="success">Welcome to private page</div>
+      ) : (
+        <form name="login-form" onSubmit={handleSubmit}>
+          <div className="form">
+            <div className="form-group">
+              <label>Email</label>
+              {/* name obligatoire pour FormData */}
+              <input name="email" type="text" />
+            </div>
+
+            <div className="form-group">
+              <label>Password</label>
+              {/* name obligatoire pour FormData */}
+              <input name="password" type="password" />
+            </div>
+
+            {isError && (
+              <p className="error">
+                {"Please enter valid email and password."}
+              </p>
+            )}
+
+            <button className="btn" type="submit">
+              Login
+            </button>
+          </div>
+        </form>
+      )}
+    </div>
+  );
+}
+
+export default Form;
```

## Étape 2 → 3 : `etape-2-zod` → `etape-3-react-hook-form`

Version finale : React Hook Form + Zod + zodResolver (register, handleSubmit, errors)

### `src/components/FormOnlyZod.tsx → src/components/FormFinal.tsx` (comparé, +69 −31)

```diff
@@ -1,34 +1,41 @@
-import { useState } from "react";
-import * as z from "zod";
+import { useForm } from "react-hook-form";
+import { z } from "zod";
+import { zodResolver } from "@hookform/resolvers/zod";
 
-const formSchema = z.object({
+const schema = z.object({
   email: z.string().email("Email invalide"),
   password: z
     .string()
     .min(1, "Mot de passe obligatoire")
     .min(6, "Min 6 caractères"),
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
 });
 
 function Form() {
-  const [isError, setIsError] = useState(false);
-  const [isConnected, setIsConnected] = useState(false);
+  const {
+    register,
+    handleSubmit,
+    formState: { errors, isSubmitSuccessful, isValid },
+  } = useForm({
+    resolver: zodResolver(schema),
+    defaultValues: { email: "", password: "", experience: 0, terms: false },
+    mode: "onSubmit",
+  });
 
-  const handleSubmit = (event) => {
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
+  const onSubmit = (data: any) => {
+    console.log("Send to server:", data); // ici tu fais ton appel API
   };
 
   return (
@@ -36,28 +43,59 @@
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
+              <input type="text" {...register("email")} />
+              {errors.email && (
+                <p className="error">{errors.email.message as string}</p>
+              )}
             </div>
 
             <div className="form-group">
               <label>Password</label>
-              {/* name obligatoire pour FormData */}
-              <input name="password" type="password" />
+              <input type="password" {...register("password")} />
+              {errors.password && (
+                <p className="error">{errors.password.message as string}</p>
+              )}
             </div>
 
-            {isError && (
-              <p className="error">
-                {"Please enter valid email and password."}
-              </p>
+            <div className="form-group">
+              <label>Experience</label>
+              <input
+                type="number" // Changé de "text" à "number"
+                {...register("experience", { valueAsNumber: true })} // Ajouté valueAsNumber
+              />
+              {errors.experience && (
+                <p className="error">{errors.experience.message as string}</p>
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
+                <p className="error">{errors.terms.message as string}</p>
+              )}
+            </div>
+
+            {Object.keys(errors).length > 0 && (
+              <p className="error">Veuillez corriger les champs invalides.</p>
             )}
+
+            {isValid && <p className="success">Form valid (ready to send)</p>}
 
             <button className="btn" type="submit">
               Login
```

### `src/App.jsx` (modifié, +1 −2)

```diff
@@ -1,10 +1,9 @@
 import "./App.css";
 import Form from "./components/Form";
 import FormFinal from "./components/FormFinal";
-import FormOnlyZod from "./components/FormOnlyZod";
 
 function App() {
-  return <FormOnlyZod />;
+  return <FormFinal />;
 }
 
 export default App;
```

### `src/components/FormFinal.tsx` (utilisé, +110 −0)

```diff
@@ -1,0 +1,110 @@
+import { useForm } from "react-hook-form";
+import { z } from "zod";
+import { zodResolver } from "@hookform/resolvers/zod";
+
+const schema = z.object({
+  email: z.string().email("Email invalide"),
+  password: z
+    .string()
+    .min(1, "Mot de passe obligatoire")
+    .min(6, "Min 6 caractères"),
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
+
+function Form() {
+  const {
+    register,
+    handleSubmit,
+    formState: { errors, isSubmitSuccessful, isValid },
+  } = useForm({
+    resolver: zodResolver(schema),
+    defaultValues: { email: "", password: "", experience: 0, terms: false },
+    mode: "onSubmit",
+  });
+
+  const onSubmit = (data: any) => {
+    console.log("Send to server:", data); // ici tu fais ton appel API
+  };
+
+  return (
+    <div className="container">
+      <h1>Login Component</h1>
+      <h2>Enter your login credentials</h2>
+
+      {isSubmitSuccessful ? (
+        <div className="success">Welcome to private page</div>
+      ) : (
+        <form name="login-form" onSubmit={handleSubmit(onSubmit)}>
+          <div className="form">
+            <div className="form-group">
+              <label>Email</label>
+              <input type="text" {...register("email")} />
+              {errors.email && (
+                <p className="error">{errors.email.message as string}</p>
+              )}
+            </div>
+
+            <div className="form-group">
+              <label>Password</label>
+              <input type="password" {...register("password")} />
+              {errors.password && (
+                <p className="error">{errors.password.message as string}</p>
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
+                <p className="error">{errors.experience.message as string}</p>
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
+                <p className="error">{errors.terms.message as string}</p>
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
+              Login
+            </button>
+          </div>
+        </form>
+      )}
+    </div>
+  );
+}
+
+export default Form;
```
