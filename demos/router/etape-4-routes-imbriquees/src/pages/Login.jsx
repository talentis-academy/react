import { useNavigate, useSearchParams } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [params] = useSearchParams();

  const handleLogin = () => {
    localStorage.setItem("token", "demo-token");
    const from = params.get("from")
      ? decodeURIComponent(params.get("from"))
      : "/";
    navigate(from, { replace: true });
  };

  return <button onClick={handleLogin}>Se connecter</button>;
}

export default Login;
