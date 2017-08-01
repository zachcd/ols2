export const SEND_LOGIN = 'SEND_LOGIN'

export const RECEIVE_LOGIN = 'RECEIVE_LOGIN'
export const FAIL_LOGIN = 'FAIL_LOGIN'

export const SEND_REGISTER ='SEND_REGISTER'

export const RECEIVE_REGISTER = 'RECEIVE_REGISTER'
export const FAIL_REGISTER = 'FAIL_REGISTER'

export function SendLogin (user) {
  return {
    type: SEND_LOGIN,
    payload: user
  }
}

export function ReceiveLogin (user) {
  return {
    type: RECEIVE_LOGIN,
    payload: user
  }
}

export function FailLogin (failInfo) {
  
}
