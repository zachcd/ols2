export const LOGIN = 'LOGIN'
export const REGISTER ='REGISTER'
export const LINK_ACCOUNT = 'LINK_ACCOUNT'
export const LOGOUT = 'LOGOUT'

export function Login(username, password) {
  return { type: LOGIN,
    payload:
    {
      username: username,
      password: password
    }
  }
}
export function Logout() {
  return { type: LOGOUT,
    payload: {
      logout: true
    }
  }
}
export function Register(userDetails) {
  return { type: REGISTER,
    payload:
    {
      username: userDetails.username,
      password: userDetails.password,
      email: userDetails.email,
    }
  }
}

export function LinkAccount(summoner) {
  return { type: LINK_ACCOUNT,
    payload:
    {
      summoner: summoner.name
    }
  }
}