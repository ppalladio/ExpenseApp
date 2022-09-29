import Card from './Card';
import { useState } from 'react';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
function Expenses(props) {
    const [year, setYear] = useState('2021');
    const selectYearHandler = (year) => {
        setYear(year);
    };

    const filteredExpenses = props.item.filter(
        (expense) => expense.date.getFullYear().toString() === year,
    ); //.props.item point to the expenses object
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={year}
                    onSelectYear={selectYearHandler}
                />
                {/* //.two way binding [selected={year} and in the filter add a new property to select tag] */}

                {filteredExpenses.map((expense, _index) => (
                    <ExpenseItem
                        key={expense.id} //!always add key when mapping out list of items of react wont render the whole list every time something gets added
                        title={expense.tltle}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))}
                {/*//' use .map to transform array to object to jsx elements 
                //![item = expenses] in the App.js*/}

                {/* (//:using props to get data from parent component, and in the parent component, the data passed in should be specified.eg item = expenses in App.js')
                <ExpenseItem
                    title={props.item[1].title}
                    amount={props.item[1].amount}
                    date={props.item[1].date}
                />
                */}
            </Card>
        </div>
    );
}

export default Expenses;
