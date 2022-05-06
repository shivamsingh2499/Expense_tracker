import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    inputTitle: "",
    inputAmount: "",
    inputDate: "",
  });
  const titleHandler = (event) => {
    setUserInput({
      ...userInput,
      inputTitle: event.target.value,
    });
  };
  const amountHandler = (event) => {
    setUserInput({
      ...userInput,
      inputAmount: event.target.value,
    });
  };
  const dateHandler = (event) => {
    setUserInput({
      ...userInput,
      inputDate: event.target.value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: userInput.inputTitle,
      amount: +userInput.inputAmount,
      date: new Date(userInput.inputDate),
    };
    props.onSaveExpenseData(expenseData);
    setUserInput({
      inputTitle: "",
      inputAmount: "",
      inputDate: "",
    });

  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            type="text"
            value={userInput.inputTitle}
            onChange={titleHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountHandler}
            value={userInput.inputAmount}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateHandler}
            value={userInput.inputDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancle}>Cancle</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
