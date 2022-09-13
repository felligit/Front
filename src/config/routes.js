// Layout
import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic";

// Admin pages
import AdminHome from "../pages/Admin";
import AdminSignIn from "../pages/Admin/SignIn";

// Clients pages
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import Aplications from "../pages/Aplications";

// other
import Error404 from "../pages/Error404";

// config. rutas
const routes = [
  {
    path: "/admin",
    component: LayoutAdmin,
    exact: false,
    routes: [
      { path: "/admin", component: AdminHome, exact: true },
      { path: "/admin/login", component: AdminSignIn, exact: true },
      { component: Error404 },
    ],
  },
  {
    path: "/",
    component: LayoutBasic,
    exact: false,
    routes: [
      { path: "/", component: Home, exact: true },
      { path: "/services", component: Services, exact: true },
      { path: "/apps", component: Aplications, exact: true },
      { path: "/contact", component: Contact, exact: true },
      { component: Error404 },
    ],
  },
];

export default routes;
