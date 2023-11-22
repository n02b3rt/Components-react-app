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
  
// use of shared functions
//   const inputChangeHandler = (identifier, value) => {
//     if (identifier === "title") {
//       setEnteredTitle(value);
//     } else if (identifier === "date") {
//       setEnteredDate(value);
//     } else if (identifier === "amount") {
//       setEnteredAmount(value);
//     }
//   };

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
          {/* Thanks to this notation, the change will not occur at the start of the programme as usual with a normal function call, but will occur when the change occurs */}
          <input type="text" 
          /* use of shared functions */
        //   onChange={event => inputChangeHandler('title', event.target.value)}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            // use of shared functions
            // onChange={event => inputChangeHandler('amount', event.target.value)}
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2023-12-31"
            // use of shared functions
            // onChange={event => inputChangeHandler('date', event.target.value)}
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
