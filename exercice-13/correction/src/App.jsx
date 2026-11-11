import {
  createBrowserRouter,
  RouterProvider,
  Link,
  NavLink,
  Outlet,
  redirect,
  useNavigate,
} from "react-router-dom";

/**
 * Mini auth "fake" via localStorage
 */
const TOKEN_KEY = "demo_token";
const isConnected = () => Boolean(localStorage.getItem(TOKEN_KEY));

/**
 * Loader = Guard
 * Si pas connecté => redirect vers /login
 */
function requireAuthLoader() {
  if (!isConnected()) throw redirect("/login");
}

/**
 * Layout = Header + Footer + <Outlet />
 */
function Layout() {
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <header
        style={{
          padding: 12,
          borderBottom: "1px solid #ddd",
          display: "flex",
          gap: 12,
        }}
      >
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
      </header>

      <main style={{ flex: 1, padding: 12 }}>
        <Outlet />
      </main>

      <footer style={{ padding: 12, borderTop: "1px solid #ddd" }}>
        Footer simple
      </footer>
    </div>
  );
}

/**
 * Page Home (protégée par loader)
 */
function Home() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    navigate("/login");
  };

  return (
    <div>
      <h2>Home (protégée)</h2>
      <p>Si tu vois cette page, tu es connecté.</p>
      <button onClick={logout}>Se déconnecter</button>
    </div>
  );
}

/**
 * Page Login
 */
function Login() {
  const navigate = useNavigate();

  const login = () => {
    localStorage.setItem(TOKEN_KEY, "ok");
    navigate("/");
  };

  return (
    <div>
      <h2>Login</h2>
      <p>Appuie sur “Se connecter” pour créer un token dans localStorage.</p>
      <button onClick={login}>Se connecter</button>

      <p style={{ marginTop: 12 }}>
        (Optionnel) Aller vers <Link to="/">Home</Link> pour tester le guard
      </p>
    </div>
  );
}

/**
 * 404
 */
function NotFound() {
  return (
    <div>
      <h2>404 - Page introuvable</h2>
      <Link to="/">Retour Home</Link>
    </div>
  );
}

/**
 * Router (nouvelle syntaxe) + loader sur Home
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: requireAuthLoader, // Home sécurisée via loader
      },
      { path: "login", element: <Login /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
