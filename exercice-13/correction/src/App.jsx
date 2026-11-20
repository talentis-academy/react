import "./App.css";
import { createBrowserRouter } from "react-router";
// React Router v8 : tout s'importe depuis "react-router", sauf RouterProvider, qui vient de "react-router/dom"
import { RouterProvider } from "react-router/dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import { requireAuthLoader } from "./auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: requireAuthLoader, // Home sécurisée via le loader
      },
      { path: "login", element: <Login /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
