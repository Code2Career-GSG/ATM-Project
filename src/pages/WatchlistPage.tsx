import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store/store";
import { addFavCurrency, removeFavCurrency } from "../store/store";
import "../WatchlistPage.css";
import { Star } from "lucide-react";
export const WatchlistPage = () => {
  const dispatch = useDispatch();

  const favList = useSelector((state: RootState) => state.currencies.favList);
  const rates = useSelector((state: RootState) => state.currencies.rates);

  const toggleFav = (currency: string) => {
    if (favList.includes(currency)) {
      dispatch(removeFavCurrency(currency));
    } else {
      dispatch(addFavCurrency(currency));
    }
  };

  const allCurrencies = Object.keys(rates) as Array<keyof typeof rates>;

  return (
    <div className="watchlist-container">
      <h2>Watchlist</h2>
      <div className="watchlist-grid">
        {allCurrencies.map((currency) => (
          <div className="currency-card" key={currency}>
            <div className="currency-info">
              <h3>{currency}</h3>
              <p>{rates[currency]} ILS</p>
            </div>
    
<button
  className="star-btn"
  onClick={() => toggleFav(currency)}
>
  <Star
    size={22}
    color={favList.includes(currency) ? "#2a9d8f" : "#000"} 
    fill={favList.includes(currency) ? "#2a9d8f" : "none"}
  />
</button>


          </div>
        ))}
      </div>
    </div>
  );
};
