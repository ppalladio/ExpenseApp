import { useState } from 'react';
import './NewExpense.css';

function ExpenseForm(props) {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const titleChangeHandler = (e) => {
        setTitle(e.target.value);
    };
    const amountChangeHandler = (e) => {
        setAmount(e.target.value);
    };
    const dateChangeHandler = (e) => {
        setDate(e.target.value);
    };
    //: single state (alternative method)
    // const [userInput, setUserInput] = useState({
    //     title:'',
    //     amount:'',
    //     date:''
    // })
    //. update state depends on previous states (when using single state) best practice
    // const dateChangeHandler = (e)=>{
    //     setUserInput((prevState)=>{
    //         return {...prevState, date: e.target.value}
    //     })
    // }

    const submitHandler = (e) => {
        e.preventDefault();
        //.bundle the data
        const expenseData = {
            title: title, //. key(arbitrary name) : value(first variable of useState array/ inital state)
            amount: amount,
            date: new Date(date),
        };
        props.onSaveExpense(expenseData); //' call custom function, pass the data generate in this component up to the parent file[newExpenses.js]
        setAmount('');
        setDate('');
        setTitle('');
    };

    return (
        <form onSubmit={submitHandler}>
            {/* //.. the form will trigger an event when the submit button is clicked */}
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    {/*//' single input control */}
                    <label>Title</label>
                    <input
                        onChange={titleChangeHandler}
                        value={title}
                        type="text"
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={amount} //'add property "value" and point back to initial state to create two way binding
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="Date"
                        min="2019-01-01"
                        max="2023-12-31"
                        value={date}
                        onChange={dateChangeHandler}
                    />
                </div>
                <div className="new-expense__actions">
                    <button 
                        type="button"
                        onClick={props.onCancelEditing} //.use props to pass the cancelEditiong function
                    >
                        Cancel
                    </button>
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
}

export default ExpenseForm;
