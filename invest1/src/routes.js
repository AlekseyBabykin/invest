import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import BusinessDevelopment from "./pages/BusinessDevelopment";
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
  BUSINESS_DEVELOPMENT,
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
    path: FINANCE_ROUTE + "/:name",
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
    path: MARKETING_ROUTE + "/:name",
    Component: Marketing,
  },
  {
    path: MANAGEMENT_ROUTE + "/:name",
    Component: Management,
  },
  {
    path: TECHNOLOGY_ROUTE + "/:name",
    Component: Technology,
  },
  {
    path: PRODUCT_ROUTE + "/:name",
    Component: Product,
  },
  {
    path: HUMAN_RESOURCES_ROUTE + "/:name",
    Component: HumanResources,
  },
  {
    path: ENTERPRENEURSHIP_ROUTE + "/:name",
    Component: Enterpreneurship,
  },
  {
    path: LEGAL_AND_LAW_ROUTE + "/:name",
    Component: LegaAndLaw,
  },
  {
    path: BUSINESS_DEVELOPMENT + "/:name",
    Component: BusinessDevelopment,
  },
  {
    path: HOME_PAGE,
    Component: HomePage,
  },
];
