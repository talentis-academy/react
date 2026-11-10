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
