import Card from './Card';
import { useState } from 'react';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
function Expenses(props) {
    const [year, setYear] = useState('2020');
    const selectYearHandler = (year) => {
        setYear(year);
    };
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={year}
                    onSelectYear={selectYearHandler}
                />
                {/* //.two way binding [selected={year} and in the filter add a new property to select tag] */}

                {props.item.map((expense) => (
                    <ExpenseItem
                        title={expense.tltle}
                        amount={expense.item}
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
