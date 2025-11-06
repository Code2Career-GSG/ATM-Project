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
import { MainLayout } from "../layout/MainLayout";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    Component: LoginPage,
  },
  {
    path: "/dashboard",
    Component: () => (
      <MainLayout>
        <DashboardPage />
      </MainLayout>
    ),
  },
  {
    path: "/deposit",
    Component: () => (
      <MainLayout>
        <DepositPage />
      </MainLayout>
    ),
  },
  {
    path: "/withdraw",
    Component: () => (
      <MainLayout>
        <WithdrawPage />
      </MainLayout>
    ),
  },
  {
    path: "/history",
    Component: () => (
      <MainLayout>
        <HistoryPage />
      </MainLayout>
    ),
  },
  {
    path: "/watchlist",
    Component: () => (
      <MainLayout>
        <WatchlistPage />
      </MainLayout>
    ),
  },
  {
    path: "/settings",
    Component: () => (
      <MainLayout>
        <SettingsPage />
      </MainLayout>
    ),
  },
  {
    path: "*",
    Component: () => (
      <MainLayout>
        <NotFoundPage />
      </MainLayout>
    ),
  },
]);
export default routerConfig;
