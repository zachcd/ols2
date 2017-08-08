import React, { Component } from 'react';

import {connect} from 'react-redux'
import {Register as RegisterAction } from '../REDUX/actions/UserAccountActions'

class Register extends Component  {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      confirmPass: "",
      email: ""
    };
  }


  render() {
    return (
      <div className="modal">
        <form onSubmit={e => {
          e.preventDefault()
          if(this.state.password === this.state.confirmPass) {
            let user = {username: this.state.username, password: this.state.password, email: this.state.email}
            this.props.register(user)
          }

        }}>
          Username<input type="text" onChange={ event => {
            this.setState({username: event.target.value})
          }}></input> <br/>
          Password<input type="password" onChange={ event => {
            this.setState({password: event.target.value})
          }}></input><br/>
          Confirm Password<input type="password" onChange={ event => {
            this.setState({confirmPass: event.target.value})
          }}></input><br/>
          <PassCheck pass={this.state.password} confirm={this.state.confirmPass}/>
          Email<input type="text" onChange={ event => {
            this.setState({email: event.target.value})
          }}></input> <br />
          <button type="submit">
              Register Account
            </button>
          <StatusCheck status={this.props.userStatus} />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    register: user => {
      dispatch(RegisterAction(user))
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
const PassCheck = (props) => {
  if (props.pass !== props.confirm) {
    return <div style={{color: 'red'}}>Passwords must match</div>
  } else {
    return null
  }
}
const StatusCheck = (props) => {
  if (props.status === "AwaitingServer") {
    return <div> Awaiting a response from the server on your Registration</div>
  } else if (props.status === "RegisterFailed") {
    return <div> That username is reserved </div>
  } else if (props.status === "LoginFailed") {
    return <div> Yeah, you cant just use your League login </div>
  } else {
    return null
  }
}


const LinkedRegister = connect(
  mapStateToProps,
  mapDispatchToProps
)(Register)

export default LinkedRegister
