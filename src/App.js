import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


//if Organization is opened

//if Organization is unopened
  //display organizations to select and a filter/search
class App extends Component {
  render() {
    return (
      <div className="App">
      <Link>Main </Link>
      <Link>Cards </Link>
        {Organization()}
      </div>
    );
  }
}


export default App;
