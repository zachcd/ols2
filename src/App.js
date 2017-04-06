import React, { Component } from 'react';
import MainHeader from './navigation/mainHeader.js';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

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
