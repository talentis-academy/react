import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { storage } from "../utils/storage";

export default function Header() {
  const navigate = useNavigate();
  const [user, setUser] = useState(storage.getUser);

  // On écoute les changements de l'utilisateur (login dans cet onglet ou dans un autre)
  useEffect(() => {
    const refreshUser = () => setUser(storage.getUser());
    window.addEventListener("storage", refreshUser);
    window.addEventListener("userUpdated", refreshUser);
    return () => {
      window.removeEventListener("storage", refreshUser);
      window.removeEventListener("userUpdated", refreshUser);
    };
  }, []);

  const handleLogout = () => {
    storage.removeToken();
    storage.removeUser();
    setUser(null);
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          Car Catalog
        </Link>
        <nav className="nav">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/favorites" className="nav-link">
            Favorites
          </Link>
          <Link to="/api-demo" className="nav-link">
            API Demo
          </Link>
        </nav>
        <div className="user-section">
          <span className="username">{user?.userName || "Guest"}</span>
          {user ? (
            <button className="btn btn-sm" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <Link to="/login" className="btn btn-sm">
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
