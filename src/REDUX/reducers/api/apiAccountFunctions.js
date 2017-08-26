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
