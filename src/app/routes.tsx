import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import WebProfesional from "./pages/WebProfesional";
import ECommerce from "./pages/ECommerce";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/landing-page",
    Component: LandingPage,
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
