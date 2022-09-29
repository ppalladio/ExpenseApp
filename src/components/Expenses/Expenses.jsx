import Card from '../UI/Card';
import { useState } from 'react';
import './Expenses.scss';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
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
                <ExpensesList item ={filteredExpenses}/>

                {/* //.two way binding [selected={year} and in the filter add a new property to select tag] */}
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
