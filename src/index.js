import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './StateProvider/BsaketState'
import { BasketContextProvider } from './StateProvider/BsaketState';
import { initialState, reducer } from './Reducers/BasketReducer'
import Router from './Router/Router'


ReactDOM.render(
  <React.StrictMode>
    <BasketContextProvider initialState={initialState} reducer={reducer}>
      <App />
      <Router />
    </BasketContextProvider >
  </React.StrictMode>,
  document.getElementById('root')
);


