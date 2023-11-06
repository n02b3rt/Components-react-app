import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem expenses={props.items[0]} />
      <ExpenseItem expenses={props.items[1]} />
      <ExpenseItem expenses={props.items[2]} />
      <ExpenseItem expenses={props.items[3]} />
    </Card>
  );
}
export default Expenses;
