import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux';

const initialState = {
    items: [
        {
            id: 0,
            name: "Hello, and welcome!"
        },
        {
            id: 1,
            name: "This worlds simplest React/Redux example!"
        },
        {
            id: 2,
            name: "All you can do is delete an item."
        },
        {
            id: 3,
            name: "You do it by clicking an item here."
        },
        {
            id: 4,
            name: "Go ahead and try it out!"
        }
    ]
}


function items(state = {}, action) {
    switch (action.type) {
    case "DELETE_ITEM":
        return state.filter(item => item.id !== action.id);
    default:
        return state;
    }
}

let store = createStore(combineReducers({items}), initialState)

ReactDOM.render(
     <Provider store={store}>
         <App />
    </Provider>,
  document.getElementById('root')
);
