import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../pages";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    Component: LoginPage,
  },
]);
export default routerConfig;
