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
