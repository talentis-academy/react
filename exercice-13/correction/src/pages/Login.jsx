import { useNavigate } from "react-router";
import { TOKEN_KEY } from "../auth";

// Page Login : le même écran que le formulaire (démo 003-G)
function Login() {
  const navigate = useNavigate();

  // Se connecter : on enregistre un token dans le localStorage, puis on va sur la Home
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(TOKEN_KEY, "ok");
    navigate("/");
  };

  return (
    <div className="container">
      <h1>Login Component</h1>
      <h2>Enter your login credentials</h2>
      <form name="login-form" onSubmit={handleSubmit}>
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

export default Login;
