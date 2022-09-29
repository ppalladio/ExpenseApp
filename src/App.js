import Expenses from './components/Expenses/Expenses';
import { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
const init = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {
        id: 'e2',
        title: 'New TV',
        amount: 799.49,
        date: new Date(2021, 2, 12),
    },
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];
function App() {
    const [expenses, setExpenses] = useState(init);
    //. setExpenses([expense,...espenses])update depending on the previous state
    const saveExpenseDateHandler = (expense) => {
        setExpenses((prevState) => {
            return [expense, ...prevState];
        }); //.adding the new expense to the existing expenses array
    };
    return (
        <div>
            <NewExpense onSaveExpenseDate={saveExpenseDateHandler} />
            <Expenses item={expenses} />
            {/*//> item in the Expenses component points at a value the we want to pass into the Expenses component, which is expenses array  */}
        </div>
    );
}

export default App;
