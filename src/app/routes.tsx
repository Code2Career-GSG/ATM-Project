import { createBrowserRouter } from "react-router-dom";
import {
  DashboardPage,
  DepositPage,
  HistoryPage,
  LoginPage,
  NotFoundPage,
  SettingsPage,
  WatchlistPage,
  WithdrawPage,
} from "../pages";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    Component: LoginPage,
  },
  {
    path: "/dashboard",
    Component: DashboardPage,
  },
  {
    path: "/deposit",
    Component: DepositPage,
  },
  {
    path: "/withdraw",
    Component: WithdrawPage,
  },
  {
    path: "/history",
    Component: HistoryPage,
  },
  {
    path: "/watchlist",
    Component: WatchlistPage,
  },
  {
    path: "/settings",
    Component: SettingsPage,
  },
  {
    path: "*",
    Component: NotFoundPage,
  },
]);
export default routerConfig;
