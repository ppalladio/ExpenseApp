import './NewExpense';
import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
function NewExpense(props) {
    const [pressed, setPressed] = useState(false);
    const formDataHandler = (enteredExpenseData) => {
        //.enteredExpenseData is the data received from child element
        const expenseData = {
            id: Math.random().toString(),
            ...enteredExpenseData, //' the expected data is expected to be received from child component.
        };
        props.onSaveExpenseDate(expenseData);
        setPressed(false);
    };

    const pressedHandler = () => {
        setPressed(true);
    };
    const cancelEditiong = () => {
        setPressed(false);
    };
    return (
        <div className="new-expense">
            {/*   */}
            {!pressed && ( //.if the button is not pressed, then show button, pressed is falsy !pressed is truthy, pressedhandler is truthy, so only the button is showing
                <button onClick={pressedHandler}>Add New Expense</button>
            )}
            {pressed && ( //.else, show form evaluate falsy onSaveExpense is falsy and onCancelEditing is falsy, so the form is showing
                <ExpenseForm
                    onSaveExpense={formDataHandler}
                    onCancelEditing={cancelEditiong}
                />
            )}
            {/* //'onSaveExpense, the value of this function will be triggered when something is happened inside of this component(receive the formDataHandler as a value) */}
        </div>
    );
}

export default NewExpense;
