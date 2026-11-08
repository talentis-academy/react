import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import FavoritesPage from "./pages/FavoritesPage";
import CarDetailPage from "./pages/CarDetailPage";
import ApiDemoPage from "./pages/ApiDemoPage";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter([
  { path: "/login", element: <LoginPage /> },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "favorites", element: <FavoritesPage /> },
      { path: "car/:id", element: <CarDetailPage /> },
      { path: "api-demo", element: <ApiDemoPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
