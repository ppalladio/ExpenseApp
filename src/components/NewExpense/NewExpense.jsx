import './NewExpense';
import ExpenseForm from './ExpenseForm';
function NewExpense(props) {
    const formDataHandler = (enteredExpenseData) => {
        //.enteredExpenseData is the data received from child element
        const expenseData = {
            id: Math.random().toString(),
            ...enteredExpenseData,//' the expected data is expected to be received from child component. 
        };
        props.onSaveExpenseDate(expenseData)
    };
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpense={formDataHandler} />
            {/* //'onSaveExpense, the value of this function will be triggered when something is happened inside of this component(receive the formDataHandler as a value) */}
        </div>
    );
}

export default NewExpense;
