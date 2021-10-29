import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import allReducers from './reducers'
import { Provider } from 'react-redux';

const store = createStore(allReducers);

//Redux stuff
// import { createStore } from 'redux';

// //store -> Global state

// //action -> describe what u wanna do (eg. increment)
// const increment = () => {
//   return {
//     type: 'INCREMENT'
//   };
// };

// const decrement = () => {
//   return {
//     type: 'DECREMENT'
//   };
// };

// //reducer -> state turns into a new state
// const counter = (state = 0, action) => {
//   switch(action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//   }
// };

// let store = createStore(counter);

// //displaying on the console
// store.subscribe(() => console.log(store.getState()));

// //dispatch -> executing the action
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(decrement());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);