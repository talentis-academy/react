import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login } from "../api/actions";
import { storage } from "../utils/storage";

export default function LoginPage() {
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: ({ userName, password }) => login(userName, password),
    onSuccess: (response) => {
      // On garde le token et l'utilisateur dans le localStorage
      if (response.session) storage.setToken(response.session);
      if (response.userDetails) {
        storage.setUser(response.userDetails);
        // On prévient le Header que l'utilisateur a changé
        window.dispatchEvent(new CustomEvent("userUpdated"));
      }
      navigate("/");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    loginMutation.mutate({ userName: formData.get("userName"), password: formData.get("password") });
  };

  return (
    <div className="login-container">
      <div className="card login-card">
        <h1 className="login-title">Welcome Back</h1>
        <p className="subtitle">Sign in to your account</p>
        <form onSubmit={handleSubmit} className="login-form">
          {loginMutation.isError && (
            <p className="error-text">
              {loginMutation.error?.response?.data?.message || loginMutation.error?.message || "Login failed. Please try again."}
            </p>
          )}
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
          <button type="submit" className="btn" disabled={loginMutation.isPending}>
            {loginMutation.isPending ? "Signing In..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
