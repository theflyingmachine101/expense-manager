import React, { useState } from 'react';

import ExpenseItem from "./ExpenseItem/ExpenseItem"
import ExpensesFilter from "./ExpenseFilter/ExpenseFilter";
import ExpenseChart from './ExpenseChart/ExpenseChart';
import  './ExpenseItems.css'

let ExpenseItems=(props)=>{
    const [selectedYear,setSelectedYear]=useState('2022');

  const selectedYearHandler=(event)=>{
    setSelectedYear(event.target.value);
  }

  const filteredExpenses=props.expenses.filter((item)=>{
      return selectedYear==item.date.getFullYear();

  });
    let expenses=filteredExpenses.map(function(item,i){
            return <ExpenseItem key={i} item={item}/>;
    });

    if(expenses.length==0)
      expenses=<p className="not__found__description">No expenses found!</p>;
    

      
    return <div className="expenses">
        <ExpensesFilter changeSelectedYear={selectedYearHandler}></ExpensesFilter>
        <ExpenseChart expenses={filteredExpenses}></ExpenseChart>
        {expenses}
        </div>;
}

export default ExpenseItems;