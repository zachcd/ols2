import React, { Component } from 'react';
import MainHeader from './navigation/mainHeader.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './App.css';
import { Team } from 'team/team.js';
import { Schedule } from 'schedule/schedule.js';
import { Stats } from 'stats/stats.js';
import { Collection } from 'collection/collection.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <MainHeader>
          </MainHeader>
        </div>
        <Route path="/" component={Collection}/>
        <Route path="/team" component={Team}/>
        <Route path="/schedule" component={Schedule}/>
        <Route path="/stats" component={Stats}/>
      </div>
    );
  }
}

export default App;
