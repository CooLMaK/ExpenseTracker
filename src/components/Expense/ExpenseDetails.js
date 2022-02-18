import ExpensesList from './ExpensesList';
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesChart from './ExpensesChart';

const ExpenseDetails = (props) => {
    //const currArr = []
    const [years, setYear] = useState('2020');
    const addNewYear = (years) => {
        setYear(years);
    }

    /* for (let yr of props.item) {
         let newDate = new Date(yr.date);
         let year = newDate.getFullYear();
         if (year == years) {
             currArr.push(yr);
         }
     }*/

    const filteredExpenses = props.item.filter((expenses) => {
        return expenses.date.getFullYear().toString() === years;
    })

    return (
        <div>
            <li>
                <Card className="expenses">
                    <ExpensesChart expenses={filteredExpenses} />
                    <ExpensesFilter selectedYear={years} onYearChange={addNewYear} />

                    <ExpensesList item={filteredExpenses} />
                </Card>
            </li>
        </div>
    )
}

export default ExpenseDetails;