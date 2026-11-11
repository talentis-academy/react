import "./App.css";
import Home from "./pages/Home";
import Favoris from "./pages/Favoris";

import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

// createBrowserRouter : la liste des routes (une URL → un composant)
const routerSimple = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/favoris",
    element: <Favoris />,
  },
]);

function App() {
  return <RouterProvider router={routerSimple} />;
}

export default App;
