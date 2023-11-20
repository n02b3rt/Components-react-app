import React, {useState} from 'react';
// useState - react Hook

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.expenses.title);
  // przyjmuje zmienną, a druga wartość jest to funkcja wykonująca

  // let title = props.expenses.title;
  // Dobrą praktyką jest to że piszemy slowo Handler - jeśli funkcja jest wywoływana przez jakiś event aby łatwiej bylo czytac kod
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
      {/* nie wolno wpisywać fukcji tak: funkcja() ponieważ te nawiasy sprawiają że fukncja zostaje wywołana jeśli nie damy tych nawiasów to tworzymy wskaźnik na fukcję która zadziała jak klikniemy na przycisk */}
      <button onClick={clickHandler}> Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
