import { useState } from "react";
import * as z from "zod";

const formSchema = z.object({
  email: z.string().email("Email invalide"),
  password: z
    .string()
    .min(1, "Mot de passe obligatoire")
    .min(6, "Min 6 caractères"),
});

function Form() {
  const [isError, setIsError] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const handleSubmit = (event) => {
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
