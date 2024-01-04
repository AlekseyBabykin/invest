import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import BusinessDevelopment from "./pages/skip/BusinessDevelopment";
import CommonPage from "./pages/CommonPage";
import Enterpreneurship from "./pages/skip/Enterpreneurship";
import Finance from "./pages/skip/Finance";
import HomePage from "./pages/HomePage";
import HumanResources from "./pages/skip/HumanResources";
import LegaAndLaw from "./pages/skip/LegaAndLaw";
import Management from "./pages/skip/Management";
import Marketing from "./pages/skip/Marketing";
import Product from "./pages/skip/Product";
import Technology from "./pages/skip/Technology";

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
  GENERATE_STARTUP,
  GENERATE_LOGO,
} from "./utils/consts";
import GenerateStartup from "./pages/GenerateStartup";
import GenerateLogo from "./pages/GenerateLogo";

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
    Component: CommonPage,
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
    Component: CommonPage,
  },
  {
    path: MANAGEMENT_ROUTE + "/:name",
    Component: CommonPage,
  },
  {
    path: TECHNOLOGY_ROUTE + "/:name",
    Component: CommonPage,
  },
  {
    path: PRODUCT_ROUTE + "/:name",
    Component: CommonPage,
  },
  {
    path: HUMAN_RESOURCES_ROUTE + "/:name",
    Component: CommonPage,
  },
  {
    path: ENTERPRENEURSHIP_ROUTE + "/:name",
    Component: CommonPage,
  },
  {
    path: LEGAL_AND_LAW_ROUTE + "/:name",
    Component: CommonPage,
  },
  {
    path: BUSINESS_DEVELOPMENT + "/:name",
    Component: CommonPage,
  },
  {
    path: HOME_PAGE,
    Component: HomePage,
  },
  {
    path: GENERATE_STARTUP,
    Component: GenerateStartup,
  },
  {
    path: GENERATE_LOGO,
    Component: GenerateLogo,
  },
];
