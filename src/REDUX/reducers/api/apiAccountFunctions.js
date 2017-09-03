function Login(user, payload) {
  return Object.assign({},  user,  {
          username: payload.username,
          token: payload.token,
          status: "LoggedIn"
      })
}

function Register(user, payload) {
  return Object.assign({},  user,  {
          username: payload.username,
          token: payload.token,
          status: "LoggedIn"
      })
}

export {Login, Register}
