// Page Login : le même écran que le formulaire (démo 003-G)
function Login() {
  // TODO (exercice) : à l'envoi du formulaire (onSubmit) : e.preventDefault(),
  // enregistrer un token dans le localStorage, puis aller sur la Home (useNavigate)

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

export default Login;
