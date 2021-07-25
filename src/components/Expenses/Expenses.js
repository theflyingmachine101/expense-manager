import React,{ useState } from 'react';
import ExpenseItems from './ExpenseItems/ExpenseItems'
import ExpenseForm from './NewExpense/ExpenseForm'
import './Expenses.css'


const Expenses =()=>{
    const [addExpenseForm,setExpenseForm]=useState(false);
    const [expenses,setExpenses] =useState( [
      {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 100,
        date: new Date(2020, 7, 14),
      },
      { 
        id: 'e2', 
        title: 'New TV',
        amount: 100, 
        date: new Date(2021, 2, 12)
       },
      {
        id: 'e3',
        title: 'Car Insurance',
        amount: 100,
        date: new Date(2021, 2, 28),
      }
    ]);

    const changeAddExpenseFormHandler=()=>{
      const newState=!addExpenseForm;
      setExpenseForm(newState);
    }

    const changeExpenseHandler=(obj)=>{
          const newExpenses=[...expenses];
          newExpenses.push(obj);
          setExpenses(newExpenses);
          changeAddExpenseFormHandler();

    }

    const expenseForm= addExpenseForm?<ExpenseForm
     addNewExpense={changeExpenseHandler} 
     cancelExpense={changeAddExpenseFormHandler}
    ></ExpenseForm>
    :<div className='add-expense'><button onClick={changeAddExpenseFormHandler}>Add Expense</button>
    </div>;
    
    
    return <div >
      {expenseForm} 
      <ExpenseItems expenses={expenses} />
      </div>
  }

export default Expenses;
