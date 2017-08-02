import React from 'react';

import {connect} from 'react-redux'


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
          let user = {username: username, password: password, email: email}
          props.register(user)
        }

      }}>
        <input type="text" ref={ node => {
          username = node
        }}></input>
        <input type="text" ref={ node => {
          password = node
        }}></input>
        <input type="text" ref={ node => {
          confirmPass = node
        }}></input>
        <input type="text" ref={ node => {
          email = node
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
      dispatch(user)
    }
  }
}


const LinkedRegister = connect(
  mapDispatchToProps
)(Register)

export default LinkedRegister
