import NewExpense from "./Components/NewExpense/NewExpense";
import Expenses from "./Components/Expenses/Expenses";
import React,{useState} from "react";
  const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: "Toilet Paper",
      amount: 12,
      date: new Date(2022, 5, 1),
    },
    {
      id: 'e2',
      title: "Car Insurance",
      amount: 3000,
      date: new Date(2022, 5, 10),
    },
    {
      id: 'e3',
      title: "New TV",
      amount: 120,
      date: new Date(2022, 5, 15),
    },
    {
      id: 'e4',
      title: "New desk",
      amount: 500,
      date: new Date(2022, 5, 25),
    },
  ];
  const App=()=>{
  const[expenses,setExpenses]=useState(DUMMY_EXPENSES)
  const addExpenseHandler=(expense)=>{
    setExpenses((prevExpenses)=>{
      return [expense,...prevExpenses];
    });
  }
  return (
    <div>
     <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
