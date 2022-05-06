import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [isEdited, setIsEdited] = useState(false);
  const onSaveExpenseData = (enterExpenseData) => {
    const expenseData = {
      ...enterExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEdited(false);
  };
  const starteditedHandler = () => {
    setIsEdited(true);
  };
  const stopeditedHandler = () => {
    setIsEdited(false);
  };

  return (
    <div className="new-expense">
      {!isEdited && (
        <button onClick={starteditedHandler}>Add New Expenses</button>
      )}
      {isEdited && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseData}
          onCancle={stopeditedHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
