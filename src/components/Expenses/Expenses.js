import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

const Expenses = (props) => {
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
