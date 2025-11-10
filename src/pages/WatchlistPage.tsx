import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store/store";
import { addFavCurrency, removeFavCurrency } from "../store/store";
import "../WatchlistPage.css";
//import { Star } from "lucide-react";
export const WatchlistPage = () => {
  const dispatch = useDispatch();

  const favList = useSelector((state: RootState) => state.currencies.favList);
  const rates = useSelector((state: RootState) => state.currencies.rates);
useEffect(() => {
  localStorage.setItem("favList", JSON.stringify(favList));
}, [favList]);

useEffect(() => {
  const storedFav = localStorage.getItem("favList");
  if (storedFav) {
    // نحول المصفوفة المخزنة إلى Redux state مرة واحدة فقط
    const currencies: string[] = JSON.parse(storedFav);
    currencies.forEach((currency) => {
      dispatch(addFavCurrency(currency));
    });
  }
}, [dispatch]);

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
  className={`star-btn ${favList.includes(currency) ? "active" : ""}`}
  onClick={() => toggleFav(currency)}
>
  <svg width="22" height="22" viewBox="0 0 24 24">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
</button>



          </div>
        ))}
      </div>
    </div>
  );
};
