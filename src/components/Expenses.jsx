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
            <ExpensesFilter selected = {year} onSelectYear={selectYearHandler} />
            {/* //.two way binding [selected={year} and in the filter add a new property to select tag] */}
                <ExpenseItem
                    title={props.item[0].title}
                    amount={props.item[0].amount}
                    date={props.item[0].date}
                />
                {/* (//'using props to get data from parent component, and in the parent component, the data passed in should be specified.eg item = expenses in App.js') */}
                <ExpenseItem
                    title={props.item[1].title}
                    amount={props.item[1].amount}
                    date={props.item[1].date}
                />
                <ExpenseItem
                    title={props.item[2].title}
                    amount={props.item[2].amount}
                    date={props.item[2].date}
                />
                <ExpenseItem
                    title={props.item[3].title}
                    amount={props.item[3].amount}
                    date={props.item[3].date}
                />
            </Card>
        </div>
    );
}

export default Expenses;
