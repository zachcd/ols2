import React from 'react';

import {connect} from 'react-redux'
import {Register as RegisterAction } from '../REDUX/actions/UserAccountActions'


const Register = (props) => {

    let username
    let password
    let confirmPass
    let email


  return (
    <div className="modal">
      <form onSubmit={e => {
        e.preventDefault()
        if(password === confirmPass) {
          console.log("password match")
          let user = {username: username, password: password, email: email}
          props.register(user)
        }

      }}>
        Username<input type="text" ref={ node => {
          username = node.value
        }}></input> <br/>
        Password<input type="text" ref={ node => {
          password = node.value
        }}></input><br/>
        Confirm Password<input type="text" ref={ node => {
          confirmPass = node.value
        }}></input><br/>
        Email<input type="text" ref={ node => {
          email = node.value
        }}></input>
        <button type="submit">
            Register Account
          </button>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    register: user => {
      dispatch(RegisterAction(user))
    }
  }
}


const LinkedRegister = connect(
  null,
  mapDispatchToProps
)(Register)

export default LinkedRegister
