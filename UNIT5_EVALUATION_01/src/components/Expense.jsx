import React, { useEffect, useState } from "react";
import { useDataContext } from "../context/DataProvider";

const Expense = () => {
  const { expenses, addExpense, fetchExpenses } = useDataContext();
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense({
      amount: amount,
      description: description,
      category: category,
    });
    setAmount("");
    setDescription("");
    setCategory("");
  };
  useEffect(() => fetchExpenses, []);

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={amount}
          placeholder="add expenses"
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="text"
          value={description}
          placeholder="add description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          value={category}
          placeholder="add category"
          onChange={(e) => setCategory(e.target.value)}
        />
        <button>add</button>
      </form>
      <div>
        <h2>Expense List</h2>
        {expenses?.map((inc, index) => (
          <div id="disp" key={index}>
            <h2>Rs {inc.amount}</h2>
            <h2>{inc.description}</h2>
            <h2>{inc.category}</h2>
          </div>
        ))}
        {expenses.length === 0 && <h3>No entries found</h3>}
      </div>
    </>
  );
};

export default Expense;
