import React, { Component } from 'react';

import './accountAccessButton.css';

class AccountAccessButton extends Component {
  props: {
    isLoggedIn: Boolean,
    username: String
  }
  render() {
    if(this.props.isLoggedIn){
        return(
          <button id="user">
          {this.props.username}
        </button>
        )
      } else {
        return(
          <button id="login">
            Login/Signup
          </button>
        )
      }
  }
}

export default AccountAccessButton
