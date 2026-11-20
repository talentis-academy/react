import "./App.css";
import Layout from "./components/Layout";
import Login from "./pages/Login";

// Le template ne contient que le design : le Layout, les pages (Login, Home, NotFound) et le CSS.
// TODO (exercice) : installer React Router (npm install react-router) et créer le routeur
// (createBrowserRouter + RouterProvider) : Layout, Home (protégée), Login, 404
function App() {
  return (
    <Layout>
      <Login />
    </Layout>
  );
}

export default App;
