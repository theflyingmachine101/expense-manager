import ExpenseItem from "./ExpenseItem/ExpenseItem"
import  './ExpenseItems.css'
let ExpenseItems=(props)=>{
    const expenses=props.expenses.map(function(item){
            return <ExpenseItem item={item}/>;
    });
    return <div className="expenses">{expenses}</div>;
}

export default ExpenseItems;