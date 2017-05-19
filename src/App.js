import React, { Component } from 'react';
import MainHeader from './navigation/mainHeader.js';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './App.css';
import Team from './Team/Team';
import Schedule from './Schedule/Schedule';
import Stats from './Stats/Stats';
import Collection from './collection/collection';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <div className="App-header">
            <MainHeader>
            </MainHeader>
          </div>

          <Route path="/team" component={Team}/>
          <Route path="/schedule" component={Schedule}/>
          <Route path="/stats" component={Stats}/>
        </div>
      </Router>
    );
  }
}

export default App;
