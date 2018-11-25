import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import combineReducers from './reducers/data.jsx';


import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


const store = createStore(
  combineReducers,
  applyMiddleware(thunk)
)

// console.log(store.getState());

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
