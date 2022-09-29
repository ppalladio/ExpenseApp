import './ExpenseItem.css';

import ExpenseDate from './ExpenseDate';
import Card from './Card';
function ExpenseItem(props) {

//' useState(), inside is the initial state, as well as the first parameter of the array
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;
