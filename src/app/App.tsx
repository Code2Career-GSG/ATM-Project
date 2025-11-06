import routes from "./routes";
import { RouterProvider } from "react-router-dom";
import ToastNotification from "../utils/toast"
function App() {
  return (
    <>
      <RouterProvider router={routes} />
      
      <ToastNotification />
    </>
  );
}

export default App;
