import { useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

const { balance, transactions } = useSelector((state: RootState) => state.userData);

useEffect(() => {
  localStorage.setItem("userData", JSON.stringify({ balance, transactions }));
}, [balance, transactions]);
