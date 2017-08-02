import {LOGIN, LOGOUT, REGISTER, LINK_ACCOUNT} from '../actions/UserAccountActions'

function user(state = false, action) {
  console.log(state)
  switch(action.type) {
    case REGISTER:
      return Object.assign({}, state, {
        user: Register(state.user || {}, action.payload)
      })
    case LOGIN:
      return Object.assign({}, state, {
        user: Login(state.user || {}, action.payload)
      })
    case LINK_ACCOUNT:
      return Object.assign({}, state, {
        user: LinkAccount(state.user || {}, action.payload)
      })
    case LOGOUT:
      return Object.assign({}, state, {
        user: LogOut(state.user || {}, action.payload)
      })
    default:
      return state
  }
}


function Register(user, payload) {
  console.log("fired")
  return Object.assign({},  user,  {
          username: payload.username,
          password: payload.password,
          email: payload.email,
          status: "PendingRegistration"
      })
}

function Login(user, payload) {
  return Object.assign({},  user,  {
          username: payload.username,
          password: payload.password,
          status: "PendingAuthentication"
      })
}
function LinkAccount(user, payload) {
  return user
}
function LogOut(user, payload) {
  return null
}

export default user
