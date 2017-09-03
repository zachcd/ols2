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
import LinkedMain from './Host/Main'
import olsApp, {olsEpics} from './REDUX/reducers'
import { createEpicMiddleware } from 'redux-observable';
import { compose, applyMiddleware } from 'redux';

// import { sessionService } from 'redux-react-session';

//if Organization is opened

//if Organization is unopened
  //display organizations to select and a filter/search
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const epicMiddleware = createEpicMiddleware(olsEpics);

const store = createStore(olsApp,
  composeEnhancers(
    applyMiddleware(epicMiddleware)
  )
);
// sessionService.initSessionService(store);

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
            openCards={this.openCards}
            center={true}/>

            {this.state.modal}

            <div>
              <Route path="/:org" render={() => <OrgProfile openCards={this.openCards}/>} />
              <Route path="/" render={() => <LinkedMain openCards={this.openCards}/>}/>
            </div>
            </div>
        </BrowserRouter>
      </Provider>
    );
  }
  openLogin() {
    console.log("opening Login")
    this.setState({modal: <div className="modalBackground" onClick={(e) => { if (e.target === e.currentTarget) { this.close()}}}><div className="modalWrapper"><LinkedLogin close={() => this.close()} /></div></div>})

  }
  openRegister() {
    console.log("opening Register")
    this.setState({modal: <div className="modalBackground" onClick={(e) => {if (e.target === e.currentTarget){ this.close()}}}><div className="modalWrapper"><LinkedRegister close={() => this.close()}/></div></div>})
  }
  openCards() {
    this.setState({modal: <CardCollection />})
  }
  close() {
    this.setState({modal: null})
  }
}


export default App;
