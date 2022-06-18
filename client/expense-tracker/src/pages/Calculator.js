import React from 'react'
import Title from '../components/Title'
import Balance from '../components/Balance';
import '../components/Hero.css'
import IncomeExpenses from '../components/IncomeExpenses';
import '../components/CalculatorStyles.css'
import TransactionList from '../components/TransactionList';
import AddTransaction from '../components/AddTransactions';
import {GlobalProvider} from '../context/GlobalState'


function Calculator (){
    return (
    <GlobalProvider>        
        <div className = "hero-container">    
          <div className="container">
            <Title/>
            <div className = "separator">
            <Balance/>
            </div>
            <pre>Income                              Expenses</pre>
            <IncomeExpenses/>
            <TransactionList/>    
            <AddTransaction/> 
          </div>      
        </div>      
    </GlobalProvider> 
    );
}
export default Calculator;