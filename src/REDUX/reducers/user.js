import {LOGIN, LOGOUT, REGISTER, LINK_ACCOUNT} from '../actions/UserAccountActions'
import * as apiActions from '../actions/APIactions/APIUserActions'
import * as api from './api/apiAccountFunctions'

function user(state = false, action) {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        Register(state || {}, action.payload)
      }
    case LOGIN:
      return {
        ...state,
        Login(state || {}, action.payload)
      }
    case LINK_ACCOUNT:
      return {
        ...state,
        LinkAccount(state || {}, action.payload)
      }
    case LOGOUT:
      return false
    case apiActions.RECEIVE_LOGIN:
      return {
        ...state,
        api.Login(state || {}, action.payload)
      }
    case apiActions.FAIL_LOGIN:
      return {
        ...state,
        clearFail(state || {}, "LoginFailed")
      }
    case apiActions.RECEIVE_REGISTER:
      return {
        ...state,
        api.Register(state || {}, action.payload)
      }
    case apiActions.FAIL_REGISTER:
      return {
        ...state,
        clearFail(state || {}, "RegisterFailed")
      }
    default:
      return state
  }
}

function Register(user, payload) {
  return {
    ...user,
    ... {
      username : payload.username,
      password : payload.password,
      email : payload.email,
      status : "PendingRegistration"
    })
  }

  function Login(user, payload) {
    if (user.status !== "LoggedIn") {
      return {
        ...user, {
          status : "PendingAuthentication"
        })
      } else {
        return user
      }
    }
    function LinkAccount(user, payload) {
      return user
    }

    function clearFail(user, payload) {
      return {status: payload}
    }
    export default user
