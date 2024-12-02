import React, { useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Income from "./components/Income";
import Transaction from "./components/Transaction";
import Expense from "./components/Expense";
import Saving from "./components/Saving";
import { useDataContext } from "./context/DataProvider";

const App = () => {
  const { fetchIncome, fetchExpenses } = useDataContext();
  useEffect(() => fetchIncome, []);
  useEffect(() => fetchExpenses, []);

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/income">Income</Link>
        <Link to="/expenses">Expenses</Link>
        <Link to="/transactions">Transactions</Link>
        <Link to="/savings">Saving</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/income" element={<Income />} />
        <Route path="/expenses" element={<Expense />} />
        <Route path="/savings" element={<Saving />} />
        <Route path="/transcations" element={<Transaction />} />
      </Routes>
    </>
  );
};

export default App;
