import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter,
  Route
} from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import MainNav from './MainNav'
import LinkedLogin from './Host/Login'
import LinkedRegister from './Host/Register'
import CardCollection from './CardCollection/CardCollection'
import OrgProfile from './Host/Organization/Profile'
import Main from './Host/Main'
import olsApp from './REDUX/reducers'
// import { sessionService } from 'redux-react-session';

//if Organization is opened

//if Organization is unopened
  //display organizations to select and a filter/search

let store = createStore(olsApp, /* preloadedState, */
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// sessionService.initSessionService(store);

console.log(store)
class App extends Component {

  constructor(props) {
  super(props);
  this.state = {
      modal: null
    };
    this.openLogin = this.openLogin.bind(this)
    this.openRegister = this.openRegister.bind(this)
    this.openCards = this.openCards.bind(this)
    this.close = this.close.bind(this)
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
        <div  className="App">
          <MainNav
            openLogin={this.openLogin}
            openRegister={this.openRegister}
            openCards={this.openCards}/>

            {this.state.modal}

            <div>
              <Route path="/pitt"
              render={() => <OrgProfile org="University of Pittsburgh" openCards={this.openCards} close={this.close} />} />
              <Route path="/" render={() => <Main openCards={this.openCards} close={this.close}/>}/>
            </div>
            </div>
        </BrowserRouter>
      </Provider>
    );
  }
  openLogin() {
    console.log("opening Login")
    this.setState({modal: <div className="modalWrapper"><LinkedLogin /></div>})
  }
  openRegister() {
    console.log("opening Register")
    this.setState({modal: <div className="modalWrapper"><LinkedRegister /></div>})
  }
  openCards() {
    this.setState({modal: <div className="modalWrapper"><CardCollection /></div>})
  }
  close() {
    this.setState({modal: null})
  }
}


export default App;
