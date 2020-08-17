import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";
export const TranscationalList = () => {
  const { transactions } = useContext(GlobalContext);
  // console.log(context)
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={Transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
