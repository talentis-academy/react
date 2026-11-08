import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Favoris from "./pages/Favoris";
import NotFound from "./pages/NotFound";
import ErrorPage from "./pages/ErrorPage";
import CarDetails from "./pages/CarDetails";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";

import requireAuthLoader from "./auth/requireAuthLoader";

const routerSimple = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/details/:id",
    element: <Details />,
    loader: requireAuthLoader, // guard au niveau parent
  },
  {
    path: "/favoris",
    element: <Favoris />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/car/:id",
    element: <CarDetails />,
    loader: async ({ params }) => {
      const response = await fetch(
        `https://myfakeapi.com/api/cars/${params.id}`
      );
      if (!response.ok) {
        throw new Response("Car not found", { status: 404 });
      }
      return response.json();
    },
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const routerNested = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // parent
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> }, // "/"
      { path: "details/:id", element: <Details /> }, // "/details/:id"
      { path: "favoris", element: <Favoris /> }, // "/favoris"
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={routerSimple} />;
}

export default App;

/* 
   {
        path: "favoris",
        lazy: async () => {
          const module = await import("./pages/Favoris");
          return { Component: module.default };
        },
      }

*/
