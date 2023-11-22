import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) =>{
    // In this function, the data passed from the ExpenseForm component goes to the
    const onSaveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData={
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        // The data that we have accepted and edited must still be sent to the head function, which contains the array of objects from the expenses (Note: props.Parameter name to receive the value of the ExpenseData object (the object we are passing in this case "expenseData"))
        props.onAddExpense(expenseData);
        // console.log(expenseData);
    };

    return(
        <div className='new-expense'>
            {/* the data thus passed by props from the onSaveExpenseData function are passed to the component parameter and are passed to the onSaveExpenseDataHandler() function also as a parameter*/}
            <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
        </div>
    );
}

export default NewExpense;