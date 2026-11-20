// React Router v8 : tout s'importe depuis "react-router", sauf RouterProvider, qui vient de "react-router/dom"
import { RouterProvider } from "react-router/dom";
import { router } from "./router";

export default function App() {
  return <RouterProvider router={router} />;
}
