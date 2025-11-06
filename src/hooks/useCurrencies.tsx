import { useSelector, useDispatch } from "react-redux";
import { addFavCurrency, removeFavCurrency } from "../store/store.tsx";

export const useCurrencies = () => {
  const dispatch = useDispatch();
  const rates = useSelector((state: any) => state.currencies.rates);
  const favList = useSelector((state: any) => state.currencies.favList);

  const addFav = (currency: any) => dispatch(addFavCurrency(currency));
  const removeFav = (currency: any) => dispatch(removeFavCurrency(currency));

  return { rates, favList, addFav, removeFav };
};
