import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Favoris from "./pages/Favoris";
import NotFound from "./pages/NotFound";
import ErrorPage from "./pages/ErrorPage";
import CarDetails from "./pages/CarDetails";

import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

// createBrowserRouter : la liste des routes (une URL → un composant)
const routerNested = createBrowserRouter([
  {
    path: "/",
    // Layout affiche header et footer ; la page enfant s'affiche dans son <Outlet />
    element: <Layout />, // parent
    children: [
      { index: true, element: <Home /> }, // "/"
      { path: "details/:id", element: <Details /> }, // "/details/:id"
      { path: "favoris", element: <Favoris /> }, // "/favoris"
    ],
  },
  {
    // "*" : toutes les URL inconnues tombent sur NotFound
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={routerNested} />;
}

export default App;
