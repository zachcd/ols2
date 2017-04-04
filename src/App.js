import React, { Component } from 'react';
import mainHeader from './navigation/mainHeader.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <mainHeader>
          </mainHeader>
        </div>
      </div>
    );
  }
}

export default App;
