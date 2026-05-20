import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import WebProfesional from "./pages/WebProfesional";
import ECommerce from "./pages/ECommerce";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/web-profesional",
    Component: WebProfesional,
  },
  {
    path: "/ecommerce",
    Component: ECommerce,
  },
]);
