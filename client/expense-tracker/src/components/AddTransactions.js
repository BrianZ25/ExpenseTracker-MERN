import React, {useState , useContext} from 'react'
import './CalculatorStyles.css'
import {GlobalContext} from '../context/GlobalState'

export const AddTransaction = () => {
    const[text, setText] = useState('');
    const[date, setDate] = useState('');
    const[amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();
    
        const newTransaction = {
            id: Math.floor(Math.random() * 10000000),
            text,
            amount: + amount
        }

    addTransaction(newTransaction)
}

    return(
    <>
        <h3>Enter new transaction</h3>
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="text">Transaction Name</label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..."/>
            </div>
            <div className= "form-control">
                <label htmlFor="amount">Amount<br/>
                (negative - expense, positive - income)</label>
                <input type = "number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..."/>
            </div>
            <div className = "form-control">
                <label htmlFor="date">Date<br/>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Enter date..."/>
                </label>
            </div>
            <button className="btn">Add transaction</button>
        </form>
    </>
    )
}

export default AddTransaction