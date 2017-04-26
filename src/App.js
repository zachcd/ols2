import React, { Component } from 'react';
import MainHeader from './navigation/mainHeader.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <MainHeader>
          </MainHeader>
        </div>
      </div>
    );
  }
}

export default App;
