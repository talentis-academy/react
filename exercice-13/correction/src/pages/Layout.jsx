import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        padding: 16,
        textAlign: "center",
      }}
    >
      <header style={{ display: "flex", gap: 12, justifyContent: "center" }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/favoris">Favoris</NavLink>
        <NavLink
          to="/favoris"
          style={({ isActive }) => ({
            color: isActive ? "red" : "black",
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          favoris
        </NavLink>
      </header>

      {/* Zone qui prend tout l'espace */}
      <main style={{ flex: 1, display: "grid", placeItems: "center" }}>
        <Outlet />
      </main>

      <footer style={{ marginTop: 16 }}>
        <p>© 2025 My Car App</p>
      </footer>
    </div>
  );
}
