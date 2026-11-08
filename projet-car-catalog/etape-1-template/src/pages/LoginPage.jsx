import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="login-container">
      <div className="card login-card">
        <h1 className="login-title">Welcome Back</h1>
        <p className="subtitle">Sign in to your account</p>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="userName" className="form-label">
              Username
            </label>
            <input type="text" id="userName" name="userName" className="form-input" placeholder="Enter your username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" id="password" name="password" className="form-input" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="btn">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
