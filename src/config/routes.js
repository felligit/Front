// Layout
import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic";

// Admin pages
import AdminHome from "../pages/Admin";
import AdminSignIn from "../pages/Admin/SignIn";
import AdminUsers from "../pages/Admin/Users";
import AdminMenuWeb from "../pages/Admin/MenuWeb";
import AdminBlog from "../pages/Admin/Blog";

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
      { path: "/admin/users", component: AdminUsers, exact: true },
      { path: "/admin/menu", component: AdminMenuWeb, exact: true },
      { path: "/admin/blog", component: AdminBlog, exact: true },
      { component: Error404 },
    ],
  },
  {
    path: "/",
    component: LayoutBasic,
    exact: false,
    routes: [
      { path: "/", component: Home, exact: true },
      { path: "/contact", component: Contact, exact: true },
      { path: "/services", component: Services, exact: true },
      { path: "/apps", component: Aplications, exact: true },
      { path: "/apps/:url", component: Aplications, exact: true },
      { component: Error404 },
    ],
  },
];

export default routes;
