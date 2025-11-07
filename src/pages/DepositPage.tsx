import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeBalance, pushTransaction } from "../store/store";
import type { RootState } from "../store/store";
import "../DepositPage.css";

export const DepositPage = () => {
  const dispatch = useDispatch();

  const balance = useSelector((state: RootState) => state.userData.balance);
  const username = useSelector((state: RootState) => state.userData.username);

  const [amount, setAmount] = useState("");

  const handleDeposit = (e: React.FormEvent) => {
    e.preventDefault();
    const numAmount = Number(amount);

    if (numAmount <= 0) {
      alert("Enter a valid amount!");
      return;
    }

    dispatch(changeBalance(balance + numAmount));

    const newTransaction = {
      id: Date.now(),
      type: "deposit",
      amount: numAmount,
      currency: "USD",
      target_user: username,
      date: new Date().toISOString(),
    };

    dispatch(pushTransaction(newTransaction));

    alert("Deposit successful!");
    setAmount("");
  };

  return (
  <div className="deposit-container">
    <h2>Deposit Page</h2>
    <p>Balance: ${balance}</p>

    <form className="deposit-form" onSubmit={handleDeposit}>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Deposit</button>
    </form>
  </div>
);

};
