import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import routes from "./routes";
import { changeMode } from "../store/store";
import type { RootState } from "../store/store";

const UserDataSync = () => {
  const { balance, transactions } = useSelector(
    (state: RootState) => state.userData
  );

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify({ balance, transactions }));
  }, [balance, transactions]);

  return null;
};

function App() {
  const mode = useSelector((state: RootState) => state.appSettings.mode);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedMode = localStorage.getItem("appMode");
    if (savedMode && savedMode !== mode) {
      dispatch(changeMode());
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("appMode", mode);
  }, [mode]);

  return (
    <div className={mode === "dark" ? "dark-mode" : "light-mode"}>
    
      <button
        onClick={() => dispatch(changeMode())}
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          border: "1px solid #888",
          padding: "6px 12px",
          borderRadius: "6px",
          cursor: "pointer",
          backgroundColor: mode === "dark" ? "#333" : "#f4f4f4",
          color: mode === "dark" ? "white" : "black",
          transition: "all 0.3s ease",
        }}
      >
        {mode === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>

    <UserDataSync />
      <RouterProvider router={routes} />
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
}

export default App;
