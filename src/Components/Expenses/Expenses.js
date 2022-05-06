import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "../Expenses/ExpensesChart";
function Expenses(props) {
  // console.log(items);
  const [filterYear, setFilterYear] = useState("2022");
  const filterhandler = (selectYear) => {
    setFilterYear(selectYear);
  };
  const FilteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });
  
  return (
    <>
      <Card className="expenses">
        <ExpensesFilter selected={filterYear} onChangeFilter={filterhandler} />
        <ExpensesChart expenses={FilteredExpenses}/>
        <ExpensesList items={FilteredExpenses} />
      </Card>
    </>
  );
}

export default Expenses;
