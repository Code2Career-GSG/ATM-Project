import "./App.css";
import routes from "./routes";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <RouterProvider router={routes} />
      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
}

export default App;
