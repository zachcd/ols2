export const RECEIVE_LOGIN = 'RECEIVE_LOGIN'
export const FAIL_LOGIN = 'FAIL_LOGIN'


export function ReceiveLogin (user) {
  return {
    type: RECEIVE_LOGIN,
    payload: user
  }
}

export function FailLogin (failInfo) {
  return {
    type: FAIL_LOGIN,
    payload: failInfo
  }
}

export const RECEIVE_REGISTER = 'RECEIVE_REGISTER'
export const FAIL_REGISTER = 'FAIL_REGISTER'


export function ReceiveRegister (user) {
  return {
    type: RECEIVE_REGISTER,
    payload: user
  }
}

export function FailRegister (failInfo) {
  return {
    type: FAIL_REGISTER,
    payload: failInfo
  }
}



export const SEND_LINK = 'SEND_LINK'

export const RECEIVE_LINK = 'RECEIVE_LINK'
export const FAIL_LINK = 'FAIL_LINK'


export function SendLink (user, accountInfo, runePage) {
  return {
    type: SEND_LINK,
    payload: {
      token: user.token,
      account: accountInfo,
      runePageName: runePage
    }
  }
}

export function ReceiveLink (accountInfo) {
  return {
    type: RECEIVE_LINK,
    payload: {
      account: accountInfo.name,
      id: accountInfo.id
    }
  }
}

export function FailLink (accountInfo, runePageName) {
  return {
    type: FAIL_LINK,
    payload: {
      runePage: runePageName,
      account: accountInfo.name
    }
  }
}
