import { useSelector, useDispatch } from "react-redux";
import { setUserData, changeBalance, pushTransaction, clearUserData } from "../store/store.tsx";

export const useUser = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.userData);

  const setUser = (data: any) => dispatch(setUserData(data));
  const updateBalance = (amount: any) => dispatch(changeBalance(amount));
  const addTransaction = (transaction: any) => dispatch(pushTransaction(transaction));
  const resetUser = () => dispatch(clearUserData());

  return { user, setUser, updateBalance, addTransaction, resetUser };
};