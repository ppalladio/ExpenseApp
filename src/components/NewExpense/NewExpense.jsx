import './NewExpense';
import ExpenseForm from './ExpenseForm';
function NewExpense() {
    const formDataHandler = (enteredExpenseData) => {
        //.enteredExpenseData is the data received from child element
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
    };
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpense={formDataHandler} />
        </div>
    );
}

export default NewExpense;
