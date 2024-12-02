import React from "react";
import { useDataContext } from "../context/DataProvider";

const Saving = () => {
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
  console.log(totalAmount);

  return <h2>Savings : {totalSaving}</h2>;
};

export default Saving;
