import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";
import ErrorPage from "./pages/ErrorPage";
import CarDetails from "./pages/CarDetails";

import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

const routerNested = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // parent
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> }, // "/"
      { path: "details/:id", element: <Details /> }, // "/details/:id"
      {
        path: "favoris",
        lazy: async () => {
          const module = await import("./pages/Favoris");
          return { Component: module.default };
        },
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={routerNested} />;
}

export default App;
