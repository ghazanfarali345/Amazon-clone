import { createContext, useContext, useReducer } from 'react'

export const Context = createContext(null);

export const ContextValue = () => useContext(Context);

export const BasketContextProvider = ({ children, reducer, initialState }) => {

    return (
        <Context.Provider value={useReducer(reducer, initialState)}>
            { children}
        </Context.Provider>
    )
} 