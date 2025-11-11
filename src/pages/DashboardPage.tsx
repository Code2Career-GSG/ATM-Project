import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Confetti from "react-confetti";
import type { RootState,Transaction} from "../store/store";
import "../pages/DashmoardPage.css"
import {  setShowBirthday } from "../store/store";
import deposit from "../assets/deposit.png";
import withdrawal from "../assets/withdrawl.png";
import total from "../assets/total.png";






export const DashboardPage = () => {
  const dispatch = useDispatch();


  const user = useSelector((state: RootState) => state.userData) as {
  firstName: string;
  birthday: string;
  transactions: any[];
  
};
  const show = useSelector((state: RootState) => state.birthdayPopup.show);

  const showBirthdayPopup = () => dispatch(setShowBirthday(true));
  const hideBirthdayPopup = () => dispatch(setShowBirthday(false));

 
  const totalDeposits = user.transactions
    .filter((tx:Transaction) => tx.type === "deposit")
    .reduce((sum: number, tx: Transaction) => sum + tx.amount, 0);

  const totalWithdrawals = user.transactions
    .filter((tx: Transaction) => tx.type === "withdraw")
    .reduce((sum: number, tx: Transaction) => sum + tx.amount, 0);
const balance = useSelector((state: RootState) => state.userData.balance);



  useEffect(() => {
    const today = new Date();
    const birthday = new Date(user.birthday);

    if (
      today.getDate() === birthday.getDate() &&
      today.getMonth() === birthday.getMonth() &&
      !localStorage.getItem("birthdayShown")
    ) {
      showBirthdayPopup();
    localStorage.setItem("birthdayShown", "true");
    }
  }, [user, showBirthdayPopup]);

  const handleClosePopup = () => {
    hideBirthdayPopup();
  };
return (
    <div className="dashboard-container">




<div className="summary-bar">
  <div className="summary-item">
<img src={deposit} alt="Deposit" className="icon-img" /> 
  <div className="label">Total Deposits</div>
    <div className="value">${totalDeposits}</div>
  </div>

  <div className="summary-item">
    <img src={withdrawal} alt="withdrawal" className="icon-img" /> 

    <div className="label">Total Withdrawals</div>
    <div className="value">${totalWithdrawals}</div>
  </div>

  <div className="summary-item">
        <img src={total} alt="total" className="icon-img" /> 

    <div className="label">Balance</div>
    <div className="value">${balance}</div>
  </div>
</div>


      {show && (
        <div className="birthday-popup">
          <Confetti width={window.innerWidth} height={window.innerHeight} />
          <h2>🎉 Happy Birthday, {user.firstName}! 🎂</h2>
          <p>Wishing you a day full of happiness and joy! 💖</p>
          <button onClick={handleClosePopup}>Close</button>
        </div>
      )}
    </div>
  );
};
