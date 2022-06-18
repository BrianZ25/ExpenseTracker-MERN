import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'
import axios from 'axios' 

const initialState = {
    transactions: [],
    errpr: null,
    loading: true
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state,dispatch] = useReducer(AppReducer, initialState);

    async function getTransactions(){
        try{
            const res = await axios.get('/api/items');
            dispatch({
                type: 'GET_TRANSACTIONS',
                payload: res.data.data
            });
        } catch (err){
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            });
        }
    }
    async function deleteTransaction(id){
        try {
            await axios.delete(`/api/items/${id}`);
            dispatch({
                type:"Delete_Transaction",
                payload: id
            });
        } catch(err){
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            });
        }
    }
    async function addTransaction(transaction){
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/api/items', transaction, config);
            dispatch({
                type:"Add_Transaction",
                payload: res.data.data
            });
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            });
        }
    }

    return(<GlobalContext.Provider value = {{
            transactions:state.transactions,
            error:state.error,
            loading: state.loading,
            getTransactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalProvider