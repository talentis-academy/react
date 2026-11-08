import { Button } from "../atoms";
import { FormField } from "../molecules";

// Le formulaire de connexion : il lit les champs et renvoie { userName, password } au parent
export function LoginForm({ onSubmit, isPending, errorMessage }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    onSubmit({ userName: formData.get("userName"), password: formData.get("password") });
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      {errorMessage && <p className="error-text">{errorMessage}</p>}
      <FormField id="userName" label="Username" placeholder="Enter your username" required />
      <FormField id="password" label="Password" type="password" placeholder="Enter your password" required />
      <Button type="submit" disabled={isPending}>
        {isPending ? "Signing In..." : "Sign In"}
      </Button>
    </form>
  );
}
