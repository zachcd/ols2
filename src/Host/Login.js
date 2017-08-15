import React, { Component } from 'react';

import {connect} from 'react-redux'
import {Login as LoginAction } from '../REDUX/actions/UserAccountActions'
import { Button, Input } from 'semantic-ui-react'
import './Login.css'

class Login extends Component  {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }


  render() {
    return (
      <div className="modal">
        <form onSubmit={e => {
          e.preventDefault()
          if(this.state.password) {
            let user = {username: this.state.username, password: this.state.password}
            this.props.register(user)
          }

        }}>
          <Input type="text" onChange={ event => {
            this.setState({username: event.target.value})
          }} icon='user' iconPosition='left' placeholder='Username'></Input> <br/>
          <Input type="password" onChange={ event => {
            this.setState({password: event.target.value})
          }} icon='lock' iconPosition='left' placeholder='Password'></Input><br/>
          <Button type="submit">
              Login
            </Button>
          <StatusCheck status={this.props.userStatus} />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    register: user => {
      dispatch(LoginAction(user))
    }
  }
}

const getStatus = (user) => {
  if (user) {
    if (user.status) {
      return user.status
    } else {
      return null
    }
  } else {
    return null
  }
}

const mapStateToProps = state => {
  return {
    userStatus: getStatus(state.user)
  }
}
const StatusCheck = (props) => {
  if (props.status === "AwaitingServer") {
    return <div> Awaiting a response from the server on your Login</div>
  } else if (props.status === "LoginFailed") {
    return <div> Login Failed </div>
  } else {
    return null
  }
}


const LinkedLogin = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

export default LinkedLogin
