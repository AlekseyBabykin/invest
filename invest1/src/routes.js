import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import Enterpreneurship from "./pages/Enterpreneurship";
import Finance from "./pages/Finance";
import HomePage from "./pages/HomePage";
import HumanResources from "./pages/HumanResources";
import LegaAndLaw from "./pages/LegaAndLaw";
import Management from "./pages/Management";
import Marketing from "./pages/Marketing";
import Product from "./pages/Product";
import Technology from "./pages/Technology";

import {
  REGISTRATION_ROUTE,
  MARKETING_ROUTE,
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  FINANCE_ROUTE,
  MANAGEMENT_ROUTE,
  TECHNOLOGY_ROUTE,
  PRODUCT_ROUTE,
  HUMAN_RESOURCES_ROUTE,
  ENTERPRENEURSHIP_ROUTE,
  LEGAL_AND_LAW_ROUTE,
  HOME_PAGE,
} from "./utils/consts";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
  {
    // path: BASKET_ROUTE,
    // Component: Basket,
  },
];

export const pablicRoutes = [
  {
    path: FINANCE_ROUTE,
    Component: Finance,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: MARKETING_ROUTE,
    Component: Marketing,
  },
  {
    path: MANAGEMENT_ROUTE,
    Component: Management,
  },
  {
    path: TECHNOLOGY_ROUTE,
    Component: Technology,
  },
  {
    path: PRODUCT_ROUTE,
    Component: Product,
  },
  {
    path: HUMAN_RESOURCES_ROUTE,
    Component: HumanResources,
  },
  {
    path: ENTERPRENEURSHIP_ROUTE,
    Component: Enterpreneurship,
  },
  {
    path: LEGAL_AND_LAW_ROUTE,
    Component: LegaAndLaw,
  },
  {
    path: HOME_PAGE,
    Component: HomePage,
  },
];
