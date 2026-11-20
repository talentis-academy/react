import { NavLink, Outlet, useLocation, useNavigate } from "react-router";
import { isConnected, TOKEN_KEY } from "../auth";

// Layout = Header + Footer + <Outlet />
function Layout() {
  const navigate = useNavigate();
  // useLocation : le Layout se redessine à chaque changement de page,
  // donc on relit le token à chaque fois (après Login ou Se déconnecter)
  useLocation();
  const connected = isConnected();

  // Se déconnecter : on supprime le token, puis on retourne sur /login
  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    navigate("/login");
  };

  return (
    <div className="layout">
      <header className="header">
        <span className="logo">Car App</span>
        <nav className="nav">
          <NavLink to="/">Home</NavLink>
          {/* Connecté : « Se déconnecter » ; pas connecté : le lien Login */}
          {connected ? (
            <button className="nav-btn" onClick={logout}>
              Se déconnecter
            </button>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </nav>
      </header>

      <main className="main">
        <Outlet />
      </main>

      <footer className="footer">Footer simple</footer>
    </div>
  );
}

export default Layout;
