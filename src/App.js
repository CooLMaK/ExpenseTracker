import React, { useState } from "react";
import ExpenseDetails from "./components/Expense/ExpenseDetails";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXP = [
  {
    id: 'e1',
    title: 'Car Insurance',
    date: new Date(2021, 10, 28),
    amount: 8000.00
  },
  {
    id: 'e2',
    title: 'Grocery',
    date: new Date(2021, 10, 25),
    amount: 4000.00
  },
  {
    id: 'e3',
    title: 'Books',
    date: new Date(2021, 8, 15),
    amount: 525.00
  },
  {
    id: 'e4',
    title: 'Online Shopping',
    date: new Date(2021, 5, 20),
    amount: 4069.00
  },
];

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXP);

  /*return React.createElement('div', {},
    React.createElement('h2', {}, "Let's get Started"),
    React.createElement(ExpenseDetails, { items: expense })
  );*/

  const extractData = (expense) => {
    setExpenses((prevExp) => {
      return [expense, ...prevExp]
    })
  }
  return (
    <div>
      <NewExpense onExpenseHandeller={extractData} />
      <ExpenseDetails item={expenses} />


    </div>
  );
}

export default App;
