import './ExpensesList.scss';
import ExpenseItem from './ExpenseItem';
function ExpensesList(props) {
    //.move the logic cheeck before the return statement

    if (props.item.length === 0) {
        return <h2 className="expense-list__fallback">Found no expenses. </h2>;
    }

    return (
        <ul className="expense-list">
            {props.item.map(
                //' use .map to transform array to object to jsx elements
                (expense, _index) => (
                    <ExpenseItem //'[item = expenses] in the App.js*
                        key={expense.id} //!always add key when mapping out list of items of react wont render the whole list every time something gets added
                        title={expense.tltle}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ),
            )}
        </ul>
    );
}

export default ExpensesList;
