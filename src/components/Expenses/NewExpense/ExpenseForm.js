import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [title,setEnteredTitle]=useState('');
    const [amount,setEnteredAmount]=useState('');
    const [date,setEnteredDate]=useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
      };
    
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
      };
    
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
      };

    const submitHandler = (event) => {
        event.preventDefault();
        
    const expenseData = {
          'title': title,
          'amount': Number(amount),
          'date': new Date(date)
        };

        props.addNewExpense(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
      };

    return ( <div className='new-expense'>
    <form onSubmit={submitHandler} >
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={titleChangeHandler} value={title}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            onChange={amountChangeHandler}
            value={amount}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            onChange={dateChangeHandler}
            value={date}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={ props.cancelExpense} >Cancel</button>
        <button type='submit' >Add Expense</button>
      </div>
    </form>
    </div>
  );
};

export default ExpenseForm;