import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
    // single - more common
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

// objective
//     const [userInput,setUserInput] = useState({
//         enteredTitle: '',
//         enteredAmount: '',
//         enteredDate: '',

//     });
//   const titleChangeHandler = (event) => {
//     // setUserInput({
//     //     ...userInput,
//     //     enteredAmount: event.target.value,
        
//     // });
//     /*The approach above can cause problems, in the following record we store a "snapshot" of the previous state so we can be confident of the data that was already in the object and which we do not update*/ 
//     setUserInput(prevState =>{
//         return  {
//             ...prevState, enteredTitle: event.target.value
//         };
//     });
//   };
//     const amountChangeHandler = (event) => {
//         setUserInput({
//             ...userInput,
//             enteredAmount: event.target.value,
            
//         });
//   };
//   const dateChangeHandler = (event) => {
//     setUserInput({
//         ...userInput,
//         enteredDate: event.target.value,
        
//     });
//   };


  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2023-12-31"
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
