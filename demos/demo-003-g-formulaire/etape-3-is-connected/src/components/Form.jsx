// Étape 3 : on ajoute isConnected : si l'email et le mot de passe sont remplis, on affiche la page privée
import { useState } from "react";

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const emailChange = (event) => {
    // event.target.value : ce que l'utilisateur vient de taper dans le champ
    const { value } = event.target;
    const isEmailValid = value.includes("@");
    if (isEmailValid) {
      setEmail(value);
    }
  };

  const passwordChange = (event) => {
    const { value } = event.target;
    if (value.length > 0) {
      setPassword(value);
    }
  };

  const handleSubmit = (event) => {
    // preventDefault : empêche le navigateur de recharger la page à l'envoi
    event.preventDefault();
    if (email && password) {
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
        <form
          name="login-form"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="form">
            <div className="form-group">
              <label>Email</label>
              <input type="text" onChange={(e) => emailChange(e)} />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                onChange={(e) => {
                  passwordChange(e);
                }}
              />
            </div>
            {isError && (
              <p className="error">Please enter valid email and password.</p>
            )}
            {isConnected && <p className="success">Welcome to private page</p>}
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

/*
// Email (version correcte)
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Password: au moins 6 caractères
const passwordRegex = /^.{6,}$/;

const isEmailValid = emailRegex.test(email);
const isPasswordValid = passwordRegex.test(password);
*/
