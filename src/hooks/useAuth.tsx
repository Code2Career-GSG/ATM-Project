import { useSelector, useDispatch } from "react-redux";
import { setLogged } from "../store/store.tsx";

export const useAuth = () => {
  const dispatch = useDispatch();
  const logged = useSelector((state: any) => state.login.logged);

  const setLogin = (value: any) => dispatch(setLogged(value));

  return { logged, setLogin };
};
