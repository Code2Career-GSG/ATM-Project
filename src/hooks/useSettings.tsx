import { useSelector, useDispatch } from "react-redux";
import { changeMode } from "../store/store.tsx";

export const useSettings = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state: any) => state.appSettings.mode);

  const toggleMode = () => dispatch(changeMode());

  return { mode, toggleMode };
};
