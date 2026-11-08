import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import { HomeScreen } from "@/features/cars/screens/HomeScreen";
// TODO (exercice 15) : remplacer par import { CarDetailsScreen } from "@/features/cars/screens/CarDetailsScreen";
import CarDetailPage from "@/pages/CarDetailPage";
import { FavoritesScreen } from "@/features/favorites/screens/FavoritesScreen";
import { LoginScreen } from "@/features/auth/screens/LoginScreen";
import { ApiDemoScreen } from "@/features/api-demo/screens/ApiDemoScreen";
import { ErrorScreen } from "@/features/errors/screens/ErrorScreen";
import { NotFoundScreen } from "@/features/errors/screens/NotFoundScreen";
import { requireAuth, redirectIfAuthenticated } from "@/features/auth/utils/authLoader";

export const router = createBrowserRouter([
  { path: "/login", element: <LoginScreen />, loader: redirectIfAuthenticated },
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorScreen />,
    children: [
      { index: true, element: <HomeScreen /> },
      { path: "favorites", element: <FavoritesScreen />, loader: requireAuth },
      { path: "car/:id", element: <CarDetailPage /> },
      { path: "api-demo", element: <ApiDemoScreen /> },
      { path: "*", element: <NotFoundScreen /> },
    ],
  },
]);
