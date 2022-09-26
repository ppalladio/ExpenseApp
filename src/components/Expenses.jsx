import Card from './Card'
import './Expenses.css'

import ExpenseItem from './ExpenseItem';
function Expenses(props){

    return(
        <Card className='expenses'>
            <ExpenseItem title={props.item[0].title} amount={props.item[0].amount} date={props.item[0].date}/>(//'using props to get data from parent component, and in the parent component, the data passed in should be specified.eg item = expenses in App.js')
            <ExpenseItem title={props.item[1].title} amount={props.item[1].amount} date={props.item[1].date}/>
            <ExpenseItem title={props.item[2].title} amount={props.item[2].amount} date={props.item[2].date}/>
            <ExpenseItem title={props.item[3].title} amount={props.item[3].amount} date={props.item[3].date}/>
        </Card>
    )
}

export default Expenses;