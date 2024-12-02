import axios from "axios";
import React, { Children, useContext, useEffect, useState } from "react";
import { createContext } from "react";

const dataContext = createContext({
  income: [],
  expenses: [],
  savings: [],
  trasactions: [],
});

const DataProvider = ({ children }) => {
  const [income, setIncome] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [savings, setSavings] = useState([]);
  const [transactions, setTransaction] = useState([]);

  const fetchAllData = async () => {
    // const incomeData = await axios.get(
    //   `https://finance-manager-a80c8-default-rtdb.firebaseio.com/income.json`
    // );
    // if (incomeData.data) setIncome(incomeData.data);
    // const savingsData = await axios.get(
    //   `https://finance-manager-a80c8-default-rtdb.firebaseio.com/savings.json`
    // );
    // if (savingsData) setIncome(savingsData);
    // const expenseData = await axios.get(
    //   `https://finance-manager-a80c8-default-rtdb.firebaseio.com/expenses.json`
    // );
    // if (expenseData) setExpenses(expenseData);
    // const transactionData = await axios.get(
    //   `https://finance-manager-a80c8-default-rtdb.firebaseio.com/transactions.json`
    // );
    // if (transactionData) setTransaction(transactionData);
  };

  const fetchIncome = async () => {
    const incomeData = await axios.get(
      `https://finance-manager-a80c8-default-rtdb.firebaseio.com/income.json`
    );
    let arr = [];

    for (let key in incomeData.data) {
      arr.push({ id: key, ...incomeData.data[key] });
    }

    setIncome([...arr]);
  };
  const fetchExpenses = async () => {
    const expensesData = await axios.get(
      `https://finance-manager-a80c8-default-rtdb.firebaseio.com/expenses.json`
    );
    let arr = [];

    for (let key in expensesData.data) {
      arr.push({ id: key, ...expensesData.data[key] });
    }

    setExpenses([...arr]);
  };
  const fetchSavings = async () => {
    const expensesData = await axios.get(
      `https://finance-manager-a80c8-default-rtdb.firebaseio.com/savings.json`
    );
    let arr = [];

    for (let key in expensesData.data) {
      arr.push({ id: key, ...expensesData.data[key] });
    }

    setSavings([...arr]);
  };

  const addIncome = async (income) => {
    await axios.post(
      `https://finance-manager-a80c8-default-rtdb.firebaseio.com/income.json`,
      income
    );
    setIncome((prev) => [...prev, income]);
  };
  const addExpense = async (expense) => {
    await axios.post(
      `https://finance-manager-a80c8-default-rtdb.firebaseio.com/expenses.json`,
      expense
    );
    setExpenses((prev) => [...prev, expense]);
  };
  const addSaving = async (savings) => {
    await axios.post(
      `https://finance-manager-a80c8-default-rtdb.firebaseio.com/savings.json`,
      savings
    );
    setSavings((prev) => [...prev, savings]);
  };

  const value = {
    fetchAllData,
    fetchIncome,
    fetchExpenses,
    addExpense,
    income,
    setIncome,
    expenses,
    setExpenses,
    savings,
    setSavings,
    transactions,
    setTransaction,
    addIncome,
  };

  return <dataContext.Provider value={value}>{children}</dataContext.Provider>;
};
export const useDataContext = () => useContext(dataContext);

export default DataProvider;
