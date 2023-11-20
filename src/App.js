import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <NewExpense/>
      <Expenses items={expenses} />
    </div>
    /* 
    If we were not using JSX then this code:
    <div>
      <h2>Let's get started</h2>
      <Expenses items={expenses}/>
    </div>
    It would look like this:
    React.createElement(
      "div",
      "",
      React.createElement("h2", {}, "Let's get started<"),
      React.createElement(Expenses, {items: expenses})
    )
    Therefore, it is important to remember that there must always be a wprapper for other elements because the returned element is an array.
    */
    
  );
}

export default App;
