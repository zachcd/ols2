import React, { Component } from 'react';
import {Register} from './../REDUX/actions/UserAccountActions'
import connect from 'react-redux'


const Register = ({ dispatch }) => {

    let username
    let password
    let confirmPass


  return (
    <div className="modal">
      <form onSubmit={e => {
        e.preventDefault()
        if(this.password == this.confirmPass) {
          let user = {username: this.username, password: this.password, email: this.email}
          dispatch(Register(user))
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
        <button type="submit">
            Register Account
          </button>
      </form>
    </div>
  )
}


const LinkedRegister = connect(
  mapStateToProps,
  mapDispatchToProps
)(Register)

export default LinkedRegister
