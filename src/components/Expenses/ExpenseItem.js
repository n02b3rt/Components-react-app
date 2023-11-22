import React, {useState} from 'react';
// useState - react Hook

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.expenses.title);
  // takes a variable and the second value is the function that performs the

  // let title = props.expenses.title;
  // It is good practice to write the word Handler if a function is called by an event in order to make the code easier to read.
  const clickHandler = () =>{
    setTitle('Updated!');
    console.log(title);
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expenses.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.expenses.amount}</div>
      </div>
      {/* do not write a function like this: function() because these parentheses make the function called if we do not give these parentheses, we create a pointer to a function that will work when we click on the button*/}
      <button onClick={clickHandler}> Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
