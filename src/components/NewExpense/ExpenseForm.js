import { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm() {
    const [_title, setTitle] = useState('');
    const [_amount, setAmount] = useState('')
    const [date, setDate] = useState('')
    const titleChangeHandler = (e) => {
        setTitle(e.target.value);
    };
    const amountChangeHandler = (e) => {
        setAmount(e.target.value);
    }
    const dateChangeHandler = (e) => {
        setDate(e.target.value);
    }
    //: single state (alternative method)
    // const [userInput, setUserInput] = useState({
    //     title:'',
    //     amount:'',
    //     date:''
    // })
    // ' update state depends on previous states (when using single state) best practice
    // const dateChangeHandler = (e)=>{
    //     setUserInput((prevState)=>{
    //         return {...prevState, date: e.target.value}
    //     })
    // }


    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    {/*//' single input control */}
                    <label>Title</label>
                    <input onChange={ titleChangeHandler } type="text" />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler }/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="Date" min="2019-01-01" max="2023-12-31" onChange={dateChangeHandler}/>
                </div>

                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
            ;
        </form>
    );
}

export default ExpenseForm;