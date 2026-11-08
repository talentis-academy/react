import { LoginForm } from "@/components/organisms";

export function LoginScreenScene({ onSubmit, isPending, errorMessage }) {
  return (
    <div className="login-container">
      <div className="card login-card">
        <h1 className="login-title">Welcome Back</h1>
        <p className="subtitle">Sign in to your account</p>
        <LoginForm onSubmit={onSubmit} isPending={isPending} errorMessage={errorMessage} />
      </div>
    </div>
  );
}
