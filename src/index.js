import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import { Provider } from 'react-redux'
//import { createStore } from 'redux'
import {
  BrowserRouter as Router
} from 'react-router-dom'
//import olsApp from 'reducers/index'
import './index.css';

//let store = createStore()

ReactDOM.render(
  //<Provider store={store}>
    <Router>
      <App />
    </Router>
  //</Provider>
  ,
  document.getElementById('root')
);
