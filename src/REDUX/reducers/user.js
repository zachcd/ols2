import {LOGIN, LOGOUT, REGISTER, LINK_ACCOUNT} from '../actions/UserAccountActions'
import * as apiActions from '../actions/APIactions/APIUserActions'
import * as api from './api/apiAccountFunctions'

function user(state = false, action) {
  switch(action.type) {
    case REGISTER:
      return Object.assign({}, state, Register(state || {}, action.payload))
    case LOGIN:
      return Object.assign({}, state,  Login(state || {}, action.payload))
    case LINK_ACCOUNT:
      return Object.assign({}, state, LinkAccount(state || {}, action.payload)
      )
    case LOGOUT:
      return false
    case apiActions.RECEIVE_LOGIN:
      return Object.assign({}, state, api.Login(state || {}, action.payload)
        )
    case apiActions.FAIL_LOGIN:
      return Object.assign({}, state, clearFail(state || {}, "LoginFailed")
        )
    case apiActions.RECEIVE_REGISTER:
      return Object.assign({}, state, api.Register(state || {}, action.payload)
        )
    case apiActions.FAIL_REGISTER:
      return Object.assign({}, state, clearFail(state || {}, "RegisterFailed")
        )
    default:
      return state
  }
}


function Register(user, payload) {
  return Object.assign({},  user,  {
          username: payload.username,
          password: payload.password,
          email: payload.email,
          status: "PendingRegistration"
      })
}

function Login(user, payload) {
  return Object.assign({},  user,  {
          status: "PendingAuthentication"
      })
}
function LinkAccount(user, payload) {
  return user
}

function clearFail(user, payload) {
  return Object.assign({}, {
    status: payload
  })
}
export default user
