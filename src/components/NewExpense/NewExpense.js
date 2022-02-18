import React, { useState } from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const newExpenseData = (expense) => {
        const expenses = {
            ...expense,
            id: Math.random().toString()
        }
        props.onExpenseHandeller(expenses);
        setIsEditing(false);
    }
    const isEditingHandeller = () => {
        setIsEditing(true);
    }
    const cancelEditing = () => {
        setIsEditing(false);
    }

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={isEditingHandeller}>Add New Expense</button>}
            {isEditing && <ExpenseForm onExpenseAdd={newExpenseData} onCancel={cancelEditing} />}
        </div>
    )
}

export default NewExpense;