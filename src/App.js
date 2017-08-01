import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Provider } from 'react-redux'
import MainNav from './MainNav'
import LinkedLogin from './Host/Login'
import LinkedRegister from './Host/Register'
import CardCollection from './CardCollection/CardCollection'
import OrgProfile from './Host/Main.js'

//if Organization is opened

//if Organization is unopened
  //display organizations to select and a filter/search

class App extends Component {
  let modal = null
  let store = createStore()
  render() {
    return (
      <Provider store={this.store}>
        <BrowserRouter>
          <MainNav openLogin={this.openLogin} openRegister={this.openRegister} openCards={this.openCards}/>
            {modal}
            <div className="App">
              <Route path="/pitt" render={() => <OrgProfile org="University of Pittsburgh" openCards={this.openCards} close={this.close}} />
              <Route path="/" render={() => <Main openCards={this.openCards} close={this.close}/>}/>
            </div>

        </BrowserRouter>
      </Provider>
    );
  }
  openLogin() {
    this.modal = <div className="modalWrapper"><LinkedLogin /></div>
  }
  openRegister() {
    this.modal = <div className="modalWrapper"><LinkedRegister /></div>
  }
  openCards() {
    this.modal = <div className="modalWrapper"><CardCollection /></div>
  }
  close() {
    modal = null
  }
}


export default App;
