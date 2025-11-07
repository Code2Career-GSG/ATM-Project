import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeBalance, pushTransaction } from "../store/store";
import type { RootState } from "../store/store";
import "../WithdrawPage.css";

export const WithdrawPage = () => {
  const dispatch = useDispatch();

  const balance = useSelector((state: RootState) => state.userData.balance);
  const username = useSelector((state: RootState) => state.userData.username);

  const [amount, setAmount] = useState("");

  const handleWithdraw = (e: React.FormEvent) => {
    e.preventDefault();
    const numAmount = Number(amount);

    if (numAmount <= 0) {
      alert("Enter a valid amount!");
      return;
    }

    if (numAmount > balance) {
      alert("Insufficient balance!");
      return;
    }

    dispatch(changeBalance(balance - numAmount));

    const newTransaction = {
      id: Date.now(),
      type: "withdraw",
      amount: numAmount,
      currency: "USD",
      target_user: username,
      date: new Date().toISOString(),
    };

    dispatch(pushTransaction(newTransaction));

    alert("Withdrawal successful!");
    setAmount("");
  };

  return (
    <div className="withdraw-container">
      <h2>Withdraw Page</h2>
      <p>Balance: ${balance}</p>

      <form className="withdraw-form" onSubmit={handleWithdraw}>
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Withdraw</button>
      </form>
    </div>
  );
};
