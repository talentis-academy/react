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
const routerSimple = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    // :id est un paramètre : Details le lit avec useParams()
    path: "/details/:id",
    element: <Details />,
  },
  {
    path: "/favoris",
    element: <Favoris />,
  },
  {
    // "*" : toutes les URL inconnues tombent sur NotFound
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={routerSimple} />;
}

export default App;
