import React from "react";
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
    if (props.item.length === 0) {
        return <h2 className="expenses-list__fallback">No Expense Added.</h2>
    }

    return (
        <ul className="expenses-list">
            {
                props.item.map(expenses => <ExpenseItem key={expenses.id}
                    title={expenses.title} date={expenses.date} amount={expenses.amount} />)
            }
        </ul>
    )
}

export default ExpensesList;