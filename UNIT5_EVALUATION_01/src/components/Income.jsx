import React, { useEffect, useState } from "react";
import { useDataContext } from "../context/DataProvider";

const Income = () => {
  const { income, addIncome, fetchIncome } = useDataContext();
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addIncome({ amount: amount, description: description });
    setAmount("");
    setDescription("");
  };
  useEffect(() => fetchIncome, []);

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={amount}
          placeholder="add income"
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="text"
          value={description}
          placeholder="add description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>add</button>
      </form>
      <div>
        <h2>Income Entries</h2>
        {income?.map((inc, index) => (
          <div id="disp" key={index}>
            <h2>Rs {inc.amount}</h2>
            <h2>{inc.description}</h2>
          </div>
        ))}
        {income.length === 0 && <h3>No entries found</h3>}
      </div>
    </>
  );
};

export default Income;
