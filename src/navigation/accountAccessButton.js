import React, { Component } from 'react';
import { connect } from 'react-redux'
import './accountAccessButton.css';

class accountAccessButton extends Component {
  props: {
    isLoggedIn: Boolean,
    username: String
  }

  static mapStateToProps (state) {
    console.log(state);
    return {
      isLoggedIn: state.user.loggedIn,
      username: state.user.username
    }
  }
  render() {
    if(this.props.isLoggedIn){
        return(
          <span id="user">
          {this.props.username}
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

export default connect(accountAccessButton.mapStateToProps)(accountAccessButton)
