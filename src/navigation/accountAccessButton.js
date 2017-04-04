import React, { Component } from 'react';

class accountAccessButton extends Component {
  render() {
    if(isLoggedIn){
        return(
          <span id="user">
          {{username}}
          </span>
        )
      } else {
        return(
          <span id="login">
            Login/Signup
          </span>
        )
      }
  }
}

accountAccessButton.propTypes = {
  isLoggedIn: PropTypes.bool.isLoggedIn,
  username: PropTypes.string.username
}

export default accountAccessButton
