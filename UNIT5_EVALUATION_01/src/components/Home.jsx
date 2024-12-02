import React, { useEffect, useState } from "react";
import { useDataContext } from "../context/DataProvider";

const Home = () => {
  const { income, expenses } = useDataContext();
  let totalAmount = 0;
  let totalExpense = 0;
  let totalSaving = 0;
  income.map((inc) => {
    totalAmount += parseInt(inc.amount);
  });
  expenses.map((inc) => {
    totalExpense += parseInt(inc.amount);
  });
  totalSaving = totalAmount - totalExpense;

  return (
    <div>
      <h2>Amount: {totalAmount}</h2>
      <h2>Expense: {totalExpense}</h2>
      <h2>Savings: {totalSaving}</h2>
    </div>
  );
};

export default Home;
