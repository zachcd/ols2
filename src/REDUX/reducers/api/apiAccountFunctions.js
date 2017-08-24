export function sendLogin(state, action) {
  console.log("sending Login")
}

export function sendRegister(state, action){
  console.log("sending register")
}

export function Login(user, payload) {
  return Object.assign({},  user,  {
          username: payload.username,
          status: "LoggedIn"
      })
}

export function Register(user, payload) {
  return Object.assign({},  user,  {
          username: payload.username,
          status: "LoggedIn"
      })
}
