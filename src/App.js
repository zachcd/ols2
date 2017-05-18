import React, { Component } from 'react';
import MainHeader from './navigation/mainHeader.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './App.css';
import { Team } from 'team/team';
import { Schedule } from 'schedule/schedule';
import { Stats } from 'stats/stats';
import { Collection } from 'collection/collection';


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
